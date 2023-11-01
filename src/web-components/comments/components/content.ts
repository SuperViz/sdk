import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { contentStyle } from '../css';

import { AnnotationFilter, PinMode } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, contentStyle];

@customElement('superviz-comments-content')
export class CommentsContent extends WebComponentsBaseElement {
  constructor() {
    super();
    this.annotations = [];
  }

  static styles = styles;

  declare annotations: Annotation[];
  declare selectedAnnotation: string;
  declare annotationFilter: AnnotationFilter;
  private lastCommentId: string;

  static properties = {
    annotations: { type: Object },
    selectedAnnotation: { type: String },
    annotationFilter: { type: String },
  };

  private unselectAnnotation = () => {
    this.selectedAnnotation = null;
  };

  private unselectAnnotationEsc = (event?: KeyboardEvent) => {
    if (event && event?.key !== 'Escape') return;
    this.selectedAnnotation = null;
  };

  private selectAnnotation = ({ detail }: CustomEvent) => {
    const { uuid } = detail;

    if (this.selectedAnnotation === uuid) {
      this.selectedAnnotation = null;
      return;
    }

    this.selectedAnnotation = uuid;
  };

  updated(changedProperties) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      const selectedAnnotation = this.shadowRoot.querySelector(
        `[uuid='${this.selectedAnnotation}']`,
      );
      if (!selectedAnnotation) return;

      const isLastComment = this.lastCommentId === this.selectedAnnotation;
      const offset = !isLastComment ? -150 : 0;

      const clientRects = selectedAnnotation.getClientRects()[0];

      if (!clientRects) return;

      this.scrollBy(0, clientRects.y + offset);

      // "Add Comment" is not yet rendered in screen
      // so we need an extra scroll to show it
      if (isLastComment) {
        setTimeout(() => {
          this.scrollBy(0, clientRects.y + offset);
        }, 200);
      }
    });
  }

  connectedCallback(): void {
    super.connectedCallback();

    window.document.body.addEventListener('select-annotation', this.selectAnnotation);
    window.document.body.addEventListener('keyup', this.unselectAnnotationEsc);
    window.document.body.addEventListener('unselect-annotation', this.unselectAnnotation);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.document.body.removeEventListener('select-annotation', this.selectAnnotation);
    window.document.body.removeEventListener('keyup', this.unselectAnnotationEsc);
    window.document.body.removeEventListener('unselect-annotation', this.unselectAnnotation);
  }

  protected render() {
    const annotationsUnresolved = this.annotations?.filter((annotation: Annotation) => {
      return annotation.resolved === false;
    });

    const annotationsResolved = this.annotations?.filter((annotation: Annotation) => {
      return annotation.resolved === true;
    });

    const isLastAnnotation = (index: number, resolved: boolean) => {
      if (resolved) return annotationsResolved?.length === index + 1;
      this.lastCommentId = annotationsUnresolved[index].uuid;
      return annotationsUnresolved?.length === index + 1;
    };

    const annotationTemplate = (annotation: Annotation, index: number, resolved: boolean) => {
      const hasComments = annotation.comments.length > 0;

      const isLast = isLastAnnotation(index, resolved);

      const annotationComments = hasComments
        ? html`
            <superviz-comments-annotation-item
              annotation=${JSON.stringify(annotation)}
              selected="${this.selectedAnnotation}"
              ?isLastAnnotation=${isLast}
              annotationFilter=${this.annotationFilter}
              uuid=${annotation.uuid}
            >
            </superviz-comments-annotation-item>
          `
        : html``;

      return html` ${annotationComments} `;
    };

    const annotationsUnresolvedTemplate = annotationsUnresolved?.map((annotation, index) => {
      return annotationTemplate(annotation, index, false);
    });

    const annotationsResolvedTemplate = annotationsResolved?.map((annotation, index) => {
      return annotationTemplate(annotation, index, true);
    });

    return html` ${annotationsUnresolvedTemplate} ${annotationsResolvedTemplate} `;
  }
}
