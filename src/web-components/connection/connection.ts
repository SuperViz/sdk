import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../base';

import { ConnectionStyle } from './css/index';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, ConnectionStyle];

@customElement('superviz-connection')
export class Connection extends WebComponentsBaseElement {
  static styles = styles;
  declare position: string;

  static properties = {
    position: { type: String },
  };

  constructor() {
    super();
    this.position = 'left: 20px; top: 20px;';
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    this.updateComplete.then(() => {
      const element = this.shadowRoot.querySelector('.superviz-connection');
      if (!element) return;

      element.setAttribute('style', this.position);
    });
  }

  protected render() {
    return html`<div class="superviz-connection"></div>`;
  }
}
