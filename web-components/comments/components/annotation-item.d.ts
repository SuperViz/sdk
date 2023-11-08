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
        };
        isLastAnnotation: {
            type: BooleanConstructor;
        };
        annotationFilter: {
            type: StringConstructor;
        };
    };
    private get filterIsAll();
    private get filterIsResolved();
    private get shouldHiddenAnnotation();
    private get replies();
    private get repliesSize();
    private get replyText();
    private get isSelected();
    private get annotationClasses();
    private get hrClasses();
    private get avatarCommentsClasses();
    private get commentsClasses();
    protected firstUpdated(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private selectAnnotation;
    private createComment;
    private resolveAnnotation;
    private hideUndoResolved;
    private generateAvatarCommentsTemplate;
    private generateExpantedCommentesTemplate;
    private annotationResolvedTemplate;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
