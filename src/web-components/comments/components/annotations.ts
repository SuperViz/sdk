import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Annotation } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationsStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationsStyle];

@customElement('superviz-comments-annotations')
export class CommentsAnnotations extends WebComponentsBaseElement {
  static styles = styles;
  static properties = {
    annotation: { type: Object },
  };

  declare annotation: Annotation;

  private createComment({ detail }: CustomEvent) {
    const { text } = detail;

    this.emitEvent('create-comment', {
      uuid: this.annotation?.uuid,
      text,
    });

    this.annotation = undefined;
  }

  private setAnnotation = async ({ detail }: CustomEvent) => {
    this.annotation = detail.annotation;

    await this.updateComplete;

    this.emitEvent('comment-input-focus', {});
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.document.body.addEventListener('annotation-created', this.setAnnotation);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.document.body.removeEventListener('annotation-created', this.setAnnotation);
  }

  protected render() {
    const commentInputClasses = {
      'annotations--comments-input': true,
      hidden: !this.annotation,
    };

    return html`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">Click anywhere to add a comment</span>
        <div class=${classMap(commentInputClasses)}>
          <superviz-comments-comment-input 
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `;
  }
}
