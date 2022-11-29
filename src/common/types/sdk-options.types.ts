import { User, UserGroup } from './user.types';

export type FramePosition = 'right' | 'left' | 'bottom' | 'top';
export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  user: User;
  userGroup: UserGroup;
  shouldKickUsersOnHostLeave?: boolean;
  // @TODO - enable the flag when the feature is complete
  // isBroadcast?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
  defaultAvatars?: boolean;
  enableFollow?: boolean;
}
