import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
  FrameEvent,
} from './common/types/events.types';
import { ParticipantType } from './common/types/participant.types';
import { VideoComponent, MousePointers, Realtime, Comments, CanvasPin } from './components';
import { RealtimeComponentEvent, RealtimeComponentState } from './components/realtime/types';
import init from './core';
import './web-components';
import './common/styles/global.css';
import {
  CamerasPosition,
  LayoutMode,
  LayoutPosition,
} from './services/video-conference-manager/types';

export { PinMode } from './web-components/comments/components/types';

export { Participant, Group, Avatar } from './common/types/participant.types';
export { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
export { BrowserService } from './services/browser';
export { BrowserStats } from './services/browser/types';

export { RealtimeMessage } from './services/realtime/ably/types';
export { LauncherFacade } from './core/launcher/types';
export { Observer } from './common/utils/observer';
export {
  Annotation,
  Comment,
  PinAdapter,
  PinCoordinates,
  AnnotationPositionInfo,
} from './components/comments/types';

if (window) {
  window.SuperVizSdk = {
    init,
    MeetingEvent,
    DeviceEvent,
    RealtimeEvent,
    MeetingState,
    MeetingConnectionStatus,
    MeetingControlsEvent,
    ParticipantEvent,
    FrameEvent,
    LayoutMode,
    VideoComponent,
    MousePointers,
    Realtime,
    Comments,
    CanvasPin,
    ParticipantType,
    LayoutPosition,
    CamerasPosition,
    RealtimeComponentState,
    RealtimeComponentEvent,
  };
}

export {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
  FrameEvent,
  LayoutMode,
  ParticipantType,
  LayoutPosition,
  CamerasPosition,
  RealtimeComponentState,
  RealtimeComponentEvent,
};

export default init;
