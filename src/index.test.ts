import debug from 'debug';

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
  startTranscription: jest.fn(),
  stopTranscription: jest.fn(),
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

jest.mock('./services/api');
jest.mock('./services/auth-service', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((_, apiKey: string) => {
    if (apiKey === UNIT_TEST_API_KEY) {
      return true;
    }

    return false;
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
    expect(sdk).toEqual(expect.any(Function));
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
    await expect(sdk('', SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow('API key is required');
  });

  test('should throw an error if API key is invalid', async () => {
    RemoteConfigService.getRemoteConfig = jest.fn().mockResolvedValue(REMOTE_CONFIG_MOCK);

    await expect(sdk('invalid-api-key', SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow(
      'Failed to validate API key',
    );
  });

  test('should throw an error if no options are provided', async () => {
    await expect(
      sdk(UNIT_TEST_API_KEY, undefined as unknown as SuperVizSdkOptions),
    ).rejects.toThrow('Options is required');
  });

  test('should throw an error if no room id is provided', async () => {
    await expect(
      sdk(UNIT_TEST_API_KEY, { ...SIMPLE_INITIALIZATION_MOCK, roomId: '' }),
    ).rejects.toThrow('Room id is required');
  });

  test('should throw an error if no participant id is provided', async () => {
    await expect(
      sdk(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        participant: { name: 'unit-test-participant-name' } as Participant,
      }),
    ).rejects.toThrow('Participants fields is required');

    await expect(
      sdk(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        participant: undefined as unknown as Participant,
      }),
    ).rejects.toThrow('Participants fields is required');
  });

  test('should throw an error if no group name is provided', async () => {
    await expect(
      sdk(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        group: { id: 'unit-test-group-test-id' } as Group,
      }),
    ).rejects.toThrow('Group fields is required');
  });

  test('should throw an error if envoriment is invalid', async () => {
    ApiService.fetchConfig = jest.fn().mockResolvedValue(undefined);

    expect(sdk(UNIT_TEST_API_KEY, SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow(
      'Failed to load configuration from server',
    );
  });
});
