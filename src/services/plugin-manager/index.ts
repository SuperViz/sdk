import { Participant, ParticipantType } from '../../common/types/participant.types';
import { RealtimeStateTypes } from '../../common/types/realtime.types';
import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { logger } from '../../common/utils';
import ApiService from '../api';
import { IntegrationManager } from '../integration';
import { Plugin } from '../integration/base-plugin/types';
import { AblyRealtimeService } from '../realtime';
import { ParticipantInfo } from '../realtime/base/types';
import RemoteConfigService from '../remote-config-service';

import { PluginOptions } from './types';

export class PluginManager {
  private readonly realtime: AblyRealtimeService;
  private roomId: string;
  private apiKey: string;
  private participant: ParticipantInfo;

  private realtimeState: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;

  private IntegrationManager: IntegrationManager;

  constructor({ ablyKey, apiKey, apiUrl, roomId, participant }: any) {
    console.log(roomId);

    this.roomId = roomId;
    this.apiKey = apiKey;

    this.participant = { ...participant, participantId: participant.id };
    this.realtime = new AblyRealtimeService(apiUrl, ablyKey);
  }

  public attachPlugin = async (plugin: Plugin, pluginOptions: PluginOptions) => {
    await this.startRealtime();

    if (this.IntegrationManager) {
      throw new Error('the 3D plugin has already been started');
    }

    if (pluginOptions.avatarConfig) {
      console.log('bbbbbbb');

      this.realtime.setParticipantData({ avatarConfig: pluginOptions.avatarConfig });
    }

    if (this.participant.avatar && this.participant.avatar.model) {
      console.log('aaaaaaa');

      this.realtime.setParticipantData({ avatar: this.participant.avatar });
    }

    let participants = [];

    if (this.realtime.getParticipants) {
      console.log('ccccccc');

      console.log('lista', this.realtime.getParticipants);

      participants = Object.values(this.realtime.getParticipants);
    }

    this.IntegrationManager = new IntegrationManager({
      plugin,
      ...pluginOptions,
      localParticipant: {
        id: this.participant.id,
        name: this.participant.name,
        avatar: this.participant.avatar,
        avatarConfig: pluginOptions.avatarConfig,
      },
      participantList: participants.map((participant) => {
        const id = participant.clientId;
        const { name, avatar, avatarConfig, slotIndex, isAudience } = participant.data;
        return {
          id,
          name,
          avatar,
          avatarConfig,
          slotIndex,
          isAudience,
        };
      }),
      RealtimeService: this.realtime,
    });

    return {
      enableAvatars: this.IntegrationManager?.enableAvatars,
      disableAvatars: this.IntegrationManager?.disableAvatars,
      enableMouse: this.IntegrationManager?.enableMouse,
      disableMouse: this.IntegrationManager?.disableMouse,
      enableLaser: this.IntegrationManager?.enableLaser,
      disableLaser: this.IntegrationManager?.disableLaser,
      getParticipantsOn3D: () => {
        return this.IntegrationManager?.participants ? this.IntegrationManager.participants : [];
      },
      getAvatars: () => this.IntegrationManager?.getAvatars,
    };
  };

  public detachPlugin() {
    if (!this.IntegrationManager) return;

    this.IntegrationManager.plugin.destroy();
    this.IntegrationManager = null;
  }

  private startRealtime = async () => {
    return new Promise((resolve) => {
      this.realtime.start({
        apiKey: this.apiKey,
        initialParticipantData: this.participant,
        isBroadcast: false,
        roomId: this.roomId,
        shouldKickParticipantsOnHostLeave: false,
      });

      this.realtime.join(this.participant);

      this.realtime.realtimeStateObserver.subscribe((state) => {
        console.log('realtimeStateObserver', state);

        this.realtimeState = state;
      });

      this.realtime.roomInfoUpdatedObserver.subscribe((event) => {
        console.log('roomInfoUpdatedObserver', event);
      });
      this.realtime.participantsObserver.subscribe((event) => {
        console.log('participantsObserver', event);

        if (Object.values(event).length > 0) {
          resolve(true);
        }
      });
      this.realtime.participantJoinedObserver.subscribe((event) => {
        console.log('participantJoinedObserver', event);
      });
      this.realtime.participantLeaveObserver.subscribe((event) => {
        console.log('participantLeaveObserver', event);
      });
      this.realtime.hostObserver.subscribe((event) => {
        console.log('hostObserver', event);
      });
      this.realtime.syncPropertiesObserver.subscribe((event) => {
        console.log('syncPropertiesObserver', event);
      });
      this.realtime.kickAllParticipantsObserver.subscribe((event) => {
        console.log('kickAllParticipantsObserver', event);
      });
      this.realtime.authenticationObserver.subscribe((event) => {
        console.log('authenticationObserver', event);
      });
    });
  };
}

const init = async (apiKey: string, options: any) => {
  console.log(options);

  const { apiUrl } = await RemoteConfigService.getRemoteConfig(EnvironmentTypes.LOCAL);

  const { ablyKey } = await ApiService.fetchConfig(apiUrl, apiKey);

  const pluginManager = new PluginManager({ ...options, ablyKey, apiKey, apiUrl });

  logger.enable('*');

  return {
    attachPlugin: pluginManager.attachPlugin,
    detachPlugin: pluginManager.detachPlugin,
  };
};

export default {
  init,
};
