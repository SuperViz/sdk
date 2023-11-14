import { MeetingColors, MeetingColorsHex } from '../../../common/types/meeting-colors.types';
import { Logger, Observer } from '../../../common/utils';

import { DefaultRealtimeService, SlotColor } from './types';

export class RealtimeService implements DefaultRealtimeService {
  protected readonly logger: Logger;

  public participantObservers: Observer[];
  public participants3DObservers: Observer[];
  public participantsObserver: Observer;
  public participantJoinedObserver: Observer;
  public participantLeaveObserver: Observer;
  public reconnectObserver: Observer;
  public roomInfoUpdatedObserver: Observer;
  public roomListUpdatedObserver: Observer;
  public hostObserver: Observer;
  public hostAvailabilityObserver: Observer;
  public realtimeStateObserver: Observer;
  public syncPropertiesObserver: Observer;
  public kickAllParticipantsObserver: Observer;
  public kickParticipantObserver: Observer;
  public authenticationObserver: Observer;
  public commentsObserver: Observer;
  public presenceMouseObserver: Observer;
  public presenceMouseParticipantLeaveObserver: Observer;
  public presenceMouseParticipantJoinedObserver: Observer;
  public presenceSlotsInfosObserver: Observer;
  public presence3dObserver: Observer;
  public presence3dLeaveObserver: Observer;
  public presence3dJoinedObserver: Observer;
  public domainRefusedObserver: Observer;

  constructor() {
    this.participantObservers = [];
    this.participants3DObservers = [];

    this.logger = new Logger('@superviz/sdk/realtime-service');

    this.participantsObserver = new Observer({ logger: this.logger });
    this.participantJoinedObserver = new Observer({ logger: this.logger });
    this.participantLeaveObserver = new Observer({ logger: this.logger });
    this.syncPropertiesObserver = new Observer({ logger: this.logger });
    this.reconnectObserver = new Observer({ logger: this.logger });

    // Room info observers helpers
    this.roomInfoUpdatedObserver = new Observer({ logger: this.logger });
    this.roomListUpdatedObserver = new Observer({ logger: this.logger });
    this.hostObserver = new Observer({ logger: this.logger });
    this.hostAvailabilityObserver = new Observer({ logger: this.logger });
    this.realtimeStateObserver = new Observer({ logger: this.logger });
    this.kickAllParticipantsObserver = new Observer({ logger: this.logger });
    this.kickParticipantObserver = new Observer({ logger: this.logger });
    this.authenticationObserver = new Observer({ logger: this.logger });
    this.domainRefusedObserver = new Observer({ logger: this.logger });

    // Comments observer
    this.commentsObserver = new Observer({ logger: this.logger });

    // presence mouse
    this.presenceMouseObserver = new Observer({ logger: this.logger });
    this.presenceMouseParticipantLeaveObserver = new Observer({ logger: this.logger });
    this.presenceMouseParticipantJoinedObserver = new Observer({ logger: this.logger });
    this.presenceSlotsInfosObserver = new Observer({ logger: this.logger });

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
   * @function subscribeToParticipantUpdate
   * @description subscribe to a participant's events
   * @param {string} participantId
   * @param {Function} callback
   * @returns {void}
   */
  public subscribeToParticipant3DUpdate(participantId: string, callback: Function): void {
    if (!this.participants3DObservers[participantId]) {
      this.participants3DObservers[participantId] = new Observer({ logger: this.logger });
    }

    this.participants3DObservers[participantId].subscribe(callback);
  }

  /**
   * @function unsubscribeFromParticipantUpdate
   * @description unsubscribe to a participant's events
   * @param {string} participantId
   * @param {Function} callback
   * @returns {void}
   */
  public unsubscribeFromParticipant3DUpdate(participantId: string, callback: Function): void {
    if (this.participants3DObservers[participantId]) {
      this.participants3DObservers[participantId].unsubscribe(callback);
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
