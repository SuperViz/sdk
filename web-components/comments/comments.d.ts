import { CSSResultGroup, LitElement } from 'lit';
import { Annotation } from '../../components/comments/types';
import { AnnotationFilter } from './components/types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class Comments extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    annotations: Annotation[];
    annotationFilter: AnnotationFilter;
    static properties: {
        open: {
            type: BooleanConstructor;
        };
        annotations: {
            type: ObjectConstructor;
        };
        annotationFilter: {
            type: StringConstructor;
        };
    };
    constructor();
    updateAnnotations(data: Annotation[]): void;
    private toggle;
    private setFilter;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
