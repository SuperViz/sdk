import { TextEncoder } from 'util';

import Ably from 'ably';

import { MOCK_AVATAR, MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { ParticipantInfo } from '../base/types';

import { AblyParticipant } from './types';

import AblyRealtimeService from '.';

jest.useFakeTimers();

const mockTokenRequest: Ably.Types.TokenRequest = {
  capability: 'unit-test-capability',
  keyName: 'unit-test-key-name',
  mac: 'unit-test-mac',
  nonce: 'unit-test-nonce',
  timestamp: new Date().getTime(),
};

const AblyClientRoomStateHistoryMock = {
  items: [
    {
      data: {
        fizz: {
          name: 'fizz',
          data: "999  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          participantId: '123',
          timestamp: new Date().getTime(),
        },
        buzz: {
          name: 'buzz',
          data: "999 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          participantId: '123',
          timestamp: new Date().getTime(),
        },
      },
    },
  ],
};

const AblyRealtimeMock = {
  channels: {
    get: jest.fn().mockImplementation(() => {
      return {
        attach: jest.fn(),
        detach: jest.fn(),
        on: jest.fn(),
        publish: jest.fn(),
        subscribe: jest.fn(),
        unsubscribe: jest.fn(),
        history: jest.fn(),
        presence: {
          get: jest.fn(),
          enter: jest.fn(),
          update: jest.fn(),
          subscribe: jest.fn(),
          unsubscribe: jest.fn(),
        },
      };
    }),
  },
  connection: {
    on: jest.fn(),
  },
  connect: jest.fn(),
  close: jest.fn(),
  closeConnection: jest.fn(),
};

const AblyRestMock = {
  auth: {
    requestToken: jest
      .fn()
      .mockImplementationOnce((params, options, callback) => {
        callback(null, mockTokenRequest);
      })
      .mockImplementation((params, options, callback) => {
        callback('unit-test-error', null);
      }),
  },
};

global.TextEncoder = TextEncoder;

jest.mock('ably', () => {
  return {
    Realtime: jest.fn().mockImplementation(() => AblyRealtimeMock),
    Rest: jest.fn().mockImplementation(() => AblyRestMock),
  };
});

describe('AblyRealtimeService', () => {
  let AblyRealtimeServiceInstance: AblyRealtimeService;

  beforeEach(() => {
    jest.clearAllMocks();
    AblyRealtimeServiceInstance = new AblyRealtimeService(
      'unit-test-api-key',
      'unit-test-ably-key',
    );
  });

  test('should be defined', () => {
    expect(AblyRealtimeService).toBeDefined();
  });

  test('should instantiate AblyRealtimeService', () => {
    expect(AblyRealtimeServiceInstance).toBeDefined();
    expect(AblyRealtimeServiceInstance).toBeInstanceOf(AblyRealtimeService);
  });

  test('should start realtime connection', () => {
    expect(AblyRealtimeServiceInstance.start).toBeDefined();

    const participant: ParticipantInfo = {
      ...MOCK_LOCAL_PARTICIPANT,
      ...MOCK_AVATAR,
      slotIndex: 0,
      participantId: 'unit-test-participant-id',
    };

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      initialParticipantData: participant,
      isBroadcast: false,
      roomId: 'unit-test-room-id',
      shouldKickParticipantsOnHostLeave: true,
    });

    expect(AblyRealtimeMock.connection.on).toHaveBeenCalledTimes(1);
  });

  test('should throw error if client is already initialized', () => {
    expect(AblyRealtimeServiceInstance['buildClient']).toBeDefined();

    const participant: ParticipantInfo = {
      ...MOCK_LOCAL_PARTICIPANT,
      ...MOCK_AVATAR,
      slotIndex: 0,
      participantId: 'unit-test-participant-id',
    };

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      initialParticipantData: participant,
      isBroadcast: false,
      roomId: 'unit-test-room-id',
      shouldKickParticipantsOnHostLeave: true,
    });

    expect(() => {
      AblyRealtimeServiceInstance['buildClient']();
    }).toThrow('Tried to call buildClient@Ably is already initialized');
  });

  test('should join room and subscribe to channels', () => {
    expect(AblyRealtimeServiceInstance.join).toBeDefined();

    const participant: ParticipantInfo = {
      ...MOCK_LOCAL_PARTICIPANT,
      ...MOCK_AVATAR,
      slotIndex: 0,
      participantId: 'unit-test-participant-id',
    };

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      initialParticipantData: participant,
      isBroadcast: false,
      roomId: 'unit-test-room-id',
      shouldKickParticipantsOnHostLeave: true,
    });

    AblyRealtimeServiceInstance.join(participant);

    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledTimes(4);
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:client-sync',
    );
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:client-state',
    );
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:broadcast',
    );

    expect(AblyRealtimeMock.connection.on).toHaveBeenCalledTimes(1);
  });

  test('should subscribe to broadcast channe if participant is audience', () => {
    expect(AblyRealtimeServiceInstance.join).toBeDefined();

    const participant: ParticipantInfo = {
      ...MOCK_LOCAL_PARTICIPANT,
      ...MOCK_AVATAR,
      slotIndex: 0,
      participantId: 'unit-test-participant-id',
      type: ParticipantType.AUDIENCE,
    };

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      initialParticipantData: participant,
      isBroadcast: true,
      roomId: 'unit-test-room-id',
      shouldKickParticipantsOnHostLeave: true,
    });

    AblyRealtimeServiceInstance.join(participant);

    const spy = jest.spyOn(AblyRealtimeServiceInstance['broadcastChannel'], 'subscribe');

    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledTimes(4);
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:client-sync',
    );
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:client-state',
    );
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:broadcast',
    );

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('auth', () => {
    test('should request token and call callback with token request', () => {
      const mockTokenParams: Ably.Types.TokenParams = {
        clientId: 'unit-test-client-id',
      };

      AblyRealtimeServiceInstance['auth'](mockTokenParams, (error, tokenRequest) => {
        expect(error).toBeNull();
        expect(tokenRequest).toBe(mockTokenRequest);
      });

      expect(AblyRestMock.auth.requestToken).toHaveBeenCalledWith(
        mockTokenParams,
        {
          authUrl: `${AblyRealtimeServiceInstance['apiUrl']}/realtime/auth`,
          key: AblyRealtimeServiceInstance['ablyKey'],
          authParams: {
            domain: window.location.origin,
            apiKey: AblyRealtimeServiceInstance['apiKey'],
          },
        },
        expect.any(Function),
      );
    });

    test('should call callback with error if token request fails', () => {
      const mockTokenParams: Ably.Types.TokenParams = {
        clientId: 'unit-test-client-id',
      };

      AblyRealtimeServiceInstance['auth'](mockTokenParams, (error, tokenRequest) => {
        expect(error).toBe('unit-test-error');
        expect(tokenRequest).toBeNull();
      });

      expect(AblyRestMock.auth.requestToken).toHaveBeenCalledWith(
        mockTokenParams,
        {
          authUrl: `${AblyRealtimeServiceInstance['apiUrl']}/realtime/auth`,
          key: AblyRealtimeServiceInstance['ablyKey'],
          authParams: {
            domain: window.location.origin,
            apiKey: AblyRealtimeServiceInstance['apiKey'],
          },
        },
        expect.any(Function),
      );
    });
  });

  describe('room properties sync handlers', () => {
    test('should update the room properties with the given participantId', () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();
      const participantId = '123';

      AblyRealtimeServiceInstance.setFollowParticipant(participantId);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        followParticipantId: participantId,
      });
    });

    test('should update the room properties with the given active value', () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();
      const active = true;

      AblyRealtimeServiceInstance.setGather(active);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        gather: active,
      });
    });

    test('should update the room properties with the new grid mode', () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();

      const initialRoomProperties = AblyRealtimeServiceInstance['roomProperties'];

      const isGridModeEnable = !initialRoomProperties?.isGridModeEnable;

      AblyRealtimeServiceInstance.setGridMode(isGridModeEnable);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        isGridModeEnable,
      });
    });
  });

  describe('handle on join room event', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);

      AblyRealtimeServiceInstance['initializeRoomProperties'] = jest.fn();
      AblyRealtimeServiceInstance['updateParticipants'] = jest.fn();
      AblyRealtimeServiceInstance['updateHostInfo'] = jest.fn();
      AblyRealtimeServiceInstance['updateLocalRoomState'] = jest.fn();
      AblyRealtimeServiceInstance['publishStateUpdate'] = jest.fn();
      AblyRealtimeServiceInstance.participantJoinedObserver.publish = jest.fn();
    });

    test('should join room and update local room state', async () => {
      const mockPresence: Ably.Types.PresenceMessage = {
        clientId: 'unit-test-client-id',
        connectionId: 'unit-test-participant-id',
        data: {},
        encoding: 'json',
        id: 'unit-test-id',
        timestamp: 1234567890,
        action: 'enter',
      };

      const mockRoomProperties = {
        roomId: 'unit-test-room-id',
        hostClientId: 'unit-test-host-client-id',
        participants: [],
      };

      AblyRealtimeServiceInstance['fetchRoomProperties'] = jest
        .fn()
        .mockResolvedValue(mockRoomProperties);

      await AblyRealtimeServiceInstance['onJoinRoom'](mockPresence);

      expect(AblyRealtimeServiceInstance['isJoinedRoom']).toBe(true);
      expect(AblyRealtimeServiceInstance['fetchRoomProperties']).toHaveBeenCalledTimes(2);
      expect(AblyRealtimeServiceInstance['updateParticipants']).toHaveBeenCalledTimes(1);
      expect(AblyRealtimeServiceInstance['updateHostInfo']).toHaveBeenCalledTimes(1);
      expect(AblyRealtimeServiceInstance['updateLocalRoomState']).toHaveBeenCalledTimes(1);
      expect(AblyRealtimeServiceInstance['publishStateUpdate']).toHaveBeenCalledWith(
        RealtimeStateTypes.CONNECTED,
      );
      expect(AblyRealtimeServiceInstance.participantJoinedObserver.publish).toHaveBeenCalledWith(
        mockPresence,
      );
      expect(AblyRealtimeServiceInstance['initializeRoomProperties']).not.toBeCalled();
    });

    test('should join room and create room properties if not exists', async () => {
      const mockPresence: Ably.Types.PresenceMessage = {
        clientId: 'unit-test-client-id',
        connectionId: 'unit-test-participant-id',
        data: {},
        encoding: 'json',
        id: 'unit-test-id',
        timestamp: 1234567890,
        action: 'enter',
      };

      const mockRoomProperties = {
        roomId: 'unit-test-room-id',
        hostClientId: 'unit-test-host-client-id',
        participants: [],
      };

      AblyRealtimeServiceInstance['fetchRoomProperties'] = jest
        .fn()
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce(mockRoomProperties);

      await AblyRealtimeServiceInstance['onJoinRoom'](mockPresence);

      expect(AblyRealtimeServiceInstance['isJoinedRoom']).toBe(true);
      expect(AblyRealtimeServiceInstance['fetchRoomProperties']).toHaveBeenCalledTimes(1);
      expect(AblyRealtimeServiceInstance['updateParticipants']).not.toBeCalled();
      expect(AblyRealtimeServiceInstance['updateHostInfo']).not.toBeCalled();
      expect(AblyRealtimeServiceInstance['updateLocalRoomState']).not.toBeCalled();
      expect(AblyRealtimeServiceInstance['publishStateUpdate']).toHaveBeenCalledWith(
        RealtimeStateTypes.CONNECTED,
      );
      expect(AblyRealtimeServiceInstance.participantJoinedObserver.publish).toHaveBeenCalledWith(
        mockPresence,
      );
      expect(AblyRealtimeServiceInstance['initializeRoomProperties']).toHaveBeenCalledTimes(1);
    });
  });

  describe('handle state changes', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);

      AblyRealtimeServiceInstance['forceReconnect'] = jest.fn();
    });

    test('should updates connections state changes', () => {
      AblyRealtimeServiceInstance['onStateChange'] = jest.fn();

      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['onStateChange']).toHaveBeenCalled();
      expect(AblyRealtimeServiceInstance['connectionState']).toBe(connectionState);
    });

    test('should updates channels state changes', () => {
      AblyRealtimeServiceInstance['onStateChange'] = jest.fn();

      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'attached',
        previous: 'attaching',
      };

      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['onStateChange']).toHaveBeenCalled();
      expect(AblyRealtimeServiceInstance['supervizChannelState']).toBe(channelState);
    });

    /**
     * Disconnected
     */
    test('should update state to disconnected if connection state is closing', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'closing',
        previous: 'connected',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.DISCONNECTED);
    });

    test('should update state to disconnected if connection status is closed', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'closed',
        previous: 'connected',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.DISCONNECTED);
    });

    test('should update state to disconnected if channel status is detaching', () => {
      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'detaching',
        previous: 'attached',
      };

      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.DISCONNECTED);
    });

    test('should update state to disconnected if channel status is detached', () => {
      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'detached',
        previous: 'attached',
      };

      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.DISCONNECTED);
    });

    /**
     * Initializing
     */

    test('should update state to initializing if connection status is connecting', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connecting',
        previous: 'disconnected',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.INITIALIZING);
    });

    test('should update state to initializing if connection status is initialized', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'initialized',
        previous: 'disconnected',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.INITIALIZING);
    });

    /**
     * Ready to join
     */

    test('should update state to ready to join if connection status is connected and channel status is null', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.READY_TO_JOIN);
    });

    test('should update current reconnect attempt to zero when state is ready to join', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['currentReconnectAttempt']).toBe(0);
    });

    /**
     * Connecting
     */

    test('should update state to connecting if connection status is connected and channel status is attaching', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'attaching',
        previous: 'attached',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);
      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.CONNECTING);
    });

    /**
     * Connected
     */

    test('should update state to connected if connection status is connected and channel status is attached', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'attached',
        previous: 'attaching',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);
      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.CONNECTED);
    });

    test('should join room if state is connected and isReconnecting is true', () => {
      AblyRealtimeServiceInstance['onJoinRoom'] = jest.fn();

      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connected',
        previous: 'connecting',
      };

      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'attached',
        previous: 'attaching',
      };

      AblyRealtimeServiceInstance['isReconnecting'] = true;

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);
      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['onJoinRoom']).toBeCalled();
    });

    /**
     * Failed
     */

    test('should update state to failed if connection status is failed', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'failed',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.FAILED);
    });

    test('should update state to failed if channel status is failed', () => {
      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'failed',
        previous: 'attaching',
      };

      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.FAILED);
    });

    test('should force reconnect if state is failed', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'failed',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['forceReconnect']).toHaveBeenCalled();
    });

    /**
     * Retraying
     */

    test('should update state to retrying if connection status is suspended', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'suspended',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.RETRYING);
    });

    test('should update state to retrying if channel status is suspended', () => {
      const channelState: Ably.Types.ChannelStateChange = {
        resumed: false,
        current: 'suspended',
        previous: 'attaching',
      };

      AblyRealtimeServiceInstance['onAblyChannelStateChange'](channelState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.RETRYING);
    });

    test('should force reconnect if state is retrying', () => {
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'suspended',
        previous: 'connecting',
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['forceReconnect']).toHaveBeenCalled();
    });

    /**
     * RetryIn
     */

    test('should update state to retry if connection status is in retryIn', () => {
      AblyRealtimeServiceInstance.reconnectObserver.publish = jest.fn();

      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connecting',
        previous: 'disconnected',
        retryIn: 1000,
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.RETRYING);
      expect(AblyRealtimeServiceInstance['currentReconnectAttempt']).toBe(1);
      expect(AblyRealtimeServiceInstance.reconnectObserver.publish).toBeCalled();
    });
  });

  describe('client message handlers', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);

      AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.CONNECTED;
    });

    /**
     * IsMessageTooBig
     */

    test('should return true if message size is bigger than 60kb', () => {
      const message = {
        data: 'a'.repeat(60000),
      };

      expect(AblyRealtimeServiceInstance['isMessageTooBig'](message)).toBeTruthy();
    });

    test('should return false if message size is smaller than 60kb', () => {
      const message = {
        data: 'a'.repeat(60000 - 11),
      };

      expect(AblyRealtimeServiceInstance['isMessageTooBig'](message)).toBeFalsy();
    });

    /**
     * setSyncProperty
     */

    test('should add the event to the queue', () => {
      const publishClientSyncPropertiesSpy = jest.spyOn(
        AblyRealtimeServiceInstance as any,
        'publishClientSyncProperties',
      );
      const name = 'test';
      const property = { test: true };

      AblyRealtimeServiceInstance.setSyncProperty(name, property);

      expect(publishClientSyncPropertiesSpy).not.toHaveBeenCalled();
      expect(AblyRealtimeServiceInstance['clientSyncPropertiesQueue'][name]).toHaveLength(1);
    });

    test('should publish the queue if it is too big', () => {
      const publishClientSyncPropertiesSpy = jest.spyOn(
        AblyRealtimeServiceInstance as any,
        'publishClientSyncProperties',
      );

      const name = 'test';
      const property = { test: true };
      const queue = new Array(60000).fill({ name, data: property });

      AblyRealtimeServiceInstance['clientSyncPropertiesQueue'][name] = queue;

      AblyRealtimeServiceInstance.setSyncProperty(name, property);
      jest.runAllTimers();

      expect(publishClientSyncPropertiesSpy).toHaveBeenCalledTimes(2);
      expect(AblyRealtimeServiceInstance['clientSyncPropertiesQueue'][name]).toHaveLength(0);
    });

    test('should throw an error if the message is too big', () => {
      const publishClientSyncPropertiesSpy = jest.spyOn(
        AblyRealtimeServiceInstance as any,
        'publishClientSyncProperties',
      );
      const throwSpy = jest.spyOn(AblyRealtimeServiceInstance as any, 'throw');
      const name = 'test';
      const property = { test: true, tooBig: new Array(10000).fill('a').join('') };

      expect(() => AblyRealtimeServiceInstance.setSyncProperty(name, property)).toThrowError(
        'Message too long, the message limit size is 10kb.',
      );
      expect(publishClientSyncPropertiesSpy).not.toHaveBeenCalled();
      expect(throwSpy).toHaveBeenCalledWith('Message too long, the message limit size is 10kb.');
    });

    test('should add the event to the queue and publish it after 1 second', async () => {
      const publishClientSyncPropertiesSpy = jest.spyOn(
        AblyRealtimeServiceInstance as any,
        'publishClientSyncProperties',
      );
      const name = 'test';
      const property = { test: true };

      AblyRealtimeServiceInstance.setSyncProperty(name, property);

      expect(publishClientSyncPropertiesSpy).not.toHaveBeenCalled();
      expect(AblyRealtimeServiceInstance['clientSyncPropertiesQueue'][name]).toHaveLength(1);

      jest.advanceTimersByTime(1000);

      expect(publishClientSyncPropertiesSpy).toHaveBeenCalled();
      expect(AblyRealtimeServiceInstance['clientSyncPropertiesQueue'][name]).toHaveLength(0);
    });

    /**
     * publishClientSyncProperties
     * */

    test('should not publish if the queue is empty', () => {
      AblyRealtimeServiceInstance['clientSyncPropertiesQueue'] = {
        test: [],
      };

      AblyRealtimeServiceInstance['publishClientSyncProperties']();

      expect(AblyRealtimeServiceInstance['clientSyncChannel'].publish).not.toHaveBeenCalled();
    });

    test('should not publish if the state is different than connected', () => {
      AblyRealtimeServiceInstance['clientSyncPropertiesQueue'] = {
        test: [],
      };

      AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.DISCONNECTED;

      AblyRealtimeServiceInstance['publishClientSyncProperties']();

      expect(AblyRealtimeServiceInstance['clientSyncChannel'].publish).not.toHaveBeenCalled();
    });

    test('should publish the queue', () => {
      AblyRealtimeServiceInstance['clientSyncPropertiesQueue'] = {
        test: [
          {
            data: { test: true },
            name: 'test',
            participantId: 'unit-test-participant-id',
            timestamp: new Date().getTime(),
          },
        ],
      };

      AblyRealtimeServiceInstance['publishClientSyncProperties']();

      expect(AblyRealtimeServiceInstance['clientSyncChannel'].publish).toHaveBeenCalled();
    });

    /**
     * fetchClientSyncProperties
     */

    test('should return the client sync properties history', async () => {
      AblyRealtimeServiceInstance['clientRoomStateChannel'].history = jest.fn((callback) => {
        (callback as any)(null, AblyClientRoomStateHistoryMock);
      });

      const expected = AblyClientRoomStateHistoryMock.items[0].data;

      await expect(AblyRealtimeServiceInstance.fetchSyncClientProperty()).resolves.toEqual(
        expected,
      );
    });

    test('should return the client sync properties history for a specific key', async () => {
      AblyRealtimeServiceInstance['clientRoomStateChannel'].history = jest.fn((callback) => {
        (callback as any)(null, AblyClientRoomStateHistoryMock);
      });

      const expected = AblyClientRoomStateHistoryMock.items[0].data.buzz;

      await expect(AblyRealtimeServiceInstance.fetchSyncClientProperty('buzz')).resolves.toEqual(
        expected,
      );
    });

    test('should return null if the history is empty', async () => {
      AblyRealtimeServiceInstance['clientRoomStateChannel'].history = jest.fn((callback) => {
        (callback as any)(null, null);
      });

      await expect(AblyRealtimeServiceInstance.fetchSyncClientProperty()).resolves.toEqual(null);
    });

    test('should return throw an error if a event is not found', async () => {
      AblyRealtimeServiceInstance['clientRoomStateChannel'].history = jest.fn((callback) => {
        (callback as any)(null, AblyClientRoomStateHistoryMock);
      });

      await expect(
        AblyRealtimeServiceInstance.fetchSyncClientProperty('not-found'),
      ).rejects.toThrow('Event not-found not found in the history');
    });

    test('should throw an error if ably dont responds', async () => {
      AblyRealtimeServiceInstance['clientRoomStateChannel'].history = jest.fn((callback) => {
        (callback as any)('error', null);
      });

      await expect(AblyRealtimeServiceInstance.fetchSyncClientProperty()).rejects.toThrow();
    });
  });

  describe('host events handlers', () => {
    test('should update the hostClientId in the room properties', async () => {
      const participantId = 'participant1';
      const participant: AblyParticipant = {
        clientId: 'client1',
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId,
        },
      };
      AblyRealtimeServiceInstance['participants'][participantId] = participant;
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();
      await AblyRealtimeServiceInstance.setHost(participantId);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        hostClientId: participant.clientId,
      });
    });

    test('should not update the hostClientId if participantId is falsy', async () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();

      await AblyRealtimeServiceInstance.setHost('');

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).not.toHaveBeenCalled();
    });

    test('when the host leaves the room, should set the hostClientId to null', async () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();
      AblyRealtimeServiceInstance['localRoomProperties'] = {
        hostClientId: 'client1',
      };
      AblyRealtimeServiceInstance['participants'] = {
        participant1: {
          clientId: 'client1',
          action: 'present',
          connectionId: 'connection1',
          encoding: 'h264',
          id: 'unit-test-participant-ably-id',
          timestamp: new Date().getTime(),
          data: {
            participantId: 'participant1',
          },
        },
      };

      AblyRealtimeServiceInstance['onHostLeft']();

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        hostClientId: null,
      });
    });
  });

  describe('presence events handlers', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);
    });

    /**
     * presence enter
     */

    test('should call onParticipantJoin when other participant joins the room', async () => {
      const presenceData: Ably.Types.PresenceMessage = {
        action: 'enter',
        clientId: 'participant1',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'participant1',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['onParticipantJoin'] = jest.fn();

      AblyRealtimeServiceInstance['onAblyPresenceEnter'](presenceData);

      expect(AblyRealtimeServiceInstance['onParticipantJoin']).toHaveBeenCalledWith(presenceData);
    });

    test('should call onJoinRoom when my participant joins the room', async () => {
      const presenceData: Ably.Types.PresenceMessage = {
        action: 'enter',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['onJoinRoom'] = jest.fn();

      AblyRealtimeServiceInstance['onAblyPresenceEnter'](presenceData);

      expect(AblyRealtimeServiceInstance['onJoinRoom']).toHaveBeenCalledWith(presenceData);
    });

    test('should add the participant to the participants list', async () => {
      const participantToBeAdded: AblyParticipant = {
        clientId: 'participant1',
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: 'participant1',
        },
      };

      AblyRealtimeServiceInstance.participantJoinedObserver.publish = jest.fn();

      AblyRealtimeServiceInstance['supervizChannel'].presence.get = jest
        .fn()
        .mockImplementation((callback) => {
          callback(null, [participantToBeAdded]);
        });

      await AblyRealtimeServiceInstance['onParticipantJoin'](participantToBeAdded);

      expect(AblyRealtimeServiceInstance['participants']).toEqual({
        participant1: participantToBeAdded,
      });

      expect(AblyRealtimeServiceInstance.participantJoinedObserver.publish).toHaveBeenCalled();
    });

    /**
     * presence update
     */

    test('should skip the update if my participant not joined room', () => {
      const presenceData: Ably.Types.PresenceMessage = {
        action: 'update',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['publishParticipantUpdate'] = jest.fn();

      AblyRealtimeServiceInstance['onAblyPresenceUpdate'](presenceData);

      expect(AblyRealtimeServiceInstance['publishParticipantUpdate']).not.toHaveBeenCalled();
    });

    test('should publish participant update', () => {
      const presenceData: Ably.Types.PresenceMessage = {
        action: 'update',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      const presenceDataUpdated = {
        ...presenceData,
        data: {
          ...presenceData.data,
          color: 'yellow',
        },
      };

      AblyRealtimeServiceInstance['onAblyPresenceEnter'](presenceData);
      AblyRealtimeServiceInstance['onAblyPresenceUpdate'](presenceDataUpdated);

      expect(AblyRealtimeServiceInstance['participants']['unit-test-participant-id']).toEqual(
        Object.assign({}, presenceDataUpdated, { participantId: 'unit-test-participant-id' }),
      );
    });

    test('if my participant is host and is broadcast mode, should call syncBroadcast', () => {
      AblyRealtimeServiceInstance['isBroadcast'] = true;
      AblyRealtimeServiceInstance['hostParticipantId'] = 'unit-test-participant-id';
      AblyRealtimeServiceInstance['localParticipantId'] = 'unit-test-participant-id';
      // @ts-ignore
      AblyRealtimeServiceInstance['syncBroadcast'] = jest.fn();

      const presenceData: Ably.Types.PresenceMessage = {
        action: 'update',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      const presenceDataUpdated = {
        ...presenceData,
        data: {
          ...presenceData.data,
          color: 'yellow',
        },
      };

      AblyRealtimeServiceInstance['onAblyPresenceEnter'](presenceData);
      AblyRealtimeServiceInstance['onAblyPresenceUpdate'](presenceDataUpdated);

      expect(AblyRealtimeServiceInstance['participants']['unit-test-participant-id']).toEqual(
        Object.assign({}, presenceDataUpdated, { participantId: 'unit-test-participant-id' }),
      );

      expect(AblyRealtimeServiceInstance['syncBroadcast']).toHaveBeenCalled();
    });

    /**
     * presence leave
     */

    test('should call onParticipantLeave when other participant leaves the room', async () => {
      const presenceData: Ably.Types.PresenceMessage = {
        action: 'leave',
        clientId: 'participant1',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'participant1',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['onParticipantLeave'] = jest.fn();

      AblyRealtimeServiceInstance['onAblyPresenceLeave'](presenceData);

      expect(AblyRealtimeServiceInstance['onParticipantLeave']).toHaveBeenCalledWith(presenceData);
    });

    test('should skip participant update if the state is READY_TO_JOIN', () => {
      AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.READY_TO_JOIN;

      const presenceData: Ably.Types.PresenceMessage = {
        action: 'leave',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['updateParticipants'] = jest.fn();
      AblyRealtimeServiceInstance['onAblyPresenceLeave'](presenceData);

      expect(AblyRealtimeServiceInstance['updateParticipants']).not.toHaveBeenCalled();
    });

    test('should remove the participant from the participants list', async () => {
      AblyRealtimeServiceInstance['supervizChannel'].presence.get = jest
        .fn()
        .mockImplementation((callback) => {
          callback(null, [myParticipant]);
        });

      const myParticipant: Ably.Types.PresenceMessage = {
        action: 'enter',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      const participantToBeRemoved: Ably.Types.PresenceMessage = {
        action: 'leave',
        clientId: 'participant1',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'participant1',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['participants'] = {
        participant1: participantToBeRemoved,
        'unit-test-participant-id': myParticipant,
      };

      AblyRealtimeServiceInstance['localRoomProperties'] = {
        hostClientId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance['onAblyPresenceLeave'](participantToBeRemoved);

      expect(AblyRealtimeServiceInstance['participants']).toEqual({
        'unit-test-participant-id': myParticipant,
      });
    });

    test('should clear the followId if the participant followed leaves the room', async () => {
      AblyRealtimeServiceInstance['localRoomProperties'] = {
        hostClientId: 'unit-test-participant-id',
        followParticipantId: 'participant1',
      };

      const spy = jest.spyOn(AblyRealtimeServiceInstance, 'setFollowParticipant');

      const participantToBeRemoved: Ably.Types.PresenceMessage = {
        action: 'leave',
        clientId: 'participant1',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'participant1',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['onAblyPresenceLeave'](participantToBeRemoved);

      expect(spy).toHaveBeenCalled();
    });

    test('should call the onHostLeft method if the host leaves the room', async () => {
      AblyRealtimeServiceInstance['localRoomProperties'] = {};
      AblyRealtimeServiceInstance['hostParticipantId'] = 'unit-test-participant-id';

      AblyRealtimeServiceInstance['onHostLeft'] = jest.fn();
      const participantToBeRemoved: Ably.Types.PresenceMessage = {
        action: 'leave',
        clientId: 'unit-test-participant-id',
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: 'unit-test-participant-id',
        },
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
      };

      AblyRealtimeServiceInstance['onAblyPresenceLeave'](participantToBeRemoved);

      expect(AblyRealtimeServiceInstance['onHostLeft']).toHaveBeenCalled();
    });
  });

  describe('room state handlers', () => {});

  describe('syncBroadcast', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);
    });

    test('should call fetch with correct url and headers', async () => {
      const ABLY_KEY_64 = Buffer.from('unit-test-ably-key').toString('base64');

      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve([]),
      });

      AblyRealtimeServiceInstance['syncBroadcast']();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://rest.ably.io/channels/superviz:unit-test-room-id-unit-test-api-key/presence',
        {
          headers: { Authorization: `Basic ${ABLY_KEY_64}` },
        },
      );
    });
  });

  describe('freeze sync', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);
    });

    test('should freeze sync', async () => {
      AblyRealtimeServiceInstance.freezeSync(true);

      expect(AblyRealtimeServiceInstance['supervizChannel'].detach).toBeCalled();
      expect(AblyRealtimeServiceInstance['clientSyncChannel'].detach).toBeCalled();
      expect(AblyRealtimeServiceInstance['broadcastChannel'].detach).toBeCalled();
      expect(AblyRealtimeServiceInstance['supervizChannel'].unsubscribe).toBeCalled();
      expect(AblyRealtimeServiceInstance['clientSyncChannel'].unsubscribe).toBeCalled();
      expect(AblyRealtimeServiceInstance['broadcastChannel'].unsubscribe).toBeCalled();

      expect(AblyRealtimeServiceInstance['isSyncFrozen']).toBe(true);
    });

    test('should unfreeze sync', async () => {
      AblyRealtimeServiceInstance.freezeSync(true);
      AblyRealtimeServiceInstance.freezeSync(false);

      expect(AblyRealtimeServiceInstance['supervizChannel'].subscribe).toBeCalled();
      expect(AblyRealtimeServiceInstance['clientSyncChannel'].subscribe).toBeCalled();

      expect(AblyRealtimeServiceInstance['isSyncFrozen']).toBe(false);
    });
  });

  describe('leave', () => {
    beforeEach(() => {
      const participant: ParticipantInfo = {
        ...MOCK_LOCAL_PARTICIPANT,
        ...MOCK_AVATAR,
        slotIndex: 0,
        participantId: 'unit-test-participant-id',
      };

      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        initialParticipantData: participant,
        isBroadcast: false,
        roomId: 'unit-test-room-id',
        shouldKickParticipantsOnHostLeave: true,
      });

      AblyRealtimeServiceInstance.join(participant);
    });

    test('should unsubscribe from presence channel and call callback with no error', async () => {
      const spy = jest.spyOn(AblyRealtimeServiceInstance['client'], 'close');

      AblyRealtimeServiceInstance.leave();

      expect(spy).toBeCalled();
      expect(AblyRealtimeServiceInstance['isJoinedRoom']).toBe(false);
      expect(AblyRealtimeServiceInstance['isReconnecting']).toBe(false);
      expect(AblyRealtimeServiceInstance['roomId']).toBe(null);
      expect(AblyRealtimeServiceInstance['participants']).toEqual({});
      expect(AblyRealtimeServiceInstance['hostParticipantId']).toBe(null);
      expect(AblyRealtimeServiceInstance['myParticipant']).toBe(null);
      expect(AblyRealtimeServiceInstance['supervizChannel']).toBe(null);
      expect(AblyRealtimeServiceInstance['clientSyncChannel']).toBe(null);
      expect(AblyRealtimeServiceInstance['client']).toBe(null);
      expect(AblyRealtimeServiceInstance['left']).toBe(true);
    });
  });
});
