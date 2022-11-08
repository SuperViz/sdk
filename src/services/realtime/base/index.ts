import { ObserverHelper } from '@superviz/immersive-core';

import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { logger } from '../../../common/utils';

import { DefaultRealtimeService } from './types';

export class RealtimeService implements DefaultRealtimeService {
  public actorObservers: ObserverHelper[];
  public actorsObserver: ObserverHelper;
  public actorJoinedObserver: ObserverHelper;
  public actorLeaveObserver: ObserverHelper;
  public joinRoomObserver: ObserverHelper;
  public reconnectObserver: ObserverHelper;
  public roomInfoUpdatedObserver: ObserverHelper;
  public roomListUpdatedObserver: ObserverHelper;
  public masterActorObserver: ObserverHelper;
  public realtimeStateObserver: ObserverHelper;
  public syncPropertiesObserver: ObserverHelper;
  public kickAllUsersObserver: ObserverHelper;
  public authenticationObserver: ObserverHelper;

  constructor() {
    this.actorObservers = [];

    this.actorsObserver = new ObserverHelper({ logger });
    this.actorJoinedObserver = new ObserverHelper({ logger });
    this.actorLeaveObserver = new ObserverHelper({ logger });
    this.joinRoomObserver = new ObserverHelper({ logger });
    this.syncPropertiesObserver = new ObserverHelper({ logger });
    this.reconnectObserver = new ObserverHelper({ logger });

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new ObserverHelper({ logger });
    this.roomListUpdatedObserver = new ObserverHelper({ logger });
    this.masterActorObserver = new ObserverHelper({ logger });
    this.realtimeStateObserver = new ObserverHelper({ logger });
    this.kickAllUsersObserver = new ObserverHelper({ logger });
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
