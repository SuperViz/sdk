import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { DefaultRealtimeMethods, DefaultRealtimeService } from '../base/types';

export interface AblyRealtime extends DefaultRealtimeMethods {}

export enum ABLY_CONNECTION_STATE_TO_REALTIME_STATE {
  failed = RealtimeStateTypes.FAILED,
  closed = RealtimeStateTypes.DISCONNECTED,
  initialized = RealtimeStateTypes.DISCONNECTED,
  connecting = RealtimeStateTypes.DISCONNECTED,
  connected = RealtimeStateTypes.CONNECTED,
  disconnected = RealtimeStateTypes.DISCONNECTED,
  closing = RealtimeStateTypes.DISCONNECTED,
  suspended = RealtimeStateTypes.DISCONNECTED,
  // update = ?????
}
export enum ABLY_CHANNEL_STATE_TO_REALTIME_STATE {
  initialized = RealtimeStateTypes.CONNECTING,
  attaching = RealtimeStateTypes.CONNECTING,
  attached = RealtimeStateTypes.JOINED,
  detaching = RealtimeStateTypes.DISCONNECTED,
  detached = RealtimeStateTypes.READY_TO_JOIN,
  failed = RealtimeStateTypes.FAILED,
  suspended = RealtimeStateTypes.RETRYING,
}
