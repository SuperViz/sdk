import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation, Comment } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationItemStyle } from '../css';

import { AnnotationOptions } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationItemStyle];

@customElement('superviz-comments-annotation-item')
export class CommentsAnnotationItem extends WebComponentsBaseElement {
  declare annotation: Annotation;
  declare expandComments: boolean;
  declare selected: string;
  declare options: AnnotationOptions;

  static styles = styles;

  static properties = {
    annotation: { type: Object },
    expandComments: { type: Boolean },
    selected: { type: String, reflect: true },
    options: { type: Object },
  };

  protected firstUpdated(): void {
    this.options = {
      resolvable: true,
      resolved: this.annotation.resolved,
    };
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('selected')) {
      const isSelected = this.selected === this.annotation.uuid;
      this.expandComments = isSelected;
    }
  }

  selectAnnotation = () => {
    const { uuid } = this.annotation;
    this.emitEvent('select-annotation', { uuid });
  };

  private createComment({ detail }: CustomEvent) {
    const { text } = detail;

    this.emitEvent('create-comment', {
      uuid: this.annotation.uuid,
      text,
    });
  }

  protected render() {
    const replies = this.annotation.comments.length;

    const isSelected = this.selected === this.annotation.uuid;

    const annotationClasses: string = [
      'annotation-item',
      isSelected ? 'annotation-item--selected' : '',
    ].join(' ');

    const shouldExpandAvatarComments = !this.expandComments && replies > 1 ? 'comment-avatar--expand' : 'hidden';

    const shouldExpandComments = isSelected && this.expandComments ? 'comment-item--expand' : 'hidden';

    const avatarComments = (comment: Comment, index: number) => {
      if (index === 1) return html``;

      const avatarNumber = index;

      return html`
        <div class="avatar avatar-divs-${avatarNumber}">
          <img src="https://picsum.photos/200/300" />
        </div>
      `;
    };

    const expandedComments = (comment: Comment, index: number) => {
      if (index === 0) return html``;

      return html`
        <superviz-comments-comment-item
          uuid=${comment.uuid}
          avatar="https://picsum.photos/200/300"
          username="username"
          text=${comment.text}
          createdAt=${comment.createdAt}
        ></superviz-comments-comment-item>
      `;
    };

    const resolveAnnotation = ({ detail }: CustomEvent) => {
      const { uuid } = this.annotation;
      const { resolved } = detail;

      this.emitEvent('resolve-annotation', {
        uuid,
        resolved,
      });

      this.options.resolved = resolved;
    };

    return html`
      <div class=${annotationClasses} @click=${() => this.selectAnnotation()}>
        <div>
          <superviz-comments-comment-item
            uuid=${this.annotation.comments[0].uuid}
            avatar="https://picsum.photos/200/300"
            username="username"
            text=${this.annotation.comments[0].text}
            createdAt=${this.annotation.comments[0].createdAt}
            options=${JSON.stringify(this.options)}
            primaryComment
            @resolve-annotation=${resolveAnnotation}
          ></superviz-comments-comment-item>

          <div class="avatars-comments ${shouldExpandAvatarComments}">  
            <div class="avatar-container">
              ${this.annotation.comments.map(avatarComments)}
              <div class="avatar-divs-${replies} replies text text-big sv-gray-500">${replies - 1} replies</div>
            </div>
          </div>
        </div>

        <div class="comments-container ${shouldExpandComments}">
          ${this.annotation.comments.map(expandedComments)}
          <superviz-comments-comment-input
            @create-comment=${this.createComment}
            eventType="create-comment"
          ></superviz-comments-comment-input>
        </div>
      </div>
    `;
  }
}
