import * as Socket from '@superviz/socket-client';

import {
  INDEX_IS_WHITE_TEXT,
  MeetingColors,
  MeetingColorsHex,
} from '../../common/types/meeting-colors.types';
import { Participant, Slot } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';

export class SlotService {
  private room: Socket.Room;

  private slotIndex: number;

  constructor(room: Socket.Room) {
    this.room = room;

    this.room.presence.on(Socket.PresenceEvents.UPDATE, this.onPresenceUpdate);
  }

  /**
   * @function assignSlot
   * @description Assigns a slot to the participant
   * @returns void
   */
  public async assignSlot(): Promise<Slot> {
    let slots = Array.from({ length: 16 }, (_, i) => i);
    let slot = Math.floor(Math.random() * 16);
    const { localParticipant, participants } = useStore(StoreType.GLOBAL);

    try {
      await new Promise((resolve, reject) => {
        this.room.presence.get((presences) => {
          if (!presences || !presences.length) resolve(true);

          if (presences.length >= 17) {
            slots = [];
            reject(new Error('[SuperViz] - No more slots available'));
            return;
          }

          presences.forEach((presence: Socket.PresenceEvent<Participant>) => {
            if (presence.id === localParticipant.value.id) return;

            slots = slots.filter((s) => s !== presence.data?.slot?.index);
          });

          resolve(true);
        });
      });

      const isUsing = !slots.includes(slot);
      if (isUsing) {
        slot = slots.shift();
      }

      const slotData = {
        index: slot,
        color: MeetingColorsHex[slot],
        textColor: INDEX_IS_WHITE_TEXT.includes(slot) ? '#fff' : '#000',
        colorName: MeetingColors[slot],
        timestamp: Date.now(),
      };

      this.slotIndex = slot;

      localParticipant.publish({
        ...localParticipant.value,
        slot: slotData,
      });

      participants.publish({
        ...participants.value,
        [localParticipant.value.id]: {
          ...participants.value[localParticipant.value.id],
          slot: slotData,
        },
      });

      this.room.presence.update({ slot: slotData });

      return slotData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  private onPresenceUpdate = async (event: Socket.PresenceEvent<Participant>) => {
    const { localParticipant, participants } = useStore(StoreType.GLOBAL);

    if (!event.data.slot || !localParticipant.value?.slot) return;

    if (event.id === localParticipant.value.id) {
      localParticipant.publish({
        ...localParticipant.value,
        slot: event.data.slot,
      });
      this.slotIndex = event.data.slot.index;
      return;
    }

    if (event.data.slot?.index === this.slotIndex) {
      this.slotIndex = null;
      localParticipant.publish({
        ...localParticipant.value,
        slot: null,
      });

      const slotData = await this.assignSlot();

      console.debug(
        `[SuperViz] - Slot reassigned to ${localParticipant.value.id}, slot: ${slotData.colorName}`,
      );
    }
  };
}
