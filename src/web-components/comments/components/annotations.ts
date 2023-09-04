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

  private createAnnotation({ detail }: CustomEvent) {
    this.emitEvent('create-annotation', {
      position: {},
      text: detail.text,
    });
  }

  protected render() {
    return html`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">Click anywhere to add a comment</span>
        <div class="annotations--comments-input">
          <superviz-comments-comment-input 
            @create-annotation=${this.createAnnotation}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `;
  }
}
