import { CanvasPin, Comments, MousePointers, Realtime, VideoComponent } from '../../components';
import { RealtimeComponentEvent, RealtimeComponentState } from '../../components/realtime/types';
import { LauncherFacade } from '../../core/launcher/types';
import {
  CamerasPosition,
  LayoutMode,
  LayoutPosition,
} from '../../services/video-conference-manager/types';

import {
  DeviceEvent,
  MeetingEvent,
  RealtimeEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
  FrameEvent,
} from './events.types';
import { ParticipantType } from './participant.types';
import { SuperVizSdkOptions } from './sdk-options.types';

export interface SuperVizCdn {
  init: (apiKey: string, options: SuperVizSdkOptions) => Promise<LauncherFacade>;
  MeetingEvent: typeof MeetingEvent;
  RealtimeEvent: typeof RealtimeEvent;
  DeviceEvent: typeof DeviceEvent;
  MeetingState: typeof MeetingState;
  MeetingConnectionStatus: typeof MeetingConnectionStatus;
  MeetingControlsEvent: typeof MeetingControlsEvent;
  ParticipantEvent: typeof ParticipantEvent;
  FrameEvent: typeof FrameEvent;
  LayoutMode: typeof LayoutMode;
  ParticipantType: typeof ParticipantType;
  LayoutPosition: typeof LayoutPosition;
  CamerasPosition: typeof CamerasPosition;
  VideoComponent: typeof VideoComponent;
  MousePointers: typeof MousePointers;
  Realtime: typeof Realtime;
  Comments: typeof Comments;
  CanvasPin: typeof CanvasPin;
  RealtimeComponentState: typeof RealtimeComponentState;
  RealtimeComponentEvent: typeof RealtimeComponentEvent;
}
