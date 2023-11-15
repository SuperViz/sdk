import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Participant } from '../../../components/who-is-online/types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnlineDropdown extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    align: 'left' | 'right';
    position: 'bottom-left' | 'bottom-center' | 'bottom-right';
    participants: Participant[];
    private textColorValues;
    selected: string;
    static properties: {
        open: {
            type: BooleanConstructor;
        };
        align: {
            type: StringConstructor;
        };
        position: {
            type: StringConstructor;
        };
        participants: {
            type: ArrayConstructor;
        };
        selected: {
            type: StringConstructor;
        };
    };
    constructor();
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onClickOutDropdown;
    private close;
    dropdownOptionsHandler: ({ detail }: CustomEvent) => void;
    private selectParticipant;
    private renderParticipants;
    private toggleOpen;
    private get menuClasses();
    protected render(): import("lit").TemplateResult<1>;
}
export {};
