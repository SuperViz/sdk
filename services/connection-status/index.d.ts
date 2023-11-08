import { MeetingConnectionStatus } from '../../common/types/events.types';
import { Observer } from '../../common/utils';
import { DefaultConnectionService } from './types';
export declare class ConnectionService implements DefaultConnectionService {
    private readonly logger;
    connectionStatus: MeetingConnectionStatus;
    oldConnectionStatus: MeetingConnectionStatus;
    connectionStatusObserver: Observer;
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
