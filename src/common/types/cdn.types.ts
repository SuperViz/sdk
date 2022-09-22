import { SuperVizSdk } from '../../services/communicator/types';
import { FrameSize } from '../../services/video-conference-manager/types';

import {
  DeviceEvent,
  MeetingEvent,
  RealtimeEvent,
  MeetingState,
  MeetingConnectionStatus,
} from './events.types';
import { SuperVizSdkOptions } from './sdk-options.types';

export interface SuperVizCdn {
  init: (apiKey: string, options: SuperVizSdkOptions) => Promise<SuperVizSdk>;
  MeetingEvent: typeof MeetingEvent;
  RealtimeEvent: typeof RealtimeEvent;
  FrameSize: typeof FrameSize;
  DeviceEvent: typeof DeviceEvent;
  MeetingState: typeof MeetingState;
  MeetingConnectionStatus: typeof MeetingConnectionStatus;
}
