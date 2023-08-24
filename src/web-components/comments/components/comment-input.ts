import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

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

  declare commentsInput: HTMLTextAreaElement;

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
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

    this.emitEvent(this.eventType, { text });

    input.value = '';
    sendBtn.disabled = true;
    this.updateHeight();
  }

  protected render() {
    return html`
      <div class="comment-input">
        <div id="comment-input--container">
          <textarea id="comment-input--textarea" placeholder="Add comment..." @input=${this.updateHeight} wrap></textarea>
        </div>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
          <div>
            <button class="icon-minus_sm">X</button>
            <button>X</button>
          </div>
          <div>
            <button class="comment-input--send-btn" disabled @click=${this.send}>X</button>
          </div>
        </div>
      </div> 
    `;
  }
}
