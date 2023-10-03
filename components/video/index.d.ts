import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
import { VideoComponentOptions } from './types';
export declare class VideoComponent extends BaseComponent {
    name: ComponentNames;
    protected logger: Logger;
    private participantToFrameList;
    private participantsOnMeeting;
    private videoManager;
    private connectionService;
    private browserService;
    private videoConfig;
    private params?;
    constructor(params?: VideoComponentOptions);
    /**
     * @function start
     * @description start video component
     * @returns {void}
     */
    protected start(): void;
    /**
     * @function destroy
     * @description destroy video component
     * @returns {void}
     */
    protected destroy(): void;
    /**
     * @function startVideo
     * @description start video manager
     * @param {VideoManagerOptions} options - video manager params
     * @returns {void}
     */
    private startVideo;
    /**
     * @function subscribeToVideoEvents
     * @description subscribe to video events
     * @returns {void}
     */
    private subscribeToVideoEvents;
    /**
     * @function unsubscribeFromVideoEvents
     * @description unsubscribe from video events
     * @returns {void}
     * */
    private unsubscribeFromVideoEvents;
    /**
     * @function suscribeToRealtimeEvents
     * @description subscribe to realtime events
     * @returns {void}
     */
    private suscribeToRealtimeEvents;
    /**
     * @function unsubscribeFromRealtimeEvents
     * @description subscribe to realtime events
     * @returns {void}
     */
    private unsubscribeFromRealtimeEvents;
    /**
     * @function createParticipantListFromAblyList
     * @description update participant list from ably participant list
     * @param {Record<string, AblyParticipant>} participants - ably participant list
     * @returns {Participant[]} participant list
     * */
    private createParticipantFromAblyPresence;
    /** Video Events */
    /**
     * @function onFrameSizeDidChange
     * @description handler for frame size change event
     * @param {Dimensions} dimensions - frame dimensions
     * @returns {void}
     * */
    private onFrameSizeDidChange;
    /**
     * @function onWaitingForHost
     * @description handler for waiting for host event
     * @param {boolean} waiting - whether or not waiting for host
     * @returns {void}
     */
    private onWaitingForHost;
    /**
     * @function onCOnnectionStatusChange
     * @description handler for connection status change event
     * @param {MeetingConnectionStatus} newStatus - new connection status
     * @returns {void}
     */
    private onConnectionStatusChange;
    /**
     * @function onMeetingStateChange
     * @description handler for meeting state change event
     * @param {MeetingState} state - meeting state
     * @returns {void}
     */
    private onMeetingStateChange;
    /**
     * @function onSameAccountError
     * @description handler for same account error event
     * @param {string} error - error message
     * @returns {void}
     * */
    private onSameAccountError;
    /**
     * @function onDevicesChange
     * @description handler for devices change event
     * @param {DeviceEvent} state - device state
     * @returns {void}
     * */
    private onDevicesChange;
    /**
     * @function onFrameStateChange
     * @description handler for frame state change event
     * @param {VideoFrameState} state - frame state
     * @returns
     */
    private onFrameStateChange;
    /**
     * @function onRealtimeEventFromFrame
     * @description handler for realtime event
     * @param {RealtimeObserverPayload} payload - realtime event payload
     * @returns {void}
     * */
    private onRealtimeEventFromFrame;
    /**
     * @function onParticipantJoined
     * @description handler for participant joined event
     * @param {Participant} participant - participant
     * @returns {void}
     */
    private onParticipantJoined;
    /**
     * @function onParticipantLeft
     * @description handler for participant left event
     * @param {Participant} _ - participant
     * @returns {void}
     */
    private onParticipantLeft;
    private onParticipantListUpdate;
    /** Realtime Events */
    /**
     * @function onKickAllParticipantsDidChange
     * @description handler for kick all participants event
     * @param {boolean} kick - whether or not to kick all participants
     * @returns {void}
     */
    private onKickAllParticipantsDidChange;
    /**
     * @function onKickLocalParticipant
     * @description handler for kick local participant event
     * @param {string} participantId - participant id
     * @returns {void}
     */
    private onKickLocalParticipant;
    /**
     * @function onRoomInfoUpdated
     * @description handler for room info update event
     * @param {AblyRealtimeData} room - room info
     * @returns {void}
     * */
    private onRoomInfoUpdated;
    /**
     * @function onRealtimeParticipantsDidChange
     * @description handler for participant list update event
     * @param {Record<string, AblyParticipant>} participants - participants
     * @returns {void}
     */
    private onRealtimeParticipantsDidChange;
    /**
     * @function onHostParticipantDidChange
     * @description handler for host participant change event
     * @param {HostObserverCallbackResponse} data - host change data
     * @returns {void}
     * */
    private onHostParticipantDidChange;
    /**
     * @function onParticipantJoinedOnRealtime
     * @description handler for participant joined event
     * @param {AblyParticipant} participant - participant
     * @returns {void}
     */
    private onParticipantJoinedOnRealtime;
    /**
     * @function onParticipantLeftOnRealtime
     * @description handler for participant left event
     * @param {AblyParticipant} participant
     * @returns {void}
     */
    private onParticipantLeftOnRealtime;
}
