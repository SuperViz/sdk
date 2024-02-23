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
  declare isActive: boolean;

  static properties = {
    positionStyles: { type: String },
    isHidden: { type: Boolean },
    commentsPosition: { type: String },
    isActive: { type: Boolean },
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

  private onTogglePinActive = ({ detail: { isActive } }: CustomEvent) => {
    this.isActive = isActive;
  };

  connectedCallback(): void {
    super.connectedCallback();

    window.document.body.addEventListener('toggle-annotation-sidebar', () => {
      this.isHidden = !this.isHidden;
    });
    window.document.body.addEventListener('toggle-pin-active', this.onTogglePinActive);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.document.body.removeEventListener('toggle-annotation-sidebar', () => {
      this.isHidden = !this.isHidden;
    });
    window.document.body.removeEventListener('toggle-pin-active', this.onTogglePinActive);
  }

  private async getTextWithDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Comment');
      }, 300);
    });
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.updateComplete.then(() => {
      const floatButton = this.shadowRoot.querySelector('.comments__floating-button');
      if (!floatButton) return;

      floatButton.setAttribute('style', this.positionStyles);
    });
  }

  private calculateIfShouldHide() {
    const sidebar = document
      .getElementsByTagName('superviz-comments')[0]
      ?.shadowRoot.querySelector('.superviz-comments');

    const floatButton = this.shadowRoot.querySelector('.comments__floating-button');

    if (!sidebar || !floatButton) return;

    const {
      left: sbLeft,
      right: sbRight,
      top: sbTop,
      bottom: sbBottom,
    } = sidebar.getBoundingClientRect();
    const {
      left: fbLeft,
      right: fbRight,
      top: fbTop,
      bottom: fbBottom,
    } = floatButton.getBoundingClientRect();

    console.log(sbLeft, sbRight, sbTop, sbBottom);
    console.log(fbLeft, fbRight, fbTop, fbBottom);

    const sidebarHidesTop = sbBottom > fbTop && fbBottom > sbTop;
    const sidebarHidesBottom = sbTop < fbBottom && fbTop < sbBottom;
    const sidebarHidesLeft = sbRight > fbLeft && fbRight > sbLeft;
    const sidebarHidesRight = sbLeft < fbRight && fbLeft < sbRight;

    this.shouldHide =
      (sidebarHidesBottom || sidebarHidesTop) && (sidebarHidesLeft || sidebarHidesRight);
  }

  protected render() {
    this.calculateIfShouldHide();

    const floatButtonClasses = {
      'comments__floating-button': true,
      'hide-button': !this.isHidden && this.shouldHide,
      isActive: this.isActive,
    };

    const textClasses = {
      text: true,
      'text-big': true,
      'text-bold': true,
      'comments__floating-button__text': true,
      textActive: this.isActive,
      textInactive: !this.isActive,
    };

    return html` <button @click=${this.toggle} class="${classMap(floatButtonClasses)}">
      <superviz-icon
        size="sm"
        name="comment"
        class="comments__floating-button__icon"
        color=${this.isActive ? 'white' : 'black'}
      ></superviz-icon>

      <p class="${classMap(textClasses)}">${this.isActive ? 'Cancel' : 'Comment'}</p>
    </button>`;
  }
}
