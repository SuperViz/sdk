import { ObserverHelper } from '@superviz/immersive-core';

import { User } from '../../../common/types/user.types';

export interface DefaultRealtimeService {
  actorObservers: ObserverHelper[];
  actorsObserver: ObserverHelper;
  subscribeToActorsUpdate: Function;
  unsubscribeFromActorsUpdate: Function;
  actorJoinedObserver: ObserverHelper;
  subscribeToActorJoined: Function;
  unsubscribeFromActorJoined: Function;
  actorLeaveObserver: ObserverHelper;
  subscribeToActorLeave: Function;
  unsubscribeFromActorLeave: Function;
  joinRoomObserver: ObserverHelper;
  subscribeToJoinRoom: Function;
  unsubscribeFromJoinRoom: Function;
  reconnectObserver: ObserverHelper;
  subscribeToReconnectUpdate: Function;
  unsubscribeFromReconnectUpdate: Function;
  roomInfoUpdatedObserver: ObserverHelper;
  subscribeToRoomInfoUpdated: Function;
  unsubscribeFromRoomInfoUpdated: Function;
  roomListUpdatedObserver: ObserverHelper;
  subscribeToRoomListUpdated: Function;
  unsubscribeFromRoomListUpdated: Function;
  masterActorObserver: ObserverHelper;
  subscribeToMasterActorUpdate: Function;
  unsubscribeFromMasterActorUpdate: Function;
  realtimeStateObserver: ObserverHelper;
  subscribeToRealtimeState: Function;
  unsubscribeFromRealtimeState: Function;
  syncPropertiesObserver: ObserverHelper;
  subscribeToSyncProperties: Function;
  unsubscribeFromSyncProperties: Function;
  waitForHostObserver: ObserverHelper;
  subscribeToWaitForHost: Function;
  unsubscribeFromWaitForHost: Function;
  kickAllUsersObserver: ObserverHelper;
  subscribeToKickAllUsers: Function;
  unsubscribeFromKickAllUsers: Function;
  authenticationObserver: ObserverHelper;
}

export interface DefaultRealtimeMethods {
  start: (options: StartRealtimeType) => void;
  leave: () => void;
  join: (myActorProperties: any, aditionalRoomProperties: any) => void;
  setSyncProperties: (options: Object) => void;
  setHost: (masterUserId: String) => void;
  setGridMode: (value: boolean) => void;
}

export interface ActorInfo extends User {
  userId: string;
  noSlotRequired?: boolean;
}

export interface StartRealtimeType {
  actorInfo: ActorInfo;
  roomId: string;
  photonAppId?: string;
  apiKey: string;
  shouldKickUsersOnHostLeave: boolean;
}
