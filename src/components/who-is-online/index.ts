import { isEqual } from 'lodash';

import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { Logger } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { WhoIsOnline as WhoIsOnlineElement } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { WhoIsOnlinePosition, Position, Participant } from './types';

export class WhoIsOnline extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: WhoIsOnlineElement;
  private position: WhoIsOnlinePosition;
  private participants: Participant[] = [];

  constructor(position?: WhoIsOnlinePosition) {
    super();

    this.position = position ?? Position.TOP_RIGHT;
    this.name = ComponentNames.WHO_IS_ONLINE;
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
    this.realtime.participantsObserver.subscribe(this.onParticipantListUpdate);
  }

  /**
   * @function unsubscribeToRealtimeEvents
   * @description Unsubscribes to realtime events
   * @returns {void}
   */
  private unsubscribeToRealtimeEvents(): void {
    this.realtime.participantsObserver.unsubscribe(this.onParticipantListUpdate);
  }

  /**
   * @function onParticipantListUpdate
   * @description Receives data about participants in the room who were not loaded
   * when the component was initialized
   * @param {Record<string, AblyParticipant>} data
   * @returns {void}
   */
  private onParticipantListUpdate = (data: Record<string, AblyParticipant>) => {
    const updatedParticipants = Object.values(data).filter(({ data }) => {
      return data.activeComponents?.includes('whoIsOnline');
    });

    const compare = updatedParticipants.map(({ data: { slotIndex, id } }) => {
      const { color } = this.realtime.getSlotColor(slotIndex);
      return { id, color };
    });

    const participants = this.participants.map(({ id, color }) => {
      return { color, id };
    });

    if (isEqual(compare, participants)) return;

    const currentParticipants: string[] = this.participants
      .filter((participant) => participant.color)
      .map((participant) => participant.id);

    const newParticipants = updatedParticipants
      .filter(({ id }) => {
        return !currentParticipants.includes(id);
      })
      .map(({ data: { name, id, slotIndex } }) => {
        const { color } = this.realtime.getSlotColor(slotIndex);
        return { name, id, slotIndex, color };
      });

    this.participants = [
      ...this.participants.filter(({ id }) => !currentParticipants.includes(id)),
      ...newParticipants,
    ];

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