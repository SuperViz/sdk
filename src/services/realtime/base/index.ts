import { MeetingColors, MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import { Observer, logger } from '../../../common/utils';

import { DefaultRealtimeService, SlotColor } from './types';

export class RealtimeService implements DefaultRealtimeService {
  public participantObservers: Observer[];
  public participantsObserver: Observer;
  public participantJoinedObserver: Observer;
  public participantLeaveObserver: Observer;
  public reconnectObserver: Observer;
  public roomInfoUpdatedObserver: Observer;
  public roomListUpdatedObserver: Observer;
  public hostObserver: Observer;
  public realtimeStateObserver: Observer;
  public syncPropertiesObserver: Observer;
  public kickAllParticipantsObserver: Observer;
  public kickParticipantObserver: Observer;
  public authenticationObserver: Observer;

  constructor() {
    this.participantObservers = [];

    this.participantsObserver = new Observer({ logger });
    this.participantJoinedObserver = new Observer({ logger });
    this.participantLeaveObserver = new Observer({ logger });
    this.syncPropertiesObserver = new Observer({ logger });
    this.reconnectObserver = new Observer({ logger });

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new Observer({ logger });
    this.roomListUpdatedObserver = new Observer({ logger });
    this.hostObserver = new Observer({ logger });
    this.realtimeStateObserver = new Observer({ logger });
    this.kickAllParticipantsObserver = new Observer({ logger });
    this.kickParticipantObserver = new Observer({ logger });
    this.authenticationObserver = new Observer({ logger });
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
      this.participantObservers[participantId] = new Observer({ logger });
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
