import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { variableStyle, typography, topbarStyle } from '../css';

@customElement('superviz-comments-topbar')
export class CommentsTopbar extends LitElement {
  static styles = [variableStyle, typography, topbarStyle];

  protected render() {
    return html`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span>></span>
      </div>
    `;
  }
}
