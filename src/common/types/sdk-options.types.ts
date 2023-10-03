import type { Group, Avatar, ParticipantType } from './participant.types';

export enum EnvironmentTypes {
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export interface SuperVizSdkOptions {
  roomId: string;
  participant: {
    id: string;
    name: string;
    type?: ParticipantType | 'host' | 'guest' | 'audience';
    avatar?: Avatar;
  };
  group: Group;
  shouldKickParticipantsOnHostLeave?: boolean;

  // internal
  debug?: boolean;
  environment?: EnvironmentTypes;
}

export interface DevicesOptions {
  audioInput: boolean;
  audioOutput: boolean;
  videoInput: boolean;
}
