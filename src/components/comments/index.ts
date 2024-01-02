import { Logger } from '../../common/utils';
import ApiService from '../../services/api';
import config from '../../services/config';
import type { Comments as CommentElement } from '../../web-components';
import { CommentsFloatButton } from '../../web-components/comments/components/float-button';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import {
  Annotation,
  AnnotationPositionInfo,
  ButtonLocation,
  Comment,
  CommentsOptions,
  CommentsSide,
  PinAdapter,
} from './types';

export class Comments extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: CommentElement;
  private button: CommentsFloatButton;
  private sidebarOpen: boolean = false;
  private annotations: Annotation[];
  private clientUrl: string;
  private pinAdapter: PinAdapter;
  private layoutOptions: CommentsOptions;
  private coordinates: AnnotationPositionInfo;

  constructor(pinAdapter: PinAdapter, options?: CommentsOptions) {
    super();
    this.name = ComponentNames.COMMENTS;
    this.logger = new Logger('@superviz/sdk/comments-component');
    this.annotations = [];
    this.layoutOptions = options ?? {
      position: CommentsSide.LEFT,
      buttonLocation: ButtonLocation.TOP_LEFT,
    };

    setTimeout(() => {
      pinAdapter.setCommentsMetadata(
        this.layoutOptions?.position ?? 'left',
        this.localParticipant?.avatar?.imageUrl,
        this.localParticipant?.name,
      );
    });

    this.pinAdapter = pinAdapter;
  }

  /**
   * @function url
   * @description Gets the URL of the client
   * @returns {void}
   */
  private get url(): string {
    const url = new URL(this.clientUrl);
    url.search = '';

    return url.toString();
  }

  /**
   * @function start
   * @description Initializes the Comments component
   * @returns {void}
   */
  protected start(): void {
    this.clientUrl = window.location.href;

    this.positionComments();
    this.positionFloatingButton();
    this.fetchAnnotations();
    this.waterMarkState();
    this.addListeners();
    this.pinAdapter.setPinsVisibility(true);
  }

  /**
   * @function destroy
   * @description Destroys the Comments component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('comments component @ destroy');
    this.destroyListeners();

    this.button.remove();
    this.element.remove();
    this.element = undefined;
    this.pinAdapter.destroy();
  }

  /**
   * @function addListeners
   * @description Adds event listeners to the Comments component
   * @returns {void}
   */
  private addListeners(): void {
    // Button observers
    this.button.addEventListener('toggle', this.toggleAnnotationSidebar);

    // Comments component observers
    this.element.addEventListener('toggle', this.toggleAnnotationSidebar);
    document.body.addEventListener('create-annotation', this.createAnnotation);
    this.element.addEventListener('resolve-annotation', this.resolveAnnotation);
    this.element.addEventListener('delete-annotation', this.deleteAnnotation);
    this.element.addEventListener('create-comment', ({ detail }: CustomEvent) => {
      this.createComment(detail.uuid, detail.text, true);
    });
    this.element.addEventListener('update-comment', this.updateComment);
    this.element.addEventListener('delete-comment', this.deleteComment);

    // annotation observers
    document.body.addEventListener('select-annotation', this.onSelectAnnotation);

    // Realtime observers
    this.realtime.commentsObserver.subscribe(this.onAnnotationListUpdate);

    // pin adapter observers
    this.pinAdapter.onPinFixedObserver.subscribe(this.onPinFixed);
  }

  /**
   * @function destroyListeners
   * @description Removes event listeners from the Comments component
   * @returns {void}
   */
  private destroyListeners(): void {
    // Button observers
    this.button.removeEventListener('toggle', this.toggleAnnotationSidebar);

    // Comments component observers
    this.element.removeEventListener('toggle', this.toggleAnnotationSidebar);
    this.element.removeEventListener('create-annotation', this.createAnnotation);
    this.element.removeEventListener('resolve-annotation', this.resolveAnnotation);
    this.element.removeEventListener('create-comment', ({ detail }: CustomEvent) => {
      this.createComment(detail.uuid, detail.text, true);
    });
    this.element.removeEventListener('update-comment', this.updateComment);
    this.element.removeEventListener('delete-comment', this.deleteComment);

    // annotation observers
    document.body.removeEventListener('select-annotation', this.onSelectAnnotation);

    // Realtime observers
    this.realtime.commentsObserver.unsubscribe(this.onAnnotationListUpdate);

    // pin adapter observers
    this.pinAdapter.onPinFixedObserver.unsubscribe(this.onPinFixed);
  }

  /**
   * @function onPinFixed
   * @description Sets the coordinates of the new annotation to be created
   * @param {AnnotationPositionInfo} coordinates
   */
  private onPinFixed = (coordinates: AnnotationPositionInfo): void => {
    this.coordinates = coordinates;
  };

  /**
   * @function toggleAnnotationSidebar
   * @description Toggles the annotation sidebar
   * @returns {void}
   */
  private toggleAnnotationSidebar = (): void => {
    this.element.toggleAttribute('open');
    this.sidebarOpen = this.element.hasAttribute('open');
    this.pinAdapter.setActive(this.sidebarOpen);

    // removes the annotation being created
    document.body.dispatchEvent(
      new CustomEvent('prepare-to-create-annotation', {
        detail: undefined,
        composed: true,
        bubbles: true,
      }),
    );

    document.body.dispatchEvent(
      new CustomEvent('toggle-annotation-sidebar', {
        detail: { open: this.sidebarOpen },
        composed: true,
        bubbles: true,
      }),
    );
  };

  /**
   * @function onSelectAnnotation
   * @description Opens the annotation sidebar when an annotation is selected
   * @param _
   * @returns {void}
   */
  private onSelectAnnotation = (_: CustomEvent): void => {
    if (this.sidebarOpen) return;

    this.toggleAnnotationSidebar();
  };

  /* @function positionFloatingButton
   * @description position floating button at some corner or inside an element
   * @returns {void}
   */
  private positionFloatingButton = (): void => {
    this.button = document.createElement('superviz-comments-button') as CommentsFloatButton;
    let buttonLocation = this.layoutOptions?.buttonLocation;
    const position = this.layoutOptions?.position;

    if (!buttonLocation) {
      document.body.appendChild(this.button);
      this.button.commentsPosition = position;
      return;
    }

    let style: string = '';

    const positionsOptions = Object.values(ButtonLocation);
    let unfindableElement = false;

    const positionById = !positionsOptions.includes(
      buttonLocation.toLocaleLowerCase() as ButtonLocation,
    );

    if (positionById) {
      const element = window.document.body.querySelector(`#${buttonLocation}`);

      if (element) {
        element.appendChild(this.button);
        style = 'position: relative';
      } else {
        unfindableElement = true;
        buttonLocation = ButtonLocation.TOP_LEFT;
      }
    }

    if (!positionById || unfindableElement) {
      document.body.appendChild(this.button);
      const [vertical, horizontal] = buttonLocation.split('-');
      style = `${vertical}: 20px; ${horizontal}: 20px;`;
    }

    this.button.positionStyles = style;
    this.button.commentsPosition = position;
  };

  /**
   * @function positionComments
   * @description put comments at the left or right side of the screen
   * @returns {void}
   */
  private positionComments = (): void => {
    this.element = document.createElement('superviz-comments') as CommentElement;
    this.element.setAttribute('comments', JSON.stringify([]));
    this.element.side = 'left: 0;';
    document.body.appendChild(this.element);

    const position = this.layoutOptions?.position;
    if (!position) return;

    const sidesOptions = Object.values(CommentsSide);
    const parsedPosition = position.toLocaleLowerCase() as CommentsSide;

    if (!sidesOptions.includes(parsedPosition)) return;

    const style = position === CommentsSide.LEFT ? 'left: 0;' : 'right: 0;';
    this.element.side = style;
  };

  /**
   * @function createAnnotation
   * @description Creates a new annotation and comment and adds them to the Comments component
   * @param {CustomEvent} event - The event object containing the annotation text and position
   * @returns {Promise<void>}
   */
  private createAnnotation = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { text } = detail;
      const { url } = this;
      const position = { ...this.coordinates };
      const annotation = await ApiService.createAnnotations(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
        {
          roomId: config.get<string>('roomId'),
          position: JSON.stringify(position),
          url,
          userId: this.localParticipant.id,
        },
      );

      const comment = await this.createComment(annotation.uuid, text);
      this.addAnnotation({
        ...annotation,
        comments: [comment],
      });

      // remove the temporary pin
      this.pinAdapter.removeAnnotationPin('temporary-pin');

      document.body.dispatchEvent(
        new CustomEvent('select-annotation', {
          detail: { uuid: annotation.uuid },
          composed: true,
          bubbles: true,
        }),
      );
    } catch (error) {
      this.logger.log('error when creating annotation', error);
    }
  };

  /**
   * @function deleteAnnotation
   * @description Deletes an annotation from the server and updates the component's state.
   * @param detail - The event detail containing the UUID of the annotation to delete.
   * @returns {void}
   */
  private deleteAnnotation = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid } = detail;
      await ApiService.deleteAnnotation(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
        uuid,
      );

      const annotations = this.annotations.filter((annotation) => annotation.uuid !== uuid);
      this.updateAnnotationList(annotations);
      this.pinAdapter.removeAnnotationPin(uuid);
      this.element.updateAnnotations(this.annotations);
    } catch (error) {
      this.logger.log('error when deleting annotation', error);
    }
  };

  /**
   * @function createComment
   * @description Creates a new comment for a given annotation
   * @param {string} annotationId - The ID of the annotation to add the comment to
   * @param {string} text - The text content of the comment
   * @returns {Promise<Comment>} - A promise that resolves with the created comment object
   */
  private async createComment(
    annotationId: string,
    text: string,
    addComment = false,
  ): Promise<Comment> {
    try {
      const comment: Comment = await ApiService.createComment(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
        {
          annotationId,
          userId: this.localParticipant.id,
          text,
        },
      );

      if (addComment) {
        this.addComment(annotationId, comment);
      }

      return comment;
    } catch (error) {
      this.logger.log('error when creating comment', error);
    }
  }

  /**
   * @function updateComment
   * @description Updates an existing comment with new text
   * @param {CustomEvent} event - The custom event containing the UUID
   *  and new text of the comment to update
   * @returns {Promise<void>} - A promise that resolves when
   *  the comment has been successfully updated
   */
  private updateComment = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid, text } = detail;
      await ApiService.updateComment(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
        uuid,
        text,
      );

      const annotations = this.annotations.map((annotation) => {
        return Object.assign({}, annotation, {
          comments: annotation.comments.map((comment) => {
            if (comment.uuid === uuid) {
              return Object.assign({}, comment, { text });
            }

            return comment;
          }),
        });
      });

      this.updateAnnotationList(annotations);
    } catch (error) {
      this.logger.log('error when updating comment', error);
    }
  };

  /**
   * @function addAnnotation
   * @description Adds a new annotation to the Comments component
   * @param {Annotation[]} annotations - An array of annotation objects to add to the component
   * @returns {void}
   */
  private addAnnotation(annotations: Annotation): void {
    const list = [annotations, ...this.annotations];
    this.element.updateAnnotations(list);
    this.pinAdapter.updateAnnotations(list);
    this.updateAnnotationList(list);
  }

  /**
   * @function updateAnnotationList
   * @description Updates the list of annotations in the Comments component
   * @param {Annotation[]} annotations - An array of annotation objects to update the component with
   * @returns {void}
   */
  private updateAnnotationList(annotations: Annotation[]): void {
    this.annotations = annotations;
    this.realtime.updateComments(annotations);
  }

  /**
   * @function addComment
   * @description Adds a new comment to an annotation in the Comments component
   * @param {string} annotationId - The ID of the annotation to add the comment to
   * @param {Comment} comment - The comment object to add to the annotation
   * @returns {void}
   */
  private addComment(annotationId: string, comment: Comment): void {
    const annotationToBeUpdated = this.annotations.find((annotation) => {
      return annotation.uuid === annotationId;
    });

    annotationToBeUpdated.comments.push(comment);

    const list = this.annotations.map((annotation) => {
      if (annotation.uuid === annotationId) {
        return annotationToBeUpdated;
      }

      return annotation;
    });

    this.updateAnnotationList(list);
    this.element.updateAnnotations(list);
  }

  /**
   * @function fetchAnnotations
   * @description Fetches annotations from the API and adds them to the Comments component
   * @returns {Promise<void>}
   */
  private async fetchAnnotations(): Promise<void> {
    try {
      const annotations: Annotation[] = await ApiService.fetchAnnotation(
        config.get('apiUrl'),
        config.get('apiKey'),

        {
          roomId: config.get('roomId'),
          url: this.url,
        },
      );

      this.annotations = annotations;
      this.element.updateAnnotations(this.annotations);
      this.pinAdapter.updateAnnotations(this.annotations);
    } catch (error) {
      this.logger.log('error when fetching annotations', error);
    }
  }

  /**
   * @function waterMarkState
   * @description Fetch waterMarkState from the API if must be shown
   * @returns {Promise<void>}
   */
  private async waterMarkState(): Promise<void> {
    try {
      const dataWaterMark: boolean = await ApiService.fetchWaterMark(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
      );
      this.element.waterMarkStatus(dataWaterMark);
    } catch (error) {
      this.logger.log('error when fetching waterMark', error);
    }
  }

  /**
   * @function resolveAnnotation
   * @description Resolves an annotation by UUID using the API
   * @param {CustomEvent} event - The custom event containing the UUID of the annotation to resolve
   * @returns {Promise<void>}
   */
  private resolveAnnotation = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid } = detail;

      const { resolved } = await ApiService.resolveAnnotation(
        config.get('apiUrl'),
        config.get('apiKey'),
        uuid,
      );

      const annotations = this.annotations.map((annotation) => {
        if (annotation.uuid === uuid) {
          return Object.assign({}, annotation, { resolved });
        }

        return annotation;
      });

      this.updateAnnotationList(annotations);

      if (resolved) {
        this.pinAdapter.removeAnnotationPin(uuid);
        return;
      }

      this.pinAdapter.updateAnnotations(this.annotations);
    } catch (error) {
      this.logger.log('error when resolve annotation', error);
    }
  };

  /**
   * @function deleteComment
   * @description Deletes a comment by UUID using the API
   * @param {CustomEvent} event - The custom event containing the UUID of the comment to delete
   * @returns {Promise<void>}
   */

  private deleteComment = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid, annotationId } = detail;

      if (!uuid || !annotationId) return;

      await ApiService.deleteComment(config.get('apiUrl'), config.get('apiKey'), uuid);

      const annotationToBeUpdated = this.annotations.find((annotation) => {
        return annotation.uuid === annotationId;
      });
      annotationToBeUpdated.comments = annotationToBeUpdated.comments.filter((comment) => {
        return comment.uuid !== uuid;
      });

      const list = this.annotations.map((annotation) => {
        if (annotation.uuid === annotationId) {
          return annotationToBeUpdated;
        }

        return annotation;
      });

      this.element.updateAnnotations(list);
      this.updateAnnotationList(list);
    } catch (error) {
      this.logger.log('error when deleting comment', error);
    }
  };

  /** Realtime Callbacks */

  private onAnnotationListUpdate = (message): void => {
    const { data, clientId } = message;

    if (this.localParticipant.id === clientId) return;

    this.annotations = data;
    this.element.updateAnnotations(this.annotations);
    this.pinAdapter.updateAnnotations(this.annotations);
  };
}
