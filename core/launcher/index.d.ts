import { BaseComponent } from '../../components/base';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';
export declare class Launcher implements DefaultLauncher {
    private readonly shouldKickParticipantsOnHostLeave;
    private readonly logger;
    private participant;
    private group;
    private readonly realtime;
    private readonly pubsub;
    private readonly eventBus;
    private participants;
    constructor({ participant, group, shouldKickParticipantsOnHostLeave }: LauncherOptions);
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
     * @function subscribeToPubSubEvent
     * @description subscribe to pubsub event
     * @param event - event name
     * @param callback - callback function
     * @returns {void}
     */
    subscribeToPubSubEvent: (event: string, callback: (data: unknown) => void) => void;
    /**
     * @function unsubscribeFromPubSubEvent
     * @description unsubscribe from pubsub event
     * @param event - event name
     * @param callback - callback function
     * @returns {void}
     */
    unsubscribeFromPubSubEvent: (event: string, callback: (data: unknown) => void) => void;
    /**
     * @function publishToPubSubEvent
     * @description publish to pubsub event
     * @param event - event name
     * @param data - data to publish
     * @returns {void}
     */
    publishToPubSubEvent: (event: string, data: unknown) => void;
    /**
     * @function fetchPubSubHistory
     * @description fetch pubsub history
     * @param eventName - event name
     * @returns realtime message or realtime history
     */
    fetchPubSubHistory: (eventName?: string) => Promise<RealtimeMessage | Record<string, RealtimeMessage>>;
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
