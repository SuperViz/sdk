import { BaseComponent } from '../../components/base';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { DefaultLaucher, LaucherFacade, LaucherOptions } from './types';
export declare class Laucher implements DefaultLaucher {
    private readonly shouldKickParticipantsOnHostLeave;
    private readonly logger;
    private participant;
    private group;
    private readonly realtime;
    private readonly pubsub;
    private components;
    private participants;
    constructor({ participant, group, shouldKickParticipantsOnHostLeave }: LaucherOptions);
    /**
     * @function addComponent
     * @description add component to laucher
     * @param component - component to add
     * @returns {void}
     */
    addComponent: (component: BaseComponent) => void;
    /**
     * @function removeComponent
     * @description remove component from laucher
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
}
/**
 * @function Laucher
 * @description create laucher instance
 * @param options - laucher options
 * @returns {LaucherFacade}
 */
declare const _default: (options: LaucherOptions) => LaucherFacade;
export default _default;
