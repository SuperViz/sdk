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
  private apiKey: string;
  private apiUrl: string;
  private roomId: string;
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
    this.apiKey = config.get<string>('apiKey');
    this.apiUrl = config.get<string>('apiUrl');
    this.roomId = config.get<string>('roomId');
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
    document.body.removeChild(this.element);
    this.destroyListeners();
  }

  /**
   * @function addListeners
   * @description Adds event listeners to the Comments component
   * @returns {void}
   */
  private addListeners(): void {
    this.element.addEventListener('create-annotation', this.createAnnotation);
  }

  /**
   * @function destroyListeners
   * @description Removes event listeners from the Comments component
   * @returns {void}
   */
  private destroyListeners(): void {
    this.element.removeEventListener('create-annotation', this.createAnnotation);
  }

  /**
   * @function createAnnotation
   * @description Creates a new annotation and comment and adds them to the Comments component
   * @param {CustomEvent} e - The event object containing the annotation text and position
   * @returns {Promise<void>}
   */
  private createAnnotation = async (e: CustomEvent): Promise<void> => {
    const { text, position } = e.detail;
    const { apiUrl, apiKey, roomId, url } = this;

    const annotation: Annotation = await ApiService.createAnnotations(apiUrl, apiKey, {
      roomId,
      position: JSON.stringify(position),
      url,
      userId: this.localParticipant.id,
    });

    const comment = await this.createComment(annotation.uuid, text);

    this.addAnnotation([{
      ...annotation,
      comments: [comment],
    }]);
  };

  /**
   * @function createComment
   * @description Creates a new comment for a given annotation
   * @param {string} annotationId - The ID of the annotation to add the comment to
   * @param {string} text - The text content of the comment
   * @returns {Promise<Comment>} - A promise that resolves with the created comment object
   */
  private async createComment(annotationId: string, text: string): Promise<Comment> {
    const { apiUrl, apiKey } = this;

    return ApiService.createComment(apiUrl, apiKey, {
      annotationId,
      userId: this.localParticipant.id,
      text,
    });
  }

  /**
   * @function addAnnotation
   * @description Adds a new annotation to the Comments component
   * @param {Annotation[]} annotation - An array of annotation objects to add to the component
   * @returns {void}
   */
  private addAnnotation(annotation: Annotation[]): void {
    this.element.addAnnotation(annotation);
  }

  /**
   * @function fetchAnnotations
   * @description Fetches annotations from the API and adds them to the Comments component
   * @returns {Promise<void>}
   */
  private async fetchAnnotations(): Promise<void> {
    try {
      const { apiUrl, apiKey, roomId } = this;

      const annotations: Annotation[] = await ApiService.fetchAnnotation(apiUrl, apiKey, {
        roomId,
        url: window.location.href,
      });

      this.addAnnotation(annotations);
    } catch (error) {
      this.logger.log('error when fetching annotations', error);
    }
  }
}
