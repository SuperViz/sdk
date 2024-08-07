import { debug } from 'debug';

import { ColorsVariables, ColorsVariablesNames } from '../common/types/colors.types';
import { EnvironmentTypes, SuperVizSdkOptions } from '../common/types/sdk-options.types';
import ApiService from '../services/api';
import AuthService from '../services/auth-service';
import config from '../services/config';
import RemoteConfigService from '../services/remote-config-service';

import LauncherFacade from './launcher';
import { LauncherFacade as LauncherFacadeType } from './launcher/types';

/**
 * @function validateId
 * @description validate if the id follows the constraints
 * @param {string} id - id to validate
 * @returns {boolean}
 */
function validateId(id: string): boolean {
  const lengthConstraint = /^.{2,64}$/;
  const pattern = /^[-_&@+=,(){}\[\]\/«».:|'"#a-zA-Z0-9À-ÿ\s]*$/;

  if (!lengthConstraint.test(id)) {
    return false;
  }

  if (!pattern.test(id)) {
    return false;
  }

  return true;
}

/**
 * @function validateOptions
 * @description Validate the options passed to the SDK
 * @param {SuperVizSdkOptions} param
 * @returns {void}
 */
const validateOptions = ({
  group,
  participant,
  roomId,
  customColors,
}: SuperVizSdkOptions): void => {
  if (customColors) {
    validateColorsVariablesNames(customColors);
  }

  if (!group || !group.name || !group.id) {
    throw new Error('[SuperViz] Group fields is required');
  }

  if (!participant || !participant.id || !participant.name) {
    throw new Error('[SuperViz] Participant name and id is required');
  }

  if (!roomId) {
    throw new Error('[SuperViz] Room id is required');
  }

  if (!validateId(roomId)) {
    throw new Error(
      '[SuperViz] Room id is invalid, it should be between 2 and 64 characters and only accept letters, numbers and special characters: -_&@+=,(){}[]/«».:|\'"',
    );
  }

  if (!validateId(participant.id)) {
    throw new Error(
      '[SuperViz] Participant id is invalid, it should be between 2 and 64 characters and only accept letters, numbers and special characters: -_&@+=,(){}[]/«».:|\'"',
    );
  }
};

/**
 * @function validateColorsVariablesNames
 * @description validate if the custom colors variables names are valid
 * @param colors {ColorsVariables}
 */
const validateColorsVariablesNames = (colors: ColorsVariables) => {
  Object.entries(colors).forEach(([key, value]) => {
    if (!Object.values(ColorsVariablesNames).includes(key as ColorsVariablesNames)) {
      throw new Error(
        `Color ${key} is not a valid color variable name. Please check the documentation for more information.`,
      );
    }

    if (!/^(\d{1,3}\s){2}\d{1,3}$/.test(value)) {
      throw new Error(
        `Color ${key} is not a valid color variable value. Please check the documentation for more information.`,
      );
    }
  });
};

/**
 * @function setColorVariables
 * @description - add color variables as variables in the root of the document
 * @returns
 */
const setColorVariables = (colors: ColorsVariables): void => {
  if (!colors) return;

  Object.entries(colors).forEach(([key, value]) => {
    const color = value.replace(/\s/g, ', ');
    document.documentElement.style.setProperty(`--${key}`, color);
  });
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

  const [{ apiUrl, conferenceLayerUrl }, features] = await Promise.all([
    RemoteConfigService.getRemoteConfig(options.environment as EnvironmentTypes),
    RemoteConfigService.getFeatures(apiKey),
  ]);

  const isValid = await AuthService(apiUrl, apiKey);

  if (!isValid) {
    throw new Error('Failed to validate API key');
  }

  const [environment, waterMark, limits] = await Promise.all([
    ApiService.fetchConfig(apiUrl, apiKey),
    ApiService.fetchWaterMark(apiUrl, apiKey),
    ApiService.fetchLimits(apiUrl, apiKey),
  ]).catch(() => {
    throw new Error('Failed to load configuration from server');
  });

  if (!environment || !environment.ablyKey) {
    throw new Error('Failed to load configuration from server');
  }

  const { ablyKey } = environment;
  const { participant, roomId, customColors: colors } = options;

  config.setConfig({
    apiUrl,
    ablyKey,
    apiKey,
    conferenceLayerUrl,
    environment: (options.environment as EnvironmentTypes) ?? EnvironmentTypes.PROD,
    roomId,
    debug: options.debug,
    limits,
    waterMark,
    colors: options.customColors,
    features,
  });

  setColorVariables(options.customColors);

  ApiService.createOrUpdateParticipant({
    name: participant.name,
    participantId: participant.id,
    avatar: participant.avatar?.imageUrl,
  });

  return LauncherFacade(options);
};

export default init;
