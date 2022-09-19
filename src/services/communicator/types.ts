import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';

export type Language = 'pt' | 'en' | 'zh';

export interface CommunicatorType extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  photonAppId: string;
}

export type SuperVizSdk = {
  setSyncProperty: <T>(name: string, property: T) => void;
  subscribe: <T>(propertyName: string, listener: (property?: T) => void) => void;
  unsubscribe: (propertyName: string) => void;
  destroy: () => void;
};
