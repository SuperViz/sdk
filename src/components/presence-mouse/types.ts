import { Participant } from '../../common/types/participant.types';

export interface ParticipantMouse extends Participant {
  containerId?: string;
  originalHeight: number;
  originalWidth: number;
  slotIndex: number;
  mousePositionX: number;
  mousePositionY: number;
  visible: boolean;
}
