import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { logger } from '../../common/utils';
import ApiService from '../api';
import { Plugin } from '../integration/base-plugin/types';
import { AblyRealtimeService } from '../realtime';
import { ParticipantInfo } from '../realtime/base/types';
import RemoteConfigService from '../remote-config-service';

import { PluginManager } from './plugin-manager';
import { PluginOptions } from './plugin-manager/types';

export class Manager {
  private readonly realtime: AblyRealtimeService;
  private roomId: string;
  private apiKey: string;
  private participant: ParticipantInfo;
  private PluginManager?: PluginManager;

  constructor({ ablyKey, apiKey, apiUrl, roomId, participant }) {
    this.roomId = roomId;
    this.apiKey = apiKey;

    this.participant = { ...participant, participantId: participant.id };
    this.realtime = new AblyRealtimeService(apiUrl, ablyKey);

    this.startRealtime();
  }

  public initializePlugin = async (plugin: Plugin, pluginOptions: PluginOptions) => {
    if (this.PluginManager) return;

    this.PluginManager = new PluginManager({
      participant: this.participant,
      realtime: this.realtime,
    });

    return this.PluginManager.attachPlugin(plugin, pluginOptions);
  };

  public initializeVideo = async () => {
    console.log('initializeVideo');
  };

  private startRealtime = async () => {
    this.realtime.start({
      apiKey: this.apiKey,
      initialParticipantData: this.participant,
      isBroadcast: false,
      roomId: this.roomId,
      shouldKickParticipantsOnHostLeave: false,
    });

    this.realtime.join(this.participant);
  };
}

export default async (apiKey: string, options: any) => {
  const { apiUrl } = await RemoteConfigService.getRemoteConfig(EnvironmentTypes.LOCAL);
  const { ablyKey } = await ApiService.fetchConfig(apiUrl, apiKey);

  logger.enable('*');

  return new Manager({
    ablyKey,
    apiKey,
    apiUrl,
    ...options,
  });
};
