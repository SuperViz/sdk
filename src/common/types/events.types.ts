export enum MeetingEvent {
  FRAME_LOAD = 'frame.load',
  FRAME_SIZE_UPDATE = 'frame.size-update',
  FRAME_DIMENSIONS_UPDATE = 'frame.dimensions-update',
  FRAME_PARENT_SIZE_UPDATE = 'frame.parante-window-size-update',
  FRAME_LOCALE_UPDATE = 'frame.locales-update',
  MEETING_START = 'meeting.start',
  MEETING_LEAVE = 'meeting.leave',
  MEETING_USER_AMOUNT_UPDATE = 'meeting.amount-of-users-update',
  MEETING_USER_LIST_UPDATE = 'meeting.user-list-update',
  MEETING_USER_JOINED = 'meeting.user-joined',
  MEETING_USER_LEFT = 'meeting.user-left',
  MEETING_JOIN = 'meeting.join',
  MEETING_USER_PROPERTIES = 'meeting.user-properties',
  MEETING_HOST_CHANGE = 'meeting.host-change',
  MEETING_GRID_MODE_CHANGE = 'meeting.grid-mode-change',
  MEETING_SAME_USER_ERROR = 'meeting.same-user-error',
  MEETING_DEVICES_CHANGE = 'meeting.devices-change',
  MEETING_KICK_USERS = 'meeting.kick-all-users',
  MEETING_STATE_UPDATE = 'meeting.state-update',
  MEETING_CONNECTION_STATUS_CHANGE = 'meeting.connection-status-change',
  MEETING_AVATARS_UPDATE = 'meeting.avatars-update',
  MY_USER_UPDATED = 'my-user.update',
  MY_USER_LEFT = 'my-user.left',
  MY_USER_JOINED = 'my-user.joined',
  HEARTBEAT = 'heartbeat',
  DESTROY = 'destroy',
}

export enum MeetingControlsEvent {
  TOGGLE_MEETING_SETUP = 'meeting-controls.toggle-setup',
  TOGGLE_MICROPHONE = 'meeting-controle.toggle-microphone',
  TOGGLE_CAM = 'meeting-controle.toggle-cam',
  TOGGLE_SCREENSHARE = 'meeting-controle.toggle-screenshare',
  HANG_UP = 'hang-up',
}

export enum RealtimeEvent {
  REALTIME_JOIN = 'realtime.join',
  REALTIME_USER_LIST_UPDATE = 'realtime.user-list-update',
  REALTIME_HOST_CHANGE = 'realtime.host-change',
  REALTIME_GRID_MODE_CHANGE = 'realtime.grid-mode-change',
  REALTIME_WAIT_FOR_HOST = 'realtime.wait-for-host',
  REALTIME_AUTHENTICATION_FAILED = 'realtime.authentication-failed',
  REALTIME_GO_TO_USER = 'realtime.go-to-user',
  REALTIME_GATHER = 'realtime.gather',
  REALTIME_FOLLOW_USER = 'realtime.follow-user',
  REALTIME_SET_AVATAR = 'realtime.set-avatar',
}

export enum MeetingState {
  MEETING_FAILED = -1,
  MEETING_DISCONNECTED = 0,
  MEETING_INITIALIZING = 1,
  MEETING_READY_TO_JOIN = 2,
  MEETING_CONNECTING = 3,
  MEETING_CONNECTED = 4,
  MEETING_RECONNECT = 5,

  FRAME_INITIALIZING = 6,
  FRAME_INITIALIZED = 7,
  FRAME_UNINITIALIZED = 8,
}

/**
 * @enum { number }
 * @description Defines the possible Meeting connection states
 * @options
 * * NOT_AVAILABLE: Audio/video service is disconnected;
 * * GOOD: Good connection;
 * * BAD: Bad connection. Turn off video is recommended;
 * * POOR: Poor connection. User connection and/or PC not meet the minimum requirements;
 * * DISCONNECTED: Audio/video is not able to send/receive network packets for at least 10 secs;
 * * RECONNECTING: Reconnecting due to loss of connection.
 * * LOST_CONNECTION: The connection to the audio/video service was lost.
 * * You must end the meeting and start again.
 */
export enum MeetingConnectionStatus {
  NOT_AVAILABLE = 0,
  GOOD = 1,
  BAD = 2,
  POOR = 3,
  DISCONNECTED = 4,
  RECONNECTING = 5,
  LOST_CONNECTION = 6,
}

export enum DeviceEvent {
  NO_CAM = 'devices.no-cam',
  NO_DEVICES = 'devices.no-devices',
  DEVICES_BLOCKED = 'devices.blocked',
  DEVICES_CAM_BLOCKED = 'devices.cam-blocked',
  DEVICES_INITIALIZATION_ERROR = 'devices.inititalization-error',
  DEVICES_UNKNOWN_ERROR = 'devices.unknown-error',
}

export type Dimensions = {
  width: number | null;
  height: number | null;
};
