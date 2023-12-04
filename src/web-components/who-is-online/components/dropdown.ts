import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Participant } from '../../../components/who-is-online/types';
import { WebComponentsBase } from '../../base';
import { dropdownStyle } from '../css';

import { PositionOptions, WhoIsOnlineDropdownOptions } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-who-is-online-dropdown')
export class WhoIsOnlineDropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare align: 'left' | 'right';
  declare position: 'top' | 'bottom';
  declare participants: Participant[];
  private textColorValues: number[];
  declare selected: string;
  private originalPosition: 'top' | 'bottom';
  private menu: HTMLElement;
  private dropdownContent: HTMLElement;
  private host: HTMLElement;

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

  private getAvatar(participant: Participant) {
    if (participant.avatar?.imageUrl) {
      return html` <img
        class="who-is-online-dropdown__avatar"
        src=${participant.avatar.imageUrl}
      />`;
    }

    const letterColor = this.textColorValues.includes(participant.slotIndex)
      ? '#FFFFFF'
      : '#26242A';

    return html`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${participant.color}; color: ${letterColor}"
    >
      ${participant.name?.at(0)}
    </div>`;
  }

  private renderParticipants() {
    if (!this.participants) return;

    const icons = ['place', 'send'];

    return this.participants.map((participant) => {
      const letterColor = this.textColorValues.includes(participant.slotIndex)
        ? '#FFFFFF'
        : '#26242A';

      const contentClasses = {
        'who-is-online-dropdown__content': true,
        'who-is-online-dropdown__content--selected': this.selected === participant.id,
        local: participant.isLocal,
      };

      const options = Object.values(WhoIsOnlineDropdownOptions)
        .map((label) => {
          return { label, id: participant.id };
        })
        .splice(0, 1);

      return html`
        <superviz-dropdown
        options=${JSON.stringify(options)}
        label="label"
        position="bottom-right"
        
        icons="${JSON.stringify(icons)}"
        ?disabled=${participant.isLocal}
        >
        <div 
          class=${classMap(contentClasses)} 
          @click=${this.selectParticipant(participant.id)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${participant.color}">
              ${this.getAvatar(participant)}
            </div>
            <span class="user-name">${participant.name}</span>
            <superviz-icon class="icon" name="right" color="var(--sv-gray-600)"></superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `;
    });
  }

  private setMenu() {
    if (!this.menu) {
      this.menu = this.shadowRoot.querySelector('.menu');
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      };

      const intersectionObserver = new IntersectionObserver(this.adjustPosition, options);
      const resizeObserver = new ResizeObserver(this.adjustPosition);
      const target = this.menu;
      intersectionObserver.observe(target);
      resizeObserver.observe(this.scrollableParent ?? document.body);
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

  private get dropdownBounds() {
    if (!this.dropdownContent) {
      this.dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
    }

    const bounds = this.dropdownContent.getBoundingClientRect();

    const { y, height } = this.menu.getBoundingClientRect();

    return {
      top: y,
      bottom: y + height + 4,
      height: height + 4,
      contentY: bounds.y,
    };
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

  private positionAction(): PositionOptions {
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

  private adjustPosition = () => {
    const { top, bottom } = this.dropdownBounds;
    const { innerHeight } = window;

    const action = this.positionAction();

    if (action === PositionOptions['DO-NOTHING']) return;

    if (action === PositionOptions['USE-ORIGINAL']) {
      const originalVertical = this.originalPosition.split('-')[0];
      this.position = this.position.replace(/top|bottom/, originalVertical) as 'top' | 'bottom';
      return;
    }

    const newSide = innerHeight - bottom > top ? 'bottom' : 'top';
    const previousSide = this.position.split('-')[0];
    const newPosition = this.position.replace(previousSide, newSide) as 'top' | 'bottom';

    this.position = newPosition;
  };

  private toggle() {
    if (!this.originalPosition) this.originalPosition = this.position;
    this.setMenu();
    this.open = !this.open;
    if (!this.open) return;
    this.selected = '';
    setTimeout(() => this.adjustPosition());
  }

  private get menuClasses() {
    return {
      menu: true,
      'menu--bottom': this.position === 'bottom',
      'menu--top': this.position === 'top',
      'menu-open': this.open,
    };
  }

  protected render() {
    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${classMap(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `;
  }
}
