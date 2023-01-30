import { Avatar } from '../../../common/types/user.types';

export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

export interface AvatarConfig {
  height: number;
  scale: number;
  pointerOrigin: Position;
}

export interface UserTo3D {
  id: string;
  name: string;
  avatar?: Avatar;
  avatarConfig?: AvatarConfig;
  isAudience?: boolean;
}

export interface UserOn3D extends UserTo3D {
  position: Position;
  rotation: Rotation;
}

export type Position = {
  x: number;
  y: number;
  z: number;
};

export type Rotation = {
  x: number;
  y: number;
};
