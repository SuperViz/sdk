export declare enum MeetingEvent {
    MEETING_START = "meeting.start",
    MEETING_LEAVE = "meeting.leave",
    MEETING_PARTICIPANT_AMOUNT_UPDATE = "meeting.amount-of-participants-update",
    MEETING_PARTICIPANT_LIST_UPDATE = "meeting.participant-list-update",
    MEETING_PARTICIPANT_JOINED = "meeting.participant-joined",
    MEETING_PARTICIPANT_LEFT = "meeting.participant-left",
    MEETING_JOIN = "meeting.join",
    MEETING_PARTICIPANT_PROPERTIES = "meeting.participant-properties",
    MEETING_HOST_CHANGE = "meeting.host-change",
    MEETING_GRID_MODE_CHANGE = "meeting.grid-mode-change",
    MEETING_SAME_PARTICIPANT_ERROR = "meeting.same-participant-error",
    MEETING_DEVICES_CHANGE = "meeting.devices-change",
    MEETING_KICK_PARTICIPANTS = "meeting.kick-all-participants",
    MEETING_STATE_UPDATE = "meeting.state-update",
    MEETING_CONNECTION_STATUS_CHANGE = "meeting.connection-status-change",
    MY_PARTICIPANT_UPDATED = "my-participant.update",
    MY_PARTICIPANT_LEFT = "my-participant.left",
    MY_PARTICIPANT_JOINED = "my-participant.joined",
    HEARTBEAT = "heartbeat",
    DESTROY = "destroy"
}
export declare enum FrameEvent {
    FRAME_LOAD = "frame.load",
    FRAME_SIZE_UPDATE = "frame.size-update",
    FRAME_DIMENSIONS_UPDATE = "frame.dimensions-update",
    FRAME_PARENT_SIZE_UPDATE = "frame.parent-window-size-update",
    FRAME_LOCALE_UPDATE = "frame.locales-update",
    FRAME_AVATAR_LIST_UPDATE = "frame.avatar-list-update",
    FRAME_COLOR_LIST_UPDATE = "frame.color-list-update"
}
export declare enum MeetingControlsEvent {
    TOGGLE_MEETING_CHAT = "meeting-controls.toggle-chat",
    TOGGLE_MEETING_SETUP = "meeting-controls.toggle-setup",
    TOGGLE_MICROPHONE = "meeting-controls.toggle-microphone",
    TOGGLE_CAM = "meeting-controls.toggle-cam",
    TOGGLE_SCREENSHARE = "meeting-controls.toggle-screenshare",
    HANG_UP = "hang-up"
}
export declare enum RealtimeEvent {
    REALTIME_JOIN = "realtime.join",
    REALTIME_PARTICIPANT_LIST_UPDATE = "realtime.participant-list-update",
    REALTIME_HOST_CHANGE = "realtime.host-change",
    REALTIME_GRID_MODE_CHANGE = "realtime.grid-mode-change",
    REALTIME_WAIT_FOR_HOST = "realtime.wait-for-host",
    REALTIME_AUTHENTICATION_FAILED = "realtime.authentication-failed",
    REALTIME_GO_TO_PARTICIPANT = "realtime.go-to-participant",
    REALTIME_GATHER = "realtime.gather",
    REALTIME_FOLLOW_PARTICIPANT = "realtime.follow-participant",
    REALTIME_SET_AVATAR = "realtime.set-avatar"
}
export declare enum MeetingState {
    MEETING_FAILED = -1,
    MEETING_DISCONNECTED = 0,
    MEETING_INITIALIZING = 1,
    MEETING_READY_TO_JOIN = 2,
    MEETING_CONNECTING = 3,
    MEETING_CONNECTED = 4,
    MEETING_RECONNECT = 5,
    FRAME_INITIALIZING = 6,
    FRAME_INITIALIZED = 7,
    FRAME_UNINITIALIZED = 8
}
/**
 * @enum { number }
 * @description Defines the possible Meeting connection states
 * @options
 * * NOT_AVAILABLE: Audio/video service is disconnected;
 * * GOOD: Good connection;
 * * BAD: Bad connection. Turn off video is recommended;
 * * POOR: Poor connection. Participant connection and/or PC not meet the minimum requirements;
 * * DISCONNECTED: Audio/video is not able to send/receive network packets for at least 10 secs;
 * * RECONNECTING: Reconnecting due to loss of connection.
 * * LOST_CONNECTION: The connection to the audio/video service was lost.
 * * You must end the meeting and start again.
 */
export declare enum MeetingConnectionStatus {
    NOT_AVAILABLE = 0,
    GOOD = 1,
    BAD = 2,
    POOR = 3,
    DISCONNECTED = 4,
    RECONNECTING = 5,
    LOST_CONNECTION = 6
}
export declare enum DeviceEvent {
    NO_CAM = "devices.no-cam",
    NO_DEVICES = "devices.no-devices",
    DEVICES_BLOCKED = "devices.blocked",
    DEVICES_CAM_BLOCKED = "devices.cam-blocked",
    DEVICES_INITIALIZATION_ERROR = "devices.inititalization-error",
    DEVICES_UNKNOWN_ERROR = "devices.unknown-error"
}
export declare type Dimensions = {
    width: number | null;
    height: number | null;
};
