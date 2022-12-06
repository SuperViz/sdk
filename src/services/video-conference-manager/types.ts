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
  canUseGoTo: boolean;
  canUseDefaultToolbar: boolean;
  position: FramePosition;
  browserService: BrowserService;
  broadcast: boolean;
  offset?: Offset;
}

export interface WindowSize {
  height: number;
  width: number;
}

export interface Offset {
  top: number;
  bottom: number;
  left: number;
  right: number;
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
