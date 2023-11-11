/* eslint-disable indent */
// eslint was pointing indentation errors for a few lines
// even though eslint was the one to format the code

import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Participant } from '../../../components/who-is-online/types';
import { WebComponentsBase } from '../../base';
import { dropdownStyle } from '../css';

import { WhoIsOnlineDropdownOptions } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-who-is-online-dropdown')
export class WhoIsOnlineDropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare align: 'left' | 'right';
  declare position: 'bottom-left' | 'bottom-center' | 'bottom-right';
  declare participants: Participant[];
  private textColorValues: number[];
  declare selected: string;

  static properties = {
    open: { type: Boolean },
    align: { type: String },
    position: { type: String },
    participants: { type: Array },
    selected: { type: String },
  };

  constructor() {
    super();
    // should match presence-mouse textColorValues
    this.textColorValues = [2, 4, 5, 7, 8, 16];
    this.selected = '';
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('open')) {
      if (this.open) {
        document.addEventListener('click', this.onClickOutDropdown);
      }

      if (!this.open) {
        document.removeEventListener('click', this.onClickOutDropdown);
        this.close();
      }
    }
  }

  private onClickOutDropdown = (event: Event) => {
    event.stopPropagation();

    if (!this.open) return;

    const elements = event.composedPath();
    const dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
    const dropdownList = this.shadowRoot.querySelector('.dropdown-list');
    const slotDropdown = this.shadowRoot.querySelector('slot[name="dropdown"]') as HTMLSlotElement;
    const dropdownCta = slotDropdown.assignedElements()[0];
    const hasDropdownContent = elements.includes(dropdownContent);
    const hasDropdownList = elements.includes(dropdownList);
    const hasDropdownCta = elements.includes(dropdownCta);

    if (!(hasDropdownContent || hasDropdownList || hasDropdownCta)) {
      this.open = false;
      this.selected = '';
      this.emitEvent('clickout', {
        detail: {
          open: this.open,
        },
        bubbles: false,
        composed: false,
      });
    }
  };

  private close = () => {
    this.emitEvent('close', {
      bubbles: false,
      composed: false,
    });
  };

  public dropdownOptionsHandler = ({ detail }: CustomEvent) => {};

  private selectParticipant = (participantId: string) => {
    return () => {
      this.selected = participantId;
    };
  };

  private renderParticipants() {
    if (!this.participants) return;

    const options = Object.values(WhoIsOnlineDropdownOptions).map((label) => {
      return { label };
    });

    const icons = ['place', 'send'];

    return this.participants.map((participant) => {
      const letterColor = this.textColorValues.includes(participant.slotIndex)
        ? '#FFFFFF'
        : '#000000';

      const contentClasses = {
        'who-is-online-dropdown__content': true,
        'who-is-online-dropdown__content--selected': this.selected === participant.id,
      };

      return html`
        <superviz-dropdown
        options=${JSON.stringify(options)}
        label="label"
        returnTo="label"
        position="bottom-center"
        @selected=${this.dropdownOptionsHandler}
        icons="${JSON.stringify(icons)}"
        >
        <div class=${classMap(contentClasses)} @click=${this.selectParticipant(
        participant.id,
      )} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${participant.color}">
              <div class="who-is-online-dropdown__avatar" style="background-color: ${
                participant.color
              }; color: ${letterColor}">
                ${participant.name?.at(0)}
              </div>
            </div>
            <span class="user-name">${participant.name}</span>
            <superviz-icon class="icon" name="right" color="var(--sv-gray-600)"></superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `;
    });
  }

  protected render() {
    const menuClasses = {
      menu: true,
      'menu--bottom-left': this.position === 'bottom-left',
      'menu--bottom-center': this.position === 'bottom-center',
      'menu--bottom-right': this.position === 'bottom-right',
      'menu-open': this.open,
      'menu-left': this.align === 'left',
      'menu-right': this.align === 'right',
    };

    const toggle = () => {
      this.open = !this.open;
      this.selected = '';
    };

    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${() => toggle()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${classMap(menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `;
  }
}
