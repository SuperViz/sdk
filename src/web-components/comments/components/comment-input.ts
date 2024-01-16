import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { AnnotationPositionInfo, Participant } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { commentInputStyle } from '../css';
import { AutoCompleteHandler } from '../utils/autocomplete-handler';
import mentionHandler from '../utils/mention-handler';


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
  declare mentionList: Participant[];
  declare mentions: Participant[];
  declare participantsList: Participant[];

  private pinCoordinates: AnnotationPositionInfo | null = null;

  private autoCompleteHandler: AutoCompleteHandler = new AutoCompleteHandler();

  constructor() {
    super();
    this.btnActive = false;
    this.text = '';
    this.mentionList = [];
    this.mentions = [];
  }

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
    editable: { type: Boolean },
    placeholder: { type: String },
    mentions: { type: Array },
    mentionList: { type: Object },
    participantsList: { type: Object },
  };

  private addAtSymbolInCaretPosition = (e) => {
    const input = this.shadowRoot!.getElementById('comment-input--textarea') as HTMLTextAreaElement;
    const newInputEvent = new InputEvent('input', {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(newInputEvent, 'data', {
      value: '@',
      writable: true,
    });

    input.dispatchEvent(newInputEvent);
  }

  private getCommentInput = () => {
    return this.shadowRoot!.getElementById('comment-input--textarea') as HTMLTextAreaElement;
  };

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

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    this.emitEvent('comment-input-ready', {}, { composed: false, bubbles: false });

    const commentTextarea = this.getCommentInput();

    if (commentTextarea) {
      commentTextarea.addEventListener('input', this.handleInput);
    }

    if (this.text.length > 0) {
      this.autoCompleteHandler.setMentions(this.mentions)
    }
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

  private userMentionedByTextInput = (mentions) => {
    this.mentionList = [];
    const mentioned = {
      detail: {
        ...mentions[0]
      }
    };
    this.insertMention(mentioned)
  }

  private buttonAtSimbol = () => {
    let caretIndex = this.autoCompleteHandler.getSelectionStart()
    const getValue = this.autoCompleteHandler.getValue()

    this.autoCompleteHandler.setValue(`${getValue.slice(0, caretIndex)  }@${  getValue.slice(caretIndex, getValue.length)}`)

    caretIndex +=1
    const keyData = this.autoCompleteHandler.getLastKeyBeforeCaret(caretIndex);
    const keyIndex = keyData?.keyIndex ?? -1;
    const searchText = this.autoCompleteHandler.searchMention(caretIndex, keyIndex);
    const position = {
      start: keyIndex + 1,
      end: caretIndex,
    }
    return {searchText, position}
  }

  private handleInput = (e: InputEvent) => {
    this.autoCompleteHandler.setInput(e);
    const caretIndex = this.autoCompleteHandler.getSelectionStart();
    const keyData = this.autoCompleteHandler.getLastKeyBeforeCaret(caretIndex);
    const keyIndex = keyData?.keyIndex ?? -1;

    let searchText = this.autoCompleteHandler.searchMention(caretIndex, keyIndex);
    let position = this.autoCompleteHandler.getSelectionPosition()

    const isButtonAtSimbol = (e.data === '@' && keyIndex === -1)
    const isButtonAtSimbolAndNotStartedMention = (e.data === '@' && caretIndex - 1 !== keyIndex)

    if (isButtonAtSimbol || isButtonAtSimbolAndNotStartedMention) {
      const data = this.buttonAtSimbol()
      searchText = data.searchText
      position = data.position
    }

    if (searchText === null) {
      this.mentionList = []
      return;
    }

    const { action, mentions, findDigitParticipant } = mentionHandler.matchParticipant(searchText, position, this.participantsList)

    if (findDigitParticipant) {
      this.userMentionedByTextInput(mentions)
      return
    }

    if (action === 'show') {
      this.mentionList = mentions
    }

    if (action === 'hide') {
      this.mentionList = [];
    }
  }

  private insertMention = (event) => {
    const { id, name, avatar, email, position } = event.detail;

    this.autoCompleteHandler.insertMention(position.start, position.end, {
      id,
      name,
      avatar,
      email,
    });

    this.updateHeight();
  }

  private updateHeight() {
    const commentsInput = this.commentInput;

    commentsInput.style.height = '40px';

    let textareaHeight = commentsInput.scrollHeight + 16;

    if (textareaHeight === 47) {
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
        mentions: this.autoCompleteHandler.getMentions(),
        position: this.pinCoordinates,
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
        mentions: this.autoCompleteHandler.getMentions(),
        position: this.pinCoordinates,
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

  private onTextareaLoseFocus = (e) => {
    if (!e.target.contains(this)) return;

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
          <superviz-comments-mention-list
            .participants=${this.mentionList}
            @participant-selected=${this.insertMention}
          ></superviz-comments-mention-list>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
            <button class="icon-button mention">
              <superviz-icon name="mention" @click=${this.addAtSymbolInCaretPosition} size="sm"></superviz-icon>
            </button>
            <div class="comment-input-options">
              ${commentInputOptions()} ${commentInputEditableOptions()}
            </div>
        </div>
    `;
  }
}
