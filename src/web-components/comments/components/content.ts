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

  static properties = {
    annotations: { type: Object },
    selectedAnnotation: { type: String },
    annotationFilter: { type: String },
  };

  protected render() {
    const annotationsUnresolved = this.annotations?.filter((annotation: Annotation) => {
      return annotation.resolved === false;
    });

    const annotationsResolved = this.annotations?.filter((annotation: Annotation) => {
      return annotation.resolved === true;
    });

    const selectAnnotation = ({ detail }: CustomEvent) => {
      const { uuid } = detail;
      this.selectedAnnotation = uuid;
    };

    const isLastAnnotation = (index: number, resolved: boolean) => {
      if (resolved) return annotationsResolved?.length === index + 1;
      return annotationsUnresolved?.length === index + 1;
    };

    const annotationTemplate = (annotation: Annotation, index: number, resolved: boolean) => {
      const hasComments = annotation.comments.length > 0;

      const annotationComments = hasComments
        ? html`
            <superviz-comments-annotation-item
              annotation=${JSON.stringify(annotation)}
              selected="${this.selectedAnnotation}"
              @select-annotation=${selectAnnotation}
              ?isLastAnnotation=${isLastAnnotation(index, resolved)}
              annotationFilter=${this.annotationFilter}
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
