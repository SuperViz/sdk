import { PluginOptions } from '../../communicator/types';
import { AblyRealtimeService } from '../../realtime';
import { UserOn3D, UserTo3D } from '../users/types';

import { DefaultPluginManager, Plugin } from './types';

export class BasePluginManager implements DefaultPluginManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;
  private _isNameEnabled: boolean;
  private _renderLocalAvatar: boolean;

  public plugin: Plugin;
  private _localUser: UserTo3D;
  public RealtimeService: AblyRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isNameEnabled,
    renderLocalAvatar,
    plugin,
    RealtimeService,
    localUser,
  }: PluginOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;
    this._renderLocalAvatar = renderLocalAvatar;
    this._isNameEnabled = isNameEnabled;

    this.plugin = plugin;
    this._localUser = localUser;

    this.RealtimeService = RealtimeService;

    this.plugin.init(
      {
        setSyncProperty: <T>(name: string, property: T) => {
          RealtimeService.setSyncProperty(name, property);
        },
        subscribeToActorUpdate: (id: string, callback: Function) => {
          RealtimeService.subscribeToActorUpdate(id, callback);
        },
        unsubscribeToActorUpdate: (id: string, callback: Function) => {
          RealtimeService.unsubscribeFromActorUpdate(id, callback);
        },
        updateMyProperties: <T>(properties: T) => {
          RealtimeService.updateMyProperties(properties);
        },
        subscribe: RealtimeService.syncPropertiesObserver.subscribe,
        unsubscribe: RealtimeService.syncPropertiesObserver.unsubscribe,
        getUserSlot: RealtimeService.getUserSlot,
      },
      localUser,
    );
  }

  public get isAvatarsEnabled(): boolean {
    return this._isAvatarsEnabled;
  }

  public get isPointersEnabled(): boolean {
    return this._isPointersEnabled;
  }

  /**
   * @function enableAvatars
   * @description enable avatars in 3D space;
   * @returns {void}
   */
  public enableAvatars = (): void => {
    this._isAvatarsEnabled = true;
  };

  /**
   * @function disableAvatars
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disableAvatars = (): void => {
    this._isAvatarsEnabled = false;
  };

  /**
   * @function enablePointers
   * @description enable avatars in 3D space;
   * @returns {void}
   */
  public enablePointers = (): void => {
    this._isPointersEnabled = true;
  };

  /**
   * @function disablePointers
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disablePointers = (): void => {
    this._isPointersEnabled = false;
  };

  /**
   * @function createAvatar
   * @description create an avatar for the user in 3D space;
   * @param {UserOn3D} user;
   * @returns {void}
   */
  public createAvatar = async (user: UserOn3D): Promise<void> => {
    if (!user.avatarConfig) {
      return;
    }

    const isOwnAvatar = user.id === this._localUser.id;
    if ((isOwnAvatar && !this._renderLocalAvatar) || !this._isAvatarsEnabled) {
      return;
    }
    this.destroyAvatar(user);
    const model = await this.plugin.createAvatar(user);

    if (this._isNameEnabled && this.plugin.createName) {
      this.plugin.createName(user, model);
    }
  };

  /**
   * @function destroyAvatar
   * @description destroys a user's avatar in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public destroyAvatar = (user: UserOn3D): void => {
    this.plugin.destroyAvatar(user);
  };

  /**
   * @function createPointer
   * @description create an pointer for the user in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public createPointer = (user: UserOn3D): void => {
    if (!user.avatarConfig) {
      return;
    }
    const isOwnAvatar = user.id === this._localUser.id;
    if (
      (isOwnAvatar && !this._renderLocalAvatar) ||
      !this._isAvatarsEnabled ||
      !this._isPointersEnabled
    ) {
      return;
    }
    this.destroyPointer(user);
    this.plugin.createPointer(user);
  };

  /**
   * @function destroyPointer
   * @description destroys a user's pointer in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public destroyPointer = (user: UserOn3D): void => {
    this.plugin.destroyPointer(user);
  };

  /**
   * @function goToUSer
   * @description goes to the user's position in 3D space
   * @param {string} userId
   * @returns {void}
   */
  public goToUser = (userId: string): void => {
    this.plugin.goToUser(userId);
  };
}
