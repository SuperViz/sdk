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
  instance: Instance;

  // @TODO - Add generic interface to Realtime
  RealtimeService: PhotonRealtimeService;
}

export interface AdapterMethods {
  disablePointers: () => void;
  enablePointers: () => void;
  enableAvatars: () => void;
  disableAvatars: () => void;
  getUsersOn3D: () => UserOn3D[];
}

// @TODO - Whats is a adapter?
// @NOTE - Add adapters to the type when they are developed.
export type Adapter = any; // MatteportAdapter | ForgeAdapter | ThreeJsAdapter | IFCAdapter

// @TODO - Whats is a instance?
export type Instance = any;
