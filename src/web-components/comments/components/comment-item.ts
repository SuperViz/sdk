import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DateTime } from 'luxon';

import { Participant } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { commentItemStyle } from '../css';

import { CommentMode, CommentDropdownOptions, AnnotationFilter } from './types';

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
  declare username: string;
  declare text: string;
  declare resolved: boolean;
  declare createdAt: string;
  declare resolvable: boolean;
  declare mode: CommentMode;
  declare deleteCommentModalOpen: boolean;
  declare primaryComment: boolean;
  declare expandElipsis: boolean;
  declare annotationFilter: string;
  declare participantsList: Participant[];

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
    annotationFilter: { type: String },
    participantsList: { type: Object },
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

  private resolveAnnotation = (event: Event) => {
    event.stopPropagation();

    this.emitEvent(
      'resolve-annotation',
      {
        type: 'resolve-annotation',
        resolved: !this.resolved,
      },
      { composed: false, bubbles: false },
    );
  };

  private confirmDelete = () => {
    this.deleteCommentModalOpen = false;

    if (this.primaryComment) {
      return this.emitEvent('delete-annotation', {
        uuid: this.annotationId,
      });
    }

    this.emitEvent('delete-comment', {
      annotationId: this.annotationId,
      uuid: this.uuid,
    });
  };

  private closeEditMode = () => {
    this.mode = CommentMode.READONLY;
  };

  protected render() {
    const resolveIcon = this.annotationFilter === AnnotationFilter.ALL ? 'resolve' : 'undo';

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
          @click=${(event: Event) => event.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          participantsList=${JSON.stringify(this.participantsList)}
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `;
    };

    const commentText = () => {
      if (this.mode === CommentMode.EDITABLE) return;

      return html`
        <span
          id="comment-text"
          @click=${expandElipsis}
          class="text text-big sv-gray-700 ${shouldUseElipsis}"
          >${this.text}</span
        >
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
              <p class="text text-bold">${this.username[0]?.toUpperCase() || 'A'}</p>
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${humanizeDate(this.createdAt)}</span>
          </div>
          <div class="comment-item__actions">
            <button
              @click=${this.resolveAnnotation}
              class="icon-button icon-button--clickable icon-button--xsmall ${isResolvable}"
            >
              <superviz-icon name=${resolveIcon} size="md"></superviz-icon>
            </button>
            <superviz-dropdown
              options=${JSON.stringify(options)}
              label="label"
              returnTo="label"
              position="bottom-left"
              @selected=${dropdownOptionsHandler}
              @click=${(event: Event) => event.stopPropagation()}
            >
              <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
                <superviz-icon name="more" size="sm"></superviz-icon>
              </button>
            </superviz-dropdown>
          </div>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">${textareaHtml()} ${commentText()}</div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal
        ?open=${this.deleteCommentModalOpen}
        @close=${closeModal}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `;
  }
}
