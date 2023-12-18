import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Positions } from './types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Dropdown extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    disabled: boolean;
    align: 'left' | 'right';
    position: Positions;
    options: object[];
    label: string;
    returnTo: string;
    active: string | object;
    icons?: string[];
    name?: string;
    onHoverData: {
        name: string;
        action: string;
    };
    private dropdownContent;
    private originalPosition;
    private menu;
    private host;
    tooltipOnLeft: boolean;
    static properties: {
        open: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        align: {
            type: StringConstructor;
        };
        position: {
            type: StringConstructor;
        };
        options: {
            type: ArrayConstructor;
        };
        label: {
            type: StringConstructor;
        };
        returnTo: {
            type: StringConstructor;
        };
        active: {
            type: (ObjectConstructor | StringConstructor)[];
        };
        icons: {
            type: ArrayConstructor;
        };
        name: {
            type: StringConstructor;
        };
        onHoverData: {
            type: ObjectConstructor;
        };
        tooltipOnLeft: {
            type: BooleanConstructor;
        };
    };
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onClickOutDropdown;
    private close;
    private callbackSelected;
    private get dropdownBounds();
    private positionVerticalAction;
    private positionHorizontalAction;
    private dropdownCovered;
    private shouldCenter;
    private shouldUseOriginalVertical;
    private shouldUseOriginalHorizontal;
    private adjustPositionVertical;
    private adjustPositionHorizontal;
    private adjustPosition;
    private setMenu;
    private get scrollableParent();
    private isScrollable;
    private get renderHeader();
    private toggle;
    private onHover;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
