import { Language } from './communicator/Communicator.types';

export interface IVideoManagerConfig {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
  externalUserId: string;
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
