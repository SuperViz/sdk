import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsCommentInput extends WebComponentsBaseElement {
    eventType: string;
    text: string;
    btnActive: boolean;
    editable: boolean;
    commentsInput: HTMLTextAreaElement;
    private pinCordinates;
    constructor();
    static styles: CSSResultGroup[];
    static properties: {
        eventType: {
            type: StringConstructor;
        };
        text: {
            type: StringConstructor;
        };
        btnActive: {
            type: BooleanConstructor;
        };
        editable: {
            type: BooleanConstructor;
        };
    };
    private getCommentInput;
    private getCommentInputContainer;
    private getSendBtn;
    private commentInputFocus;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: Map<string, any>): void;
    private updateHeight;
    private send;
    private closeEditMode;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
