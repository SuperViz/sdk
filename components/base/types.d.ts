import { Group, Participant } from '../../common/types/participant.types';
import { Configuration } from '../../services/config/types';
import { AblyRealtimeService } from '../../services/realtime';
export interface DefaultAttachComponentOptions {
    realtime: AblyRealtimeService;
    localParticipant: Participant;
    group: Group;
    config: Configuration;
}
