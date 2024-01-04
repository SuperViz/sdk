import { Logger, Observer } from '../../../common/utils';
import { PinMode } from '../../../web-components/comments/components/types';
import { Annotation, PinAdapter, PinCoordinates } from '../types';

import { HorizontalSide, Simple2DPoint, SimpleParticipant, TemporaryPinData } from './types';

export class HTMLPin implements PinAdapter {
  private logger: Logger;
  private container: HTMLElement;
  private isActive: boolean;
  private isPinsVisible: boolean = true;
  private annotations: Annotation[];
  private animateFrame: number;
  private selectedPin: HTMLElement | null = null;
  private mouseDownCoordinates: Simple2DPoint;
  public onPinFixedObserver: Observer;
  private commentsSide: HorizontalSide = 'left';
  private temporaryPinCoordinates: TemporaryPinData;
  private localParticipant: SimpleParticipant = {};
  private elementsWithDataId: Record<string, HTMLElement> = {};
  private divWrappers: Map<string, HTMLElement>;
  private pins: Map<string, HTMLElement>;
  private movedTemporaryPin: boolean;
  private resizeObserver: ResizeObserver;
  private mutationObserver: MutationObserver;

  constructor(containerId: string) {
    this.logger = new Logger('@superviz/sdk/comments-component/container-pin-adapter');
    this.container = document.getElementById(containerId) as HTMLElement;
    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.isActive = false;
    this.divWrappers = this.renderDivWrapper();
    this.getElementsReady();

    this.mutationObserver = new MutationObserver(this.handleMutationObserverChanges);
    this.resizeObserver = new ResizeObserver(this.handleResizeObserverChanges);

    this.observeContainer();
    this.observeElements();

    this.pins = new Map();
    this.onPinFixedObserver = new Observer({ logger: this.logger });
    this.annotations = [];
    this.renderAnnotationsPins();

    this.animateFrame = requestAnimationFrame(this.animate);
  }

  /**
   * @function destroy
   * @description destroys the container pin adapter.
   * @returns {void}
   * */
  public destroy(): void {
    this.removeListeners();
    this.removeObservers();
    this.divWrappers.forEach((divWrapper) => divWrapper.remove());
    this.divWrappers.clear();
    this.pins = new Map();
    this.onPinFixedObserver.destroy();
    this.onPinFixedObserver = null;
    this.annotations = [];

    cancelAnimationFrame(this.animateFrame);
  }

