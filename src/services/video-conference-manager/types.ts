import { FramePosition } from '../../common/types/sdk-options.types';
import { BrowserService } from '../browser';

export interface VideoManagerOptions {
  apiKey: string;
  debug: boolean;
  language?: string;
  roomId: string;
  canUseCams: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseGather: boolean;
  canUseFollow: boolean;
  canUseGoTo: boolean;
  canUseDefaultToolbar: boolean;
  position: FramePosition;
  browserService: BrowserService;
  isBroadcast: boolean;
  offset?: Offset;
  locales?: Locale[];
  avatars?: Avatar[];
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

export interface FrameLocale {
  language?: string;
  locales: Locale[];
}

export interface Locale {
  language: string;
  messages: {
    [key: string]: string;
  };
}

export interface Avatar {
  thumb: string;
  link: string;
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
