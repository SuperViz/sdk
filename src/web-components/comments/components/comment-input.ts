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
  participantId: string;
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

    // mockusers change to participants groups
    this.users = [
      { name: 'Vinicius Afonso', participantId: 'participantIdVinicius', avatar: 'https://production.cdn.superviz.com/static/default-avatars/1.png' },
      { name: 'Vitor Vargas', participantId: 'participantIdVitor', avatar: 'https://production.cdn.superviz.com/static/default-avatars/2.png' },
      { name: 'Vitor Norton', participantId: 'participantIdNorton', avatar: 'https://production.cdn.superviz.com/static/default-avatars/3.png' },
      { name: 'Carlos Peixoto', participantId: 'participantIdCarlos', avatar: 'https://production.cdn.superviz.com/static/default-avatars/4.png' },
      { name: 'Gabi Alcoar', participantId: 'participantIdGabi', avatar: 'https://production.cdn.superviz.com/static/default-avatars/5.png' },
      { name: 'Ian Silva', participantId: 'participantIdIanSilva', avatar: 'https://production.cdn.superviz.com/static/default-avatars/6.png' },
    ];
  }

  static styles = styles;

  static properties = {
    eventType: { type: String },
    text: { type: String },
    btnActive: { type: Boolean },
    editable: { type: Boolean },
    placeholder: { type: String },
  };

  private getMentionList = () => {
    return this.shadowRoot!.getElementById('mention-list') as HTMLDivElement;
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

  private handleInput = (e) => {
    const commentTextarea = this.getCommentInput();

    const placeholder = commentTextarea.querySelector('.placeholder');
    if (placeholder) {
      commentTextarea.removeChild(placeholder);
      commentTextarea.innerText = `${e.data || ''}`;
      window.getSelection().setPosition(commentTextarea, e.data.length)
    }
    commentTextarea.style.height = '45px';

    this.updateHeight();

    mentionHandler.input.removeMentionOnBackspace(e, window.getSelection())
    mentionHandler.input.removeEmptyMentions(this.getCommentInput())
    mentionHandler.input.matchParticipant(this.getCommentInput(), e, this.users)

    const inputValue = commentTextarea.innerHTML;
    const mentionIndex = inputValue.lastIndexOf('@');

    const selection = window.getSelection();
    let range;
    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
    }

    if (mentionIndex !== -1) {
      const mentionPrefix = this.getMentionPrefix(mentionIndex, inputValue, e);
      const matchedUsers = this.findMatchedUsers(mentionPrefix);

      if (matchedUsers.length > 0) {
        this.showMentionList(matchedUsers, mentionIndex, range);
        return
      }
    }

    this.hideMentionList();
  };

  private clickInput = (e) => {
    const commentTextarea = this.getCommentInput();

    const placeholder = commentTextarea.querySelector('.placeholder');
    if (placeholder) {
      commentTextarea.removeChild(placeholder);
      commentTextarea.innerText = '';
    }
  };

  private getMentionPrefix = (mentionIndex, inputValue, e) => {
    let mentionPrefix = '';
    const text = e.target.innerText.trim();
    const lastCaracter = text.slice(-1);
    const lastItemFind = lastCaracter === '@';

    if (lastItemFind || e.data === "@") {
      mentionPrefix = "";
    } else {
      mentionPrefix = inputValue.slice(mentionIndex + 1);
    }

    return mentionPrefix;
  }

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

  private showMentionList = (users, mentionIndex, range) => {
    const mentionList = this.getMentionList();
    mentionList.innerHTML = '';

    users.forEach(user => {
      const mentionItem = document.createElement('div');
      mentionItem.classList.add('mention-item');
      mentionItem.innerHTML = `<img src="${user.avatar}" alt="${user.name}" class="avatar">${user.name}`;
      mentionItem.addEventListener('click', () => {
        this.insertMention(user.name, mentionIndex, range);
      });

      mentionList.appendChild(mentionItem);
    });

    mentionList.style.display = 'block';
  }

  private hideMentionList = () => {
    const mentionList = this.getMentionList();
    mentionList.innerHTML = '';
    mentionList.style.display = 'none';
  }

  private insertMention = (participantId, mentionIndex, range) => {
    const commentTextarea = this.getCommentInput();
    const ranges = range;
    const inputValue = commentTextarea.innerHTML;
    commentTextarea.innerHTML = inputValue.slice(0, mentionIndex)

    const mentionText = `@${participantId}`;
    const newElement = document.createElement('div');
    newElement.className = 'mentioned';
    newElement.innerHTML = `<strong>${mentionText}</strong>`;

    commentTextarea.appendChild(newElement);

    const spaceNode = document.createTextNode('\u00a0');
    newElement.parentNode.insertBefore(spaceNode, newElement.nextSibling);
    
    this.hideMentionList();
    this.updateMentionInput(this.getCommentInput().innerHTML)
    this.updateHeight();
  }

  private findMatchedUsers = (prefix) => {
    const lowercasePrefix = prefix.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().startsWith(lowercasePrefix));
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
      allText2 = allText2.replace(regex, `{{${user.participantId}}}`);
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
      allText = allText.replace(regex, `{{${user.participantId}}}`);
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
          <div id="mention-list"></div>
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
