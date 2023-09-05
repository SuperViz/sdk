export enum ParticipantType {
  HOST = 'host',
  GUEST = 'guest',
  AUDIENCE = 'audience',
}

export interface Participant {
  id: string;
  name?: string;
  type?: ParticipantType;
  color?: string;
  avatar?: Avatar;
  isHost?: boolean;
  mousePositionX?: string;
  mousePositionY?: string;
  // @NOTE - this is a hack to make the participant info work with the 3D avatar
  avatarConfig?: unknown;
}

export interface Group {
  id: string;
  name: string;
}

export interface Avatar {
  model: string;
  thumbnail: string;
}
