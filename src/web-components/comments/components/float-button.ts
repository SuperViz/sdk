import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../../base';
import { floatButtonStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, floatButtonStyle];

@customElement('superviz-comments-button')
export class CommentsFloatButton extends WebComponentsBaseElement {
  static styles = styles;
  declare isHidden: boolean;

  static properties = {
    isHidden: { type: Boolean },
  };

  constructor() {
    super();
    this.isHidden = true;
  }

  private toggle(details) {
    this.emitEvent('toggle', {});
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.document.body.addEventListener('toggle-annotation-sidebar', () => {
      this.isHidden = !this.isHidden;
    });
  }

  protected render() {
    const floatButtonClasses = {
      'float-button': true,
      'hide-button': !this.isHidden,
    };

    return html` <button @click=${this.toggle} class="${classMap(floatButtonClasses)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`;
  }
}
