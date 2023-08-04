import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { variableStyle, typography, annotationsStyle } from '../css';

@customElement('superviz-comments-annotations')
export class CommentsAnnotations extends LitElement {
  static styles = [variableStyle, typography, annotationsStyle];

  protected render() {
    return html`
      <div class="annotations">
        <span class="text text-big text-bold add-comment-btn">Click anywhere to add a comment</span>
      </div>
    `;
  }
}
