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

  mentions: CommentMention[]
};

export type CommentMention = {
  userId: string
  name: string
}

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

// @NOTE - this is used for 3d annotations
export interface PinCoordinatesIn3D {
  position: PinCoordinates;
  camera: any;
}

export type AnnotationPositionInfo = PinCoordinates | PinCoordinatesIn3D;

export enum CommentsSide {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ButtonLocation {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export interface CommentsOptions {
  position?: CommentsSide | `${CommentsSide}`;
  buttonLocation?: ButtonLocation | `${ButtonLocation}` | string;
}
