import { User, UserGroup } from './user.types';

export type FramePosition = 'right' | 'left' | 'bottom' | 'top';
export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  user: User;
  userGroup: UserGroup;
  shouldKickUsersOnHostLeave?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
  framePosition: FramePosition;
}
