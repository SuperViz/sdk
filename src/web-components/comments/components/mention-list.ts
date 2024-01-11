import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { WebComponentsBase } from '../../base';
import { mentionListStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, mentionListStyle];

@customElement('superviz-comments-mention-list')
export class CommentsMentionList extends WebComponentsBaseElement {
  constructor() {
    super();
    this.participants = [];
  }

  static styles = styles;
  
  declare participants: []

  static properties = {
    participants: { type: Object },
  };

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('participants') && this.participants.length > 0) {
      this.showMentionList();
      return
    }

    this.hideMentionList();
  }

  showMentionList = () => {
    const mentionList = this.shadowRoot?.getElementById('mention-list');
    mentionList?.style.setProperty('display', 'block'); 
    mentionList?.style.setProperty('margin-top', '-27px');
  }

  hideMentionList = () => {
    const mentionList = this.shadowRoot?.getElementById('mention-list');
    mentionList?.style.setProperty('display', 'none'); 
  }

  private selectParticipant = (participant) => {
    this.emitEvent('participant-selected', participant, {
      bubbles: false,
      composed: false,
    })

    this.hideMentionList()
  }

  protected render() {
    const mentionItem = (participant) => html`
      <div class="mention-item" @click=${() => this.selectParticipant(participant)}>
          <img class="avatar" src="${participant.avatar}" alt="${participant.userName}" />
        <div class="avatar-type">${participant.userName}</div>
      </div>
    `

    return html`
      <div id="mention-list">
        ${repeat(
        this.participants, 
        (participant: any) => participant.id,
        (participant) => html`
          ${mentionItem(participant)}
        `)}
      </div>
    `;
  }
}
