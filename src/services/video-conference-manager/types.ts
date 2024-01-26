import { ColorsVariables } from '../../common/types/colors.types';
import { MeetingEvent, RealtimeEvent } from '../../common/types/events.types';
import type { Avatar } from '../../common/types/participant.types';
import { BrowserService } from '../browser';
import { ComponentLimits } from '../limits/types';

export interface VideoManagerOptions {
  language?: string;
  canUseChat: boolean;
  canUseCams: boolean;
  canShowAudienceList: boolean;
  canUseTranscription: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseGather: boolean;
  canUseFollow: boolean;
  canUseGoTo: boolean;
  canUseDefaultToolbar: boolean;
  frameStyles?: VideoColors;
  camerasPosition: CamerasPosition;
  devices: {
    audioInput: boolean;
    audioOutput: boolean;
    videoInput: boolean;
  };
  skipMeetingSettings: boolean;
  browserService: BrowserService;
  collaborationMode: boolean;
  offset?: Offset;
  locales?: Locale[];
  avatars?: Avatar[];
  customColors?: ColorsVariables;
  waterMark?: boolean;
  layoutPosition?: LayoutPosition;
  layoutMode?: LayoutMode;
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
  limits: ComponentLimits;
  canShowAudienceList: boolean;
  canUseChat: boolean;
  canUseCams: boolean;
  canUseScreenshare: boolean;
  canUseDefaultAvatars: boolean;
  canUseTranscription: boolean;
  canUseFollow: boolean;
  canUseGoTo: boolean;
  canUseGather: boolean;
  canUseDefaultToolbar: boolean;
  camerasPosition: CamerasPosition;
  devices: DevicesConfig;
  waterMark: boolean;
  skipMeetingSettings: boolean;
  layoutPosition: LayoutPosition;
  layoutMode?: LayoutMode;
  collaborationMode: boolean;
}

export interface DevicesConfig {
  audioInput: boolean;
  audioOutput: boolean;
  videoInput: boolean;
}

export interface Locale {
  language: string;
  messages: Record<string, string | Record<string, string>>;
}

export interface LayoutModalsAndCameras {
  layoutPosition: LayoutPosition;
  camerasPosition: CamerasPosition;
}

export interface DrawingData {
  name: string;
  lineColor: string;
  textColor: string;
  pencil: string;
  clickX?: number[];
  clickY?: number[];
  clickDrag?: boolean[];
  drawingWidth: number;
  drawingHeight: number;
  externalClickX: number;
  externalClickY: number;
  fadeOut: boolean;
}

export interface RealtimeObserverPayload {
  event: RealtimeEvent | MeetingEvent;
  data: unknown;
}

export enum LayoutPosition {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
}

export enum LayoutMode {
  GRID = 'grid',
  LIST = 'list',
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

export interface VideoColors {
  settings?: {
    background?: string;
    text?: string;
    joinButton?: {
      background?: string;
      text?: string;
      border?: string;
      hover?: {
        background?: string;
        text?: string;
        border?: string;
      };
      disabled?: {
        background?: string;
        text?: string;
        border?: string;
        hover?: {
          background?: string;
          text?: string;
          border?: string;
        };
      };
    };
    inputField?: {
      border?: string;
      label?: string;
      background?: string;
      text?: string;

      hover?: {
        border?: string;
        label?: string;
      };
      focus?: {
        border?: string;
        label?: string;
      };
    };
    audioPreview?: {
      background?: string;
      border?: string;
      level?: string;
    };
    videoPreview?: {
      text?: string;
      background?: string;
    };
    controls?: {
      buttons?: {
        icon?: string;
        background?: string;
        notificationBadge?: string;
        hover?: {
          icon?: string;
          background?: string;
        };
      };
      exitButton?: {
        icon?: string;
        background?: string;
        hover?: {
          icon?: string;
          background?: string;
        };
      };
      dropdown?: {
        selectedOption?: {
          default?: string;
          hover?: string;
        };
        dropShadow?: string;
        boxShadow?: string;
        text?: {
          default?: string;
          hover?: string;
        };
        background?: {
          default?: string;
          hover?: string;
        };
      };
    };
    header?: {
      background?: string;
      text?: string;
      closeButton?: {
        icon?: string;
        background?: string;
        hover?: {
          icon?: string;
          background?: string;
        };
      };
    };
    avatarSelection?: {
      hover?: string;
      selected?: string;
    };
    devicesErrorModal?: {
      background?: string;
      text?: string;
      header?: {
        background?: string;
        closeButton?: {
          icon?: string;
          background?: string;
          hover?: {
            icon?: string;
            background?: string;
          };
        };
      };
    };
  };
  meeting?: {
    controls?: {
      buttons?: {
        icon?: {
          default?: string;
          hover?: string;
        };
        background?: {
          default?: string;
          hover?: string;
        };
      };
      exitButton?: {
        icon?: {
          default?: string;
          hover?: string;
        };
        background?: {
          default?: string;
          hover?: string;
        };
      };
      dropdown?: {};
    };
    background?: string;
    header?: {
      toggleGrid: {
        background?: string;
        icon?: string;
        hover?: {
          background?: string;
          icon?: string;
        };
      };
      toggleCameraList?: {
        background?: string;
        icon?: string;
        hover?: {
          background?: string;
          icon?: string;
        };
        disabled?: {
          background?: string;
          icon?: string;
          hover?: {
            background?: string;
            icon?: string;
          };
        };
      };
      spectatorList?: {
        button?: {
          background?: string;
          content?: string;
          hover?: {
            background?: string;
            content?: string;
          };
        };
        dropdown?: {
          text?: string;
          background?: string;
          button?: {
            background?: string;
            icon?: string;
            hover?: {
              background?: string;
              icon?: string;
            };
          };
        };
      };
    };
    deviceSettings?: {
      background?: string;
      header?: {
        background?: string;
        text?: string;
        closeButton?: {
          icon?: string;
          background?: string;
          hover?: {
            icon?: string;
            background?: string;
          };
        };
      };
      button: {
        background?: string;
        text?: string;
        border?: string;

        hover?: {
          background?: string;
          text?: string;
          border?: string;
        };
      };
    };
    chat?: {
      background?: string;
      header?: {
        background?: string;
        text?: string;
        closeButton?: {
          icon?: string;
          background?: string;
          hover?: {
            icon?: string;
            background?: string;
          };
        };
      };
      messages?: {
        sent?: {
          background?: string;
          text?: string;
          senderName?: string;
        };
        received?: {
          background?: string;
          text?: string;
        };
      };
      input?: {
        background?: string;
        text?: string;
        placeholder?: string;
        sendButton?: {
          background?: string;
          icon?: string;
          hover?: {
            background?: string;
            icon?: string;
          };
        };
      };
    };
    hostActionsButton?: {
      background?: string;
      icon?: string;
      hover?: {
        background?: string;
        icon?: string;
      };
    };
    screenShare?: {
      background?: string;
      buttons?: {
        icon?: string;
        background?: string;
        hover?: {
          icon?: string;
          background?: string;
        };
      };
    };
  };
}
