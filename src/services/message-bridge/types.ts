import {
  FrameEvent,
  DeviceEvent,
  MeetingEvent,
  RealtimeEvent,
} from '../../common/types/events.types';
import { Debug } from '../../common/utils/logger';

export interface MessageBridgeOptions {
  contentWindow: Window;
  logger: Debug;
  domains?: Array<string>;
  allowedOrigins?: string;
  sourceBlockList?: Array<string>;
}

export type Message = FrameEvent | DeviceEvent | MeetingEvent | RealtimeEvent | string;
