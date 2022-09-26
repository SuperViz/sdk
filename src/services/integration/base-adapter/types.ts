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

export enum Adapters {
  MATTERPORT = 'MATTERPORT',
  FORGE = 'FORGE',
  THREEJS = 'THREEJS',
}

export type AdapterType = keyof typeof Adapters;

// @NOTE - the instance type is unknown, the client can send anything.
export type Instance = any;

// @TODO - So far the adapter type is unknown, add to the type when ready.
export type Adapter = any; // MatterportAdapter | ForgeAdapter | ThreeJsAdapter;
