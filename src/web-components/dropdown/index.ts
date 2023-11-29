import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../base';

import { dropdownStyle } from './index.style';
import { Positions, PositionsEnum } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-dropdown')
export class Dropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare disabled: boolean;
  declare align: 'left' | 'right';
  declare position: Positions;
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

  private originalPosition: Positions;
  private menu: HTMLElement = undefined;

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('position') && !this.originalPosition) {
      this.originalPosition = changedProperties.get('position');
    }

    if (!changedProperties.has('open')) return;

    if (this.open) {
      document.addEventListener('click', this.onClickOutDropdown);
      return;
    }

    document.removeEventListener('click', this.onClickOutDropdown);
    this.close();
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
      composed: true,
    });
  };

  private get dropdownBounds() {
    if (!this.menu) {
      this.menu = this.shadowRoot.querySelector('.menu');
    }

    const { y, height, x, width } = this.menu.getBoundingClientRect();
    const aditionalHeight = this.position.includes('bottom') ? 4 : 0;

    return {
      top: y,
      bottom: y + height + aditionalHeight,
      left: x,
      right: x + width,
    };
  }

  private adjustPositionVertical() {
    const { top, bottom } = this.dropdownBounds;
    const { innerHeight } = window;

    const isOutsideWindowBottom = bottom > innerHeight;
    const isOutsideWindowTop = top < 0;
    if (!(isOutsideWindowBottom || isOutsideWindowTop)) return;

    const newSide = innerHeight - bottom > top ? 'bottom' : 'top';
    const previousSide = this.position.split('-')[0];
    const newPosition = this.position.replace(previousSide, newSide) as Positions;
    this.position = newPosition;
  }

  private adjustPositionHorizontal() {
    const { left, right } = this.dropdownBounds;
    let isOutsideWindowLeft = left < 0;
    let isOutsideWindowRight = right > window.innerWidth;

    if (!(isOutsideWindowLeft || isOutsideWindowRight)) return;

    const isCentered = this.position.includes('center');
    if (isCentered) {
      const replace = isOutsideWindowLeft ? 'left' : 'right';
      const newPosition = this.position.replace('center', replace) as Positions;
      this.position = newPosition;
      return;
    }

    const previousSide = isOutsideWindowLeft ? left : right;
    const width = right - left;
    const offset = (isOutsideWindowLeft ? width : -width) / 2;

    const newX = previousSide + offset;
    isOutsideWindowLeft = newX < 0;
    isOutsideWindowRight = newX + width > window.innerWidth;

    if (!(isOutsideWindowLeft || isOutsideWindowRight)) {
      const newPosition = this.position.replace(/left|right/, 'center') as Positions;
      this.position = newPosition;
      return;
    }

    const replace = isOutsideWindowLeft ? 'left' : 'right';
    const newPosition = this.position.replace(this.position.split('-')[1], replace) as Positions;
    this.position = newPosition;
  }

  private adjustPosition = () => {
    this.adjustPositionVertical();
    this.adjustPositionHorizontal();
  };

  private setMenu() {
    if (!this.menu) {
      this.menu = this.shadowRoot.querySelector('.menu');
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(this.adjustPosition, options);

      const target = this.menu;
      observer.observe(target);
    }
  }

  private get renderHeader() {
    if (!this.name) return html``;
    return html` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`;
  }

  protected render() {
    const menuClasses = {
      menu: true,
      'menu--bottom-left': this.position === PositionsEnum['BOTTOM-LEFT'],
      'menu--bottom-center': this.position === PositionsEnum['BOTTOM-CENTER'],
      'menu--bottom-right': this.position === PositionsEnum['BOTTOM-RIGHT'],
      'menu--top-left': this.position === PositionsEnum['TOP-LEFT'],
      'menu--top-center': this.position === PositionsEnum['TOP-CENTER'],
      'menu--top-right': this.position === PositionsEnum['TOP-RIGHT'],
      'menu-open': this.open,
      'menu-left': this.align === 'left',
      'menu-right': this.align === 'right',
      'who-is-online-dropdown': this.name,
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
      if (this.disabled) return;

      this.setMenu();
      this.open = !this.open;
      setTimeout(() => this.adjustPosition());
    };

    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${classMap(menuClasses)}>
          ${this.renderHeader}
          <ul class="items">
            ${options}
          </ul>
        </div>
      </div>
    `;
  }
}
