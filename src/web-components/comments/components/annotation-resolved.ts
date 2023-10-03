import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { annotationResolvedStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, annotationResolvedStyle];

const DEFAULT_SECONDS_TO_HIDE = 10 * 1000;

@customElement('superviz-comments-annotation-resolved')
export class CommentsAnnotationResolved extends WebComponentsBaseElement {
  constructor() {
    super();
    this.timeToHide = DEFAULT_SECONDS_TO_HIDE;
    this.isCanceled = false;
  }

  static styles = styles;

  private timeout;

  declare timeToHide: number;
  declare isCanceled: boolean;

  static properties = {
    timeToHide: { type: Number },
    isCanceled: { type: Boolean },
  };

  protected firstUpdated(): void {
    this.setTimer();
  }

  private setTimer = () => {
    clearTimeout(this.timeout);
    this.isCanceled = false;

    this.timeout = setTimeout(() => {
      if (this.isCanceled) return;

      this.timeToHide = 0;
      this.isCanceled = false;
      this.hide();
    }, this.timeToHide);
  };

  private hide() {
    this.emitEvent(
      'hide',
      {},
      { bubbles: false, composed: false },
    );
  }

  private undone() {
    this.isCanceled = true;
    this.hide();

    this.emitEvent('undo-resolve', {
      type: 'undo-resolve',
      resolved: false,
    }, { bubbles: false, composed: false });

    clearTimeout(this.timeout);
  }

  protected render() {
    if (this.timeToHide === 0) return html``;
    if (this.isCanceled) return html``;

    return html`
      <div class="annotation-resolved">
        <span class="text text-big sv-gray-700">You resolve this comment</span>
        <button id="undone" @click=${this.undone} class="icon-button icon-button--clickable icon-button--medium">
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `;
  }
}
