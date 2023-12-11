import { Avatar, Participant as GeneralParticipant } from '../../common/types/participant.types';
import { ComponentNames } from '../types';

export enum Position {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export interface Participant extends GeneralParticipant {
  slotIndex: number;
  isLocal?: boolean;
  joinedPresence?: boolean;
  isPrivate?: boolean;
}

export type WhoIsOnlinePosition = Position | `${Position}` | string;
