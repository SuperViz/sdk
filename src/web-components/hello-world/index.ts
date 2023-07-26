import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('superviz-hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `;

  protected render() {
    return html` <div>Hello from SuperViz!</div> `;
  }
}
