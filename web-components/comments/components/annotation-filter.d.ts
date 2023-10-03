import { CSSResultGroup, LitElement } from 'lit';
import { AnnotationFilter } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotationFilter extends WebComponentsBaseElement {
    constructor();
    filter: AnnotationFilter;
    caret: string;
    static styles: CSSResultGroup[];
    static properties: {
        filter: {
            type: StringConstructor;
        };
        caret: {
            type: StringConstructor;
        };
    };
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
