import type {
  ColorsVariables,
  Locale,
  Offset,
} from '../../services/video-conference-manager/types';

import type { Participant, Group, Avatar } from './participant.types';

export type FramePosition = 'right' | 'left' | 'bottom' | 'top';

export enum EnvironmentTypes {
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export interface SuperVizSdkOptions {
  debug?: boolean;
  environment?: EnvironmentTypes;
  roomId: string;
  participant: Participant;
  group: Group;
  shouldKickParticipantsOnHostLeave?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
  chatOff?: boolean;
  defaultAvatars?: boolean;
  offset: Offset;
  camerasOrientation?: 'horizontal' | 'vertical';
  enableFollow?: boolean;
  enableGoTo?: boolean;
  enableGather?: boolean;
  defaultToolbar?: boolean;
  isMouseEnabled?: boolean;
  isLaserEnabled?: boolean;
  devices?: DevicesOptions;
  language?: string;
  locales?: Locale[];
  avatars?: Avatar[];
  customColors?: ColorsVariables;
  skipMeetingSettings?: boolean;
}

export interface DevicesOptions {
  audioInput: boolean;
  audioOutput: boolean;
  videoInput: boolean;
}
