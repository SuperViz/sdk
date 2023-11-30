import { Logger, Observer } from '../../../common/utils';
import { PinMode } from '../../../web-components/comments/components/types';
import { Annotation, AnnotationPositionInfo, PinAdapter, PinCoordinates } from '../types';

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
  private animateFrame: number;
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
    this.divWrapper = this.renderDivWrapper();
    this.annotations = [];
    this.renderAnnotationsPins();

    this.animateFrame = requestAnimationFrame(this.animate);
  }

  /**
   * @function destroy
   * @description destroys the canvas pin adapter.
   * @returns {void}
   * */
  public destroy(): void {
    this.removeListeners();
    this.removeAnnotationsPins();
    this.mouseElement = null;
    this.pins = new Map();
    this.divWrapper.remove();
    this.onPinFixedObserver.destroy();
    this.onPinFixedObserver = null;
    this.canvas.style.cursor = 'default';
    this.annotations = [];

    document.body.removeEventListener('select-annotation', this.annotationSelected);
    document.body.removeEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
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

    this.removeAnnotationsPins();
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
    this.annotations = this.annotations.filter((annotation) => annotation.uuid !== uuid);
  }

  /**
   * @function createTemporaryPin
   * @description
          creates a temporary pin with the id
          temporary-pin to mark where the annotation is being created
   * @param {AnnotationPositionInfo} coordinates  - The coordinates of the pin to be created.
   */
  public createTemporaryPin(coordinates: AnnotationPositionInfo): void {
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
   * @function animate
   * @description animation frame
   * @returns {void}
   */
  private animate = (): void => {
    if (this.isActive || this.isPinsVisible) {
      this.renderAnnotationsPins();
      this.renderDivWrapper();
    }

    requestAnimationFrame(this.animate);
  };

  /**
   * @function renderDivWrapper
   * @description Creates a div wrapper for the pins.
   * @returns {HTMLElement} The newly created div wrapper.
   * */
  private renderDivWrapper(): HTMLElement {
    const canvasRect = this.canvas.getBoundingClientRect();
    const divWrapper = document.createElement('div');
    divWrapper.id = 'superviz-canvas-wrapper';

    this.canvas.parentElement.style.position = 'relative';

    divWrapper.style.position = 'fixed';
    divWrapper.style.top = `${canvasRect.top}px`;
    divWrapper.style.left = `${canvasRect.left}px`;
    divWrapper.style.width = `${canvasRect.width}px`;
    divWrapper.style.height = `${canvasRect.height}px`;
    divWrapper.style.pointerEvents = 'none';
    divWrapper.style.overflow = 'hidden';

    if (!document.getElementById('superviz-canvas-wrapper')) {
      this.canvas.parentElement.appendChild(divWrapper);
    }

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

      const { x: savedX, y: savedY } = position;

      const context = this.canvas.getContext('2d');
      const transform = context.getTransform();

      const currentTranslateX = transform.e;
      const currentTranslateY = transform.f;

      const x = savedX + currentTranslateX;
      const y = savedY + currentTranslateY;

      if (position.type !== 'canvas') return;

      if (this.pins.has(annotation.uuid)) {
        const pin = this.pins.get(annotation.uuid);

        const isVisible = this.divWrapper.clientWidth > x && this.divWrapper.clientHeight > y;

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
    this.goToPin(uuid);
  };

  /**
   * @function goToPin
   * @description - translate the canvas to the pin position
   * @param uuid - annotation uuid
   */
  private goToPin(uuid: string): void {}

  /**
   * @function onClick
   * @description
      handles the click event on the canvas
      element and saves the coordinates of the click.
   * @param event - The MouseEvent object representing the click event.
   */
  private onClick = (event: MouseEvent): void => {
    if (!this.isActive) return;

    const context = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const transform = context.getTransform();

    const currentTranslateX = transform.e;
    const currentTranslateY = transform.f;

    const invertedMatrix = transform.inverse();
    const transformedPoint = new DOMPoint(x, y).matrixTransform(invertedMatrix);

    const divWrapperXConsideringTranslate = transformedPoint.x + currentTranslateX;
    const divWrapperYConsideringTranslate = transformedPoint.y + currentTranslateY;

    this.onPinFixedObserver.publish({
      x: transformedPoint.x,
      y: transformedPoint.y,
      type: 'canvas',
    });

    this.resetSelectedPin();

    this.createTemporaryPin({
      x: divWrapperXConsideringTranslate,
      y: divWrapperYConsideringTranslate,
      type: 'canvas',
    });

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
