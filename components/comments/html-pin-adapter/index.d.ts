import { Observer } from '../../../common/utils';
import { Annotation, PinAdapter } from '../types';
import { HorizontalSide, HTMLPinOptions } from './types';
export declare class HTMLPin implements PinAdapter {
    onPinFixedObserver: Observer;
    private annotations;
    private localParticipant;
    private logger;
    private isActive;
    private isPinsVisible;
    private movedTemporaryPin;
    private selectedPin;
    private dataAttribute;
    private animateFrame;
    private dataAttributeValueFilters;
    private mouseDownCoordinates;
    private commentsSide;
    private temporaryPinCoordinates;
    private container;
    private elementsWithDataId;
    private divWrappers;
    private pins;
    private voidElementsWrappers;
    private mutationObserver;
    private readonly VOID_ELEMENTS;
    constructor(containerId: string, options?: HTMLPinOptions);
    /**
     * @function destroy
     * @description destroys the pin adapter.
     * @returns {void}
     * */
    destroy(): void;
    /**
     * @function addElementListeners
     * @description adds event listeners to the element.
     * @param {string} id the id of the element to add the listeners to.
     * @returns {void}
     */
    private addElementListeners;
    /**
     * @function removeElementListeners
     * @description removes event listeners from the element
     * @param {string} id the id of the element to remove the listeners from.
     * @returns {void}
     */
    private removeElementListeners;
    /**
     * @function removeObservers
     * @description disconnects the observers.
     * @returns {void}
     */
    private removeObservers;
    /**
     * @function addListeners
     * @description adds event listeners to the container element.
     * @returns {void}
     */
    private addListeners;
    /**
     * @function animate
     * @description updates the position of the wrappers of the void elements.
     * @returns {void}
     */
    private animate;
    /**
     * @function removeListeners
     * @description removes event listeners from the container element.
     * @returns {void}
     * */
    private removeListeners;
    /**
     * @function observeContainer
     * @description observes the container for changes in the specified data attribute.
     * @returns {void}
     */
    private observeContainer;
    /**
     * @function prepareElements
     * @description sets elements with the specified data attribute as pinnable.
     * @returns {void}
     */
    private prepareElements;
    /**
     * @function setAddCursor
     * @description sets the mouse cursor to a special cursor when hovering over all the elements with the specified data-attribute.
     * @returns {void}
     */
    private setAddCursor;
    /**
     * @function removeAddCursor
     * @description removes the special cursor.
     * @returns {void}
     */
    private removeAddCursor;
    /**
     * @function setPinsVisibility
     * @description sets the visibility of the pins, hides them if it is not visible.
     * @param {boolean} isVisible controls the visibility of the pins.
     * @returns {void}
     */
    setPinsVisibility(isVisible: boolean): void;
    /**
     * @function removeAnnotationPin
     * @description Removes an annotation pin from the container.
     * @param {string} uuid - The uuid of the annotation to be removed.
     * @returns {void}
     * */
    removeAnnotationPin(uuid: string): void;
    /**
     * @function setCommentsMetadata
     * @description stores data related to the local participant
     * @param {HorizontalSide} side whether the comments sidebar is on the left or right side of the screen
     * @param {string} avatar the avatar of the local participant
     * @param {string} name the name of the local participant
     * @returns {void}
     */
    setCommentsMetadata: (side: HorizontalSide, avatar: string, name: string) => void;
    /**
     * @function updateAnnotations
     * @description updates the annotations of the container.
     * @param {Annotation[]} annotations new annotation to be added to the container.
     * @returns {void}
     */
    updateAnnotations(annotations: Annotation[]): void;
    /**
     * @function setActive
     * @description sets the container pin adapter as active or not
     * @param {boolean} isOpen whether the container pin adapter is active or not.
     * @returns {void}
     */
    setActive(isOpen: boolean): void;
    /**
     * @function renderTemporaryPin
     * @description creates a temporary pin with the id temporary-pin to mark where the annotation is being created
     * @param {string} elementId the id of the element where the temporary pin will be rendered.
     * @returns {void}
     */
    renderTemporaryPin(elementId?: string): void;
    /**
     * @function renderAnnotationsPins
     * @description appends the pins on the container.
     * @returns {void}
     */
    private renderAnnotationsPins;
    /**
     * @function updatePinsPositions
     * @description updates the position of the wrappers of the void elements.
     * @returns {void}
     */
    private updatePinsPositions;
    /**
     * @function clearElement
     * @description clears an element that no longer has the specified data attribute
     * @param {string} id the id of the element to be cleared
     * @returns {void}
     */
    private clearElement;
    /**
     * @function resetSelectedPin
     * @description Unselects a pin by removing its 'active' attribute
     * @returns {void}
     * */
    private resetSelectedPin;
    /**
     * @function removeAnnotationsPins
     * @description clears all pins from the container.
     * @returns {void}
     */
    private removeAnnotationsPins;
    /**
     * @function setElementReadyToPin
     * @description prepare an element with all necessary to add pins over it
     * @param {HTMLElement} element
     * @param {string} id
     * @returns {void}
     */
    private setElementReadyToPin;
    /**
     * @function resetPins
     * @description Unselects selected pin and removes temporary pin.
     * @param {KeyboardEvent} event the keyboard event object, this should be 'Escape'.
     * @returns {void}
     * */
    private resetPins;
    /**
     * @function annotationSelected
     * @description highlights the selected annotation
     * @param {CustomEvent} event the emitted event object with the uuid of the selected annotation
     * @returns {void}
     */
    private annotationSelected;
    /**
     * @function addTemporaryPinToElement
     * @description adds the temporary pin and the temporary pin container to the element with the specified id.
     * @param {string} elementId the id of the element where the temporary pin will be rendered.
     * @param {HTMLElement} pin the temporary pin to be rendered.
     * @returns {void}
     */
    private addTemporaryPinToElement;
    /**
     * @function createPin
     * @description creates a pin element and sets its properties
     * @param {Annotation} annotation the annotation associated to the pin to be rendered
     * @param {number} x the x coordinate of the pin
     * @param {number} y the y coordinate of the pin
     * @returns {HTMLElement} the pin element
     */
    private createPin;
    /**
     * @function createWrapper
     * @description creates a wrapper for the element with the specified id
     * @param {HTMLElement} element the element to be wrapped
     * @param {string} id the id of the element to be wrapped
     * @returns {HTMLElement} the new wrapper element
     */
    private createWrapper;
    /**
     * @function setPositionNotStatic
     * @description sets the position of the element to relative if it is static
     * @param {HTMLElement} element the element to be checked
     * @returns {void}
     */
    private setPositionNotStatic;
    /**
     * @function onClick
     * @description handles the click event on the container; mainly, creates or moves the temporary pin
     * @param {MouseEvent} event the mouse event object
     * @returns {void}
     */
    private onClick;
    /**
     * @function onMouseDown
     * @description stores the mouse down coordinates
     * @param {MouseEvent} event - The mouse event object.
     * @returns {void}
     */
    private onMouseDown;
    /**
     * @function handleMutationObserverChanges
     * @description handles the changes in the value of the specified data attribute of the elements inside the container
     * @param {MutationRecord[]} changes the changes in the value of the specified data attribute of the elements inside the container
     * @returns {void}
     */
    private handleMutationObserverChanges;
    /**
     * @function onToggleAnnotationSidebar
     * @description Removes temporary pin and unselects selected pin
     * @param {CustomEvent} event the emitted event object with the info about if the annotation sidebar is open or not
     * @returns {void}
     */
    private onToggleAnnotationSidebar;
}
