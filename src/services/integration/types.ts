import { BaseAdapterManager } from './base-adapter';
import { DefaultAdapterOptions } from './base-adapter/types';
import { IntegrationUsersManager } from './users';
import { UserOn3D, UserTo3D } from './users/types';

export interface DefaultIntegrationManager {
  users: UserOn3D[];
  localUser: UserOn3D;

  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
}

export interface DefaultIntegrationManagerOptions extends DefaultAdapterOptions {
  userList: UserTo3D[];
  localUser: UserTo3D;
}
