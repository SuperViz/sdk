import { Observer } from '../../../common/utils';
import { Annotation, PinAdapter, PinCoordinates } from '../types';
export declare class CanvasPinAdapter implements PinAdapter {
    private logger;
    private canvasId;
    private canvas;
    private divWrapper;
    private mouseElement;
    private isActive;
    private annotations;
    private pins;
    onPinFixedObserver: Observer;
    constructor(canvasId: string);
    /**
     * @function destroy
     * @description destroys the canvas pin adapter.
     * @returns {void}
     * */
    destroy(): void;
    /**
     * @function setActive
     * @param {boolean} isOpen - Whether the canvas pin adapter is active or not.
     * @returns {void}
     */
    setActive(isOpen: boolean): void;
    /**
     * @function updateAnnotations
     * @description updates the annotations of the canvas.
     * @param {Annotation[]} annotations - New annotation to be added to the canvas.
     * @returns {void}
     */
    updateAnnotations(annotations: Annotation[]): void;
    /**
     * @function removeAnnotationPin
     * @description Removes an annotation pin from the canvas.
     * @param {string} uuid - The uuid of the annotation to be removed.
     * @returns {void}
     * */
    removeAnnotationPin(uuid: string): void;
    /**
     * @function createTemporaryPin
     * @description
            creates a temporary pin with the id
            temporary-pin to mark where the annotation is being created
     * @param {PinCoordinates} coordinates  - The coordinates of the pin to be created.
     */
    createTemporaryPin(coordinates: PinCoordinates): void;
    /**
     * @function addListeners
     * @description adds event listeners to the canvas element.
     * @returns {void}
     */
    private addListeners;
    /**
     * @function removeListeners
     * @description removes event listeners from the canvas element.
     * @returns {void}
     * */
    private removeListeners;
    /**
     * @function createMouseElement
     * @description Creates a new mouse element for the canvas pin adapter.
     * @returns {HTMLElement} The newly created mouse element.
     */
    private createMouseElement;
    /**
     * @function createDivWrapper
     * @description Creates a div wrapper for the pins.
     * @returns {HTMLElement} The newly created div wrapper.
     * */
    private createDivWrapper;
    /**
     * @function renderAnnotationsPins
     * @description Renders the annotations on the canvas.
     * @returns {void}
     */
    private renderAnnotationsPins;
    private removeAnnotationsPins;
    /** Callbacks  */
    private annotationSelected;
    /**
     * @function onClick
     * @description
        handles the click event on the canvas
        element and saves the coordinates of the click.
     * @param event - The MouseEvent object representing the click event.
     */
    private onClick;
    /**
     * @function onMouseMove
     * @description handles the mouse move event on the canvas.
     * @param event - The mouse event object.
     * @returns {void}
     */
    private onMouseMove;
    /**
     * @function onMouseLeave
     * @description
        Removes the mouse element and sets the canvas cursor
        to default when the mouse leaves the canvas.
     * @returns {void}
     */
    private onMouseLeave;
    /**
     * @function onMouseEnter
     * @description
          Handles the mouse enter event for the canvas pin adapter.
          If there is no mouse element, creates one.
     * @returns {void}
     */
    private onMouseEnter;
}
