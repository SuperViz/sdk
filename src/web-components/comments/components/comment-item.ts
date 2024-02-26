import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { DateTime } from 'luxon';

import { ParticipantByGroupApi } from '../../../common/types/participant.types';
import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
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
  declare participantsList: ParticipantByGroupApi[];
  declare mentions: ParticipantByGroupApi[];
  declare avatar: string;
  declare class: string;

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
    mentions: { type: Array },
    class: { type: String },
  };

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      importStyle.call(this, ['comments']);
    });
  }

  private updateComment = ({ detail }: CustomEvent) => {
    const { text, mentions } = detail;
    this.text = text;
    this.closeEditMode();

    this.emitEvent('update-comment', {
      uuid: this.uuid,
      mentions,
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

  private getAvatar() {
    if (this.avatar) {
      return html` <div class=${this.getClasses('avatar-container')}>
        <img src=${this.avatar} class=${this.getClasses('avatar-image')} />
      </div>`;
    }

    return html`<div class=${this.getClasses('avatar-container')}>
      <p class="text text-bold ${this.getClasses('avatar-letter')}">
        ${this.username[0]?.toUpperCase() || 'A'}
      </p>
    </div>`;
  }

  private getClasses(suffix: string) {
    return `comments__comment-item__${suffix} ${this.class}__${suffix}`;
  }

  protected render() {
    const resolveIcon = this.annotationFilter === AnnotationFilter.ALL ? 'resolve' : 'undo';

    const humanizeDate = (date: string) => {
      return DateTime.fromISO(date).toFormat('yyyy-dd-MM');
    };

    const isResolvable = this.resolvable ? 'comments__comment-item__resolve' : 'hidden';

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
          class="comments__comment-item--editable"
          editable
          @click=${(event: Event) => event.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          participantsList=${JSON.stringify(this.participantsList)}
          mentions=${JSON.stringify(this.mentions)}
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
          class="text text-big sv-gray-700 ${shouldUseElipsis} ${this.getClasses('content')}"
          >${this.text}</span
        >
      `;
    };

    const closeModal = () => {
      this.deleteCommentModalOpen = false;
    };

    const commentItemClass = {
      [this.class]: true,
      'comments__comment-item': true,
      reply: !this.primaryComment,
    };

    const shouldUseElipsis = !this.expandElipsis && this.text.length > 120 ? 'line-clamp' : '';

    return html`
      <div class=${classMap(commentItemClass)}>
        <div class=${this.getClasses('header')}>
          <div class=${this.getClasses('metadata')}>
            ${this.getAvatar()}
            <span class="text text-big text-bold sv-gray-700 ${this.getClasses('username')}"
              >${this.username}</span
            >
            <span class="text text-small sv-gray-500 ${this.getClasses('date')}"
              >${humanizeDate(this.createdAt)}</span
            >
          </div>
          <div class=${this.getClasses('actions')}>
            <button
              @click=${this.resolveAnnotation}
              class="${this.getClasses('icons')} ${this.getClasses(
                'resolve-icon',
              )} icon-button icon-button--clickable icon-button--xsmall ${isResolvable}"
            >
              <superviz-icon name=${resolveIcon} size="sm"></superviz-icon>
            </button>
            <superviz-dropdown
              options=${JSON.stringify(options)}
              label="label"
              returnTo="label"
              position="bottom-left"
              @selected=${dropdownOptionsHandler}
              @click=${(event: Event) => event.stopPropagation()}
              classesPrefix="comments__dropdown"
              parentComponent="comments"
            >
              <button
                slot="dropdown"
                class="${this.getClasses('icons')} ${this.getClasses(
                  'options-icon',
                )} icon-button icon-button--clickable icon-button--small"
              >
                <superviz-icon name="more" size="sm"></superviz-icon>
              </button>
            </superviz-dropdown>
          </div>
        </div>

        <div class="comments__comment-item__content">
          <div class="comments__comment-item__content__body">
            ${textareaHtml()} ${commentText()}
          </div>
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
