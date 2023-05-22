import ApiService from './services/api';

import sdk, { Group, Participant, SuperVizSdkOptions } from '.';

jest.mock('./services/api');

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

const INVALID_COLORS_VARIABLES_MOCK = {
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
  'invalid-color': '38 36 42',
};

describe('root export', () => {
  test('should export init function', () => {
    expect(sdk.init).toEqual(expect.any(Function));
  });
});

describe('initialization errors', () => {
  test('should throw an error if no API key is provided', async () => {
    ApiService.fetchConfig = jest.fn().mockRejectedValue(new Error('Failed to validate API key'));

    await expect(sdk.init('', SIMPLE_INITIALIZATION_MOCK)).rejects.toThrow();
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
    await expect(
      sdk.init(UNIT_TEST_API_KEY, {
        ...SIMPLE_INITIALIZATION_MOCK,
        customColors: INVALID_COLORS_VARIABLES_MOCK,
      }),
    ).rejects.toThrow('Color invalid-color is not a valid color variable name');
  });
});
