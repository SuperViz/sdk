import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Positions } from './types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Tooltip extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    tooltipData: {
        name: string;
        action: string;
    };
    tooltip: HTMLElement;
    tooltipOnLeft: boolean;
    showTooltip: boolean;
    tooltipVerticalPosition: Positions;
    tooltipHorizontalPosition: Positions;
    shiftTooltipLeft: boolean;
    parentSizes: {
        height: number;
        width: number;
    };
    static properties: {
        tooltipData: {
            type: ObjectConstructor;
        };
        tooltipOnLeft: {
            type: BooleanConstructor;
        };
        showTooltip: {
            type: BooleanConstructor;
        };
        tooltip: {
            type: ObjectConstructor;
        };
        tooltipVerticalPosition: {
            type: StringConstructor;
        };
        tooltipHorizontalPosition: {
            type: StringConstructor;
        };
        parentSizes: {
            type: ObjectConstructor;
        };
        shiftTooltipLeft: {
            type: BooleanConstructor;
        };
    };
    constructor();
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private hide;
    private show;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private adjustTooltipVerticalPosition;
    private adjustTooltipHorizontalPosition;
    private adjustTooltipPosition;
    private renderTooltip;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
