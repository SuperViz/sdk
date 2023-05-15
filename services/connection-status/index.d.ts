import { ObserverHelper } from '@superviz/immersive-core';
import { MeetingConnectionStatus } from '../../common/types/events.types';
import { DefaultConnectionService } from './types';
export declare class ConnectionService implements DefaultConnectionService {
    connectionStatus: MeetingConnectionStatus;
    oldConnectionStatus: MeetingConnectionStatus;
    connectionStatusObserver: ObserverHelper;
    constructor();
    /**
     * @function addListeners
     * @description add browser listeners to connection status
     * @returns {void}
     */
    addListeners(): void;
    /**
     * @function removeListeners
     * @description remove browser listeners to connection status
     * @returns {void}
     */
    removeListeners(): void;
    /**
     * @function updateMeetingConnectionStatus
     * @description update connection status of audio/video services in ConnectionService
     * @param {MeetingConnectionStatus} newStatus - new connection status
     * @returns {void}
     */
    updateMeetingConnectionStatus: (newStatus: MeetingConnectionStatus) => void;
    /**
     * @function onUpdateBrowserOnlineStatus
     * @description updates connection status based on browser connection status
     * @param {Event} event - DOM Event
     * @returns {void}
     */
    private onUpdateBrowserOnlineStatus;
}
