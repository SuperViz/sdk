import { Logger } from '../../common/utils';
import { PresenceMouse } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { MousePosition, ParticipantMouse } from './types';

export class MousePointers extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private presenceMouseElement: PresenceMouse;
  private containerId: string | null;
  private container: HTMLElement;
  private positions: Record<string, MousePosition> = {};
  private divWrapper: HTMLElement;
  private divWrapperReplacementInterval: ReturnType<typeof setInterval> | null = null;

  constructor(containerId?: string) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);
    this.containerId = containerId;
    this.container = document.body.querySelector(`#${containerId}`) as HTMLElement;

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
    this.eventBus.subscribe('go-to-mouse-pointer', this.goToMousePointer);
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
    this.eventBus.unsubscribe('go-to-mouse-pointer', this.goToMousePointer);
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
        this.positions[participant.id] = {
          x: participant.mousePositionX,
          y: participant.mousePositionY,
        };
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
   * @description Creates a div wrapper for the mouse.
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

  private goToMousePointer = (participantId: string) => {
    const element = this.divWrapper;

    if (!element) return;

    if (
      element.clientWidth <= element.parentElement?.clientWidth &&
      element.clientHeight <= element.parentElement?.clientHeight
    ) {
      return;
    }

    let elementWithOverflow: HTMLElement;
    let nextElement: HTMLElement = this.divWrapper;

    while (!elementWithOverflow) {
      const parent = nextElement?.parentElement;

      const hasOverflow = this.isScrollable(parent);

      if (hasOverflow) {
        elementWithOverflow = parent;
        break;
      }

      nextElement = parent;

      if (!nextElement) break;
    }

    const mouseCoordinates = this.positions[participantId];

    if (!elementWithOverflow) return;

    elementWithOverflow.scrollTo({
      top: mouseCoordinates.y,
      left: mouseCoordinates.x,
      behavior: 'smooth',
    });
  };

  private isScrollable(element: HTMLElement): boolean {
    if (!element) return false;

    const hasScrollableContent = element.scrollHeight > element.clientHeight;
    const overflowYStyle = window.getComputedStyle(element).overflowY;
    const overflowXStyle = window.getComputedStyle(element).overflowX;
    const isOverflowYHidden = overflowYStyle.indexOf('hidden') !== -1;
    const isOverflowXHidden = overflowXStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowYHidden && !isOverflowXHidden;
  }
}
