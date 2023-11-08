import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Dropdown extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    disabled: boolean;
    align: 'left' | 'right';
    position: 'bottom-left' | 'bottom-center' | 'bottom-right';
    options: object[];
    label: string;
    returnTo: string;
    active: string | object;
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
    };
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onClickOutDropdown;
    private close;
    private callbackSelected;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
