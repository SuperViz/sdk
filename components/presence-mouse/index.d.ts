import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
export declare class MousePointers extends BaseComponent {
    name: ComponentNames;
    protected logger: Logger;
    private canvas;
    private divWrapper;
    private presences;
    private animateFrame;
    constructor(containerId?: string);
    private get textColorValues();
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
    /**
     * @function animate
     * @description perform animation in presence mouse
     * @returns {void}
     */
    private animate;
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
    private onMyParticipantMouseOut;
    /**
     * @function onParticipantLeftOnRealtime
     * @description handler for participant left event
     * @param {AblyParticipant} participant
     * @returns {void}
     */
    private onParticipantLeftOnRealtime;
    /**
     * @function renderDivWrapper
     * @description Creates a div wrapper for the pins.
     * @returns {HTMLElement} The newly created div wrapper.
     * */
    private renderDivWrapper;
    private updateParticipantsMouses;
    /**
     * @function renderPresenMouses
     * @description add presence mouses to screen
     * @param {ParticipantMouse} mouse - presence mouse change data
     * @returns {void}
     * */
    private renderPresenMouses;
    /**
     * @function removePresenceMouseParticipant
     * @description handler remove external participant mouse
     * @param {string} participantId - external participant id
     * @returns {void}
     * */
    private removePresenceMouseParticipant;
    private createMouseElement;
}
