import { FramePosition } from '../../common/types/sdk-options.types';
import { BrowserService } from '../browser';
import { Language } from '../communicator/types';

export interface VideoManagerOptions {
  apiKey: string;
  debug: boolean;
  language: Language;
  roomId: string;
  canUseCams: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseFollow: boolean;
  position: FramePosition;
  browserService: BrowserService;
  broadcast: boolean;
}

export interface WindowSize {
  height: number;
  width: number;
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
