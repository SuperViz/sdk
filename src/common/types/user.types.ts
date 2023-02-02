export enum UserType {
  HOST = 'host',
  GUEST = 'guest',
  AUDIENCE = 'audience'
}

export interface User {
  id?: string;
  name?: string;
  type?: UserType
  color?: string;
  avatar?: Avatar;
}

export interface UserGroup {
  id: string;
  name: string;
}

export interface Avatar {
  model: string;
  thumbnail: string;
}
