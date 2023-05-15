import { PluginOptions } from '../../communicator/types';
import { AblyRealtimeService } from '../../realtime';
import { ParticipantOn3D } from '../participants/types';
import { DefaultPluginManager, Plugin } from './types';
export declare class BasePluginManager implements DefaultPluginManager {
    private _isAvatarsEnabled;
    private _isMouseEnabled;
    private _isLaserEnabled;
    private readonly _isNameEnabled;
    private readonly _renderLocalAvatar;
    plugin: Plugin;
    private _localParticipant;
    RealtimeService: AblyRealtimeService;
    constructor({ isAvatarsEnabled, isMouseEnabled, isLaserEnabled, isNameEnabled, renderLocalAvatar, plugin, RealtimeService, localParticipant, }: PluginOptions);
    get isAvatarsEnabled(): boolean;
    get isMouseEnabled(): boolean;
    get isLaserEnabled(): boolean;
    /**
     * @function enableAvatars
     * @description enable avatars in 3D space;
     * @returns {void}
     */
    enableAvatars: () => void;
    /**
     * @function disableAvatars
     * @description disable avatars in 3D space;
     * @returns {void}
     */
    disableAvatars: () => void;
    /**
     * @function enableMouse
     * @description enable mouse in 3D space;
     * @returns {void}
     */
    enableMouse: () => void;
    /**
     * @function disableMouse
     * @description disable mouse in 3D space;
     * @returns {void}
     */
    disableMouse: () => void;
    /**
     * @function enableLaser
     * @description enable laser in 3D space;
     * @returns {void}
     */
    enableLaser: () => void;
    /**
     * @function disableLaser
     * @description disable laser in 3D space;
     * @returns {void}
     */
    disableLaser: () => void;
    /**
     * @function createAvatar
     * @description create an avatar for the participant in 3D space;
     * @param {ParticipantOn3D} participant;
     * @returns {void}
     */
    createAvatar: (participant: ParticipantOn3D) => Promise<void>;
    /**
     * @function destroyAvatar
     * @description destroys a participant's avatar in 3D space;
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    destroyAvatar: (participant: ParticipantOn3D) => void;
    /**
     * @function createMouse
     * @description create a mouse for the participant in 3D space;
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    createMouse: (participant: ParticipantOn3D) => void;
    /**
     * @function destroyMouse
     * @description destroys a participant's mouse in 3D space;
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    destroyMouse: (participant: ParticipantOn3D) => void;
    /**
     * @function createLaser
     * @description create a laser for the participant in 3D space;
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    createLaser: (participant: ParticipantOn3D) => void;
    /**
     * @function destroyLaser
     * @description destroys a participant's laser in 3D space;
     * @param {ParticipantOn3D} participant
     * @returns {void}
     */
    destroyLaser: (participant: ParticipantOn3D) => void;
    /**
     * @function goToParticipant
     * @description goes to the participant's position in 3D space
     * @param {string} participantId
     * @returns {void}
     */
    goToParticipant: (participantId: string) => void;
}
