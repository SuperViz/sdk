import { EnvironmentTypes } from '../src/common/types/sdk-options.types';
import { Configuration } from '../src/services/config/types';

import { MOCK_COLORS } from './colors.mock';
import { LIMITS_MOCK } from './limits.mock';
import { WATERMARK_MOCK } from './watermark.mock';

export const MOCK_CONFIG: Configuration = {
  ablyKey: 'unit-test-ably-key',
  apiKey: 'unit-test-api-key',
  apiUrl: 'http://unit-test-api-url',
  conferenceLayerUrl: 'https://unit-test-conference-layer-url',
  environment: EnvironmentTypes.DEV,
  roomId: 'unit-test-room-id',
  debug: true,
  limits: LIMITS_MOCK,
  waterMark: WATERMARK_MOCK,
  colors: MOCK_COLORS,
};
