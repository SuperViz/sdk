export interface CanvasPinAdapterProps {
  onGoToPin?: (position: { x: number; y: number }) => void;
}

export interface SimpleParticipant {
  name?: string;
  avatar?: string;
}

export interface Simple2DPoint {
  x: number;
  y: number;
}

export interface TemporaryPinData extends Simple2DPoint {
  elementId: string;
}

export type HorizontalSide = 'left' | 'right';
