import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Participant } from '../../../components/who-is-online/types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnlineDropdown extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    align: 'left' | 'right';
    position: 'top' | 'bottom';
    participants: Participant[];
    private textColorValues;
    selected: string;
    private originalPosition;
    private menu;
    private dropdownContent;
    private host;
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
    private getAvatar;
    private renderParticipants;
    private setMenu;
    private get scrollableParent();
    private isScrollable;
    private get dropdownBounds();
    private shouldUseOriginalVertical;
    private positionAction;
    private adjustPosition;
    private toggle;
    private get menuClasses();
    protected render(): import("lit").TemplateResult<1>;
}
export {};
