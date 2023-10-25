import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { topbarStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, topbarStyle];

@customElement('superviz-comments-topbar')
export class CommentsTopbar extends WebComponentsBase(LitElement) {
  static styles = styles;

  private close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  protected render() {
    return html`
      <div class="topbar">
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name="left" size="lg"></superviz-icon>
        </span>
        <span class="text text-bold">COMMENTS</span>
      </div>
    `;
  }
}
