import { CSSResultGroup, LitElement } from 'lit';
import { CommentMode } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsCommentItem extends WebComponentsBaseElement {
    constructor();
    static styles: CSSResultGroup[];
    uuid: string;
    annotationId?: string;
    avatar: string;
    username: string;
    text: string;
    resolved: boolean;
    createdAt: string;
    resolvable: boolean;
    mode: CommentMode;
    deleteCommentModalOpen: boolean;
    primaryComment: boolean;
    expandElipsis: boolean;
    annotationFilter: string;
    static properties: {
        uuid: {
            type: StringConstructor;
        };
        annotationId: {
            type: StringConstructor;
        };
        avatar: {
            type: StringConstructor;
        };
        username: {
            type: StringConstructor;
        };
        text: {
            type: StringConstructor;
        };
        resolved: {
            type: BooleanConstructor;
        };
        resolvable: {
            type: BooleanConstructor;
        };
        createdAt: {
            type: StringConstructor;
        };
        mode: {
            type: StringConstructor;
        };
        deleteCommentModalOpen: {
            type: BooleanConstructor;
        };
        primaryComment: {
            type: BooleanConstructor;
        };
        expandElipsis: {
            type: BooleanConstructor;
        };
        annotationFilter: {
            type: StringConstructor;
        };
    };
    private updateComment;
    private resolveAnnotation;
    private confirmDelete;
    private closeEditMode;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
