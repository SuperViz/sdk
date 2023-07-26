import { DefaultParticipantsOn3DManager, ParticipantOn3D, ParticipantTo3D } from './types';
export declare class IntegrationParticipantsManager implements DefaultParticipantsOn3DManager {
    private _participant;
    private _participants;
    get participant(): ParticipantOn3D;
    get participants(): ParticipantOn3D[];
    /**
     * @function addParticipantToList
     * @description add participant list in 3D space
     * @returns {void}
     * @param participant
     */
    addParticipantToList: (participant: ParticipantOn3D) => void;
    /**
     * @function setLocalParticipant
     * @description set current participant
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    setLocalParticipant: (participant: ParticipantOn3D) => void;
    /**
     * @function createParticipantOn3D
     * @description Creates a participant object with properties for 3D space
     * @param {ParticipantTo3D} participant
     * @returns {ParticipantOn3D}
     */
    createParticipantOn3D: ({ id, name, avatar, avatarConfig, isAudience, }: ParticipantTo3D) => ParticipantOn3D;
    /**
     * @function removeParticipant
     * @description remove participant from list
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    removeParticipant: (participant: ParticipantOn3D) => void;
}
