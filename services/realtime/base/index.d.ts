import { Logger, Observer } from '../../../common/utils';
import { DefaultRealtimeService, SlotColor } from './types';
export declare class RealtimeService implements DefaultRealtimeService {
    protected readonly logger: Logger;
    participantObservers: Observer[];
    participants3DObservers: Observer[];
    participantsObserver: Observer;
    participantJoinedObserver: Observer;
    participantLeaveObserver: Observer;
    reconnectObserver: Observer;
    roomInfoUpdatedObserver: Observer;
    roomListUpdatedObserver: Observer;
    hostObserver: Observer;
    hostAvailabilityObserver: Observer;
    realtimeStateObserver: Observer;
    syncPropertiesObserver: Observer;
    kickAllParticipantsObserver: Observer;
    kickParticipantObserver: Observer;
    authenticationObserver: Observer;
    commentsObserver: Observer;
    presenceMouseObserver: Observer;
    presenceMouseParticipantLeaveObserver: Observer;
    presenceMouseParticipantJoinedObserver: Observer;
    presence3dObserver: Observer;
    presence3dLeaveObserver: Observer;
    presence3dJoinedObserver: Observer;
    constructor();
    /**
     * @function subscribeToParticipantUpdate
     * @description subscribe to a participant's events
     * @param {string} participantId
     * @param {Function} callback
     * @returns {void}
     */
    subscribeToParticipantUpdate(participantId: string, callback: Function): void;
    /**
     * @function unsubscribeFromParticipantUpdate
     * @description unsubscribe to a participant's events
     * @param {string} participantId
     * @param {Function} callback
     * @returns {void}
     */
    unsubscribeFromParticipantUpdate(participantId: string, callback: Function): void;
    /**
     * @function subscribeToParticipantUpdate
     * @description subscribe to a participant's events
     * @param {string} participantId
     * @param {Function} callback
     * @returns {void}
     */
    subscribeToParticipant3DUpdate(participantId: string, callback: Function): void;
    /**
     * @function unsubscribeFromParticipantUpdate
     * @description unsubscribe to a participant's events
     * @param {string} participantId
     * @param {Function} callback
     * @returns {void}
     */
    unsubscribeFromParticipant3DUpdate(participantId: string, callback: Function): void;
    /**
     * @function getSlotColor
     * @description get slot color string
     * @returns {string}
     * @param slotIndex
     */
    getSlotColor(slotIndex: number): SlotColor;
}
