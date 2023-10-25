import { CSSResultGroup, LitElement } from 'lit';
import { Annotation } from '../../../components/comments/types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotations extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    static properties: {
        annotation: {
            type: ObjectConstructor;
        };
    };
    annotation: Annotation;
    private createComment;
    private prepareToCreateAnnotation;
    private cancelTemporaryAnnotation;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
