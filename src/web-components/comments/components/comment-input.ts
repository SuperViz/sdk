import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { AnnotationPositionInfo } from '../../../components/comments/types';
import { WebComponentsBase } from '../../base';
import { commentInputStyle } from '../css';
import mentionHandler from '../utils/mention-handler';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, commentInputStyle];
type User = {
  name: string;
  userId: string;
  avatar: string;
};
@customElement('superviz-comments-comment-input')
export class CommentsCommentInput extends WebComponentsBaseElement {
  declare eventType: string;
  declare text: string;
  declare btnActive: boolean;
  declare editable: boolean;
  declare commentsInput: HTMLDivElement;
  declare placeholder: string;
  declare users: User[];


  private pinCoordinates: AnnotationPositionInfo | null = null;

  constructor() {
    super();
    this.btnActive = false;
    this.text = '';
    this.mentionList = []

    // mockusers change to participants groups
    this.users = [
      { name: 'Vinicius Afonso', userId: 'participantIdVinicius', avatar: 'https://production.cdn.superviz.com/static/default-avatars/1.png' },
      { name: 'Vitor Vargas', userId: 'participantIdVitor', avatar: 'https://production.cdn.superviz.com/static/default-avatars/2.png' },
      { name: 'Vitor Norton', userId: 'participantIdNorton', avatar: 'https://production.cdn.superviz.com/static/default-avatars/3.png' },
      { name: 'Carlos Peixoto', userId: 'participantIdCarlos', avatar: 'https://production.cdn.superviz.com/static/default-avatars/4.png' },
      { name: 'Gabi Alcoar', userId: 'participantIdGabi', avatar: 'https://production.cdn.superviz.com/static/default-avatars/5.png' },
      { name: 'Ian Silva', userId: 'participantIdIanSilva', avatar: 'https://production.cdn.superviz.com/static/default-avatars/6.png' },
    ];
  }

  static styles = styles;

