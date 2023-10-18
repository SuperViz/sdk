import { ComponentNames } from '../../components/types';

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
  // @NOTE - this is a hack to make the participant info work with the 3D avatar
  avatarConfig?: unknown;
  activeComponents?: ComponentNames[];
}

export interface Group {
  id: string;
  name: string;
}

export interface Avatar {
  model3DUrl: string;
  imageUrl: string;
}

export type ParticipantApi = {
  uuid: string;
  participantId: string;
  name: string;
  createdAt: string;
};
