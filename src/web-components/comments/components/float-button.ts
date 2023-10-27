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
  declare positionStyles: string;
  declare commentsPosition: string;
  private shouldHide: boolean;

  static properties = {
    positionStyles: { type: String },
    isHidden: { type: Boolean },
    commentsPosition: { type: String },
  };

  constructor() {
    super();
    this.isHidden = true;
    this.positionStyles = 'top: 20px; left: 20px;';
    this.shouldHide = false;
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

  updated(changedProperties) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      const floatButton = this.shadowRoot.querySelector('.float-button');
      if (!floatButton) return;

      floatButton.setAttribute('style', this.positionStyles);

      const windowSize = window.document.body.getBoundingClientRect().width;
      const buttonPosition = floatButton.getBoundingClientRect();
      const sideBarWidth = 320;

      if (!this.commentsPosition || this.commentsPosition === 'left') {
        this.shouldHide = buttonPosition.x < sideBarWidth;
        return;
      }

      this.shouldHide = windowSize - buttonPosition.right < sideBarWidth;
    });
  }

  protected render() {
    const floatButtonClasses = {
      'float-button': true,
      'hide-button': !this.isHidden && this.shouldHide,
    };

    return html` <button @click=${this.toggle} class="${classMap(floatButtonClasses)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`;
  }
}
