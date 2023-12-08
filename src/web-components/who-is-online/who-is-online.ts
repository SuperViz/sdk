import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { RealtimeEvent } from '../../common/types/events.types';
import { Participant } from '../../components/who-is-online/types';
import { WebComponentsBase } from '../base';

import type { LocalParticipantData } from './components/types';
import { Following, WIODropdownOptions } from './components/types';
import { whoIsOnlineStyle } from './css/index';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, whoIsOnlineStyle];

@customElement('superviz-who-is-online')
export class WhoIsOnline extends WebComponentsBaseElement {
  static styles = styles;
  declare position: string;
  declare participants: Participant[];
  declare open: boolean;
  declare disableDropdown: boolean;
  declare following: Following | undefined;
  declare LocalParticipantData: LocalParticipantData;
  declare isPrivate: boolean;
  private textColorValues: number[];

  static properties = {
    position: { type: String },
    participants: { type: Object },
    open: { type: Boolean },
    disableDropdown: { type: Boolean },
    following: { type: Object },
    localParticipantColor: { type: String },
    isPrivate: { type: Boolean },
  };

  constructor() {
    super();
    this.position = 'top: 20px; right: 40px;';

    this.open = false;

    // should match presence-mouse textColorValues property
    this.textColorValues = [2, 4, 5, 7, 8, 16];
  }

  public updateParticipants(data: Participant[]) {
    this.participants = data;
  }

  private toggleOpen() {
    this.open = !this.open;
  }

  private onClickOutDropdown = ({ detail }: CustomEvent) => {
    this.open = detail.open;
  };

  private dropdownPosition(index: number) {
    if (this.participants.length === 1) return 'bottom-center';

    if (index === 0) return 'bottom-right';

    const thereAreExtraParticipants = this.participants.length > 4;
    const isTheLastParticipantOfList = index + 1 === this.participants.length;

    if (thereAreExtraParticipants || !isTheLastParticipantOfList) {
      return 'bottom-center';
    }

    return 'bottom-left';
  }

  private renderExcessParticipants() {
    const excess = this.participants.length - 4;
    if (excess <= 0) return html``;

    const participants = this.participants
      .slice(4)
      .map(({ name, color, id, slotIndex, isLocal, avatar, joinedPresence }) => ({
        name,
        color,
        id,
        slotIndex,
        avatar,
        isLocal,
        joinedPresence,
      }));

    const classes = {
      'superviz-who-is-online__participant': true,
      excess_participants: true,
      'excess_participants--open': this.open,
    };

    const dropdown = html`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(participants)}
        @clickout=${this.onClickOutDropdown}
        ?disableDropdown=${this.disableDropdown}
        following=${JSON.stringify(this.following)}
      >
        <div class=${classMap(classes)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${excess}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `;

    return dropdown;
  }

