import { CSSResultGroup, LitElement } from 'lit';
import { Annotation } from '../../../components/comments/types';
import { AnnotationFilter } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsContent extends WebComponentsBaseElement {
    constructor();
    static styles: CSSResultGroup[];
    annotations: Annotation[];
    selectedAnnotation: string;
    annotationFilter: AnnotationFilter;
    private lastCommentId;
    static properties: {
        annotations: {
            type: ObjectConstructor;
        };
        selectedAnnotation: {
            type: StringConstructor;
        };
        annotationFilter: {
            type: StringConstructor;
        };
    };
    private unselectAnnotation;
    private unselectAnnotationEsc;
    private selectAnnotation;
    updated(changedProperties: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private checkLastAnnotation;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
