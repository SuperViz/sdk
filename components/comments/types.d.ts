import { ParticipantApi } from '../../common/types/participant.types';
import { Observer } from '../../common/utils';
export type Annotation = {
    uuid: string;
    position: string;
    resolved: boolean;
    comments: Comment[];
};
export type Comment = {
    uuid: string;
    avatar: string;
    text: string;
    createdAt: string;
    resolvable?: boolean;
    resolved?: boolean;
    participant: ParticipantApi;
};
export interface PinAdapter {
    setPinsVisibility(isVisible: boolean): void;
    setActive(isOpen: boolean): void;
    destroy(): void;
    updateAnnotations(annotations: Annotation[]): void;
    removeAnnotationPin(uuid: string): void;
    onPinFixedObserver: Observer;
}
export interface PinCoordinates {
    x: number;
    y: number;
    z?: number;
    type: 'canvas' | 'matterport' | 'threejs' | 'autodesk';
}
export declare enum CommentsSide {
    LEFT = "left",
    RIGHT = "right"
}
export declare enum ButtonLocation {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
export interface CommentsOptions {
    position?: CommentsSide | `${CommentsSide}`;
    buttonLocation?: ButtonLocation | `${ButtonLocation}` | string;
}
