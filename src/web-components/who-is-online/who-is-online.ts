import { CSSResultGroup, LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';

import { RealtimeEvent } from '../../common/types/events.types';
import { INDEX_IS_WHITE_TEXT } from '../../common/types/meeting-colors.types';
import { Participant } from '../../components/who-is-online/types';
import { WebComponentsBase } from '../base';
import importStyle from '../base/utils/importStyle';

import type { LocalParticipantData, TooltipData } from './components/types';
import { Following, WIODropdownOptions } from './components/types';
import { whoIsOnlineStyle } from './css/index';

const WebComponentsBaseElement = WebComponentsBase(LitElement);
const styles: CSSResultGroup[] = [WebComponentsBaseElement.styles, whoIsOnlineStyle];

@customElement('superviz-who-is-online')
export class WhoIsOnline extends WebComponentsBaseElement {
  static styles = styles;
  declare position: string;
  declare participants: Participant[];
  declare open: boolean;
  declare disableDropdown: boolean;
  declare following: Following | undefined;
  declare localParticipantData: LocalParticipantData;
  declare isPrivate: boolean;
  declare everyoneFollowsMe: boolean;

  declare showTooltip: boolean;

  static properties = {
    position: { type: String },
    participants: { type: Object },
    open: { type: Boolean },
    disableDropdown: { type: Boolean },
    following: { type: Object },
    localParticipantColor: { type: String },
    isPrivate: { type: Boolean },
    everyoneFollowsMe: { type: Boolean },
    showTooltip: { type: Boolean },
  };

  constructor() {
    super();
    this.position = 'top: 20px; right: 40px;';
    this.showTooltip = true;
    this.open = false;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    importStyle.call(this, 'who-is-online');
  }

  public updateParticipants(data: Participant[]) {
    this.participants = data;
  }

  private toggleOpen() {
    this.open = !this.open;
  }

  private onClickOutDropdown = ({ detail }: CustomEvent) => {
    this.open = detail.open;
  };

  private dropdownPosition(index: number) {
    if (this.participants.length === 1) return 'bottom-center';

    if (index === 0) return 'bottom-right';

    const thereAreExtraParticipants = this.participants.length > 4;
    const isTheLastParticipantOfList = index + 1 === this.participants.length;

    if (thereAreExtraParticipants || !isTheLastParticipantOfList) {
      return 'bottom-center';
    }

    return 'bottom-left';
  }

  private renderExcessParticipants() {
    const excess = this.participants.length - 4;
    if (excess <= 0) return html``;

    const participants = this.participants
      .slice(4)
      .map(({ name, color, id, slotIndex, isLocal, avatar, joinedPresence }) => ({
        name,
        color,
        id,
        slotIndex,
        avatar,
        isLocal,
        joinedPresence,
      }));

    const classes = {
      'who-is-online__participant': true,
      excess_participants: true,
      'excess_participants--open': this.open,
    };

    const dropdown = html`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(participants)}
        @clickout=${this.onClickOutDropdown}
        ?disableDropdown=${this.disableDropdown}
        following=${JSON.stringify(this.following)}
        ?showSeeMoreTooltip=${this.showTooltip}
        @toggle=${this.toggleOpen}
        @toggle-dropdown-state=${this.toggleShowTooltip}
        ?localParticipantJoinedPresence=${this.localParticipantData?.joinedPresence}
        classesPrefix="who-is-online__controls"
        parentComponent="who-is-online"
        tooltipPrefix="who-is-online"
      >
        <div class=${classMap(classes)} slot="dropdown">
          <div class="superviz-who-is-online__excess who-is-online__extras">+${excess}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `;

    return dropdown;
  }

  private dropdownOptionsHandler = ({ detail }: CustomEvent) => {
    const { id, label, name, color, slotIndex } = detail;

    if (label === WIODropdownOptions['GOTO']) {
      this.emitEvent(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, { id });
    }

    if ([WIODropdownOptions.LOCAL_FOLLOW, WIODropdownOptions.LOCAL_UNFOLLOW].includes(label)) {
      if (this.following?.id === id) {
        this.stopFollowing();
        return;
      }

      if (this.everyoneFollowsMe) {
        this.stopEveryoneFollowsMe();
      }

      this.following = { name, id, color };
      this.swapParticipantBeingFollowedPosition();
      this.emitEvent(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, { id });
    }

    if ([WIODropdownOptions.PRIVATE, WIODropdownOptions.LEAVE_PRIVATE].includes(label)) {
      this.isPrivate = label === WIODropdownOptions.PRIVATE;

      if (this.everyoneFollowsMe) {
        this.stopEveryoneFollowsMe();
      }

      this.emitEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, { id, isPrivate: this.isPrivate });
      this.everyoneFollowsMe = false;
    }

    if ([WIODropdownOptions.FOLLOW, WIODropdownOptions.UNFOLLOW].includes(label)) {
      if (this.everyoneFollowsMe) {
        this.stopEveryoneFollowsMe();
        return;
      }

      if (this.following) {
        this.stopFollowing();
      }

      if (this.isPrivate) {
        this.cancelPrivate();
      }

      this.everyoneFollowsMe = true;
      this.following = undefined;
      this.emitEvent(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, { id, name, color, slotIndex });
    }

    if (label === WIODropdownOptions.GATHER) {
      this.emitEvent(RealtimeEvent.REALTIME_GATHER, { id });
    }
  };

  private toggleShowTooltip = () => {
    this.showTooltip = !this.showTooltip;
  };

  private stopEveryoneFollowsMe() {
    this.everyoneFollowsMe = false;
    this.emitEvent(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, undefined);
  }

  private getAvatar(participant: Participant) {
    if (participant.avatar?.imageUrl) {
      return html` <img
        class="who-is-online__participant__avatar"
        style="background-color: ${participant.color}"
        src=${participant.avatar.imageUrl}
      />`;
    }

    const letterColor = INDEX_IS_WHITE_TEXT.includes(participant.slotIndex) ? '#FFFFFF' : '#26242A';

    return html`<div
      class="who-is-online__participant__avatar"
      style="background-color: ${participant.color}; color: ${letterColor}"
    >
      ${participant.name?.at(0).toUpperCase()}
    </div>`;
  }

  private getOptions(participant: Participant, isBeingFollowed: boolean, isLocal: boolean) {
    const { id, slotIndex, name, color } = participant;
    const baseOption = { id, name, color, slotIndex };
    const { isPrivate } = this;

    const labels = isLocal
      ? [
          'GATHER',
          this.everyoneFollowsMe ? 'UNFOLLOW' : 'FOLLOW',
          isPrivate ? 'LEAVE_PRIVATE' : 'PRIVATE',
        ]
      : ['GOTO', isBeingFollowed ? 'LOCAL_UNFOLLOW' : 'LOCAL_FOLLOW'];

    const options = labels.map((label) => ({
      ...baseOption,
      label: WIODropdownOptions[label],
    }));

    return options;
  }

  private getIcons(isLocal: boolean, isBeingFollowed: boolean) {
    return isLocal
      ? ['gather', this.everyoneFollowsMe ? 'send-off' : 'send', 'eye_inative']
      : ['place', isBeingFollowed ? 'send-off' : 'send'];
  }

  private putLocalParticipationFirst() {
    if (this.participants[0].isLocal) return;

    const localParticipant = this.participants?.find(({ isLocal }) => isLocal);
    if (!localParticipant) return;

    const participants = [...this.participants];
    const localParticipantIndex = participants.indexOf(localParticipant);
    participants.splice(localParticipantIndex, 1);
    participants.unshift(localParticipant);
    this.participants = participants;
  }

  private swapParticipantBeingFollowedPosition() {
    const a = this.participants?.findIndex(({ id }) => id === this.following?.id);
    const b = 1;

    if (a < 4 || !a) return;

    const participants = [...this.participants];
    const temp = participants[a];
    participants[a] = participants[b];
    participants[b] = temp;
    this.participants = participants;
  }

  private stopFollowing() {
    this.following = undefined;
    this.emitEvent(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, { id: undefined });
  }

  private cancelPrivate() {
    this.isPrivate = undefined;
    this.emitEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, { id: this.localParticipantData.id });
  }

  private renderParticipants() {
    if (!this.participants) return html``;

    this.putLocalParticipationFirst();
    this.swapParticipantBeingFollowedPosition();

    return html`<div class="who-is-online__participant-list">
      ${repeat(
        this.participants.slice(0, 4),
        (participant) => participant.id,
        (participant, index) => {
          const { joinedPresence, isLocal, id, name, color } = participant;

          const participantIsFollowed = this.following?.id === id;
          const options = this.getOptions(participant, participantIsFollowed, isLocal);
          const icons = this.getIcons(isLocal, participantIsFollowed);
          const position = this.dropdownPosition(index);
          const disableDropdown = !joinedPresence || this.disableDropdown;

          const classList = {
            'who-is-online__participant': true,
            'disable-dropdown': disableDropdown,
            followed: participantIsFollowed || (isLocal && this.everyoneFollowsMe),
            private: isLocal && this.isPrivate,
          };

          const append = isLocal ? ' (you)' : '';
          const participantName = name + append;

          const tooltipData: TooltipData = {
            name,
          };

          if (this.localParticipantData?.joinedPresence && joinedPresence && !isLocal) {
            tooltipData.action = 'Click to Follow';
          }

          if (isLocal) {
            tooltipData.action = 'You';
          }

          return html`
            <superviz-dropdown
              options=${JSON.stringify(options)}
              label="label"
              position="${position}"
              @selected=${this.dropdownOptionsHandler}
              @toggle-dropdown-state=${this.toggleShowTooltip}
              icons="${JSON.stringify(icons)}"
              name="${participantName}"
              ?disabled=${disableDropdown}
              ?canShowTooltip=${this.showTooltip}
              onHoverData=${JSON.stringify(tooltipData)}
              classesPrefix="who-is-online__controls"
              parentComponent="who-is-online"
              tooltipPrefix="who-is-online"
            >
              <div slot="dropdown" class=${classMap(classList)} style="border-color: ${color}">
                ${this.getAvatar(participant)}
              </div>
            </superviz-dropdown>
          `;
        },
      )}
      ${this.renderExcessParticipants()}
    </div>`;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    this.updateComplete.then(() => {
      const element = this.shadowRoot.querySelector('.who-is-online');
      if (!element) return;

      const side = this.position.includes('left') ? 'flex-start' : 'flex-end';
      const style = `${this.position} align-items: ${side};`;
      element.setAttribute('style', style);
    });
  }

  protected render() {
    return html`<div class="who-is-online who-is-online">
      ${this.renderParticipants()}
      <superviz-who-is-online-messages
        following=${JSON.stringify(this.following)}
        ?everyoneFollowsMe=${this.everyoneFollowsMe}
        ?isPrivate=${this.isPrivate}
        participantColor=${this.localParticipantData?.color}
        @stop-following=${this.stopFollowing}
        @cancel-private=${this.cancelPrivate}
        @stop-everyone-follows-me=${this.stopEveryoneFollowsMe}
      ></superviz-who-is-online-messages>
    </div> `;
  }
}
