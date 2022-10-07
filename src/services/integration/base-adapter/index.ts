import { AblyRealtimeService } from '../../realtime';
import { UserOn3D } from '../users/types';

import { DefaultAdapterManager, DefaultAdapterOptions, Adapter } from './types';

export class BaseAdapterManager implements DefaultAdapterManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;

  private _isFollowAvailable: boolean;
  private _isGatherAvailable: boolean;
  private _isGoToAvailable: boolean;

  public adapter: Adapter;

  public RealtimeService: AblyRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isFollowAvailable,
    isGatherAvailable,
    isGoToAvailable,
    adapter,
    RealtimeService,
  }: DefaultAdapterOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;

    this._isFollowAvailable = isFollowAvailable;
    this._isGatherAvailable = isGatherAvailable;
    this._isGoToAvailable = isGoToAvailable;

    this.adapter = adapter;

    this.RealtimeService = RealtimeService;

    // @ts-ignore
    this.adapter.prototype.setSyncProperty = this.RealtimeService.setSyncProperty;
    // @ts-ignore
    this.adapter.prototype.syncPropertiesObserver = this.RealtimeService.syncPropertiesObserver;
  }

  public get isAvatarsEnabled(): boolean {
    return this._isAvatarsEnabled;
  }

  public get isPointersEnabled(): boolean {
    return this._isPointersEnabled;
  }

  public get isFollowAvailable(): boolean {
    return this._isFollowAvailable;
  }

  public get isGatherAvailable(): boolean {
    return this._isGatherAvailable;
  }

  public get isGoToAvailable(): boolean {
    return this._isGoToAvailable;
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
   * @function createAvatar
   * @description create an avatar for the user in 3D space;
   * @param {UserOn3D} user;
   * @param {string} avatarUrl
   * @returns {void}
   */
  public createAvatar = (user: UserOn3D, avatarUrl?: string): void => {
    this.adapter.createAvatar(user, avatarUrl);
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
}
