export enum WIODropdownOptions {
  GOTO = 'go to',
  FOLLOW = 'follow',
  UNFOLLOW = 'unfollow',
  PRIVATE = 'private mode',
  LEAVE_PRIVATE = 'leave private mode',
  GATHER = 'gather all',
  STOP_GATHER = 'stop gather all',
}

export interface Following {
  id: string;
  name: string;
  color: string;
  slotIndex: number;
}

export interface Options {
  label: string;
  id: string;
  name: string;
  color: string;
  slotIndex: number;
}

export enum PositionOptions {
  'DO-NOTHING',
  'USE-ORIGINAL',
  'CALCULATE-NEW',
}

export interface LocalParticipantData {
  id: string;
  slotIndex: number;
  color: string;
}
