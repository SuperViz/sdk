import { Language } from '../communicator/types';

export interface VideoManagerConfig {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
}

export enum VideoFrameState {
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED,
}

export enum FrameSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}
