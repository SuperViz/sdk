import { AblyRealtimeService } from '../../realtime';
import { ParticipantOn3D, ParticipantTo3D } from '../participants/types';

export interface DefaultPluginManager {
  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
}

export interface DefaultPluginOptions {
  isAvatarsEnabled?: boolean;
  isPointersEnabled?: boolean;
  isNameEnabled?: boolean;
  renderLocalAvatar?: boolean;

  // Plugin settings
  plugin: Plugin;
  localParticipant: ParticipantTo3D;
  RealtimeService: AblyRealtimeService;
}

export interface PluginMethods {
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  getParticipantsOn3D: () => ParticipantOn3D[];
  getAvatars: () => {};
}

export type Plugin = {
  setSyncProperty: <T>(name: string, property: T) => void;
  createPointer: (participant: ParticipantOn3D) => void;
  destroyPointer: (participant: ParticipantOn3D) => void;
  createAvatar: (participant: ParticipantOn3D) => void;
  createName: (participant: ParticipantOn3D, model) => void;
  destroyAvatar: (participant: ParticipantOn3D) => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  goToParticipant: (participantId: string) => void;
  gather: (hostId: string) => void;
  init: (methods: RealtimePluginMethods, localParticipant: ParticipantTo3D) => void;
  destroy: () => void;
  getAvatars: () => {};
};

export interface RealtimePluginMethods {
  subscribeToParticipantUpdate: (id: string, callback: Function) => void;
  unsubscribeToParticipantUpdate: (id: string, callback: Function) => void;
  updateMyProperties: <T>(properties: T) => void;
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: (callback: Function) => void;
  unsubscribe: (callback: Function) => void;
  getParticipantSlot: (participantId: string) => number;
}
