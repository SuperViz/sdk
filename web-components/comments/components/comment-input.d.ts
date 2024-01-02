import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsCommentInput extends WebComponentsBaseElement {
    eventType: string;
    text: string;
    btnActive: boolean;
    editable: boolean;
    commentsInput: HTMLTextAreaElement;
    placeholder: string;
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
        placeholder: {
            type: StringConstructor;
        };
    };
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private get commentInput();
    private getSendBtn;
    private get optionsContainer();
    private get horizontalRule();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: Map<string, any>): void;
    private updateHeight;
    private sendEnter;
    private send;
    private closeEditMode;
    private onTextareaFocus;
    private onTextareaLoseFocus;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
