import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Annotation, PinCoordinates } from '../../../components/comments/types';
import { PinMode, HorizontalSide, Sides } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotationPin extends WebComponentsBaseElement {
    type: PinMode;
    active: boolean;
    annotation: Annotation;
    position: Partial<PinCoordinates>;
    showInput: boolean;
    containerSides: Sides;
    horizontalSide: HorizontalSide | undefined;
    commentsSide: HorizontalSide;
    movedPosition: string;
    pinAnnotation: HTMLElement;
    localAvatar: string | undefined;
    annotationSent: boolean;
    localName: string;
    private originalPosition;
    private annotationSides;
    private inputElement;
    static styles: CSSResultGroup[];
    static properties: {
        type: {
            type: StringConstructor;
        };
        annotation: {
            type: ObjectConstructor;
        };
        position: {
            type: ObjectConstructor;
        };
        active: {
            type: BooleanConstructor;
        };
        showInput: {
            type: BooleanConstructor;
        };
        containerSides: {
            type: ObjectConstructor;
        };
        horizontalSide: {
            type: StringConstructor;
        };
        commentsSide: {
            type: StringConstructor;
        };
        movedPosition: {
            type: StringConstructor;
        };
        pinAnnotation: {
            type: ObjectConstructor;
        };
        localAvatar: {
            type: StringConstructor;
        };
        annotationSent: {
            type: BooleanConstructor;
        };
        localName: {
            type: StringConstructor;
        };
    };
    constructor();
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private focusInput;
    private setInputSide;
    private createComment;
    private cancelTemporaryAnnotation;
    private cancelTemporaryAnnotationEsc;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get userAvatar(): string;
    get userInitial(): string;
    private emitClick;
    private avatar;
    private input;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
