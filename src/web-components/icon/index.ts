import { CSSResultGroup, LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../base';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles];

@customElement('superviz-icon')
export class Icon extends WebComponentsBaseElement {
  declare name: string;
  declare size: string;

  constructor() {
    super();

    this.name = '';
    this.size = 'md';
  }

  static properties = {
    name: { type: String },
    size: { type: String },
  };

  static styles = [
    styles,
    css`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `,
  ];

  protected render() {
    return html` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `;
  }
}
