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

  static properties = {
    open: { type: Boolean },
    disabled: { type: Boolean },
    align: { type: String },
    position: { type: String },
    options: { type: Array },
    label: { type: String },
    returnTo: { type: String },
  };

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('open')) {
      if (this.open) {
        document.addEventListener('click', this.onClickOutDropdown);
      }

      if (!this.open) {
        document.removeEventListener('click', this.onClickOutDropdown);
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

    if (!(hasDropdownContent || hasDropdownList || hasDropdownCta)) this.open = false;
  };

  private callbackSelected = (option: any) => {
    this.open = false;

    const returnTo = this.returnTo
      ? option[this.returnTo]
      : option;

    this.emitEvent(
      'selected',
      returnTo,
      {
        bubbles: false,
        composed: false,
      },
    );
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
    };

    const options = this.options.map((option: any) => {
      return html`<li @click=${() => this.callbackSelected(option)} class="text text-bold">${option[this.label]}</li>`;
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
        <ul class=${classMap(menuClasses)}>
          ${options}
        </ul>
      </div>
    `;
  }
}
