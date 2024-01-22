import { isEqual } from 'lodash';

import { RealtimeEvent } from '../../../common/types/events.types';
import { Logger } from '../../../common/utils';
import { BaseComponent } from '../../base';
import { ComponentNames } from '../../types';
import { Element, ParticipantMouse, PresenceMouseProps } from '../types';

export class PointersHTML extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  // Realtime data
  private presences: Map<string, ParticipantMouse> = new Map();

  // Elements
  private container: HTMLElement;
  private wrappers: Map<string, HTMLElement> = new Map();
  private elementsWithDataAttribute: Map<string, Element> = new Map();
  private voidElementsWrappers: Map<string, HTMLElement> = new Map();
  private mouses: Map<string, HTMLElement> = new Map();

  // General data about states/the application
  private dataAttributeName: string = 'data-superviz-id';
  private userBeingFollowedId: string;
  private dataAttributeValueFilters: RegExp[] = [];
  private animationFrame: number;
  private isPrivate: boolean;

  // Observers
  private mutationObserver: MutationObserver;

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
    this.renderAllWrappers();

    this.mutationObserver = new MutationObserver(this.handleMutationObserverChanges);
    this.observeContainer();
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

    this.removeListenersFromWrappers();

    this.wrappers.forEach((wrapper) => wrapper.remove());
    this.wrappers.clear();
    this.wrappers = undefined;

    this.voidElementsWrappers.clear();
    this.voidElementsWrappers = undefined;

    this.presences.clear();
    this.presences = undefined;

    this.elementsWithDataAttribute.clear();
    this.elementsWithDataAttribute = undefined;

    this.mutationObserver.disconnect();
    this.mutationObserver = undefined;

    this.unsubscribeFromRealtimeEvents();

    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_PRIVATE_MODE, this.setParticipantPrivate);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, this.goToMouse);
    this.eventBus.unsubscribe(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, this.followMouse);
    this.logger &&= undefined;
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
   * @function addListenersToWrappers
   * @description adds the mousemove and mouseout listeners to each wrapper
   * @returns {void}
   */
  private addListenersToWrappers(): void {
    this.wrappers.forEach((_, id) => {
      this.addWrapperListeners(id);
    });
  }

  /**
   * @function removeListenersFromWrappers
   * @description removes the mousemove and mouseout listeners from each wrapper
   * @returns {void}
   */
  private removeListenersFromWrappers(): void {
    this.wrappers.forEach((_, id) => {
      this.removeWrapperListeners(id);
    });
  }

  /**
   * @function observeContainer
   * @description observes the container for changes in the specified data attribute.
   * @returns {void}
   */
  private observeContainer(): void {
    this.mutationObserver.observe(this.container, {
      subtree: true,
      attributes: true,
      attributeFilter: [this.dataAttributeName],
      attributeOldValue: true,
    });
  }

  /**
   * @function renderAllWrappers
   * @description Creates a div wrapper inside or around each valid element, in which the mouse pointers will be rendered.
   * @returns {void}
   * */
  private renderAllWrappers(): void {
    this.elementsWithDataAttribute.forEach((element, id) => {
      this.renderWrapper(element, id);
    });
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

    const elementId = container.getAttribute('data-wrapper-id');
    const x = event.offsetX / container.clientWidth;
    const y = event.offsetY / container.clientHeight;

    this.realtime.updatePresenceMouse({
      ...this.localParticipant,
      x,
      y,
      elementId,
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

  private goToMouse = (id: string): void => {
    const participant = this.presences.get(id);

    if (!participant) return;

    const wrapper = this.wrappers.get(participant.elementId);

    if (!wrapper) return;

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
   * @function handleMutationObserverChanges
   * @description handles the changes in the value of the specified data attribute of the elements inside the container
   * @param {MutationRecord[]} changes the changes in the value of the specified data attribute of the elements inside the container
   * @returns {void}
   */
  private handleMutationObserverChanges = (changes: MutationRecord[]): void => {
    changes.forEach((change) => {
      const { target, oldValue } = change;
      const dataId = (target as HTMLElement).getAttribute(this.dataAttributeName);
      if ((!dataId && !oldValue) || dataId === oldValue) return;

      const oldValueSkipped = this.dataAttributeValueFilters.some((filter) =>
        oldValue.match(filter),
      );

      const attributeRemoved = !dataId && oldValue && !oldValueSkipped;

      if (attributeRemoved) {
        this.clearElement(oldValue);

        return;
      }

      const skip = this.dataAttributeValueFilters.some((filter) => dataId.match(filter));

      if ((oldValue && this.elementsWithDataAttribute.get(oldValue)) || skip) {
        this.clearElement(oldValue);
      }

      if (skip) return;

      this.elementsWithDataAttribute.set(dataId, target as Element);
      this.renderWrapper(target as Element, dataId);

      this.addWrapperListeners(dataId);
    });
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
    if (!this.wrappers.get(participant.elementId)) return;

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
    this.mouses.set(participant.id, mouseFollower);
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

  /**
   * @function createRectWrapper
   * @description - Creates a wrapper for a rect element
   * @param {SVGElement} rect - The rect element
   * @param {string} id - The data attribute value of the rect element
   */
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

    const viewportRect = rect.viewportElement.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;

    wrapper.style.setProperty('background-color', 'green');
    wrapper.setAttribute('data-wrapper-id', id);

    this.wrappers.set(id, wrapper);
    this.voidElementsWrappers.set(id, wrapper);
  }

  /**
   * @function createEllipseWrapper
   * @description - Creates a wrapper for an ellipse element
   * @param {SVGElement} ellipse - The ellipse element
   * @param {string} id - The data attribute value of the ellipse element
   * @returns {void}
   */
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

    const viewportRect = ellipse.viewportElement.getBoundingClientRect();

    wrapper.style.position = 'fixed';
    wrapper.style.top = `${viewportRect.top}px`;
    wrapper.style.left = `${viewportRect.left}px`;
    wrapper.style.width = `${viewportRect.width}px`;
    wrapper.style.height = `${viewportRect.height}px`;

    wrapper.setAttribute('data-wrapper-id', id);

    this.wrappers.set(id, wrapper);
    this.voidElementsWrappers.set(id, wrapper);
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
      const left = this.elementsWithDataAttribute.get(id).offsetLeft;
      const top = this.elementsWithDataAttribute.get(id).offsetTop;

      wrapper.style.setProperty('width', `${elementRect.width}px`);
      wrapper.style.setProperty('height', `${elementRect.height}px`);
      wrapper.style.setProperty('top', `${top}px`);
      wrapper.style.setProperty('left', `${left}px`);
    });
  }

  /**
   * @function addWrapperListeners
   * @description adds the mousemove and mouseout listeners to the wrapper with the specified id
   * @param {string} id the id of the wrapper
   * @returns {void}
   */
  private addWrapperListeners(id: string): void {
    const wrapper = this.wrappers.get(id);
    if (!wrapper) return;

    wrapper.addEventListener('mousemove', this.onMyParticipantMouseMove);
    wrapper.addEventListener('mouseout', this.onMyParticipantMouseOut);
  }

  /**
   * @function removeWrapperListeners
   * @description removes the mousemove and mouseout listeners from the wrapper with the specified id
   * @param {string} id the id of the wrapper
   * @returns {void}
   */
  private removeWrapperListeners(id: string): void {
    const wrapper = this.wrappers.get(id);
    if (!wrapper) return;

    wrapper.removeEventListener('mousemove', this.onMyParticipantMouseMove);
    wrapper.removeEventListener('mouseout', this.onMyParticipantMouseOut);
  }

  /**
   * @function clearElement
   * @description clears an element that no longer has the specified data attribute
   * @param {string} id the id of the element to be cleared
   * @returns {void}
   */
  private clearElement(id: string): void {
    const element = this.elementsWithDataAttribute.get(id);
    if (!element) return;

    const wrapper = this.wrappers.get(id);
    if (wrapper) {
      wrapper.remove();
    }

    this.voidElementsWrappers.delete(id);
    this.wrappers.delete(id);
    this.elementsWithDataAttribute.delete(id);

    this.removeWrapperListeners(id);

    if (!this.voidElementsWrappers.size) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
  }

  /**
   * @function renderWrapper
   * @description prepares, creates and renders a wrapper for the specified element
   * @param {HTMLElement} element the element to be wrapped
   * @param {string} id the id of the element
   * @returns {void}
   */
  private renderWrapper(element: Element, id: string) {
    if (this.wrappers.get(id)) return;
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
    const userMouseIdExist = document.getElementById(`mouse-${participant.id}`);
    let mouseFollower = userMouseIdExist;

    if (mouseFollower && mouseFollower.getAttribute('data-element-id') !== participant.elementId) {
      mouseFollower.remove();
      this.mouses.delete(participant.id);
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
    const { width, height } = this.wrappers.get(participant.elementId).getBoundingClientRect();

    mouseFollower.style.left = `${x * width}px`;
    mouseFollower.style.top = `${y * height}px`;
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
    const { width, height } = element.getBoundingClientRect();
    const left = element.offsetLeft;
    const top = element.offsetTop;

    wrapper.setAttribute('data-wrapper-id', id);
    wrapper.style.position = 'absolute';
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

  /**
   * @function renderSVGElementWrapper
   * @description - Handles the creation of wrappers for svg elements
   * @param {SVGElement} element - The svg element (be it an ellipse or a rect)
   * @param {string} id - The data attribute value of the svg element
   * @returns {void}
   */
  private renderSVGElementWrapper = (element: SVGElement, id: string): void => {
    const elementName = element.tagName.toLowerCase();

    const isRectElement = elementName === 'rect';
    if (isRectElement) this.createRectWrapper(element, id);

    const isEllipseElement = elementName === 'ellipse';
    if (isEllipseElement) this.createEllipseWrapper(element, id);
  };
}
