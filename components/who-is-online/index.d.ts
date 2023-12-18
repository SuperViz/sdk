import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
import { WhoIsOnlinePosition } from './types';
export declare class WhoIsOnline extends BaseComponent {
    name: ComponentNames;
    protected logger: Logger;
    private element;
    private position;
    private participants;
    private following;
    constructor(position?: WhoIsOnlinePosition);
    /**
     * @function start
     * @description Initializes the Who Is Online component
     * @returns {void}
     */
    protected start(): void;
    /**
     * @function destroy
     * @description Destroys the Who Is Online component
     * @returns {void}
     */
    protected destroy(): void;
    /**
     * @function addListeners
     * @description adds event listeners to the who is online element.
     * @returns {void}
     */
    private addListeners;
    /**
     * @function removeListeners
     * @description adds event listeners from the who is online element.
     * @returns {void}
     */
    private removeListeners;
    /**
     * @function subscribeToRealtimeEvents
     * @description Subscribes to realtime events
     * @returns {void}
     */
    private subscribeToRealtimeEvents;
    /**
     * @function unsubscribeToRealtimeEvents
     * @description Unsubscribes to realtime events
     * @returns {void}
     */
    private unsubscribeToRealtimeEvents;
    /**
     * @function onParticipantListUpdate
     * @description Receives data about participants in the room who were not loaded
     * when the component was initialized
     * @param {Record<string, AblyParticipant>} data
     * @returns {void}
     */
    private onParticipantListUpdate;
    private setLocalData;
    /**
     * @function positionWhoIsOnline
     * @description Positions the Who Is Online component on the screen
     * @returns {void}
     */
    private positionWhoIsOnline;
    /**
     * @function goToMousePointer
     * @description Publishes the go to event to the event bus
     * @param {CustomEvent} event
     * @returns {void}
     */
    private goToMousePointer;
    /**
     * @function followMousePointer
     * @description Publishes the follow event to the event bus
     * @param {CustomEvent} event
     * @returns {void}
     */
    private followMousePointer;
    /**
     * @function setPrivate
     * @description Publishes the private event to realtime and the event bus
     * @param {CustomEvent} event
     * @returns {void}
     */
    private setPrivate;
    private setFollow;
    private follow;
    private stopFollowing;
    private gather;
}
