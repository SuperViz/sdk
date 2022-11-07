import { Language } from '../communicator/types';

export interface VideoManagerOptions {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
  broadcast: boolean;
  canUseCams?: boolean;
  canUseScreenshare?: boolean;
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
