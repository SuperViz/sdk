import SdkFacade from './SdkFacade';
import { logger } from './common/utils';
import AuthService from './service/AuthService';
import ApiService from './service/api/ApiService';
import Communicator from './service/communicator/Communicator';

interface IConfig {
  debug?: boolean;
}

export default async (apiKey: string, options: IConfig = {}) => {
  if (options.debug) {
    logger.enable();
  }

  const isValid = await AuthService(apiKey);

  if (!isValid) {
    throw new Error('Failed to validate API key');
  }

  const environment = await ApiService.fetchConfig(apiKey);

  if (!environment || !environment.photonAppId) {
    throw new Error('Failed to load configuration from server');
  }

  return new SdkFacade(
    new Communicator(
      Object.assign({}, options, {
        apiKey,
      }),
    ),
  );
};
