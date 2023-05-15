import { ObserverHelper } from '@superviz/immersive-core';
import { DefaultRealtimeService, SlotColor } from './types';
export declare class RealtimeService implements DefaultRealtimeService {
    participantObservers: ObserverHelper[];
    participantsObserver: ObserverHelper;
    participantJoinedObserver: ObserverHelper;
    participantLeaveObserver: ObserverHelper;
    joinRoomObserver: ObserverHelper;
    reconnectObserver: ObserverHelper;
    roomInfoUpdatedObserver: ObserverHelper;
    roomListUpdatedObserver: ObserverHelper;
    masterParticipantObserver: ObserverHelper;
    realtimeStateObserver: ObserverHelper;
    syncPropertiesObserver: ObserverHelper;
    kickAllParticipantsObserver: ObserverHelper;
    authenticationObserver: ObserverHelper;
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
     * @function getParticipantColor
     * @description get slot color string
     * @returns {string}
     * @param slotIndex
     */
    getSlotColor(slotIndex: number): SlotColor;
}
