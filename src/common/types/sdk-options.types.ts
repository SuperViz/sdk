import { User, UserGroup } from './user.types';

export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  user: User;
  userGroup: UserGroup;
  shouldKickUsersOnHostLeave?: boolean;
  realtimeOnly?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
}
