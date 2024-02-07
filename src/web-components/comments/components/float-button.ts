import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
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
    this.commentsPosition = 'left';
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      importStyle.call(this, ['comments']);
    });
  }

  private toggle() {
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
      const floatButton = this.shadowRoot.querySelector('.comments__floating-button');
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
      'comments__floating-button': true,
      'hide-button': !this.isHidden && this.shouldHide,
    };

    return html` <button @click=${this.toggle} class="${classMap(floatButtonClasses)}">
      <superviz-icon
        size="sm"
        name="comment"
        class="comments__floating-button__icon"
      ></superviz-icon>

      <p class="text text-big text-bold comments__floating-button__text">Comments</p>
    </button>`;
  }
}
