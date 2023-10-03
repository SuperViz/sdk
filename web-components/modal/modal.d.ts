import { CSSResultGroup, LitElement } from 'lit';
import { ModalOptions } from './types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Modal extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    private modal;
    getContainer: () => Element;
    createContainer: (options: ModalOptions) => void;
    protected firstUpdated(): void;
    private createModal;
    private destroyModal;
    disconnectedCallback(): void;
}
export {};
