import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { Plugin, PluginMethods, DefaultPluginOptions } from '../integration/base-plugin/types';
import { AvatarConfig } from '../integration/participants/types';

export interface CommunicatorOptions extends SuperVizSdkOptions {
  apiKey: string;
  ablyKey: string;
}

export interface PluginOptions extends DefaultPluginOptions {
  avatarConfig: AvatarConfig;
}

export type SuperVizSdk = {
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: <T>(propertyName: string, listener: (property?: T) => void) => void;
  unsubscribe: (propertyName: string) => void;
  destroy: () => void;

  toggleMeetingSetup: () => void;
  toggleMicrophone: () => void;
  toggleScreenShare: () => void;
  hangUp: () => void;
  toggleCam: () => void;
  toggleChat: () => void;

  loadPlugin: (plugin: Plugin, props: PluginOptions) => PluginMethods;
  unloadPlugin: () => void;
};
