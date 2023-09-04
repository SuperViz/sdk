import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DateTime } from 'luxon';

import { WebComponentsBase } from '../../base';
import { commentItemStyle } from '../css';

import { AnnotationOptions, CommentMode, CommentDropdownOptions } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentItemStyle];

@customElement('superviz-comments-comment-item')
export class CommentsCommentItem extends WebComponentsBaseElement {
  constructor() {
    super();
    this.resolved = false;
  }

  static styles = styles;

  declare uuid: string;
  declare avatar: string;
  declare username: string;
  declare text: string;
  declare resolved: boolean;
  declare createdAt: string;
  declare options: AnnotationOptions;
  declare mode: CommentMode;

  static properties = {
    uuid: { type: String },
    avatar: { type: String },
    username: { type: String },
    text: { type: String },
    resolved: { type: Boolean },
    createdAt: { type: String },
    options: { type: Object },
    mode: { type: String },
  };

  updated = (changedProperties: PropertyValueMap<any>) => {
    if (changedProperties.has('options')) {
      this.resolved = this.options?.resolved;
    }
  };

  private updateComment = ({ detail }: CustomEvent) => {
    const { text } = detail;
    this.text = text;
    this.closeEditMode();

    this.emitEvent('update-comment', {
      uuid: this.uuid,
      text,
    });
  };

  private closeEditMode = () => {
    this.mode = CommentMode.READONLY;
  };

  protected render() {
    const humanizeDate = (date: string) => {
      return DateTime.fromISO(date).toFormat('yyyy-dd-MM');
    };

    const isResolvable = this.options?.resolvable ? 'comment-item__resolve' : 'hidden';

    const iconResolve = this.resolved ? '1' : '0';

    const resolveAnnotation = () => {
      this.resolved = !this.resolved;

      this.emitEvent('resolve-annotation', {
        resolved: this.resolved,
      }, { composed: false, bubbles: false });
    };

    const options = [
      {
        label: CommentDropdownOptions.EDIT,
      },
      {
        label: CommentDropdownOptions.DELETE,
      },
    ];

    const dropdownOptionsHandler = ({ detail }: CustomEvent) => {
      if (detail === CommentDropdownOptions.EDIT) {
        this.mode = CommentMode.EDITABLE;
      }
    };

    const textareaHtml = () => {
      if (this.mode !== CommentMode.EDITABLE) return;

      return html`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          text=${this.text}
          eventType="update-comment" @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `;
    };

    const commentText = () => {
      if (this.mode === CommentMode.EDITABLE) return;

      return html`
        <span class="text text-big sv-gray-700">${this.text}</span>
      `;
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
          <button @click=${() => resolveAnnotation()} class="icon-button icon-button--clickable icon-button--medium icon-button--no-hover ${isResolvable}">
            <superviz-icon name="resolve" size="md"></superviz-icon>
          </button>
          <superviz-dropdown 
            options=${JSON.stringify(options)}
            label="label"
            returnTo="label"
            position="bottom-right"
            @selected=${dropdownOptionsHandler}
          >
            <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
              <superviz-icon name="more" size="sm"></superviz-icon>
            </button>
          </superviz-dropdown>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">
            ${textareaHtml()}
            ${commentText()}
          </div>
        </div>
      </div>
    `;
  }
}
