import { TextEncoder } from 'util';

import Ably from 'ably';

import { MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { StoreType } from '../../../common/types/stores.types';
import { useStore } from '../../../common/utils/use-store';

import { AblyParticipant, AblyRealtimeData } from './types';

import AblyRealtimeService from '.';

jest.useFakeTimers();

const mockTokenRequest: Ably.Types.TokenRequest = {
  capability: 'unit-test-capability',
  keyName: 'unit-test-key-name',
  mac: 'unit-test-mac',
  nonce: 'unit-test-nonce',
  timestamp: new Date().getTime(),
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
          leave: jest.fn(),
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
        callback({ type: 'unit-test-error', message: "this domain don't have permission" }, null);
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

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      participant: MOCK_LOCAL_PARTICIPANT,
      roomId: 'unit-test-room-id',
    });

    expect(AblyRealtimeMock.connection.on).toHaveBeenCalledTimes(1);
  });

  test('should throw error if client is already initialized', () => {
    expect(AblyRealtimeServiceInstance['buildClient']).toBeDefined();

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      participant: MOCK_LOCAL_PARTICIPANT,
      roomId: 'unit-test-room-id',
    });

    expect(() => {
      AblyRealtimeServiceInstance['buildClient']();
    }).toThrow('Tried to call buildClient@Ably is already initialized');
  });

  test('should join room and subscribe to channels', () => {
    expect(AblyRealtimeServiceInstance.join).toBeDefined();

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      participant: MOCK_LOCAL_PARTICIPANT,
      roomId: 'unit-test-room-id',
    });

    AblyRealtimeServiceInstance.join();

    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledTimes(2);
    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledWith(
      'superviz:unit-test-room-id-unit-test-api-key:broadcast',
    );

    expect(AblyRealtimeMock.connection.on).toHaveBeenCalledTimes(1);
  });

  test('should subscribe to broadcast channel if participant is audience', () => {
    expect(AblyRealtimeServiceInstance.join).toBeDefined();

    MOCK_LOCAL_PARTICIPANT.type = ParticipantType.AUDIENCE;

    AblyRealtimeServiceInstance.start({
      apiKey: 'unit-test-api-key',
      participant: MOCK_LOCAL_PARTICIPANT,
      roomId: 'unit-test-room-id',
    });

    AblyRealtimeServiceInstance.join();

    const spy = jest.spyOn(AblyRealtimeServiceInstance['broadcastChannel'], 'subscribe');

    expect(AblyRealtimeMock.channels.get).toHaveBeenCalledTimes(2);
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

    test('should not call callback if domain is not whitelisted', () => {
      const mockTokenParams: Ably.Types.TokenParams = {
        clientId: 'unit-test-client-id',
      };

      const { isDomainWhitelisted } = useStore(StoreType.GLOBAL);
      isDomainWhitelisted.publish(false);

      window.location = {
        origin: 'https://unit-test-domain.com',
      } as any;

      AblyRealtimeServiceInstance['auth'](mockTokenParams, () => {});

      expect(AblyRestMock.auth.requestToken).not.toHaveBeenCalled();
    });
  });

  describe('room properties sync handlers', () => {
    test('should set hostClientId to myParticipant data participantId if myParticipant data type is defined', async () => {
      const participantId = '123';

      AblyRealtimeServiceInstance['myParticipant'] = {
        action: 'enter',
        clientId: participantId,
        data: {
          participantId,
          slotIndex: 0,
          type: ParticipantType.HOST,
        },
        id: 'unit-test-id',
        connectionId: 'unit-test-connection-id',
        encoding: '',
        timestamp: new Date().getTime(),
        extras: {},
      };

      AblyRealtimeServiceInstance['updateParticipants'] = jest.fn();
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();

      /**
       * Mocking the local room properties because
       * it is updated with the `onAblyRoomUpdate` callback
       */
      AblyRealtimeServiceInstance['localRoomProperties'] = {
        isGridModeEnabled: false,
        hostClientId: participantId,
        followParticipantId: null,
        gather: false,
        drawing: null,
      } as unknown as AblyRealtimeData;

      expect(AblyRealtimeServiceInstance.hostClientId).toBe(participantId);
    });
  });

  describe('handle on join room event', () => {
    beforeEach(() => {
      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        participant: MOCK_LOCAL_PARTICIPANT,
        roomId: 'unit-test-room-id',
      });

      AblyRealtimeServiceInstance.join();

      AblyRealtimeServiceInstance['updateParticipants'] = jest.fn();
      AblyRealtimeServiceInstance['updateLocalRoomState'] = jest.fn();
      AblyRealtimeServiceInstance['publishStateUpdate'] = jest.fn();
    });

    test('should join room and create room properties if not exists', async () => {
      const mockRoomProperties = {
        roomId: 'unit-test-room-id',
        hostClientId: 'unit-test-host-client-id',
        participants: [],
      };

      AblyRealtimeServiceInstance['fetchRoomProperties'] = jest
        .fn()
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce(mockRoomProperties);

      await AblyRealtimeServiceInstance['onJoinRoom']();

      expect(AblyRealtimeServiceInstance['isReconnecting']).toBe(false);
      expect(AblyRealtimeServiceInstance['hasJoinedRoom']).toBe(true);
    });
  });

  describe('handle state changes', () => {
    beforeEach(() => {
      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        participant: MOCK_LOCAL_PARTICIPANT,
        roomId: 'unit-test-room-id',
      });

      AblyRealtimeServiceInstance.join();

      AblyRealtimeServiceInstance['forceReconnect'] = jest.fn();

      const { isDomainWhitelisted } = useStore(StoreType.GLOBAL);
      isDomainWhitelisted.publish(true);
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
      const connectionState: Ably.Types.ConnectionStateChange = {
        current: 'connecting',
        previous: 'disconnected',
        retryIn: 1000,
      };

      AblyRealtimeServiceInstance['onAblyConnectionStateChange'](connectionState);

      expect(AblyRealtimeServiceInstance['state']).toBe(RealtimeStateTypes.RETRYING);
      expect(AblyRealtimeServiceInstance['currentReconnectAttempt']).toBe(1);
    });
  });

  describe('presence events handlers', () => {
    beforeEach(() => {
      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        participant: MOCK_LOCAL_PARTICIPANT,
        roomId: 'unit-test-room-id',
      });

      AblyRealtimeServiceInstance.join();
    });

    /**
     * presence update
     */

    test('should skip the update if my participant not joined room', () => {
      const presenceData: Ably.Types.PresenceMessage = {
        extras: null,
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

    test('if my participant is host and is broadcast mode, should call syncBroadcast', () => {
      AblyRealtimeServiceInstance['hostParticipantId'] = MOCK_LOCAL_PARTICIPANT.id;
      // @ts-ignore
      AblyRealtimeServiceInstance['syncBroadcast'] = jest.fn();
      jest.spyOn(AblyRealtimeServiceInstance, 'isBroadcast', 'get').mockReturnValueOnce(true);

      const presenceData: Ably.Types.PresenceMessage = {
        extras: null,
        action: 'update',
        clientId: MOCK_LOCAL_PARTICIPANT.id,
        connectionId: 'connection1',
        encoding: 'h264',
        data: {
          participantId: MOCK_LOCAL_PARTICIPANT.id,
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

      const { participants } = useStore(StoreType.GLOBAL);
      const { hostId } = useStore(StoreType.VIDEO);

      AblyRealtimeServiceInstance['hasJoinedRoom'] = true;
      participants.publish({ [MOCK_LOCAL_PARTICIPANT.id]: presenceDataUpdated });
      hostId.publish(MOCK_LOCAL_PARTICIPANT.id);

      AblyRealtimeServiceInstance['onAblyPresenceUpdate'](presenceDataUpdated);

      expect(AblyRealtimeServiceInstance['syncBroadcast']).toHaveBeenCalled();
    });

    /**
     * presence leave
     */

    test('should skip participant update if the state is READY_TO_JOIN', () => {
      AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.READY_TO_JOIN;

      const presenceData: Ably.Types.PresenceMessage = {
        extras: null,
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

      expect(AblyRealtimeServiceInstance['updateParticipants']).not.toHaveBeenCalled();
    });
  });

  describe('participant slot hadlers', () => {
    beforeEach(() => {
      AblyRealtimeServiceInstance.start({
        apiKey: 'unit-test-api-key',
        participant: MOCK_LOCAL_PARTICIPANT,
        roomId: 'unit-test-room-id',
      });

      AblyRealtimeServiceInstance.join();
    });

    /**
     * getParticipantSlot
     */

    test('should return the participant slot', () => {
      const mockPresence: Ably.Types.PresenceMessage = {
        extras: null,
        clientId: 'unit-test-participant-id',
        connectionId: 'unit-test-connection-id',
        data: {
          participantId: 'unit-test-client-id',
          slotIndex: 0,
        },
        encoding: 'json',
        id: 'unit-test-id',
        timestamp: 1234567890,
        action: 'enter',
      };

      AblyRealtimeServiceInstance['participants']['unit-test-participant-id'] = mockPresence;

      expect(AblyRealtimeServiceInstance['getParticipantSlot'](mockPresence.clientId)).toEqual(0);
    });

    test('should return 16 if the participant dont exists', () => {
      expect(AblyRealtimeServiceInstance['getParticipantSlot']('unit-test-participant-id')).toEqual(
        16,
      );
    });

    describe('syncBroadcast', () => {
      beforeEach(() => {
        AblyRealtimeServiceInstance.start({
          apiKey: 'unit-test-api-key',
          participant: MOCK_LOCAL_PARTICIPANT,
          roomId: 'unit-test-room-id',
        });

        AblyRealtimeServiceInstance.join();
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

    describe('forceReconnect', () => {
      beforeEach(() => {
        AblyRealtimeServiceInstance.start({
          apiKey: 'unit-test-api-key',
          participant: MOCK_LOCAL_PARTICIPANT,
          roomId: 'unit-test-room-id',
        });
      });

      test('should throw an error if roomId is not set', () => {
        // @ts-ignore
        AblyRealtimeServiceInstance['roomId'] = null;

        expect(() => AblyRealtimeServiceInstance['forceReconnect']()).toThrow(
          'Tried to reconnect without roomId set',
        );
      });

      it('should rejoin the room if client is already connected to ably servers', () => {
        AblyRealtimeServiceInstance.join = jest.fn();
        AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.READY_TO_JOIN;
        AblyRealtimeServiceInstance['forceReconnect']();
        expect(AblyRealtimeServiceInstance.join).toHaveBeenCalled();
      });

      test('should rebuild the client and update participant properties if client lost connection', () => {
        AblyRealtimeServiceInstance['state'] = RealtimeStateTypes.CONNECTED;
        AblyRealtimeServiceInstance['buildClient'] = jest.fn();
        // @ts-ignore
        AblyRealtimeServiceInstance['updateMyProperties'] = jest.fn();
        AblyRealtimeServiceInstance['forceReconnect']();
        expect(AblyRealtimeServiceInstance['buildClient']).toHaveBeenCalled();
      });
    });

    describe('leave', () => {
      beforeEach(() => {
        AblyRealtimeServiceInstance.start({
          apiKey: 'unit-test-api-key',
          participant: MOCK_LOCAL_PARTICIPANT,
          roomId: 'unit-test-room-id',
        });

        AblyRealtimeServiceInstance.join();
      });

      test('should unsubscribe from presence channel and call callback with no error', async () => {
        const spy = jest.spyOn(AblyRealtimeServiceInstance['client'], 'close');

        AblyRealtimeServiceInstance.leave();

        expect(spy).toBeCalled();
        expect(AblyRealtimeServiceInstance['hasJoinedRoom']).toBe(false);
        expect(AblyRealtimeServiceInstance['isReconnecting']).toBe(false);
        expect(AblyRealtimeServiceInstance['roomId']).toBe(null);
        expect(AblyRealtimeServiceInstance['participants']).toEqual({});
        expect(AblyRealtimeServiceInstance['hostParticipantId']).toBe(null);
        expect(AblyRealtimeServiceInstance['myParticipant']).toBe(null);
        expect(AblyRealtimeServiceInstance['supervizChannel']).toBe(null);
        expect(AblyRealtimeServiceInstance['client']).toBe(null);
      });
    });
  });
});
