import { Observable } from '../../common/utils';
import { Logger } from '../../common/utils/logger';
import { BaseComponent } from '../../components/base';
import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';
export declare class Launcher extends Observable implements DefaultLauncher {
    protected readonly logger: Logger;
    private activeComponents;
    private participant;
    private group;
    private readonly realtime;
    private readonly eventBus;
    private participants;
    constructor({ participant, group }: LauncherOptions);
    /**
     * @function addComponent
     * @description add component to launcher
     * @param component - component to add
     * @returns {void}
     */
    addComponent: (component: BaseComponent) => void;
    /**
     * @function removeComponent
     * @description remove component from launcher
     * @param component - component to remove
     * @returns {void}
     */
    removeComponent: (component: BaseComponent) => void;
    /**
     * @function canAddComponent
     * @description verifies if component can be added
     * @param component - component to be added
     * @returns {boolean}
     */
    private canAddComponent;
    /**
     * @function startRealtime
     * @description start realtime service and join to room
     * @returns {void}
     */
    private startRealtime;
    /**
     * @function subscribeToRealtimeEvents
     * @description subscribe to realtime events
     * @returns {void}
     */
    private subscribeToRealtimeEvents;
    /** Realtime Listeners */
    /**
     * @function onParticipantListUpdate
     * @description on participant list update
     * @param participants - participants list
     * @returns {void}
     */
    private onParticipantListUpdate;
    /**
     * @function onParticipantJoined
     * @description on participant joined
     * @param ablyParticipant - ably participant
     * @returns {void}
     */
    private onParticipantJoined;
    /**
     * @function onParticipantLeave
     * @description on participant leave
     * @param ablyParticipant - ably participant
     * @returns {void}
     */
    private onParticipantLeave;
    /**
     * @function onHostParticipantDidChange
     * @description handler for host participant change event
     * @param {HostObserverCallbackResponse} data - host change data
     * @returns {void}
     * */
    private onHostParticipantDidChange;
    /**
     * @function onHostAvailabilityChange
     * @description Callback function that is called when the availability of the host changes.
     * @param {boolean} isHostAvailable - A boolean indicating whether the host is available or not.
     * @returns {void}
     */
    private onHostAvailabilityChange;
}
/**
 * @function Launcher
 * @description create launcher instance
 * @param options - launcher options
 * @returns {LauncherFacade}
 */
declare const _default: (options: LauncherOptions) => LauncherFacade;
export default _default;
