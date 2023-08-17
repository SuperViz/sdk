import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Annotation } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { contentStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles || [], contentStyle];

@customElement('superviz-comments-content')
export class CommentsContent extends WebComponentsBaseElement {
  constructor() {
    super();
    this.annotations = [];
  }

  static styles = styles;

  declare annotations: Annotation[];
  declare selectedAnnotation: string;

  static properties = {
    annotations: { type: Object },
    selectedAnnotation: { type: String },
  };

  protected render() {
    const isLastAnnotation = (index: number) => {
      return this.annotations.length === index + 1 ? 'hidden' : '';
    };

    const selectedAnnotation = (uuid: string) => {
      this.selectedAnnotation = uuid;
    };

    return this.annotations
      .map((annotation: Annotation, index: number) => {
        return html`
          <superviz-comments-annotation-pin
            id=${annotation.uuid}
            pos=${annotation.position}>
          </superviz-comments-annotation-pin>

          <superviz-comments-annotation-item
            annotation=${JSON.stringify(annotation)}
            selected="${this.selectedAnnotation}"
            @selectAnnotation=${(e: CustomEvent) => selectedAnnotation(e.detail.uuid)}
          >
          </superviz-comments-annotation-item>

          <div class="sv-hr ${isLastAnnotation(index)}"></div>
        `;
      });
  }
}
