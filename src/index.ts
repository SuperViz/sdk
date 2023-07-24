import { debug } from 'debug';

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
import { Inicializator } from './core';
import { InicializatorFacade } from './core/inicializator/types';
import ApiService from './services/api';
import AuthService from './services/auth-service';
import { BrowserService } from './services/browser';
import { BrowserStats } from './services/browser/types';
import { PluginOptions } from './services/communicator/types';
import { PluginMethods, Plugin } from './services/integration/base-plugin/types';
import { ParticipantOn3D, ParticipantTo3D } from './services/integration/participants/types';
import { RealtimeMessage } from './services/realtime/ably/types';
import RemoteConfigService from './services/remote-config-service';
import { SuperVizSdk } from './types';

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

  if (!participant || !participant.id) {
    throw new Error('Participants fields is required');
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
 * @returns {SuperVizSdk}
 */
const init = async (apiKey: string, options: SuperVizSdkOptions): Promise<InicializatorFacade> => {
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

  if (!environment || !environment.ablyKey) {
    throw new Error('Failed to load configuration from server');
  }

  const { ablyKey } = environment;

  return Inicializator(Object.assign({}, options, { apiKey, ablyKey, conferenceLayerUrl, apiUrl }));
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

export default init;
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
