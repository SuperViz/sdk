import type { Locale, Offset } from '../../services/video-conference-manager/types';

import type { Participant, Group, Avatar } from './participant.types';

export type FramePosition = 'right' | 'left' | 'bottom' | 'top';
export interface SuperVizSdkOptions {
  debug?: boolean;
  roomId: string;
  participant: Participant;
  group: Group;
  shouldKickParticipantsOnHostLeave?: boolean;
  camsOff?: boolean;
  screenshareOff?: boolean;
  defaultAvatars?: boolean;

  offset: Offset;
  enableFollow?: boolean;
  enableGoTo?: boolean;
  enableGather?: boolean;
  defaultToolbar?: boolean;

  language?: string;
  locales?: Locale[];

  avatars?: Avatar[];
}
