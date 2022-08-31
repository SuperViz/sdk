import { OrganizationType } from './organization.types';
import { UserType } from './user.types';

export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  organization: OrganizationType;
  user: UserType;
  shouldKickUsersOnHostLeave?: boolean;
}
