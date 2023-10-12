import { Avatar, ParticipantType } from '../../common/types/participant.types';
import { DevicesOptions } from '../../common/types/sdk-options.types';
import {
  CamerasPosition,
  ColorsVariables,
  LayoutMode,
  LayoutPosition,
  Locale,
  Offset,
} from '../../services/video-conference-manager/types';

export interface VideoComponentOptions {
  camsOff?: boolean;
  screenshareOff?: boolean;
  chatOff?: boolean;
  defaultAvatars?: boolean;
  offset?: Offset;
  camerasPosition?: CamerasPosition;
  enableFollow?: boolean;
  enableGoTo?: boolean;
  enableGather?: boolean;
  defaultToolbar?: boolean;
  devices?: DevicesOptions;
  language?: string;
  locales?: Locale[];
  avatars?: Avatar[];
  customColors?: ColorsVariables;
  skipMeetingSettings?: boolean;
  layoutPosition?: LayoutPosition;
  layoutMode?: LayoutMode;
}

export type ParticipandToFrame = {
  timestamp: number;
  connectionId: string;
  participantId: string;
  color: string;
  name: string;
  isHost: boolean;
  avatar?: Avatar;
  type: ParticipantType;
};
