import type { Participant, Group } from './participant.types';

export enum EnvironmentTypes {
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export interface SuperVizSdkOptions {
  roomId: string;
  participant: Participant;
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
