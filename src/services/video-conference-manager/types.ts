import type { Avatar } from '../../common/types/participant.types';
import { FramePosition } from '../../common/types/sdk-options.types';
import { BrowserService } from '../browser';

export interface VideoManagerOptions {
  conferenceLayerUrl: string;
  ablyKey: string;
  apiKey: string;
  apiUrl: string;
  debug: boolean;
  language?: string;
  roomId: string;
  canUseChat: boolean;
  canUseCams: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseGather: boolean;
  canUseFollow: boolean;
  canUseGoTo: boolean;
  canUseDefaultToolbar: boolean;
  camerasPosition: CamerasPosition;
  devices: {
    audioInput: boolean;
    audioOutput: boolean;
    videoInput: boolean;
  };
  skipMeetingSettings: boolean;
  disableCameraOverlay: boolean;
  position: FramePosition;
  browserService: BrowserService;
  offset?: Offset;
  locales?: Locale[];
  avatars?: Avatar[];
  customColors?: ColorsVariables;
  waterMark?: WaterMark;
  layoutPosition?: LayoutPosition;
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

export interface FrameConfig {
  apiKey: string;
  apiUrl: string;
  ablyKey: string;
  roomId: string;
  debug: boolean;
  canUseChat: boolean;
  canUseCams: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseFollow: boolean;
  canUseGoTo: boolean;
  canUseGather: boolean;
  canUseDefaultToolbar: boolean;
  camerasPosition: CamerasPosition;
  devices: DevicesConfig;
  waterMark: WaterMark;
  skipMeetingSettings: boolean;
  disableCameraOverlay: boolean;
  layoutPosition: LayoutPosition;
}

export enum ColorsVariablesNames {
  svPrimary = 'sv-primary',
  svPrimary900 = 'sv-primary-900',
  svPrimary200 = 'sv-primary-200',
  svSecondary = 'sv-secondary',
  svGray = 'sv-gray',
  svSuccess = 'sv-success',
  svDanger = 'sv-danger',
  svBlack = 'sv-black',
  svWhite = 'sv-white',
  svGray100 = 'sv-gray-100',
  svGray200 = 'sv-gray-200',
  svGray300 = 'sv-gray-300',
  svGray400 = 'sv-gray-400',
  svGray500 = 'sv-gray-500',
  svGray600 = 'sv-gray-600',
  svGray700 = 'sv-gray-700',
  svGray800 = 'sv-gray-800',
}

export interface ColorsVariables {
  [ColorsVariablesNames.svPrimary]?: string;
  [ColorsVariablesNames.svPrimary900]?: string;
  [ColorsVariablesNames.svPrimary200]?: string;
  [ColorsVariablesNames.svSecondary]?: string;
  [ColorsVariablesNames.svGray]?: string;
  [ColorsVariablesNames.svSuccess]?: string;
  [ColorsVariablesNames.svDanger]?: string;
  [ColorsVariablesNames.svBlack]?: string;
  [ColorsVariablesNames.svWhite]?: string;
  [ColorsVariablesNames.svGray100]?: string;
  [ColorsVariablesNames.svGray200]?: string;
  [ColorsVariablesNames.svGray300]?: string;
  [ColorsVariablesNames.svGray400]?: string;
  [ColorsVariablesNames.svGray500]?: string;
  [ColorsVariablesNames.svGray600]?: string;
  [ColorsVariablesNames.svGray700]?: string;
  [ColorsVariablesNames.svGray800]?: string;
}

export interface DevicesConfig {
  audioInput: boolean;
  audioOutput: boolean;
  videoInput: boolean;
}

export interface Locale {
  language: string;
  messages: Record<string, string>;
}

export interface LayoutModalsAndCameras {
  layoutPosition: LayoutPosition;
  camerasPosition: CamerasPosition;
}

export enum WaterMark {
  ALL = 'all',
  CAMERA = 'camera',
  POWERED_BY = 'powered-by',
}

export enum LayoutPosition {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
}

export enum CamerasPosition {
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum VideoFrameState {
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED,
}
