import { CSSResultGroup, LitElement, PropertyDeclaration, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { WebComponentsBase } from '../../base';
import { messagesStyle } from '../css';

import { Following } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, messagesStyle];

@customElement('superviz-who-is-online-messages')
export class WhoIsOnlineMessages extends WebComponentsBaseElement {
  static styles = styles;

  declare following: Following | undefined;
  declare everyoneFollowsMe: boolean;
  declare isPrivate: boolean;
  declare participantColor: string;

  static properties = {
    following: { type: Object },
    everyoneFollowsMe: { type: Boolean },
    isPrivate: { type: Boolean },
    participantColor: { type: String },
  };

  // Regarding the classes of all "*Message()" methods:
  // The classes are used to style the messages, and they should be replicated for consistency should
  // new messages/interactions be added
  // The exception is 1 class unique to each message, so the user can target this message in particular
  private followingMessage() {
    if (!this.following) return '';

    const { name, color } = this.following;

    return html`<div
      class="wio__following-message wio__presence-control-message wio__pcm"
      style="border-color: ${color}"
    >
      <p class="wio__presence-control-message__text wio__pcm__text">
        Following: ${name}
        <span
          class="wio__presence-control-message__cancel-action-button wio__pcm__cancel-action-button"
          @click=${this.stopFollowing}
          >Stop</span
        >
      </p>
    </div>`;
  }

  private everyoneFollowsMeMessage() {
    if (!this.everyoneFollowsMe) return '';

    return html`<div
      class="wio__follow-me-message wio__presence-control-message wio__pcm"
      style="border-color: ${this.participantColor}"
    >
      <p class="wio__presence-control-message__text wio__pcm__text">
        Everyone is following you
        <span
          class="wio__presence-control-message__cancel-action-button wio__pcm__cancel-action-button"
          @click=${this.stopEveryoneFollowsMe}
          >Stop</span
        >
      </p>
    </div>`;
  }

  private privateMessage() {
    if (!this.isPrivate) return '';

    return html`<div
      class="wio__private-mode-message wio__presence-control-message wio__pcm"
      style="border-color: ${this.participantColor}"
    >
      <p class="wio__presence-control-message__text wio__pcm__text">
        You are in Private Mode
        <span
          class="wio__presence-control-message__cancel-action-button wio__pcm__cancel-action-button"
          @click=${this.cancelPrivate}
          >Cancel</span
        >
      </p>
    </div>`;
  }

  private stopFollowing() {
    this.emitEvent('stop-following', {});
  }

  private cancelPrivate() {
    this.emitEvent('cancel-private', {});
  }

  private stopEveryoneFollowsMe() {
    this.emitEvent('stop-everyone-follows-me', {});
  }

  protected render() {
    return html` <div class="wio__controls-messages">
      ${this.followingMessage()} ${this.everyoneFollowsMeMessage()} ${this.privateMessage()}
    </div>`;
  }
}
