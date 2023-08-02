import { Participant } from '../../common/types/participant.types';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyRealtime } from '../../services/realtime/ably/types';

export interface DefaultAttachComponentOptions {
  realtime: AblyRealtimeService;
  localParticipant: Participant;
}
