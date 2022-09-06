import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
} from './common/types/events.types';
import { SuperVizSdkOptions } from './common/types/sdk-options.types';
import { User, UserGroup } from './common/types/user.types';
import { logger } from './common/utils';
import ApiService from './services/api';
import AuthService from './services/auth-service';
import Communicator from './services/communicator';
import { CommunicatorFacade } from './services/communicator/types';
import { FrameSize } from './services/video-conference-manager/types';

const validateOptions = ({ userGroup, user, roomId }: SuperVizSdkOptions) => {
  if (!userGroup || !userGroup.name || !userGroup.id) {
    throw new Error('userGroup fields is required');
  }

  if (!user || !user.id) {
    throw new Error('user fields is required');
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

  if (!environment || !environment.photonAppId) {
    throw new Error('Failed to load configuration from server');
  }

  const { photonAppId } = environment;
  return Communicator(Object.assign({}, options, { apiKey, photonAppId }));
};

if (window) {
  window.SuperVizSdk = {
    init,
    MeetingEvent,
    FrameSize,
    DeviceEvent,
    RealtimeEvent,
    MeetingState,
  };
}

export default { init };
export {
  MeetingEvent,
  RealtimeEvent,
  FrameSize,
  SuperVizSdkOptions,
  DeviceEvent,
  CommunicatorFacade,
  MeetingState,
  User,
  UserGroup,
};
