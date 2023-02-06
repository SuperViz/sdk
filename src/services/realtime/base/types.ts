import { ObserverHelper } from '@superviz/immersive-core';

import { Participant } from '../../../common/types/participant.types';

export interface DefaultRealtimeService {
  participantObservers: ObserverHelper[];
  participantsObserver: ObserverHelper;
  participantJoinedObserver: ObserverHelper;
  participantLeaveObserver: ObserverHelper;
  joinRoomObserver: ObserverHelper;
  reconnectObserver: ObserverHelper;
  roomInfoUpdatedObserver: ObserverHelper;
  roomListUpdatedObserver: ObserverHelper;
  masterParticipantObserver: ObserverHelper;
  realtimeStateObserver: ObserverHelper;
  syncPropertiesObserver: ObserverHelper;
  kickAllParticipantsObserver: ObserverHelper;
  authenticationObserver: ObserverHelper;
}

export interface DefaultRealtimeMethods {
  start: (options: StartRealtimeType) => void;
  leave: () => void;
  join: (myParticipantProperties: any, additionalRoomProperties: any) => void;
  setSyncProperty: <T>(name: string, property: T) => void;
  setHost: (masterParticipantId: String) => void;
  setGridMode: (value: boolean) => void;
}

export interface RealtimeJoinOptions {
  isAudience: boolean;
  name: string;
}

export interface ParticipantInfo extends Participant {
  participantId?: string;
  slotIndex?: number;
}

export interface StartRealtimeType {
  initialParticipantData: ParticipantInfo;
  roomId: string;
  apiKey: string;
  shouldKickParticipantsOnHostLeave: boolean;
  isBroadcast: boolean;
}

export interface SyncProperty {
  [key: string]: unknown;
}

export interface SlotColor {
  color: string;
  name: string;
}
