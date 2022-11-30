import { ObserverHelper } from '@superviz/immersive-core';

import { Avatar, User } from '../../../common/types/user.types';

export interface DefaultRealtimeService {
  actorObservers: ObserverHelper[];
  actorsObserver: ObserverHelper;
  actorJoinedObserver: ObserverHelper;
  actorLeaveObserver: ObserverHelper;
  joinRoomObserver: ObserverHelper;
  reconnectObserver: ObserverHelper;
  roomInfoUpdatedObserver: ObserverHelper;
  roomListUpdatedObserver: ObserverHelper;
  masterActorObserver: ObserverHelper;
  realtimeStateObserver: ObserverHelper;
  syncPropertiesObserver: ObserverHelper;
  kickAllUsersObserver: ObserverHelper;
  authenticationObserver: ObserverHelper;
}

export interface DefaultRealtimeMethods {
  start: (options: StartRealtimeType) => void;
  leave: () => void;
  join: (myActorProperties: any, aditionalRoomProperties: any) => void;
  setSyncProperty: <T>(name: string, property: T) => void;
  setHost: (masterUserId: String) => void;
  setGridMode: (value: boolean) => void;
}

export interface RealtimeJoinOptions {
  isHostCandidate: boolean;
  name: string;
}

export interface ActorInfo extends User {
  userId: string;
  noSlotRequired?: boolean;
  slotIndex?: number;
}

export interface StartRealtimeType {
  initialActorData: ActorInfo;
  roomId: string;
  apiKey: string;
  shouldKickUsersOnHostLeave: boolean;
}

export interface SyncProperty {
  [key: string]: unknown;
}

export interface SlotColor {
  color: string;
  name: string;
}
