import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../base';

import { dropdownStyle } from './index.style';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-dropdown')
export class Dropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare disabled: boolean;
  declare align: 'left' | 'right';
  declare position: 'bottom-left' | 'bottom-center' | 'bottom-right';
  declare options: object[];
  declare label: string;
  declare returnTo: string;
  declare active: string | object;
  declare icons?: string[];
  declare name?: string;

  static properties = {
    open: { type: Boolean },
    disabled: { type: Boolean },
    align: { type: String },
    position: { type: String },
    options: { type: Array },
    label: { type: String },
    returnTo: { type: String },
    active: { type: [String, Object] },
    icons: { type: Array },
    name: { type: String },
  };

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('open')) {
      return this.open
        ? document.addEventListener('click', this.onClickOutDropdown)
        : (document.removeEventListener('click', this.onClickOutDropdown), this.close());
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
    }
  };

  private close = () => {
    this.emitEvent('close', {
      bubbles: false,
      composed: false,
    });
  };

  private callbackSelected = (option) => {
    this.open = false;

    const returnTo = this.returnTo ? option[this.returnTo] : option;

    this.emitEvent('selected', returnTo, {
      bubbles: false,
      composed: false,
    });
  };

  protected render() {
    const menuClasses = {
      menu: true,
      'menu--bottom-left': this.position === 'bottom-left',
      'menu--bottom-center': this.position === 'bottom-center',
      'menu--bottom-right': this.position === 'bottom-right',
      'menu-open': this.open,
      'menu-left': this.align === 'left',
      'menu-right': this.align === 'right',
      'who-is-online-dropdown': this.name,
    };

    const header = () => {
      if (!this.name) return html``;

      return html` <div class="header">
        <span class="text">${this.name}</span>
        <span class="sv-hr"></span>
      </div>`;
    };

    const icons = this.icons?.map((icon) => {
      return html`<superviz-icon name="${icon}" size="sm"></superviz-icon>`;
    });

    const options = this.options.map((option, index) => {
      const liClasses = {
        text: true,
        'text-bold': true,
        active: this.active === option?.[this.returnTo],
      };

      return html`<li @click=${() => this.callbackSelected(option)} class=${classMap(liClasses)}>
        ${icons?.at(index)} ${option[this.label]}
      </li>`;
    });

    const toggle = () => {
      this.open = !this.open;
    };

    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${() => toggle()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${classMap(menuClasses)}>
          ${header()}
          <ul class="items">
            ${options}
          </ul>
        </div>
      </div>
    `;
  }
}
