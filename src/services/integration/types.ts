import { User } from '../../common/types/user.types';

import { IntegrationUsersManager } from './users';

export interface DefaultIntegrationManager {
  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
  IntegrationUsersService: IntegrationUsersManager;
}

// constructor options
export interface DefaultIntegrationManagerOptions {
  isAvatarsEnabled?: boolean;
  isPointersEnabled?: boolean;
  userList: User[];
  localUser: User;
}
