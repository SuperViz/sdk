import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { variableStyle } from '../css';

@customElement('superviz-paragraph')
export class Paragraph extends LitElement {
  static styles = [variableStyle];

  declare type: string;
  declare bold: boolean;

  static properties = {
    type: { type: String },
    bold: { type: Boolean },
  };

  protected render() {
    return html` <p>//</p> `;
  }
}
