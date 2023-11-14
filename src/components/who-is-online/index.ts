import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { Logger } from '../../common/utils';
import { WhoIsOnline as WhoIsOnlineElement } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { WhoIsOnlinePosition, Position, Participant } from './types';
import { AblyParticipant } from '../../services/realtime/ably/types';

export class WhoIsOnline extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: WhoIsOnlineElement;
  private position: WhoIsOnlinePosition;
  private participants: Participant[] = [];

  constructor(position?: WhoIsOnlinePosition) {
    super();
    this.name = ComponentNames.WHO_IS_ONLINE;
    this.position = position ?? Position.TOP_RIGHT;
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

    this.participants = Object.values(this.realtime.getParticipants).map((participant) => {
      const { slotIndex } = participant.data;
      const color = MeetingColorsHex[slotIndex];

      return {
        ...participant.data,
        participantId: participant.id,
        color,
        slotIndex,
      };
    });
  }

  /**
   * @function destroy
   * @description Destroys the Who Is Online component
   * @returns {void}
   */
  protected destroy(): void {
    this.unsubscribeToRealtimeEvents();
    this.element.remove();
    this.element = null;
    this.participants = null;
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description Subscribes to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {
    this.realtime.presenceMouseParticipantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.presenceMouseParticipantLeaveObserver.subscribe(this.onParticipantLeave);
    this.realtime.participantsObserver.subscribe(this.onParticipantListUpdate);
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description Unsubscribes to realtime events
   * @returns {void}
   */
  private unsubscribeToRealtimeEvents(): void {
    this.realtime.presenceMouseParticipantJoinedObserver.unsubscribe(this.onParticipantJoined);
    this.realtime.presenceMouseParticipantLeaveObserver.unsubscribe(this.onParticipantLeave);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantListUpdate);
  }

  private compareParticipants() {
    const realtimeParticipants = this.realtime.getParticipants;

    for (let i = 0; i < this.participants.length; i++) {
      if (!realtimeParticipants[this.participants[i].id]) return false;
    }

    return true;
  }

  /**
   * @function subscribeToRealtimeEvents
   * @description Receives data about participants in the room who were not loaded when the component was initialized
   * @param {Record<string, AblyParticipant>} data
   * @returns {void}
   */
  private onParticipantListUpdate = (data: Record<string, AblyParticipant>) => {
    const updatedParticipants = Object.values(data);
    if (updatedParticipants.length === this.participants.length && this.compareParticipants())
      return;

    const currentParticipants: string[] = this.participants.map((participant) => participant.id);

    this.participants = [
      ...this.participants,
      ...updatedParticipants
        .filter((participant: AblyParticipant) => {
          return !currentParticipants.includes(participant.data.id);
        })
        .map((participant: AblyParticipant) => {
          const { slotIndex } = participant.data;
          const color = MeetingColorsHex[slotIndex];
          return { ...participant.data, color };
        }),
    ] as Participant[];

    this.element.participants = this.participants;
  };

  /**
   * @function onParticipantJoined
   * @description Updates the participants list when a new participant joins the meeting
   * @param {Ably.Types.PresenceMessage} participant
   * @returns {void}
   */
  private onParticipantJoined = (data: Participant) => {
    const participant = this.realtime.getParticipants[data.id]?.data;

    const alreadyInList = participant
      ? this.participants?.find((element) => {
          return element.id === participant.id;
        })
      : false;

    const color = MeetingColorsHex[participant?.slotIndex];
    data.slotIndex = participant?.slotIndex;

    if (alreadyInList) {
      this.participants = this.participants.map((participant) => {
        if (participant.id === data.id) {
          return {
            ...participant,
            ...data,
            color,
          };
        }
        return participant;
      });
    } else {
      this.participants.push({ ...this.realtime.getParticipants[data.id]?.data, ...data, color });
    }
    if (!color) this.getColorAfterDelay(data.id);

    this.element.participants = this.participants;
  };

  /**
   * @function getColorAfterDelay
   * @description Gets the color of the participant after realtime is done setting their slotIndex
   * @param {string} id
   * @returns {void}
   */
  private async getColorAfterDelay(id: string) {
    const participant = this.realtime?.getParticipants[id]?.data;
    const color = MeetingColorsHex[participant?.slotIndex];

    const data = {
      color,
      slotIndex: participant?.slotIndex,
    };

    if (!color) {
      setTimeout(() => {
        this.getColorAfterDelay(id);
      }, 100);
      return;
    }

    this.participants = this.participants.map((participant) => {
      if (participant.id === id) {
        return {
          ...participant,
          ...data,
        };
      }

      return participant;
    });

    this.element.participants = this.participants;
  }

  /**
   * @function onParticipantLeave
   * @description Removes participant from the participants list when they leave the meeting
   * @param {Ably.Types.PresenceMessage} participant
   * @returns {void}
   */
  private onParticipantLeave = ({ id }): void => {
    this.participants = this.participants.filter((participant) => participant.id !== id);
    this.element.participants = this.participants;
  };

  /**
   * @function positionWhoIsOnline
   * @description Positions the Who Is Online component on the screen
   * @returns {void}
   */
  private positionWhoIsOnline(): void {
    this.element = document.createElement('superviz-who-is-online') as WhoIsOnlineElement;
    const isUsingDefaultPosition = Object.values(Position).includes(
      this.position.toLowerCase() as Position,
    );

    if (isUsingDefaultPosition) {
      document.body.appendChild(this.element);
      const [vertical, horizontal] = this.position.split('-');
      this.element.position = `${vertical}: 20px; ${horizontal}: 40px;`;
      return;
    }

    const container = document.getElementById(this.position);

    if (!container) {
      this.element.position = 'top: 20px; right: 40px;';
      document.body.appendChild(this.element);
      return;
    }

    container.appendChild(this.element);
    this.element.position = 'position: relative;';
  }
}
