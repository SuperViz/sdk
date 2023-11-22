export declare class EventBus {
    private readonly logger;
    private observers;
    constructor();
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
     * @description - publish event
     * @param event - event name
     * @param data - data to publish
     * @returns {void}
     */
    publish: (event: string, data: unknown) => void;
    destroy: () => void;
}
