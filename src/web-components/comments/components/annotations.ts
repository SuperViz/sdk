import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Annotation, Participant } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { annotationsStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationsStyle];

@customElement('superviz-comments-annotations')
export class CommentsAnnotations extends WebComponentsBaseElement {
  static styles = styles;
  static properties = {
    annotation: { type: Object },
    participantsList: { type: Object },
  };

  declare annotation: Annotation;
  declare participantsList: Participant[];

  private createComment({ detail }: CustomEvent) {
    this.emitEvent('create-annotation', detail);
    this.annotation = null;
  }

  private prepareToCreateAnnotation = async ({ detail }: CustomEvent) => {
    this.annotation = detail;

    await this.updateComplete;

    this.emitEvent('comment-input-focus', detail);
  };

  private cancelTemporaryAnnotation = () => {
    this.annotation = null;
  };

  private cancelTemporaryAnnotationEsc = (event: KeyboardEvent) => {
    if (event?.key !== 'Escape') return;

    this.annotation = null;
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.document.body.addEventListener(
      'prepare-to-create-annotation',
      this.prepareToCreateAnnotation,
    );
    window.document.body.addEventListener(
      'close-temporary-annotation',
      this.cancelTemporaryAnnotation,
    );

    window.document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.cancelTemporaryAnnotationEsc(e);
      }
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.document.body.removeEventListener(
      'prepare-to-create-annotation',
      this.prepareToCreateAnnotation,
    );
    window.document.body.removeEventListener(
      'close-temporary-annotation',
      this.cancelTemporaryAnnotation,
    );

    window.document.body.removeEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.cancelTemporaryAnnotationEsc(e);
      }
    });
  }

  protected render() {
    const commentInputClasses = {
      'annotations--comments-input': true,
      hidden: !this.annotation,
    };

    return html`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${classMap(commentInputClasses)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
            participantsList=${JSON.stringify(this.participantsList)}

          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `;
  }
}
