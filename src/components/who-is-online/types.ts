import { Participant as GeneralParticipant } from '../../common/types/participant.types';

export enum LOCATION {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export interface Participant extends GeneralParticipant {
  slotIndex: number;
}

export type WhoIsOnlineLocation = LOCATION | `${LOCATION}` | string;
