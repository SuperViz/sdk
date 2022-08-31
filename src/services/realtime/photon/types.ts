import { RealtimeStateTypes } from '@superviz/immersive-core';

import { UserType } from '../../../common/types/user.types';

export enum PHOTON_REGIONS {
  cn = 'cn',
  ap = 'asia',
  eu = 'eu',
  default = 'us',
}

export const REALTIME_STATE = RealtimeStateTypes;

export enum PHOTON_STATE_TO_REALTIME_STATE {
  Error = REALTIME_STATE.FAILED,
  Uninitialized = REALTIME_STATE.DISCONNECTED,
  ConnectingToNameServer = REALTIME_STATE.INITIALIZING,
  ConnectedToNameServer = REALTIME_STATE.INITIALIZING,
  ConnectingToMasterserver = REALTIME_STATE.INITIALIZING,
  ConnectedToMaster = REALTIME_STATE.INITIALIZING,
  JoinedLobby = REALTIME_STATE.READY_TO_JOIN,
  ConnectingToGameserver = REALTIME_STATE.CONNECTING,
  ConnectedToGameserver = REALTIME_STATE.CONNECTING,
  Joined = REALTIME_STATE.CONNECTED,
  Disconnected = REALTIME_STATE.DISCONNECTED,
}

export enum PHOTON_FAILED_REASONS {
  LOBBY_SERVER_NOT_REACHEABLE = 1,
  LOBBY_CONNECTION_ERROR = 2,
  ROOM_CONNECTION_FAILED = 3,
  LOST_CONNECTION = 4,
  UNABLE_TO_LOAD_ROOM_INFO = 5,
}

export enum PHOTON_ERROR_TO_FAILED_REASONS {
  MasterError = PHOTON_FAILED_REASONS.LOST_CONNECTION,
  MasterConnectFailed = PHOTON_FAILED_REASONS.LOBBY_CONNECTION_ERROR,
  MasterConnectClosed = PHOTON_FAILED_REASONS.LOBBY_CONNECTION_ERROR,
  MasterTimeout = PHOTON_FAILED_REASONS.LOBBY_CONNECTION_ERROR,
  MasterEncryptionEstablishError = PHOTON_FAILED_REASONS.LOBBY_CONNECTION_ERROR,
  MasterAuthenticationFailed = PHOTON_FAILED_REASONS.LOBBY_CONNECTION_ERROR,
  GameError = PHOTON_FAILED_REASONS.LOST_CONNECTION,
  GameConnectFailed = PHOTON_FAILED_REASONS.LOST_CONNECTION,
  GameConnectClosed = PHOTON_FAILED_REASONS.LOST_CONNECTION,
  GameTimeout = PHOTON_FAILED_REASONS.LOST_CONNECTION,
  GameEncryptionEstablishError = PHOTON_FAILED_REASONS.ROOM_CONNECTION_FAILED,
  GameAuthenticationFailed = PHOTON_FAILED_REASONS.ROOM_CONNECTION_FAILED,
  NameServerError = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
  NameServerConnectFailed = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
  NameServerConnectClosed = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
  NameServerTimeout = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
  NameServerEncryptionEstablishError = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
  NameServerAuthenticationFailed = PHOTON_FAILED_REASONS.LOBBY_SERVER_NOT_REACHEABLE,
}

export interface ActorInfoType extends UserType {
  userId: string;
}

export interface StartRealtimeType {
  actorInfo: ActorInfoType;
  roomId: string;
  photonAppId: string;
  apiKey: string;
  shouldKickUsersOnHostLeave: boolean;
}
