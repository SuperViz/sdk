import { Avatar } from '../../../common/types/user.types';

export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

export interface AvatarConfig {
  height: number;
  scale: number;
  localAvatarPivotPoint?: UserPosition;
  renderLocalAvatar?: boolean;
}

export interface UserTo3D {
  id: string;
  name: string;
  avatar?: Avatar;
  avatarConfig?: AvatarConfig;
  isAudience?: boolean;
}

export interface UserOn3D extends UserTo3D {
  position: UserPosition;
  rotation: UserRotation;
}

export type UserPosition = {
  x: number;
  y: number;
  z: number;
};

export type UserRotation = {
  x: number;
  y: number;
};
