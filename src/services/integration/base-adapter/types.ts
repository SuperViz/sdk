import PhotonRealtimeService from '../../realtime/photon';
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

  // @TODO - Add generic interface to Realtime
  RealtimeService: PhotonRealtimeService;
}

export interface AdapterMethods {
  enableAvatars: () => void;
  disableAvatars: () => void;
  getUsersOn3D: () => UserOn3D[];
}

export type Adapter = {
  createPointer: (user: UserOn3D) => void;
  destroyPointer: (user: UserOn3D) => void;

  createAvatar: (user: UserOn3D, avatarUrl?: string) => void;
  destroyAvatar: (user: UserOn3D) => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
};
