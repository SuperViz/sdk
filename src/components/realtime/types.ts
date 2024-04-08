export enum RealtimeComponentState {
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
}

export enum RealtimeComponentEvent {
  REALTIME_STATE_CHANGED = 'realtime-component.state-changed',
}

export type RealtimeData = {
  name: string;
  payload: any;
};

export type RealtimeMessage = {
  name: string;
  participantId: string;
  data: unknown;
  timestamp: number;
};
