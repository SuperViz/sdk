import { Language } from '../communicator/types';

export interface VideoManagerConfig {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
}

export enum VideoFrameStateType {
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED,
}

export enum FrameSizeType {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}
