import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Participant } from '../../components/who-is-online/types';
import { WebComponentsBase } from '../base';

import { WhoIsOnlineDropdownOptions } from './components/types';
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

  static properties = {
    position: { type: String },
    participants: { type: Object },
    open: { type: Boolean },
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
      .map(({ name, color, id, slotIndex, isLocal }) => ({
        name,
        color,
        id,
        slotIndex,
        isLocal,
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
      >
        <div class=${classMap(classes)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${excess}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `;

    return dropdown;
  }

  private dropdownOptionsHandler = ({ detail }: CustomEvent) => {};

  private renderParticipants() {
    if (!this.participants) return html``;

    const icons = ['place', 'send'];

    return html`${this.participants.slice(0, 4).map((participant, index) => {
      const letterColor = this.textColorValues.includes(participant.slotIndex)
        ? '#FFFFFF'
        : '#26242A';

      const options = Object.values(WhoIsOnlineDropdownOptions)
        .map((label) => {
          return { label, id: participant.id };
        })
        .splice(0, 1);

      const classList = {
        'superviz-who-is-online__participant': true,
        local: participant.isLocal,
      };

      const position = this.dropdownPosition(index);
      return html`
        <superviz-dropdown
          options=${JSON.stringify(options)}
          label="label"
          position="${position}"
          @selected=${this.dropdownOptionsHandler}
          icons="${JSON.stringify(icons)}"
          name="${participant.name}"
          ?disabled=${participant.isLocal}
        >
          <div
            slot="dropdown"
            class=${classMap(classList)}
            style="border-color: ${participant.color}"
          >
            <div
              class="superviz-who-is-online__avatar"
              style="background-color: ${participant.color}; color: ${letterColor}"
            >
              ${participant.name?.at(0).toUpperCase()}
            </div>
          </div>
        </superviz-dropdown>
      `;
    })}
    ${this.renderExcessParticipants()} `;
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
    return html` <div class="superviz-who-is-online">${this.renderParticipants()}</div>`;
  }
}
