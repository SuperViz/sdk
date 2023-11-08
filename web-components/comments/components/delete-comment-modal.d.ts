import { CSSResultGroup, LitElement } from 'lit';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class DeleteCommentModal extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    static properties: {
        open: {
            type: BooleanConstructor;
        };
        useSlot: {
            type: BooleanConstructor;
        };
    };
    open: boolean;
    useSlot: boolean;
    protected firstUpdated(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private emitEventOpenModal;
    private emitEventCloseModal;
    private toggle;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
