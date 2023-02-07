import { PluginOptions } from '../communicator/types';

import { DefaultPluginManager } from './base-plugin/types';
import { ParticipantOn3D, ParticipantTo3D } from './participants/types';

export interface DefaultIntegrationManager extends DefaultPluginManager {
  participants: ParticipantOn3D[];
  localParticipant: ParticipantTo3D;

  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
}

export interface DefaultIntegrationManagerOptions extends PluginOptions {
  participantList: ParticipantTo3D[];
}
