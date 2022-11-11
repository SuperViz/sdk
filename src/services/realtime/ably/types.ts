import type Ably from 'ably';

import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { DefaultRealtimeMethods, SyncProperty } from '../base/types';

export interface AblyRealtime extends DefaultRealtimeMethods {}

export interface AblyActors {
  [id: string]: AblyActor;
}

export interface AblyActor extends Ably.Types.PresenceMessage {
}

export interface AblyRealtimeData {
  hostClientId?: string;
  isGridModeEnable?: boolean;
}

export type AblyTokenCallBack = (
  error: Ably.Types.ErrorInfo | string,
  tokenRequestOrDetails: Ably.Types.TokenDetails | Ably.Types.TokenRequest | string,
) => void;
