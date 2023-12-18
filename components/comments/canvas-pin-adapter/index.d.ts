import { Observer } from '../../../common/utils';
import { Annotation, PinAdapter } from '../types';
export declare class CanvasPin implements PinAdapter {
    private logger;
    private canvasId;
    private canvas;
    private divWrapper;
    private mouseElement;
    private isActive;
    private isPinsVisible;
    private annotations;
    private pins;
    private selectedPin;
    private animateFrame;
    private goToPinCallback;
    onPinFixedObserver: Observer;
    private mouseDownCoordinates;
    private temporaryPinCoordinates;
    constructor(canvasId: string, options?: {
        onGoToPin?: (position: {
            x: number;
            y: number;
        }) => void;
    });
    /**
     * @function destroy
     * @description destroys the canvas pin adapter.
     * @returns {void}
     * */
    destroy(): void;
    setPinsVisibility(isVisible: boolean): void;
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
     * @function renderTemporaryPin
     * @description
            creates a temporary pin with the id
            temporary-pin to mark where the annotation is being created
     */
    renderTemporaryPin(): void;
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
     * @function resetSelectedPin
     * @description Unselects a pin by removing its 'active' attribute
     * @returns {void}
     * */
    private resetSelectedPin;
    /**
     * @function resetPins
     * @description Unselects selected pin and removes temporary pin.
     * @param {that} this - The canvas pin adapter instance.
     * @param {KeyboardEvent} event - The keyboard event object.
     * @returns {void}
     * */
    private resetPins;
    /**
     * @function animate
     * @description animation frame
     * @returns {void}
     */
    private animate;
    /**
     * @function renderDivWrapper
     * @description Creates a div wrapper for the pins.
     * @returns {HTMLElement} The newly created div wrapper.
     * */
    private renderDivWrapper;
    /**
     * @function renderAnnotationsPins
     * @description Renders the annotations on the canvas.
     * @returns {void}
     */
    private renderAnnotationsPins;
    private setMouseDownCoordinates;
    private removeAnnotationsPins;
    /** Callbacks  */
    private annotationSelected;
    /**
     * @function goToPin
     * @description - translate the canvas to the pin position
     * @param uuid - annotation uuid
     */
    private goToPin;
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
    private onToggleAnnotationSidebar;
}
