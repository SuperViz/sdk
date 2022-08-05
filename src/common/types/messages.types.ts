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
  REALTIME_USER_LIST_UPDATE = 'realtime.user-list-update',
  REALTIME_HOST_CHANGE = 'realtime.host-change',

  HEARTBEAT = 'heartbeat',
}
