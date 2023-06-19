import { TextEncoder } from 'util';

import Ably from 'ably';

import { MOCK_AVATAR, MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { ParticipantInfo } from '../base/types';

import AblyRealtimeService from '.';

jest.useFakeTimers();

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

  describe('setFollowParticipant', () => {
    test('should update the room properties with the given participantId', () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();
      const participantId = '123';

      AblyRealtimeServiceInstance.setFollowParticipant(participantId);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        followParticipantId: participantId,
      });
    });
  });

  describe('setGather', () => {
    test('should update the room properties with the given active value', () => {
      AblyRealtimeServiceInstance['updateRoomProperties'] = jest.fn();

      const active = true;

      AblyRealtimeServiceInstance.setGather(active);

      expect(AblyRealtimeServiceInstance['updateRoomProperties']).toHaveBeenCalledWith({
        gather: active,
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
});
