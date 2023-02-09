import { ObserverHelper } from '@superviz/immersive-core';

import { MeetingColors, MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import { logger } from '../../../common/utils';

import { DefaultRealtimeService, SlotColor } from './types';

export class RealtimeService implements DefaultRealtimeService {
  public participantObservers: ObserverHelper[];
  public participantsObserver: ObserverHelper;
  public participantJoinedObserver: ObserverHelper;
  public participantLeaveObserver: ObserverHelper;
  public joinRoomObserver: ObserverHelper;
  public reconnectObserver: ObserverHelper;
  public roomInfoUpdatedObserver: ObserverHelper;
  public roomListUpdatedObserver: ObserverHelper;
  public masterParticipantObserver: ObserverHelper;
  public realtimeStateObserver: ObserverHelper;
  public syncPropertiesObserver: ObserverHelper;
  public kickAllParticipantsObserver: ObserverHelper;
  public authenticationObserver: ObserverHelper;

  constructor() {
    this.participantObservers = [];

    this.participantsObserver = new ObserverHelper({ logger });
    this.participantJoinedObserver = new ObserverHelper({ logger });
    this.participantLeaveObserver = new ObserverHelper({ logger });
    this.joinRoomObserver = new ObserverHelper({ logger });
    this.syncPropertiesObserver = new ObserverHelper({ logger });
    this.reconnectObserver = new ObserverHelper({ logger });

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new ObserverHelper({ logger });
    this.roomListUpdatedObserver = new ObserverHelper({ logger });
    this.masterParticipantObserver = new ObserverHelper({ logger });
    this.realtimeStateObserver = new ObserverHelper({ logger });
    this.kickAllParticipantsObserver = new ObserverHelper({ logger });
    this.authenticationObserver = new ObserverHelper({ logger });
  }

  /**
   * @function subscribeToParticipantUpdate
   * @description subscribe to a participant's events
   * @param {string} participantId
   * @param {Function} callback
   * @returns {void}
   */
  public subscribeToParticipantUpdate(participantId: string, callback: Function): void {
    if (!this.participantObservers[participantId]) {
      this.participantObservers[participantId] = new ObserverHelper({ logger });
    }

    this.participantObservers[participantId].subscribe(callback);
  }

  /**
   * @function unsubscribeFromParticipantUpdate
   * @description unsubscribe to a participant's events
   * @param {string} participantId
   * @param {Function} callback
   * @returns {void}
   */
  public unsubscribeFromParticipantUpdate(participantId: string, callback: Function): void {
    if (this.participantObservers[participantId]) {
      this.participantObservers[participantId].unsubscribe(callback);
    }
  }

  /**
   * @function getParticipantColor
   * @description get slot color string
   * @returns {string}
   * @param slotIndex
   */
  public getSlotColor(slotIndex: number): SlotColor {
    const index = slotIndex ?? MeetingColors.gray;
    return {
      color: MeetingColorsHex[index],
      name: MeetingColors[index],
    };
  }
}
