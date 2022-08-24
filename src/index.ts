import SdkFacade from './SdkFacade';
import {
  MessageTypes,
  DevicesMessageTypes,
} from './common/types/messages.types';
import { SuperVizSdkOptions } from './common/types/sdk-options.types';
import { logger } from './common/utils';
import AuthService from './service/AuthService';
import { FrameSizeType } from './service/VideoConferenceManager.types';
import ApiService from './service/api/ApiService';
import Communicator from './service/communicator/Communicator';

const validateOptions = ({
  organization,
  user,
  roomId,
}: SuperVizSdkOptions) => {
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
  const CommunicatorService = new Communicator(
    Object.assign({}, options, { apiKey, photonAppId }),
  );

  return new SdkFacade(CommunicatorService);
};

export { MessageTypes, FrameSizeType, SuperVizSdkOptions, DevicesMessageTypes };
