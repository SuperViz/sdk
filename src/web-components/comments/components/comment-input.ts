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
  declare mentionList: []
  declare mentions: []
  declare participantsList: Participant[];

  private pinCoordinates: AnnotationPositionInfo | null = null;

  private autoCompleteHandler: AutoCompleteHandler = new AutoCompleteHandler();

  constructor() {
    super();
    this.btnActive = false;
    this.text = '';
    this.mentionList = []
    this.mentions = []
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

  private getCommentInput = () => {
    return this.shadowRoot!.getElementById('comment-input--textarea') as HTMLTextAreaElement;
  };

  private getCommentInputContainer = () => {
    return this.shadowRoot!.getElementById('comment-input--container') as HTMLDivElement;
  };

  private getSendBtn = () => {
    return this.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;
  };

  private commentInputFocus = ({ detail }: CustomEvent) => {
    this.pinCoordinates = detail;
    this.getCommentInput().focus();
  };

  connectedCallback(): void {
    super.connectedCallback();
    if (!['create-annotation', 'create-comment'].includes(this.eventType)) return;

    window.document.body.addEventListener('comment-input-focus', this.commentInputFocus);
    this.addEventListener('keyup', this.sendEnter);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.eventType !== 'create-annotation') return;

    window.document.body.removeEventListener('comment-input-focus', this.commentInputFocus);
  }

  firstUpdated() {
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
      const commentsInput = this.getCommentInput();
      commentsInput.value = this.text;
      this.updateHeight();
    }

    if (changedProperties.has('btnActive')) {
      const btnSend = this.getSendBtn();
      btnSend.disabled = !this.btnActive;
    }
  }

  private handleInput = (e: InputEvent) => {
    this.autoCompleteHandler.setInput(e);
    const caretIndex = this.autoCompleteHandler.getSelectionStart();
    const keyData = this.autoCompleteHandler.getLastKeyBeforeCaret(caretIndex);
    const keyIndex = keyData?.keyIndex ?? -1;
    this.autoCompleteHandler.updateMentionPositions()
    const searchText = this.autoCompleteHandler.searchMention(caretIndex, keyIndex);

    const position = this.autoCompleteHandler.getSelectionPosition()

    if (searchText === null) {
      this.mentionList = []
      return;
    }

    const { action, mentions } = mentionHandler.matchParticipant(searchText, position, this.participantsList)

    if (action === 'show') {
      this.mentionList = mentions
    }

    if (action === 'hide') {
      this.mentionList = []
    }
  }

  private insertMention = (event) => {
    const { id, name, avatar, position } = event.detail;

    this.autoCompleteHandler.insertMention(position.start, position.end, {
      id,
      name,
      avatar
    });

    this.updateHeight();
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

  private sendEnter = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || e.shiftKey) return;

    const input = this.getCommentInput();
    const text = input.value.trim();

    if (!text) return;
    const sendBtn = this.getSendBtn();

    this.emitEvent(
      this.eventType,
      {
        text,
        position: this.pinCoordinates,
      },
      {
        composed: false,
        bubbles: false,
      },
    );

    this.pinCoordinates = null;
    input.value = '';
    sendBtn.disabled = true;
    this.updateHeight();
  };

  private send(e: Event) {
    e.preventDefault();

    const input = this.getCommentInput();
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

    this.pinCoordinates = null;
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
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `;
    };

    return html`
      <div class="comment-input">
        <div id="comment-input--container">
          <textarea
            id="comment-input--textarea"
            placeholder=${this.placeholder ?? 'Add comment...'}
            @input=${this.updateHeight}
          ></textarea>
          <superviz-comments-mention-list
            .participants=${this.mentionList}
            @participant-selected=${this.insertMention}
          ></superviz-comments-mention-list>
        </div>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
          <div>
            <button class="icon-button mention">
              <superviz-icon name="mention" size="sm"></superviz-icon>
            </button>
          </div>
          <div class="comment-input-options">
            ${commentInputOptions()} ${commentInputEditableOptions()}
          </div>
        </div>
      </div>
    `;
  }
}
