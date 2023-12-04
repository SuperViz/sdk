import { Participant } from '../../common/types/participant.types';

export interface ParticipantMouse extends Participant {
  slotIndex: number;
  mousePositionX: number;
  mousePositionY: number;
  visible: boolean;
}
