import { CSSResultGroup, LitElement } from 'lit';
import { Participant } from '../../components/who-is-online/types';
import { Following } from './components/types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnline extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    position: string;
    participants: Participant[];
    private textColorValues;
    open: boolean;
    disableDropdown: boolean;
    following: Following | undefined;
    static properties: {
        position: {
            type: StringConstructor;
        };
        participants: {
            type: ObjectConstructor;
        };
        open: {
            type: BooleanConstructor;
        };
        disableDropdown: {
            type: BooleanConstructor;
        };
        following: {
            type: ObjectConstructor;
        };
    };
    constructor();
    updateParticipants(data: Participant[]): void;
    private toggleOpen;
    private onClickOutDropdown;
    private dropdownPosition;
    private renderExcessParticipants;
    private dropdownOptionsHandler;
    private getAvatar;
    private getOptions;
    private getIcons;
    private putLocalParticipationFirst;
    private swapParticipantBeingFollowedPosition;
    private stopFollowing;
    private followingMessage;
    private renderParticipants;
    updated(changedProperties: any): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
