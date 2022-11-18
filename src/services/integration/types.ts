import { AdapterOptions } from '../communicator/types';

import { DefaultAdapterManager, DefaultAdapterOptions } from './base-adapter/types';
import { UserOn3D, UserTo3D } from './users/types';

export interface DefaultIntegrationManager extends DefaultAdapterManager {
  users: UserOn3D[];
  localUser: UserTo3D;

  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
}

export interface DefaultIntegrationManagerOptions extends AdapterOptions {
  userList: UserTo3D[];
}
