export enum RealtimeComponentState {
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
}

export enum RealtimeChannelState {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTED = 'CONNECTED',
  CONNECTING = 'CONNECTING',
}

export enum RealtimeComponentEvent {
  REALTIME_STATE_CHANGED = 'realtime-component.state-changed',
}

export enum RealtimeChannelEvent {
  REALTIME_CHANNEL_STATE_CHANGED = 'realtime-channel.state-changed',
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
