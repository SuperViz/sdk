import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';

export type Language = 'pt' | 'en' | 'zh';

export interface CommunicatorType extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  photonAppId: string;
}

export type CommunicatorFacade = {
  setSyncProperty: (property: {}) => void;
  subscribe: (property: string, listener: () => void) => void;
  unsubscribe: (property: string) => void;
  destroy: () => void;
};