  declare mentionList: []

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
    editable: { type: Boolean },
    placeholder: { type: String },
    mentionList: { type: Object },
  };

  private getAddMentionButton = () => {
    return this.shadowRoot!.getElementById('add-mention-button') as HTMLDivElement;
  };

  private getCommentInput = () => {
    return this.shadowRoot!.getElementById('comment-input--textarea') as HTMLDivElement;
  };

  private getCommentInputContainer = () => {
    return this.shadowRoot!.getElementById('comment-input--container') as HTMLDivElement;
  };

  private getSendBtn = () => {
    return this.shadowRoot!.querySelector('.comment-input--send-btn') as HTMLButtonElement;
  };

  private commentInputFocus = ({ detail }: CustomEvent) => {
    const commentTextarea = this.getCommentInput();

    if (commentTextarea && commentTextarea.innerText.length === 0) {
      commentTextarea.innerHTML = `<span class='placeholder'>Add comment...</span>`
    }
    this.pinCoordinates = detail;
    this.getCommentInput().focus();
  };

  firstUpdated() {
    const commentTextarea = this.getCommentInput();

    if (commentTextarea) {
      commentTextarea.addEventListener('input', this.handleInput);
      commentTextarea.addEventListener('click', this.clickInput);
    }
  }

  /// NEW MENTION V1
  private buttonAddMention = () => {
    // const newElement = document.createElement('div');
    // newElement.className = 'mentioned';
    // newElement.innerHTML = `@`;
    // const selection = this.shadowRoot.getSelection();

    // const range = selection.getRangeAt(0);
    // range.deleteContents();

    // range.insertNode(newElement);
    // this.handleInput(e, true)
  }

  private handleInput = (e) => {
    const commentTextarea = this.getCommentInput();

    const placeholder = commentTextarea.querySelector('.placeholder');
    if (placeholder) {
      commentTextarea.removeChild(placeholder);
      commentTextarea.innerText = `${e?.data || ''}`;
      window.getSelection().setPosition(commentTextarea, e?.data?.length)
    }
    commentTextarea.style.height = '45px';

    this.updateHeight();

    mentionHandler.input.removeMentionOnBackspace(e, window.getSelection())
    mentionHandler.input.removeEmptyMentions(this.getCommentInput())
    const { action, mentions } = mentionHandler.input.matchParticipant(this.getCommentInput(), e, this.users)

    if (action === 'show') {
      this.mentionList = mentions
    }

    if (action === 'hide') {
      this.mentionList = []
    }
  };

  private clickInput = (e) => {
    const commentTextarea = this.getCommentInput();

    const placeholder = commentTextarea.querySelector('.placeholder');
    if (placeholder) {
      commentTextarea.removeChild(placeholder);
      commentTextarea.innerText = '';
    }
  };

  private updateMentionInput = (value) => {
    const commentDiv = this.getCommentInput();
    commentDiv.innerHTML = value;

    const range = document.createRange();
    range.selectNodeContents(commentDiv);
    range.collapse(false);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    commentDiv.focus();
  }

  private insertMention = ({ detail }) => {
    const { index, userId, name, mentionName } = detail
    const commentTextarea = this.getCommentInput();
    const inputValue = commentTextarea.innerHTML;
    console.log(mentionName)
    const firstPart = inputValue.slice(0, index)
    const secondPart = inputValue.slice(index, inputValue.length - mentionName)

    const newElement = document.createElement('superviz-comments-mentioned');
    newElement.setAttribute('participant', JSON.stringify({ userId, name }));
    
    if (commentTextarea.innerHTML.length === 0) {
      commentTextarea.innerHTML += '&nbsp;'
    }

    commentTextarea.innerHTML = firstPart

    commentTextarea.innerHTML += newElement.outerHTML

    commentTextarea.innerHTML += secondPart
    
    this.updateMentionInput(this.getCommentInput().innerHTML)
    this.updateHeight();
  }

  private cursorPosition = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const { parentElement } = range.commonAncestorContainer;
    if (parentElement.parentElement.className === 'mentioned') {
      parentElement.remove();
    }
  }

  /// NEW MENTION V1

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

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('text') && this.text.length > 0) {
      const commentsInput = this.getCommentInput();
      commentsInput.innerText = this.text;
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
    btnSend.disabled = !(commentsInput.innerText.length > 0);
    if (btnSend.disabled) {
      commentsInput.innerHTML = `<span class='placeholder'>Add comment...</span>`
      commentsInputContainer.style.height = '41px'
      commentsInput.style.height = '45px'
    }
  }

  private sendEnter = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    const input = this.getCommentInput();
    const text = input.innerText.trim();

    const commentTextarea = this.getCommentInput();
    const inputValue = commentTextarea.innerHTML;

    let allText = inputValue;
    let allText2 = inputValue;

    this.users.forEach(user => {
      const regex = new RegExp(`@${user.name}`, 'gi');
      allText = allText2.replace(regex, `<div class="mentioned"><strong>@${user.name}</strong></div>`);
      allText2 = allText2.replace(regex, `{{${user.userId}}}`);
    });

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
    input.innerText = '';
    sendBtn.disabled = true;
    if (commentTextarea && commentTextarea.innerText.length === 0) {
      commentTextarea.innerHTML = `<span class='placeholder'>Add comment...</span>`
      this.updateHeight()
    }
  };

  private send(e: Event) {
    e.preventDefault();

    const input = this.getCommentInput();
    const sendBtn = this.getSendBtn();
    const inputValue = input.innerHTML;

    let allText = inputValue;

    this.users.forEach(user => {
      const regex = new RegExp(`<div class="mentioned"><strong>@${user.name}</strong></div>`, 'gi');
      allText = allText.replace(regex, `{{${user.userId}}}`);
    });
    const text = allText;

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
    input.innerText = '';
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
          <div
            contenteditable="true" 
            id="comment-input--textarea"
            placeholder=${this.placeholder ?? 'Add comment...'}
            @input=${this.updateHeight}
          ></div>
          <superviz-comments-mention-list
            .participants=${this.mentionList}
            @participant-selected=${this.insertMention}
          ></superviz-comments-mention-list>
        </div>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
          <div class="comment-actions">
            <button id="add-mention-button" @click=${this.buttonAddMention} class="icon-button mention">
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
