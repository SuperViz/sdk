import { isEqual } from 'lodash';

import { AblyRealtimeData } from '../realtime/ably/types';

import { BasePluginManager } from './base-plugin';
import { DefaultIntegrationManager, DefaultIntegrationManagerOptions } from './types';
import { IntegrationParticipantsManager } from './participants';
import { ParticipantTo3D, ParticipantOn3D } from './participants/types';

export class IntegrationManager extends BasePluginManager implements DefaultIntegrationManager {
  private IntegrationParticipantsService: IntegrationParticipantsManager;
  private followParticipantId = null;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isNameEnabled,
    renderLocalAvatar,
    plugin,
    RealtimeService,
    avatarConfig,
    localParticipant,
    participantList,
  }: DefaultIntegrationManagerOptions) {
    // Plugin manager
    const avatars = isAvatarsEnabled ?? true;
    const pointers = isPointersEnabled ?? true;

    super({
      plugin,
      RealtimeService,
      isAvatarsEnabled: avatars,
      isPointersEnabled: pointers,
      isNameEnabled,
      renderLocalAvatar,
      localParticipant,
      avatarConfig,
    });

    // Participants on 3D space service
    this.IntegrationParticipantsService = new IntegrationParticipantsManager();
    this.createLocalParticipant(localParticipant);
    this.createParticipantList(participantList);
    this.RealtimeService.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.RealtimeService.participantLeaveObserver.subscribe(this.onParticipantLeave);
    this.RealtimeService.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdate);

    this.onRoomInfoUpdate(this.RealtimeService.roomProperties);
  }

  public get participants(): ParticipantOn3D[] {
    return this.IntegrationParticipantsService.participants;
  }

  public get getAvatars(): Object {
    return this.plugin?.getAvatars();
  }

  public get localParticipant(): ParticipantOn3D {
    return this.IntegrationParticipantsService.participant;
  }

  /**
   * @function addParticipant
   * @description add new participant to list
   * @param {ParticipantTo3D} participant
   * @returns {void}
   */
  public addParticipant = (participant: ParticipantTo3D): void => {
    if (!participant || !participant.id || participant.isAudience) return;
    const participantOn3D = this.IntegrationParticipantsService.createParticipantOn3D(participant);

    this.IntegrationParticipantsService.addParticipantToList(participantOn3D);
    // audience listens to the hosts broadcast channel
    this.RealtimeService.subscribeToParticipantUpdate(participantOn3D.id, this.onParticipantUpdated);

    this.createAvatar(participantOn3D);
    this.createPointer(participantOn3D);
  };

  /**
   * @function removeParticipant
   * @description remove participant from list
   * @param {ParticipantOn3D} participant
   * @param unsubscribe
   * @returns {void}
   */
  public removeParticipant = (participant: ParticipantOn3D, unsubscribe): void => {
    this.IntegrationParticipantsService.removeParticipant(participant);

    this.destroyAvatar(participant);
    this.destroyPointer(participant);
    if (unsubscribe) {
      this.RealtimeService.unsubscribeFromParticipantUpdate(participant.id, this.onParticipantUpdated);
    }
  };

  /**
   * @function updateParticipant
   * @description update participant
   * @param {ParticipantOn3D} participant
   * @returns {void}
   */
  public updateParticipant = (participant: ParticipantOn3D): void => {
    if (!this.participants || this.participants.length === 0 || !participant || !participant.id) {
      return;
    }
    const participantToBeUpdated = this.participants.find((oldParticipant) => oldParticipant.id === participant.id);

    if (!participantToBeUpdated) {
      this.addParticipant(participant);
      return;
    }
    let hasDifferentAvatarProperties = false;
    if (
      participantToBeUpdated.avatar?.model !== participant.avatar?.model ||
      !isEqual(participantToBeUpdated.avatarConfig, participant.avatarConfig)
    ) {
      hasDifferentAvatarProperties = true;
    }
    if (hasDifferentAvatarProperties) {
      this.removeParticipant(participant, false);
      const participantOn3D = this.IntegrationParticipantsService.createParticipantOn3D(participant);
      this.IntegrationParticipantsService.addParticipantToList(participantOn3D);

      this.createAvatar(participantOn3D);
      this.createPointer(participantOn3D);
    } else {
      const index = this.IntegrationParticipantsService.participants.findIndex((u) => u.id === participant.id);
      if (index !== -1) {
        this.IntegrationParticipantsService.participants[index] = participant;
      }
    }
  };

  /**
   * @function createLocalParticipant
   * @description creates the participant with what is needed for the 3D environment
   * @param {ParticipantTo3D} localParticipant
   * @returns {void}
   */
  private createLocalParticipant = (localParticipant: ParticipantTo3D): void => {
    const participant = this.IntegrationParticipantsService.createParticipantOn3D(localParticipant);
    this.IntegrationParticipantsService.setLocalParticipant(participant);
  };

  /**
   * @function createParticipantList
   * @description creates the local participant list that is needed for the 3D environment
   * @param {ParticipantOn3D[]} participantList
   * @returns {void}
   */
  private createParticipantList = (participantList: ParticipantTo3D[]): void => {
    const participantOn3DList = participantList.map((participant) => this.IntegrationParticipantsService.createParticipantOn3D(participant));
    participantOn3DList.forEach((participant) => {
      this.addParticipant(participant);
    });
  };

  /**
   * @function onParticipantJoined
   * @description add participants as they enter the RealtimeService
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantJoined = (participant: AblyParticipant): void => {
    const { participantId, name, avatar, avatarConfig, isAudience } = participant.data;

    this.addParticipant({
      id: participantId,
      name,
      avatar,
      avatarConfig,
      isAudience,
    });
  };

  /**
   * @function onParticipantLeave
   * @description removes participants as they leave the RealtimeService
   * @param {} Participant
   * @returns {void}
   */
  private onParticipantLeave = (Participant): void => {
    if (!this.participants?.length) return;

    const participant = this.participants.find((participant) => participant.id === Participant.clientId);

    if (!participant) return;

    this.removeParticipant(participant, true);
  };

  /**
   * @function onParticipantUpdated
   * @description update participant
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantUpdated = (participant: AblyParticipant): void => {
    const { participantId, name, avatar, avatarConfig, position, rotation } = participant.data;
    this.updateParticipant({
      position,
      rotation,
      id: participantId,
      name,
      avatar,
      avatarConfig,
    });
    if (this.followParticipantId) {
      this.plugin.goToParticipant(this.followParticipantId);
    }
  };

  /**
   * @function onRoomInfoUpdate
   * @description room update
   * @param {} room : AblyRealtimeData
   * @returns {void}
   */
  private onRoomInfoUpdate = (room: AblyRealtimeData): void => {
    if (!room) return;
    const { gather, hostClientId, followParticipantId } = room;
    this.followParticipantId = followParticipantId;
    if (gather) {
      this.plugin.goToParticipant(hostClientId);
    }
  };
}
