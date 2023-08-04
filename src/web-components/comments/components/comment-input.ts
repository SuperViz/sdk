import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { variableStyle, typography } from '../css';

@customElement('superviz-comments-comment-input')
export class CommentsCommentInput extends LitElement {
  static styles = [variableStyle, typography];

  protected render() {
    return html` <div class="comment-input">//</div> `;
  }
}
