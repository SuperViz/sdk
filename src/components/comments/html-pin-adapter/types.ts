export interface CanvasPinAdapterProps {
  onGoToPin?: (position: { x: number; y: number }) => void;
}

export interface SimpleParticipant {
  name?: string;
  avatar?: string;
}
