import PhotonRealtimeService from './photon';
import AblyRealtimeService from './ably';
import { ObserverHelper, RealtimeStateTypes } from '@superviz/immersive-core';
import { StartRealtimeType } from './types';

export default class RealtimeService {
  constructor() {}

  start({}: StartRealtimeType): void {}
  leave(): void {}
  join(myActorProperties: any, aditionalRoomProperties: any = {}): void {}
  setSyncProperties({}: Object): void {}
  setMasterActor(masterUserId: String): void {}
  setGridMode(value: boolean): void {}

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
