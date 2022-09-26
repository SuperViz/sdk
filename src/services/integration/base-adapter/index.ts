import PhotonRealtimeService from '../../realtime/photon';
import { UserOn3D } from '../users/types';

import { DefaultAdapterManager, DefaultAdapterOptions, Adapter, Instance, Adapters } from './types';

export class BaseAdapterManager implements DefaultAdapterManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;

  private _isFollowAvailable: boolean;
  private _isGatherAvailable: boolean;
  private _isGoToAvailable: boolean;

  private adapter: Adapter;
  private instance: Instance;

  public RealtimeService: PhotonRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isFollowAvailable,
    isGatherAvailable,
    isGoToAvailable,
    adapter,
    instance,

    RealtimeService,
  }: DefaultAdapterOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;

    this._isFollowAvailable = isFollowAvailable;
    this._isGatherAvailable = isGatherAvailable;
    this._isGoToAvailable = isGoToAvailable;

    this.adapter = adapter;
    this.instance = instance;

    this.validateAdapter();

    this.RealtimeService = RealtimeService;
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
   * @function createAvatar
   * @description create an avatar for the user in 3D space;
   * @returns {void}
   */
  public createAvatar = (user: UserOn3D): void => {
    console.log('CREATE AVATAR', user);
  };

  /**
   * @function destroyAvatar
   * @description destroys a user's avatar in 3D space;
   * @returns {void}
   */
  public destroyAvatar = (userId: string): void => {
    console.log('DESTROY AVATAR', userId);
  };

  /**
   * @function createPointer
   * @description create an pointer for the user in 3D space;
   * @returns {void}
   */
  public createPointer = (user: UserOn3D): void => {
    console.log('CREATE POINTER', user);
  };

  /**
   * @function destroyPointer
   * @description destroys a user's pointer in 3D space;
   * @returns {void}
   */
  public destroyPointer = (userId: string): void => {
    console.log('DESTROY POINTER', userId);
  };

  /**
   * @function enablePointers
   * @description enable pointers in 3D space;
   * @returns {void}
   */
  public enablePointers = (): void => {
    this._isPointersEnabled = true;
  };

  /**
   * @function disablePointers
   * @description disable pointers in 3D space;
   * @returns {void}
   */
  public disablePointers = (): void => {
    this._isPointersEnabled = false;
  };

  /**
   * @function validateAdapter
   * @description validates if the adapter is available in the adapters list
   * @returns {void | Error}
   */
  private validateAdapter = (): void | Error => {
    const adapters = Object.values(Adapters);

    if (adapters.includes(this.adapter.type)) return;

    throw new Error('Adapter not found');
  };
}
