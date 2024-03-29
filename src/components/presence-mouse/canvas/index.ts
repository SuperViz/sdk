import { RealtimeEvent } from '../../../common/types/events.types';
import { Logger } from '../../../common/utils';
import { BaseComponent } from '../../base';
import { ComponentNames } from '../../types';
import { ParticipantMouse, PresenceMouseProps, Transform } from '../types';

export class PointersCanvas extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private canvas: HTMLCanvasElement;
  private divWrapper: HTMLElement;
  private presences: Map<string, ParticipantMouse>;
  private animateFrame: number;
  private goToMouseCallback: PresenceMouseProps['callbacks']['onGoToPresence'];
  private following: string;
  private isPrivate: boolean;
  private transformation: Transform = { translate: { x: 0, y: 0 }, scale: 1 };

  constructor(canvasId: string, options?: PresenceMouseProps) {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.presences = new Map();

    if (!this.canvas) {
      const message = `Canvas with id ${canvasId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.divWrapper = this.renderDivWrapper();
    this.animateFrame = requestAnimationFrame(this.animate);

    this.goToMouseCallback = options?.callbacks?.onGoToPresence;
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

    this.canvas.addEventListener('mousemove', this.onMyParticipantMouseMove);
    this.canvas.addEventListener('mouseout', this.onMyParticipantMouseOut);
    this.eventBus.subscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    this.eventBus.subscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    this.eventBus.subscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
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
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    this.realtime.leavePresenceMouseChannel();
    this.unsubscribeFromRealtimeEvents();

    cancelAnimationFrame(this.animateFrame);
    this.canvas.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    this.canvas.removeEventListener('mouseout', this.onMyParticipantMouseOut);
    this.divWrapper.remove();
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

  /**
   * @function setParticipantPrivate
   * @description perform animation in presence mouse
   * @returns {void}
   */
  private setParticipantPrivate = (isPrivate: boolean): void => {
    this.isPrivate = isPrivate;
    this.realtime.updatePresenceMouse({ ...this.localParticipant, visible: !isPrivate });
  };

  /**
   * @function animate
   * @description perform animation in presence mouse
   * @returns {void}
   */
  private animate = (): void => {
    this.renderDivWrapper();
    this.updateParticipantsMouses();

    requestAnimationFrame(this.animate);
  };

  /**
   * @function goToMouse
   * @description - translate the canvas to the participant position
   * @param    id - participant id
   */
  private goToMouse = (id: string): void => {
    const mouse = this.presences.get(id);

    if (!mouse) return;

    const rect = this.canvas.getBoundingClientRect();
    const { width, height } = rect;

    const { x, y } = mouse;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    const translateX = widthHalf - x;
    const translateY = heightHalf - y;

    if (this.goToMouseCallback) this.goToMouseCallback({ x: translateX, y: translateY });
  };

  /** Presence Mouse Events */

  /**
   * @function onMyParticipantMouseMove
   * @description event to update my participant mouse position to others participants
   * @returns {void}
   */
  private onMyParticipantMouseMove = (event: MouseEvent): void => {
    const context = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();
    const x = event.x - rect.left;
    const y = event.y - rect.top;

    const transform = context?.getTransform();
    const invertedMatrix = transform.inverse();
    const transformedPoint = new DOMPoint(x, y).matrixTransform(invertedMatrix);

    const coordinates = {
      x: (transformedPoint.x - this.transformation.translate.x) / this.transformation.scale,
      y: (transformedPoint.y - this.transformation.translate.y) / this.transformation.scale,
    };

    this.realtime.updatePresenceMouse({
      ...this.localParticipant,
      ...coordinates,
      visible: !this.isPrivate,
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
      if (participant.id === this.localParticipant.id) return;
      if (
        this.following &&
        participant.id !== this.following &&
        this.presences.has(participant.id)
      ) {
        this.removePresenceMouseParticipant(participant.id);
        return;
      }

      this.presences.set(participant.id, participant);
    });

    if (this.following) {
      const mouse = this.presences.get(this.following);
      if (mouse) {
        this.goToMouse(this.following);
      }
    }
  };

  private onMyParticipantMouseOut = (event: MouseEvent): void => {
    const { x, y, width, height } = this.canvas.getBoundingClientRect();
    if (event.x > 0 && event.y > 0 && event.x < x + width && event.y < y + height) return;

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
   * @function renderDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private renderDivWrapper(): HTMLElement {
    const canvasRect = this.canvas.getBoundingClientRect();
    let divWrapper = document.getElementById('superviz-presence-mouse-wrapper');

    if (!divWrapper) {
      divWrapper = document.createElement('div');
      divWrapper.id = 'superviz-presence-mouse-wrapper';
      this.canvas.parentElement.style.position = 'relative';
      this.canvas.parentElement.appendChild(divWrapper);
    }

    divWrapper.style.position = 'fixed';
    divWrapper.style.top = `${canvasRect.top}px`;
    divWrapper.style.left = `${canvasRect.left}px`;
    divWrapper.style.width = `${canvasRect.width}px`;
    divWrapper.style.height = `${canvasRect.height}px`;
    divWrapper.style.pointerEvents = 'none';
    divWrapper.style.overflow = 'hidden';
    divWrapper.style.zIndex = '2';

    return divWrapper;
  }

  private updateParticipantsMouses = (): void => {
    this.presences.forEach((mouse) => {
      if (!mouse?.visible) {
        this.removePresenceMouseParticipant(mouse.id);
        return;
      }

      this.renderPresenceMouses(mouse);
    });
  };

  /**
   * @function renderPresenceMouses
   * @description add presence mouses to screen
   * @param {ParticipantMouse} mouse - presence mouse change data
   * @returns {void}
   * */
  private renderPresenceMouses = (mouse: ParticipantMouse): void => {
    const userMouseIdExist = document.getElementById(`mouse-${mouse.id}`);
    let mouseFollower = userMouseIdExist;
    if (!mouseFollower) {
      mouseFollower = this.createMouseElement(mouse);
    }

    const divMouseUser = document.getElementById(`mouse-${mouse.id}`);
    const divPointer = document.getElementById(`mouse-${mouse.id}`);

    if (!divMouseUser || !divPointer) return;

    const mouseUser = divMouseUser.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
    const pointerUser = divPointer.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;

    if (pointerUser) {
      pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers-v2/${mouse.slotIndex}.svg)`;
    }

    if (mouseUser) {
      mouseUser.style.color = this.textColorValues.includes(mouse.slotIndex)
        ? '#FFFFFF'
        : '#26242A';
      mouseUser.style.backgroundColor = mouse.color;
      mouseUser.innerHTML = mouse.name;
    }

    const { x: savedX, y: savedY } = mouse;
    const context = this.canvas.getContext('2d');
    const transform = context?.getTransform();

    const currentTranslateX = transform?.e;
    const currentTranslateY = transform?.f;

    const x =
      this.transformation.translate.x + (savedX + currentTranslateX) * this.transformation.scale;
    const y =
      this.transformation.translate.y + (savedY + currentTranslateY) * this.transformation.scale;

    const isVisible =
      this.divWrapper.clientWidth > x && this.divWrapper.clientHeight > y && mouse.visible;

    mouseFollower.style.opacity = isVisible ? '1' : '0';
    mouseFollower.style.left = `${x}px`;
    mouseFollower.style.top = `${y}px`;
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
      this.presences.delete(participantId);
    }
  }

  /**
   * @function createMouseElement
   * @param mouse - participant mouse
   * @returns {HTMLDivElement}
   */
  private createMouseElement(mouse: ParticipantMouse): HTMLDivElement {
    const mouseFollower = document.createElement('div');
    mouseFollower.setAttribute('id', `mouse-${mouse.id}`);
    mouseFollower.setAttribute('class', 'mouse-follower');

    const pointerMouse = document.createElement('div');
    pointerMouse.setAttribute('class', 'pointer-mouse');

    const mouseUserName = document.createElement('div');
    mouseUserName.setAttribute('class', 'mouse-user-name');
    mouseUserName.innerHTML = mouse.name;

    mouseFollower.appendChild(pointerMouse);
    mouseFollower.appendChild(mouseUserName);

    mouseFollower.style.left = '0px';
    mouseFollower.style.top = '0px';

    this.divWrapper.appendChild(mouseFollower);

    return mouseFollower;
  }

  private followMouse = (id: string) => {
    this.following = id;
  };

  /**
   * @function transform
   * @description stores that information about which transformations should the pointers go through
   * @param {Transform} transformation Which transformations to apply
   */
  public transform(transformation: Transform) {
    this.transformation = transformation;
  }
}
