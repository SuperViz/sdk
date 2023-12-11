import { Participant } from '../../common/types/participant.types';
export interface ParticipantMouse extends Participant {
    slotIndex: number;
    x: number;
    y: number;
    visible: boolean;
}
export interface PresenceMouseProps {
    onGoToPresence?: (position: {
        x: number;
        y: number;
    }) => void;
}
