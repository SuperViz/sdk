export interface DefaultUsersOn3DManager {
  user: UserOn3D;
  users: UserOn3D[];
}

export interface UserOn3D extends UserTo3D {
  color: string;
  position: UserPosition;
  rotation: UserRotation;
}

export interface UserTo3D {
  id: string;
  name: string;
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
