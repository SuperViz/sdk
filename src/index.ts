import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
} from './common/types/events.types';
import { VideoComponent } from './components';
import init from './core';
import './web-components';
import './common/styles/global.css';

export { Participant, Group, Avatar, ParticipantType } from './common/types/participant.types';
export { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
export { BrowserService } from './services/browser';
export { BrowserStats } from './services/browser/types';

export { RealtimeMessage } from './services/realtime/ably/types';
export { LauncherFacade } from './core/launcher/types';

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
