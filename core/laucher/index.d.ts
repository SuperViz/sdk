import { BaseComponent } from '../../components/base';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { DefaultLaucher, LaucherFacade, LaucherOptions } from './types';
export declare class Laucher implements DefaultLaucher {
    private readonly apiKey;
    private readonly ablyKey;
    private readonly apiUrl;
    private readonly conferenceLayerUrl;
    private readonly shouldKickParticipantsOnHostLeave;
    private readonly logger;
    private participant;
    private readonly roomId;
    private group;
    private readonly realtime;
    private readonly pubsub;
    constructor({ ablyKey, apiUrl, apiKey, conferenceLayerUrl, participant, group, roomId, shouldKickParticipantsOnHostLeave, }: LaucherOptions);
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
}
/**
 * @function Laucher
 * @description create laucher instance
 * @param options - laucher options
 * @returns {LaucherFacade}
 */
declare const _default: (options: LaucherOptions) => LaucherFacade;
export default _default;
