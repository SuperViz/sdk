import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DateTime } from 'luxon';

import { WebComponentsBase } from '../../base';
import { commentItemStyle } from '../css';

import { AnnotationOptions } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentItemStyle];

@customElement('superviz-comments-comment-item')
export class CommentsCommentItem extends WebComponentsBaseElement {
  constructor() {
    super();
    this.resolved = false;
  }

  static styles = styles;

  declare avatar: string;
  declare username: string;
  declare text: string;
  declare resolved: boolean;
  declare createdAt: string;
  declare options: AnnotationOptions;

  static properties = {
    avatar: { type: String },
    username: { type: String },
    text: { type: String },
    resolved: { type: Boolean },
    createdAt: { type: String },
    options: { type: Object },
  };

  updated = (changedProperties: PropertyValueMap<any>) => {
    if (changedProperties.has('options')) {
      this.resolved = this.options?.resolved;
    }
  };

  protected render() {
    const humanizeDate = (date: string) => {
      return DateTime.fromISO(date).toFormat('yyyy-dd-MM');
    };

    const isResolvable = this.options?.resolvable ? 'comment-item__resolve' : 'hidden';

    const iconResolve = this.resolved ? 'resolved' : 'unresolved';

    const resolveAnnotation = () => {
      this.resolved = !this.resolved;

      this.emitEvent('resolve-annotation', {
        resolved: this.resolved,
      }, { composed: false, bubbles: false });
    };

    return html`
      <div class="comment-item">
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <img src=${this.avatar} />
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${humanizeDate(this.createdAt)}</span>
          </div>
          <div class="${isResolvable}">
            <button @click=${() => resolveAnnotation()}>
              ${iconResolve}
            </button>
          </div>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">
            <span class="text text-big sv-gray-700">${this.text}</span>
          </div>
        </div>
      </div>
    `;
  }
}
