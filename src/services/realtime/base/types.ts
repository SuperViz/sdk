import { Participant } from '../../../common/types/participant.types';
import { Observer } from '../../../common/utils';
import { ComponentNames } from '../../../components/types';
import { DrawingData } from '../../video-conference-manager/types';

export interface DefaultRealtimeService {
  participantObservers: Observer[];
  participantsObserver: Observer;
  participantJoinedObserver: Observer;
  participantLeaveObserver: Observer;
  reconnectObserver: Observer;
  roomInfoUpdatedObserver: Observer;
  roomListUpdatedObserver: Observer;
  realtimeStateObserver: Observer;
  kickAllParticipantsObserver: Observer;
  kickParticipantObserver: Observer;
  authenticationObserver: Observer;
}

export interface DefaultRealtimeMethods {
  start: (options: StartRealtimeType) => void;
  leave: () => void;
  join: (participant?: Participant) => void;
  setSyncProperty: <T>(name: string, property: T) => void;
  setHost: (masterParticipantId: string) => void;
  setGridMode: (value: boolean) => void;
  setDrawing: (drawing: DrawingData) => void;
}

export interface RealtimeJoinOptions {
  isAudience: boolean;
  name: string;
}

export interface ParticipantInfo extends Partial<Participant> {
  participantId?: string;
  slotIndex?: number;
  activeComponents?: ComponentNames[];
  // @NOTE - this is a hack to make the participant info work with the 3D avatar
  [key: string]: unknown;
}

export interface StartRealtimeType {
  participant: Participant;
  roomId: string;
  apiKey: string;
}

export interface SyncProperty {
  [key: string]: unknown;
}

export interface SlotColor {
  color: string;
  name: string;
}
