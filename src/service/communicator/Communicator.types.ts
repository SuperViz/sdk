import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';

export type Language = 'pt' | 'en' | 'zh';

export interface ICommunicatorTypes extends SuperVizSdkOptions {
  apiKey: string;
  language?: Language;
  photonAppId: string;
}
