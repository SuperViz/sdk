import { MeetingEvent } from '../../common/types/events.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { PresenceMouse } from '../../web-components/presence-mouse';
import { BaseComponent } from '../base';

import { mouseOptions } from './types';

export class PresenceMouseComponent extends BaseComponent {
  protected name: string;
  protected logger: Logger;
  private presenceMouseElement: PresenceMouse;

  constructor() {
    super();

    this.name = 'presence-mouse-component';
    this.logger = new Logger('@superviz/sdk/presence-mouse-component');
  }

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');

    this.suscribeToRealtimeEvents();
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

    window.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    document.body.removeChild(this.presenceMouseElement);
  }

  /**
   * @function suscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private suscribeToRealtimeEvents = (): void => {
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
    this.realtime.updateMyProperties({
      mousePositionX: e.clientX,
      mousePositionY: e.clientY,
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
      const externalParticipantData: mouseOptions = participant.data;
      const hasPresenceMouseElement = externalParticipantData?.mousePositionX
      && this.presenceMouseElement;
      const myParticipant = externalParticipantData?.id === this.localParticipant?.id;

      externalParticipantData.color = this.realtime.getSlotColor(participant.data.slotIndex).color;
      externalParticipantData.slotIndex = participant.data.slotIndex;

      if (!myParticipant && hasPresenceMouseElement) {
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
      this.presenceMouseElement = document.createElement('superviz-presence-mouse') as PresenceMouse;
      document.body.appendChild(this.presenceMouseElement);
      window.addEventListener('mousemove', this.onMyParticipantMouseMove);
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
    this.presenceMouseElement.removePresenceMouseParticipant(participant.clientId);
  };
}
