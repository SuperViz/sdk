import { Language } from './communicator/Communicator.types';

export { Language } from './communicator/Communicator.types';

export interface IVideoManagerConfig {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
  externalUserId: string;
}

export enum IVideoFrameState {
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED,
}
