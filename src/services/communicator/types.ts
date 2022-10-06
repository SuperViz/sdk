import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { AdapterMethods, DefaultAdapterOptions } from '../integration/base-adapter/types';

export type Language = 'pt' | 'en' | 'zh';

export interface CommunicatorOptions extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  photonAppId: string;
  ablyKey: string;
}

export interface AdapterOptions extends Omit<DefaultAdapterOptions, 'RealtimeService'> {}

export type SuperVizSdk = {
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: <T>(propertyName: string, listener: (property?: T) => void) => void;
  unsubscribe: (propertyName: string) => void;
  destroy: () => void;

  init3DAdapter: (props: DefaultAdapterOptions) => AdapterMethods;
};
