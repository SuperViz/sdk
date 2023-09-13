export declare enum ParticipantType {
    HOST = "host",
    GUEST = "guest",
    AUDIENCE = "audience"
}
export interface Participant {
    id: string;
    name?: string;
    type?: ParticipantType;
    color?: string;
    avatar?: Avatar;
    isHost?: boolean;
    mousePositionX?: number;
    mousePositionY?: number;
    originalWidth?: number;
    originalHeight?: number;
    containerId?: string;
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
