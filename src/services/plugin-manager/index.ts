import { Participant } from '../../common/types/participant.types';
import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { logger } from '../../common/utils';
import ApiService from '../api';
import { Plugin } from '../integration/base-plugin/types';
import { AblyRealtimeService } from '../realtime';
import { ParticipantInfo } from '../realtime/base/types';
import RemoteConfigService from '../remote-config-service';

import { PluginOptions } from './types';

class PluginManager {
  private readonly realtime: AblyRealtimeService;
  private roomId: string;
  private apiKey: string;

  constructor(ablyKey: string, apiKey: string, apiUrl: string, roomId: string) {
    this.roomId = roomId;
    this.apiKey = apiKey;

    this.realtime = new AblyRealtimeService(apiUrl, ablyKey);

    this.startRealtime();
  }

  public attachPlugin(plugin: Plugin, pluginOptions: PluginOptions) {
    console.log('pluginOptions', pluginOptions);
    console.log('plugin', plugin);
  }

  public detachPlugin() {}

  private startRealtime() {
    const participant: ParticipantInfo = {
      name: 'testando ele',
      participantId: Date.now().toString(),
      avatar: {
        model: 'https://production.storage.superviz.com/readyplayerme/1.glb',
        thumbnail: 'https://production.cdn.superviz.com/static/default-avatars/1.png',
      },
    };

    this.realtime.start({
      apiKey: this.apiKey,
      initialParticipantData: participant,
      isBroadcast: false,
      roomId: this.roomId,
      shouldKickParticipantsOnHostLeave: true,
    });

    this.realtime.join(participant);
  }
}

const init = async (apiKey: string, roomId: string) => {
  const { apiUrl } = await RemoteConfigService.getRemoteConfig(EnvironmentTypes.LOCAL);

  const { ablyKey } = await ApiService.fetchConfig(apiUrl, apiKey);

  const pluginManager = new PluginManager(ablyKey, apiKey, apiUrl, roomId);

  logger.enable('*');

  return {
    attachPlugin: pluginManager.attachPlugin,
    detachPlugin: pluginManager.detachPlugin,
  };
};

export default {
  init,
};
