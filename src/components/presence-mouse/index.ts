import { MeetingEvent } from '../../common/types/events.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { PresenceMouse } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ParticipantMouse } from './types';

export class PresenceMouseComponent extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private presenceMouseElement: PresenceMouse;
  private containerId: string | null;
  private container: HTMLElement;
  private divWrapper: HTMLElement;

  constructor(containerId?: string) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);
    this.containerId = containerId;
    this.container = document.getElementById(containerId);

    if (!this.container) {
      const message = `Container with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.divWrapper = this.createDivWrapper();
  }

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');

    this.presenceMouseElement = document.createElement('superviz-presence-mouse') as PresenceMouse;
    this.divWrapper.appendChild(this.presenceMouseElement);
    this.container.addEventListener('mousemove', this.onMyParticipantMouseMove);

    this.subscribeToRealtimeEvents();
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('presence-mouse component @ destroy');

    this.unsubscribeFromRealtimeEvents();

    this.container.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    this.divWrapper.removeChild(this.presenceMouseElement);
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents = (): void => {
    this.logger.log('presence-mouse component @ subscribe to realtime events');
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
      mousePositionX: event.x - rect.x,
      mousePositionY: event.y - rect.y,
      originalWidth: rect.width,
      originalHeight: rect.height,
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
      const participantData: ParticipantMouse = participant.data;
      const hasPresenceMouseElement = participantData?.mousePositionX && this.presenceMouseElement;
      const myParticipant = participantData?.id === this.localParticipant?.id;

      participantData.color = this.realtime.getSlotColor(participant.data.slotIndex).color;
      participantData.slotIndex = participant.data.slotIndex;

      if (!myParticipant && hasPresenceMouseElement) {
        this.presenceMouseElement.updatePresenceMouseParticipant(participantData);
      }
    });
  };

  /**
   * @function onParticipantLeftOnRealtime
   * @description handler for participant left event
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantLeftOnRealtime = (participant: AblyParticipant): void => {
    this.presenceMouseElement.removePresenceMouseParticipant(participant.clientId);
  };

  /**
   * @function createDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private createDivWrapper(): HTMLElement {
    const elementRect = this.container.getBoundingClientRect();
    const divWrapper = document.createElement('div');

    this.container.parentElement.style.position = 'relative';

    divWrapper.style.position = 'absolute';
    divWrapper.style.top = `${elementRect.top}px`;
    divWrapper.style.left = `${elementRect.left}px`;
    divWrapper.style.width = `${elementRect.width}px`;
    divWrapper.style.height = `${elementRect.height}px`;
    divWrapper.style.pointerEvents = 'none';

    this.container.parentElement.appendChild(divWrapper);

    return divWrapper;
  }
}
