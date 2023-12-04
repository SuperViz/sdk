export enum WhoIsOnlineDropdownOptions {
  GOTO = 'GO TO',
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
}

export interface Following {
  id: string;
  name: string;
  color: string;
  slotIndex: number;
}
