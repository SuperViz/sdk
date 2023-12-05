import { Participant } from '../../common/types/participant.types';
export interface ParticipantMouse extends Participant {
    slotIndex: number;
    x: number;
    y: number;
    visible: boolean;
}
