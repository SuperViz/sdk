import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
import { CommentsOptions, PinAdapter } from './types';
export declare class Comments extends BaseComponent {
    name: ComponentNames;
    protected logger: Logger;
    private element;
    private button;
    private sidebarOpen;
    private annotations;
    private clientUrl;
    private pinAdapter;
    private layoutOptions;
    constructor(pinAdapter: PinAdapter, options?: CommentsOptions);
    private get url();
    /**
     * @function start
     * @description Initializes the Comments component
     * @returns {void}
     */
    protected start(): void;
    /**
     * @function destroy
     * @description Destroys the Comments component
     * @returns {void}
     */
    protected destroy(): void;
    /**
     * @function addListeners
     * @description Adds event listeners to the Comments component
     * @returns {void}
     */
    private addListeners;
    /**
     * @function destroyListeners
     * @description Removes event listeners from the Comments component
     * @returns {void}
     */
    private destroyListeners;
    /**
     * @function onFixedPin
     * @description Creates a new annotation when a pin is fixed
     * @param {AnnotationPositionInfo} coordinates
     */
    private onFixedPin;
    /**
     * @function toggleAnnotationSidebar
     * @description Toggles the annotation sidebar
     * @returns {void}
     */
    private toggleAnnotationSidebar;
    /**
     * @function onSelectAnnotation
     * @description Opens the annotation sidebar when an annotation is selected
     * @param _
     * @returns {void}
     */
    private onSelectAnnotation;
    private positionFloatingButton;
    /**
     * @function positionComments
     * @description put comments at the left or right side of the screen
     * @returns {void}
     */
    private positionComments;
    /**
     * @function createAnnotation
     * @description Creates a new annotation and comment and adds them to the Comments component
     * @param {CustomEvent} event - The event object containing the annotation text and position
     * @returns {Promise<void>}
     */
    private createAnnotation;
    /**
     * @function deleteAnnotation
     * @description Deletes an annotation from the server and updates the component's state.
     * @param detail - The event detail containing the UUID of the annotation to delete.
     * @returns {void}
     */
    private deleteAnnotation;
    /**
     * @function createComment
     * @description Creates a new comment for a given annotation
     * @param {string} annotationId - The ID of the annotation to add the comment to
     * @param {string} text - The text content of the comment
     * @returns {Promise<Comment>} - A promise that resolves with the created comment object
     */
    private createComment;
    /**
     * @function updateComment
     * @description Updates an existing comment with new text
     * @param {CustomEvent} event - The custom event containing the UUID
     *  and new text of the comment to update
     * @returns {Promise<void>} - A promise that resolves when
     *  the comment has been successfully updated
     */
    private updateComment;
    /**
     * @function addAnnotation
     * @description Adds a new annotation to the Comments component
     * @param {Annotation[]} annotations - An array of annotation objects to add to the component
     * @returns {void}
     */
    private addAnnotation;
    /**
     * @function updateAnnotationList
     * @description Updates the list of annotations in the Comments component
     * @param {Annotation[]} annotations - An array of annotation objects to update the component with
     * @returns {void}
     */
    private updateAnnotationList;
    /**
     * @function addComment
     * @description Adds a new comment to an annotation in the Comments component
     * @param {string} annotationId - The ID of the annotation to add the comment to
     * @param {Comment} comment - The comment object to add to the annotation
     * @returns {void}
     */
    private addComment;
    /**
     * @function fetchAnnotations
     * @description Fetches annotations from the API and adds them to the Comments component
     * @returns {Promise<void>}
     */
    private fetchAnnotations;
    /**
     * @function waterMarkState
     * @description Fetch waterMarkState from the API if must be shown
     * @returns {Promise<void>}
     */
    private waterMarkState;
    /**
     * @function resolveAnnotation
     * @description Resolves an annotation by UUID using the API
     * @param {CustomEvent} event - The custom event containing the UUID of the annotation to resolve
     * @returns {Promise<void>}
     */
    private resolveAnnotation;
    /**
     * @function deleteComment
     * @description Deletes a comment by UUID using the API
     * @param {CustomEvent} event - The custom event containing the UUID of the comment to delete
     * @returns {Promise<void>}
     */
    private deleteComment;
    /** Realtime Callbacks */
    private onAnnotationListUpdate;
}
