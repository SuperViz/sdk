import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { floatButtonStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, floatButtonStyle];

@customElement('superviz-comments-button')
export class CommentsFloatButton extends WebComponentsBaseElement {
  static styles = styles;

  protected render() {
    return html`<button class="float-button">
      <superviz-icon name="comment"></superviz-icon>
    </button>`;
  }
}
