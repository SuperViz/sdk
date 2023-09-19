import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ParticipantMouse } from '../../components/presence-mouse/types';

import { styles as customMouseStyles } from './styles';

@customElement('superviz-presence-mouse')
export class PresenceMouse extends LitElement {
  declare textColorValues: number[];

  static styles = [customMouseStyles];

  constructor() {
    super();
    this.textColorValues = [2, 4, 5, 7, 8, 16];
  }

  /**
   * @function updatePresenceMouseParticipant
   * @description handler for update presence mouse change event
   * @param {ParticipantMouse} externalParticipant - presence mouse change data
   * @returns {void}
   * */
  public updatePresenceMouseParticipant = (externalParticipant: ParticipantMouse): void => {
    const userMouseIdExist = this.shadowRoot.getElementById(`mouse-${externalParticipant.id}`);
    if (!userMouseIdExist) {
      const mouseSync = this.shadowRoot.getElementById('mouse-sync');
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
      if (mouseSync) {
        mouseSync.appendChild(mouseFollower);
      }
    }
    const divMouseFollower = this.shadowRoot.getElementById(`mouse-${externalParticipant.id}`);
    if (!divMouseFollower) {
      return;
    }
    const divMouseUser = this.shadowRoot.getElementById(`mouse-${externalParticipant.id}`);
    const divPointer = this.shadowRoot.getElementById(`mouse-${externalParticipant.id}`);
    if (divMouseUser && divPointer) {
      const mouseUser = divMouseUser.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
      const pointerUser = divPointer.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;
      if (pointerUser) {
        pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers/${externalParticipant.slotIndex}.svg)`;
      }
      if (mouseUser) {
        mouseUser.style.color = this.textColorValues.includes(externalParticipant.slotIndex)
          ? '#FFFFFF'
          : '#000000';
        mouseUser.style.backgroundColor = externalParticipant.color;
        mouseUser.innerHTML = externalParticipant.name;
      }

      const { containerId } = externalParticipant;

      const presenceContainerId = containerId
        ? document.getElementById(containerId)
        : document?.body;

      let adjustedX = externalParticipant.mousePositionX;
      let adjustedY = externalParticipant.mousePositionY;

      if (containerId) {
        const windowWidth = presenceContainerId?.clientWidth || 1;
        const windowHeight = presenceContainerId?.clientHeight || 1;
        adjustedX =
          (externalParticipant.mousePositionX / externalParticipant.originalWidth) * windowWidth;
        adjustedY =
          (externalParticipant.mousePositionY / externalParticipant.originalHeight) * windowHeight;
      }

      divMouseFollower.style.left = `${adjustedX}px`;
      divMouseFollower.style.top = `${adjustedY}px`;
    }
  };

  /**
   * @function removePresenceMouseParticipant
   * @description handler remove external participant mouse
   * @param {string} participantId - external participant id
   * @returns {void}
   * */
  public removePresenceMouseParticipant(participantId: string): void {
    const userMouseIdExist = this.shadowRoot.getElementById(`mouse-${participantId}`);
    if (userMouseIdExist) {
      userMouseIdExist.remove();
    }
  }

  protected render() {
    return html`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `;
  }
}
