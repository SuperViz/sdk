import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Participant } from '../../components/who-is-online/types';
import { WebComponentsBase } from '../base';

import { Following, WhoIsOnlineDropdownOptions } from './components/types';
import { whoIsOnlineStyle } from './css/index';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, whoIsOnlineStyle];

@customElement('superviz-who-is-online')
export class WhoIsOnline extends WebComponentsBaseElement {
  static styles = styles;
  declare position: string;
  declare participants: Participant[];
  private textColorValues: number[];
  declare open: boolean;
  declare disableDropdown: boolean;
  declare following: Following | undefined;

  static properties = {
    position: { type: String },
    participants: { type: Object },
    open: { type: Boolean },
    disableDropdown: { type: Boolean },
    following: { type: Object },
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

    if (index === 0) return 'bottom-left';

    const thereAreExtraParticipants = this.participants.length > 4;
    const isTheLastParticipantOfList = index + 1 === this.participants.length;

    if (thereAreExtraParticipants || !isTheLastParticipantOfList) {
      return 'bottom-center';
    }

    return 'bottom-right';
  }

  private renderExcessParticipants() {
    const excess = this.participants.length - 4;
    if (excess <= 0) return html``;

    const participants = this.participants
      .slice(4)
      .map(({ name, color, id, slotIndex, isLocal, joinedPresence }) => ({
        name,
        color,
        id,
        slotIndex,
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
        position="bottom-right"
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

    if (label === WhoIsOnlineDropdownOptions.GOTO) {
      this.emitEvent('go-to-mouse-pointer', { id });
    }

    if ([WhoIsOnlineDropdownOptions.FOLLOW, WhoIsOnlineDropdownOptions.UNFOLLOW].includes(label)) {
      if (this.following?.id === id) {
        this.stopFollowing();
        return;
      }

      this.emitEvent('follow-mouse-pointer', { id });
      this.following = { name, id, color, slotIndex };
      this.swapParticipants();
    }
  };

  private swapParticipants() {
    const participants = [...this.participants];
    const a = participants.findIndex(({ id }) => id === this.following?.id);
    const b = 0;

    if (a === b) return;

    const temp = participants[a];
    participants[a] = participants[b];
    participants[b] = temp;
    this.participants = participants;
  }

  private stopFollowing() {
    this.following = undefined;
    this.emitEvent('stop-follow-mouse-pointer', {});
  }

  private followingMessage() {
    console.error(this.following);
    if (!this.following) return '';
    const { slotIndex, name, color } = this.following;

    const letterColor = this.textColorValues.includes(slotIndex) ? '#FFFFFF' : '#26242A';

    return html`<div class="following" style="background-color: ${color}; color: ${letterColor}">
      Following: ${name} <span @click=${this.stopFollowing}>Stop</span>
    </div>`;
  }

  private renderParticipants() {
    if (!this.participants) return html``;

    const icons = ['place', 'send'];

    return html`<div class="superviz-who-is-online">
      ${this.participants
        .slice(0, 4)
        .map(({ joinedPresence, isLocal, id, slotIndex, name, color }, index) => {
          const letterColor = this.textColorValues.includes(slotIndex) ? '#FFFFFF' : '#26242A';
          const participantIsFollowed = this.following?.id === id;
          const options = Object.values(WhoIsOnlineDropdownOptions)
            .map((label, index) => ({
              label: participantIsFollowed && index ? 'UNFOLLOW' : label,
              id,
              name,
              color,
              slotIndex,
            }))
            .slice(0, 2);

          const disableDropdown = !joinedPresence || isLocal || this.disableDropdown;
          const classList = {
            'superviz-who-is-online__participant': true,
            'disable-dropdown': disableDropdown,
            followed: participantIsFollowed,
          };

          icons[1] = participantIsFollowed ? 'send-off' : 'send';

          const position = this.dropdownPosition(index);
          return html`
            <superviz-dropdown
              options=${JSON.stringify(options)}
              label="label"
              position="${position}"
              @selected=${this.dropdownOptionsHandler}
              icons="${JSON.stringify(icons)}"
              name="${name}"
              ?disabled=${disableDropdown}
            >
              <div slot="dropdown" class=${classMap(classList)} style="--border-color: ${color}">
                <div
                  class="superviz-who-is-online__avatar"
                  style="background-color: ${color}; color: ${letterColor}"
                >
                  ${name?.at(0).toUpperCase()}
                </div>
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
      const element = this.shadowRoot.querySelector('.superviz-who-is-online');
      if (!element) return;

      element.setAttribute('style', this.position);
    });
  }

  protected render() {
    return html`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()}
    </div> `;
  }
}
