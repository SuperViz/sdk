import SdkFacade from './SdkFacade';
import { MessageTypes } from './common/types/messages.types';
import { SuperVizSdkOptions } from './common/types/sdk-options.types';
import { logger } from './common/utils';
import AuthService from './service/AuthService';
import { FrameSizeType } from './service/VideoConferenceManager.types';
import ApiService from './service/api/ApiService';
import Communicator from './service/communicator/Communicator';

export default async (apiKey: string, options: SuperVizSdkOptions) => {
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
  const CommunicatorService = new Communicator(Object.assign({}, options, { apiKey, photonAppId }));

  return new SdkFacade(CommunicatorService);
};

export { MessageTypes, FrameSizeType, SuperVizSdkOptions };
