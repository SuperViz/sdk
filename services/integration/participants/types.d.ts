import { Avatar } from '../../../common/types/participant.types';
export interface DefaultParticipantsOn3DManager {
    participant: ParticipantOn3D;
    participants: ParticipantOn3D[];
}
export interface AvatarConfig {
    height: number;
    scale: number;
    laserOrigin: Position;
}
export interface ParticipantTo3D {
    id: string;
    name: string;
    avatar?: Avatar;
    avatarConfig?: AvatarConfig;
    isAudience?: boolean;
}
export interface ParticipantOn3D extends ParticipantTo3D {
    position: Position;
    rotation: Rotation;
}
export declare type Position = {
    x: number;
    y: number;
    z: number;
};
export declare type Rotation = {
    x: number;
    y: number;
};
