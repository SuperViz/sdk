import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DateTime } from 'luxon';

import { WebComponentsBase } from '../../base';
import { commentItemStyle } from '../css';

import { CommentMode, CommentDropdownOptions } from './types';

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
  declare annotationId?: string;
  declare avatar: string;
  declare username: string;
  declare text: string;
  declare resolved: boolean;
  declare createdAt: string;
  declare resolvable: boolean;
  declare mode: CommentMode;
  declare deleteCommentModalOpen: boolean;
  declare primaryComment: boolean;
  declare expandElipsis: boolean;

  static properties = {
    uuid: { type: String },
    annotationId: { type: String },
    avatar: { type: String },
    username: { type: String },
    text: { type: String },
    resolved: { type: Boolean },
    resolvable: { type: Boolean },
    createdAt: { type: String },
    mode: { type: String },
    deleteCommentModalOpen: { type: Boolean },
    primaryComment: { type: Boolean },
    expandElipsis: { type: Boolean },
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

  private resolveAnnotation = () => {
    this.resolved = !this.resolved;

    this.emitEvent('resolve-annotation', {
      resolved: this.resolved,
    }, { composed: false, bubbles: false });
  };

  private confirmDelete = () => {
    this.deleteCommentModalOpen = false;

    if (this.primaryComment) {
      return this.emitEvent('delete-annotation', {
        uuid: this.annotationId,
      });
    }

    this.emitEvent('delete-comment', {
      uuid: this.uuid,
    });
  };

  private closeEditMode = () => {
    this.mode = CommentMode.READONLY;
  };

  protected render() {
    const humanizeDate = (date: string) => {
      return DateTime.fromISO(date).toFormat('yyyy-dd-MM');
    };

    const isResolvable = this.resolvable ? 'comment-item__resolve' : 'hidden';

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

      if (detail === CommentDropdownOptions.DELETE) {
        this.deleteCommentModalOpen = true;
      }
    };

    const expandElipsis = () => {
      if (this.text.length < 120) return;

      this.expandElipsis = true;
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
        <span id="comment-text" @click=${expandElipsis} class="text text-big sv-gray-700 ${shouldUseElipsis}">${this.text}</span>
      `;
    };

    const closeModal = () => {
      this.deleteCommentModalOpen = false;
    };

    const commentItemClass = {
      'comment-item': true,
      reply: !this.primaryComment,
    };

    const shouldUseElipsis = !this.expandElipsis && this.text.length > 120 ? 'line-clamp' : '';

    return html`
      <div class=${classMap(commentItemClass)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <img src=${this.avatar} />
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${humanizeDate(this.createdAt)}</span>
          </div>
          <button @click=${() => this.resolveAnnotation()} class="icon-button icon-button--clickable icon-button--xsmall ${isResolvable}">
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
      <superviz-comments-delete-comments-modal ?open=${this.deleteCommentModalOpen} @close=${closeModal} @confirm=${this.confirmDelete}>
      </superviz-comments-delete-comments-modal>
    `;
  }
}
