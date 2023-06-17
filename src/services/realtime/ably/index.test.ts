import { TextEncoder } from 'util';

import Ably from 'ably';

import { MOCK_AVATAR, MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { ParticipantInfo } from '../base/types';

import AblyRealtimeService from '.';

const AblyRealtimeMock = {
  channels: {
    get: jest.fn().mockImplementation(() => {
      return {
        attach: jest.fn(),
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
    requestToken: jest.fn(),
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
});
