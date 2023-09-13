import { Logger } from '../../common/utils';
import ApiService from '../../services/api';
import config from '../../services/config';
import { Comments } from '../../web-components';
import { BaseComponent } from '../base';

import { Annotation, Comment } from './types';

export class CommentsComponent extends BaseComponent {
  protected name: string;
  protected logger: Logger;
  protected element: Comments;
  private url: string;

  constructor() {
    super();
    this.name = 'Comments';
    this.logger = new Logger('@superviz/sdk/comments-component');
  }

  /**
   * @function start
   * @description Initializes the Comments component
   * @returns {void}
   */
  protected start(): void {
    this.url = window.location.href;

    this.element = document.createElement('superviz-comments') as Comments;
    this.element.setAttributeNode(document.createAttribute('open'));
    this.element.setAttribute('comments', JSON.stringify([]));
    document.body.appendChild(this.element);

    this.fetchAnnotations();
    this.addListeners();
  }

  /**
   * @function destroy
   * @description Destroys the Comments component
   * @returns {void}
   */
  protected destroy(): void {
    this.destroyListeners();

    document.body.removeChild(this.element);
    this.element = undefined;
  }

  /**
   * @function addListeners
   * @description Adds event listeners to the Comments component
   * @returns {void}
   */
  private addListeners(): void {
    this.element.addEventListener('create-annotation', this.createAnnotation);
    this.element.addEventListener('resolve-annotation', this.resolveAnnotation);
    this.element.addEventListener('delete-annotation', this.deleteAnnotation);
    this.element.addEventListener('create-comment', ({ detail }: CustomEvent) => this.createComment(detail.uuid, detail.text, true));
    this.element.addEventListener('update-comment', this.updateComment);
    this.element.addEventListener('delete-comment', this.deleteComment);
  }

  /**
   * @function destroyListeners
   * @description Removes event listeners from the Comments component
   * @returns {void}
   */
  private destroyListeners(): void {
    this.element.removeEventListener('create-annotation', this.createAnnotation);
    this.element.removeEventListener('resolve-annotation', this.createAnnotation);
    this.element.removeEventListener('delete-annotation', this.deleteAnnotation);
    this.element.removeEventListener('create-comment', ({ detail }: CustomEvent) => this.createComment(detail.uuid, detail.text, true));
    this.element.removeEventListener('update-comment', ({ detail }: CustomEvent) => this.createComment(detail.uuid, detail.text, true));
    this.element.removeEventListener('delete-comment', this.deleteComment);
  }

  /**
   * @function createAnnotation
   * @description Creates a new annotation and comment and adds them to the Comments component
   * @param {CustomEvent} event - The event object containing the annotation text and position
   * @returns {Promise<void>}
   */
  private createAnnotation = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { text, position } = detail;
      const { url } = this;

      const annotation: Annotation = await ApiService.createAnnotations(config.get<string>('apiUrl'), config.get<string>('apiKey'), {
        roomId: config.get<string>('roomId'),
        position: JSON.stringify(position),
        url,
        userId: this.localParticipant.id,
      });

      const comment = await this.createComment(annotation.uuid, text);

      this.addAnnotation([{
        ...annotation,
        comments: [comment],
      }]);
    } catch (error) {
      this.logger.log('error when creating annotation', error);
      throw error;
    }
  };

  deleteAnnotation = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid } = detail;
      await ApiService.deleteAnnotation(
        config.get<string>('apiUrl'),
        config.get<string>('apiKey'),
        uuid,
      );

      const { annotations } = this.element;

      const newAnnotations = annotations.filter((annotation) => annotation.uuid !== uuid);

      this.element.updateAnnotations(newAnnotations);
    } catch (error) {
      this.logger.log('error when deleting annotation', error);
      throw error;
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
      const comment: Comment = await ApiService.createComment(config.get<string>('apiUrl'), config.get<string>('apiKey'), {
        annotationId,
        userId: this.localParticipant.id,
        text,
      });

      if (addComment) this.addComment(annotationId, comment);

      return comment;
    } catch (error) {
      this.logger.log('error when creating comment', error);
      throw error;
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
    } catch (error) {
      this.logger.log('error when creating comment', error);
      throw error;
    }
  };

  /**
   * @function addAnnotation
   * @description Adds a new annotation to the Comments component
   * @param {Annotation[]} annotation - An array of annotation objects to add to the component
   * @returns {void}
   */
  addAnnotation(annotation: Annotation[]): void {
    this.element.addAnnotation(annotation);
  }

  /**
   * @function addComment
   * @description Adds a new comment to an annotation in the Comments component
   * @param {string} annotationId - The ID of the annotation to add the comment to
   * @param {Comment} comment - The comment object to add to the annotation
   * @returns {void}
   */
  addComment(annotationId: string, comment: Comment): void {
    this.element.addComment(annotationId, comment);
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

      this.addAnnotation(annotations);
    } catch (error) {
      this.logger.log('error when fetching annotations', error);
      throw error;
    }
  }

  /**
    * @function resolveAnnotation
    * @description Resolves an annotation by UUID using the API
    * @param {CustomEvent} event - The custom event containing the UUID of the annotation to resolve
    * @returns {Promise<void>}
    */
  private async resolveAnnotation({ detail }: CustomEvent): Promise<void> {
    try {
      const { uuid } = detail;
      await ApiService.resolveAnnotation(
        config.get('apiUrl'),
        config.get('apiKey'),
        uuid,
      );
    } catch (error) {
      this.logger.log('error when fetching annotations', error);
      throw error;
    }
  }

  /**
   * @function deleteComment
   * @description Deletes a comment by UUID using the API
   * @param {CustomEvent} event - The custom event containing the UUID of the comment to delete
   * @returns {Promise<void>}
   */
  private deleteComment = async ({ detail }: CustomEvent): Promise<void> => {
    try {
      const { uuid } = detail;

      await ApiService.deleteComment(
        config.get('apiUrl'),
        config.get('apiKey'),
        uuid,
      );

      this.element.deleteComment(uuid);
    } catch (error) {
      this.logger.log('error when deleting comment', error);
      throw error;
    }
  };
}
