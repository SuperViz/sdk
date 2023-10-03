import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Icon extends WebComponentsBaseElement {
    name: string;
    size: string;
    constructor();
    static properties: {
        name: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
        };
    };
    static styles: (import("lit").CSSResult | CSSResultGroup[])[];
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
