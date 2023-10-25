import { CSSResultGroup, LitElement } from 'lit';
import { Annotation } from '../../../components/comments/types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotationItem extends WebComponentsBaseElement {
    annotation: Annotation;
    expandComments: boolean;
    selected: string;
    resolved: boolean;
    shouldShowUndoResolved: boolean;
    isLastAnnotation: boolean;
    annotationFilter: string;
    static styles: CSSResultGroup[];
    static properties: {
        annotation: {
            type: ObjectConstructor;
        };
        expandComments: {
            type: BooleanConstructor;
        };
        selected: {
            type: StringConstructor;
            reflect: boolean;
        };
        resolved: {
            type: BooleanConstructor;
        };
        shouldShowUndoResolved: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLastAnnotation: {
            type: BooleanConstructor;
        };
        annotationFilter: {
            type: StringConstructor;
        };
    };
    protected firstUpdated(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    selectAnnotation: () => void;
    private createComment;
    private resolveAnnotation;
    private hideUndoResolved;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
