import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsFloatButton extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    isHidden: boolean;
    positionStyles: string;
    commentsPosition: string;
    private shouldHide;
    static properties: {
        positionStyles: {
            type: StringConstructor;
        };
        isHidden: {
            type: BooleanConstructor;
        };
        commentsPosition: {
            type: StringConstructor;
        };
    };
    constructor();
    private toggle;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
