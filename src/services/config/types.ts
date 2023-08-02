import { EnvironmentTypes } from '../../common/types/sdk-options.types';

export interface Configuration {
  roomId: string;
  environment: EnvironmentTypes;
  apiKey: string;
  ablyKey: string;
  apiUrl: string;
  conferenceLayerUrl: string;
  debug: boolean;
}
