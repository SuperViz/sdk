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
  private participant: ParticipantInfo;
  private IntegrationManager: IntegrationManager;

  constructor({ participant, realtime }: any) {
    this.participant = { ...participant, participantId: participant.id };
    this.realtime = realtime;
  }

  public attachPlugin = (plugin: Plugin, pluginOptions?: PluginOptions) => {
    // @NOTE - this is a workaround to wait for the participants to be loaded. Remove later
    if (!this.realtime.getParticipants || Object.keys(this.realtime.getParticipants).length === 0) {
      setTimeout(() => this.attachPlugin(plugin, pluginOptions), 2000);
      return;
    }

    const options = pluginOptions ?? {
      isAvatarsEnabled: true,
      isLaserEnabled: true,
      isMouseEnabled: true,
      avatarConfig: {
        scale: 1,
        height: 0,
        laserOrigin: { x: 0.2, y: -0.2, z: 0 },
      },
    };

    if (this.IntegrationManager) {
      throw new Error('the 3D plugin has already been started');
    }

    this.realtime.setParticipantData({ avatarConfig: options.avatarConfig });

    if (this.participant.avatar && this.participant.avatar.model) {
      this.realtime.setParticipantData({ avatar: this.participant.avatar });
    }

    let participants = [];

    if (this.realtime.getParticipants) {
      participants = Object.values(this.realtime.getParticipants);
    }

    this.IntegrationManager = new IntegrationManager({
      plugin,
      ...options,
      localParticipant: {
        id: this.participant.id,
        name: this.participant.name,
        avatar: this.participant.avatar,
        avatarConfig: options.avatarConfig,
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
}
