import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { annotationsStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationsStyle];

@customElement('superviz-comments-annotations')
export class CommentsAnnotations extends WebComponentsBaseElement {
  declare open: boolean;

  static styles = styles;

  static properties = {
    open: { type: Boolean },
  };

  private createAnnotation(e: CustomEvent) {
    this.emitEvent('create-annotation', {
      position: {},
      text: e.detail.text,
    });
  }

  protected render() {
    return html`
      <div class="annotations">
        <span class="text text-big text-bold add-comment-btn">Click anywhere to add a comment</span>
        <superviz-comments-comment-input 
          @create-comment=${this.createAnnotation}
          eventType="create-comment"
        >
        </superviz-comments-comment-input>
      </div>
    `;
  }
}
