import { User } from '../../../common/types/user.types';

export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

// @TODO - Defines this
export interface UserOn3D extends UserTo3D {
  color: string;
}

export interface UserTo3D {
  id: string;
  name: string;
}
