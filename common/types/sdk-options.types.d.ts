import type { Participant, Group } from './participant.types';
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
export interface DevicesOptions {
    audioInput: boolean;
    audioOutput: boolean;
    videoInput: boolean;
}
