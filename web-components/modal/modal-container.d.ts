import { CSSResultGroup, LitElement } from 'lit';
import { ModalOptions } from './types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class ModalContainer extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    private options;
    setOptions(options: ModalOptions): void;
    private closeModal;
    private confirmModal;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
