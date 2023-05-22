import { PluginOptions } from '../../communicator/types';
import { AblyRealtimeService } from '../../realtime';
import { ParticipantOn3D, ParticipantTo3D } from '../participants/types';

import { DefaultPluginManager, Plugin } from './types';

export class BasePluginManager implements DefaultPluginManager {
  private _isAvatarsEnabled: boolean;
  private _isMouseEnabled: boolean;
  private _isLaserEnabled: boolean;
  private readonly _isNameEnabled: boolean;
  private readonly _renderLocalAvatar: boolean;

  public plugin: Plugin;
  private _localParticipant: ParticipantTo3D;
  public RealtimeService: AblyRealtimeService;

  constructor({
    isAvatarsEnabled,
    isMouseEnabled,
    isLaserEnabled,
    isNameEnabled,
    renderLocalAvatar,
    plugin,
    RealtimeService,
    localParticipant,
  }: PluginOptions) {
    this._isAvatarsEnabled = isAvatarsEnabled;
    this._isMouseEnabled = isMouseEnabled;
    this._isLaserEnabled = isLaserEnabled;
    this._renderLocalAvatar = renderLocalAvatar;
    this._isNameEnabled = isNameEnabled;

    this.plugin = plugin;
    this._localParticipant = localParticipant;

    this.RealtimeService = RealtimeService;

    this.plugin.init(
      {
        subscribeToParticipantJoinedObserver: (callback) => {
          RealtimeService.participantJoinedObserver.subscribe(callback);
        },
        unsubscribeToParticipantJoinedObserver: (callback) => {
          RealtimeService.participantJoinedObserver.unsubscribe(callback);
        },
        subscribeToParticipantLeaveObserver: (callback) => {
          RealtimeService.participantLeaveObserver.subscribe(callback);
        },
        unsubscribeToParticipantLeaveObserver: (callback) => {
          RealtimeService.participantLeaveObserver.unsubscribe(callback);
        },
        subscribeToParticipantsObserver: (callback) => {
          RealtimeService.participantsObserver.subscribe(callback);
        },
        unsubscribeToParticipantsObserver: (callback) => {
          RealtimeService.participantsObserver.unsubscribe(callback);
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

  public get isMouseEnabled(): boolean {
    return this._isMouseEnabled;
  }

  public get isLaserEnabled(): boolean {
    return this._isLaserEnabled;
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
   * @function enableMouse
   * @description enable mouse in 3D space;
   * @returns {void}
   */
  public enableMouse = (): void => {
    this._isMouseEnabled = true;
  };

  /**
   * @function disableMouse
   * @description disable mouse in 3D space;
   * @returns {void}
   */
  public disableMouse = (): void => {
    this._isMouseEnabled = false;
  };

  /**
   * @function enableLaser
   * @description enable laser in 3D space;
   * @returns {void}
   */
  public enableLaser = (): void => {
    this._isLaserEnabled = true;
  };

  /**
   * @function disableLaser
   * @description disable laser in 3D space;
   * @returns {void}
   */
  public disableLaser = (): void => {
    this._isLaserEnabled = false;
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
   * @function createMouse
   * @description create a mouse for the participant in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public createMouse = (participant: ParticipantOn3D): void => {
    if (!participant.avatarConfig) {
      return;
    }
    const isOwnAvatar = participant.id === this._localParticipant.id;
    if ((isOwnAvatar && !this._renderLocalAvatar) || !this._isMouseEnabled) {
      return;
    }
    this.destroyMouse(participant);
    this.plugin.createMouse(participant);
  };

  /**
   * @function destroyMouse
   * @description destroys a participant's mouse in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public destroyMouse = (participant: ParticipantOn3D): void => {
    this.plugin.destroyMouse(participant);
  };

  /**
   * @function createLaser
   * @description create a laser for the participant in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public createLaser = (participant: ParticipantOn3D): void => {
    if (!participant.avatarConfig) {
      return;
    }
    const isOwnAvatar = participant.id === this._localParticipant.id;
    if (
      (isOwnAvatar && !this._renderLocalAvatar) ||
      !this._isAvatarsEnabled ||
      !this._isLaserEnabled
    ) {
      return;
    }
    this.destroyLaser(participant);
    this.plugin.createLaser(participant);
  };

  /**
   * @function destroyLaser
   * @description destroys a participant's laser in 3D space;
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public destroyLaser = (participant: ParticipantOn3D): void => {
    this.plugin.destroyLaser(participant);
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
