import { MeetingColors, MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import { Logger, Observer } from '../../../common/utils';

import { DefaultRealtimeService, SlotColor } from './types';

export class RealtimeService implements DefaultRealtimeService {
  protected readonly logger: Logger;

  public participantObservers: Observer[];
  public participantsObserver: Observer;
  public participantLeaveObserver: Observer;
  public roomInfoUpdatedObserver: Observer;
  public roomListUpdatedObserver: Observer;
  public realtimeStateObserver: Observer;
  public kickAllParticipantsObserver: Observer;
  public kickParticipantObserver: Observer;
  public authenticationObserver: Observer;
  public presenceMouseObserver: Observer;
  public presence3dObserver: Observer;
  public presence3dLeaveObserver: Observer;
  public presence3dJoinedObserver: Observer;
  public sameAccountObserver: Observer;

  constructor() {
    this.participantObservers = [];

    this.logger = new Logger('@superviz/sdk/realtime-service');

    this.participantsObserver = new Observer({ logger: this.logger });
    this.participantLeaveObserver = new Observer({ logger: this.logger });
    this.sameAccountObserver = new Observer({ logger: this.logger });

    // Room info observers helpers
    this.roomInfoUpdatedObserver = new Observer({ logger: this.logger });
    this.roomListUpdatedObserver = new Observer({ logger: this.logger });
    this.realtimeStateObserver = new Observer({ logger: this.logger });
    this.kickAllParticipantsObserver = new Observer({ logger: this.logger });
    this.kickParticipantObserver = new Observer({ logger: this.logger });
    this.authenticationObserver = new Observer({ logger: this.logger });

    // presence mouse
    this.presenceMouseObserver = new Observer({ logger: this.logger });

    // presence 3d

    this.presence3dObserver = new Observer({ logger: this.logger });
    this.presence3dLeaveObserver = new Observer({ logger: this.logger });
    this.presence3dJoinedObserver = new Observer({ logger: this.logger });
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
   * @function getSlotColor
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
