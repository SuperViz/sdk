import { User } from '../../../common/types/user.types';
import { AdapterOptions } from '../../communicator/types';
import { AblyRealtimeService } from '../../realtime';
import { SyncProperty } from '../../realtime/base/types';
import { UserOn3D, UserTo3D } from '../users/types';

import { DefaultAdapterManager, DefaultAdapterOptions, Adapter } from './types';

export class BaseAdapterManager implements DefaultAdapterManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;

  public adapter: Adapter;
  public RealtimeService: AblyRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    adapter,
    RealtimeService,
    localUser,
  }: AdapterOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;

    this.adapter = adapter;

    this.RealtimeService = RealtimeService;

    if (!this.isAvatarsEnabled) {
      this.adapter.disableAvatars();
    }
    if (!this.isPointersEnabled) {
      this.adapter.disablePointers();
    }
    this.adapter.init(
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
    this.adapter.enableAvatars();
  };

  /**
   * @function disableAvatars
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disableAvatars = (): void => {
    this._isAvatarsEnabled = false;
    this.adapter.disableAvatars();
  };

  /**
   * @function enablePointers
   * @description enable avatars in 3D space;
   * @returns {void}
   */
  public enablePointers = (): void => {
    this._isPointersEnabled = true;
    this.adapter.enablePointers();
  };

  /**
   * @function disablePointers
   * @description disable avatars in 3D space;
   * @returns {void}
   */
  public disablePointers = (): void => {
    this._isPointersEnabled = false;
    this.adapter.disablePointers();
  };

  /**
   * @function createAvatar
   * @description create an avatar for the user in 3D space;
   * @param {UserOn3D} user;
   * @returns {void}
   */
  public createAvatar = (user: UserOn3D): void => {
    if (this.RealtimeService.userData.userId === user.id || !this.isAvatarsEnabled) {
      return;
    }
    this.adapter.createAvatar(user);
  };

  /**
   * @function destroyAvatar
   * @description destroys a user's avatar in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public destroyAvatar = (user: UserOn3D): void => {
    this.adapter.destroyAvatar(user);
  };

  /**
   * @function createPointer
   * @description create an pointer for the user in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public createPointer = (user: UserOn3D): void => {
    if (this.RealtimeService.userData.userId === user.id || !this.isPointersEnabled) {
      return;
    }
    this.adapter.createPointer(user);
  };

  /**
   * @function destroyPointer
   * @description destroys a user's pointer in 3D space;
   * @param {UserOn3D} user
   * @returns {void}
   */
  public destroyPointer = (user: UserOn3D): void => {
    this.adapter.destroyPointer(user);
  };

  /**
   * @function goToUSer
   * @description goes to the user's position in 3D space
   * @param {string} userId
   * @returns {void}
   */
  public goToUser = (userId: string): void => {
    this.adapter.goToUser(userId);
  };
}
