import { BasePluginManager } from './base-plugin';
import { ParticipantTo3D, ParticipantOn3D } from './participants/types';
import { DefaultIntegrationManager, DefaultIntegrationManagerOptions } from './types';
export declare class IntegrationManager extends BasePluginManager implements DefaultIntegrationManager {
    private IntegrationParticipantsService;
    private followParticipantId;
    constructor({ isAvatarsEnabled, isMouseEnabled, isLaserEnabled, isNameEnabled, renderLocalAvatar, plugin, RealtimeService, avatarConfig, localParticipant, participantList, }: DefaultIntegrationManagerOptions);
    get participants(): ParticipantOn3D[];
    get getAvatars(): Object;
    get localParticipant(): ParticipantOn3D;
    /**
     * @function addParticipant
     * @description add new participant to list
     * @param {ParticipantTo3D} participant
     * @returns {void}
     */
    addParticipant: (participant: ParticipantTo3D) => void;
    /**
     * @function removeParticipant
     * @description remove participant from list
     * @param {ParticipantOn3D} participant
     * @param unsubscribe
     * @returns {void}
     */
    removeParticipant: (participant: ParticipantOn3D, unsubscribe: any) => void;
    /**
     * @function updateParticipant
     * @description update participant
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    updateParticipant: (participant: ParticipantOn3D) => void;
    /**
     * @function createLocalParticipant
     * @description creates the participant with what is needed for the 3D environment
     * @param {ParticipantTo3D} localParticipant
     * @returns {void}
     */
    private createLocalParticipant;
    /**
     * @function createParticipantList
     * @description creates the local participant list that is needed for the 3D environment
     * @param {ParticipantOn3D[]} participantList
     * @returns {void}
     */
    private createParticipantList;
    /**
     * @function onParticipantJoined
     * @description add participants as they enter the RealtimeService
     * @param {AblyParticipant} participant
     * @returns {void}
     */
    private onParticipantJoined;
    /**
     * @function onParticipantLeave
     * @description removes participants as they leave the RealtimeService
     * @param {} Participant
     * @returns {void}
     */
    private onParticipantLeave;
    /**
     * @function onParticipantUpdated
     * @description update participant
     * @param {AblyParticipant} participant
     * @returns {void}
     */
    private onParticipantUpdated;
    /**
     * @function onRoomInfoUpdate
     * @description room update
     * @param {} room : AblyRealtimeData
     * @returns {void}
     */
    private onRoomInfoUpdate;
}
