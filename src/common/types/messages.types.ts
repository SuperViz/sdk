export enum MessageTypes {
  FRAME_LOAD = 'frame.load',
  FRAME_SIZE_UPDATE = 'frame.size-update',

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
  MEETING_SAME_ACCOUNT_ERROR = 'meeting.same-account-error',
  MEETING_DEVICES_CHANGE = 'meeting.devices-change',

  REALTIME_USER_LIST_UPDATE = 'realtime.user-list-update',
  REALTIME_HOST_CHANGE = 'realtime.host-change',
  REALTIME_GRID_MODE_CHANGE = 'realtime.grid-mode-change',

  HEARTBEAT = 'heartbeat',
}

export enum DevicesMessageTypes {
  NO_CAM = 'devices.no-cam',
  NO_DEVICES = 'devices.no-devices',
  DEVICES_BLOCKED = 'devices.blocked',
  DEVICES_CAM_BLOCKED = 'devices.cam-blocked',
  DEVICES_INITIALIZATION_ERROR = 'devices.inititalization-error',
  DEVICES_UNKNOWN_ERROR = 'devices.unknown-error',
}
