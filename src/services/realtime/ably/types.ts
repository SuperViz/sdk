import type Ably from 'ably';

import { DefaultRealtimeMethods } from '../base/types';

export interface AblyRealtime extends DefaultRealtimeMethods {}

export interface AblyParticipants {
  [id: string]: AblyParticipant;
}

export interface AblyParticipant extends Ably.Types.PresenceMessage {}

export interface AblyRealtimeData {
  hostClientId?: string;
  isGridModeEnable?: boolean;
  followParticipantId?: string;
  gather?: boolean;
}

export type AblyTokenCallBack = (
  error: Ably.Types.ErrorInfo | string,
  tokenRequestOrDetails: Ably.Types.TokenDetails | Ably.Types.TokenRequest | string,
) => void;

export interface ParticipantDataInput {
  [key: string]: string | number | Array<unknown> | Object;
}
