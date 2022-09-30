import { User } from '../../common/types/user.types';

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
