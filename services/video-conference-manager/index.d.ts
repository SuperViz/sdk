import { MeetingEvent, RealtimeEvent, MeetingControlsEvent, TranscriptionEvent } from '../../common/types/events.types';
import { StartMeetingOptions } from '../../common/types/meeting.types';
import { Observer } from '../../common/utils';
import { VideoFrameState, VideoManagerOptions } from './types';
export default class VideoConfereceManager {
    private readonly logger;
    private messageBridge;
    private bricklayer;
    private browserService;
    private frameOffset;
    private frameLocale;
    private meetingAvatars;
    private readonly frameConfig;
    private readonly customColors;
    readonly frameStateObserver: Observer;
    readonly frameSizeObserver: Observer;
    readonly realtimeObserver: Observer;
    readonly hostChangeObserver: Observer;
    readonly gridModeChangeObserver: Observer;
    readonly followParticipantObserver: Observer;
    readonly goToParticipantObserver: Observer;
    readonly gatherParticipantsObserver: Observer;
    readonly waitingForHostObserver: Observer;
    readonly drawingChangeObserver: Observer;
    readonly sameAccountErrorObserver: Observer;
    readonly devicesObserver: Observer;
    readonly meetingStateObserver: Observer;
    readonly meetingConnectionObserver: Observer;
    readonly participantJoinedObserver: Observer;
    readonly participantLeftObserver: Observer;
    frameState: VideoFrameState;
    constructor(options: VideoManagerOptions);
    get isWaterMarkEnabled(): boolean;
    get isHorizontalCameraEnabled(): boolean;
    /**
     * @function layoutModalsAndCamerasConfig
     * @returns {any}
     */
    private layoutModalsAndCamerasConfig;
    /**
     * @function onFrameLoad
     * @returns {void}
     */
    private onFrameLoad;
    /**
     * @function addMessagesListeners
     * @description Adds listeners for various meeting and realtime events using the message bridge.
     * @returns {void}
     */
    private addMessagesListeners;
    /**
     * @function setFrameOffset
     * @description adds the offset to aid frame positioning.
     * @param {Offset} customOffset
     * @returns {void}
     */
    private setFrameOffset;
    private setCustomColors;
    /**
     * @function setFrameStyle
     * @description injects the style and positions the frame container.
     * @param {string} position
     * @returns {void}
     */
    private setFrameStyle;
    /**
     * @function onFrameDimensionsUpdate
     * @param {Dimensions} params
     * @description callback that updates the frame size according to the size of the inner content
     * @returns {void}
     */
    private onFrameDimensionsUpdate;
    /**
     * @function onWindowResize
     * @description update window-host size to iframe
     * @returns {void}
     */
    private onWindowResize;
    /**
     * @function updateFrameLocale
     * @description update default language and locales
     * @returns {void}
     */
    private updateFrameLocale;
    /**
     * @function updateMeetingAvatar
     * @description update list of avatars
     * @returns {void}
     */
    private updateMeetingAvatars;
    /**
     * @function onParticipantLeft
     * @param {Participant} participant
     * @description callback that is triggered whenever a participant left the meeting room
     * @returns {void}
     */
    private onParticipantLeft;
    /**
     * @function updateFrameState
     * @description updates frame state
     * @param {VideoFrameState} state
     * @returns {void}
     */
    private updateFrameState;
    /**
     * @function realtimeJoin
     * @param participantInfo
     * @returns {void}
     */
    private realtimeJoin;
    /**
     * @function onMeetingHostChange
     * @param {string} hostId
     * @returns {void}
     */
    private onMeetingHostChange;
    /**
     * @function onFollowParticipantDidChange
     * @param {string} participantId
     * @returns {void}
     */
    private onFollowParticipantDidChange;
    /**
     * @function onGoToDidChange
     * @param {string} participantId
     * @returns {void}
     */
    private onGoToDidChange;
    /**
     * @function onGather
     * @returns {void}
     */
    private onGather;
    /**
     * @function onGridModeChange
     * @param {boolean} isGridModeEnable
     * @returns {void}
     */
    private onGridModeChange;
    /**
     * @function onDrawingChange
     * @param drawing {DrawingData}
     * @returns {void}
     */
    private onDrawingChange;
    /**
     * @function onSameAccountError
     * @param {string} error
     * @returns {void}
     */
    private onSameAccountError;
    /**
     * @function onDevicesChange
     * @param {DeviceEvent} state
     * @returns {void}
     */
    private onDevicesChange;
    /**
     * @function meetingStateUpdate
     * @param {MeetingState} newState
     * @returns {void}
     */
    private meetingStateUpdate;
    /**
     * @function onConnectionStatusChange
     * @param {MeetingConnectionStatus} newStatus
     * @returns {void}
     */
    private onConnectionStatusChange;
    private onWaitingForHostDidChange;
    /**
     * @function start
     * @param {StartMeetingOptions} options
     * @returns {void}
     */
    start(options: StartMeetingOptions): void;
    /**
     * @function leave
     * @returns {void}
     */
    leave(): void;
    /**
     * @function destroy
     * @returns {void}
     */
    destroy(): void;
    /**
     * @function publishMessageToFrame
     * @description Publishes a message to the frame
     * @param message - The event to publish
     * @param payload  - The payload to publish
     */
    publishMessageToFrame(event: MeetingControlsEvent | MeetingEvent | RealtimeEvent | TranscriptionEvent, payload?: unknown): void;
}
