import Ably from 'ably';

import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { Logger } from '../../common/utils';
import { WhoIsOnline as WhoIsOnlineElement } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { whoIsOnlineLocation, LOCATION, Participant } from './types';

export class WhoIsOnline extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: WhoIsOnlineElement;
  private location: whoIsOnlineLocation;
  private participants: Participant[] = [];
  private color: string;

  constructor(location?: whoIsOnlineLocation) {
    super();
    this.name = ComponentNames.WHO_IS_ONLINE;
    this.location = location ?? LOCATION.TOP_LEFT;
    this.logger = new Logger('@superviz/sdk/who-is-online-component');
  }

  /**
   * @function start
   * @description Initializes the Who Is Online component
   * @returns {void}
   */
  protected start(): void {
    this.subscribeToRealtimeEvents();
    this.positionWhoIsOnline();

    this.participants = Object.values(this.realtime.getParticipants).map((participant, index) => {
      const slot = participant.data.slotIndex;
      const color = MeetingColorsHex[slot];

      return {
        ...participant.data,
        participantId: participant.id,
        color,
      };
    });

    this.realtime.enterWhoIsOnlineChannel(this.localParticipant);
  }

  /**
   * @function destroy
   * @description Destroys the Who Is Online component
   * @returns {void}
   */
  protected destroy(): void {}

  /**
   * @function subscribeToRealtimeEvents
   * @description Subscribes to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {
    this.realtime.presenceSlotsInfosObserver.subscribe(this.onSlotChange);
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeave);
    this.realtime.whoIsOnlineObserver.subscribe(this.onWhoIsOnlineUpdate);
  }

  /**
   * @function onParticipantJoined
   * @description Updates the participants list when a new participant joins the meeting
   * @param {Ably.Types.PresenceMessage} participant
   * @returns {void}
   */
  private onParticipantJoined = (participant: Ably.Types.PresenceMessage): void => {
    const alreadyJoined = this.participants?.find((element) => {
      return element.id === participant.data.id;
    });

    if (!alreadyJoined) {
      this.participants.push({ ...participant.data, color: this.color });
    }

    this.element.participants = this.participants;
    this.realtime.updateWhoIsOnline(this.participants);
  };

  private onParticipantLeave = ({ data: participant }): void => {
    this.participants = this.participants.filter((element) => {
      return element.id !== participant.id;
    });

    this.element.participants = this.participants;
  };

  /**
   * @function onSlotChange
   * @description Changes participant color when new slot is assigned to them
   * @param {Participant} participant
   * @returns {void}
   */
  private onSlotChange = ({ id, slotIndex }): void => {
    const color = MeetingColorsHex[slotIndex];
    this.color = color;

    this.participants = this.participants.map((participant) => {
      if (participant.id === id) {
        return {
          ...participant,
          color,
        };
      }

      return participant;
    });

    this.realtime.updateWhoIsOnline(this.participants);
    this.element.participants = this.participants;
  };

  /**
   * @function positionWhoIsOnline
   * @description Positions the Who Is Online component on the screen
   * @returns {void}
   */
  private positionWhoIsOnline(): void {
    this.element = document.createElement('superviz-who-is-online') as WhoIsOnlineElement;
    let { location } = this;

    const positionsOptions = Object.values(location);

    const positionById = !positionsOptions.includes(
      location.toLocaleLowerCase() as whoIsOnlineLocation,
    );

    if (positionById) {
      const container = window.document.body.querySelector(`#${location}`);

      if (container) {
        container.appendChild(this.element);
        this.element.position = 'position: relative;';
        return;
      }

      location = LOCATION.TOP_RIGHT;
    }

    document.body.appendChild(this.element);
    const [vertical, horizontal] = location.split('-');
    this.element.position = `${vertical}: 20px; ${horizontal}: 20px;`;
  }

  /**
   * @function onWhoIsOnlineUpdate
   * @param {Ably.Types.PresenceMessage} participants
   * @description Updates the participants list when changes are published in Who Is Online channel
   * @returns {void}
   */
  private onWhoIsOnlineUpdate = (participants): void => {
    const { clientId } = participants;
    if (clientId === this.localParticipant.id) return;

    this.participants = [...participants.data];
    this.element.participants = this.participants;
  };
}
