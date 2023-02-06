import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
} from './common/types/events.types';
import { Participant, Group, Avatar } from './common/types/participant.types';
import { SuperVizSdkOptions } from './common/types/sdk-options.types';
import { logger } from './common/utils';
import ApiService from './services/api';
import AuthService from './services/auth-service';
import { BrowserService } from './services/browser';
import { BrowserStats } from './services/browser/types';
import Communicator from './services/communicator';
import { SuperVizSdk, PluginOptions } from './services/communicator/types';
import { PluginMethods, Plugin } from './services/integration/base-plugin/types';
import { ParticipantOn3D, ParticipantTo3D } from './services/integration/participants/types';
import { FrameSize } from './services/video-conference-manager/types';

const validateOptions = ({ group, participant, roomId }: SuperVizSdkOptions) => {
  if (!group || !group.name || !group.id) {
    throw new Error('group fields is required');
  }

  if (!participant || !participant.id) {
    throw new Error('participant fields is required');
  }

  if (!roomId) {
    throw new Error('room id is required');
  }
};

const init = async (apiKey: string, options: SuperVizSdkOptions) => {
  validateOptions(options);

  if (options.debug) {
    logger.enable('@superviz/*');
  }

  const isValid = await AuthService(apiKey);

  if (!isValid) {
    throw new Error('Failed to validate API key');
  }

  const environment = await ApiService.fetchConfig(apiKey);

  if (!environment || !environment.ablyKey) {
    throw new Error('Failed to load configuration from server');
  }

  const { ablyKey } = environment;
  return Communicator(Object.assign({}, options, { apiKey, ablyKey }));
};

if (window) {
  window.SuperVizSdk = {
    init,
    MeetingEvent,
    FrameSize,
    DeviceEvent,
    RealtimeEvent,
    MeetingState,
    MeetingConnectionStatus,
    MeetingControlsEvent,
  };
}

export default { init };
export {
  MeetingEvent,
  RealtimeEvent,
  FrameSize,
  SuperVizSdkOptions,
  DeviceEvent,
  SuperVizSdk,
  MeetingState,
  Participant,
  ParticipantType
  Group,
  MeetingConnectionStatus,
  PluginMethods,
  PluginOptions,
  Plugin,
  ParticipantOn3D,
  ParticipantTo3D,
  BrowserService,
  BrowserStats,
  Avatar,
  MeetingControlsEvent,
};
