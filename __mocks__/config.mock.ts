import { EnvironmentTypes } from '../src/common/types/sdk-options.types';
import { Configuration } from '../src/services/config/types';

import { LIMITS_MOCK } from './limits.mock';

export const MOCK_CONFIG: Configuration = {
  ablyKey: 'unit-test-ably-key',
  apiKey: 'unit-test-api-key',
  apiUrl: 'unit-test-api-url',
  conferenceLayerUrl: 'https://unit-test-conference-layer-url',
  environment: EnvironmentTypes.DEV,
  roomId: 'unit-test-room-id',
  debug: true,
  limits: LIMITS_MOCK,
};
