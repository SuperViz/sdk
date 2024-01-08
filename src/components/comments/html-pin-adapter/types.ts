export interface SimpleParticipant {
  name?: string;
  avatar?: string;
}

export interface Simple2DPoint {
  x: number;
  y: number;
}

export interface TemporaryPinData extends Partial<Simple2DPoint> {
  elementId?: string;
}

export type HorizontalSide = 'left' | 'right';

export interface TranslateAndScale {
  scale: number;
  translateX: number;
  translateY: number;
}

export interface HTMLPinOptions {
  dataAttributeName?: string;
}
