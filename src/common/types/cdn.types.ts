import { CommentEvent } from '../..';
import {
  CanvasPin,
  HTMLPin,
  Comments,
  MousePointers,
  Realtime,
  VideoConference,
  WhoIsOnline,
} from '../../components';
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
  ComponentLifeCycleEvent,
  WhoIsOnlineEvent,
} from './events.types';
import { ParticipantType } from './participant.types';
import { SuperVizSdkOptions } from './sdk-options.types';

export interface SuperVizCdn {
  init: (apiKey: string, options: SuperVizSdkOptions) => Promise<LauncherFacade>;
  CommentEvent: typeof CommentEvent;
  MeetingEvent: typeof MeetingEvent;
  RealtimeEvent: typeof RealtimeEvent;
  DeviceEvent: typeof DeviceEvent;
  MeetingState: typeof MeetingState;
  MeetingConnectionStatus: typeof MeetingConnectionStatus;
  MeetingControlsEvent: typeof MeetingControlsEvent;
  ParticipantEvent: typeof ParticipantEvent;
  WhoIsOnlineEvent: typeof WhoIsOnlineEvent;
  ComponentLifeCycleEvent: typeof ComponentLifeCycleEvent;
  FrameEvent: typeof FrameEvent;
  LayoutMode: typeof LayoutMode;
  ParticipantType: typeof ParticipantType;
  LayoutPosition: typeof LayoutPosition;
  CamerasPosition: typeof CamerasPosition;
  VideoConference: typeof VideoConference;
  MousePointers: typeof MousePointers;
  Realtime: typeof Realtime;
  Comments: typeof Comments;
  CanvasPin: typeof CanvasPin;
  HTMLPin: typeof HTMLPin;
  WhoIsOnline: typeof WhoIsOnline;
  RealtimeComponentState: typeof RealtimeComponentState;
  RealtimeComponentEvent: typeof RealtimeComponentEvent;
}
