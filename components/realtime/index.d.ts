import { Logger } from '../../common/utils';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
export declare class Realtime extends BaseComponent {
    private pubsub;
    private callbacksToSubscribeWhenJoined;
    protected logger: Logger;
    name: ComponentNames;
    private state;
    constructor();
    protected destroy(): void;
    protected start(): void;
    /**
     * @function publish
     * @description Publish an event
     * @param type - event type
     * @param data - event data
     * @returns {void}
     */
    publish: (event: string, data?: unknown) => void;
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
    unsubscribe: (event: string, callback?: (data: unknown) => void) => void;
    /**
     * @function fetchSyncClientProperty
     * @description get realtime client data history
     * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
     */
    fetchHistory(eventName?: string): Promise<RealtimeMessage | Record<string, RealtimeMessage>>;
    /**
     * @function changeState
     * @description change realtime component state and publish state to client
     * @param state
     * @returns {void}
     */
    private changeState;
}
