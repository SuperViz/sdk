import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../base';
import importStyle from '../base/utils/importStyle';

import { dropdownStyle } from './index.style';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-dropdown')
export class Dropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare disabled: boolean;
  declare align: 'left' | 'right';
  declare options: object[];
  declare label: string;
  declare returnTo: string;
  declare active: string | object;
  declare icons?: string[];
  declare name?: string;
  declare onHoverData: { name: string; action: string };
  declare shiftTooltipLeft: boolean;
  declare lastParticipant: boolean;
  declare classesPrefix: string;
  declare parentComponent: string;
  declare tooltipPrefix: string;
  declare dropdown: HTMLElement;
  // true when the dropdown is hovered (pass to tooltip element)
  declare showTooltip: boolean;
  // true if the tooltip should be shown when hovering (use in this element)
  declare canShowTooltip: boolean;

  private menu: HTMLElement = undefined;
  private animationFrame: number;

  static properties = {
    open: { type: Boolean },
    disabled: { type: Boolean },
    align: { type: String },
    options: { type: Array },
    label: { type: String },
    returnTo: { type: String },
    active: { type: [String, Object] },
    icons: { type: Array },
    name: { type: String },
    onHoverData: { type: Object },
    showTooltip: { type: Boolean },
    dropdown: { type: Object },
    canShowTooltip: { type: Boolean },
    drodpdownSizes: { type: Object },
    shiftTooltipLeft: { type: Boolean },
    lastParticipant: { type: Boolean },
    classesPrefix: { type: String },
    parentComponent: { type: String },
    tooltipPrefix: { type: String },
  };

  constructor() {
    super();
    this.showTooltip = false;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateComplete.then(() => {
      this.menu = this.shadowRoot.querySelector('.menu');
      importStyle.call(this, [this.parentComponent]);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.onClickOutDropdown);
    const dropdown = this.shadowRoot.querySelector('.dropdown');
    dropdown?.removeEventListener('mouseenter', () => {
      this.showTooltip = true;
    });
    dropdown?.removeEventListener('mouseleave', () => {
      this.showTooltip = false;
    });
  }

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (!changedProperties.has('open')) return;

    this.emitEvent(
      'toggle-dropdown-state',
      { open: this.open, font: this.name },
      { bubbles: false, composed: false },
    );

    if (this.open) {
      document.addEventListener('click', this.onClickOutDropdown);
      this.animationFrame = requestAnimationFrame(this.adjustPosition);
      return;
    }

    document.removeEventListener('click', this.onClickOutDropdown);
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

  private setHorizontalPosition() {
    const slotDropdown = this.shadowRoot.querySelector('slot[name="dropdown"]') as HTMLSlotElement;
    const { left, right, width: parentWidth } = slotDropdown.parentElement.getBoundingClientRect();
    const { width } = this.menu.getBoundingClientRect();

    const isOutsideWindowLeft = left - (width - parentWidth) / 2 < 0;
    const isOutsideWindowRight = right + (width - parentWidth) / 2 > window.innerWidth;

    if (this.shiftTooltipLeft) {
      this.menu.style.left = `${left + 8}px`;
      this.menu.style.right = '';
      this.menu.style.transform = `translate(0, 0)`;
      return;
    }

    if (!isOutsideWindowLeft && !isOutsideWindowRight) {
      this.menu.style.left = `${left}px`;
      this.menu.style.right = '';
      this.menu.style.transform = `translate(calc(-50% + ${parentWidth / 2}px), 0)`;
      return;
    }

    if (!isOutsideWindowLeft) {
      this.menu.style.left = '';
      this.menu.style.right = `${window.innerWidth - right}px`;
      this.menu.style.transform = 'translate(0, 0)';
      return;
    }

    if (!isOutsideWindowRight) {
      this.menu.style.right = '';
      this.menu.style.left = `${right - parentWidth}px`;
      this.menu.style.transform = 'translate(0, 0)';
    }
  }

  private setPositionVertical() {
    const slotDropdown = this.shadowRoot.querySelector('slot[name="dropdown"]') as HTMLSlotElement;
    const { top, bottom } = slotDropdown.parentElement.getBoundingClientRect();
    const { height } = this.menu.getBoundingClientRect();

    const offset = this.shiftTooltipLeft ? -2 : 8;
    const isOutsideWindowBottom = bottom + height + offset > window.innerHeight;

    if (!isOutsideWindowBottom) {
      this.menu.style.bottom = '';
      this.menu.style.top = `${bottom + offset}px`;
      return;
    }

    this.menu.style.top = 'auto';
    this.menu.style.bottom = `${window.innerHeight - top + offset}px`;
  }

  private adjustPosition = () => {
    if (!this.open) {
      cancelAnimationFrame(this.animationFrame);
      return;
    }

    this.setHorizontalPosition();
    this.setPositionVertical();

    this.animationFrame = requestAnimationFrame(this.adjustPosition);
  };

  private get renderHeader() {
    if (!this.name) return html``;
    return html` <div class="header ${this.getClass('header')}">
      <span class="text username ${this.getClass('title')}">${this.name}</span>
      <span class="sv-hr ${this.getClass('divisor')}"></span>
    </div>`;
  }

  private toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.emitEvent('open', { open: this.open });
  }

  private get supervizIcons() {
    return this.icons?.map((icon) => {
      return html`<superviz-icon name="${icon}" size="sm"></superviz-icon>`;
    });
  }

  private get listOptions() {
    return this.options.map((option, index) => {
      const liClasses = {
        text: true,
        [this.getClass('item')]: true,
        'text-bold': true,
        active: option?.[this.returnTo] && this.active === option?.[this.returnTo],
      };

      return html`<li @click=${() => this.callbackSelected(option)} class=${classMap(liClasses)}>
        <span class=${this.getClass('item__icon')}>${this.supervizIcons?.at(index)}</span>
        <span class="option-label ${this.getClass('item__label')}">${option[this.label]}</span>
      </li>`;
    });
  }

  private tooltip = () => {
    if (!this.canShowTooltip) return '';

    const tooltipVerticalPosition = this.lastParticipant ? 'tooltip-top' : 'tooltip-bottom';

    return html` <superviz-tooltip
      tooltipData=${JSON.stringify(this.onHoverData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
      tooltipVerticalPosition=${tooltipVerticalPosition}
      classesPrefix="${this.tooltipPrefix}__tooltip"
      parentComponent=${this.parentComponent}
    ></superviz-tooltip>`;
  };

  private getClass(suffix: string) {
    return `${this.classesPrefix}__${suffix}`;
  }

  protected render() {
    const menuClasses = {
      menu: true,
      'menu-open': this.open,
      'menu-left': this.align === 'left',
      'menu-right': this.align === 'right',
      'who-is-online-dropdown': this.name,
    };

    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${classMap(menuClasses)}>
          ${this.renderHeader}
          <ul class="${this.getClass('items')} items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `;
  }
}
