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
  
  protected render() {
    const mentionItem = (participant) => html`
      <div class="mention-item">
          <img class="avatar" src="${participant.avatar}" alt="${participant.name}" />
        <div class="avatar-type">${participant.name}</div>
      </div>
    `

    return html`
      <div id="mention-list">
        ${repeat(
        this.participants, 
        (participant: any) => participant.participantId,
        (participant) => html`
          ${mentionItem(participant)}
        `)}
      </div>
    `;
  }
}
