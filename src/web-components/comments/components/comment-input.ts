import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { AnnotationPositionInfo } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { commentInputStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentInputStyle];

@customElement('superviz-comments-comment-input')
export class CommentsCommentInput extends WebComponentsBaseElement {
  declare eventType: string;
  declare text: string;
  declare btnActive: boolean;
  declare editable: boolean;
  declare commentsInput: HTMLTextAreaElement;
  declare placeholder: string;

  constructor() {
    super();
    this.btnActive = false;
    this.text = '';
  }

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
    editable: { type: Boolean },
    placeholder: { type: String },
  };

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    this.emitEvent('comment-input-ready', {}, { composed: false, bubbles: false });
  }

  private get commentInput() {
    return this.shadowRoot!.getElementById('comment-input--textarea') as HTMLTextAreaElement;
  }

  private getSendBtn = () => {
    return this.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;
  };

  private get optionsContainer() {
    return this.shadowRoot!.querySelector('.comment-input--options') as HTMLTextAreaElement;
  }

  private get horizontalRule() {
    return this.shadowRoot!.querySelector('.sv-hr') as HTMLDivElement;
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!['create-annotation', 'create-comment'].includes(this.eventType)) return;

    this.addEventListener('keyup', this.sendEnter);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (!['create-annotation', 'create-comment'].includes(this.eventType)) return;

    this.removeEventListener('keyup', this.sendEnter);
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('text') && this.text.length > 0) {
      const commentsInput = this.commentInput;
      commentsInput.value = this.text;
      this.updateHeight();
    }

    if (changedProperties.has('btnActive')) {
      const btnSend = this.getSendBtn();
      btnSend.disabled = !this.btnActive;
    }
  }

  private updateHeight() {
    const commentsInput = this.commentInput;

    commentsInput.style.height = '40px';

    let textareaHeight = commentsInput.scrollHeight + 16;

    if (textareaHeight > 40) {
      commentsInput.style.paddingBottom = '8px';
    }

    if (textareaHeight === 47) {
      commentsInput.style.paddingBottom = '0';
      textareaHeight = 40;
    }

    commentsInput.style.height = `${textareaHeight}px`;

    const btnSend = this.getSendBtn();
    btnSend.disabled = !(commentsInput.value.length > 0);
  }

  private sendEnter = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || e.shiftKey) return;

    const input = this.commentInput;
    const text = input.value.trim();

    if (!text) return;
    const sendBtn = this.getSendBtn();

    this.emitEvent(
      this.eventType,
      {
        text,
      },
      {
        composed: false,
        bubbles: false,
      },
    );

    input.value = '';
    sendBtn.disabled = true;
    this.updateHeight();
  };

  private send(e: Event) {
    e.preventDefault();

    const input = this.commentInput;
    const sendBtn = this.getSendBtn();
    const text = input.value;

    this.emitEvent(
      this.eventType,
      {
        text,
      },
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

  private onTextareaFocus = () => {
    const options = this.optionsContainer;
    const rule = this.horizontalRule;

    options.classList.add('active-textarea');
    rule.classList.add('active-hr');
  };

  private onTextareaLoseFocus = () => {
    const options = this.optionsContainer;
    const rule = this.horizontalRule;
    const textarea = this.commentInput;

    if (!textarea.value.length) {
      options.classList.remove('active-textarea');
      rule.classList.remove('active-hr');
    }
  };

  protected render() {
    const commentInputEditableOptions = () => {
      if (!this.editable) return;

      return html`
        <button
          id="close"
          @click=${() => this.closeEditMode()}
          class="icon-button icon-button--medium icon-button--clickable"
          @click=${this.send}
        >
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
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="line-arrow-right" size="sm" allowSetSize=${true}></superviz-icon>
        </button>
      `;
    };

    /* Insert inside .comment-input--options when mentions is ready
    <div class="comment-actions">
      <button class="icon-button mention">
        <superviz-icon name="mention" size="sm" ?allowSetSize=${true}></superviz-icon>
      </button>
  </div> */

    return html`
      <div class="comment-input">
        <textarea
          id="comment-input--textarea"
          placeholder=${this.placeholder ?? 'Add comment...'}
          @input=${this.updateHeight}
          @focus=${this.onTextareaFocus}
          @blur=${this.onTextareaLoseFocus}
          spellcheck="false"
        ></textarea>
        <hr class="sv-hr" />
        <div class="comment-input--options">
          <div class="comment-input-options">
            ${commentInputOptions()} ${commentInputEditableOptions()}
          </div>
        </div>
      </div>
    `;
  }
}
