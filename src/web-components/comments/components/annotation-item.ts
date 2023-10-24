import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Annotation, Comment } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
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

  static styles = styles;

  static properties = {
    annotation: { type: Object },
    expandComments: { type: Boolean },
    selected: { type: String, reflect: true },
    resolved: { type: Boolean },
    shouldShowUndoResolved: { type: Boolean, reflect: true },
    isLastAnnotation: { type: Boolean },
    annotationFilter: { type: String },
  };

  protected firstUpdated(): void {
    this.resolved = this.annotation.resolved;
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('selected')) {
      const isSelected = this.selected === this.annotation.uuid;
      this.expandComments = isSelected;
    }
  }

  selectAnnotation = () => {
    const { uuid } = this.annotation;
    document.body.dispatchEvent(new CustomEvent('select-annotation', { detail: { uuid } }));
  };

  private createComment({ detail }: CustomEvent) {
    const { text } = detail;

    this.emitEvent('create-comment', {
      uuid: this.annotation.uuid,
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

  protected render() {
    const filterIsAll = this.annotationFilter === AnnotationFilter.ALL;
    const filterIsResolved = this.annotationFilter === AnnotationFilter.RESOLVED;
    const replies = this.annotation.comments?.length;
    const isSelected = this.selected === this.annotation.uuid;

    const annotationClasses = {
      'annotation-item': true,
      'annotation-item--selected': isSelected,
    };

    const shouldHiddenAnnotation = {
      hidden: (this.resolved && filterIsAll) || (!this.resolved && filterIsResolved),
    };

    const HrClasses = {
      'sv-hr': true,
      hidden: this.isLastAnnotation,
    };

    const avatarCommentsClasses = {
      'avatars-comments': true,
      'comment-avatar--expand': !this.expandComments && replies > 1,
      hidden: !(!this.expandComments && replies > 1),
    };

    const commentsClasses = {
      'comments-container': true,
      'comment-item--expand': isSelected && this.expandComments,
      hidden: !(isSelected && this.expandComments),
    };

    const avatarCommentsTemplate = () => {
      const repliesSize = replies >= 5 ? 5 : replies;
      const isLastReply = replies - 1 > 5 ? 'last-reply' : '';
      const replyText = replies - 1 > 1 ? 'replies' : 'reply';
      const avatarDivs = [];

      for (let index = 0; index < repliesSize; index++) {
        avatarDivs.push(html`
          <div class="avatar avatar-divs-${index}">
            <img src="https://picsum.photos/200/300" />
          </div>
        `);
      }

      return html`
        ${avatarDivs}
        <div class="avatar-divs-${repliesSize} replies ${isLastReply} text text-big sv-gray-500">
          ${replies - 1} ${replyText}
        </div>
      `;
    };

    const expandedCommentsTemplate = (comment: Comment, index: number) => {
      if (index === 0) return html``;

      return html`
        <superviz-comments-comment-item
          uuid=${comment.uuid}
          avatar="https://picsum.photos/200/300"
          username=${comment.participant.name || 'Anonymous'}
          text=${comment.text}
          createdAt=${comment.createdAt}
        ></superviz-comments-comment-item>
      `;
    };

    const annotationResolvedTemplate = () => {
      if (!this.shouldShowUndoResolved) return html``;

      return html`
        <superviz-comments-annotation-resolved
          @undo-resolve=${this.resolveAnnotation}
          @hide=${this.hideUndoResolved}
          class=${classMap({ hidden: filterIsResolved })}
        >
        </superviz-comments-annotation-resolved>
      `;
    };

    return html`
      ${annotationResolvedTemplate()}

      <div class=${classMap(shouldHiddenAnnotation)}>
        <div class=${classMap(annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${this.annotation.comments?.[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${this.annotation.comments?.[0].participant?.name || 'Anonymous'}
              text=${this.annotation.comments?.[0].text}
              createdAt=${this.annotation.comments?.[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${classMap(avatarCommentsClasses)}>
              <div class="avatar-container">${avatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${classMap(commentsClasses)}>
            ${this.annotation.comments?.map(expandedCommentsTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${classMap(HrClasses)}></div>
      </div>
    `;
  }
}
