import { logger } from './common/utils';
import ApiService from './services/api';
import RemoteConfigService from './services/remote-config-service';
import { ColorsVariables } from './services/video-conference-manager/types';

import sdk, {
  Group,
  Participant,
  SuperVizSdkOptions,
  BrowserService,
  DeviceEvent,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  MeetingEvent,
  MeetingState,
  ParticipantType,
  RealtimeEvent,
} from '.';
import * as DEFAULT_EXPORT from './index';

const REMOTE_CONFIG_MOCK = {
  apiUrl: 'https://dev.nodeapi.superviz.com',
  conferenceLayerUrl: 'https://video-conference-layer.superviz.com/14.0.1-rc.2/index.html',
};

const COMMUNICATOR_INSTANCE_MOCK = {
  setSyncProperty: jest.fn(),
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  destroy: jest.fn(),
  follow: jest.fn(),
  fetchSyncProperty: jest.fn(),
  gather: jest.fn(),
  goTo: jest.fn(),
  toggleMeetingSetup: jest.fn(),
  toggleMicrophone: jest.fn(),
  toggleCam: jest.fn(),
  toggleScreenShare: jest.fn(),
  hangUp: jest.fn(),
  toggleChat: jest.fn(),
  loadPlugin: jest.fn(),
  unloadPlugin: jest.fn(),
};

const UNIT_TEST_API_KEY = 'unit-test-api-key';

const SIMPLE_INITIALIZATION_MOCK: SuperVizSdkOptions = {
  roomId: 'unit-test-room-id',
  participant: {
    id: 'unit-test-participant-id',
    name: 'unit-test-participant-name',
  },
  group: {
    name: 'unit-test-group-test-name',
    id: 'unit-test-group-test-id',
  },
};

const COLOR_VARIABLES_MOCK = {
  'sv-primary-900': '16 29 70',
  'sv-primary-200': '141 164 239',
  'sv-primary': '58 92 204',
  'sv-gray-800': '250 250 252',
  'sv-gray-700': '233 229 239',
  'sv-gray-600': '201 196 209',
  'sv-gray-500': '174 169 184',
  'sv-gray-400': '126 122 136',
  'sv-gray-300': '87 83 95',
  'sv-gray-200': '57 54 62',
};

