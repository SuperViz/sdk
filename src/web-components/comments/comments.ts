import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { variableStyle, commentsStyle } from './css';

@customElement('superviz-comments')
export class Comments extends LitElement {
  static styles = [variableStyle, commentsStyle];

  declare open: boolean;

  static properties = {
    open: { type: Boolean },
  };

  protected render() {
    const containerClass = () => {
      const classes = ['sv-container'];
      return classes;
    };

    return html`
      <div class=${containerClass()}>
        <superviz-comments-topbar></superviz-comments-topbar>
        <superviz-comments-content></superviz-comments-content>
      </div>
    `;
  }
}
