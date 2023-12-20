import { Logger, Observer } from '../../../common/utils';
import { PinMode } from '../../../web-components/comments/components/types';
import { Annotation, AnnotationPositionInfo, PinAdapter, PinCoordinates } from '../types';

export class CanvasPin implements PinAdapter {
  private logger: Logger;
  private canvasId: string;
  private canvas: HTMLCanvasElement;
  private canvasSides: { left: number; top: number; right: number; bottom: number };
  private divWrapper: HTMLElement;
  private mouseElement: HTMLElement;
  private isActive: boolean;
  private isPinsVisible: boolean = true;
  private annotations: Annotation[];
  private pins: Map<string, HTMLElement>;
  private selectedPin: HTMLElement | null = null;
  private animateFrame: number;
  private goToPinCallback: (position: { x: number; y: number }) => void;
  public onPinFixedObserver: Observer;
  private mouseDownCoordinates: { x: number; y: number };
  private temporaryPinCoordinates: { x: number; y: number } | null = null;
  private commentsSide: 'left' | 'right' = 'left';
  private movedTemporaryPin: boolean;

  constructor(
    canvasId: string,
    options?: { onGoToPin?: (position: { x: number; y: number }) => void },
  ) {
    this.logger = new Logger('@superviz/sdk/comments-component/canvas-pin-adapter');
    this.canvasId = canvasId;
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.canvasSides = this.canvas.getBoundingClientRect();
    this.isActive = false;
    this.pins = new Map();
    this.goToPinCallback = options?.onGoToPin;

    if (!this.canvas) {
      const message = `Canvas with id ${canvasId} not found`;
      this.logger.log(message);
      throw new Error(message);
    }

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

    cancelAnimationFrame(this.animateFrame);
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
   * @function renderTemporaryPin
   * @description
          creates a temporary pin with the id
          temporary-pin to mark where the annotation is being created
   */
  public renderTemporaryPin(): void {
    let temporaryPin = document.getElementById('superviz-temporary-pin');

    if (!temporaryPin) {
      temporaryPin = document.createElement('superviz-comments-annotation-pin');
      temporaryPin.id = 'superviz-temporary-pin';
      temporaryPin.setAttribute('type', PinMode.ADD);
      temporaryPin.setAttribute('showInput', '');
      temporaryPin.setAttribute('canvasSides', JSON.stringify(this.canvasSides));
      temporaryPin.setAttribute('commentsSide', this.commentsSide);
      temporaryPin.setAttribute('position', JSON.stringify({ ...this.temporaryPinCoordinates }));
      temporaryPin.setAttribute('annotation', JSON.stringify({}));
      temporaryPin.setAttributeNode(document.createAttribute('active'));
      this.divWrapper.appendChild(temporaryPin);
    }

    const { x: savedX, y: savedY } = this.temporaryPinCoordinates;

    const context = this.canvas.getContext('2d');
    const transform = context.getTransform();

    const currentTranslateX = transform.e;
    const currentTranslateY = transform.f;

    const x = savedX + currentTranslateX;
    const y = savedY + currentTranslateY;

    temporaryPin.setAttribute('position', JSON.stringify({ x, y }));

    this.pins.set('temporary-pin', temporaryPin);
  }

  /**
   * @function addListeners
   * @description adds event listeners to the canvas element.
   * @returns {void}
   */
  private addListeners(): void {
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('mousedown', this.setMouseDownCoordinates);
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('mouseout', this.onMouseLeave);
    this.canvas.addEventListener('mouseenter', this.onMouseEnter);
    document.body.addEventListener('keyup', this.resetPins);
    document.body.addEventListener('select-annotation', this.annotationSelected);
    document.body.addEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
  }

  public setCommentsSide = (side: 'left' | 'right'): void => {
    this.commentsSide = side;
  };

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
    document.body.removeEventListener('toggle-annotation-sidebar', this.onToggleAnnotationSidebar);
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
    this.temporaryPinCoordinates = null;
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

    if (this.temporaryPinCoordinates) {
      this.renderTemporaryPin();
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
      if (annotation.resolved) {
        return;
      }

      const position = JSON.parse(annotation.position) as PinCoordinates;
      if (position?.type !== 'canvas') return;

      const { x: savedX, y: savedY } = position;

      const context = this.canvas.getContext('2d');
      const transform = context.getTransform();

      const currentTranslateX = transform.e;
      const currentTranslateY = transform.f;

      const x = savedX + currentTranslateX;
      const y = savedY + currentTranslateY;

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

  private setMouseDownCoordinates = ({ x, y }: MouseEvent) => {
    this.mouseDownCoordinates = { x, y };
  };

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
  private goToPin(uuid: string): void {
    const annotation = this.annotations.find((annotation) => annotation.uuid === uuid);

    if (!annotation) return;

    const position = JSON.parse(annotation.position) as PinCoordinates;

    if (position?.type !== 'canvas') return;

    const rect = this.canvas.getBoundingClientRect();
    const { width, height } = rect;

    const { x, y } = position;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    const translateX = widthHalf - x;
    const translateY = heightHalf - y;

    if (this.goToPinCallback) this.goToPinCallback({ x: translateX, y: translateY });
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
    const rect = this.canvas.getBoundingClientRect();

    const { x: mouseDownX, y: mouseDownY } = this.mouseDownCoordinates;
    const originalX = mouseDownX - rect.x;
    const originalY = mouseDownY - rect.y;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const distance = Math.hypot(x - originalX, y - originalY);
    if (distance > 10) return;

    const context = this.canvas.getContext('2d');

    const transform = context.getTransform();

    const invertedMatrix = transform.inverse();
    const transformedPoint = new DOMPoint(x, y).matrixTransform(invertedMatrix);

    this.onPinFixedObserver.publish({
      x: transformedPoint.x,
      y: transformedPoint.y,
      type: 'canvas',
    } as PinCoordinates);

    this.resetSelectedPin();

    this.temporaryPinCoordinates = { x: transformedPoint.x, y: transformedPoint.y };
    this.renderTemporaryPin();

    const temporaryPin = document.getElementById('superviz-temporary-pin');

    // we don't care about the actual movedTemporaryPin value
    // it only needs to trigger an update
    this.movedTemporaryPin = !this.movedTemporaryPin;
    temporaryPin.setAttribute('movedPosition', String(this.movedTemporaryPin));
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
