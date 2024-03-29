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

export interface LocalParticipantData {
  id: string;
  color: string;
  joinedPresence: boolean;
}

export interface TooltipData {
  name: string;
  action?: string;
}

export enum VerticalSide {
  TOP = 'top-side',
  BOTTOM = 'bottom-side',
}

export enum HorizontalSide {
  LEFT = 'left-side',
  RIGHT = 'right-side',
}
