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
    private compareParticipants;
    /**
     * @function onParticipantListUpdate
     * @description Receives data about participants in the room who were not loaded when the component was initialized
     * @param {Record<string, AblyParticipant>} data
     * @returns {void}
     */
    private onParticipantListUpdate;
    /**
     * @function onParticipantJoined
     * @description Updates the participants list when a new participant joins the meeting
     * @param {Ably.Types.PresenceMessage} participant
     * @returns {void}
     */
    private onParticipantJoined;
    /**
     * @function getColorAfterDelay
     * @description Gets the color of the participant after realtime is done setting their slotIndex
     * @param {string} id
     * @returns {void}
     */
    private getColorAfterDelay;
    /**
     * @function onParticipantLeave
     * @description Removes participant from the participants list when they leave the meeting
     * @param {Ably.Types.PresenceMessage} participant
     * @returns {void}
     */
    private onParticipantLeave;
    /**
     * @function positionWhoIsOnline
     * @description Positions the Who Is Online component on the screen
     * @returns {void}
     */
    private positionWhoIsOnline;
}
