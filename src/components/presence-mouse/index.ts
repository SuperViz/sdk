import { MeetingEvent } from '../../common/types/events.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ParticipantMouse } from './types';

export class PresenceMouseComponent extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private presenceMouseElement: HTMLElement;
  private containerId: string | null;
  private divWrapper: HTMLElement;

  constructor(container?: string | null) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);
    this.containerId = container ?? null;
    this.divWrapper = this.createDivWrapper();
  }

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');
    console.log('vinicius 2 divWrapper ', this.divWrapper);

    const presenceContainerId = document.getElementById(this.containerId);
    console.log('vinicius 2 presenceContainerId', presenceContainerId);

    this.presenceMouseElement = document.createElement('superviz-presence-mouse');

    this.divWrapper.appendChild(this.presenceMouseElement);
    presenceContainerId.addEventListener('mousemove', this.onMyParticipantMouseMove);

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

    const presenceContainerId = this.containerId ? document.getElementById(this.containerId) : null;

    if (presenceContainerId) {
      presenceContainerId.removeEventListener('mousemove', this.onMyParticipantMouseMove);
      presenceContainerId.removeChild(this.presenceMouseElement);
    }
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
  private onMyParticipantMouseMove = (event: MouseEvent): void => {
    const rect = this.divWrapper.getBoundingClientRect();

    this.realtime.updateMyProperties({
      mousePositionX: this.containerId ? event.x - rect.x : event.x,
      mousePositionY: this.containerId ? event.y - rect.y : event.y,
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
      const externalParticipantData: ParticipantMouse = participant.data;
      const hasPresenceMouseElement =
        externalParticipantData?.mousePositionX && this.presenceMouseElement;
      const myParticipant = externalParticipantData?.id === this.localParticipant?.id;

      externalParticipantData.color = this.realtime.getSlotColor(participant.data.slotIndex).color;
      externalParticipantData.slotIndex = participant.data.slotIndex;

      if (!myParticipant && hasPresenceMouseElement) {
        this.presenceMouseElement['updatePresenceMouseParticipant'](externalParticipantData);
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
  };

  /**
   * @function onParticipantLeftOnRealtime
   * @description handler for participant left event
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantLeftOnRealtime = (participant: AblyParticipant): void => {
    this.logger.log('presence-mouse component @ on participant left on realtime', participant);
    this.presenceMouseElement['removePresenceMouseParticipant'](participant.clientId);
  };

  /**
   * @function createDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private createDivWrapper(): HTMLElement {
    const element = document.getElementById(this.containerId);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const divWrapper = document.createElement('div');

    element.parentElement.style.position = 'relative';

    divWrapper.style.position = 'absolute';
    divWrapper.style.top = `${elementRect.top}px`;
    divWrapper.style.left = `${elementRect.left}px`;
    divWrapper.style.width = `${elementRect.width}px`;
    divWrapper.style.height = `${elementRect.height}px`;
    divWrapper.style.pointerEvents = 'none';

    element.parentElement.appendChild(divWrapper);

    return divWrapper;
  }
}
