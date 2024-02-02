import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../base';
import importStyle from '../base/utils/importStyle';

import { dropdownStyle } from './index.style';
import { PositionOptions, Positions, PositionsEnum } from './types';

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
  declare onHoverData: { name: string; action: string };
  declare shiftTooltipLeft: boolean;
  declare lastParticipant: boolean;
  declare classesPrefix: string;
  declare parentComponent: string;

  private dropdownContent: HTMLElement;
  private originalPosition: Positions;
  private menu: HTMLElement = undefined;
  private host: HTMLElement;
  declare dropdown: HTMLElement;
  private dropdownResizeObserver: ResizeObserver;

  // true when the dropdown is hovered (pass to tooltip element)
  declare showTooltip: boolean;
  // true if the tooltip should be shown when hovering (use in this element)
  declare canShowTooltip: boolean;

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
    onHoverData: { type: Object },
    showTooltip: { type: Boolean },
    dropdown: { type: Object },
    canShowTooltip: { type: Boolean },
    drodpdownSizes: { type: Object },
    shiftTooltipLeft: { type: Boolean },
    lastParticipant: { type: Boolean },
    classesPrefix: { type: String },
    parentComponent: { type: String },
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
    this.dropdownResizeObserver?.disconnect();
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

  private get dropdownBounds() {
    if (!this.dropdownContent) {
      this.dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
    }

    const bounds = this.dropdownContent.getBoundingClientRect();

    const { y, height, x, width } = this.menu.getBoundingClientRect();
    return {
      top: y,
      bottom: y + height + 4,
      left: x,
      right: x + width,
      height: height + 4,
      width,
      contentX: bounds.x,
      contentY: bounds.y,
      contentWidth: bounds.width,
    };
  }

  private positionVerticalAction(): PositionOptions {
    const { top, bottom } = this.dropdownBounds;
    const { innerHeight } = window;

    const isOutsideWindowBottom = bottom > innerHeight;
    const isOutsideWindowTop = top < 0;

    if (
      (isOutsideWindowBottom && this.position.includes('bottom')) ||
      (isOutsideWindowTop && this.position.includes('top'))
    ) {
      return PositionOptions['CALCULATE-NEW'];
    }

    if (!isOutsideWindowBottom && !isOutsideWindowTop && this.shouldUseOriginalVertical()) {
      return PositionOptions['USE-ORIGINAL'];
    }

    return PositionOptions['DO-NOTHING'];
  }

  private positionHorizontalAction(): PositionOptions {
    if (this.dropdownCovered()) {
      return PositionOptions['DO-NOTHING'];
    }

    const { right, left, contentX, contentWidth, width } = this.dropdownBounds;
    const { innerWidth } = window;

    const isOutsideWindowRight = right > innerWidth;
    const isOutsideWindowLeft = left < 0;
    const isOutside = isOutsideWindowLeft || isOutsideWindowRight;
    if (isOutside && !this.position.includes('center')) {
      return PositionOptions['CALCULATE-NEW'];
    }

    if (this.position.includes('center')) {
      const midX = contentX + contentWidth / 2;
      const isOutsideWindowLeft = midX - width / 2 < 0;
      const isOutsideWindowRight = midX + width / 2 > innerWidth;

      const isOutside = isOutsideWindowLeft || isOutsideWindowRight;
      if (isOutside) {
        return PositionOptions['CALCULATE-NEW'];
      }
    }

    if (!isOutside && this.shouldUseOriginalHorizontal()) {
      return PositionOptions['USE-ORIGINAL'];
    }

    if (
      this.shouldCenter() &&
      this.position !== this.originalPosition &&
      !this.position.includes('center')
    ) {
      return PositionOptions['CENTER'];
    }

    return PositionOptions['DO-NOTHING'];
  }

  private dropdownCovered() {
    const { left, right } = this.dropdownBounds;
    const { innerWidth } = window;

    if (this.position.includes('center')) return false;
    const isOutsideWindowRight = right > innerWidth && this.position.includes('left');

    const isOutsideWindowLeft = left < 0 && this.position.includes('right');

    const isOutside = isOutsideWindowRight || isOutsideWindowLeft;

    return isOutside;
  }

  private shouldCenter() {
    const { contentX, contentWidth, width } = this.dropdownBounds;
    const midX = contentX + contentWidth / 2;
    const isOutsideWindowLeft = midX - width / 2 < 0;
    const isOutsideWindowRight = midX + width / 2 > window.innerWidth;

    const isOutside = isOutsideWindowLeft || isOutsideWindowRight;

    return !isOutside;
  }

  private shouldUseOriginalVertical() {
    const { height, contentY } = this.dropdownBounds;
    const { innerHeight } = window;
    const bottom = contentY + height;

    if (this.originalPosition.includes('bottom')) {
      return height + bottom < innerHeight;
    }

    return contentY - height > 0;
  }

  private shouldUseOriginalHorizontal() {
    const { width, contentX } = this.dropdownBounds;
    const { innerWidth } = window;
    const right = contentX + width;

    if (this.position === this.originalPosition) return false;

    if (this.originalPosition.includes('center')) {
      return right < innerWidth && contentX - width > 0;
    }

    if (this.originalPosition.includes('left')) {
      return contentX - width > 0;
    }

    return right < innerWidth;
  }

  private adjustPositionVertical() {
    const { top, bottom } = this.dropdownBounds;
    const { innerHeight } = window;

    const action = this.positionVerticalAction();

    if (action === PositionOptions['DO-NOTHING']) return;

    if (action === PositionOptions['USE-ORIGINAL']) {
      const originalVertical = this.originalPosition.split('-')[0];
      this.position = this.position.replace(/top|bottom/, originalVertical) as Positions;
      return;
    }

    const newSide = innerHeight - bottom > top ? 'bottom' : 'top';
    const previousSide = this.position.split('-')[0];
    const newPosition = this.position.replace(previousSide, newSide) as Positions;

    this.position = newPosition;
  }

  private adjustPositionHorizontal() {
    const { left, right, width } = this.dropdownBounds;
    let isOutsideWindowLeft = left < 0;
    let isOutsideWindowRight = right > window.innerWidth;

    const action = this.positionHorizontalAction();
    if (action === PositionOptions['DO-NOTHING']) {
      return;
    }

    if (action === PositionOptions['USE-ORIGINAL']) {
      const originalHorizontal = this.originalPosition.split('-')[1];
      this.position = this.position.replace(/left|center|right/, originalHorizontal) as Positions;
      return;
    }

    const previousSide = isOutsideWindowLeft ? right : left;
    const offset = (isOutsideWindowLeft ? width : -width) / 2 - 20;

    const newX = previousSide + offset;
    isOutsideWindowLeft = newX < 0;
    isOutsideWindowRight = newX + width > window.innerWidth;
    const isOutside = isOutsideWindowLeft || isOutsideWindowRight;

    if (
      (!isOutside && action === PositionOptions['CENTER']) ||
      action === PositionOptions['CENTER']
    ) {
      const newPosition = this.position.replace(/left|right/, 'center') as Positions;
      this.position = newPosition;
      return;
    }

    const isCentered = this.position.includes('center');
    if (isCentered) {
      const replace = isOutsideWindowLeft ? 'right' : 'left';
      const newPosition = this.position.replace('center', replace) as Positions;
      this.position = newPosition;
      return;
    }

    const newPosition = this.position.replace(/left|right/, 'center') as Positions;
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

      const intersectionObserver = new IntersectionObserver(this.adjustPosition, options);
      this.dropdownResizeObserver = new ResizeObserver(this.adjustPosition);
      const target = this.menu;

      intersectionObserver.observe(target);
      this.dropdownResizeObserver.observe(this.scrollableParent ?? document.body);
    }
  }

  private get scrollableParent() {
    let elementWithOverflow: HTMLElement;

    if (!this.host) {
      this.host = (this.getRootNode() as ShadowRoot).host as HTMLElement;
    }

    let nextElement = this.host;

    while (!elementWithOverflow) {
      const parent = nextElement?.parentElement;

      const hasOverflow = this.isScrollable(parent);

      if (hasOverflow) {
        elementWithOverflow = parent;
        break;
      }

      nextElement = parent;

      if (!nextElement) break;
    }

    return elementWithOverflow;
  }

  private isScrollable(element: HTMLElement): boolean {
    if (!element) return false;

    const hasScrollableContent = element.scrollHeight > element.clientHeight;
    const overflowYStyle = window.getComputedStyle(element).overflowY;
    const overflowXStyle = window.getComputedStyle(element).overflowX;
    const isOverflowYHidden = overflowYStyle.indexOf('hidden') !== -1;
    const isOverflowXHidden = overflowXStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowYHidden && !isOverflowXHidden;
  }

  private get renderHeader() {
    if (!this.name) return html``;
    return html` <div class="header">
      <span class="text username">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`;
  }

  private toggle() {
    if (this.disabled) return;
    if (!this.originalPosition) this.originalPosition = this.position;
    this.setMenu();
    this.open = !this.open;

    this.emitEvent('open', { open: this.open });
    if (!this.open) return;
    setTimeout(() => this.adjustPosition());
  }

  private get supervizIcons() {
    return this.icons?.map((icon) => {
      return html`<superviz-icon allowSetSize=${true} name="${icon}" size="sm"></superviz-icon>`;
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
        ${this.supervizIcons?.at(index)}
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
    ></superviz-tooltip>`;
  };

  private getClass(suffix: string) {
    return `${this.classesPrefix}__${suffix}`;
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
