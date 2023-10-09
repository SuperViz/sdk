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
    avatarConfig?: unknown;
}
export interface Group {
    id: string;
    name: string;
}
export interface Avatar {
    model3DUrl: string;
    imageUrl: string;
}
