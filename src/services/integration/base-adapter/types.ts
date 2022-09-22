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
}

export interface AdapterMethods {
  disablePointers: () => void;
  enablePointers: () => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  getUsersOn3D: () => UserOn3D[];
}
