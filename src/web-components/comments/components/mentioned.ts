import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { mentionedStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, mentionedStyle];

@customElement('superviz-comments-mentioned')
export class CommentsMentioned extends WebComponentsBaseElement {
  static styles = styles;

  declare participant: { userId: string, name: string, avatar: string }

  static properties = {
    participant: { type: Object },
  };

  protected render() {
    return html`
      <div class="mentioned" userId=${this.participant.userId}>
        ${this.participant.name}
      </div>
    `;
  }
}
