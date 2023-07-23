import { MeetingColors, MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import { Logger, Observer } from '../../../common/utils';

import { DefaultRealtimeService, SlotColor } from './types';

export class RealtimeService implements DefaultRealtimeService {
  protected readonly logger: Logger;

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
  public authenticationObserver: Observer;

  constructor() {
    this.participantObservers = [];

    this.logger = new Logger('@superviz/sdk/realtime-service');

    this.participantsObserver = new Observer({ logger: this.logger });
    this.participantJoinedObserver = new Observer({ logger: this.logger });
    this.participantLeaveObserver = new Observer({ logger: this.logger });
    this.syncPropertiesObserver = new Observer({ logger: this.logger });
    this.reconnectObserver = new Observer({ logger: this.logger });

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new Observer({ logger: this.logger });
    this.roomListUpdatedObserver = new Observer({ logger: this.logger });
    this.hostObserver = new Observer({ logger: this.logger });
    this.realtimeStateObserver = new Observer({ logger: this.logger });
    this.kickAllParticipantsObserver = new Observer({ logger: this.logger });
    this.authenticationObserver = new Observer({ logger: this.logger });
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
      this.participantObservers[participantId] = new Observer({ logger: this.logger });
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
