import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { Adapter, AdapterMethods, DefaultAdapterOptions } from '../integration/base-adapter/types';
import { AvatarConfig } from '../integration/users/types';

export type Language = 'pt' | 'en' | 'zh';

export interface CommunicatorOptions extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  ablyKey: string;
}

export interface AdapterOptions extends DefaultAdapterOptions {
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

  connectAdapter: (adapter: Adapter, props: AdapterOptions) => AdapterMethods;
  disconnectAdapter: () => void;
};
