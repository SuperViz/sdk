import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { WebComponentsBase } from '../base';

import { dropdownStyle } from './index.style';
import { Positions, PositionsEnum } from './types';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, dropdownStyle];

@customElement('superviz-tooltip')
export class Tooltip extends WebComponentsBaseElement {
  static styles = styles;

  declare tooltipData: { name: string; action: string };

  declare tooltip: HTMLElement;
  declare tooltipOnLeft: boolean;
  declare showTooltip: boolean;
  declare tooltipVerticalPosition: Positions;
  declare tooltipHorizontalPosition: Positions;
  declare shiftTooltipLeft: boolean;

  declare hostSizes: { height: number; width: number };

  static properties = {
    tooltipData: { type: Object },
    tooltipOnLeft: { type: Boolean },
    showTooltip: { type: Boolean },
    tooltip: { type: Object },
    tooltipVerticalPosition: { type: String },
    tooltipHorizontalPosition: { type: String },
    hostSizes: { type: Object },
    shiftTooltipLeft: { type: Boolean },
  };

  constructor() {
    super();
    this.tooltipVerticalPosition = PositionsEnum['TOOLTIP-BOTTOM'];
    this.tooltipHorizontalPosition = PositionsEnum['TOOLTIP-CENTER'];
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    const { host } = this.getRootNode() as unknown as { host: HTMLElement };

    host.addEventListener('mouseenter', () => {
      this.showTooltip = true;
    });

    host.addEventListener('mouseleave', () => {
      this.showTooltip = false;
    });

    this.tooltipVerticalPosition = PositionsEnum['TOOLTIP-BOTTOM'];
    this.tooltipHorizontalPosition = PositionsEnum['TOOLTIP-CENTER'];
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    const { host } = this.getRootNode() as unknown as { host: HTMLElement };
    host.removeEventListener('mouseenter', () => {
      this.showTooltip = true;
    });

    host.removeEventListener('mouseleave', () => {
      this.showTooltip = false;
    });
  }

  protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('showTooltip') && this.showTooltip) {
      const { height, width } = (this.getRootNode() as any).host.getBoundingClientRect();
      if (this.hostSizes?.height !== height || this.hostSizes?.width !== width) {
        this.hostSizes = { height, width };
      }
    }
  }

  private adjustTooltipVerticalPosition = () => {
    const { left, right, bottom, top } = this.tooltip.getBoundingClientRect();
    const maxY = window.innerHeight;

    if (this.tooltipVerticalPosition.includes('top') && top < 0) {
      this.tooltipVerticalPosition = this.tooltipVerticalPosition.replace(
        'top',
        'bottom',
      ) as Positions;
    }

    if (this.tooltipVerticalPosition.includes('bottom') && bottom > maxY) {
      this.tooltipVerticalPosition = this.tooltipVerticalPosition.replace(
        'bottom',
        'top',
      ) as Positions;
    }
  };

  private adjustTooltipHorizontalPosition = () => {
    const { left, right } = this.tooltip.getBoundingClientRect();
    const maxX = window.innerWidth;

    if (left < 0) {
      this.tooltipHorizontalPosition = this.tooltipHorizontalPosition.replace(
        'center',
        'right',
      ) as Positions;
    }

    if (right > maxX) {
      this.tooltipHorizontalPosition = this.tooltipHorizontalPosition.replace(
        'center',
        'left',
      ) as Positions;
    }
  };

  private adjustTooltipPosition = () => {
    if (!this.tooltip) {
      this.tooltip = this.shadowRoot.querySelector('.superviz-who-is-online__tooltip');
    }

    this.adjustTooltipVerticalPosition();
    this.adjustTooltipHorizontalPosition();
  };

  private renderTooltip() {
    setTimeout(() => this.adjustTooltipPosition());
    const verticalPosition = this.tooltipVerticalPosition;
    const horizontalPosition = this.tooltipHorizontalPosition;

    const classList = {
      'superviz-who-is-online__tooltip': true,
      'tooltip-extras': this.tooltipOnLeft,
      'show-tooltip': this.showTooltip,
      'shift-left': this.shiftTooltipLeft,
    };

    classList[verticalPosition] = true;
    classList[horizontalPosition] = true;

    return html`<div
      class=${classMap(classList)}
      style="--host-heigth: ${this.hostSizes?.height}px; --host-width: ${this.hostSizes?.width}px;"
    >
      <p class="tooltip-name">${this.tooltipData?.name}</p>
      <p class="tooltip-action">${this.tooltipData?.action}</p>
      <div class="superviz-who-is-online__tooltip-arrow"></div>
    </div>`;
  }

  protected render() {
    return html`${this.renderTooltip()}`;
  }
}
