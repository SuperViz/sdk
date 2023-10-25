import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsFloatButton extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    isHidden: boolean;
    static properties: {
        isHidden: {
            type: BooleanConstructor;
        };
    };
    constructor();
    private toggle;
    connectedCallback(): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
