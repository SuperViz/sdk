import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';

import { INDEX_IS_WHITE_TEXT } from '../../../common/types/meeting-colors.types';
import { Participant } from '../../../components/who-is-online/types';
import { WebComponentsBase } from '../../base';
import importStyle from '../../base/utils/importStyle';
import { dropdownStyle } from '../css';

import {
  Following,
  WIODropdownOptions,
  PositionOptions,
  TooltipData,
  VerticalSide,
  HorizontalSide,
} from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-who-is-online-dropdown')
export class WhoIsOnlineDropdown extends WebComponentsBaseElement {
  static styles = styles;

  declare open: boolean;
  declare align: HorizontalSide;
  declare position: VerticalSide;
  declare participants: Participant[];
  declare selected: string;
  private originalPosition: VerticalSide;
  private menu: HTMLElement;
  private dropdownContent: HTMLElement;
  private host: HTMLElement;
  declare disableDropdown: boolean;
  declare showSeeMoreTooltip: boolean;
  declare showParticipantTooltip: boolean;
  declare following: Following;
  declare localParticipantJoinedPresence: boolean;

  static properties = {
    open: { type: Boolean },
    align: { type: String },
    position: { type: String },
    participants: { type: Array },
    selected: { type: String },
    disableDropdown: { type: Boolean },
    following: { type: Object },
    showSeeMoreTooltip: { type: Boolean },
    showParticipantTooltip: { type: Boolean },
    localParticipantJoinedPresence: { type: Boolean },
  };

  constructor() {
    super();
    // should match presence-mouse textColorValues
    this.selected = '';
    this.showParticipantTooltip = true;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    this.shadowRoot.querySelector('.who-is-online__extras-dropdown').scrollTop = 0;
    importStyle.call(this, 'who-is-online');

    const dropdownList = this.shadowRoot.querySelector('.dropdown-list') as HTMLElement;
    const { right, bottom } = this.parentElement.getBoundingClientRect();
    dropdownList.style.setProperty('right', `${window.innerWidth - right}px`);
    dropdownList.style.setProperty('top', `${bottom + 5}px`);
    dropdownList.style.setProperty('z-index', '10');

    dropdownList.style.position = 'fixed';
  }

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (!changedProperties.has('open')) return;

    this.emitEvent('toggle-dropdown-state', { open: this.open, font: 'toggle' });

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
    this.selected = '';
    this.emitEvent('clickout', {
      bubbles: false,
      composed: false,
    });
  };

  private selectParticipant = (participantId: string) => {
    return () => {
      this.selected = participantId;
    };
  };

  private getAvatar(participant: Participant) {
    if (participant.avatar?.imageUrl) {
      return html` <img
        class="who-is-online__participant__avatar"
        style="background-color: ${participant.color}"
        src=${participant.avatar.imageUrl}
      />`;
    }

    const letterColor = INDEX_IS_WHITE_TEXT.includes(participant.slotIndex) ? '#FFFFFF' : '#26242A';

    return html`<div
      class="who-is-online__participant__avatar"
      style="background-color: ${participant.color}; color: ${letterColor}"
    >
      ${participant.name?.at(0).toUpperCase()}
    </div>`;
  }

  private toggleShowTooltip = ({ detail: { open } }: CustomEvent) => {
    this.showParticipantTooltip = !this.showParticipantTooltip;

    if (!open) {
      this.selected = '';
    }
  };

  private renderParticipants() {
    if (!this.participants) return;

    const icons = ['place', 'send'];
    const numberOfParticipants = this.participants.length - 1;

    return repeat(
      this.participants,
      (participant) => participant.id,
      (participant, index) => {
        const { id, slotIndex, joinedPresence, isLocal, color, name } = participant;

        const disableDropdown = !joinedPresence || isLocal || this.disableDropdown;

        const contentClasses = {
          'who-is-online__extra-participant': true,
          'who-is-online__extra-participant--selected': this.selected === id,
          'disable-dropdown': disableDropdown,
          followed: this.following?.id === id,
        };

        const iconClasses = {
          'who-is-online__extras__arrow-icon': true,
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

        const tooltipData: TooltipData = {
          name,
        };

        if (this.localParticipantJoinedPresence && joinedPresence) {
          tooltipData.action = 'Click to Follow';
        }

        const isLastParticipant = index === numberOfParticipants;

        return html`
        <superviz-dropdown
        options=${JSON.stringify(options)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(icons)}"
        ?disabled=${disableDropdown}
        onHoverData=${JSON.stringify(tooltipData)}
        ?canShowTooltip=${this.showParticipantTooltip}
        ?shiftTooltipLeft=${true}
        ?lastParticipant=${isLastParticipant}
        @toggle-dropdown-state=${this.toggleShowTooltip}
        classesPrefix="who-is-online__controls"
        parentComponent="who-is-online"
        tooltipPrefix="who-is-online"
        >
        <div 
          class=${classMap(contentClasses)} 
          @click=${this.selectParticipant(id)} slot="dropdown">
            <div class="who-is-online__participant" style="border-color: 
            ${color}">
              ${this.getAvatar(participant)}
            </div>
            <span class="who-is-online__extras__username">${name}</span>
            <superviz-icon 
              class=${classMap(iconClasses)} 
              name="right" 
              color="var(--sv-gray-600)">
          </superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `;
      },
    );
  }

  private setMenu() {
    if (!this.menu) {
      this.menu = this.shadowRoot.querySelector('.who-is-online__extras-dropdown');
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
      this.position = this.position.replace(/top|bottom/, originalVertical) as VerticalSide;
      return;
    }

    const newSide = innerHeight - bottom > top ? 'bottom' : 'top';
    const previousSide = this.position.split('-')[0];
    const newPosition = this.position.replace(previousSide, newSide) as VerticalSide;

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
      'who-is-online__extras-dropdown': true,
      'menu--bottom': this.position === VerticalSide.BOTTOM,
      'menu--top': this.position === VerticalSide.TOP,
      'menu-open': this.open,
    };
  }

  private tooltip = () => {
    if (!this.showSeeMoreTooltip) return '';

    return html`<superviz-tooltip
      tooltipData=${JSON.stringify({ name: 'See more' })}
      classesPrefix="who-is-online__tooltip"
      parentComponent="who-is-online"
    ></superviz-tooltip>`;
  };

  protected render() {
    return html`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${classMap(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `;
  }
}
