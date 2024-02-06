import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ParticipantByGroupApi } from '../../../common/types/participant.types';
import { AnnotationPositionInfo, CommentMention } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
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
  declare mentionList: ParticipantByGroupApi[];
  declare mentions: CommentMention[];
  declare participantsList: ParticipantByGroupApi[];

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

  private addAtSymbolInCaretPosition = () => {
    const input = this.shadowRoot!.querySelector('.s-c__input__textarea') as HTMLTextAreaElement;
    const newInputEvent = new InputEvent('input', {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(newInputEvent, 'data', {
      value: '@',
      writable: true,
    });

    input.dispatchEvent(newInputEvent);
  };

  private getCommentInput = () => {
    return this.shadowRoot!.querySelector('.s-c__input__textarea') as HTMLTextAreaElement;
  };

  private get commentInput() {
    return this.shadowRoot!.querySelector('.s-c__input__textarea') as HTMLTextAreaElement;
  }

  private getSendBtn = () => {
    return this.shadowRoot!.querySelector('.s-c__input__send-button') as HTMLButtonElement;
  };

  private get optionsContainer() {
    return this.shadowRoot!.querySelector('.s-c__input__options') as HTMLTextAreaElement;
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
    const textarea = this.getCommentInput();
    textarea.removeEventListener('keydown', this.sendEnter);
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    this.updateComplete.then(() => {
      this.emitEvent('comment-input-ready', {}, { composed: false, bubbles: false });

      const commentTextarea = this.getCommentInput();

      if (commentTextarea) {
        commentTextarea.addEventListener('input', this.handleInput);

        const textarea = this.getCommentInput();
        textarea.addEventListener('keydown', this.sendEnter);
      }

      if (this.text.length > 0) {
        const mentions = this.participantsList.map(({ id, name }) => ({ userId: id, name }));
        this.mentions = this.autoCompleteHandler.getMentions(this.text, mentions);
        this.autoCompleteHandler.setMentions(this.mentions);
      }

      importStyle.call(this, ['comments']);
    });
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
        ...mentions[0],
      },
    };
    this.insertMention(mentioned);
  };

  private buttonAtSymbol = () => {
    let caretIndex = this.autoCompleteHandler.getSelectionStart();
    const getValue = this.autoCompleteHandler.getValue();

    this.autoCompleteHandler.setValue(
      `${getValue.slice(0, caretIndex)}@${getValue.slice(caretIndex, getValue.length)}`,
    );

    caretIndex += 1;
    const keyData = this.autoCompleteHandler.getLastKeyBeforeCaret(caretIndex);
    const keyIndex = keyData?.keyIndex ?? -1;
    const searchText = this.autoCompleteHandler.searchMention(caretIndex, keyIndex);
    const position = {
      start: keyIndex + 1,
      end: caretIndex,
    };
    return { searchText, position };
  };

  private handleInput = (e: InputEvent) => {
    if (e.data === null) return;
    this.autoCompleteHandler.setInput(e);
    const caretIndex = this.autoCompleteHandler.getSelectionStart();
    const keyData = this.autoCompleteHandler.getLastKeyBeforeCaret(caretIndex);
    const keyIndex = keyData?.keyIndex ?? -1;

    let searchText = this.autoCompleteHandler.searchMention(caretIndex, keyIndex);
    let position = this.autoCompleteHandler.getSelectionPosition();

    const isButtonAtSymbol = e.data === '@' && keyIndex === -1;
    const isButtonAtSymbolAndNotStartedMention = e.data === '@' && caretIndex - 1 !== keyIndex;

    if (isButtonAtSymbol || isButtonAtSymbolAndNotStartedMention) {
      const data = this.buttonAtSymbol();
      searchText = data.searchText;
      position = data.position;
    }

    if (searchText === null) {
      this.mentionList = [];
      return;
    }

    const { action, mentions, findDigitParticipant } = mentionHandler.matchParticipant(
      searchText,
      position,
      this.participantsList,
    );

    if (findDigitParticipant) {
      this.userMentionedByTextInput(mentions);
      return;
    }

    if (action === 'show') {
      this.mentionList = mentions;
    }

    if (action === 'hide') {
      this.mentionList = [];
    }
  };

  private insertMention = (event) => {
    const { id, name, avatar, email, position } = event.detail;

    this.autoCompleteHandler.insertMention(position.start, position.end, {
      id,
      name,
      avatar,
      email,
    });
    this.mentionList = [];
    this.updateHeight();
  };

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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }

    if (e.key !== 'Enter' || e.shiftKey || this.mentionList?.length > 0) return;

    const input = this.commentInput;
    const text = input.value.trim();

    if (!text) return;
    const sendBtn = this.getSendBtn();
    const mentions = this.autoCompleteHandler.getMentions(text);

    this.emitEvent(
      this.eventType,
      {
        text,
        mentions,
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
    if (this.mentionList?.length > 0) return;

    const input = this.commentInput;
    const sendBtn = this.getSendBtn();
    const text = input.value;
    const mentions = this.autoCompleteHandler.getMentions(text);

    this.emitEvent(
      this.eventType,
      {
        text,
        mentions,
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
    const textarea = this.commentInput;
    options.classList.add('active-textarea');
    rule.classList.add('s-c__input__divisor');
    textarea.classList.add('active-textarea');
  };

  private onTextareaLoseFocus = (e) => {
    if (!this.shadowRoot.contains(e.target)) return;

    const options = this.optionsContainer;
    const rule = this.horizontalRule;
    const textarea = this.commentInput;

    if (!textarea.value.length) {
      options.classList.remove('active-textarea');
      rule.classList.remove('s-c__input__divisor');
      textarea.classList.remove('active-textarea');
    }
  };

  protected render() {
    const commentInputEditableOptions = () => {
      if (!this.editable) return;

      return html`
        <button
          id="close"
          @click=${() => this.closeEditMode()}
          class="icon-button icon-button--medium icon-button--clickable s-c__input__cancel-edit-button"
          @click=${this.send}
        >
          <superviz-icon name="close" size="md"></superviz-icon>
        </button>
        <button id="confirm" class="s-c__input__send-button" disabled @click=${this.send}>
          <superviz-icon name="check" size="md"></superviz-icon>
        </button>
      `;
    };

    const commentInputOptions = () => {
      if (this.editable) return;

      return html`
        <button class="s-c__input__send-button align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="line-arrow-right" size="sm" allowSetSize=${true}></superviz-icon>
        </button>
      `;
    };

    return html`
      <div class="s-c__input">
        <textarea
          id="s-c__input__textarea"
          class="s-c__input__textarea"
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
        <div class="s-c__input__options">
          <button class="icon-button s-c__input__mention-button">
            <superviz-icon
              name="mention"
              @click=${this.addAtSymbolInCaretPosition}
              size="sm"
              allowSetSize=${true}
            ></superviz-icon>
          </button>
          <div class="comment-input-options">
            ${commentInputOptions()} ${commentInputEditableOptions()}
          </div>
        </div>
      </div>
    `;
  }
}
