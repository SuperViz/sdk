import type { Offset } from '../../services/video-conference-manager/types';

import type { User, UserGroup } from './user.types';

export type FramePosition = 'right' | 'left' | 'bottom' | 'top';
export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  user: User;
  userGroup: UserGroup;
  shouldKickUsersOnHostLeave?: boolean;
  isBroadcast?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
  defaultAvatars?: boolean;

  offset: Offset;
  enableFollow?: boolean;
  enableGoTo?: boolean;
  defaultToolbar?: boolean;
}
