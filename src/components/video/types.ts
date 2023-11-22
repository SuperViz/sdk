import { Avatar, ParticipantType } from '../../common/types/participant.types';
import { DevicesOptions } from '../../common/types/sdk-options.types';
import {
  CamerasPosition,
  LayoutMode,
  LayoutPosition,
  Locale,
  Offset,
} from '../../services/video-conference-manager/types';

export interface VideoComponentOptions {
  camsOff?: boolean;
  screenshareOff?: boolean;
  chatOff?: boolean;
  transcriptOff?: boolean;
  defaultAvatars?: boolean;
  offset?: Offset;
  enableFollow?: boolean;
  enableGoTo?: boolean;
  enableGather?: boolean;
  defaultToolbar?: boolean;
  devices?: DevicesOptions;
  language?: string;
  locales?: Locale[];
  avatars?: Avatar[];
  skipMeetingSettings?: boolean;
  allowGuests?: boolean;
  userType?: ParticipantType | `${ParticipantType}`;
  participantType?: ParticipantType | `${ParticipantType}`;
  collaborationMode?: {
    position?: CamerasPosition | `${CamerasPosition}`;
    modalPosition?: LayoutPosition | `${LayoutPosition}`;
    initialView?: LayoutMode | `${LayoutMode}`;
  };
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
