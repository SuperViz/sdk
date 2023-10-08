import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
} from './common/types/events.types';
import { VideoComponent, PresenceMouseComponent, Realtime, CommentsComponent } from './components';
import init from './core';
import './web-components';
import './common/styles/global.css';

export { PinMode } from './web-components/comments/components/types';

export { Participant, Group, Avatar, ParticipantType } from './common/types/participant.types';
export { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
export { BrowserService } from './services/browser';
export { BrowserStats } from './services/browser/types';

export { RealtimeMessage } from './services/realtime/ably/types';
export { LauncherFacade } from './core/launcher/types';
export { Observer } from './common/utils/observer';
export { Annotation, Comment, PinAdapter, PinCoordinates } from './components/comments/types';

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
    VideoComponent,
    PresenceMouseComponent,
    Realtime,
    CommentsComponent,
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
};

export default init;
