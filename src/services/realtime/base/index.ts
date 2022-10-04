import { ObserverHelper } from '@superviz/immersive-core';

import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { logger } from '../../../common/utils';

import { DefaultRealtimeService } from './types';

export class RealtimeService implements DefaultRealtimeService {
  actorObservers: ObserverHelper[];
  actorsObserver: ObserverHelper;
  subscribeToActorsUpdate: Function;
  unsubscribeFromActorsUpdate: Function;
  actorJoinedObserver: ObserverHelper;
  subscribeToActorJoined: Function;
  unsubscribeFromActorJoined: Function;
  actorLeaveObserver: ObserverHelper;
  subscribeToActorLeave: Function;
  unsubscribeFromActorLeave: Function;
  joinRoomObserver: ObserverHelper;
  subscribeToJoinRoom: Function;
  unsubscribeFromJoinRoom: Function;
  reconnectObserver: ObserverHelper;
  subscribeToReconnectUpdate: Function;
  unsubscribeFromReconnectUpdate: Function;
  roomInfoUpdatedObserver: ObserverHelper;
  subscribeToRoomInfoUpdated: Function;
  unsubscribeFromRoomInfoUpdated: Function;
  roomListUpdatedObserver: ObserverHelper;
  subscribeToRoomListUpdated: Function;
  unsubscribeFromRoomListUpdated: Function;
  masterActorObserver: ObserverHelper;
  subscribeToMasterActorUpdate: Function;
  unsubscribeFromMasterActorUpdate: Function;
  realtimeStateObserver: ObserverHelper;
  subscribeToRealtimeState: Function;
  unsubscribeFromRealtimeState: Function;
  syncPropertiesObserver: ObserverHelper;
  subscribeToSyncProperties: Function;
  unsubscribeFromSyncProperties: Function;
  waitForHostObserver: ObserverHelper;
  subscribeToWaitForHost: Function;
  unsubscribeFromWaitForHost: Function;
  kickAllUsersObserver: ObserverHelper;
  subscribeToKickAllUsers: Function;
  unsubscribeFromKickAllUsers: Function;
  authenticationObserver: ObserverHelper;

  constructor() {
    this.actorObservers = [];

    this.actorsObserver = new ObserverHelper({ logger });
    this.subscribeToActorsUpdate = this.actorsObserver.subscribe;
    this.unsubscribeFromActorsUpdate = this.actorsObserver.unsubscribe;

    this.actorJoinedObserver = new ObserverHelper({ logger });
    this.subscribeToActorJoined = this.actorJoinedObserver.subscribe;
    this.unsubscribeFromActorJoined = this.actorJoinedObserver.unsubscribe;

    this.actorLeaveObserver = new ObserverHelper({ logger });
    this.subscribeToActorLeave = this.actorLeaveObserver.subscribe;
    this.unsubscribeFromActorLeave = this.actorLeaveObserver.unsubscribe;

    this.joinRoomObserver = new ObserverHelper({ logger });
    this.subscribeToJoinRoom = this.joinRoomObserver.subscribe;
    this.unsubscribeFromJoinRoom = this.joinRoomObserver.unsubscribe;

    this.syncPropertiesObserver = new ObserverHelper({ logger });
    this.subscribeToSyncProperties = this.syncPropertiesObserver.subscribe;
    this.unsubscribeFromSyncProperties = this.syncPropertiesObserver.unsubscribe;

    this.reconnectObserver = new ObserverHelper({ logger });
    this.subscribeToReconnectUpdate = this.reconnectObserver.subscribe;
    this.unsubscribeFromReconnectUpdate = this.reconnectObserver.unsubscribe;

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new ObserverHelper({ logger });
    this.subscribeToRoomInfoUpdated = this.roomInfoUpdatedObserver.subscribe;
    this.unsubscribeFromRoomInfoUpdated = this.roomInfoUpdatedObserver.unsubscribe;

    this.roomListUpdatedObserver = new ObserverHelper({ logger });
    this.subscribeToRoomListUpdated = this.roomListUpdatedObserver.subscribe;
    this.unsubscribeFromRoomListUpdated = this.roomListUpdatedObserver.unsubscribe;

    this.masterActorObserver = new ObserverHelper({ logger });
    this.subscribeToMasterActorUpdate = this.masterActorObserver.subscribe;
    this.unsubscribeFromMasterActorUpdate = this.masterActorObserver.unsubscribe;

    this.realtimeStateObserver = new ObserverHelper({ logger });
    this.subscribeToRealtimeState = this.realtimeStateObserver.subscribe;
    this.unsubscribeFromRealtimeState = this.realtimeStateObserver.unsubscribe;

    this.waitForHostObserver = new ObserverHelper({ logger });
    this.subscribeToWaitForHost = this.waitForHostObserver.subscribe;
    this.unsubscribeFromWaitForHost = this.waitForHostObserver.unsubscribe;

    this.kickAllUsersObserver = new ObserverHelper({ logger });
    this.subscribeToKickAllUsers = this.kickAllUsersObserver.subscribe;
    this.unsubscribeFromKickAllUsers = this.kickAllUsersObserver.unsubscribe;
    this.authenticationObserver = new ObserverHelper({ logger });
  }

  /**
   * @function subscribeToActorUpdate
   * @description subscribe to a user's events
   * @param {string} userId
   * @param {Function} callback
   * @returns {void}
   */
  public subscribeToActorUpdate(userId: string, callback: Function): void {
    if (!this.actorObservers[userId]) {
      this.actorObservers[userId] = new ObserverHelper({ logger });
    }

    this.actorObservers[userId].subscribe(callback);
  }

  /**
   * @function subscribeToActorUpdate
   * @description unsubscribe to a user's events
   * @param {string} userId
   * @param {Function} callback
   * @returns {void}
   */
  public unsubscribeFromActorUpdate(userId: string, callback: Function): void {
    this.actorObservers[userId].unsubscribe(callback);
  }

  /**
   * @function getActorColor
   * @description get user color
   * @param {number} index
   * @returns {string}
   */
  public getActorColor(index: number): string {
    let avatarColorIndex = index;
    avatarColorIndex %= 16;
    return MeetingColors[avatarColorIndex];
  }
}
