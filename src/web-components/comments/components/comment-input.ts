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
  }

  declare eventType: string;
  declare text: string;
  declare btnActive: boolean;

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
  };

  firstUpdated() {
    if (this.btnActive) {
      const btnSend = this.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;
      btnSend.disabled = false;
    }

    if (this.text) {
      const commentsInput = this.shadowRoot?.getElementById('comment-input--textarea') as HTMLTextAreaElement;
      commentsInput.value = this.text;
    }
  }

  private updateHeight() {
    const commentsInput = this.shadowRoot?.getElementById('comment-input--textarea') as HTMLTextAreaElement;
    const commentsInputContainer = this.shadowRoot?.getElementById('comment-input--container') as HTMLDivElement;

    commentsInput.style.height = '0px';
    commentsInputContainer.style.height = '0px';

    const textareaHeight = commentsInput.scrollHeight + 4;
    const textareaContainerHeight = commentsInput.scrollHeight;

    commentsInput.style.height = `${textareaHeight}px`;
    commentsInputContainer.style.height = `${textareaContainerHeight}px`;

    const btnSend = this.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;
    btnSend.disabled = !(commentsInput.value.length > 0);
  }

  private send(e: Event) {
    e.preventDefault();

    const input = this.shadowRoot?.getElementById('comment-input--textarea') as HTMLTextAreaElement;
    const sendBtn = this.shadowRoot?.querySelector('.comment-input--send-btn') as HTMLButtonElement;
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
