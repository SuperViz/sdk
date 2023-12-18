import { CSSResultGroup, LitElement } from 'lit';
import { Participant } from '../../components/who-is-online/types';
import type { LocalParticipantData } from './components/types';
import { Following } from './components/types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnline extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    position: string;
    participants: Participant[];
    open: boolean;
    disableDropdown: boolean;
    following: Following | undefined;
    localParticipantData: LocalParticipantData;
    isPrivate: boolean;
    private textColorValues;
    everyoneFollowsMe: boolean;
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
        localParticipantColor: {
            type: StringConstructor;
        };
        isPrivate: {
            type: BooleanConstructor;
        };
        everyoneFollowsMe: {
            type: BooleanConstructor;
        };
    };
    constructor();
    updateParticipants(data: Participant[]): void;
    private toggleOpen;
    private onClickOutDropdown;
    private dropdownPosition;
    private renderExcessParticipants;
    private dropdownOptionsHandler;
    private stopEveryoneFollowsMe;
    private getAvatar;
    private getOptions;
    private getIcons;
    private putLocalParticipationFirst;
    private swapParticipantBeingFollowedPosition;
    private stopFollowing;
    private cancelPrivate;
    private followingMessage;
    private everyoneFollowsMeMessage;
    private privateMessage;
    private renderParticipants;
    updated(changedProperties: any): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
