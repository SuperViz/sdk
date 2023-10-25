import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotationResolved extends WebComponentsBaseElement {
    constructor();
    static styles: CSSResultGroup[];
    private timeout;
    timeToHide: number;
    isCanceled: boolean;
    static properties: {
        timeToHide: {
            type: NumberConstructor;
        };
        isCanceled: {
            type: BooleanConstructor;
        };
    };
    protected firstUpdated(): void;
    private setTimer;
    private hide;
    private undone;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
