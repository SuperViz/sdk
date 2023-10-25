import { Logger } from './logger';
export type OberverOptions = {
    throttleTime?: number;
    logger?: Logger;
};
export declare class Observer {
    private logger;
    private callbacks;
    private throttle;
    constructor(options?: OberverOptions);
    /**
     * @function subscribe
     * @description Subscribe to observer
     * @param callback
     * @returns {void}
     */
    subscribe: (callback: Function) => void;
    /**
     * @function unsubscribe
     * @description Unsubscribe from observer
     * @param callbackToRemove
     * @returns {void}
     */
    unsubscribe: (callbackToRemove: Function) => void;
    /**
     * @function publish
     * @description Publish event to all subscribers
     * @param event
     * @returns {void}
     */
    publish: (...event: any[]) => void;
    /**
     * @function reset
     * @description Reset observer
     * @returns {void}
     */
    reset: () => void;
    /**
     * @function destroy
     * @description Destroy observer
     * @returns {void}
     */
    destroy: () => void;
    /**
     * @function callListener
     * @description Call listener with params
     * @param listener
     * @param params
     * @returns
     */
    private callListener;
}
