import { Logger } from './logger';
import { Observer } from './observer';
export declare abstract class Observable {
    protected abstract logger: Logger;
    protected observers: Record<string, Observer>;
    /**
     * @function subscribe
     * @description Subscribe to an event
     * @param type - event type
     * @param listener - event callback
     * @returns {void}
     */
    subscribe: (type: string, listener: Function) => void;
    /**
     * @function unsubscribe
     * @description Unsubscribe from an event
     * @param type - event type
     * @returns {void}
     */
    unsubscribe: (type: string, callback?: (data: unknown) => void) => void;
    /**
     * @function publish
     * @description Publish an event to client
     * @param type - event type
     * @param data - event data
     * @returns {void}
     */
    protected publish: (type: string, data?: unknown) => void;
}
