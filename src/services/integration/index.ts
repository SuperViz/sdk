import PhotonRealtimeService from '../realtime/photon';

import { BaseAdapterManager } from './base-adapter';
import { DefaultIntegrationManager, DefaultIntegrationManagerOptions } from './types';
import { IntegrationUsersManager } from './users';
import { UserTo3D, UserOn3D } from './users/types';

export class IntegrationManager implements DefaultIntegrationManager {
  private IntegrationUsersService: IntegrationUsersManager;
  private BaseAdapterManager: BaseAdapterManager;
  private RealtimeService: PhotonRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isFollowAvailable,
    isGatherAvailable,
    isGoToAvailable,
    instance,
    adapter,

    RealtimeService,

    localUser,
    userList,
  }: DefaultIntegrationManagerOptions) {
    // Users on 3D space service
    this.IntegrationUsersService = new IntegrationUsersManager();

    const user = this.IntegrationUsersService.createUserOn3D(localUser);
    const userOn3DList = userList.map((user) => this.IntegrationUsersService.createUserOn3D(user));

    this.IntegrationUsersService.setLocalUser(user);
    this.IntegrationUsersService.setUserList(userOn3DList);

    // Adapter manager
    const avatars = isAvatarsEnabled ?? true;
    const pointers = isPointersEnabled ?? true;

    const canUseFollow = isFollowAvailable ?? true;
    const canUseGather = isGatherAvailable ?? true;
    const canUseGoTo = isGoToAvailable ?? true;

    this.BaseAdapterManager = new BaseAdapterManager({
      isAvatarsEnabled: avatars,
      isPointersEnabled: pointers,
      isFollowAvailable: canUseFollow,
      isGatherAvailable: canUseGather,
      isGoToAvailable: canUseGoTo,
      instance,
      adapter,
      RealtimeService,
    });

    this.RealtimeService = RealtimeService;

    this.RealtimeService.subscribeToActorJoined(this.onActorJoined);
    this.RealtimeService.subscribeToActorLeave(this.onActorLeave);
  }

  public get users(): UserOn3D[] {
    return this.IntegrationUsersService.users;
  }

  public get localUser(): UserOn3D {
    return this.IntegrationUsersService.user;
  }

  public get isAvatarsEnabled(): boolean {
    return this.BaseAdapterManager.isAvatarsEnabled;
  }

  public get isPointersEnabled(): boolean {
    return this.BaseAdapterManager.isPointersEnabled;
  }

  /**
   * @function enableAvatars
   * @description enable avatars in 3D space;
   * @returns {void}
   */
  public enableAvatars = (): void => {
    this.BaseAdapterManager.enableAvatars();
  };

  /**
   * @function disableAvatars
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disableAvatars = (): void => {
    this.BaseAdapterManager.disableAvatars();
  };

  /**
   * @function enablePointers
   * @description enable pointers in 3D space;
   * @returns {void}
   */
  public enablePointers = (): void => {
    this.BaseAdapterManager.enablePointers();
  };

  /**
   * @function disablePointers
   * @description disable pointers in 3D space;
   * @returns {void}
   */
  public disablePointers = (): void => {
    this.BaseAdapterManager.disablePointers();
  };

  /**
   * @function addUser
   * @description add new user to list
   * @param {UserTo3D} user
   * @returns {void}
   */
  public addUser = (user: UserTo3D): void => {
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

  /**
   * @function onActorJoined
   * @description add users as they enter the RealtimeService
   * @param {} actor
   * @returns {void}
   */
  private onActorJoined = (actor): void => {
    const { id, name } = actor.customProperties;

    this.addUser({
      id,
      name,
    });
  };

  /**
   * @function onActorLeave
   * @description removes users as they leave the RealtimeService
   * @param {} actor
   * @returns {void}
   */
  private onActorLeave = (actor): void => {
    this.removeUser(actor.customProperties.id);
  };
}
