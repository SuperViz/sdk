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

    const {
      disablePresenceControls,
      disableGoToParticipant,
      disableFollowParticipant,
      disablePrivateMode,
      disableGatherAll,
      disableFollowMe,
      following,
    } = this.useStore(StoreType.WHO_IS_ONLINE);

    following.subscribe();

    if (typeof options !== 'object') {
      this.position = options ?? Position.TOP_RIGHT;
      return;
    }

    if (typeof options === 'object') {
      this.position = options.position ?? Position.TOP_RIGHT;
      this.setStyles(options.styles);

      disablePresenceControls.publish(options.disablePresenceControls);
      disableGoToParticipant.publish(options.disableGoToParticipant);
      disableFollowParticipant.publish(options.disableFollowParticipant);
      disablePrivateMode.publish(options.disablePrivateMode);
      disableGatherAll.publish(options.disableGatherAll);
      disableFollowMe.publish(options.disableFollowMe);
    }
  }

  /**
   * @function start
   * @description Initializes the Who Is Online component
   * @returns {void}
   */
  protected start(): void {
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe((participant) => {
      this.localParticipantId = participant.id;
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

    const { destroy } = this.useStore(StoreType.WHO_IS_ONLINE);
    destroy();
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

    if (this.following) {
      this.publish(WhoIsOnlineEvent.START_FOLLOWING_PARTICIPANT, this.following);
    }

    if (!this.following) {
      this.publish(WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT);
    }

    if (detail.source === 'extras') {
      this.highlightParticipantBeingFollowed();
    }

    this.updateParticipantsControls(detail.id);
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

  /**
   * @function setFollow
   * @description Sets participant being followed after someone used Everyone Follows Me
   * @param followingData
   * @returns
   */
  private setFollow = (followingData: AblyParticipant) => {
    if (followingData.clientId === this.localParticipantId) return;

    const data = followingData.data?.id ? followingData.data : undefined;
    const { following } = this.useStore(StoreType.WHO_IS_ONLINE);
    following.publish(data);

    this.followMousePointer({ detail: { id: data?.id } } as CustomEvent);
  };

  private follow = ({ detail }: CustomEvent) => {
    const { everyoneFollowsMe } = this.useStore(StoreType.WHO_IS_ONLINE);
    everyoneFollowsMe.publish(!!detail?.id);

    this.realtime.setFollowWIOParticipant({ ...detail });

    if (this.following) {
      this.publish(WhoIsOnlineEvent.START_FOLLOW_ME, this.following);
    }

    if (!this.following) {
      this.publish(WhoIsOnlineEvent.STOP_FOLLOW_ME);
    }

    this.updateParticipantsControls(detail?.id);
  };

  /**
   * @function stopFollowing
   * @description Stops following a participant
   * @param {AblyParticipant} participant The message sent from Ably (in case of being called as a callback)
   * @param {boolean} stopEvent A flag that stops the "stop following" event from being published to the user
   * @returns
   */
  private stopFollowing = (participant: { clientId: string }, stopEvent?: boolean) => {
    if (participant.clientId !== this.following?.id) return;

    const { following } = this.useStore(StoreType.WHO_IS_ONLINE);
    following.publish(undefined);

    this.eventBus.publish(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, undefined);

    if (stopEvent) return;

    this.publish(WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT);
  };

  /**
   * @function gather
   * @description Propagates the gather all event in the room
   * @param {CustomEvent} data The custom event object containing data about the participant calling for the gather all
   */
  private gather = (data: CustomEvent) => {
    this.realtime.setGatherWIOParticipant({ ...data.detail });
    this.publish(WhoIsOnlineEvent.GATHER_ALL, data.detail.id);
  };

  /**
   * @function filterParticipants
   * @description Removes all participants in the room that shouldn't be shown as part of the Who Is Online component, either because they are private, or because they don't have the component active
   * @param {AblyParticipant[]} participants The list of participants that will be filtered
   * @returns {AblyParticipant[]}
   */
  private filterParticipants(participants: AblyParticipant[]): AblyParticipant[] {
    return participants.filter(({ data: { activeComponents, id, isPrivate } }) => {
      if (isPrivate && this.localParticipantId !== id) {
        this.stopFollowing(id, true);
        return false;
      }

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

  /**
   * @function getParticipant
   * @description Accomodates the data from a participant coming from Ably to something used in Who Is Online.
   * @param {AblyParticipant} participant The participant that will be analyzed
   * @returns {Participant} The data that will be used in the Who Is Online component the most
   */
  private getParticipant(participant: AblyParticipant): Participant {
    const { avatar: avatarLinks, activeComponents, participantId, name } = participant.data;
    const isLocalParticipant = participant.clientId === this.localParticipantId;
    const { slotIndex } = participant.data;
    const { color } = this.realtime.getSlotColor(slotIndex);
    const disableDropdown = this.shouldDisableDropdown({ activeComponents, participantId });
    const presenceEnabled = !disableDropdown;

    const tooltip = this.getTooltipData({ isLocalParticipant, name, presenceEnabled });
    const avatar = this.getAvatar({ avatar: avatarLinks, color, name, slotIndex });
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

  /**
   * @function shouldDisableDropdown
   * @description Decides whether the dropdown with presence controls should be available in a given participant, varying whether they have a presence control enabled or not
   * @param {activeComponents: string[] | undefined; participantId: string;} data Info regarding the participant that will be used to decide if their avatar will be clickable
   * @returns {boolean} True or false depending if should disable the participant dropdown or not
   */
  private shouldDisableDropdown({
    activeComponents,
    participantId,
  }: {
    activeComponents: string[] | undefined;
    participantId: string;
  }) {
    const {
      joinedPresence: { value: joinedPresence },
      disablePresenceControls: { value: disablePresenceControls },
      disableFollowMe: { value: disableFollowMe },
      disableFollowParticipant: { value: disableFollowParticipant },
      disableGoToParticipant: { value: disableGoToParticipant },
      disableGatherAll: { value: disableGatherAll },
      disablePrivateMode: { value: disablePrivateMode },
    } = this.useStore(StoreType.WHO_IS_ONLINE);

    if (
      joinedPresence === false ||
      disablePresenceControls === true ||
      (participantId === this.localParticipantId &&
        disableFollowMe &&
        disablePrivateMode &&
        disableGatherAll) ||
      (participantId !== this.localParticipantId &&
        disableFollowParticipant &&
        disableGoToParticipant)
    )
      return true;

    return !activeComponents?.some((component) => component.toLowerCase().includes('presence'));
  }

  /**
   * @function getTooltipData
   * @description Processes the participant info and discovers how the tooltip message should looking when hovering over their avatars
   * @param {isLocalParticipant: boolean; name: string; presenceEnabled: boolean } data Relevant info about the participant that will be used to decide
   * @returns {TooltipData} What the participant tooltip will look like
   */
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

  /**
   * @function getAvatar
   * @description Processes the info of the participant's avatar
   * @param { avatar: Avatar; name: string; color: string; slotIndex: number } data Information about the participant that will take part in their avatar somehow
   * @returns {Avatar} Information used to decide how to construct the participant's avatar html
   */
  private getAvatar({
    avatar,
    color,
    name,
    slotIndex,
  }: {
    avatar: Avatar;
    name: string;
    color: string;
    slotIndex: number;
  }) {
    const imageUrl = avatar?.imageUrl;
    const firstLetter = name?.at(0)?.toUpperCase() ?? 'A';

    return { imageUrl, firstLetter, color, slotIndex };
  }

  /**
   * @function getControls
   * @description Decides which presence controls the user should see when opening a participant dropdown
   * @param { participantId: string; presenceEnabled: boolean } data Relevant info about the participant that will be used to decide
   * @returns {DropdownOption[]} The presence controls enabled for a given participant
   */
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

  /**
   * @function getOtherParticipantsControls
   * @description Decides which presence controls the user should see when opening the dropdown of a participant that is not the local participant
   * @param {string} participantId Which participant is being analyzed
   * @returns {DropdownOption[]} The presence controls enabled for the participant
   */
  private getOtherParticipantsControls(participantId: string): DropdownOption[] {
    const { disableGoToParticipant, disableFollowParticipant, following } = this.useStore(
      StoreType.WHO_IS_ONLINE,
    );

    const controls: DropdownOption[] = [];

    if (!disableGoToParticipant.value) {
      controls.push({ label: WIODropdownOptions['GOTO'], icon: 'place' });
    }

    if (!disableFollowParticipant.value) {
      const isBeingFollowed = following.value?.id === participantId;
      const label = isBeingFollowed
        ? WIODropdownOptions['LOCAL_UNFOLLOW']
        : WIODropdownOptions['LOCAL_FOLLOW'];
      const icon = isBeingFollowed ? 'send-off' : 'send';
      controls.push({ label, icon });
    }

    return controls;
  }

  /**
   * @function getLocalParticipantControls
   * @description Decides which presence controls the user should see when opening the dropdown of the local participant
   * @returns {DropdownOption[]} The presence controls enabled for the local participant
   */
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
      controls.push({ label: WIODropdownOptions['GATHER'], icon: 'gather' });
    }

    if (!disableFollowMe) {
      const icon = everyoneFollowsMe ? 'send-off' : 'send';
      const label = everyoneFollowsMe
        ? WIODropdownOptions['UNFOLLOW']
        : WIODropdownOptions['FOLLOW'];

      controls.push({ label, icon });
    }

    if (!disablePrivateMode) {
      const icon = privateMode ? 'eye_inative' : 'eye';
      const label = privateMode
        ? WIODropdownOptions['LEAVE_PRIVATE']
        : WIODropdownOptions['PRIVATE'];

      controls.push({ label, icon });
    }

    return controls;
  }

  /**
   * @function setParticipants
   * @description Adds participants to the main participants (the 4 that are shown without opening any dropdown) until the list is full
   * @param {Participant[]} participantsList The total participants list
   * @returns {Participant[]} The participants that did not fit the main list and will be inserted in the extras participants list
   */
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

  /**
   * @function setExtras
   * @description Adds remaining participants to extras participants (those who are shown without opening any dropdown)
   * @param {Participant[]} participantsList The remaining participants list
   * @returns {void}
   */
  private setExtras = (participantsList: Participant[]): void => {
    const { extras } = this.useStore(StoreType.WHO_IS_ONLINE);
    extras.publish(participantsList);
  };

  /**
   * @function updateParticipantsControls
   * @description Updated what the presence controls of a single participant should look like now that something about them was updated
   * @param {string | undefined} participantId The participant that suffered some update
   * @returns {void} The participants that did not fit the main list and will be inserted in the extras participants list
   */
  private updateParticipantsControls(participantId: string | undefined): void {
    const { participants } = this.useStore(StoreType.WHO_IS_ONLINE);

    const newParticipantsList = participants.value.map((participant: Participant) => {
      if (participantId && participant.id !== participantId) return participant;

      const { id } = participant;
      const disableDropdown = this.shouldDisableDropdown({
        activeComponents: participant.activeComponents,
        participantId: id,
      });
      const presenceEnabled = !disableDropdown;
      const controls = this.getControls({ participantId: id, presenceEnabled }) ?? [];

      return {
        ...participant,
        controls,
      };
    })

    participants.publish(newParticipantsList);
  }

  /**
   * @function highlightParticipantBeingFollowed
   * @description Brings a participant that is in the list of extra participants to the front, in the second place of the list of main participants, so they are visible while being followed
   * @returns {void}
   */
  private highlightParticipantBeingFollowed(): void {
    const {
      extras,
      participants,
      following: { value: following },
    } = this.useStore(StoreType.WHO_IS_ONLINE);

    const firstParticipant = participants.value[0];

    const participantId = extras.value.findIndex((participant) => participant.id === following.id);
    const participant = extras.value.splice(participantId, 1)[0];

    participants.value.unshift(firstParticipant);
    participants.value[1] = participant;
    const lastParticipant = participants.value.pop();

    extras.value.push(lastParticipant);
    extras.publish(extras.value);
    participants.publish(participants.value);
  }
}
