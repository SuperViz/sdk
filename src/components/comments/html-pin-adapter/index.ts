import { Logger, Observer } from '../../../common/utils';
import { PinMode } from '../../../web-components/comments/components/types';
import { Annotation, PinAdapter, PinCoordinates } from '../types';

import {
  HorizontalSide,
  TranslateAndScale,
  Simple2DPoint,
  SimpleParticipant,
  TemporaryPinData,
} from './types';

export class HTMLPin implements PinAdapter {
  // Public properties
  // Observers
  public onPinFixedObserver: Observer;

  // Private properties
  // Comments data
  private annotations: Annotation[];
  private localParticipant: SimpleParticipant = {};

  // Loggers
  private logger: Logger;

  // Booleans
  private isActive: boolean;
  private isPinsVisible: boolean = true;
  private movedTemporaryPin: boolean;

  // Data about the current state of the application
  private selectedPin: HTMLElement | null = null;
  private dataAttribute: string = 'data-superviz-id';

  // Coordinates/Positions
  private mouseDownCoordinates: Simple2DPoint;
  private commentsSide: HorizontalSide = 'left';
  private temporaryPinCoordinates: TemporaryPinData = {};

  // Elements
  private container: HTMLElement;
  private pinsContainer: HTMLDivElement;
  private elementsWithDataId: Record<string, HTMLElement> = {};
  private divWrappers: Map<string, HTMLElement> = new Map();
  private pins: Map<string, HTMLElement>;
  private traversedDom: Set<HTMLElement> = new Set();

  // Observers
  private resizeObserver: ResizeObserver;
  private mutationObserver: MutationObserver;

  constructor(containerId: string, dataAttributeName?: string) {
    this.logger = new Logger('@superviz/sdk/comments-component/container-pin-adapter');
    this.container = document.getElementById(containerId) as HTMLElement;

    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.createPinsContainer();
    this.dataAttribute = dataAttributeName || this.dataAttribute;
    this.isActive = false;
    this.prepareElements();

    this.mutationObserver = new MutationObserver(this.handleMutationObserverChanges);
    this.resizeObserver = new ResizeObserver(this.handleResizeObserverChanges);
    this.observeContainer();
    this.observeElements();

    this.pins = new Map();
    this.onPinFixedObserver = new Observer({ logger: this.logger });
    this.annotations = [];

    document.body.addEventListener('select-annotation', this.annotationSelected);
    Object.values(this.elementsWithDataId).forEach((element) => {
      this.addScrollListeners(element);
    });
  }

  // ------- setup -------
  /**
   * @function destroy
   * @description destroys the pin adapter.
   * @returns {void}
   * */
  public destroy(): void {
    this.logger.log('Destroying HTML Pin Adapter for Comments');
    this.removeListeners();
    this.removeObservers();
    this.divWrappers.forEach((divWrapper) => divWrapper.remove());
    this.divWrappers.clear();
    this.pins.forEach((pin) => pin.remove());
    this.pins.clear();
    delete this.divWrappers;
    delete this.pins;
    delete this.elementsWithDataId;
    delete this.logger;
    this.onPinFixedObserver.destroy();
    delete this.onPinFixedObserver;
    this.pinsContainer.remove();
    delete this.pinsContainer;
    delete this.container;

    this.annotations = [];

    document.body.removeEventListener('select-annotation', this.annotationSelected);
    document.body.removeEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
    this.traversedDom.forEach((element) => {
      element.removeEventListener('scroll', this.onScroll);
    });
  }

  /**
   * @function addElementListeners
   * @description adds event listeners to the element.
   * @param {string} id the id of the element to add the listeners to.
   * @returns {void}
   */
  private addElementListeners(id: string): void {
    this.divWrappers.get(id).addEventListener('click', this.onClick, true);
    this.divWrappers.get(id).addEventListener('mousedown', this.onMouseDown);
  }