  private dropdownOptionsHandler = ({ detail }: CustomEvent) => {
    const { id, label, name, color, slotIndex } = detail;

    if (label === WIODropdownOptions['GOTO']) {
      this.emitEvent(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, { id });
    }

    if ([WIODropdownOptions.FOLLOW, WIODropdownOptions.UNFOLLOW].includes(label)) {
      if (this.following?.id === id) {
        this.stopFollowing();
        return;
      }

      this.following = { name, id, color, slotIndex };
      this.swapParticipants();
      this.emitEvent(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, { id });
    }

    if ([WIODropdownOptions.PRIVATE, WIODropdownOptions.LEAVE_PRIVATE].includes(label)) {
      this.isPrivate = label === WIODropdownOptions.PRIVATE;
      console.error('hahaha');
      this.emitEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, { id, private: this.isPrivate });
    }
  };

  private getAvatar(participant: Participant) {
    if (participant.avatar?.imageUrl) {
      return html` <img
        class="superviz-who-is-online__avatar"
        src=${participant.avatar.imageUrl}
      />`;
    }

    const letterColor = this.textColorValues.includes(participant.slotIndex)
      ? '#FFFFFF'
      : '#26242A';

    return html`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${participant.color}; color: ${letterColor}"
    >
      ${participant.name?.at(0).toUpperCase()}
    </div>`;
  }

  private getOptions(participant: Participant, isBeingFollowed: boolean, isLocal: boolean) {
    const { id, slotIndex, name, color } = participant;
    const baseOption = { id, name, color, slotIndex };
    const { isPrivate } = this;

    const labels = isLocal
      ? [isPrivate ? 'LEAVE_PRIVATE' : 'PRIVATE']
      : ['GOTO', isBeingFollowed ? 'UNFOLLOW' : 'FOLLOW'];

    const options = labels.map((label) => ({
      ...baseOption,
      label: WIODropdownOptions[label],
    }));

    return options;
  }

  private getIcons(isBeingFollowed: boolean) {
    return isBeingFollowed ? ['place', 'send-off'] : ['place', 'send'];
  }

  private swapParticipants() {
    const a = this.participants?.findIndex(({ id }) => id === this.following?.id);
    const b = 0;

    if (a < 4 || !a) return;

    const participants = [...this.participants];
    const temp = participants[a];
    participants[a] = participants[b];
    participants[b] = temp;
    this.participants = participants;
  }

  private stopFollowing() {
    this.following = undefined;
    this.emitEvent(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, { id: undefined });
  }

  private cancelPrivate() {
    this.isPrivate = undefined;
    this.emitEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, { id: this.LocalParticipantData.id });
  }

  private followingMessage() {
    if (!this.following) return '';

    const { slotIndex, name, color } = this.following;

    const letterColor = this.textColorValues.includes(slotIndex) ? '#FFFFFF' : '#26242A';

    return html`<div class="following" style="background-color: ${color}; color: ${letterColor}">
      Following: ${name} <span @click=${this.stopFollowing}>Stop</span>
    </div>`;
  }

  private privateMessage() {
    if (!this.isPrivate) return '';

    const { color, slotIndex } = this.LocalParticipantData;

    const letterColor = this.textColorValues.includes(slotIndex) ? '#FFFFFF' : '#26242A';

    return html`<div class="following" style="background-color: ${color}; color: ${letterColor}">
      You are in Private Mode <span @click=${this.cancelPrivate}>Cancel</span>
    </div>`;
  }

  private renderParticipants() {
    if (!this.participants) return html``;

    return html` <div class="superviz-who-is-online">
      ${this.participants.slice(0, 4).map((participant, index) => {
        const { joinedPresence, isLocal, id, name, color } = participant;

        const participantIsFollowed = this.following?.id === id;
        const options = this.getOptions(participant, participantIsFollowed, isLocal);
        const icons = this.getIcons(participantIsFollowed);
        const position = this.dropdownPosition(index);
        const disableDropdown = !joinedPresence || this.disableDropdown;

        const classList = {
          'superviz-who-is-online__participant': true,
          'disable-dropdown': disableDropdown,
          followed: participantIsFollowed,
          private: isLocal && this.isPrivate,
        };

        const append = isLocal ? ' (you)' : '';
        const participantName = name + append;

        return html`
          <superviz-dropdown
            options=${JSON.stringify(options)}
            label="label"
            position="${position}"
            @selected=${this.dropdownOptionsHandler}
            icons="${JSON.stringify(icons)}"
            name="${participantName}"
            ?disabled=${disableDropdown}
          >
            <div slot="dropdown" class=${classMap(classList)} style="--border-color: ${color}">
              ${this.getAvatar(participant)}
            </div>
          </superviz-dropdown>
        `;
      })}
      ${this.renderExcessParticipants()}
    </div>`;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    this.updateComplete.then(() => {
      const element = this.shadowRoot.querySelector('.wio-content');
      if (!element) return;

      const side = this.position.includes('left') ? 'flex-start' : 'flex-end';
      const style = `${this.position} align-items: ${side};`;
      element.setAttribute('style', style);
    });
  }

  protected render() {
    return html`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()} ${this.privateMessage()}
    </div> `;
  }
}
