import { Logger } from '../../common/utils';
import { PresenceMouse } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ParticipantMouse } from './types';

export class MousePointers extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private presenceMouseElement: PresenceMouse;
  private containerId: string | null;
  private container: HTMLElement;
  private divWrapper: HTMLElement;
  private divWrapperReplacementInterval: ReturnType<typeof setInterval> | null = null;

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
    this.container.addEventListener('mouseout', this.onMyParticipantMouseOut);

    this.subscribeToRealtimeEvents();
    this.realtime.enterPresenceMouseChannel(this.localParticipant);
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('presence-mouse component @ destroy');

    this.realtime.leavePresenceMouseChannel();
    this.unsubscribeFromRealtimeEvents();

    this.container.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    this.container.removeEventListener('mouseout', this.onMyParticipantMouseOut);
    this.presenceMouseElement.remove();
    this.divWrapper.remove();

    if (this.divWrapperReplacementInterval) {
      clearInterval(this.divWrapperReplacementInterval);
      this.divWrapperReplacementInterval = null;
    }
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents = (): void => {
    this.logger.log('presence-mouse component @ subscribe to realtime events');
    this.realtime.presenceMouseParticipantLeaveObserver.subscribe(this.onParticipantLeftOnRealtime);

    this.realtime.presenceMouseObserver.subscribe(this.onParticipantsDidChange);
  };

  /**
   * @function unsubscribeFromRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private unsubscribeFromRealtimeEvents = (): void => {
    this.logger.log('presence-mouse component @ unsubscribe from realtime events');
    this.realtime.presenceMouseParticipantLeaveObserver.unsubscribe(
      this.onParticipantLeftOnRealtime,
    );
    this.realtime.presenceMouseObserver.unsubscribe(this.onParticipantsDidChange);
  };

  /** Presence Mouse Events */

  /**
   * @function onMyParticipantMouseMove
   * @description event to update my participant mouse position to others participants
   * @returns {void}
   */
  private onMyParticipantMouseMove = (event: MouseEvent): void => {
    const rect = this.divWrapper.getBoundingClientRect();

    this.realtime.updatePresenceMouse({
      ...this.localParticipant,
      mousePositionX: event.x - rect.x,
      mousePositionY: event.y - rect.y,
      originalWidth: rect.width,
      originalHeight: rect.height,
      containerId: this.containerId,
      visible: true,
    });
  };

  /**
   * @function onParticipantsDidChange
   * @description handler for participant list update event
   * @param {Record<string, AblyParticipant>} participants - participants
   * @returns {void}
   */
  private onParticipantsDidChange = (participants: Record<string, ParticipantMouse>): void => {
    this.logger.log('presence-mouse component @ on participants did change', participants);

    Object.values(participants).forEach((participant: ParticipantMouse) => {
      const hasPresenceMouseElement = participant?.mousePositionX && this.presenceMouseElement;
      const myParticipant = participant?.id === this.localParticipant?.id;

      if (!participant?.visible) {
        this.presenceMouseElement.removePresenceMouseParticipant(participant.id);
        return;
      }

      if (!myParticipant && hasPresenceMouseElement) {
        this.presenceMouseElement.updatePresenceMouseParticipant(participant);
      }
    });
  };

  private onMyParticipantMouseOut = (): void => {
    this.realtime.updatePresenceMouse({ visible: false, ...this.localParticipant });
  };

  /**
   * @function onParticipantLeftOnRealtime
   * @description handler for participant left event
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantLeftOnRealtime = (participant: ParticipantMouse): void => {
    this.presenceMouseElement.removePresenceMouseParticipant(participant.id);
  };

  /**
   * @function createDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private createDivWrapper(): HTMLElement {
    const divWrapper = document.createElement('div');

    this.container.parentElement.style.position = 'relative';

    divWrapper.style.position = 'fixed';
    divWrapper.style.pointerEvents = 'none';

    this.container.parentElement.appendChild(divWrapper);

    if (!this.divWrapperReplacementInterval) {
      this.divWrapperReplacementInterval = setInterval(() => {
        const elementRect = this.container.getBoundingClientRect();
        divWrapper.style.top = `${elementRect.top}px`;
        divWrapper.style.left = `${elementRect.left}px`;
        divWrapper.style.width = `${elementRect.width}px`;
        divWrapper.style.height = `${elementRect.height}px`;
      }, 1);
    }

    return divWrapper;
  }
}
