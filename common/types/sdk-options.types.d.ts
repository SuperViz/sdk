import { CamerasPosition, ColorsVariables, LayoutPosition, Locale, Offset } from '../../services/video-conference-manager/types';
import type { Participant, Group, Avatar } from './participant.types';
export declare enum EnvironmentTypes {
    LOCAL = "local",
    DEV = "dev",
    PROD = "prod"
}
export interface SuperVizSdkOptions {
    roomId: string;
    participant: Participant;
    group: Group;
    shouldKickParticipantsOnHostLeave?: boolean;
    debug?: boolean;
    environment?: EnvironmentTypes;
}
export interface OldSuperVizSdkOptions {
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
    offset?: Offset;
    camerasPosition?: CamerasPosition;
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
    disableCameraOverlay?: boolean;
    layoutPosition?: LayoutPosition;
}
export interface DevicesOptions {
    audioInput: boolean;
    audioOutput: boolean;
    videoInput: boolean;
}
