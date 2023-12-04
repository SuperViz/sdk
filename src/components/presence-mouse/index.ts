import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ParticipantMouse } from './types';

export class MousePointers extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
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

  private get textColorValues(): number[] {
    return [2, 4, 5, 7, 8, 16];
  }

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');

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
      const myParticipant = participant?.id === this.localParticipant?.id;

      if (!participant?.visible) {
        this.removePresenceMouseParticipant(participant.id);
        return;
      }

      if (!myParticipant) {
        this.updatePresenceMouseParticipant(participant);
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
    this.removePresenceMouseParticipant(participant.id);
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

  /**
   * @function updatePresenceMouseParticipant
   * @description handler for update presence mouse change event
   * @param {ParticipantMouse} externalParticipant - presence mouse change data
   * @returns {void}
   * */
  private updatePresenceMouseParticipant = (externalParticipant: ParticipantMouse): void => {
    const userMouseIdExist = document.getElementById(`mouse-${externalParticipant.id}`);

    if (!userMouseIdExist) {
      const mouseFollower = document.createElement('div');
      mouseFollower.setAttribute('id', `mouse-${externalParticipant.id}`);
      mouseFollower.setAttribute('class', 'mouse-follower');

      const pointerMouse = document.createElement('div');
      pointerMouse.setAttribute('class', 'pointer-mouse');

      const mouseUserName = document.createElement('div');
      mouseUserName.setAttribute('class', 'mouse-user-name');
      mouseUserName.innerHTML = externalParticipant.name;

      mouseFollower.appendChild(pointerMouse);
      mouseFollower.appendChild(mouseUserName);
      this.divWrapper.appendChild(mouseFollower);
    }
    const divMouseFollower = document.getElementById(`mouse-${externalParticipant.id}`);

    if (!divMouseFollower) return;

    const divMouseUser = document.getElementById(`mouse-${externalParticipant.id}`);
    const divPointer = document.getElementById(`mouse-${externalParticipant.id}`);

    if (!divMouseUser || !divPointer) return;

    const mouseUser = divMouseUser.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
    const pointerUser = divPointer.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;
    if (pointerUser) {
      pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers/${externalParticipant.slotIndex}.svg)`;
    }
    if (mouseUser) {
      mouseUser.style.color = this.textColorValues.includes(externalParticipant.slotIndex)
        ? '#FFFFFF'
        : '#26242A';
      mouseUser.style.backgroundColor = externalParticipant.color;
      mouseUser.innerHTML = externalParticipant.name;
    }

    const adjustedX = externalParticipant.mousePositionX;
    const adjustedY = externalParticipant.mousePositionY;

    divMouseFollower.style.left = `${adjustedX}px`;
    divMouseFollower.style.top = `${adjustedY}px`;
  };

  /**
   * @function removePresenceMouseParticipant
   * @description handler remove external participant mouse
   * @param {string} participantId - external participant id
   * @returns {void}
   * */
  private removePresenceMouseParticipant(participantId: string): void {
    const userMouseIdExist = document.getElementById(`mouse-${participantId}`);
    if (userMouseIdExist) {
      userMouseIdExist.remove();
    }
  }
}
