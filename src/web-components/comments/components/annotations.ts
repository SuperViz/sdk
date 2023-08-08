import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { annotationsStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles || [], annotationsStyle];

@customElement('superviz-comments-annotations')
export class CommentsAnnotations extends WebComponentsBaseElement {
  static styles = styles;

  protected render() {
    return html`
      <div class="annotations">
        <span class="text text-big text-bold add-comment-btn">Click anywhere to add a comment</span>
      </div>
    `;
  }
}
