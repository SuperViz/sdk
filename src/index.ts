import { MessageTypes, DevicesMessageTypes } from './common/types/messages.types';
import { SuperVizSdkOptions } from './common/types/sdk-options.types';
import { logger } from './common/utils';
import ApiService from './services/api';
import AuthService from './services/auth-service';
import Communicator from './services/communicator';
import { CommunicatorFacade } from './services/communicator/types';
import { FrameSizeType } from './services/video-conference-manager/types';

const validateOptions = ({ organization, user, roomId }: SuperVizSdkOptions) => {
  if (!organization || !organization.name || !organization.id) {
    throw new Error('organization fields is required');
  }

  if (!user || !user.id) {
    throw new Error('user fields is required');
  }

  if (!roomId) {
    throw new Error('room id is required');
  }
};

export default async (apiKey: string, options: SuperVizSdkOptions) => {
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

export { MessageTypes, FrameSizeType, SuperVizSdkOptions, DevicesMessageTypes, CommunicatorFacade };
