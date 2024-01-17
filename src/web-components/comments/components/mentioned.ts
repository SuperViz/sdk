import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ParticipantByGroupApi } from '../../../common/types/participant.types';
import { WebComponentsBase } from '../../base';
import { mentionedStyle } from '../css';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, mentionedStyle];

@customElement('superviz-comments-mentioned')
export class CommentsMentioned extends WebComponentsBaseElement {
  static styles = styles;

  constructor() {
    super();
    this.participant = {} as unknown as ParticipantByGroupApi;
  }

  declare participant: ParticipantByGroupApi;

  static properties = {
    participant: { type: Object },
  };

  protected render() {
    return html`<div class="mention">@<div class="mentioned" userId=${this.participant.id}>${this.participant.name}</div></div>`;
  }
}
