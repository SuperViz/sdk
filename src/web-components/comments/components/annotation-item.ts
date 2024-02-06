import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { ParticipantByGroupApi } from '../../../common/types/participant.types';
import { Annotation, Comment } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
import { annotationItemStyle } from '../css';

import { AnnotationFilter } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationItemStyle];

@customElement('superviz-comments-annotation-item')
export class CommentsAnnotationItem extends WebComponentsBaseElement {
  declare annotation: Annotation;
  declare expandComments: boolean;
  declare selected: string;
  declare resolved: boolean;
  declare shouldShowUndoResolved: boolean;
  declare isLastAnnotation: boolean;
  declare annotationFilter: string;
  declare participantsList: ParticipantByGroupApi[];

  static styles = styles;

  static properties = {
    annotation: { type: Object },
    expandComments: { type: Boolean },
    selected: { type: String, reflect: true },
    resolved: { type: Boolean },
    shouldShowUndoResolved: { type: Boolean },
    isLastAnnotation: { type: Boolean },
    annotationFilter: { type: String },
    participantsList: { type: Object },
  };

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      this.resolved = this.annotation.resolved;
      importStyle.call(this, ['comments']);
    });
  }

  private get filterIsAll(): boolean {
    return this.annotationFilter === AnnotationFilter.ALL;
  }

  private get filterIsResolved(): boolean {
    return this.annotationFilter === AnnotationFilter.RESOLVED;
  }

  private get shouldHideAnnotation() {
    return {
      hidden: (this.resolved && this.filterIsAll) || (!this.resolved && this.filterIsResolved),
    };
  }

  private get replies(): number {
    return [...this.annotation.comments].splice(1).length;
  }

  private get repliesSize(): number {
    return this.replies >= 5 ? 5 : this.replies;
  }

  private get replyText(): string {
    return this.replies !== 1 ? 'replies' : 'reply';
  }

  private get isSelected(): boolean {
    return this.selected === this.annotation.uuid;
  }

  private get annotationClasses() {
    return {
      comments__thread: true,
      'comments__thread--selected': this.isSelected,
    };
  }

  private get hrClasses() {
    return {
      'sv-hr': true,
      hidden: this.isLastAnnotation,
    };
  }

  private get avatarCommentsClasses() {
    return {
      'avatars-comments': true,
      'comment-avatar--expand': !this.expandComments && this.replies > 1,
      hidden: !(!this.expandComments && this.replies >= 1),
    };
  }

  private get commentsClasses() {
    return {
      'comments-container': true,
      'comment-item--expand': this.isSelected && this.expandComments,
      hidden: !(this.isSelected && this.expandComments),
    };
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('selected')) {
      const isSelected = this.selected === this.annotation.uuid;
      this.expandComments = isSelected;
    }
  }

  private selectAnnotation = () => {
    const { uuid } = this.annotation;
    document.body.dispatchEvent(new CustomEvent('select-annotation', { detail: { uuid } }));
  };

  private createComment({ detail }: CustomEvent) {
    const { text, mentions } = detail;

    this.emitEvent('create-comment', {
      uuid: this.annotation.uuid,
      mentions,
      text,
    });
  }

  private resolveAnnotation = ({ detail }: CustomEvent) => {
    const { uuid } = this.annotation;
    const { resolved, type } = detail;
    const isResolveAnnotation =
      type === 'resolve-annotation' && this.annotationFilter === AnnotationFilter.ALL;

    this.resolved = resolved;

    this.emitEvent('resolve-annotation', {
      uuid,
      resolved,
    });

    if (isResolveAnnotation) {
      this.shouldShowUndoResolved = true;
    }
  };

  private hideUndoResolved = () => {
    this.shouldShowUndoResolved = false;
  };

  private generateAvatarCommentsTemplate() {
    const avatarDivs = [];

    for (let index = 1; index <= this.repliesSize; index++) {
      if (this.annotation.comments[index]?.participant?.avatar) {
        avatarDivs.push(html`
          <div class="avatar">
            <img src=${this.annotation.comments[index]?.participant?.avatar} />
          </div>
        `);
      } else {
        avatarDivs.push(html`
          <div class="avatar">
            <p class="text text-bold">
              ${this.annotation.comments[index]?.participant.name[0]?.toUpperCase() || 'A'}
            </p>
          </div>
        `);
      }
    }

    return html`
      ${avatarDivs}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `;
  }

  private generateExpandedCommentsTemplate = (comment: Comment, index: number) => {
    if (index === 0) return html``;

    return html`
      <superviz-comments-comment-item
        uuid=${comment.uuid}
        avatar=${this.annotation?.comments?.at(index)?.participant?.avatar}
        username=${comment.participant.name || 'Anonymous'}
        text=${comment.text}
        createdAt=${comment.createdAt}
        annotationId=${this.annotation.uuid}
        participantsList=${JSON.stringify(this.participantsList)}
        mentions=${JSON.stringify(comment.mentions)}
        class="comments__replies"
      ></superviz-comments-comment-item>
    `;
  };

  private annotationResolvedTemplate() {
    if (!this.shouldShowUndoResolved) return html``;

    return html`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${classMap({ hidden: this.filterIsResolved })}
      >
      </superviz-comments-annotation-resolved>
    `;
  }

  protected render() {
    return html`
      ${this.annotationResolvedTemplate()}

      <div class=${classMap(this.shouldHideAnnotation)}>
        <div class=${classMap(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${this.annotation.comments?.[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${this.annotation.comments?.[0].participant?.name || 'Anonymous'}
              text=${this.annotation.comments?.[0].text}
              createdAt=${this.annotation.comments?.[0].createdAt}
              participantsList=${JSON.stringify(this.participantsList)}
              primaryComment
              avatar=${this.annotation?.comments?.at(0)?.participant?.avatar}
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
              mentions=${JSON.stringify(this.annotation.comments?.[0].mentions)}
              class="comments__annotation"
            ></superviz-comments-comment-item>
            <div class=${classMap(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${classMap(this.commentsClasses)}>
            ${this.annotation.comments?.map(this.generateExpandedCommentsTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${(event: Event) => event.stopPropagation()}
              placeholder="Reply"
              participantsList=${JSON.stringify(this.participantsList)}
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${classMap(this.hrClasses)}></div>
      </div>
    `;
  }
}
