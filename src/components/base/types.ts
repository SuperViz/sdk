import { Participant } from '../../common/types/participant.types';
import { AblyRealtime } from '../../services/realtime/ably/types';

export interface DefaultAttachComponentOptions {
  realtime: AblyRealtime;
  localParticipant: Participant;
}
