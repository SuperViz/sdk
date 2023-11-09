export enum LOCATION {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export interface Participant {
  name: string;
  avatar: string;
  color: string;
  id: string;
}

export type whoIsOnlineLocation = LOCATION | `${LOCATION}` | string;
