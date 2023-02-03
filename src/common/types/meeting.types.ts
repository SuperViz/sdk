import { User, Group } from './user.types';

export interface StartMeetingOptions {
  roomId: string;
  user: User;
  group: Group;
}
