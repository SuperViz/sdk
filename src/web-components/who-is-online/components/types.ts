export enum WIODropdownOptions {
  GOTO = 'go to',
  LOCAL_FOLLOW = 'follow',
  LOCAL_UNFOLLOW = 'unfollow',
  FOLLOW = 'everyone follows me',
  UNFOLLOW = 'stop followers',
  PRIVATE = 'private mode',
  LEAVE_PRIVATE = 'leave private mode',
  GATHER = 'gather all',
  STOP_GATHER = 'stop gather all',
}

export interface Following {
  id: string;
  name: string;
  color: string;
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
  color: string;
  joinedPresence: boolean;
}
