import { AblyRealtimeService } from '../../realtime';
import { UserOn3D, UserTo3D } from '../users/types';

export interface DefaultAdapterManager {
  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;

  isFollowAvailable: boolean;
  isGatherAvailable: boolean;
  isGoToAvailable: boolean;
}

export interface DefaultAdapterOptions {
  isAvatarsEnabled?: boolean;
  isPointersEnabled?: boolean;

  isFollowAvailable?: boolean;
  isGatherAvailable?: boolean;
  isGoToAvailable?: boolean;

  // Adapter settings
  adapter: Adapter;
  localUser: UserTo3D;
  RealtimeService: AblyRealtimeService;
}

export interface AdapterMethods {
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  getUsersOn3D: () => UserOn3D[];
}

export type Adapter = {
  setSyncProperty: <T>(name: string, property: T) => void;
  createPointer: (user: UserOn3D) => void;
  destroyPointer: (user: UserOn3D) => void;
  createAvatar: (user: UserOn3D) => void;
  destroyAvatar: (user: UserOn3D) => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  enablePointers: () => void;
  disablePointers: () => void;
  init: (methods: RealtimeAdapterMethods, localUser: UserTo3D) => void;
  destroy: () => void;
};

export interface RealtimeAdapterMethods {
  subscribeToActorUpdate: <T>(id: string, callback: Function) => void,
  unsubscribeToActorUpdate: <T>(id: string, callback: Function) => void,
  updateMyProperties: <T> (properties: T) => void;
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: (callback: Function) => void;
  unsubscribe: (callback: Function) => void;
  getUserSlot: (callback: Function) => Number;
}
