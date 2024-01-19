import { isEqual } from 'lodash';

import { RealtimeEvent } from '../../../common/types/events.types';
import { Logger } from '../../../common/utils';
import { BaseComponent } from '../../base';
import { ComponentNames } from '../../types';
import { Element, ParticipantMouse, PresenceMouseProps } from '../types';

export class MousePointersHTML extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  // Realtime data
  private presences: Map<string, ParticipantMouse> = new Map();

  // Elements
  private container: HTMLElement;
  private wrappers: Map<string, HTMLElement> = new Map();
  private elementsWithDataAttribute: Map<string, Element> = new Map();
  private voidElementsWrappers: Map<string, HTMLElement> = new Map();

  // General data about states/the application
  private dataAttributeName: string = 'data-superviz-id';
  private userBeingFollowedId: string;
  private animationFrame: number;

  // callbacks
  private goToMouseCallback: (position: { x: number; y: number }, elementId: string) => void;

  private readonly VOID_ELEMENTS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
    'svg',
  ];

  private readonly SVG_ELEMENTS = ['rect', 'ellipse'];

  /**
   * @function constructor
   * @param {string} containerId The id of the container element, inside of which may be rendered
   * @param {object} options The options object, used to customize the behavior of the component
   * @param {string} options.onGoToPresence The callback function to be called when the user, through presence controls like that of the Who Is Online component, is set to go to a participant's position
   */
  constructor(containerId: string, options?: PresenceMouseProps) {
    super();

    this.container = document.getElementById(containerId);

    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.PRESENCE}`);

    this.dataAttributeName = options?.dataAttributeName || this.dataAttributeName;

    this.elementsWithDataAttribute = this.getElementsWithDataAttribute();
    this.renderWrappers();

    this.goToMouseCallback = options?.onGoToPresence;
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
    this.addListenersToWrappers();
    this.subscribeToRealtimeEvents();

    this.animationFrame = requestAnimationFrame(this.animate);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    // this.eventBus.subscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
  }

  /**
   * @function destroy
   * @description destroy presence-mouse component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('presence-mouse component @ destroy');
    this.realtime.leavePresenceMouseChannel();
    this.removeListenersFromWrappers();
    this.wrappers.forEach((wrapper) => wrapper.remove());
    this.unsubscribeFromRealtimeEvents();

    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    // this.eventBus.unsubscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    // cancelAnimationFrame(this.animateFrame);
    // this.canvas.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    // this.canvas.removeEventListener('mouseout', this.onMyParticipantMouseOut);
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

  private addListenersToWrappers() {
    this.wrappers.forEach((wrapper) => {
      wrapper.addEventListener('mousemove', this.onMyParticipantMouseMove);
      wrapper.addEventListener('mouseout', this.onMyParticipantMouseOut);
    });
  }

  private removeListenersFromWrappers() {
    this.wrappers.forEach((wrapper) => {
      wrapper.removeEventListener('mousemove', this.onMyParticipantMouseMove);
      wrapper.removeEventListener('mouseout', this.onMyParticipantMouseOut);
    });
  }

  /**
   * @function renderWrappers
   * @description Creates a div wrapper inside or around each valid element, in which the mouse pointers will be rendered.
   * @returns {void}
   * */
  private renderWrappers(): void {
    this.elementsWithDataAttribute.forEach((element, id) => {
      const tagName = element.tagName.toLowerCase();

      if (this.VOID_ELEMENTS.includes(tagName)) {
        this.renderVoidElementWrapper(element, id);
        return;
      }

      if (this.SVG_ELEMENTS.includes(tagName)) {
        this.renderSVGElementWrapper(element, id);
        return;
      }

      this.renderElementWrapper(element, id);
    });
  }

  // ---------- CALLBACKS ----------
  /**
   * @function onMyParticipantMouseMove
   * @description event to update my participant mouse position to others participants
   * @returns {void}
   */
  private onMyParticipantMouseMove = (event: MouseEvent): void => {
    const elementId = (event.currentTarget as HTMLDivElement).getAttribute('data-wrapper-id');
    const x = event.offsetX;
    const y = event.offsetY;

    this.realtime.updatePresenceMouse({
      ...this.localParticipant,
      x,
      y,
      elementId,
      // visible: !this.isPrivate,
      visible: true,
    });
  };

  /**
   * @function onMyParticipantMouseOut
   * @param {MouseEvent} event - The MouseEvent object
   * @returns {void}
   */
  private onMyParticipantMouseOut = (event: MouseEvent): void => {
    this.realtime.updatePresenceMouse({ visible: false, ...this.localParticipant, elementId: '' });
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
        this.presences &&
        this.presences.has(participant.id);

      // When the user is following a participant, every other mouse pointer is removed
      if (followingAnotherParticipant) {
        this.removePresenceMouseParticipant(participant.id);
        return;
      }

      this.presences.set(participant.id, participant);
    });

    const isFollowingSomeone = this.presences.has(this.userBeingFollowedId);
    if (isFollowingSomeone) {
      this.goToMouse(this.userBeingFollowedId);
    }
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

  // ---------- HELPERS ----------

  /**
   * @function getElementsWithDataAttribute
   * @description Get all elements with the data attribute name
   * @returns {Record<string, Element>} The elements with the data attribute
   */
  private getElementsWithDataAttribute(): Map<string, Element> {
    const listOfElements = this.container.querySelectorAll(`[${this.dataAttributeName}]`);
    const mapOfElements: Map<string, Element> = new Map();

    Array.from(listOfElements.values()).forEach((element: Element) => {
      mapOfElements.set(element.getAttribute(this.dataAttributeName), element);
    });

    return mapOfElements;
  }

  /**
   * @function setPositionNotStatic
   * @description sets the position of the element to relative if it is static
   * @param {HTMLElement} element the element to be checked
   * @returns {void}
   */
  private setPositionNotStatic(element: HTMLElement): void {
    const { position } = window.getComputedStyle(element);
    if (position !== 'static') return;

    element.style.setProperty('position', 'relative');
  }

  /**
   * @function createMouseElement
   * @param mouse - participant mouse
   * @returns {HTMLDivElement}
   */
  private createMouseElement(participant: ParticipantMouse): HTMLDivElement {
    const mouseFollower = document.createElement('div');
    mouseFollower.setAttribute('id', `mouse-${participant.id}`);
    mouseFollower.setAttribute('class', 'mouse-follower');
    mouseFollower.setAttribute('data-element-id', participant.elementId);
    const pointerMouse = document.createElement('div');
    pointerMouse.setAttribute('class', 'pointer-mouse');

    const mouseUserName = document.createElement('div');
    mouseUserName.setAttribute('class', 'mouse-user-name');
    mouseUserName.innerHTML = participant.name;

    mouseFollower.appendChild(pointerMouse);
    mouseFollower.appendChild(mouseUserName);

    this.wrappers.get(participant.elementId).appendChild(mouseFollower);

    return mouseFollower;
  }

  /**
   * @function getTextColorValue
   * @param slotIndex - slot index
   * @returns {string} - The color of the text in hex format
   * */
  private getTextColorValue = (slotIndex: number): string => {
    return [2, 4, 5, 7, 8, 16].includes(slotIndex) ? '#FFFFFF' : '#26242A';
  };

  private createRectWrapper(rect: SVGElement, id: string): void {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const wrapper = document.createElement('div');

    const width = rect.getAttribute('width');
    const height = rect.getAttribute('height');
    const rx = rect.getAttribute('rx');
    const ry = rect.getAttribute('ry');

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
    // wrapper.setAttribute('data-wrapper-type', 'svg-rect');

    const viewportRect = rect.viewportElement.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;

    wrapper.style.setProperty('background-color', 'green');
    wrapper.setAttribute('data-wrapper-id', id);

    this.appendWrapperToSVGContainer(wrapper);
    this.wrappers.set(id, wrapper);
    this.voidElementsWrappers.set(id, wrapper);
  }

  private createEllipseWrapper(ellipse: SVGElement, id: string): void {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const wrapper = document.createElement('div');

    const cx = ellipse.getAttribute('cx');
    const cy = ellipse.getAttribute('cy');
    const rx = ellipse.getAttribute('rx');
    const ry = ellipse.getAttribute('ry');
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
    wrapper.setAttribute('data-wrapper-id', id);
    // wrapper.setAttribute('data-wrapper-type', 'svg-ellipse');

    const viewportRect = ellipse.viewportElement.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;

    wrapper.setAttribute('data-wrapper-id', id);

    this.appendWrapperToSVGContainer(wrapper);
    this.wrappers.set(id, wrapper);
    this.voidElementsWrappers.set(id, wrapper);
  }

  private appendWrapperToSVGContainer(wrapper: HTMLDivElement) {
    let SVGContainer = document.getElementById('svg-wrappers-container');

    if (!SVGContainer) {
      SVGContainer = document.createElement('div');
      SVGContainer.setAttribute('id', 'svg-wrappers-container');
      this.container.appendChild(SVGContainer);
    }

    SVGContainer.appendChild(wrapper);
  }

  // ---------- REGULAR METHODS ----------

  /**
   * @function animate
   * @description perform animation in presence mouse
   * @returns {void}
   */
  private animate = (): void => {
    this.updateVoidElementWrapper();
    this.updateParticipantsMouses();

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  private updateParticipantsMouses = (): void => {
    this.presences.forEach((mouse) => {
      if (!mouse?.visible || !mouse?.elementId) {
        this.removePresenceMouseParticipant(mouse.id);
        return;
      }

      this.renderPresenceMouses(mouse);
    });
  };

  /**
   * @function updateVoidElementWrapper
   * @description - Updates the position of each wrapper for void elements
   * @returns {void}
   */
  private updateVoidElementWrapper(): void {
    this.voidElementsWrappers.forEach((wrapper, id) => {
      const elementRect = this.elementsWithDataAttribute.get(id).getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();

      if (isEqual(elementRect, wrapperRect)) return;

      wrapper.style.setProperty('width', `${elementRect.width}px`);
      wrapper.style.setProperty('height', `${elementRect.height}px`);
      wrapper.style.setProperty('top', `${elementRect.top}px`);
      wrapper.style.setProperty('left', `${elementRect.left}px`);
    });
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
    }
  }

  /**
   * @function renderPresenceMouses
   * @description add presence mouses to screen
   * @param {ParticipantMouse} mouse - presence mouse change data
   * @returns {void}
   * */
  private renderPresenceMouses = (participant: ParticipantMouse): void => {
    const userMouseIdExist = document.getElementById(`mouse-${participant.id}`);
    let mouseFollower = userMouseIdExist;

    if (mouseFollower && mouseFollower.getAttribute('data-element-id') !== participant.elementId) {
      mouseFollower.remove();
      mouseFollower = null;
    }

    if (!mouseFollower) {
      mouseFollower = this.createMouseElement(participant);
    }

    const divMouseUser = document.getElementById(`mouse-${participant.id}`);
    const divPointer = document.getElementById(`mouse-${participant.id}`);

    if (!divMouseUser || !divPointer) return;

    const mouseUser = divMouseUser.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
    const pointerUser = divPointer.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;

    if (pointerUser) {
      pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers/${participant.slotIndex}.svg)`;
    }

    if (mouseUser) {
      mouseUser.style.color = this.getTextColorValue(participant.slotIndex);
      mouseUser.style.backgroundColor = participant.color;
      mouseUser.innerHTML = participant.name;
    }

    const { x, y } = participant;

    mouseFollower.style.left = `${x}px`;
    mouseFollower.style.top = `${y}px`;
  };

  /**
   * @function renderElementWrapper
   * @description - Creates wrapper for regular, non-void and non-svg related elements
   * @param {HTMLElement} element - The element to be wrapped
   * @param {string} id - The id of the element
   * @returns {void}
   */
  private renderElementWrapper(element: HTMLElement, id: string): void {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-wrapper-id', id);
    wrapper.style.position = 'absolute';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.overflow = 'visible';
    wrapper.style.backgroundColor = 'red';
    this.setPositionNotStatic(element);
    element.appendChild(wrapper);
    this.wrappers.set(id, wrapper);
  }

  /**
   * @function renderVoidElementWrapper
   * @description - Creates wrapper for void elements
   * @param {HTMLElement} element - The element to be wrapped
   * @param {string} id - The id of the element
   * @returns {void}
   */
  private renderVoidElementWrapper = (element: HTMLElement, id: string): void => {
    const wrapper = document.createElement('div');
    const { left, top, width, height } = element.getBoundingClientRect();

    wrapper.setAttribute('data-wrapper-id', id);
    wrapper.style.position = 'fixed';
    wrapper.style.width = `${width}px`;
    wrapper.style.height = `${height}px`;
    wrapper.style.top = `${top}px`;
    wrapper.style.left = `${left}px`;
    wrapper.style.overflow = 'visible';
    wrapper.style.backgroundColor = 'red';
    element.parentElement.appendChild(wrapper);
    this.wrappers.set(id, wrapper);
    this.voidElementsWrappers.set(id, wrapper);
  };

  private renderSVGElementWrapper = (element: SVGElement, id: string): void => {
    const elementName = element.tagName.toLowerCase();

    const isRectElement = elementName === 'rect';
    if (isRectElement) this.createRectWrapper(element, id);

    const isEllipseElement = elementName === 'ellipse';
    if (isEllipseElement) this.createEllipseWrapper(element, id);
  };

  // ---------- TODO ----------

  private setParticipantPrivate = (isPrivate: boolean): void => {};

  private goToMouse = (id: string): void => {};

  private followMouse = (id: string) => {};
}
