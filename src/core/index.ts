import { debug } from 'debug';

import { ParticipantType } from '../common/types/participant.types';
import { SuperVizSdkOptions } from '../common/types/sdk-options.types';
import ApiService from '../services/api';
import AuthService from '../services/auth-service';
import config from '../services/config';
import RemoteConfigService from '../services/remote-config-service';

import LauncherFacade from './launcher';
import { LauncherFacade as LauncherFacadeType } from './launcher/types';

/**
 * @function validateOptions
 * @description Validate the options passed to the SDK
 * @param {SuperVizSdkOptions} param
 * @returns {void}
 */
const validateOptions = ({ group, participant, roomId }: SuperVizSdkOptions): void => {
  if (!group || !group.name || !group.id) {
    throw new Error('Group fields is required');
  }

  if (!participant || !participant.id || !participant.name) {
    throw new Error('Participant name and id is required');
  }

  if (!roomId) {
    throw new Error('Room id is required');
  }
};

/**
 * @function init
 * @description Initialize the SDK
 * @param apiKey - API key
 * @param options - SDK options
 * @returns {LauncherFacadeType}
 */
const init = async (apiKey: string, options: SuperVizSdkOptions): Promise<LauncherFacadeType> => {
  const validApiKey = apiKey && apiKey.trim();

  if (!validApiKey) throw new Error('API key is required');

  if (!options) throw new Error('Options is required');

  validateOptions(options);

  if (options.debug) {
    debug.enable('*');
  } else {
    debug.disable();
  }

  const { apiUrl, conferenceLayerUrl } = await RemoteConfigService.getRemoteConfig(
    options.environment,
  );

  const isValid = await AuthService(apiUrl, apiKey);

  if (!isValid) {
    throw new Error('Failed to validate API key');
  }

  const environment = await ApiService.fetchConfig(apiUrl, apiKey);
  const limits = await ApiService.fetchLimits(apiUrl, apiKey);
  const waterMark = await ApiService.fetchWaterMark(apiUrl, apiKey);

  if (!environment || !environment.ablyKey) {
    throw new Error('Failed to load configuration from server');
  }

  const { ablyKey } = environment;

  config.setConfig({
    apiUrl,
    ablyKey,
    apiKey,
    conferenceLayerUrl,
    environment,
    roomId: options.roomId,
    debug: options.debug,
    limits,
    waterMark,
  });

  return LauncherFacade(options);
};

export default init;
