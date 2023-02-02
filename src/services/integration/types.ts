import { PluginOptions } from '../communicator/types';

import { DefaultPluginManager } from './base-plugin/types';
import { UserOn3D, UserTo3D } from './users/types';

export interface DefaultIntegrationManager extends DefaultPluginManager {
  users: UserOn3D[];
  localUser: UserTo3D;

  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
}

export interface DefaultIntegrationManagerOptions extends PluginOptions {
  userList: UserTo3D[];
}
