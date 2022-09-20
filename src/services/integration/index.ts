import { User } from '../../common/types/user.types';

import { DefaultIntegrationManager, DefaultIntegrationManagerOptions } from './types';
import { IntegrationUsersManager } from './users';
import { UserOn3D } from './users/types';

export class IntegrationManager implements DefaultIntegrationManager {
  isAvatarsEnabled: boolean;
  isPointersEnabled: boolean;
  IntegrationUsersService: IntegrationUsersManager;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    localUser,
    userList,
  }: DefaultIntegrationManagerOptions) {
    this.isAvatarsEnabled = isAvatarsEnabled ?? true;
    this.isPointersEnabled = isPointersEnabled ?? true;

    // Users on 3D service
    this.IntegrationUsersService = new IntegrationUsersManager();

    const user = this.IntegrationUsersService.createUserOn3D(localUser);
    const userOn3DList = userList.map((user) => this.IntegrationUsersService.createUserOn3D(user));

    this.IntegrationUsersService.setLocalUser(user);
    this.IntegrationUsersService.setUserList(userOn3DList);
  }

  public get users(): UserOn3D[] {
    return this.IntegrationUsersService.users;
  }

  public get localUser(): UserOn3D {
    return this.IntegrationUsersService.user;
  }

  /**
   * @function enableAvatars
   * @description enable avatars in 3D space;
   * @returns {void}
   */
  public enableAvatars = (): void => {
    this.isAvatarsEnabled = true;
  };

  /**
   * @function disableAvatars
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disableAvatars = (): void => {
    this.isAvatarsEnabled = false;
  };

  /**
   * @function enablePointers
   * @description enable pointers in 3D space;
   * @returns {void}
   */
  public enablePointers = (): void => {
    this.isPointersEnabled = true;
  };

  /**
   * @function disablePointers
   * @description disable pointers in 3D space;
   * @returns {void}
   */
  public disablePointers = (): void => {
    this.isPointersEnabled = false;
  };

  /**
   * @function addUser
   * @description add new user in 3D space;
   * @returns {void}
   */
  public addUser = (user: User): void => {
    const userOn3D = this.IntegrationUsersService.createUserOn3D(user);

    this.IntegrationUsersService.setUserList([...this.users, userOn3D]);
  };

  /**
   * @function removeUser
   * @description remove user from list
   * @param {string} userId
   * @returns {void}
   */
  public removeUser = (userId: string): void => {
    this.IntegrationUsersService.removeUser(userId);
  };
}
