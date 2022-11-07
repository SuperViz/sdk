import { AblyRealtimeService } from '../../realtime';
import { AblySlot } from '../../realtime/ably/types';
import { UserOn3D } from '../users/types';

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

  RealtimeService: AblyRealtimeService;
}

export interface AdapterMethods {
  enableAvatars: () => void;
  disableAvatars: () => void;
  getUsersOn3D: () => UserOn3D[];
}

export type Adapter = {
  setSyncProperty: <T>(name: string, property: T) => void;
  createPointer: (user: UserOn3D) => void;
  destroyPointer: (user: UserOn3D) => void;

  createAvatar: (user: UserOn3D, avatarUrl?: string) => void;
  destroyAvatar: (user: UserOn3D) => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  setRealtimeMethods: (methods: RealtimeAdapterMethods) => void;
};

export interface RealtimeAdapterMethods {
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: (callback: Function) => void;
  unsubscribe: (callback: Function) => void;
  slots: AblySlot[];
}
