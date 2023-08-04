import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { variableStyle, typography, commentItemStyle } from '../css';

@customElement('superviz-comments-comment-item')
export class CommentsCommentItem extends LitElement {
  static styles = [variableStyle, typography, commentItemStyle];

  declare avatar: string;
  declare username: string;
  declare text: string;
  declare resolved: boolean;
  declare createdAt: string;

  static properties = {
    avatar: { type: String },
    username: { type: String },
    text: { type: String },
    resolved: { type: Boolean },
    createdAt: { type: String },
  };

  protected render() {
    return html`
      <div class="comment-item">
        <div class="comment-item__avatar">
          <img src=${this.avatar} />
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__header">
            <span class="text text-bold">${this.username}</span>
            <span class="text text-small">${this.createdAt}</span>
          </div>
          <div class="comment-item__content__body">
            <span class="text text-big">${this.text}</span>
          </div>
        </div>
      </div>
    `;
  }
}
