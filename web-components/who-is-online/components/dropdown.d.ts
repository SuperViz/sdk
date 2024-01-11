import { CSSResultGroup, LitElement, PropertyValueMap } from 'lit';
import { Participant } from '../../../components/who-is-online/types';
import { Following, VerticalSide, HorizontalSide } from './types';
declare const WebComponentsBaseElement: import("../../base/types").Constructor<import("../../base/types").WebComponentsBaseInterface> & typeof LitElement;
export declare class WhoIsOnlineDropdown extends WebComponentsBaseElement {
    static styles: CSSResultGroup[];
    open: boolean;
    align: HorizontalSide;
    position: VerticalSide;
    participants: Participant[];
    private textColorValues;
    selected: string;
    private originalPosition;
    private menu;
    private dropdownContent;
    private host;
    disableDropdown: boolean;
    showSeeMoreTooltip: boolean;
    showParticipantTooltip: boolean;
    following: Following;
    localParticipantJoinedPresence: boolean;
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
        disableDropdown: {
            type: BooleanConstructor;
        };
        following: {
            type: ObjectConstructor;
        };
        showSeeMoreTooltip: {
            type: BooleanConstructor;
        };
        showParticipantTooltip: {
            type: BooleanConstructor;
        };
        localParticipantJoinedPresence: {
            type: BooleanConstructor;
        };
    };
    constructor();
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private onClickOutDropdown;
    private close;
    private selectParticipant;
    private getAvatar;
    private toggleShowTooltip;
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
    private tooltip;
    protected render(): import("lit").TemplateResult<1>;
}
export {};
