import { Participant } from '../../common/types/participant.types';
import { AblyRealtimeService } from '../../services/realtime';
export interface DefaultAttachComponentOptions {
    realtime: AblyRealtimeService;
    localParticipant: Participant;
}
