import { User } from '../../../common/types/user.types';

export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

// @TODO - Defines this
export interface UserOn3D {
  id: string;
  name: string;
  color: string;
}
