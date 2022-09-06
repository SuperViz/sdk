import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';

export type Language = 'pt' | 'en' | 'zh';

export interface CommunicatorType extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  photonAppId: string;
}

export type SuperVizSdk = {
  setSyncProperty: (name: string, property?: any) => void;
  subscribe: (propertyName: string, listener: (property?: any) => void) => void;
  unsubscribe: (propertyName: string) => void;
  destroy: () => void;
};
