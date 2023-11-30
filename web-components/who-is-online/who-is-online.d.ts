import { CSSResultGroup, LitElement } from 'lit';
import { Participant } from '../../components/who-is-online/types';
declare const WebComponentsBaseElement: import("../base/types").Constructor<import("../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnline extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    position: string;
    participants: Participant[];
    private textColorValues;
    open: boolean;
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
    };
    constructor();
    updateParticipants(data: Participant[]): void;
    private toggleOpen;
    private onClickOutDropdown;
    private dropdownPosition;
    private renderExcessParticipants;
    private dropdownOptionsHandler;
    private getAvatar;
    private renderParticipants;
    updated(changedProperties: any): void;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
