import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
export declare class PresenceMouseComponent extends BaseComponent {
    name: string;
    protected logger: Logger;
    private presenceMouseElement;
    private containerId;
    constructor(container?: string | null);
    /**
     * @function start
     * @description start presence-mouse component
     * @returns {void}
     */
    protected start(): void;
    /**
     * @function destroy
     * @description destroy presence-mouse component
     * @returns {void}
     */
    protected destroy(): void;
    /**
     * @function subscribeToRealtimeEvents
     * @description subscribe to realtime events
     * @returns {void}
     */
    private subscribeToRealtimeEvents;
    /**
     * @function unsubscribeFromRealtimeEvents
     * @description subscribe to realtime events
     * @returns {void}
     */
    private unsubscribeFromRealtimeEvents;
    /** Presence Mouse Events */
    /**
     * @function onMyParticipantMouseMove
     * @description event to update my participant mouse position to others participants
     * @returns {void}
     */
    private onMyParticipantMouseMove;
    /**
     * @function onParticipantsDidChange
     * @description handler for participant list update event
     * @param {Record<string, AblyParticipant>} participants - participants
     * @returns {void}
     */
    private onParticipantsDidChange;
    /**
     * @function onParticipantJoinedOnRealtime
     * @description handler for participant joined event
     * @param {AblyParticipant} participant - participant
     * @returns {void}
     */
    private onParticipantJoinedOnRealtime;
    /**
     * @function onParticipantLeftOnRealtime
     * @description handler for participant left event
     * @param {AblyParticipant} participant
     * @returns {void}
     */
    private onParticipantLeftOnRealtime;
}
