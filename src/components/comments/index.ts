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
    document.body.appendChild(this.element);
    this.element.setAttributeNode(document.createAttribute('open'));
  }

  protected destroy(): void {
    document.body.removeChild(this.element);
  }
}
