import { isEqual } from 'lodash';

import { RealtimeEvent } from '../../common/types/events.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { WhoIsOnline as WhoIsOnlineElement } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { WhoIsOnlinePosition, Position, Participant } from './types';

export class WhoIsOnline extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: WhoIsOnlineElement;
  private position: WhoIsOnlinePosition;
  private participants: Participant[] = [];
  private following: string;

  constructor(position?: WhoIsOnlinePosition) {
    super();

    this.position = position ?? Position.TOP_RIGHT;
    this.name = ComponentNames.WHO_IS_ONLINE;
    this.logger = new Logger('@superviz/sdk/who-is-online-component');
  }

  /**
   * @function start
   * @description Initializes the Who Is Online component
   * @returns {void}
   */
  protected start(): void {
    this.subscribeToRealtimeEvents();
    this.positionWhoIsOnline();
    this.addListeners();
    this.realtime.enterWIOChannel(this.localParticipant);
  }

  /**
   * @function destroy
   * @description Destroys the Who Is Online component
   * @returns {void}
   */
  protected destroy(): void {
    this.unsubscribeToRealtimeEvents();
    this.removeListeners();
    this.element.remove();
    this.element = null;
    this.participants = null;
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
  }

  /**
   * @function onParticipantListUpdate
   * @description Receives data about participants in the room who were not loaded
   * when the component was initialized
   * @param {Record<string, AblyParticipant>} data
   * @returns {void}
   */
  private onParticipantListUpdate = (data: Record<string, AblyParticipant>): void => {
    const updatedParticipants = Object.values(data).filter(({ data }) => {
      return data.activeComponents?.includes('whoIsOnline');
    });

    const participants = updatedParticipants
      .filter(({ data: { isPrivate, id } }) => {
        return !isPrivate || (isPrivate && id === this.localParticipant.id);
      })
      .map(({ data }) => {
        const { slotIndex, id, name, avatar, activeComponents } = data as Participant;
        const { color } = this.realtime.getSlotColor(slotIndex);
        const isLocal = this.localParticipant.id === id;
        const joinedPresence = activeComponents.some((component) => component.includes('presence'));
        this.setLocalData(isLocal, !joinedPresence, color);

        return { name, id, slotIndex, color, isLocal, joinedPresence, avatar };
      });

    if (isEqual(participants, this.participants)) return;

    if (this.following) {
      const participantBeingFollowed = participants.find(({ id }) => id === this.following);
      if (!participantBeingFollowed) this.stopFollowing({ clientId: this.following });
    }

    this.participants = participants;
    this.element.updateParticipants(this.participants);
  };

  private setLocalData = (local: boolean, disable: boolean, color: string) => {
    if (!local) return;

    this.element.disableDropdown = disable;
    this.element.localParticipantData = { color, id: this.localParticipant.id };
  };

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
  private goToMousePointer = ({ detail }: CustomEvent) => {
    this.eventBus.publish(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, detail.id);
  };

  /**
   * @function followMousePointer
   * @description Publishes the follow event to the event bus
   * @param {CustomEvent} event
   * @returns {void}
   */
  private followMousePointer = ({ detail }: CustomEvent) => {
    this.eventBus.publish(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, detail.id);
    this.following = detail.id;
  };

  /**
   * @function setPrivate
   * @description Publishes the private event to realtime and the event bus
   * @param {CustomEvent} event
   * @returns {void}
   */
  private setPrivate = ({ detail: { isPrivate, id } }: CustomEvent) => {
    this.eventBus.publish(RealtimeEvent.REALTIME_PRIVATE_MODE, isPrivate);
    this.realtime.setPrivateWIOParticipant(id, isPrivate);
  };

  private setFollow = (following) => {
    if (following.clientId === this.localParticipant.id) return;

    this.followMousePointer({ detail: { id: following?.data?.id } } as CustomEvent);

    if (!following.data.id) {
      this.element.following = undefined;
      return;
    }

    this.following = following.data.id;
    this.element.following = following.data;
  };

  private follow = (data: CustomEvent) => {
    this.realtime.setFollowWIOParticipant({ ...data.detail });
    this.following = data.detail?.id;
  };

  private stopFollowing = (participant: { clientId: string }) => {
    if (participant.clientId === this.element.following?.id) {
      this.element.following = undefined;
      this.following = undefined;
      this.eventBus.publish(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, undefined);
    }
  };

  private gather = (data: CustomEvent) => {
    this.realtime.setGatherWIOParticipant({ ...data.detail });
  };
}
