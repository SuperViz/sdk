import { CSSResultGroup, LitElement } from 'lit';
import { Annotation, PinCoordinates } from '../../../components/comments/types';
import { PinMode } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class CommentsAnnotationPin extends WebComponentsBaseElement {
    type: PinMode;
    active: boolean;
    annotation: Annotation;
    position: Partial<PinCoordinates>;
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
    };
    constructor();
    get userInitial(): string;
    private emitClick;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
