import { CSSResultGroup, LitElement } from 'lit';
declare const CommentsTopbar_base: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsTopbar extends CommentsTopbar_base {
    static styles: CSSResultGroup[];
    side: string;
    static properties: {
        side: {
            type: StringConstructor;
        };
    };
    constructor();
    private close;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
