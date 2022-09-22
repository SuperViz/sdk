import { DefaultAdapterManager, DefaultAdapterOptions, Adapter, Instance } from './types';

export class BaseAdapterManager implements DefaultAdapterManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;

  private _isFollowAvailable: boolean;
  private _isGatherAvailable: boolean;
  private _isGoToAvailable: boolean;

  private Adapter: Adapter;
  private Instance: Instance;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isFollowAvailable,
    isGatherAvailable,
    isGoToAvailable,
    adapter,
    instance,
  }: DefaultAdapterOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;

    this._isFollowAvailable = isFollowAvailable;
    this._isGatherAvailable = isGatherAvailable;
    this._isGoToAvailable = isGoToAvailable;

    this.Adapter = adapter;
    this.Instance = instance;
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
}
