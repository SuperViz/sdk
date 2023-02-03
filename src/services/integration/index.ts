import { isEqual } from 'lodash';

import { AblyRealtimeData } from '../realtime/ably/types';

import { BasePluginManager } from './base-plugin';
import { DefaultIntegrationManager, DefaultIntegrationManagerOptions } from './types';
import { IntegrationUsersManager } from './users';
import { UserTo3D, UserOn3D } from './users/types';

export class IntegrationManager extends BasePluginManager implements DefaultIntegrationManager {
  private IntegrationUsersService: IntegrationUsersManager;
  private followUserId = null;

  constructor({
    isAvatarsEnabled,
    isPointersEnabled,
    isNameEnabled,
    renderLocalAvatar,
    plugin,
    RealtimeService,
    avatarConfig,
    localUser,
    userList,
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
      localUser,
      avatarConfig,
    });

    // Users on 3D space service
    this.IntegrationUsersService = new IntegrationUsersManager();
    this.createLocalUser(localUser);
    this.createUserList(userList);
    this.RealtimeService.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.RealtimeService.participantLeaveObserver.subscribe(this.onParticipantLeave);
    this.RealtimeService.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdate);

    this.onRoomInfoUpdate(this.RealtimeService.roomProperties);
  }

  public get users(): UserOn3D[] {
    return this.IntegrationUsersService.users;
  }

  public get getAvatars(): Object {
    return this.plugin?.getAvatars();
  }

  public get localUser(): UserOn3D {
    return this.IntegrationUsersService.user;
  }

  /**
   * @function addUser
   * @description add new user to list
   * @param {UserTo3D} user
   * @returns {void}
   */
  public addUser = (user: UserTo3D): void => {
    if (!user || !user.id || user.isAudience) return;
    const userOn3D = this.IntegrationUsersService.createUserOn3D(user);

    this.IntegrationUsersService.addUserToList(userOn3D);
    // audience listens to the hosts broadcast channel
    this.RealtimeService.subscribeToParticipantUpdate(userOn3D.id, this.onParticipantUpdated);

    this.createAvatar(userOn3D);
    this.createPointer(userOn3D);
  };

  /**
   * @function removeUser
   * @description remove user from list
   * @param {UserOn3D} user
   * @param unsubscribe
   * @returns {void}
   */
  public removeUser = (user: UserOn3D, unsubscribe): void => {
    this.IntegrationUsersService.removeUser(user);

    this.destroyAvatar(user);
    this.destroyPointer(user);
    if (unsubscribe) {
      this.RealtimeService.unsubscribeFromParticipantUpdate(user.id, this.onParticipantUpdated);
    }
  };

  /**
   * @function updateUser
   * @description update user
   * @param {UserOn3D} user
   * @returns {void}
   */
  public updateUser = (user: UserOn3D): void => {
    if (!this.users || this.users.length === 0 || !user || !user.id) {
      return;
    }
    const userToBeUpdated = this.users.find((oldUser) => oldUser.id === user.id);

    if (!userToBeUpdated) {
      this.addUser(user);
      return;
    }
    let hasDifferentAvatarProperties = false;
    if (
      userToBeUpdated.avatar?.model !== user.avatar?.model ||
      !isEqual(userToBeUpdated.avatarConfig, user.avatarConfig)
    ) {
      hasDifferentAvatarProperties = true;
    }
    if (hasDifferentAvatarProperties) {
      this.removeUser(user, false);
      const userOn3D = this.IntegrationUsersService.createUserOn3D(user);
      this.IntegrationUsersService.addUserToList(userOn3D);

      this.createAvatar(userOn3D);
      this.createPointer(userOn3D);
    } else {
      const index = this.IntegrationUsersService.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.IntegrationUsersService.users[index] = user;
      }
    }
  };

  /**
   * @function createLocalUser
   * @description creates the user with what is needed for the 3D environment
   * @param {UserTo3D} localUser
   * @returns {void}
   */
  private createLocalUser = (localUser: UserTo3D): void => {
    const user = this.IntegrationUsersService.createUserOn3D(localUser);
    this.IntegrationUsersService.setLocalUser(user);
  };

  /**
   * @function createUserList
   * @description creates the local user list that is needed for the 3D environment
   * @param {UserOn3D[]} userList
   * @returns {void}
   */
  private createUserList = (userList: UserTo3D[]): void => {
    const userOn3DList = userList.map((user) => this.IntegrationUsersService.createUserOn3D(user));
    userOn3DList.forEach((user) => {
      this.addUser(user);
    });
  };

  /**
   * @function onParticipantJoined
   * @description add users as they enter the RealtimeService
   * @param {} Participant
   * @returns {void}
   */
  private onParticipantJoined = (Participant): void => {
    const { userId, name, avatar, avatarConfig, isAudience } = Participant.data;

    this.addUser({
      id: userId,
      name,
      avatar,
      avatarConfig,
      isAudience,
    });
  };

  /**
   * @function onParticipantLeave
   * @description removes users as they leave the RealtimeService
   * @param {} Participant
   * @returns {void}
   */
  private onParticipantLeave = (Participant): void => {
    if (!this.users?.length) return;

    const user = this.users.find((user) => user.id === Participant.clientId);

    if (!user) return;

    this.removeUser(user, true);
  };

  /**
   * @function onParticipantUpdated
   * @description update user
   * @param {} Participant
   * @returns {void}
   */
  private onParticipantUpdated = (Participant): void => {
    const { userId, name, avatar, avatarConfig, position, rotation } = Participant.data;
    this.updateUser({
      position,
      rotation,
      id: userId,
      name,
      avatar,
      avatarConfig,
    });
    if (this.followUserId) {
      this.plugin.goToUser(this.followUserId);
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
    const { gather, hostClientId, followUserId } = room;
    this.followUserId = followUserId;
    if (gather) {
      this.plugin.goToUser(hostClientId);
    }
  };
}
