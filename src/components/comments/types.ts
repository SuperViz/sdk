import { Observer } from '../../common/utils';

export type Annotation = {
  uuid: string;
  position: string;
  resolved: boolean;
  comments: Comment[];
};

export type Comment = {
  uuid: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;

  resolvable?: boolean;
  resolved?: boolean;
};

export interface PinAdapter {
  setActive(isOpen: boolean): void;
  destroy(): void;
  updateAnnotations(annotations: Annotation[]): void;
  removeAnnotationPin(uuid: string): void;
  onPinFixedObserver: Observer;
}

export interface PinCoordinates {
  x: number;
  y: number;
  type: 'canvas' | 'matterport' | 'threejs' | 'autodesk';
}
