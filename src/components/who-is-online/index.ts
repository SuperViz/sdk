import { PresenceEvents } from '@superviz/socket-client';
import { isEqual } from 'lodash';

import { RealtimeEvent, WhoIsOnlineEvent } from '../../common/types/events.types';
import { Avatar } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { Following } from '../../services/stores/who-is-online/types';
import { WhoIsOnline as WhoIsOnlineElement } from '../../web-components';
import { DropdownOption } from '../../web-components/dropdown/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import {
  WhoIsOnlinePosition,
  Position,
  Participant,
  WhoIsOnlineOptions,
  TooltipData,
  WIODropdownOptions,
} from './types';

export class WhoIsOnline extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: WhoIsOnlineElement;
  private position: WhoIsOnlinePosition;
  private following: Following;
  private localParticipantId: string;

  constructor(options?: WhoIsOnlinePosition | WhoIsOnlineOptions) {
    super();

    this.name = ComponentNames.WHO_IS_ONLINE;
    this.logger = new Logger('@superviz/sdk/who-is-online-component');

    if (typeof options !== 'object') {
      this.position = options ?? Position.TOP_RIGHT;
      return;
    }

    this.position = options.position ?? Position.TOP_RIGHT;
    this.setStyles(options.styles);

    const {
      disablePresenceControls,
      disableGoToParticipant,
      disableFollowParticipant,
      disablePrivateMode,
      disableGatherAll,
      disableFollowMe,
      extras,
    } = this.useStore(StoreType.WHO_IS_ONLINE);

    disablePresenceControls.publish(options.flags?.disablePresenceControls);
    disableGoToParticipant.publish(options.flags?.disableGoToParticipant);
    disableFollowParticipant.publish(options.flags?.disableFollowParticipant);
    disablePrivateMode.publish(options.flags?.disablePrivateMode);
    disableGatherAll.publish(options.flags?.disableGatherAll);
    disableFollowMe.publish(options.flags?.disableFollowMe);
  }

  /**
   * @function start
   * @description Initializes the Who Is Online component
   * @returns {void}
   */
  protected start(): void {
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe((value: { id: string }) => {
      this.localParticipantId = value.id;
    });

    this.subscribeToRealtimeEvents();
    this.positionWhoIsOnline();
    this.addListeners();

    this.realtime.enterWIOChannel(localParticipant.value);
  }

  /**
   * @function destroy
   * @description Destroys the Who Is Online component
   * @returns {void}
   */
  protected destroy(): void {
    this.unsubscribeToRealtimeEvents();
    this.realtime.leaveWIOChannel();
    this.removeListeners();
    this.element.remove();
    this.element = null;
  }

  /**
   * @function addListeners
   * @description adds event listeners to the who is online element.
   * @returns {void}
   */
  private addListeners(): void {
    this.element.addEventListener(
      RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT,
      this.followMousePointer,
    );
    this.element.addEventListener(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMousePointer);
    this.element.addEventListener(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setPrivate);
    this.element.addEventListener(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, this.follow);
    this.element.addEventListener(RealtimeEvent.REALTIME_GATHER, this.gather);
  }

  /**
   * @function removeListeners
   * @description adds event listeners from the who is online element.
   * @returns {void}
   */
  private removeListeners(): void {
    this.element.removeEventListener(
      RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT,
      this.followMousePointer,
    );
    this.element.removeEventListener(
      RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
      this.goToMousePointer,
    );
    this.element.removeEventListener(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setPrivate);
    this.element.removeEventListener(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, this.follow);
    this.element.removeEventListener(RealtimeEvent.REALTIME_GATHER, this.gather);
    this.room.presence.off(PresenceEvents.UPDATE);
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description Subscribes to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {
    this.realtime.participantsObserver.subscribe(this.onParticipantListUpdate);
    this.realtime.participantLeaveObserver.subscribe(this.stopFollowing);
    this.realtime.privateModeWIOObserver.subscribe(this.onParticipantListUpdate);
    this.realtime.followWIOObserver.subscribe(this.setFollow);
    this.realtime.gatherWIOObserver.subscribe(this.goToMousePointer);
  }

  /**
   * @function unsubscribeToRealtimeEvents
   * @description Unsubscribes to realtime events
   * @returns {void}
   */
  private unsubscribeToRealtimeEvents(): void {
    this.realtime.participantsObserver.unsubscribe(this.onParticipantListUpdate);
    this.realtime.participantLeaveObserver.unsubscribe(this.stopFollowing);
    this.realtime.privateModeWIOObserver.unsubscribe(this.onParticipantListUpdate);
    this.realtime.followWIOObserver.unsubscribe(this.setFollow);
    this.realtime.gatherWIOObserver.unsubscribe(this.goToMousePointer);
  }

  /**
   * @function onParticipantListUpdate
   * @description Receives data about participants in the room who were not loaded
   * when the component was initialized
   * @param {Record<string, AblyParticipant>} data
   * @returns {void}
   */
  private onParticipantListUpdate = (data: Record<string, AblyParticipant>): void => {
    const updatedParticipants = this.filterParticipants(Object.values(data));

    const mappedParticipants = updatedParticipants.map((participant) =>
      this.getParticipant(participant),
    );

    const remainingParticipants = this.setParticipants(mappedParticipants);
    this.setExtras(remainingParticipants);
  };

  /**
   * @function setStyles
   * @param {string} styles - The user custom styles to be added to the who is online
   * @returns {void}
   */
  private setStyles(styles: string = '') {
    if (!styles) return;

    const tag = document.createElement('style');
    tag.textContent = styles;
    tag.id = 'superviz-who-is-online-styles';

    document.head.appendChild(tag);
  }

  /**
   * @function positionWhoIsOnline
   * @description Positions the Who Is Online component on the screen
   * @returns {void}
   */
  private positionWhoIsOnline(): void {
    this.element = document.createElement('superviz-who-is-online') as WhoIsOnlineElement;
    const isUsingDefaultPosition = Object.values(Position).includes(
      this.position.toLowerCase() as Position,
    );

    if (isUsingDefaultPosition) {
      document.body.appendChild(this.element);
      const [vertical, horizontal] = this.position.split('-');
      this.element.position = `${vertical}: 20px; ${horizontal}: 40px;`;
      return;
    }

    const container = document.getElementById(this.position);

    if (!container) {
      this.element.position = 'top: 20px; right: 40px;';
      document.body.appendChild(this.element);
      return;
    }

    container.appendChild(this.element);
    this.element.position = 'position: relative;';
  }

  /**
   * @function goToMousePointer
   * @description Publishes the go to event to the event bus
   * @param {CustomEvent} event
   * @returns {void}
   */
  private goToMousePointer = ({ detail: { id } }: CustomEvent) => {
    if (id === this.localParticipantId) return;

    this.eventBus.publish(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, id);
    this.publish(WhoIsOnlineEvent.GO_TO_PARTICIPANT, id);
  };

  /**
   * @function followMousePointer
   * @description Publishes the follow event to the event bus
   * @param {CustomEvent} event
   * @returns {void}
   */
  private followMousePointer = ({ detail }: CustomEvent) => {
    this.eventBus.publish(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, detail.id);

    const { participants, following } = this.useStore(StoreType.WHO_IS_ONLINE);

    if (this.following) {
      this.publish(WhoIsOnlineEvent.START_FOLLOWING_PARTICIPANT, this.following);
    }

    if (!this.following) {
      this.publish(WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT);
    }

    participants.publish(
      participants.value.map((participant: Participant) => {
        const participantId = participant.id;
        const disableDropdown = this.shouldDisableDropdown({
          activeComponents: participant.activeComponents,
        });
        const presenceEnabled = !disableDropdown;
        const controls = this.getControls({ participantId, presenceEnabled }) ?? [];

        return {
          ...participant,
          controls,
        };
      }),
    );
  };

  /**
   * @function setPrivate
   * @description Publishes the private event to realtime and the event bus
   * @param {CustomEvent} event
   * @returns {void}
   */
  private setPrivate = ({ detail: { isPrivate, id } }: CustomEvent) => {
    const { privateMode } = this.useStore(StoreType.WHO_IS_ONLINE);
    privateMode.publish(isPrivate);

    this.eventBus.publish(RealtimeEvent.REALTIME_PRIVATE_MODE, isPrivate);
    this.realtime.setPrivateWIOParticipant(id, isPrivate);

    if (isPrivate) {
      this.publish(WhoIsOnlineEvent.ENTER_PRIVATE_MODE);
    }

    if (!isPrivate) {
      this.publish(WhoIsOnlineEvent.LEAVE_PRIVATE_MODE);
    }
  };

  private setFollow = (followingData) => {
    if (followingData.clientId === this.localParticipantId) return;

    this.followMousePointer({ detail: { id: followingData?.data?.id } } as CustomEvent);
    const { following } = this.useStore(StoreType.WHO_IS_ONLINE);

    if (!followingData.data.id) {
      following.publish(undefined);
      return;
    }

    following.publish(followingData.data);
  };

  private follow = (data: CustomEvent) => {
    const { everyoneFollowsMe, participants } = this.useStore(StoreType.WHO_IS_ONLINE);
    everyoneFollowsMe.publish(!!data.detail?.id);

    this.realtime.setFollowWIOParticipant({ ...data.detail });

    if (this.following) {
      this.publish(WhoIsOnlineEvent.START_FOLLOW_ME, this.following);
    }

    if (!this.following) {
      this.publish(WhoIsOnlineEvent.STOP_FOLLOW_ME);
    }

    participants.publish(
      participants.value.map((participant) => {
        if (participant.id !== this.localParticipantId) return participant;

        const controls = this.getLocalParticipantControls();
        return {
          ...participant,
          controls,
        };
      }),
    );
  };

  private stopFollowing = (participant: { clientId: string }) => {
    if (participant.clientId !== this.following?.id) return;

    const { following } = this.useStore(StoreType.WHO_IS_ONLINE);
    following.publish(undefined);

    this.eventBus.publish(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, undefined);
    this.publish(WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT);
  };

  private gather = (data: CustomEvent) => {
    this.realtime.setGatherWIOParticipant({ ...data.detail });
    this.publish(WhoIsOnlineEvent.GATHER_ALL, data.detail.id);
  };

  private filterParticipants(participants: AblyParticipant[]) {
    return participants.filter(({ data: { activeComponents, id, isPrivate } }) => {
      if (isPrivate && this.localParticipantId !== id) return false;

      const isLocal = id === this.localParticipantId;

      if (isLocal) {
        const hasPresenceComponent = activeComponents?.some((component) =>
          component.includes('presence'),
        );
        const { joinedPresence } = this.useStore(StoreType.WHO_IS_ONLINE);
        joinedPresence.publish(hasPresenceComponent);
      }

      return activeComponents?.includes('whoIsOnline') || isLocal;
    });
  }

  private getParticipant(participant: AblyParticipant): Participant {
    const { avatar: avatarLinks, activeComponents, participantId, name } = participant.data;
    const isLocalParticipant = participant.clientId === this.localParticipantId;

    const { color } = this.realtime.getSlotColor(participant.data.slotIndex);
    const disableDropdown = this.shouldDisableDropdown({ activeComponents });
    const presenceEnabled = !disableDropdown;

    const tooltip = this.getTooltipData({ isLocalParticipant, name, presenceEnabled });
    const avatar = this.getAvatar({ avatar: avatarLinks, color, name });
    const controls = this.getControls({ participantId, presenceEnabled }) ?? [];

    return {
      id: participantId,
      name,
      avatar,
      disableDropdown,
      tooltip,
      controls,
      activeComponents,
      isLocalParticipant,
    };
  }

  private shouldDisableDropdown({ activeComponents }: { activeComponents: string[] | undefined }) {
    const { joinedPresence, disablePresenceControls } = this.useStore(StoreType.WHO_IS_ONLINE);
    if (joinedPresence.value === false || disablePresenceControls.value === true) return true;

    return !activeComponents?.some((component) => component.toLowerCase().includes('presence'));
  }

  private getTooltipData({
    isLocalParticipant,
    name,
    presenceEnabled,
  }: {
    isLocalParticipant: boolean;
    name: string;
    presenceEnabled: boolean;
  }): TooltipData {
    const data: TooltipData = { name };

    if (isLocalParticipant) {
      data.name += ' (You)';
    }

    if (presenceEnabled && !isLocalParticipant) {
      data.info = 'Click to follow';
    }

    return data;
  }

  private getAvatar({ avatar, color, name }: { avatar: Avatar; name: string; color: string }) {
    const imageUrl = avatar?.imageUrl;
    const firstLetter = name?.at(0).toUpperCase() ?? 'A';

    return { imageUrl, firstLetter, color };
  }

  private getControls({
    participantId,
    presenceEnabled,
  }: {
    participantId: string;
    presenceEnabled: boolean;
  }): DropdownOption[] | undefined {
    const { disablePresenceControls } = this.useStore(StoreType.WHO_IS_ONLINE);

    if (disablePresenceControls.value || !presenceEnabled) return;

    if (participantId === this.localParticipantId) {
      return this.getLocalParticipantControls();
    }

    return this.getOtherParticipantsControls(participantId);
  }

  private getOtherParticipantsControls(participantId: string): DropdownOption[] {
    const { disableGoToParticipant, disableFollowParticipant, following } = this.useStore(
      StoreType.WHO_IS_ONLINE,
    );

    const controls: DropdownOption[] = [];

    if (!disableGoToParticipant.value) {
      controls.push({ option: WIODropdownOptions['GOTO'], icon: 'place' });
    }

    if (!disableFollowParticipant.value) {
      const isBeingFollowed = following.value?.id === participantId;
      const option = isBeingFollowed
        ? WIODropdownOptions['LOCAL_UNFOLLOW']
        : WIODropdownOptions['LOCAL_FOLLOW'];
      const icon = isBeingFollowed ? 'send-off' : 'send';
      controls.push({ option, icon });
    }

    return controls;
  }

  private getLocalParticipantControls(): DropdownOption[] {
    const {
      disableFollowMe: { value: disableFollowMe },
      disableGatherAll: { value: disableGatherAll },
      disablePrivateMode: { value: disablePrivateMode },
      everyoneFollowsMe: { value: everyoneFollowsMe },
      privateMode: { value: privateMode },
    } = this.useStore(StoreType.WHO_IS_ONLINE);

    const controls: DropdownOption[] = [];

    if (!disableGatherAll) {
      controls.push({ option: WIODropdownOptions['GATHER'], icon: 'gather' });
    }

    if (!disableFollowMe) {
      const icon = everyoneFollowsMe ? 'send-off' : 'send';
      const option = everyoneFollowsMe
        ? WIODropdownOptions['UNFOLLOW']
        : WIODropdownOptions['FOLLOW'];

      controls.push({ option, icon });
    }

    if (!disablePrivateMode) {
      const icon = privateMode ? 'eye_inative' : 'eye';
      const option = privateMode
        ? WIODropdownOptions['LEAVE_PRIVATE']
        : WIODropdownOptions['PRIVATE'];

      controls.push({ option, icon });
    }

    return controls;
  }

  private setParticipants = (participantsList: Participant[]): Participant[] => {
    const { participants } = this.useStore(StoreType.WHO_IS_ONLINE);

    const localParticipantIndex = participantsList.findIndex(({ id }) => {
      return id === this.localParticipantId;
    });

    const localParticipant = participantsList.splice(localParticipantIndex, 1);
    const otherParticipants = participantsList.splice(0, 3);
    participants.publish([...localParticipant, ...otherParticipants]);
    return participantsList;
  };

  private setExtras = (participantsList: Participant[]) => {
    const { extras } = this.useStore(StoreType.WHO_IS_ONLINE);
    extras.publish(participantsList);
  };
}
