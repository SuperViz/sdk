import { Logger, Observer } from '../../../common/utils';
import { PinMode } from '../../../web-components/comments/components/types';
import { Annotation, PinAdapter, PinCoordinates } from '../types';

export class CanvasPin implements PinAdapter {
  private logger: Logger;
  private canvasId: string;
  private canvas: HTMLCanvasElement;
  private divWrapper: HTMLElement;
  private mouseElement: HTMLElement;
  private isActive: boolean;
  private isPinsVisible: boolean = true;
  private annotations: Annotation[];
  private pins: Map<string, HTMLElement>;
  private divWrapperReplacementInterval: ReturnType<typeof setInterval> | null = null;
  private selectedPin: HTMLElement | null = null;
  public onPinFixedObserver: Observer;

  constructor(canvasId: string) {
    this.logger = new Logger('@superviz/sdk/comments-component/canvas-pin-adapter');
    this.canvasId = canvasId;
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.isActive = false;
    this.pins = new Map();

    if (!this.canvas) {
      const message = `Canvas with id ${canvasId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

    document.body.addEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
    document.body.addEventListener('select-annotation', this.annotationSelected);
    document.body.style.position = 'relative';
    this.onPinFixedObserver = new Observer({ logger: this.logger });
    this.divWrapper = this.createDivWrapper();
    this.annotations = [];
  }

  /**
   * @function destroy
   * @description destroys the canvas pin adapter.
   * @returns {void}
   * */
  public destroy(): void {
    this.removeListeners();
    this.mouseElement = null;
    document.body.removeEventListener('select-annotation', this.annotationSelected);
    document.body.removeEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);

    if (this.divWrapperReplacementInterval) {
      clearInterval(this.divWrapperReplacementInterval);
      this.divWrapperReplacementInterval = null;
    }
  }

  public setPinsVisibility(isVisible: boolean): void {
    this.isPinsVisible = isVisible;

    if (this.isPinsVisible) {
      this.renderAnnotationsPins();
      return;
    }

    this.removeAnnotationsPins();
  }

  /**
   * @function setActive
   * @param {boolean} isOpen - Whether the canvas pin adapter is active or not.
   * @returns {void}
   */
  public setActive(isOpen: boolean): void {
    this.isActive = isOpen;
    this.canvas.style.cursor = isOpen ? 'none' : 'default';

    if (this.isActive) {
      this.addListeners();
      return;
    }

    this.removeListeners();
  }

  /**
   * @function updateAnnotations
   * @description updates the annotations of the canvas.
   * @param {Annotation[]} annotations - New annotation to be added to the canvas.
   * @returns {void}
   */
  public updateAnnotations(annotations: Annotation[]): void {
    this.logger.log('updateAnnotations', annotations);

    this.annotations = annotations;

    if (!this.isActive && !this.isPinsVisible) return;

    this.renderAnnotationsPins();
  }

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
  }

  /**
   * @function createTemporaryPin
   * @description
          creates a temporary pin with the id
          temporary-pin to mark where the annotation is being created
   * @param {PinCoordinates} coordinates  - The coordinates of the pin to be created.
   */
  public createTemporaryPin(coordinates: PinCoordinates): void {
    let temporaryPin = document.getElementById('superviz-temporary-pin');

    if (!temporaryPin) {
      temporaryPin = document.createElement('superviz-comments-annotation-pin');
      temporaryPin.id = 'superviz-temporary-pin';
      temporaryPin.setAttribute('type', PinMode.ADD);
      temporaryPin.setAttribute('annotation', JSON.stringify({}));
      temporaryPin.setAttributeNode(document.createAttribute('active'));
    }

    temporaryPin.setAttribute('position', JSON.stringify(coordinates));

    this.divWrapper.appendChild(temporaryPin);
    this.pins.set('temporary-pin', temporaryPin);
  }

  /**
   * @function addListeners
   * @description adds event listeners to the canvas element.
   * @returns {void}
   */
  private addListeners(): void {
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('mouseout', this.onMouseLeave);
    this.canvas.addEventListener('mouseenter', this.onMouseEnter);
    document.body.addEventListener('keyup', this.resetPins);
    document.body.addEventListener('select-annotation', this.annotationSelected);
  }

  /**
   * @function removeListeners
   * @description removes event listeners from the canvas element.
   * @returns {void}
   * */
  private removeListeners(): void {
    this.canvas.removeEventListener('click', this.onClick);
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    this.canvas.removeEventListener('mouseout', this.onMouseLeave);
    this.canvas.removeEventListener('mouseenter', this.onMouseEnter);
    document.body.removeEventListener('keyup', this.resetPins);
    document.body.removeEventListener('select-annotation', this.annotationSelected);
  }

  /**
   * @function createMouseElement
   * @description Creates a new mouse element for the canvas pin adapter.
   * @returns {HTMLElement} The newly created mouse element.
   */
  private createMouseElement(): HTMLElement {
    const mouseElement = document.createElement('superviz-comments-annotation-pin');
    mouseElement.setAttribute('type', PinMode.ADD);
    mouseElement.setAttribute('annotation', JSON.stringify({}));
    mouseElement.setAttribute('position', JSON.stringify({ x: 0, y: 0 }));
    document.body.appendChild(mouseElement);

    this.canvas.style.cursor = 'none';

    return mouseElement;
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
  };

  /**
   * @function createDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private createDivWrapper(): HTMLElement {
    const canvasRect = this.canvas.getBoundingClientRect();
    const divWrapper = document.createElement('div');

    this.canvas.parentElement.style.position = 'relative';

    divWrapper.style.position = 'fixed';
    divWrapper.style.top = `${canvasRect.top}px`;
    divWrapper.style.left = `${canvasRect.left}px`;
    divWrapper.style.width = `${canvasRect.width}px`;
    divWrapper.style.height = `${canvasRect.height}px`;
    divWrapper.style.pointerEvents = 'none';
    divWrapper.style.overflow = 'hidden';

    if (!this.divWrapperReplacementInterval) {
      this.divWrapperReplacementInterval = setInterval(() => {
        const elementRect = this.canvas.getBoundingClientRect();
        divWrapper.style.top = `${elementRect.top}px`;
        divWrapper.style.left = `${elementRect.left}px`;
        divWrapper.style.width = `${elementRect.width}px`;
        divWrapper.style.height = `${elementRect.height}px`;
      }, 1);
    }

    this.canvas.parentElement.appendChild(divWrapper);

    return divWrapper;
  }

  /**
   * @function renderAnnotationsPins
   * @description Renders the annotations on the canvas.
   * @returns {void}
   */
  private renderAnnotationsPins(): void {
    if (!this.annotations || this.canvas.style.display === 'none') {
      this.removeAnnotationsPins();
      return;
    }

    this.annotations.forEach((annotation) => {
      const position = JSON.parse(annotation.position) as PinCoordinates;

      if (annotation.resolved) {
        this.removeAnnotationPin(annotation.uuid);
        return;
      }

      if (position.type !== 'canvas' || this.pins.has(annotation.uuid)) {
        return;
      }

      const { x, y } = position;

      const pinElement = document.createElement('superviz-comments-annotation-pin');
      pinElement.setAttribute('type', PinMode.SHOW);
      pinElement.setAttribute('annotation', JSON.stringify(annotation));
      pinElement.setAttribute('position', JSON.stringify({ x, y }));

      this.divWrapper.appendChild(pinElement);
      this.pins.set(annotation.uuid, pinElement);
    });
  }

  private removeAnnotationsPins(): void {
    this.pins.forEach((pinElement) => {
      pinElement.remove();
    });

    this.pins.clear();
  }

  /** Callbacks  */

  private annotationSelected = ({ detail }: CustomEvent): void => {
    const { uuid } = detail;

    if (!uuid) return;

    const annotation = JSON.parse(this.selectedPin?.getAttribute('annotation') ?? '{}');

    this.resetPins();

    if (annotation?.uuid === uuid) return;

    document.body.dispatchEvent(new CustomEvent('close-temporary-annotation'));

    const pinElement = this.pins.get(uuid);

    if (!pinElement) return;

    pinElement.setAttribute('active', '');

    this.selectedPin = pinElement;
    this.scrollIntoView(pinElement);
  };

  private scrollIntoView(element: HTMLElement): void {
    if (!element) return;

    // If the divWrapper is smaller than it's parent, all pins are visible
    if (
      this.divWrapper.clientWidth <= this.divWrapper.parentElement.clientWidth &&
      this.divWrapper.clientHeight <= this.divWrapper.parentElement.clientHeight
    ) {
      return;
    }

    let elementWithOverflow: HTMLElement;
    let nextElement: HTMLElement = this.divWrapper;

    while (!elementWithOverflow) {
      const parent = nextElement?.parentElement;

      const hasOverflow = this.isScrollable(parent);

      if (hasOverflow) {
        elementWithOverflow = parent;
        break;
      }

      nextElement = parent;

      if (!nextElement) break;
    }

    const pinCoordinates = JSON.parse(element.getAttribute('position')) as PinCoordinates;

    if (!elementWithOverflow) return;

    elementWithOverflow.scrollTo({
      top: pinCoordinates.y,
      left: pinCoordinates.x,
      behavior: 'smooth',
    });
  }

  private isScrollable(element: HTMLElement): boolean {
    if (!element) return false;

    const hasScrollableContent = element.scrollHeight > element.clientHeight;
    const overflowYStyle = window.getComputedStyle(element).overflowY;
    const overflowXStyle = window.getComputedStyle(element).overflowX;
    const isOverflowYHidden = overflowYStyle.indexOf('hidden') !== -1;
    const isOverflowXHidden = overflowXStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowYHidden && !isOverflowXHidden;
  }

  /**
   * @function onClick
   * @description
      handles the click event on the canvas
      element and saves the coordinates of the click.
   * @param event - The MouseEvent object representing the click event.
   */
  private onClick = (event: MouseEvent): void => {
    if (!this.isActive) return;

    const { x, y } = event;
    const rect = this.divWrapper.getBoundingClientRect();

    const xToSave = x - rect.x;
    const yToSave = y - rect.y;

    this.onPinFixedObserver.publish({
      x: xToSave,
      y: yToSave,
      type: 'canvas',
    });

    this.resetSelectedPin();
    this.createTemporaryPin({ x: xToSave, y: yToSave, type: 'canvas' });

    if (this.selectedPin) return;

    document.body.dispatchEvent(new CustomEvent('unselect-annotation'));
  };

  /**
   * @function onMouseMove
   * @description handles the mouse move event on the canvas.
   * @param event - The mouse event object.
   * @returns {void}
   */
  private onMouseMove = (event: MouseEvent): void => {
    const { x, y } = event;

    if (!this.mouseElement) {
      this.mouseElement = this.createMouseElement();
    }

    this.mouseElement.setAttribute('position', JSON.stringify({ x, y }));
  };

  /**
   * @function onMouseLeave
   * @description
      Removes the mouse element and sets the canvas cursor
      to default when the mouse leaves the canvas.
   * @returns {void}
   */
  private onMouseLeave = (): void => {
    if (this.mouseElement) {
      this.mouseElement.remove();
      this.mouseElement = null;
    }

    this.canvas.style.cursor = 'default';
  };

  /**
   * @function onMouseEnter
   * @description
        Handles the mouse enter event for the canvas pin adapter.
        If there is no mouse element, creates one.
   * @returns {void}
   */
  private onMouseEnter = (): void => {
    if (this.mouseElement) return;

    this.mouseElement = this.createMouseElement();
  };

  private onToggleAnnotationSidebar = ({ detail }: CustomEvent): void => {
    const { open } = detail;

    if (open) return;

    this.pins.forEach((pinElement) => {
      pinElement.removeAttribute('active');
    });

    if (this.pins.has('temporary-pin')) {
      this.removeAnnotationPin('temporary-pin');
    }
  };
}
