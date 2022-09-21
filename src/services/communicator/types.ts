import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { UserOn3D } from '../integration/users/types';

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

  // @TODO - define props
  // @TODO - returns 3D manager
  init3DAdapter: (props: any) => void;
  getUsersOn3D: () => UserOn3D[];
};
