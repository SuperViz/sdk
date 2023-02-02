import type Ably from 'ably';

import { DefaultRealtimeMethods } from '../base/types';

export interface AblyRealtime extends DefaultRealtimeMethods {}

export interface AblyActors {
  [id: string]: AblyActor;
}

export interface AblyActor extends Ably.Types.PresenceMessage {}

export interface AblyRealtimeData {
  hostClientId?: string;
  isGridModeEnable?: boolean;
  followUserId?: string | null;
  gather?: boolean;
}

export type AblyTokenCallBack = (
  error: Ably.Types.ErrorInfo | string,
  tokenRequestOrDetails: Ably.Types.TokenDetails | Ably.Types.TokenRequest | string,
) => void;

export interface UserDataInput {
  [key: string]: string | number | Array<unknown> | Object;
}
