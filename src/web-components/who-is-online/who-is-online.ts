import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

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

  static properties = {
    position: { type: String },
    participants: { type: Object },
  };

  constructor() {
    super();
    this.position = 'top: 20px; right: 20px;';

    // should match presence-mouse textColorValues
    this.textColorValues = [2, 4, 5, 7, 8, 16];
  }

  public updateParticipants(data: Participant[]) {
    this.participants = data;
  }

  private renderExcessParticipants() {
    const excess = this.participants.length - 4;
    if (excess <= 0) return html``;

    const participants = this.participants.slice(4).map(({ name, color }) => {
      return {
        name,
        color,
      };
    });

    const dropdown = html`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom-center"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(participants)}
      >
        <div class="superviz-who-is-online__participant excess_participants" slot="dropdown">
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${excess}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `;

    return dropdown;
  }

  private dropdownOptionsHandler = ({ detail }: CustomEvent) => {};

  private renderParticipants() {
    if (!this.participants) return html``;

    const options = Object.values(WhoIsOnlineDropdownOptions).map((label) => {
      return { label };
    });

    const icons = ['place', 'send'];
    return html`${this.participants.slice(0, 4).map((participant) => {
      const letterColor = this.textColorValues.includes(participant.slotIndex)
        ? '#FFFFFF'
        : '#000000';

      return html`
        <superviz-dropdown
          options=${JSON.stringify(options)}
          label="label"
          returnTo="label"
          position="bottom-center"
          @selected=${this.dropdownOptionsHandler}
          icons="${JSON.stringify(icons)}"
          name="${participant.name}"
        >
          <div
            slot="dropdown"
            class="superviz-who-is-online__participant"
            style="border-color: ${participant.color}"
          >
            <div
              class="superviz-who-is-online__avatar"
              style="background-color: ${participant.color}; color: ${letterColor}"
            >
              ${participant.name?.at(0)}
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
    return html` <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div class="superviz-who-is-online">${this.renderParticipants()}</div>`;
  }
}