jest.mock('./common/utils', () => ({
  __esModule: true,
  logger: {
    enable: jest.fn(),
    disable: jest.fn(),
    log: jest.fn(),
  },
}));
jest.mock('./services/api');
jest.mock('./services/auth-service', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((_, apiKey: string) => {
    return apiKey === UNIT_TEST_API_KEY;
  }),
}));
jest.mock('./services/remote-config-service');
jest.mock('./services/communicator', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => {
    return COMMUNICATOR_INSTANCE_MOCK;
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('root export', () => {
  test('should export init function', () => {
    expect(sdk.init).toEqual(expect.any(Function));
  });

  test('should export the enums', () => {
    expect(DEFAULT_EXPORT.MeetingEvent).toEqual(MeetingEvent);
    expect(DEFAULT_EXPORT.RealtimeEvent).toEqual(RealtimeEvent);
    expect(DEFAULT_EXPORT.DeviceEvent).toEqual(DeviceEvent);
    expect(DEFAULT_EXPORT.MeetingConnectionStatus).toEqual(MeetingConnectionStatus);
    expect(DEFAULT_EXPORT.MeetingEvent).toEqual(MeetingEvent);
    expect(DEFAULT_EXPORT.MeetingControlsEvent).toEqual(MeetingControlsEvent);
    expect(DEFAULT_EXPORT.MeetingState).toEqual(MeetingState);
    expect(DEFAULT_EXPORT.ParticipantType).toEqual(ParticipantType);
  });

  test('should export BrowserService', () => {
    expect(DEFAULT_EXPORT.BrowserService).toEqual(BrowserService);
  });
});

describe('initialization errors', () => {
  test('should throw an error if no API key is provided', async () => {
    await expect(sdk.init('', SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow('API key is required');
  });

  test('should throw an error if API key is invalid', async () => {
    RemoteConfigService.getRemoteConfig = jest.fn().mockResolvedValue(REMOTE_CONFIG_MOCK);

    await expect(sdk.init('invalid-api-key', SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow(
      'Failed to validate API key',
    );
  });

  test('should throw an error if no options are provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, undefined as unknown as SuperVizSdkOptions),
    ).rejects.toThrow('Options is required');
  });

  test('should throw an error if no room id is provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, { ...SIMPLE_INITIALIZATION_MOCK, roomId: '' }),
    ).rejects.toThrow('Room id is required');
  });

  test('should throw an error if no participant id is provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        participant: { name: 'unit-test-participant-name' },
      }),
    ).rejects.toThrow('Participants fields is required');

    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        participant: undefined as unknown as Participant,
      }),
    ).rejects.toThrow('Participants fields is required');
  });

  test('should throw an error if no participant name is provided and skipMeetingSettings is true', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        skipMeetingSettings: true,
        participant: { id: 'unit-test-participant-id' },
      }),
    ).rejects.toThrow('When skipMeetingSettings is true, participant name is required');
  });

  test('should throw an error if no group name is provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        group: { id: 'unit-test-group-test-id' } as Group,
      }),
    ).rejects.toThrow('Group fields is required');
  });

  test('should throw an error if no group id is provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        group: { name: 'unit-test-group-test-name' } as Group,
      }),
    ).rejects.toThrow('Group fields is required');
  });

  test('should throw an error if no group is provided', async () => {
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        group: undefined as unknown as Group,
      }),
    ).rejects.toThrow('Group fields is required');
  });

  test('should throw an error if custom colors variables names are invalid', async () => {
    const colorKey = 'invalid-color';

    const invalidColorVariables = { ...COLOR_VARIABLES_MOCK, [colorKey]: '0 0 0' };
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        customColors: invalidColorVariables as ColorsVariables,
      }),
    ).rejects.toThrow(`Color ${colorKey} is not a valid color variable name`);
  });

  test('should throw an error if custom colors variables values are invalid', async () => {
    const invalidColorVariables = { ...COLOR_VARIABLES_MOCK, 'sv-primary-900': 'rr bb gg' };
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        customColors: invalidColorVariables as ColorsVariables,
      }),
    ).rejects.toThrow(
      'Color sv-primary-900 is not a valid color variable value. Please check the documentation for more information.',
    );
  });

  test('should throw an error if envoriment is invalid', async () => {
    ApiService.fetchConfig = jest.fn().mockResolvedValue(undefined);

    expect(sdk.init(UNIT_TEST_API_KEY, SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow(
      'Failed to load configuration from server',
    );
  });
});

describe('initialization success', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockClear();
    mockFetch.mockReturnValue({
      ok: true,
      json: () => Promise.resolve(true),
    });
    RemoteConfigService.getRemoteConfig = jest.fn().mockResolvedValue(REMOTE_CONFIG_MOCK);
    ApiService.fetchConfig = jest.fn().mockResolvedValue({
      ablyKey: 'unit-test-ably-key',
    });
  });

  test('should initialize with the correct parameters', async () => {
    const instance = await sdk.init(UNIT_TEST_API_KEY, SIMPLE_INITIALIZATION_MOCK);

    expect(instance).toBeDefined();
    expect(instance).toBe(COMMUNICATOR_INSTANCE_MOCK);
  });

  test('should initialize with debug mode', async () => {
    const instance = await sdk.init(UNIT_TEST_API_KEY, {
      ...SIMPLE_INITIALIZATION_MOCK,
      debug: true,
    });

    expect(logger.enable).toBeCalled();
    expect(instance).toBeDefined();
    expect(instance).toBe(COMMUNICATOR_INSTANCE_MOCK);
  });
});
