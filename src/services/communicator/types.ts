import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { Adapter, AdapterMethods, DefaultAdapterOptions } from '../integration/base-adapter/types';
import { AvatarConfig } from '../integration/users/types';

export interface CommunicatorOptions extends SuperVizSdkOptions {
  apiKey: string;
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
  toggleChat: () => void;

  connectAdapter: (adapter: Adapter, props: AdapterOptions) => AdapterMethods;
  disconnectAdapter: () => void;
};
