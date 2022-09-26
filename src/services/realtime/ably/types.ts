import { RealtimeStateTypes } from '../../../common/types/realtime.types';

export const REALTIME_STATE = RealtimeStateTypes;

/*
ABLY
var ConnectionEvents = [
  'initialized',
  'connecting',
  'connected',
  'disconnected',
  'suspended',
  'closing',
  'closed',
  'failed',
  'update'
]
var ChannelStates = [
  'initialized',
  'attaching',
  'attached',
  'detaching',
  'detached',
  'failed',
  'suspended'
]
*/

export enum ABLY_CONNECTION_STATE_TO_REALTIME_STATE {
  failed = REALTIME_STATE.FAILED,
  closed = REALTIME_STATE.DISCONNECTED,
  initialized = REALTIME_STATE.DISCONNECTED,
  connecting = REALTIME_STATE.DISCONNECTED,
  connected = REALTIME_STATE.CONNECTED,
  disconnected = REALTIME_STATE.DISCONNECTED,
  closing = REALTIME_STATE.DISCONNECTED,
  suspended = REALTIME_STATE.DISCONNECTED,
  // update = ?????
}
export enum ABLY_CHANNEL_STATE_TO_REALTIME_STATE {
  initialized = REALTIME_STATE.CONNECTING,
  attaching = REALTIME_STATE.CONNECTING,
  attached = REALTIME_STATE.JOINED,
  detaching = REALTIME_STATE.DISCONNECTED,
  detached = REALTIME_STATE.READY_TO_JOIN,
  failed = REALTIME_STATE.FAILED,
  suspended = REALTIME_STATE.RETRYING,
}
