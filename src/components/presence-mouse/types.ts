import { Participant } from '../../common/types/participant.types';

export interface ParticipantMouse extends Participant {
  slotIndex: number;
  x: number;
  y: number;
  visible: boolean;
}

export interface PresenceMouseProps {
  onGoToPin?: (position: { x: number; y: number }) => void;
}
