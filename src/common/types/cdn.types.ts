import { CommunicatorFacade } from '../../services/communicator/types';
import { FrameSize } from '../../services/video-conference-manager/types';

import { DeviceEvent, MeetingEvent, RealtimeEvent, MeetingState } from './events.types';
import { SuperVizSdkOptions } from './sdk-options.types';

export interface SuperVizCdn {
  init: (apiKey: string, options: SuperVizSdkOptions) => Promise<CommunicatorFacade>;
  MeetingEvent: typeof MeetingEvent;
  RealtimeEvent: typeof RealtimeEvent;
  FrameSize: typeof FrameSize;
  DeviceEvent: typeof DeviceEvent;
  MeetingState: typeof MeetingState;
}
