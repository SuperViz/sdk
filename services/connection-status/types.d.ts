import { MeetingConnectionStatus } from '../../common/types/events.types';
export interface DefaultConnectionService {
    connectionStatus: MeetingConnectionStatus;
    addListeners: () => void;
    removeListeners: () => void;
    updateMeetingConnectionStatus: (newStatus: MeetingConnectionStatus) => void;
}
export declare type WindowConnectionStatus = 'online' | 'offline';
