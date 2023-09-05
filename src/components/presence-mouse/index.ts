import { MeetingEvent } from '../../common/types/events.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';

import { MouseOptions } from './types';

export class PresenceMouseComponent extends BaseComponent {
  public name: string;
  protected logger: Logger;
  private presenceMouseElement: HTMLElement;
  private containerId: string | null;

  constructor(container?: string | null) {
    super();
    this.name = 'presence-mouse-component';
    this.logger = new Logger('@superviz/sdk/presence-mouse-component');
    this.containerId = container ?? null;
  }

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');

    this.subscribeToRealtimeEvents();
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('presence-mouse component @ destroy');

    this.publish(MeetingEvent.DESTROY);

    this.unsubscribeFromRealtimeEvents();

    const presenceContainerId = this.containerId ?
      document.getElementById(this.containerId) : document?.body;

    presenceContainerId.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    presenceContainerId.removeChild(this.presenceMouseElement);
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents = (): void => {
    this.logger.log('presence-mouse component @ subscribe to realtime events');
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoinedOnRealtime);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeftOnRealtime);
    this.realtime.participantsObserver.subscribe(this.onParticipantsDidChange);
  };

  /**
   * @function unsubscribeFromRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private unsubscribeFromRealtimeEvents = (): void => {
    this.logger.log('presence-mouse component @ unsubscribe from realtime events');
    this.realtime.participantJoinedObserver.unsubscribe(this.onParticipantJoinedOnRealtime);
    this.realtime.participantLeaveObserver.unsubscribe(this.onParticipantLeftOnRealtime);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantsDidChange);
  };

  /** Presence Mouse Events */
  /**
   * @function onMyParticipantMouseMove
   * @description event to update my participant mouse position to others participants
   * @returns {void}
   */
  private onMyParticipantMouseMove = (e): void => {
    const presenceContainerId = this.containerId ?
      document.getElementById(this.containerId) : document?.body;

    const rect = presenceContainerId.getBoundingClientRect();

    this.realtime.updateMyProperties({
      mousePositionX: this.containerId ? e.x - rect.x : e.x,
      mousePositionY: this.containerId ? e.y - rect.y : e.y,
      originalWidth: this.containerId ? rect.width : 1,
      originalHeight: this.containerId ? rect.height : 1,
      containerId: this.containerId,
    });
  };

  /**
   * @function onParticipantsDidChange
   * @description handler for participant list update event
   * @param {Record<string, AblyParticipant>} participants - participants
   * @returns {void}
   */
  private onParticipantsDidChange = (participants: Record<string, AblyParticipant>): void => {
    this.logger.log('presence-mouse component @ on participants did change', participants);

    Object.values(participants).forEach((participant: AblyParticipant) => {
      const externalParticipantData: MouseOptions = participant.data;
      const hasPresenceMouseElement = externalParticipantData?.mousePositionX
      && this.presenceMouseElement;
      const myParticipant = externalParticipantData?.id === this.localParticipant?.id;

      externalParticipantData.color = this.realtime.getSlotColor(participant.data.slotIndex).color;
      externalParticipantData.slotIndex = participant.data.slotIndex;

      if (!myParticipant && hasPresenceMouseElement) {
        // @ts-ignore
        this.presenceMouseElement.updatePresenceMouseParticipant(externalParticipantData);
      }
    });
  };

  /**
   * @function onParticipantJoinedOnRealtime
   * @description handler for participant joined event
   * @param {AblyParticipant} participant - participant
   * @returns {void}
   */
  private onParticipantJoinedOnRealtime = (participant: AblyParticipant): void => {
    this.logger.log('presence-mouse component @ on participant joined on realtime', participant);

    if (participant?.data?.id === this.localParticipant?.id) {
      const presenceContainerId = this.containerId ?
        document.getElementById(this.containerId) : document?.body;

      this.presenceMouseElement = document.createElement('superviz-presence-mouse');

      presenceContainerId.appendChild(this.presenceMouseElement);
      presenceContainerId.addEventListener('mousemove', this.onMyParticipantMouseMove);
    }
  };

  /**
   * @function onParticipantLeftOnRealtime
   * @description handler for participant left event
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantLeftOnRealtime = (participant: AblyParticipant): void => {
    this.logger.log('presence-mouse component @ on participant left on realtime', participant);
    // @ts-ignore
    this.presenceMouseElement.removePresenceMouseParticipant(participant.clientId);
  };
}