  /**
   * @function removeElementListeners
   * @description removes event listeners from the element
   * @param {string} id the id of the element to remove the listeners from.
   * @param {boolean} keepObserver whether to keep he resize observer or not.
   * @returns {void}
   */
  private removeElementListeners(id: string, keepObserver?: boolean): void {
    this.divWrappers.get(id).removeEventListener('click', this.onClick, true);
    this.divWrappers.get(id).removeEventListener('mousedown', this.onMouseDown);

    if (keepObserver) return;

    this.resizeObserver.unobserve(this.elementsWithDataId[id]);
  }

  /**
   * @function removeObservers
   * @description disconnects the mutation and resize observers.
   * @returns {void}
   */
  private removeObservers(): void {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    delete this.mutationObserver;
    delete this.resizeObserver;
  }

  /**
   * @function addListeners
   * @description adds event listeners to the container element.
   * @returns {void}
   */
  private addListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.addElementListeners(id));
    document.body.addEventListener('keyup', this.resetPins);
    document.body.addEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
  }

  /**
   * @function addScrollListeners
   * @description adds scroll event listeners to the element and its parents, until a parent that already has the scroll listener is found.
   * @param {HTMLElement} element the element to add the scroll listener to.
   * @returns {void}
   */
  private addScrollListeners(element: HTMLElement): void {
    let el = element;
    while (el.parentElement) {
      el = el.parentElement;

      if (this.traversedDom.has(el)) break;

      this.traversedDom.add(el);
      el.addEventListener('scroll', this.onScroll);
    }
  }

  /**
   * @function removeListeners
   * @description removes event listeners from the container element.
   * @returns {void}
   * */
  private removeListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.removeElementListeners(id, true));
    document.body.removeEventListener('keyup', this.resetPins);
  }

  /**
   * @function observeElements
   * @description observes the elements with the specified data attribute.
   * @returns {void}
   */
  private observeElements(): void {
    Object.values(this.elementsWithDataId).forEach((element) => {
      this.resizeObserver.observe(element);
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
      attributeFilter: [this.dataAttribute],
      attributeOldValue: true,
    });
  }

  /**
   * @function prepareElements
   * @description sets elements with the specified data attribute as pinnable.
   * @returns {void}
   */
  private prepareElements(): void {
    const elementsWithDataId = this.container.querySelectorAll(`[${this.dataAttribute}]`);

    elementsWithDataId.forEach((el: HTMLElement) => {
      const id = el.getAttribute(this.dataAttribute);
      this.setElementReadyToPin(el, id);
    });
  }

  /**
   * @function setAddCursor
   * @description sets the mouse cursor to a special cursor when hovering over all the elements with the specified data-attribute.
   * @returns {void}
   */
  private setAddCursor(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => {
      this.divWrappers.get(id).style.cursor =
        'url("https://production.cdn.superviz.com/static/pin-add.png") 0 100, pointer';
      this.divWrappers.get(id).style.pointerEvents = 'auto';
    });
  }

  /**
   * @function removeAddCursor
   * @description removes the special cursor.
   * @returns {void}
   */
  private removeAddCursor(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => {
      this.divWrappers.get(id).style.cursor = 'default';
      this.divWrappers.get(id).style.pointerEvents = 'none';
    });
  }

  // ------- public methods -------
  /**
   * @function setPinsVisibility
   * @description sets the visibility of the pins, hides them if it is not visible.
   * @param {boolean} isVisible controls the visibility of the pins.
   * @returns {void}
   */
  public setPinsVisibility(isVisible: boolean): void {
    this.isPinsVisible = isVisible;

    if (this.isPinsVisible) {
      this.renderAnnotationsPins();
    }

    this.removeAnnotationsPins();
  }

  /**
   * @function translatePins
   * @description translates the wrapper containing all the pins of an element
   * @param {string} elementId
   * @param {Partial<TranslateAndScale>} options the values to be applied to the transform property of the specified wrapper
   * @returns {void}
   */
  public translateAndScalePins = (elementId: string, options: Partial<TranslateAndScale>): void => {
    const wrapper = this.divWrappers.get(elementId);
    if (!wrapper) return;

    const { scale, translateX, translateY } = options;
    const {
      scale: currentScale,
      translateX: currentTranslateX,
      translateY: currentTranslateY,
    } = this.parseTransform(wrapper.style.transform);

    wrapper.style.transform = `scale(${scale ?? currentScale}) translateX(${
      translateX ?? currentTranslateX
    }px) translateY(${translateY ?? currentTranslateY}px)`;
  };

  /**
   * @function translateAndScaleContainer
   * @description apply a translation and scales the container containing all the pins
   * @param {Partial<TranslateAndScale>} options the values to be applied to the transform property of the general pins container
   * @returns {void}
   */
  public translateAndScaleContainer = (options: Partial<TranslateAndScale>): void => {
    const { scale, translateX, translateY } = options;
    const {
      scale: currentScale,
      translateX: currentTranslateX,
      translateY: currentTranslateY,
    } = this.parseTransform(this.pinsContainer.style.transform);

    const transform = `scale(${scale ?? currentScale}) translateX(${
      translateX ?? currentTranslateX
    }px) translateY(${translateY ?? currentTranslateY}px)`;
    this.pinsContainer.style.transform = transform;
  };

  /**
   * @function removeAnnotationPin
   * @description Removes an annotation pin from the container.
   * @param {string} uuid - The uuid of the annotation to be removed.
   * @returns {void}
   * */
  public removeAnnotationPin(uuid: string): void {
    const pinElement = this.pins.get(uuid);

    if (!pinElement && uuid === 'temporary-pin') return;

    if (pinElement) {
      pinElement.remove();
      this.pins.delete(uuid);
    }

    this.annotations = this.annotations.filter((annotation) => {
      return annotation.uuid !== uuid;
    });
  }

  /**
   * @function setCommentsMetadata
   * @description stores data related to the local participant
   * @param {HorizontalSide} side whether the comments sidebar is on the left or right side of the screen
   * @param {string} avatar the avatar of the local participant
   * @param {string} name the name of the local participant
   * @returns {void}
   */
  public setCommentsMetadata = (side: HorizontalSide, avatar: string, name: string): void => {
    this.commentsSide = side;
    this.localParticipant.avatar = avatar;
    this.localParticipant.name = name;
  };

  /**
   * @function updateAnnotations
   * @description updates the annotations of the container.
   * @param {Annotation[]} annotations new annotation to be added to the container.
   * @returns {void}
   */
  public updateAnnotations(annotations: Annotation[]): void {
    this.logger.log('updateAnnotations', annotations);

    this.annotations = annotations;

    if (!this.isPinsVisible) return;

    this.removeAnnotationsPins();
    this.renderAnnotationsPins();
  }

  /**
   * @function setActive
   * @description sets the container pin adapter as active or not
   * @param {boolean} isOpen whether the container pin adapter is active or not.
   * @returns {void}
   */
  public setActive(isOpen: boolean): void {
    this.isActive = isOpen;

    if (this.isActive) {
      this.addListeners();
      this.setAddCursor();
      this.prepareElements();
      return;
    }

    this.removeListeners();
    this.removeAddCursor();
  }

  /**
   * @function renderTemporaryPin
   * @description creates a temporary pin with the id temporary-pin to mark where the annotation is being created
   * @param {string} elementId the id of the element where the temporary pin will be rendered.
   * @returns {void}
   */
  public renderTemporaryPin(elementId?: string): void {
    this.temporaryPinCoordinates.elementId ||= elementId;
    let temporaryPin = this.pins.get('temporary-pin');

    if (elementId && elementId !== this.temporaryPinCoordinates.elementId) {
      this.temporaryPinContainer.remove();
      this.pins.delete('temporary-pin');
      this.temporaryPinCoordinates.elementId = elementId;
      temporaryPin = null;
    }

    if (!temporaryPin) {
      const elementSides = this.elementsWithDataId[elementId].getBoundingClientRect();

      temporaryPin = document.createElement('superviz-comments-annotation-pin');
      temporaryPin.id = 'superviz-temporary-pin';
      temporaryPin.setAttribute('type', PinMode.ADD);
      temporaryPin.setAttribute('showInput', '');
      temporaryPin.setAttribute('containerSides', JSON.stringify(elementSides));
      temporaryPin.setAttribute('commentsSide', this.commentsSide);
      temporaryPin.setAttribute('position', JSON.stringify(this.temporaryPinCoordinates));
      temporaryPin.setAttribute('annotation', JSON.stringify({}));
      temporaryPin.setAttribute('localAvatar', this.localParticipant.avatar ?? '');
      temporaryPin.setAttribute('localName', this.localParticipant.name ?? '');
      temporaryPin.setAttributeNode(document.createAttribute('active'));

      this.addTemporaryPinToElement(elementId, temporaryPin);
    }

    const { x, y } = this.temporaryPinCoordinates;

    temporaryPin.setAttribute('position', JSON.stringify({ x, y }));

    this.pins.set('temporary-pin', temporaryPin);
  }

  // ------- regular methods -------
  /**
   * @function renderAnnotationsPins
   * @description appends the pins on the container.
   * @returns {void}
   */
  private renderAnnotationsPins(): void {
    if (!this.annotations.length) {
      this.removeAnnotationsPins();
      return;
    }

    this.annotations.forEach((annotation) => {
      if (annotation.resolved) {
        return;
      }

      const { x, y, elementId, type } = JSON.parse(annotation.position) as PinCoordinates;
      if (type !== 'html') return;

      const element = this.elementsWithDataId[elementId];
      if (!element) return;

      const wrapper = this.divWrappers
        .get(elementId)
        ?.querySelector('[data-pins-wrapper]') as HTMLDivElement;
      if (!wrapper) return;

      if (this.pins.has(annotation.uuid)) {
        return;
      }

      const pinElement = this.createPin(annotation, x, y);
      wrapper.appendChild(pinElement);
      this.pins.set(annotation.uuid, pinElement);
    });
  }

  /**
   * @function clearElement
   * @description clears an element that no longer has the specified data attribute
   * @param {string} id the id of the element to be cleared
   * @param {boolean} keepObserver whether to keep he resize observer or not
   * @returns {void}
   */
  private clearElement(id: string, keepObserver?: boolean): void {
    const element = this.elementsWithDataId[id];
    if (!element) return;

    const wrapper = this.divWrappers.get(id);
    if (wrapper) {
      const pinsWrapper = wrapper.querySelector('[data-pins-wrapper]') as HTMLDivElement;
      const pins = pinsWrapper.children;
      const { length } = pins;

      for (let i = 0; i < length; ++i) {
        const pin = pins.item(0);
        this.pins.delete(pin.id);
        pin.remove();
      }

      wrapper.style.cursor = 'default';
      wrapper.remove();
    }

    this.removeElementListeners(id, keepObserver);
    this.divWrappers.delete(id);
    delete this.elementsWithDataId[id];
  }

  /**
   * @function resetSelectedPin
   * @description Unselects a pin by removing its 'active' attribute
   * @returns {void}
   * */
  private resetSelectedPin(): void {
    if (!this.selectedPin) return;
    this.selectedPin.removeAttribute('active');
    this.selectedPin = null;
  }

  /**
   * @function removeAnnotationsPins
   * @description clears all pins from the container.
   * @returns {void}
   */
  private removeAnnotationsPins(): void {
    this.pins.forEach((pinElement) => {
      pinElement.remove();
    });

    this.pins.clear();
  }

  /**
   * @function setElementReadyToPin
   * @description prepare an element with all necessary to add pins over it
   * @param {HTMLElement} element
   * @param {string} id
   * @returns {void}
   */
  private setElementReadyToPin(element: HTMLElement, id: string): void {
    if (this.elementsWithDataId[id]) return;

    if (!this.divWrappers.get(id)) {
      const divWrapper = this.createWrapper(element, id);
      this.divWrappers.set(id, divWrapper);
    }

    this.elementsWithDataId[id] = element;
    this.resizeObserver?.observe(element);
    this.addScrollListeners(element);

    if (!this.isActive || !this.isPinsVisible) return;

    this.divWrappers.get(id).style.cursor =
      'url("https://production.cdn.superviz.com/static/pin-add.png") 0 100, pointer';
    this.divWrappers.get(id).style.pointerEvents = 'auto';
    this.addElementListeners(id);
  }

  /**
   * @function resetPins
   * @description Unselects selected pin and removes temporary pin.
   * @param {KeyboardEvent} event the keyboard event object, this should be 'Escape'.
   * @returns {void}
   * */
  private resetPins = (event?: KeyboardEvent): void => {
    if (event && event?.key !== 'Escape') return;

    this.resetSelectedPin();

    if (!this.temporaryPinCoordinates.elementId) return;

    this.removeAnnotationPin('temporary-pin');
    this.temporaryPinContainer?.remove();
    this.temporaryPinCoordinates = {};
  };

  /**
   * @function annotationSelected
   * @description highlights the selected annotation and scrolls to it
   * @param {CustomEvent} event the emitted event object with the uuid of the selected annotation
   * @returns {void}
   */
  private annotationSelected = ({ detail: { uuid } }: CustomEvent): void => {
    if (!uuid) return;

    const annotation = this.annotations.find(
      (annotation) => annotation.uuid === this.selectedPin?.id,
    );

    this.resetPins();

    if (annotation?.uuid === uuid) return;

    document.body.dispatchEvent(new CustomEvent('close-temporary-annotation'));

    const pinElement = this.pins.get(uuid);

    if (!pinElement) return;

    pinElement.setAttribute('active', '');

    this.selectedPin = pinElement;

    const newSelectedAnnotation = this.annotations.find((annotation) => annotation.uuid === uuid);
    this.selectedPin.setAttribute(
      'elementId',
      JSON.parse(newSelectedAnnotation.position).elementId,
    );
  };

  /**
   * @function addTemporaryPinToElement
   * @description adds the temporary pin and the temporary pin container to the element with the specified id.
   * @param {string} elementId the id of the element where the temporary pin will be rendered.
   * @param {HTMLElement} pin the temporary pin to be rendered.
   * @returns {void}
   */
  private addTemporaryPinToElement(elementId: string, pin: HTMLElement): void {
    const element = this.elementsWithDataId[elementId];
    if (!element) return;

    const wrapper = this.divWrappers.get(elementId);
    if (!wrapper) return;

    const temporaryContainer = this.createTemporaryPinContainer();
    temporaryContainer.appendChild(pin);

    wrapper.appendChild(temporaryContainer);
  }

  // ------- helper functions -------
  /**
   * @function createTemporaryPinContainer
   * @description return a temporary pin container
   * @returns {HTMLDivElement} the temporary pin container, separated from the main pins container to avoid overflow issues
   */
  private createTemporaryPinContainer(): HTMLDivElement {
    const temporaryContainer = document.createElement('div');
    temporaryContainer.style.position = 'absolute';
    temporaryContainer.style.top = '0';
    temporaryContainer.style.left = '0';
    temporaryContainer.style.width = '100%';
    temporaryContainer.style.height = '100%';
    temporaryContainer.id = 'temporary-pin-container';
    return temporaryContainer;
  }

  /**
   * @function createPinsContainer
   * @description creates the container where pins will be appended and appends it to the DOM (either the parent of the element with the specified id or the body)
   * @returns {void}
   */
  private createPinsContainer(): void {
    const pinsContainer = document.createElement('div');
    pinsContainer.style.position = 'absolute';
    pinsContainer.style.top = '0';
    pinsContainer.style.left = '0';
    pinsContainer.style.width = '100%';
    pinsContainer.style.pointerEvents = 'none';
    pinsContainer.style.height = '100%';
    pinsContainer.style.transformOrigin = '0 0';
    pinsContainer.style.zIndex = '99';

    this.pinsContainer = pinsContainer;
    this.container.appendChild(pinsContainer);
  }

  /**
   * @function createPin
   * @description creates a pin element and sets its properties
   * @param {Annotation} annotation the annotation associated to the pin to be rendered
   * @param {number} x the x coordinate of the pin
   * @param {number} y the y coordinate of the pin
   * @returns {HTMLElement} the pin element
   */
  private createPin(annotation: Annotation, x: number, y: number) {
    const pinElement = document.createElement('superviz-comments-annotation-pin');
    pinElement.setAttribute('type', PinMode.SHOW);
    pinElement.setAttribute('annotation', JSON.stringify(annotation));
    pinElement.setAttribute('position', JSON.stringify({ x, y }));
    pinElement.id = annotation.uuid;

    return pinElement;
  }

  /**
   * @function createWrapper
   * @description creates a wrapper for the element with the specified id
   * @param {HTMLElement} element the element to be wrapped
   * @param {string} id the id of the element to be wrapped
   * @returns {HTMLElement} the new wrapper element
   */
  private createWrapper(element: HTMLElement, id: string): HTMLElement {
    const container = element;
    const wrapperId = `superviz-id-${id}`;

    if (this.pinsContainer.querySelector(`#${wrapperId}`)) return;

    const containerRect = container.getBoundingClientRect();

    const containerWrapper = document.createElement('div');
    containerWrapper.setAttribute('data-wrapper-id', id);
    containerWrapper.id = wrapperId;

    containerWrapper.style.position = 'fixed';
    containerWrapper.style.top = `${containerRect.top}px`;
    containerWrapper.style.left = `${containerRect.left}px`;
    containerWrapper.style.width = `${containerRect.width}px`;
    containerWrapper.style.height = `${containerRect.height}px`;
    containerWrapper.style.pointerEvents = 'none';
    containerWrapper.style.transform = 'translateX(0) translateY(0) scale(1)';
    containerWrapper.style.cursor = 'default';

    const pinsWrapper = document.createElement('div');
    pinsWrapper.setAttribute('data-pins-wrapper', '');
    pinsWrapper.style.position = 'absolute';
    pinsWrapper.style.overflow = 'hidden';
    pinsWrapper.style.top = '0';
    pinsWrapper.style.left = '0';
    pinsWrapper.style.width = '100%';
    pinsWrapper.style.height = '100%';
    containerWrapper.appendChild(pinsWrapper);

    this.pinsContainer.appendChild(containerWrapper);
    return containerWrapper;
  }

  /**
   * @function temporaryPinContainer
   * @description returns the temporary pin container
   * @returns {HTMLDivElement} the temporary pin container
   */
  private get temporaryPinContainer(): HTMLDivElement {
    return document.getElementById('temporary-pin-container') as HTMLDivElement;
  }

  // ------- callbacks -------
  /**
   * @function onClick
   * @description handles the click event on the container; mainly, creates or moves the temporary pin
   * @param {MouseEvent} event the mouse event object
   * @returns {void}
   */
  private onClick = (event: MouseEvent): void => {
    if (!this.isActive || event.target === this.pins.get('temporary-pin')) return;

    const target = event.target as HTMLElement;
    const wrapper = event.currentTarget as HTMLElement;

    if (target !== wrapper && this.pins.has(target.id)) {
      return;
    }

    const elementId = wrapper.getAttribute('data-wrapper-id');
    const rect = wrapper.getBoundingClientRect();
    const { x: mouseDownX, y: mouseDownY } = this.mouseDownCoordinates;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const originalX = mouseDownX - rect.x;
    const originalY = mouseDownY - rect.y;

    const distance = Math.hypot(x - originalX, y - originalY);
    if (distance > 10) return;

    this.onPinFixedObserver.publish({
      x,
      y: y - 30,
      type: 'html',
      elementId,
    } as PinCoordinates);

    this.resetSelectedPin();
    this.temporaryPinCoordinates = { ...this.temporaryPinCoordinates, x, y: y - 30 };
    this.renderTemporaryPin(elementId);

    const temporaryPin = this.divWrappers.get(elementId).querySelector('#superviz-temporary-pin');

    // we don't care about the actual movedTemporaryPin value
    // it only needs to trigger an update
    this.movedTemporaryPin = !this.movedTemporaryPin;
    temporaryPin.setAttribute('movedPosition', String(this.movedTemporaryPin));

    document.body.dispatchEvent(new CustomEvent('unselect-annotation'));
  };

  /**
   * @function onScroll
   * @description moves the wrappers to the correct position when the user scrolls
   * @returns {void}
   */
  private onScroll = (): void => {
    Object.entries(this.elementsWithDataId).forEach(([key, value]) => {
      const wrapper = this.divWrappers.get(key);
      const elementRect = value.getBoundingClientRect();

      wrapper.style.top = `${elementRect.top}px`;
      wrapper.style.left = `${elementRect.left}px`;
      wrapper.style.width = `${elementRect.width}px`;
      wrapper.style.height = `${elementRect.height}px`;
    });
  };

  /**
   * @function onMouseDown
   * @description stores the mouse down coordinates
   * @param {MouseEvent} event - The mouse event object.
   * @returns {void}
   */
  private onMouseDown = ({ x, y }: MouseEvent) => {
    this.mouseDownCoordinates = { x, y };
  };

  /**
   * @function handleResizeObserverChanges
   * @description handles the resize changes in the elements with the specified data attribute
   * @param {ResizeObserverEntry[]} changes the elements with the specified data attribute that have changed
   * @returns {void}
   */
  private handleResizeObserverChanges = (changes: ResizeObserverEntry[]): void => {
    changes.forEach((change) => {
      const element = change.target as HTMLElement;
      const elementId = element.getAttribute(this.dataAttribute);
      const elementRect = element.getBoundingClientRect();
      const wrapper = this.divWrappers.get(elementId);

      wrapper.style.top = `${elementRect.top + window.scrollY}px`;
      wrapper.style.left = `${elementRect.left + window.scrollX}px`;
      wrapper.style.width = `${elementRect.width}px`;
      wrapper.style.height = `${elementRect.height}px`;
    });
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
      const dataId = (target as HTMLElement).getAttribute(this.dataAttribute);

      if ((!dataId && !oldValue) || dataId === oldValue) return;
      const attributeRemoved = !dataId && oldValue;

      if (attributeRemoved) {
        this.removeAnnotationPin('temporary-pin');
        this.clearElement(oldValue);

        if (this.selectedPin?.getAttribute('elementId') === oldValue) {
          document.body.dispatchEvent(new CustomEvent('unselect-annotation'));
          this.selectedPin = null;
        }

        return;
      }

      if (oldValue && this.elementsWithDataId[oldValue]) {
        this.clearElement(oldValue, true);
      }

      this.setElementReadyToPin(target as HTMLElement, dataId);
      this.renderAnnotationsPins();
    });
  };

  /**
   * @function onToggleAnnotationSidebar
   * @description Removes temporary pin and unselects selected pin
   * @param {CustomEvent} event the emitted event object with the info about if the annotation sidebar is open or not
   * @returns {void}
   */
  private onToggleAnnotationSidebar = ({ detail }: CustomEvent): void => {
    const { open } = detail;

    if (open) return;

    this.resetSelectedPin();

    if (this.pins.has('temporary-pin')) {
      this.removeAnnotationPin('temporary-pin');
    }
  };

  /**
   * @function parseTransform
   * @description parses the transform property of an element
   * @param {string} transform the transform property of an element
   * @returns {TranslateAndScale} an object with the key-value pairs of the transform property
   */
  private parseTransform(transform: string): TranslateAndScale {
    return Array.from(transform.matchAll(/(\w+)\((.+?)\)/gm)).reduce(
      (agg: any, [, property, value]: any) => ({
        ...agg,
        [property]: (value as string).replace('px', ''),
      }),
      {},
    ) as TranslateAndScale;
  }
}