  /**
   * @function addListeners
   * @description adds event listeners to the container element.
   * @returns {void}
   */
  private addListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.addElementListeners(id));
    document.body.addEventListener('keyup', this.resetPins);
    document.body.addEventListener('select-annotation', this.annotationSelected);
  }

  /**
   * @function removeListeners
   * @description removes event listeners from the container element.
   * @returns {void}
   * */
  private removeListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.removeElementListeners(id));
    document.body.removeEventListener('keyup', this.resetPins);
    document.body.removeEventListener('select-annotation', this.annotationSelected);
  }

  private clearElement(id: string) {
    const element = this.elementsWithDataId[id];
    if (!element) return;

    const pins = this.divWrappers.get(id).children;
    const { length } = pins;
    for (let i = 0; i < length; ++i) {
      const pin = pins.item(0);
      this.pins.delete(pin.id);
      pin.remove();
    }

    element.style.cursor = 'default';
    this.removeElementListeners(id);
    delete this.elementsWithDataId[id];
  }

  private handleMutationObserverChanges = (changes: MutationRecord[]): void => {
    changes.forEach((change) => {
      const { target, oldValue } = change;
      const dataId = (target as HTMLElement).getAttribute('data-superviz-id');

      if ((!dataId && !oldValue) || dataId === oldValue) return;

      const attributeRemoved = !dataId && oldValue;
      if (attributeRemoved) {
        this.clearElement(oldValue);
        return;
      }

      if (oldValue && this.elementsWithDataId[oldValue]) {
        this.clearElement(oldValue);
      }

      this.setElementReadyToPin(target as HTMLElement, dataId);
    });
  };

  private removeObservers() {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
  }

  private handleResizeObserverChanges = (changes: ResizeObserverEntry[]): void => {
    changes.forEach((change) => {
      const element = change.target;
      const elementId = element.getAttribute('data-superviz-id');
      const elementRect = element.getBoundingClientRect();
      const wrapper = this.divWrappers.get(elementId);
      wrapper.style.top = `${elementRect.top}px`;
      wrapper.style.left = `${elementRect.left}px`;
      wrapper.style.width = `${elementRect.width}px`;
      wrapper.style.height = `${elementRect.height}px`;
    });
  };

  private observeElements() {
    Object.values(this.elementsWithDataId).forEach((element) => {
      this.resizeObserver.observe(element);
    });
  }

  private observeContainer() {
    this.mutationObserver.observe(this.container, {
      subtree: true,
      attributes: true,
      attributeFilter: ['data-superviz-id'],
      attributeOldValue: true,
    });
  }

  private setDivWrapper(element: HTMLElement, id: string): HTMLElement {
    const container = element;
    const containerRect = container.getBoundingClientRect();

    const divWrapper = document.createElement('div');
    const wrapperId = `superviz-id-${id}`;
    divWrapper.id = wrapperId;

    this.container.parentElement.style.position = 'relative';

    divWrapper.style.position = 'fixed';
    divWrapper.style.top = `${containerRect.top}px`;
    divWrapper.style.left = `${containerRect.left}px`;
    divWrapper.style.width = `${containerRect.width}px`;
    divWrapper.style.height = `${containerRect.height}px`;
    divWrapper.style.pointerEvents = 'none';
    divWrapper.style.overflow = 'hidden';
    divWrapper.style.zIndex = '10';

    if (!this.container.querySelector(`#${wrapperId}`)) {
      container.parentElement.appendChild(divWrapper);
    }

    return divWrapper;
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
   * @function resetPins
   * @description Unselects selected pin and removes temporary pin.
   * @param {that} this - The canvas pin adapter instance.
   * @param {KeyboardEvent} event - The keyboard event object.
   * @returns {void}
   * */
  private resetPins = (event?: KeyboardEvent): void => {
    if (event && event?.key !== 'Escape') return;

    this.resetSelectedPin();
    this.removeAnnotationPin('temporary-pin');
    this.temporaryPinCoordinates = null;
  };

  private setElementReadyToPin(element: HTMLElement, id: string): void {
    if (this.elementsWithDataId[id]) return;
    if (!this.divWrappers.get(id)) {
      const divWrapper = this.setDivWrapper(element, id);
      this.divWrappers.set(id, divWrapper);
    }

    this.elementsWithDataId[id] = element;

    if (!this.isActive || !this.isPinsVisible) return;
    this.elementsWithDataId[id].style.cursor = 'url("") 0 100, pointer';
    this.addElementListeners(id);
  }

  private getElementsReady(): void {
    const elementsWithDataId = this.container.querySelectorAll('[data-superviz-id]');

    elementsWithDataId.forEach((el: HTMLElement) => {
      const id = el.getAttribute('data-superviz-id');
      this.setElementReadyToPin(el, id);
    });
  }

  private setAddCursor() {
    Object.values(this.elementsWithDataId).forEach((el) => {
      const element = el;
      element.style.cursor = 'url("") 0 100, pointer';
    });
  }

  private removeAddCursor() {
    Object.values(this.elementsWithDataId).forEach((el) => {
      const element = el;
      element.style.cursor = 'default';
    });
  }

  /**
   * @function setPinsVisibility
   * @param {boolean} isVisible - Controls the visibility of the pins.
   * @returns {void}
   */
  public setPinsVisibility(isVisible: boolean): void {
    this.isPinsVisible = isVisible;

    if (this.isPinsVisible) {
      this.renderAnnotationsPins();
    }
  }

  /**
   * @function setActive
   * @param {boolean} isOpen - Whether the container pin adapter is active or not.
   * @returns {void}
   */
  public setActive(isOpen: boolean): void {
    this.isActive = isOpen;

    if (this.isActive) {
      this.addListeners();
      this.setAddCursor();
      this.getElementsReady();
      this.observeElements();
      return;
    }

    this.removeListeners();
    this.removeAddCursor();
  }

  /**
   * @function removeAnnotationsPins
   * @description clears all pins from the canvas.
   * @returns {void}
   */
  private removeAnnotationsPins(): void {
    this.pins.forEach((pinElement) => {
      pinElement.remove();
    });

    this.pins.clear();
  }

  /**
   * @function updateAnnotations
   * @description updates the annotations of the container.
   * @param {Annotation[]} annotations - New annotation to be added to the container.
   * @returns {void}
   */
  public updateAnnotations(annotations: Annotation[]): void {
    this.logger.log('updateAnnotations', annotations);

    this.annotations = annotations;

    if (!this.isActive && !this.isPinsVisible) return;

    this.removeAnnotationsPins();
    this.renderAnnotationsPins();
  }

  /**
   * @function setMouseDownCoordinates
   * @description stores the mouse down coordinates
   * @param {MouseEvent} event - The mouse event object.
   * @returns {void}
   */
  private setMouseDownCoordinates = ({ x, y }: MouseEvent) => {
    this.mouseDownCoordinates = { x, y };
  };

  /**
   * @function annotationSelected
   * @description highlights the selected annotation and scrolls to it
   * @param {CustomEvent} event
   * @returns {void}
   */
  private annotationSelected = ({ detail: { uuid } }: CustomEvent): void => {
    if (!uuid) return;

    const annotation = JSON.parse(this.selectedPin?.getAttribute('annotation') ?? '{}');

    this.resetPins();

    if (annotation?.uuid === uuid) return;

    document.body.dispatchEvent(new CustomEvent('close-temporary-annotation'));

    const pinElement = this.pins.get(uuid);

    if (!pinElement) return;

    pinElement.setAttribute('active', '');

    this.selectedPin = pinElement;
    // this.goToPin(uuid);
  };

  /**
   * @function renderTemporaryPin
   * @description
          creates a temporary pin with the id
          temporary-pin to mark where the annotation is being created
   */
  public renderTemporaryPin(elementId?: string): void {
    let temporaryPin = this.container.querySelector('#superviz-temporary-pin') as HTMLElement;

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
      this.divWrappers.get(elementId).appendChild(temporaryPin);
    }

    if (elementId && elementId !== this.temporaryPinCoordinates.elementId) {
      const elementSides = this.elementsWithDataId[elementId].getBoundingClientRect();
      this.divWrappers.get(elementId)?.removeChild(temporaryPin);
      this.divWrappers.get(elementId).appendChild(temporaryPin);
      this.temporaryPinCoordinates.elementId = elementId;
      temporaryPin.setAttribute('containerSides', JSON.stringify(elementSides));
    }

    const { x, y } = this.temporaryPinCoordinates;

    temporaryPin.setAttribute('position', JSON.stringify({ x, y }));

    this.pins.set('temporary-pin', temporaryPin);
  }

  private addElementListeners(id: string): void {
    this.elementsWithDataId[id].addEventListener('click', this.onClick, true);
    this.elementsWithDataId[id].addEventListener('mousedown', this.setMouseDownCoordinates);
  }

  private removeElementListeners(id: string): void {
    this.elementsWithDataId[id].removeEventListener('click', this.onClick, true);
    this.elementsWithDataId[id].removeEventListener('mousedown', this.setMouseDownCoordinates);
  }

  public setCommentsMetadata = (side: 'left' | 'right', avatar: string, name: string): void => {
    this.commentsSide = side;
    this.localParticipant.avatar = avatar;
    this.localParticipant.name = name;
  };

  /**
   * @function animate
   * @description animation frame
   * @returns {void}
   */
  private animate = (): void => {
    if (this.isActive || this.isPinsVisible) {
      this.renderAnnotationsPins();
      this.renderDivWrapper();
    }

    // if (this.temporaryPinCoordinates && this.isActive) {
    //   this.renderTemporaryPin();
    // }

    requestAnimationFrame(this.animate);
  };

  /**
   * @function renderDivWrapper
   * @description Creates a div wrapper for the pins over each valid element.
   * */
  private renderDivWrapper(): Map<string, HTMLElement> {
    const divWrappers: Map<string, HTMLElement> = new Map();

    Object.entries(this.elementsWithDataId).forEach(([id, el]) => {
      const divWrapper = this.setDivWrapper(el, id);
      divWrappers.set(id, divWrapper);
    });

    return divWrappers;
  }

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

      const wrapper = this.divWrappers.get(elementId);
      if (!wrapper) return;

      if (this.pins.has(annotation.uuid)) {
        const pin = this.pins.get(annotation.uuid);

        const isVisible = wrapper.clientWidth > x && wrapper.clientHeight > y;

        if (isVisible) {
          pin.setAttribute('style', 'opacity: 1');

          this.pins.get(annotation.uuid).setAttribute('position', JSON.stringify({ x, y }));
          return;
        }

        pin.setAttribute('style', 'opacity: 0');
        return;
      }

      const pinElement = document.createElement('superviz-comments-annotation-pin');
      pinElement.setAttribute('type', PinMode.SHOW);
      pinElement.setAttribute('annotation', JSON.stringify(annotation));
      pinElement.setAttribute('position', JSON.stringify({ x, y }));
      pinElement.id = annotation.uuid;

      wrapper.appendChild(pinElement);
      this.pins.set(annotation.uuid, pinElement);
    });
  }

  private onClick = (event: MouseEvent): void => {
    if (!this.isActive || event.target === this.pins.get('temporary-pin')) return;
    const clickedElement = event.currentTarget as HTMLElement;
    const elementId = clickedElement.getAttribute('data-superviz-id');
    const rect = clickedElement.getBoundingClientRect();
    const { x: mouseDownX, y: mouseDownY } = this.mouseDownCoordinates;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const originalX = mouseDownX - rect.x;
    const originalY = mouseDownY - rect.y;

    const distance = Math.hypot(x - originalX, y - originalY);
    if (distance > 10) return;

    this.onPinFixedObserver.publish({
      x,
      y,
      type: 'html',
      elementId,
    } as PinCoordinates);

    this.resetSelectedPin();
    this.temporaryPinCoordinates = { ...this.temporaryPinCoordinates, x, y };
    this.renderTemporaryPin(elementId);

    const temporaryPin = this.container.querySelector('#superviz-temporary-pin');

    // we don't care about the actual movedTemporaryPin value
    // it only needs to trigger an update
    this.movedTemporaryPin = !this.movedTemporaryPin;
    temporaryPin.setAttribute('movedPosition', String(this.movedTemporaryPin));

    if (this.selectedPin) return;
    document.body.dispatchEvent(new CustomEvent('unselect-annotation'));
  };

  /**
   * @function removeAnnotationPin
   * @description Removes an annotation pin from the canvas.
   * @param {string} uuid - The uuid of the annotation to be removed.
   * @returns {void}
   * */
  public removeAnnotationPin(uuid: string): void {
    const pinElement = this.pins.get(uuid);

    if (!pinElement) return;

    pinElement.remove();
    this.pins.delete(uuid);
    this.annotations = this.annotations.filter((annotation) => annotation.uuid !== uuid);
  }
}
