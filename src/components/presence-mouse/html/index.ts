import { isEqual } from 'lodash';

import { RealtimeEvent } from '../../../common/types/events.types';
import { INDEX_IS_WHITE_TEXT } from '../../../common/types/meeting-colors.types';
import { Logger } from '../../../common/utils';
import { BaseComponent } from '../../base';
import { ComponentNames } from '../../types';
import {
  Baseline,
  ParticipantMouse,
  PresenceMouseProps,
  SVGElements,
  VoidElements,
} from '../types';

export class PointersHTML extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  // Realtime data
  private presences: Map<string, ParticipantMouse> = new Map();

  // Elements
  private container: HTMLElement | SVGElement;
  private wrapper: HTMLElement;

  private mouses: Map<string, HTMLElement> = new Map();

  // General data about states/the application
  private userBeingFollowedId: string;
  private animationFrame: number;
  private isPrivate: boolean;
  private containerTagname: string;
  private baselineCoordinates: Baseline = { x: 0, y: 0, scale: 1 };

  // callbacks
  private goToPresenceCallback: PresenceMouseProps['onGoToPresence'];

  /**
   * @function constructor
   * @param {string} containerId The id of the container element, inside of which may be rendered
   * @param {object} options The options object, used to customize the behavior of the component
   * @param {string} options.onGoToPresence The callback function to be called when the user, through presence controls like that of the Who Is Online component, is set to go to a participant's position
   */
  constructor(containerId: string, options?: PresenceMouseProps) {
    super();

    this.container = document.getElementById(containerId);
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);

    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.name = ComponentNames.PRESENCE;

    this.goToPresenceCallback = options?.onGoToPresence;
  }

  public setBaselineCoordinates(coordinates: Baseline) {
    this.baselineCoordinates = coordinates;
  }

  // ---------- SETUP ----------

  /**
   * @function start
   * @description start presence-mouse component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('presence-mouse component @ start');
    this.realtime.enterPresenceMouseChannel(this.localParticipant);

    this.renderWrapper();
    this.addListeners();
    this.subscribeToRealtimeEvents();

    this.eventBus.subscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    this.animationFrame = requestAnimationFrame(this.animate);
    this.eventBus.subscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    this.eventBus.subscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    cancelAnimationFrame(this.animationFrame);

    this.logger.log('presence-mouse component @ destroy');
    this.realtime.leavePresenceMouseChannel();

    this.removeListeners();
    this.wrapper.remove();

    this.presences.clear();
    this.presences = undefined;

    this.unsubscribeFromRealtimeEvents();

    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    this.logger = undefined;
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {
    this.logger.log('presence-mouse component @ subscribe to realtime events');
    this.realtime.presenceMouseParticipantLeaveObserver.subscribe(this.onParticipantLeftOnRealtime);
    this.realtime.presenceMouseObserver.subscribe(this.onParticipantsDidChange);
  }

  /**
   * @function unsubscribeFromRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private unsubscribeFromRealtimeEvents(): void {
    this.logger.log('presence-mouse component @ unsubscribe from realtime events');
    this.realtime.presenceMouseParticipantLeaveObserver.unsubscribe(
      this.onParticipantLeftOnRealtime,
    );
    this.realtime.presenceMouseObserver.unsubscribe(this.onParticipantsDidChange);
  }

  /**
   * @function addWrapperListeners
   * @description adds the mousemove and mouseout listeners to the wrapper with the specified id
   * @param {string} id the id of the wrapper
   * @returns {void}
   */
  private addListeners(): void {
    this.container.addEventListener('pointermove', this.onMyParticipantMouseMove);
    this.container.addEventListener('mouseleave', this.onMyParticipantMouseLeave);
  }

  /**
   * @function removeListeners
   * @description removes the mousemove and mouseout listeners from the container
   * @returns {void}
   */
  private removeListeners(): void {
    this.container.removeEventListener('pointermove', this.onMyParticipantMouseMove);
    this.container.removeEventListener('mouseleave', this.onMyParticipantMouseLeave);
  }

  // ---------- CALLBACKS ----------
  /**
   * @function onMyParticipantMouseMove
   * @description event to update my participant mouse position to others participants
   * @returns {void}
   */
  private onMyParticipantMouseMove = (event: MouseEvent): void => {
    if (this.isPrivate) return;
    const container = event.currentTarget as HTMLDivElement;

    const { left, top } = container.getBoundingClientRect();

    const x = (event.x - left - this.baselineCoordinates.x) / this.baselineCoordinates.scale;
    const y = (event.y - top - this.baselineCoordinates.y) / this.baselineCoordinates.scale;

    this.realtime.updatePresenceMouse({
      ...this.localParticipant,
      x,
      y,
      visible: true,
      scale: this.baselineCoordinates.scale,
    });
  };

  /**
   * @function onMyParticipantMouseLeave
   * @param {MouseEvent} event - The MouseEvent object
   * @returns {void}
   */
  private onMyParticipantMouseLeave = (): void => {
    this.realtime.updatePresenceMouse({ visible: false, ...this.localParticipant });
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
      const followingAnotherParticipant =
        this.userBeingFollowedId &&
        participant.id !== this.userBeingFollowedId &&
        this.presences.has(participant.id);

      // When the user is following a participant, every other mouse pointer is removed
      if (followingAnotherParticipant) {
        this.removePresenceMouseParticipant(participant.id);
        return;
      }

      this.presences.set(participant.id, participant);
    });

    this.animate();
    this.updateParticipantsMouses();
  };

  private goToMouse = (id: string): void => {
    const participant = this.presences.get(id);
    if (!participant) return;

    if (this.goToPresenceCallback) {
      const { x, y } = this.mouses.get(id).getBoundingClientRect();
      this.goToPresenceCallback({ x, y });
      return;
    }

    this.mouses.get(id).scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
  };

  /**
   * @function followMouse
   * @description handler for follow mouse event
   * @param id
   */
  private followMouse = (id: string) => {
    this.userBeingFollowedId = id;
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
   * @function setParticipantPrivate
   * @description perform animation in presence mouse
   * @returns {void}
   */
  private setParticipantPrivate = (isPrivate: boolean): void => {
    this.isPrivate = isPrivate;
    this.realtime.updatePresenceMouse({ ...this.localParticipant, visible: !isPrivate });
  };

  // ---------- HELPERS ----------
  /**
   * @function setPositionNotStatic
   * @description sets the position of the element to relative if it is static
   * @param {HTMLElement} element the element to be checked
   * @returns {void}
   */
  private setPositionNotStatic(): void {
    const { position } = window.getComputedStyle(this.container);
    if (position !== 'static') return;

    this.container.style.setProperty('position', 'relative');
  }

  /**
   * @function createMouseElement
   * @description create mouse element
   * @param mouse - participant mouse
   * @returns {HTMLDivElement}
   */
  private createMouseElement(participant: ParticipantMouse): HTMLDivElement {
    if (!this.wrapper) return;

    const mouseFollower = document.createElement('div');
    mouseFollower.setAttribute('id', `mouse-${participant.id}`);
    mouseFollower.setAttribute('class', 'mouse-follower');
    const pointerMouse = document.createElement('div');
    pointerMouse.setAttribute('class', 'pointer-mouse');

    const mouseUserName = document.createElement('div');
    mouseUserName.setAttribute('class', 'mouse-user-name');
    mouseUserName.innerHTML = participant.name;

    mouseFollower.appendChild(pointerMouse);
    mouseFollower.appendChild(mouseUserName);

    this.wrapper.appendChild(mouseFollower);
    this.mouses.set(participant.id, mouseFollower);
    return mouseFollower;
  }

  /**
   * @function getTextColorValue
   * @param slotIndex - slot index
   * @returns {string} - The color of the text in hex format
   * */
  private getTextColorValue = (slotIndex: number): string => {
    return INDEX_IS_WHITE_TEXT.includes(slotIndex) ? '#FFFFFF' : '#26242A';
  };

  /**
   * @function updateSVGPosition
   * @description - Updates the position of the wrapper of a <svg> element
   * @param {SVGElement} element - The svg element
   * @returns {void}
   */
  private updateSVGPosition() {
    const parentRect = this.container.parentElement.getBoundingClientRect();
    const elementRect = this.container.getBoundingClientRect();
    const left = elementRect.left - parentRect.left;
    const top = elementRect.top - parentRect.top;

    const { width, height } = this.container.getBoundingClientRect();

    this.wrapper.style.setProperty('width', `${width}px`);
    this.wrapper.style.setProperty('height', `${height}px`);
    this.wrapper.style.setProperty('top', `${top}px`);
    this.wrapper.style.setProperty('left', `${left}px`);
  }

  /**
   * @function createSVGWrapper
   * @description - Creates a wrapper for an svg element
   * @param {SVGElement} svg - The svg element
   * @param {string} id - The data attribute value of the svg element
   */
  private createSVGWrapper(): void {
    const wrapper = document.createElement('div');

    const parentRect = this.container.parentElement.getBoundingClientRect();
    const elementRect = this.container.getBoundingClientRect();
    const left = elementRect.left - parentRect.left;
    const top = elementRect.top - parentRect.top;

    const { width, height } = this.container.getBoundingClientRect();

    wrapper.style.position = 'absolute';
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;
    wrapper.style.top = `${top}px`;
    wrapper.style.left = `${left}px`;
    wrapper.style.overflow = 'visible';
    this.container.parentElement.appendChild(wrapper);
  }

  /**
   * @function createRectWrapper
   * @description - Creates a wrapper for a rect element
   * @param {SVGElement} rect - The rect element
   * @param {string} id - The data attribute value of the rect element
   */
  private createRectWrapper(): void {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const wrapper = document.createElement('div');

    const width = this.container.getAttribute('width');
    const height = this.container.getAttribute('height');
    const rx = this.container.getAttribute('rx');
    const ry = this.container.getAttribute('ry');

    svgElement.setAttribute('fill', 'transparent');
    svgElement.setAttribute('stroke', 'transparent');
    svgElement.setAttribute('x', '0');
    svgElement.setAttribute('y', '0');
    svgElement.setAttribute('rx', rx);
    svgElement.setAttribute('ry', ry);
    svgElement.setAttribute('height', height);
    svgElement.setAttribute('width', width);

    svg.setAttribute('height', height);
    svg.setAttribute('width', width);
    svg.appendChild(svgElement);

    wrapper.appendChild(svg);

    const viewportRect = this.container.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;
    wrapper.style.overflow = 'visible';

    // here we get the topmost svg element, in case there are nested svgs
    let externalViewport = (this.container as SVGElement).viewportElement;
    while (externalViewport.viewportElement) {
      externalViewport = externalViewport.viewportElement;
    }

    externalViewport.parentElement.appendChild(wrapper);

    this.wrapper = wrapper;
    this.containerTagname = SVGElements.RECT;
  }

  /**
   * @function createEllipseWrapper
   * @description - Creates a wrapper for an ellipse element
   * @returns {void}
   */
  private createEllipseWrapper(): void {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    const wrapper = document.createElement('div');

    const cx = this.container.getAttribute('cx');
    const cy = this.container.getAttribute('cy');
    const rx = this.container.getAttribute('rx');
    const ry = this.container.getAttribute('ry');
    const x = Number(cx) - Number(rx);
    const y = Number(cy) - Number(ry);
    const width = String(2 * Number(cx));
    const height = String(2 * Number(cy));

    svgElement.setAttribute('fill', 'transparent');
    svgElement.setAttribute('stroke', 'transparent');
    svgElement.setAttribute('x', '0');
    svgElement.setAttribute('y', '0');
    svgElement.setAttribute('rx', rx);
    svgElement.setAttribute('ry', ry);
    svgElement.setAttribute('cx', `${Number(cx) - x}`);
    svgElement.setAttribute('cy', `${Number(cy) - y}`);
    svgElement.setAttribute('height', height);
    svgElement.setAttribute('width', width);

    svg.setAttribute('height', height);
    svg.setAttribute('width', width);
    svg.appendChild(svgElement);

    wrapper.appendChild(svg);

    const viewportRect = this.container.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;
    wrapper.style.overflow = 'visible';

    // here we get the topmost svg element, in case there are nested svgs
    let externalViewport = (this.container as SVGElement).viewportElement;
    while (externalViewport.viewportElement) {
      externalViewport = externalViewport.viewportElement;
    }

    externalViewport.parentElement.appendChild(wrapper);

    this.wrapper = wrapper;
  }

  // ---------- REGULAR METHODS ----------

  /**
   * @function animate
   * @description perform animation in presence mouse
   * @returns {void}
   */
  private animate = (): void => {
    if (VoidElements[this.containerTagname]) {
      this.updateVoidElementWrapper();
    } else if (SVGElements[this.containerTagname]) {
      this.updateSVGElementWrapper();
    }

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  private updateParticipantsMouses = (): void => {
    this.presences.forEach((mouse) => {
      if (mouse.id === this.localParticipant.id) return;

      if (!mouse?.visible) {
        this.removePresenceMouseParticipant(mouse.id);
        return;
      }

      this.renderPresenceMouses(mouse);
    });

    const isFollowingSomeone = this.presences.has(this.userBeingFollowedId);
    if (isFollowingSomeone) {
      this.goToMouse(this.userBeingFollowedId);
    }
  };

  /**
   * @function updateVoidElementWrapper
   * @description - Updates the position of each wrapper for void elements
   * @returns {void}
   */
  private updateVoidElementWrapper(): void {
    const elementRect = this.container.getBoundingClientRect();
    const wrapperRect = this.wrapper.getBoundingClientRect();

    const container = this.container as HTMLElement;

    if (isEqual(elementRect, wrapperRect)) return;
    const left = container.offsetLeft;
    const top = container.offsetTop;
    this.wrapper.style.setProperty('width', `${elementRect.width}px`);
    this.wrapper.style.setProperty('height', `${elementRect.height}px`);
    this.wrapper.style.setProperty('top', `${top}px`);
    this.wrapper.style.setProperty('left', `${left}px`);
  }

  /**
   * @function updateVoidElementWrapper
   * @description - Updates the position of each wrapper for void elements
   * @returns {void}
   */
  private updateSVGElementWrapper(): void {
    const {
      left: cLeft,
      top: cTop,
      width: cWidth,
      height: cHeight,
    } = this.container.getBoundingClientRect();

    const {
      left: wLeft,
      top: wTop,
      width: wWidth,
      height: wHeight,
    } = this.wrapper.getBoundingClientRect();

    if (cLeft === wLeft && cTop === wTop && cWidth === wWidth && cHeight === wHeight) return;

    if (this.containerTagname === SVGElements.SVG) {
      this.updateSVGPosition();
      return;
    }

    this.wrapper.style.setProperty('width', `${cWidth}px`);
    this.wrapper.style.setProperty('height', `${cHeight}px`);
    this.wrapper.style.setProperty('top', `${cTop}px`);
    this.wrapper.style.setProperty('left', `${cLeft}px`);
  }

  /**
   * @function renderWrapper
   * @description prepares, creates and renders a wrapper for the specified element
   * @param {HTMLElement} element the element to be wrapped
   * @param {string} id the id of the element
   * @returns {void}
   */
  private renderWrapper() {
    if (this.wrapper) return;

    const tagName = this.container.tagName.toUpperCase();
    this.containerTagname = tagName;

    if (VoidElements[tagName]) {
      this.renderVoidElementWrapper();
      return;
    }

    if (SVGElements[tagName]) {
      this.renderSVGElementWrapper();
      return;
    }

    this.renderElementWrapper();
  }

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
      this.mouses.delete(participantId);
    }
  }

  /**
   * @function renderPresenceMouses
   * @description add presence mouses to screen
   * @param {ParticipantMouse} mouse - presence mouse change data
   * @returns {void}
   * */
  private renderPresenceMouses = (participant: ParticipantMouse): void => {
    if (participant.id === this.localParticipant.id) return;

    let mouseFollower = document.getElementById(`mouse-${participant.id}`);

    if (mouseFollower) {
      mouseFollower.remove();
      this.mouses.delete(participant.id);
      mouseFollower = null;
    }

    if (!mouseFollower) {
      mouseFollower = this.createMouseElement(participant);
    }

    if (!mouseFollower) return;

    const mouseUser = mouseFollower.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
    const pointerUser = mouseFollower.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;

    if (pointerUser) {
      pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers-v2/${participant.slotIndex}.svg)`;
    }

    if (mouseUser) {
      mouseUser.style.color = this.getTextColorValue(participant.slotIndex);
      mouseUser.style.backgroundColor = participant.color;
      mouseUser.innerHTML = participant.name;
    }

    const { x, y } = participant;
    const { x: baseX, y: baseY, scale } = this.baselineCoordinates;
    mouseFollower.style.left = '0px';
    mouseFollower.style.top = '0px';

    // mouseFollower.style.transform = `translate(${((baseX + x) * scale) / participant.scale}px, ${
    //   ((baseY + y) * scale) / participant.scale
    // }px)`;

    mouseFollower.style.transform = `translate(${baseX + x * scale}px, ${baseY + y * scale}px)`;
  };

  /**
   * @function renderElementWrapper
   * @description - Creates wrapper for regular, non-void and non-svg related elements
   * @param {HTMLElement} element - The element to be wrapped
   * @param {string} id - The id of the element
   * @returns {void}
   */
  private renderElementWrapper(): void {
    const wrapper = document.createElement('div');

    wrapper.style.position = 'absolute';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.overflow = 'visible';
    wrapper.style.pointerEvents = 'none';
    this.setPositionNotStatic();
    this.container.appendChild(wrapper);
    this.wrapper = wrapper;
  }

  /**
   * @function renderVoidElementWrapper
   * @description - Creates wrapper for void elements
   * @param {HTMLElement} element - The element to be wrapped
   * @param {string} id - The id of the element
   * @returns {void}
   */
  private renderVoidElementWrapper = (): void => {
    const wrapper = document.createElement('div');
    const container = this.container as HTMLElement;
    const { width, height, left, top } = this.container.getBoundingClientRect();
    const x = container.offsetLeft - left;
    const y = container.offsetTop - top;

    wrapper.style.position = 'absolute';
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;
    wrapper.style.top = `${top}px`;
    wrapper.style.left = `${left}px`;
    wrapper.style.overflow = 'visible';
    this.container.parentElement.appendChild(wrapper);
    this.wrapper = wrapper;
  };

  /**
   * @function renderSVGElementWrapper
   * @description - Handles the creation of wrappers for svg elements
   * @param {SVGElement} element - The svg element (be it an ellipse or a rect)
   * @param {string} id - The data attribute value of the svg element
   * @returns {void}
   */
  private renderSVGElementWrapper = (): void => {
    const elementName = this.container.tagName.toLowerCase();

    const isSvgElement = elementName === 'svg';
    if (isSvgElement) this.createSVGWrapper();

    const isRectElement = elementName === 'rect';
    if (isRectElement) this.createRectWrapper();

    const isEllipseElement = elementName === 'ellipse';
    if (isEllipseElement) this.createEllipseWrapper();
  };
}

// @todo aNIMATE IN CASE OF VOID OR SVG ELEMENTS
