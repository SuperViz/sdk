import * as Socket from '@superviz/socket-client';

import {
  INDEX_IS_WHITE_TEXT,
  MeetingColors,
  MeetingColorsHex,
} from '../../common/types/meeting-colors.types';
import { Participant } from '../../common/types/participant.types';

export class SlotService {
  private room: Socket.Room;
  private participant: Participant;
  private slotIndex: number;

  constructor(room: Socket.Room, participant: Participant) {
    this.room = room;
    this.participant = participant;

    this.assignSlot();
    this.room.presence.on(Socket.PresenceEvents.UPDATE, this.onPresenceUpdate);
  }

  /**
   * @function assignSlot
   * @description Assigns a slot to the participant
   * @returns void
   */
  private async assignSlot() {
    const slot = Math.floor(Math.random() * 16);

    new Promise((resolve, reject) => {
      this.room.presence.get((presences) => {
        if (!presences || !presences.length) resolve(false);

        if (presences.length >= 16) {
          reject(new Error('[SuperViz] - No more slots available'));
          return;
        }

        presences.forEach((presence: Socket.PresenceEvent<Participant>) => {
          if (presence.id === this.participant.id) return;

          if (presence.data?.slot?.index === slot) resolve(true);
        });

        resolve(false);
      });
    })
      .then((isUsing) => {
        if (isUsing) {
          this.assignSlot();
          return;
        }

        const slotData = {
          index: slot,
          color: MeetingColorsHex[slot],
          textColor: INDEX_IS_WHITE_TEXT.includes(slot) ? '#fff' : '#000',
          colorName: MeetingColors[slot],
          timestamp: Date.now(),
        };

        this.slotIndex = slot;
        this.participant = {
          ...this.participant,
          slot: slotData,
        };

        this.room.presence.update({
          slot: slotData,
        });
      })
      .catch((error) => {
        this.room.presence.update({
          slot: null,
        });
        console.error(error);
      });
  }

  private onPresenceUpdate = (event: Socket.PresenceEvent<Participant>) => {
    if (!event.data.slot || !this.participant?.slot) return;

    if (event.id === this.participant.id) {
      this.participant = event.data;
      this.slotIndex = event.data.slot.index;
      return;
    }

    const assignFirst = event.data.slot.timestamp < this.participant?.slot?.timestamp;

    // if someone else has the same slot as me, and they were assigned first, I should reassign
    if (event.data.slot?.index === this.slotIndex && assignFirst) {
      this.assignSlot();
    }
  };
}
