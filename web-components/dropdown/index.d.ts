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
    };
    private originalPosition;
    private menu;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onClickOutDropdown;
    private close;
    private callbackSelected;
    private get dropdownBounds();
    private adjustPositionVertical;
    private adjustPositionHorizontal;
    private adjustPosition;
    private setMenu;
    private get renderHeader();
    protected render(): import("lit").TemplateResult<1>;
}
export {};
