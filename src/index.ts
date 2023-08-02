import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  ParticipantEvent,
} from './common/types/events.types';
import init from './core';
import './web-components';

export { Participant, Group, Avatar, ParticipantType } from './common/types/participant.types';
export { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
export { BrowserService } from './services/browser';
export { BrowserStats } from './services/browser/types';
export { PluginOptions } from './services/communicator/types';
export { PluginMethods, Plugin } from './services/integration/base-plugin/types';
export { ParticipantOn3D, ParticipantTo3D } from './services/integration/participants/types';
export { RealtimeMessage } from './services/realtime/ably/types';
export { SuperVizSdk } from './types';

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
