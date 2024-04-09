import type Ably from 'ably';

import { TranscriptState } from '../../../common/types/events.types';
import { DrawingData } from '../../video-conference-manager/types';
import { DefaultRealtimeMethods } from '../base/types';

export interface AblyRealtime extends DefaultRealtimeMethods {}

export interface AblyParticipant {
  action: Ably.Types.PresenceAction;
  clientId: string;
  connectionId: string;
  data: any;
  encoding: string;
  id: string;
  timestamp: number;
  extras: any;
}

export interface AblyRealtimeData {
  hostClientId?: string;
  isGridModeEnable?: boolean;
  followParticipantId?: string;
  gather?: boolean;
  drawing?: DrawingData;
  kickParticipant?: AblyParticipant;
  transcript?: TranscriptState;
}

export type AblyTokenCallBack = (
  error: Ably.Types.ErrorInfo | string,
  tokenRequestOrDetails: Ably.Types.TokenDetails | Ably.Types.TokenRequest | string,
) => void;

export interface ParticipantDataInput {
  [key: string]: string | number | Array<unknown> | Object;
}
