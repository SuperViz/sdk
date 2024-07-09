import * as Socket from '@superviz/socket-client';

import {
  NAME_IS_WHITE_TEXT,
  MEETING_COLORS,
  MEETING_COLORS_KEYS,
} from '../../common/types/meeting-colors.types';
import { Participant, ParticipantType, Slot } from '../../common/types/participant.types';
import { Store, StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';
import { ComponentNames } from '../../components/types';

export class SlotService {
  private slotIndex: number | null = null;

  constructor(
    private room: Socket.Room,
    private useStore: <T extends StoreType>(name: T) => Store<T>,
  ) {
    this.room = room;

    this.room.presence.on(Socket.PresenceEvents.UPDATE, this.onPresenceUpdate);

    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe(this.onParticipantLocalParticipantUpdateOnStore);

    /**
     * When the participant enters the room, is setted the default slot
     */
    this.setDefaultSlot();
  }

  /**
   * @function assignSlot
   * @description Assigns a slot to the participant
   * @returns void
   */
  public async assignSlot(): Promise<Slot> {
    let slots = Array.from({ length: 50 }, (_, i) => i);
    let slot = Math.floor(Math.random() * 50);
    const { localParticipant, participants } = useStore(StoreType.GLOBAL);

    try {
      await new Promise((resolve, reject) => {
        this.room.presence.get((presences) => {
          if (!presences || !presences.length) resolve(true);

          if (presences.length >= 50) {
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

      const color = Object.keys(MEETING_COLORS)[slot];

      const slotData = {
        index: slot,
        color: MEETING_COLORS[color],
        textColor: NAME_IS_WHITE_TEXT.includes(color) ? '#fff' : '#000',
        colorName: color,
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

  /**
   * @function setDefaultSlot
   * @description Removes the slot from the participant
   * @returns void
   */
  public setDefaultSlot() {
    const { localParticipant, participants } = useStore(StoreType.GLOBAL);

    const slot: Slot = {
      index: null,
      color: MEETING_COLORS.gray,
      textColor: '#fff',
      colorName: 'gray',
      timestamp: Date.now(),
    };

    this.slotIndex = slot.index;

    localParticipant.publish({
      ...localParticipant.value,
      slot: slot,
    });

    participants.publish({
      ...participants.value,
      [localParticipant.value.id]: {
        ...participants.value[localParticipant.value.id],
        slot,
      },
    });

    this.room.presence.update({ slot });
  }

  private onPresenceUpdate = async (event: Socket.PresenceEvent<Participant>) => {
    const { localParticipant } = this.useStore(StoreType.GLOBAL);

    if (!event.data.slot || !localParticipant.value?.slot?.index) return;

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

  /**
   * @function onParticipantLocalParticipantUpdateOnStore
   * @description on participant local participant update on store
   * @param {Participant} participant - new participant data
   * @returns {void}
   */
  private onParticipantLocalParticipantUpdateOnStore = (participant: Participant): void => {
    const COMPONENTS_THAT_NEED_SLOT = [
      ComponentNames.FORM_ELEMENTS,
      ComponentNames.WHO_IS_ONLINE,
      ComponentNames.PRESENCE,
      ComponentNames.PRESENCE_AUTODESK,
      ComponentNames.PRESENCE_MATTERPORT,
      ComponentNames.PRESENCE_THREEJS,
    ];

    const componentsNeedSlot = COMPONENTS_THAT_NEED_SLOT.some((component) => {
      return participant.activeComponents.includes(component);
    });

    const videoNeedSlot =
      participant.activeComponents.includes(ComponentNames.VIDEO_CONFERENCE) &&
      participant.type !== ParticipantType.AUDIENCE;

    const needSlot = componentsNeedSlot || videoNeedSlot;

    if ((participant.slot?.index === null || !participant.slot) && needSlot) {
      this.assignSlot();
    }

    if (participant.slot?.index !== null && !needSlot) {
      this.setDefaultSlot();
    }
  };
}
