import { AblyRealtimeService } from '../realtime';
import { RealtimeMessage } from '../realtime/ably/types';
export declare class PubSub {
    private readonly realtime;
    private readonly logger;
    private observers;
    constructor(realtime: AblyRealtimeService);
    /**
     * @function subscribe
     * @description subscribe to event
     * @param event - event name
     * @param callback - callback function
     * @returns {void}
     */
    subscribe: (event: string, callback: (data: unknown) => void) => void;
    /**
     * @function unsubscribe
     * @description - unsubscribe from event
     * @param event - event name
     * @param callback - callback function
     * @returns {void}
     */
    unsubscribe: (event: string, callback: (data: unknown) => void) => void;
    /**
     * @function publish
     * @description - publish event to realtime
     * @param event - event name
     * @param data - data to publish
     * @returns {void}
     */
    publish: (event: string, data: unknown) => void;
    /**
     * @function fetchSyncClientProperty
     * @description get realtime client data history
     * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
     */
    fetchHistory(eventName?: string): Promise<RealtimeMessage | Record<string, RealtimeMessage>>;
    /**
     * @function publishEventToClient
     * @description - publish event to client
     * @param event - event name
     * @param data - data to publish
     * @returns {void}
     */
    private publishEventToClient;
    /**
     * @function onSyncPropertiesChange
     * @description - sync properties change handler
     * @param properties - properties
     * @returns {void}
     */
    private onSyncPropertiesChange;
}
