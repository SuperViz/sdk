import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Participant } from '../../../components/who-is-online/types';
import { WebComponentsBase } from '../../base';
import { dropdownStyle } from '../css';

import { Following, WIODropdownOptions } from './types';

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
  declare disableDropdown: boolean;
  declare following: Following;

  static properties = {
    open: { type: Boolean },
    align: { type: String },
    position: { type: String },
    participants: { type: Array },
    selected: { type: String },
    disableDropdown: { type: Boolean },
    following: { type: Object },
  };

  constructor() {
    super();
    // should match presence-mouse textColorValues
    this.textColorValues = [2, 4, 5, 7, 8, 16];
    this.selected = '';
  }

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        document.addEventListener('click', this.onClickOutDropdown);
        return;
      }

      document.removeEventListener('click', this.onClickOutDropdown);
      this.close();
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
      this.close();
    }
  };

  private close = () => {
    this.open = false;
    this.selected = '';
    this.emitEvent('clickout', {
      detail: {
        open: this.open,
      },
      bubbles: false,
      composed: false,
    });
  };

  private selectParticipant = (participantId: string) => {
    return () => {
      this.selected = participantId;
    };
  };

  private renderParticipants() {
    if (!this.participants) return;

    const icons = ['place', 'send'];

    return this.participants.map(({ id, slotIndex, joinedPresence, isLocal, color, name }) => {
      const letterColor = this.textColorValues.includes(slotIndex) ? '#FFFFFF' : '#26242A';

      const disableDropdown = !joinedPresence || isLocal || this.disableDropdown;

      const contentClasses = {
        'who-is-online-dropdown__content': true,
        'who-is-online-dropdown__content--selected': this.selected === id,
        'disable-dropdown': disableDropdown,
        followed: this.following?.id === id,
      };

      const iconClasses = {
        icon: true,
        'hide-icon': disableDropdown,
      };

      const participantIsFollowed = this.following?.id === id;

      const options = Object.values(WIODropdownOptions)
        .map((label, index) => ({
          label: participantIsFollowed && index ? 'UNFOLLOW' : label,
          id,
          name,
          color,
          slotIndex,
        }))
        .slice(0, 2);

      return html`
        <superviz-dropdown
        options=${JSON.stringify(options)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(icons)}"
        ?disabled=${disableDropdown}
        >
        <div 
          class=${classMap(contentClasses)} 
          @click=${this.selectParticipant(id)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${color}">
              <div 
                class="who-is-online-dropdown__avatar" 
                style="background-color: ${color}; color: ${letterColor}">
                ${name?.at(0)}
              </div>
            </div>
            <span class="user-name">${name}</span>
            <superviz-icon 
              class=${classMap(iconClasses)} 
              name="right" 
              color="var(--sv-gray-600)">
          </superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `;
    });
  }

  private toggleOpen() {
    this.open = !this.open;
    this.selected = '';
  }

  private get menuClasses() {
    return {
      menu: true,
      'menu--bottom-left': this.position === 'bottom-left',
      'menu--bottom-center': this.position === 'bottom-center',
      'menu--bottom-right': this.position === 'bottom-right',
      'menu-open': this.open,
      'menu-left': this.align === 'left',
      'menu-right': this.align === 'right',
    };
  }

  protected render() {
    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggleOpen}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${classMap(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `;
  }
}
