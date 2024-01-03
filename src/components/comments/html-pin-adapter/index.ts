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
  private mouseDownCoordinates: Simple2DPoint;
  public onPinFixedObserver: Observer;
  private commentsSide: HorizontalSide = 'left';
  private temporaryPinCoordinates: TemporaryPinData;
  private localParticipant: SimpleParticipant = {};
  private elementsWithDataId: Record<string, HTMLElement> = {};
  private divWrappers: HTMLElement[];
  private pins: Map<string, HTMLElement>;
  private movedTemporaryPin: boolean;

  constructor(containerId: string) {
    this.logger = new Logger('@superviz/sdk/comments-component/container-pin-adapter');
    this.container = document.getElementById(containerId) as HTMLElement;
    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    this.isActive = false;
    this.observeContainer();
    this.pins = new Map();
    this.onPinFixedObserver = new Observer({ logger: this.logger });
    this.divWrappers = this.renderDivWrapper();
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
    this.divWrappers.forEach((divWrapper) => divWrapper.remove());
    this.pins = new Map();
    this.onPinFixedObserver.destroy();
    this.onPinFixedObserver = null;
    this.annotations = [];

    cancelAnimationFrame(this.animateFrame);
  }

  private clearElement(id: string) {
    const element = this.elementsWithDataId[id];
    if (!element) return;

    element.style.cursor = 'default';
    this.removeElementListeners(id);
    delete this.elementsWithDataId[id];
  }

  private handleObserverChanges = (changes: MutationRecord[]): void => {
    if (!this.isActive) return;

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

  private observeContainer() {
    const mutationObserver = new MutationObserver(this.handleObserverChanges);

    mutationObserver.observe(this.container, {
      subtree: true,
      attributes: true,
      attributeFilter: ['data-superviz-id'],
      attributeOldValue: true,
    });
  }

  private setElementReadyToPin(element: HTMLElement, id: string): void {
    if (this.elementsWithDataId[id]) return;

    this.elementsWithDataId[id] = element;
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
      return;
    }

    this.removeListeners();
    this.removeAddCursor();
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
      this.elementsWithDataId[elementId].appendChild(temporaryPin);
    }

    if (elementId && elementId !== this.temporaryPinCoordinates.elementId) {
      const elementSides = this.elementsWithDataId[elementId].getBoundingClientRect();
      this.elementsWithDataId[this.temporaryPinCoordinates.elementId]?.removeChild(temporaryPin);
      this.elementsWithDataId[elementId].appendChild(temporaryPin);
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

  /**
   * @function addListeners
   * @description adds event listeners to the container element.
   * @returns {void}
   */
  private addListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.addElementListeners(id));
  }

  public setCommentsMetadata = (side: 'left' | 'right', avatar: string, name: string): void => {
    this.commentsSide = side;
    this.localParticipant.avatar = avatar;
    this.localParticipant.name = name;
  };

  /**
   * @function removeListeners
   * @description removes event listeners from the container element.
   * @returns {void}
   * */
  private removeListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => this.removeElementListeners(id));
  }

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
  private renderDivWrapper(): HTMLElement[] {
    const divWrappers: HTMLElement[] = Object.values(this.elementsWithDataId).map((el) => {
      const container = el;
      const containerRect = container.getBoundingClientRect();

      const divWrapper = document.createElement('div');
      const dataSupervizId = container.getAttribute('data-superviz-id');
      const id = `superviz-id-${dataSupervizId}`;
      divWrapper.id = id;

      this.container.parentElement.style.position = 'relative';

      divWrapper.style.position = 'fixed';
      divWrapper.style.top = `${containerRect.top}px`;
      divWrapper.style.left = `${containerRect.left}px`;
      divWrapper.style.width = `${containerRect.width}px`;
      divWrapper.style.height = `${containerRect.height}px`;
      divWrapper.style.pointerEvents = 'none';
      divWrapper.style.overflow = 'hidden';

      if (!this.container.querySelector(`#${id}`)) {
        container.parentElement.appendChild(divWrapper);
      }

      return divWrapper;
    });

    return divWrappers;
  }

  private renderAnnotationsPins(): void {
    this.annotations.forEach((annotation) => {});
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

    this.temporaryPinCoordinates = { ...this.temporaryPinCoordinates, x, y };
    this.renderTemporaryPin(elementId);

    const temporaryPin = this.container.querySelector('#superviz-temporary-pin');

    // we don't care about the actual movedTemporaryPin value
    // it only needs to trigger an update
    this.movedTemporaryPin = !this.movedTemporaryPin;
    temporaryPin.setAttribute('movedPosition', String(this.movedTemporaryPin));

    // if (this.selectedPin) return;
    // document.body.dispatchEvent(new CustomEvent('unselect-annotation'));
  };

  public removeAnnotationPin(uuid: string): void {}
}
