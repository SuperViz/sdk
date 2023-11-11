import { Avatar } from '../../common/types/participant.types';

export enum LOCATION {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export interface Participant {
  name: string;
  avatar: Avatar;
  color: string;
  id: string;
  slotIndex: number;
}

export type whoIsOnlineLocation = LOCATION | `${LOCATION}` | string;
