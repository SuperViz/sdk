import { ObserverHelper } from '@superviz/immersive-core';
import { StartMeetingOptions } from '../../common/types/meeting.types';
import { VideoFrameState, VideoManagerOptions } from './types';
export default class VideoConfereceManager {
    private messageBridge;
    private bricklayer;
    private browserService;
    private frameOffset;
    private frameLocale;
    private meetingAvatars;
    private readonly frameConfig;
    private readonly customColors;
    readonly frameStateObserver: ObserverHelper;
    readonly frameSizeObserver: ObserverHelper;
    readonly realtimeObserver: ObserverHelper;
    readonly hostChangeObserver: ObserverHelper;
    readonly gridModeChangeObserver: ObserverHelper;
    readonly followParticipantObserver: ObserverHelper;
    readonly goToParticipantObserver: ObserverHelper;
    readonly gatherParticipantsObserver: ObserverHelper;
    readonly sameAccountErrorObserver: ObserverHelper;
    readonly devicesObserver: ObserverHelper;
    readonly meetingStateObserver: ObserverHelper;
    readonly meetingConnectionObserver: ObserverHelper;
    readonly participantAmountUpdateObserver: ObserverHelper;
    readonly participantJoinedObserver: ObserverHelper;
    readonly participantAvatarObserver: ObserverHelper;
    readonly participantLeftObserver: ObserverHelper;
    readonly participantListObserver: ObserverHelper;
    frameState: VideoFrameState;
    constructor(options: VideoManagerOptions);
    /**
     * @function onFrameLoad
     * @returns {void}
     */
    private onFrameLoad;
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
     * @function onParticipantAmountUpdate
     * @param {Array<Participant>} participants
     * @description updates the number of participants within the meeting
     * @returns {void}
     */
    private onParticipantAmountUpdate;
    /**
     * @function onParticipantLeft
     * @param {Participant} participant
     * @description callback that is triggered whenever a participant left the meeting room
     * @returns {void}
     */
    private onParticipantLeft;
    /**
     * @function onParticipantListUpdate
     * @param {Array<Participant>} participants
     * @description callback that is called whenever the list of participants is updated
     * @returns {void}
     */
    private onParticipantListUpdate;
    /**
     * @function onParticipantAvatarChange
     * @description update participant avatar
     * @returns {void}
     * @param avatarLink
     */
    private onParticipantAvatarChange;
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
    onGoToDidChange: (participantId: string) => void;
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
    /**
     * @function waitForHostDidChange
     * @param {boolean} isWating
     * @returns {void}
     */
    waitForHostDidChange: (isWating: boolean) => void;
    /**
     * @function gridModeDidChange
     * @param {boolean} isGridModeEnable
     * @returns {void}
     */
    gridModeDidChange: (isGridModeEnable: boolean) => void;
    /**
     * @function participantsListDidChange
     * @param {} participantsList
     * @returns {void}
     */
    participantsListDidChange: (participantsList: any) => void;
    /**
     * @function onMasterParticipantDidChange
     * @param {string} hostId
     * @returns {void}
     */
    onMasterParticipantDidChange: (hostId: string) => void;
    /**
     * @function followParticipantDidChange
     * @param {string} participantId
     * @returns {void}
     */
    followParticipantDidChange: (participantId?: string) => void;
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
     * @function toggleChat
     * @returns {void}
     */
    toggleChat(): void;
    /**
     * @function toggleMeetingSetup
     * @returns {void}
     */
    toggleMeetingSetup(): void;
    /**
     * @function toggleMicrophone
     * @returns {void}
     */
    toggleMicrophone(): void;
    /**
     * @function toggleScreenShare
     * @returns {void}
     */
    toggleScreenShare(): void;
    /**
     * @function hangUp
     * @returns {void}
     */
    hangUp(): void;
    /**
     * @function toggleCam
     * @returns {void}
     */
    toggleCam(): void;
    /**
     * @function startTranscription
     * @returns {void}
     */
    startTranscription(language: any): void;
    /**
     * @function stopTranscription
     * @returns {void}
     */
    stopTranscription(): void;
}
