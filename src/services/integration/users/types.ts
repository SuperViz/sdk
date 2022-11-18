export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

export interface UserTo3D {
  id: string;
  name: string;
  avatarUrl?: string;
  avatarScale?: number;
  avatarHeight?: number;
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
