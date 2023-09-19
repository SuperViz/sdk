import { LitElement } from 'lit';
import { ParticipantMouse } from '../../components/presence-mouse/types';
export declare class PresenceMouse extends LitElement {
    textColorValues: number[];
    static styles: import("lit").CSSResult[];
    constructor();
    /**
     * @function updatePresenceMouseParticipant
     * @description handler for update presence mouse change event
     * @param {ParticipantMouse} externalParticipant - presence mouse change data
     * @returns {void}
     * */
    updatePresenceMouseParticipant: (externalParticipant: ParticipantMouse) => void;
    /**
     * @function removePresenceMouseParticipant
     * @description handler remove external participant mouse
     * @param {string} participantId - external participant id
     * @returns {void}
     * */
    removePresenceMouseParticipant(participantId: string): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
