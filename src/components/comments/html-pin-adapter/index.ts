import { Logger, Observer } from '../../../common/utils';
import { Annotation, PinAdapter } from '../types';

import { SimpleParticipant } from './types';

export class HTMLPin implements PinAdapter {
  private logger: Logger;
  private container: HTMLElement;
  private isActive: boolean;
  private isPinsVisible: boolean = true;
  private annotations: Annotation[];
  private animateFrame: number;
  public onPinFixedObserver: Observer;
  private temporaryPinCoordinates: { x: number; y: number } | null = null;
  private localParticipant: SimpleParticipant = {};
  private elementsWithDataId: Record<string, HTMLElement> = {};
  private divWrappers: HTMLElement[];

  constructor(containerId: string) {
    this.logger = new Logger('@superviz/sdk/comments-component/container-pin-adapter');
    this.container = document.getElementById(containerId) as HTMLElement;
    this.isActive = false;

    if (!this.container) {
      const message = `Element with id ${containerId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

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
    this.onPinFixedObserver.destroy();
    this.onPinFixedObserver = null;
    this.annotations = [];

    cancelAnimationFrame(this.animateFrame);
  }

  private setElementsReadyToPin = (): void => {
    const elementsWithDataId = this.container.querySelectorAll('[data-superviz-id]');
    const dataIdList = new Set();

    elementsWithDataId.forEach((el: HTMLElement) => {
      const id = el.getAttribute('data-superviz-id');
      dataIdList.add(id);

      if (this.elementsWithDataId[id]) return;

      this.elementsWithDataId[id] = el;
      this.elementsWithDataId[id].style.cursor = 'url("") 0 100, pointer';

      this.elementsWithDataId[id].addEventListener('click', this.onClick);
    });

    const childrenId = Object.keys(this.elementsWithDataId);
    if (childrenId.length === elementsWithDataId.length) return;

    childrenId.forEach((id) => {
      if (dataIdList.has(id)) return;
      this.elementsWithDataId[id].style.backgroundColor = '';
      this.elementsWithDataId[id].style.cursor = 'default';

      this.elementsWithDataId[id].removeEventListener('click', this.onClick);
      delete this.elementsWithDataId[id];
    });
  };

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
      this.setElementsReadyToPin();
      return;
    }

    this.removeListeners();
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
   * @function renderTemporaryPin
   * @description
          creates a temporary pin with the id
          temporary-pin to mark where the annotation is being created
   */
  public renderTemporaryPin(): void {}

  /**
   * @function addListeners
   * @description adds event listeners to the container element.
   * @returns {void}
   */
  private addListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => {
      this.elementsWithDataId[id].addEventListener('click', this.onClick);
      this.elementsWithDataId[id].style.cursor = 'url("") 0 100, pointer';
    });
  }

  public setCommentsMetadata = (side: 'left' | 'right', avatar: string, name: string): void => {
    this.localParticipant.avatar = avatar;
    this.localParticipant.name = name;
  };

  /**
   * @function removeListeners
   * @description removes event listeners from the container element.
   * @returns {void}
   * */
  private removeListeners(): void {
    Object.keys(this.elementsWithDataId).forEach((id) => {
      this.elementsWithDataId[id].removeEventListener('click', this.onClick);
      this.elementsWithDataId[id].setAttribute('style', '');
    });
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

    if (this.isActive) {
      this.setElementsReadyToPin();
    }

    if (this.temporaryPinCoordinates) {
      this.renderTemporaryPin();
    }

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

  private onClick = (event: MouseEvent): void => {};

  public removeAnnotationPin(uuid: string): void {}
}
