import {
  MeetingEvent,
  RealtimeEvent,
  DeviceEvent,
  MeetingState,
  MeetingConnectionStatus,
  MeetingControlsEvent,
} from './common/types/events.types';
import { Participant, Group, Avatar, ParticipantType } from './common/types/participant.types';
import { SuperVizSdkOptions, DevicesOptions } from './common/types/sdk-options.types';
import { logger } from './common/utils';
import ApiService from './services/api';
import AuthService from './services/auth-service';
import { BrowserService } from './services/browser';
import { BrowserStats } from './services/browser/types';
import Communicator from './services/communicator';
import { SuperVizSdk, PluginOptions } from './services/communicator/types';
import { PluginMethods, Plugin } from './services/integration/base-plugin/types';
import { ParticipantOn3D, ParticipantTo3D } from './services/integration/participants/types';
import { RealtimeMessage } from './services/realtime/ably/types';
import RemoteConfigService from './services/remote-config-service';
import {
  ColorsVariables,
  ColorsVariablesNames,
  WaterMark,
} from './services/video-conference-manager/types';

/**
 * @function validateOptions
 * @description Validate the options passed to the SDK
 * @param param {SuperVizSdkOptions}
 * @returns {void}
 */
const validateOptions = ({ group, participant, roomId, customColors }: SuperVizSdkOptions) => {
  if (customColors) {
    validadeColorsVariablesNames(customColors);
  }

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

/**
 * @function validadeColorsVariablesNames
 * @description Validate if the custom colors variables names are valid
 * @param colors {ColorsVariables}
 */
const validadeColorsVariablesNames = (colors: ColorsVariables) => {
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
 * @function init
 * @description Initialize the SDK
 * @param apiKey - API key
 * @param options - SDK options
 * @returns {SuperVizSdk}
 */
const init = async (apiKey: string, options: SuperVizSdkOptions) => {
  validateOptions(options);

  if (options.debug) {
    logger.enable('@superviz/*');
  }

  const { apiUrl, conferenceLayerUrl } = await RemoteConfigService.getRemoteConfig(
    options.environment,
  );

  const isValid = await AuthService(apiUrl, apiKey);

  if (!isValid) {
    throw new Error('Failed to validate API key');
  }

  const environment = await ApiService.fetchConfig(apiUrl, apiKey);
  const waterMark: WaterMark = await ApiService.fetchWaterMark(apiUrl, apiKey);

  if (!environment || !environment.ablyKey) {
    throw new Error('Failed to load configuration from server');
  }

  const { ablyKey } = environment;
  return Communicator(
    Object.assign({}, options, { apiKey, ablyKey, conferenceLayerUrl, apiUrl, waterMark }),
  );
};

if (window) {
  window.SuperVizSdk = {
    init,
    MeetingEvent,
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
  SuperVizSdkOptions,
  DeviceEvent,
  SuperVizSdk,
  MeetingState,
  Participant,
  ParticipantType,
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
  DevicesOptions,
  RealtimeMessage,
};
