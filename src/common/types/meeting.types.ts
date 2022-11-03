import { User, UserGroup } from './user.types';

export interface StartMeetingOptions {
  roomId: string;
  user: User;
  userGroup: UserGroup;
}
