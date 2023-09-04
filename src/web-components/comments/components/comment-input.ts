import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../../base';
import { commentInputStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentInputStyle];

@customElement('superviz-comments-comment-input')
export class CommentsCommentInput extends WebComponentsBaseElement {
  constructor() {
    super();
    this.btnActive = false;
    this.text = '';
  }

  declare eventType: string;
  declare text: string;
  declare btnActive: boolean;
  declare editable: boolean;

  declare commentsInput: HTMLTextAreaElement;

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
    editable: { type: Boolean },
  };

  private getCommentInput = () => this.shadowRoot!.getElementById('comment-input--textarea') as HTMLTextAreaElement;
  private getCommentInputContainer = () => this.shadowRoot!.getElementById('comment-input--container') as HTMLDivElement;
  private getSendBtn = () => this.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('text') && this.text.length > 0) {
      const commentsInput = this.getCommentInput();
      commentsInput.value = this.text;
      this.updateHeight();
    }

    if (changedProperties.has('btnActive')) {
      const btnSend = this.getSendBtn();
      btnSend.disabled = !this.btnActive;
    }
  }

  private updateHeight() {
    const commentsInput = this.getCommentInput();
    const commentsInputContainer = this.getCommentInputContainer();

    commentsInput.style.height = '0px';
    commentsInputContainer.style.height = '0px';

    const textareaHeight = commentsInput.scrollHeight + 4;
    const textareaContainerHeight = commentsInput.scrollHeight;

    commentsInput.style.height = `${textareaHeight}px`;
    commentsInputContainer.style.height = `${textareaContainerHeight}px`;

    const btnSend = this.getSendBtn();
    btnSend.disabled = !(commentsInput.value.length > 0);
  }

  private send(e: Event) {
    e.preventDefault();

    const input = this.getCommentInput();
    const sendBtn = this.getSendBtn();
    const text = input.value;

    this.emitEvent(
      this.eventType,
      { text },
      {
        composed: false,
        bubbles: false,
      },
    );

    input.value = '';
    sendBtn.disabled = true;
    this.updateHeight();
  }

  private closeEditMode = () => {
    this.emitEvent('close-edit-mode', {}, { composed: false, bubbles: false });
  };

  protected render() {
    const commentInputEditableOptions = () => {
      if (!this.editable) return;

      return html`
        <button id="close" @click=${() => this.closeEditMode()} class="icon-button icon-button--medium icon-button--clickable" @click=${this.send}>
          <superviz-icon name="close" size="md"></superviz-icon>
        </button>
        <button id="confirm" class="comment-input--send-btn" disabled @click=${this.send}>
          <superviz-icon name="check" size="md"></superviz-icon>
        </button>
      `;
    };

    const commentInputOptions = () => {
      if (this.editable) return;

      return html`
        <button class="comment-input--send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="md"></superviz-icon>
        </button>
      `;
    };

    return html`
      <div class="comment-input">
        <div id="comment-input--container">
          <textarea id="comment-input--textarea" placeholder="Add comment..." @input=${this.updateHeight} wrap></textarea>
        </div>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
          <div>
            <button class="icon-button">
              <superviz-icon name="mention" size="sm"></superviz-icon>
            </button>
          </div>
          <div class="comment-input-options">
            ${commentInputOptions()}
            ${commentInputEditableOptions()}
          </div>
        </div>
      </div> 
    `;
  }
}
