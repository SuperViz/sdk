import { PluginOptions } from '../../communicator/types';
import { AblyRealtimeService } from '../../realtime';
import { ParticipantOn3D, ParticipantTo3D } from '../participants/types';

import { DefaultPluginManager, Plugin } from './types';

export class BasePluginManager implements DefaultPluginManager {
  private _isAvatarsEnabled: boolean;
  private _isPointersEnabled: boolean;
  private _isNameEnabled: boolean;
  private _renderLocalAvatar: boolean;

  public plugin: Plugin;
  private _localParticipant: ParticipantTo3D;
  public RealtimeService: AblyRealtimeService;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isNameEnabled,
    renderLocalAvatar,
    plugin,
    RealtimeService,
    localParticipant,
  }: PluginOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isPointersEnabled = isPointersEnabled;
    this._renderLocalAvatar = renderLocalAvatar;
    this._isNameEnabled = isNameEnabled;

    this.plugin = plugin;
    this._localParticipant = localParticipant;

    this.RealtimeService = RealtimeService;

    this.plugin.init(
      {
        setSyncProperty: <T>(name: string, property: T) => {
          RealtimeService.setSyncProperty(name, property);
        },
        subscribeToParticipantUpdate: (id: string, callback: Function) => {
          RealtimeService.subscribeToParticipantUpdate(id, callback);
        },
        unsubscribeToParticipantUpdate: (id: string, callback: Function) => {
          RealtimeService.unsubscribeFromParticipantUpdate(id, callback);
        },
        updateMyProperties: <T>(properties: T) => {
          RealtimeService.updateMyProperties(properties);
        },
        subscribe: RealtimeService.syncPropertiesObserver.subscribe,
        unsubscribe: RealtimeService.syncPropertiesObserver.unsubscribe,
        getParticipantSlot: RealtimeService.getParticipantSlot,
      },
      localParticipant,
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
   * @description create an avatar for the participant in 3D space;
   * @param {ParticipantOn3D} participant;
   * @returns {void}
   */
  public createAvatar = async (participant: ParticipantOn3D): Promise<void> => {
    if (!participant.avatarConfig) {
      return;
    }

    const isOwnAvatar = participant.id === this._localParticipant.id;
    if ((isOwnAvatar && !this._renderLocalAvatar) || !this._isAvatarsEnabled) {
      return;
    }
    this.destroyAvatar(participant);
    const model = await this.plugin.createAvatar(participant);

    if (this._isNameEnabled && this.plugin.createName) {
      this.plugin.createName(participant, model);
    }
  };

  /**
   * @function destroyAvatar
   * @description destroys a participant's avatar in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public destroyAvatar = (participant: ParticipantOn3D): void => {
    this.plugin.destroyAvatar(participant);
  };

  /**
   * @function createPointer
   * @description create an pointer for the participant in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public createPointer = (participant: ParticipantOn3D): void => {
    if (!participant.avatarConfig) {
      return;
    }
    const isOwnAvatar = participant.id === this._localParticipant.id;
    if (
      (isOwnAvatar && !this._renderLocalAvatar) ||
      !this._isAvatarsEnabled ||
      !this._isPointersEnabled
    ) {
      return;
    }
    this.destroyPointer(participant);
    this.plugin.createPointer(participant);
  };

  /**
   * @function destroyPointer
   * @description destroys a participant's pointer in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public destroyPointer = (participant: ParticipantOn3D): void => {
    this.plugin.destroyPointer(participant);
  };

  /**
   * @function goToParticipant
   * @description goes to the participant's position in 3D space
   * @param {string} participantId
   * @returns {void}
   */
  public goToParticipant = (participantId: string): void => {
    this.plugin.goToParticipant(participantId);
  };
}
