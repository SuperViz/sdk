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

export interface Group {
  id: string;
  name: string;
}

export interface Avatar {
  model: string;
  thumbnail: string;
}
