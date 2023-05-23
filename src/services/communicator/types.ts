import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { Plugin, PluginMethods, DefaultPluginOptions } from '../integration/base-plugin/types';
import { AvatarConfig } from '../integration/participants/types';
import { WaterMark } from '../video-conference-manager/types';

export interface CommunicatorOptions extends SuperVizSdkOptions {
  apiKey: string;
  ablyKey: string;
  conferenceLayerUrl: string;
  apiUrl: string;
  waterMark: WaterMark;
}

export interface PluginOptions extends DefaultPluginOptions {
  avatarConfig: AvatarConfig;
}

export type SuperVizSdk = {
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: <T>(propertyName: string, listener: (property?: T) => void) => void;
  unsubscribe: (propertyName: string) => void;
  destroy: () => void;
  follow: (participantId?: string) => void;
  gather: () => void;
  goTo: (participantId: string) => void;

  toggleMeetingSetup: () => void;
  toggleMicrophone: () => void;
  toggleScreenShare: () => void;
  hangUp: () => void;
  toggleCam: () => void;
  toggleChat: () => void;

  startTranscription: (language: string) => void;
  stopTranscription: () => void;

  loadPlugin: (plugin: Plugin, props: PluginOptions) => PluginMethods;
  unloadPlugin: () => void;
};
