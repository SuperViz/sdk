import { Logger } from '../../common/utils';
import { Comments } from '../../web-components';
import { BaseComponent } from '../base';

export class CommentsComponent extends BaseComponent {
  protected name: string;
  protected logger: Logger;
  protected element: Comments;

  constructor() {
    super();
    this.name = 'Comments';
    this.logger = new Logger('@superviz/sdk/comments-component');
  }

  protected start(): void {
    this.element = document.createElement('superviz-comments') as Comments;
    this.element.setAttributeNode(document.createAttribute('open'));
    this.element.setAttribute('comments', JSON.stringify([]));
    document.body.appendChild(this.element);

    this.addListeners();
  }

  protected destroy(): void {
    document.body.removeChild(this.element);
  }

  private addListeners() {
    this.element.addEventListener('comments', (e: CustomEvent) => {
      // this.logger.info('comments', e);
      console.log('comments', e);
    });
  }
}
