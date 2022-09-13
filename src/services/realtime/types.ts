import { User } from '../../common/types/user.types';
import AblyRealtimeService from './ably';
import PhotonRealtimeService from './photon';

export interface ActorInfoType extends User {
  userId: string;
}

export interface StartRealtimeType {
  actorInfo: ActorInfoType;
  roomId: string;
  photonAppId?: string;
  apiKey: string;
  shouldKickUsersOnHostLeave: boolean;
}
