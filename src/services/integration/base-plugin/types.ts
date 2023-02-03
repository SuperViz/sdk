import { AblyRealtimeService } from '../../realtime';
import { UserOn3D, UserTo3D } from '../users/types';

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
  localUser: UserTo3D;
  RealtimeService: AblyRealtimeService;
}

export interface PluginMethods {
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  getUsersOn3D: () => UserOn3D[];
  getAvatars: () => {};
}

export type Plugin = {
  setSyncProperty: <T>(name: string, property: T) => void;
  createPointer: (user: UserOn3D) => void;
  destroyPointer: (user: UserOn3D) => void;
  createAvatar: (user: UserOn3D) => void;
  createName: (user: UserOn3D, model) => void;
  destroyAvatar: (user: UserOn3D) => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  goToUser: (userId: string) => void;
  gather: (hostId: string) => void;
  init: (methods: RealtimePluginMethods, localUser: UserTo3D) => void;
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
  getUserSlot: (userId: string) => number;
}
