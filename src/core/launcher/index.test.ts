import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { BaseComponent } from '../../components/base';
import { AblyParticipant } from '../../services/realtime/ably/types';

import { LauncherFacade, LauncherOptions } from './types';

import Facade, { Launcher } from '.';

jest.mock('../../services/realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => ABLY_REALTIME_MOCK),
}));

const MOCK_COMPONENT = {
  attach: jest.fn(),
  detach: jest.fn(),
} as unknown as BaseComponent;

const DEFAULT_INITIALIZATION_MOCK: LauncherOptions = {
  participant: MOCK_LOCAL_PARTICIPANT,
  group: MOCK_GROUP,
};

const PUB_SUB_MOCK = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  publish: jest.fn(),
  fetchHistory: jest.fn(),
  publishEventToClient: jest.fn(),
};

jest.mock('../../services/pubsub', () => ({
  PubSub: jest.fn().mockImplementation(() => PUB_SUB_MOCK),
}));

describe('Launcher', () => {
  let LauncherInstance: Launcher;

  beforeEach(() => {
    jest.clearAllMocks();

    LauncherInstance = new Launcher(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Launcher).toBeDefined();
  });

  test('should be inicialize realtime service', () => {
    expect(ABLY_REALTIME_MOCK.start).toHaveBeenCalled();
  });

  describe('PubSub', () => {
    test('should be subscribe to event', () => {
      const callback = jest.fn();

      LauncherInstance.subscribeToPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be unsubscribe from event', () => {
      const callback = jest.fn();

      LauncherInstance.unsubscribeFromPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.unsubscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be publish event to realtime', () => {
      LauncherInstance.publishToPubSubEvent('test', 'test');

      expect(PUB_SUB_MOCK.publish).toHaveBeenCalledWith('test', 'test');
    });

    test('should be fetch history', async () => {
      LauncherInstance.fetchPubSubHistory('test');

      expect(PUB_SUB_MOCK.fetchHistory).toHaveBeenCalledWith('test');
    });
  });

  describe('Components', () => {
    test('should be add component', () => {
      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).toHaveBeenCalledWith({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: ABLY_REALTIME_MOCK,
      });
    });

    test('should be remove component', () => {
      LauncherInstance.removeComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.detach).toHaveBeenCalled();
    });
  });

  describe('Participant Events', () => {
    test('should publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.LIST_UPDATED, callback);

      LauncherInstance['onParticipantListUpdate']({
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
      });

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.LIST_UPDATED, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.LOCAL_UPDATED event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.JOINED, callback);

      LauncherInstance['onParticipantListUpdate']({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          clientId: 'client1',
          action: 'present',
          connectionId: 'connection1',
          encoding: 'h264',
          id: 'unit-test-participant-ably-id',
          timestamp: new Date().getTime(),
          data: {
            id: MOCK_LOCAL_PARTICIPANT.id,
          },
        },
      });

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).toHaveBeenCalledTimes(2);
    });

    test('should publish ParticipantEvent.LEFT event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.LEFT, callback);

      const participant = {
        clientId: 'client1',
        action: 'absent',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: 'participant1',
        },
      };

      LauncherInstance['onParticipantListUpdate']({
        [participant.data.participantId]: participant as AblyParticipant,
      });
      LauncherInstance['onParticipantLeave'](participant as AblyParticipant);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).toHaveBeenCalled();
    });

    test('should skip and not publish ParticipantEvent.LEFT event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.LEFT, callback);

      const participant = {
        clientId: 'client1',
        action: 'absent',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: 'participant1',
        },
      };

      LauncherInstance['onParticipantLeave'](participant as AblyParticipant);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).not.toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.LOCAL_LEFT event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.LEFT, callback);

      const participant = {
        clientId: 'client1',
        action: 'absent',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
          participantId: MOCK_LOCAL_PARTICIPANT.id,
        },
      };

      LauncherInstance['onParticipantListUpdate']({
        [MOCK_LOCAL_PARTICIPANT.id]: participant as AblyParticipant,
      });
      LauncherInstance['onParticipantLeave'](participant as AblyParticipant);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.JOINED, callback);

      const participant = {
        clientId: 'client1',
        action: 'absent',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
          participantId: MOCK_LOCAL_PARTICIPANT.id,
        },
      };

      LauncherInstance['onParticipantListUpdate']({
        [MOCK_LOCAL_PARTICIPANT.id]: participant as AblyParticipant,
      });
      LauncherInstance['onParticipantJoined'](participant as AblyParticipant);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).toHaveBeenCalled();
    });

    test('should skip and publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(ParticipantEvent.JOINED, callback);

      const participant = {
        clientId: 'client1',
        action: 'absent',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
          participantId: MOCK_LOCAL_PARTICIPANT.id,
        },
      };

      LauncherInstance['onParticipantJoined'](participant as AblyParticipant);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(PUB_SUB_MOCK.publishEventToClient).not.toHaveBeenCalled();
    });

    test("should not publish RealtimeEvent.REALTIME_HOST_CHANGE if my participant isn't host", () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(RealtimeEvent.REALTIME_HOST_CHANGE, callback);

      LauncherInstance['onHostParticipantDidChange']({
        newHostParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        oldHostParticipantId: 'test',
      });

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_HOST_CHANGE,
        callback,
      );
      expect(PUB_SUB_MOCK.publishEventToClient).not.toHaveBeenCalled();
    });

    test('should publish RealtimeEvent.REALTIME_HOST_CHANGE', () => {
      const callback = jest.fn();
      LauncherInstance.subscribeToPubSubEvent(RealtimeEvent.REALTIME_HOST_CHANGE, callback);
      LauncherInstance['participants'] = [MOCK_LOCAL_PARTICIPANT];

      LauncherInstance['onHostParticipantDidChange']({
        newHostParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        oldHostParticipantId: 'test',
      });

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_HOST_CHANGE,
        callback,
      );

      expect(PUB_SUB_MOCK.publish).toHaveBeenCalled();
    });
  });
});

describe('Launcher Facade', () => {
  let LauncherFacadeInstance: LauncherFacade;

  beforeEach(() => {
    jest.clearAllMocks();
    LauncherFacadeInstance = Facade(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Facade).toBeDefined();
  });

  test('should be return a facade with the correct methods', () => {
    expect(LauncherFacadeInstance).toHaveProperty('subscribe');
    expect(LauncherFacadeInstance).toHaveProperty('unsubscribe');
    expect(LauncherFacadeInstance).toHaveProperty('publish');
    expect(LauncherFacadeInstance).toHaveProperty('fetchHistory');
    expect(LauncherFacadeInstance).toHaveProperty('addComponent');
    expect(LauncherFacadeInstance).toHaveProperty('removeComponent');
  });
});
