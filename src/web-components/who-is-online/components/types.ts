export enum WIODropdownOptions {
  GOTO = 'go-to',
  FOLLOW = 'follow',
  UNFOLLOW = 'unfollow',
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
