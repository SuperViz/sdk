import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { ParticipantType } from '../../common/types/participant.types';
import { BaseComponent } from '../../components/base';
import { ComponentNames } from '../../components/types';
import LimitsService from '../../services/limits';
import { AblyParticipant } from '../../services/realtime/ably/types';

import { LauncherFacade, LauncherOptions } from './types';

import Facade, { Launcher } from '.';

jest.mock('../../services/limits');

jest.mock('../../services/realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => ABLY_REALTIME_MOCK),
}));

jest.mock('../../services/event-bus', () => ({
  EventBus: jest.fn().mockImplementation(() => EVENT_BUS_MOCK),
}));

jest.mock('../../services/api');

const MOCK_COMPONENT = {
  name: ComponentNames.VIDEO_CONFERENCE,
  attach: jest.fn(),
  detach: jest.fn(),
} as unknown as BaseComponent;

const DEFAULT_INITIALIZATION_MOCK: LauncherOptions = {
  participant: MOCK_LOCAL_PARTICIPANT as unknown as LauncherOptions['participant'],
  group: MOCK_GROUP,
};

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

  describe('Components', () => {
    test('should be add component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).toHaveBeenCalledWith({
        localParticipant: { ...MOCK_LOCAL_PARTICIPANT, type: ParticipantType.GUEST },
        realtime: ABLY_REALTIME_MOCK,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });
      expect(ABLY_REALTIME_MOCK.updateMyProperties).toHaveBeenCalledWith({
        activeComponents: [MOCK_COMPONENT.name],
      });
    });

    test('should not add Connection component if Presence not added', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      const mockConnection = {
        ...MOCK_COMPONENT,
        name: ComponentNames.WHO_IS_ONLINE,
      } as unknown as BaseComponent;

      mockConnection.attach = jest.fn();

      LauncherInstance.addComponent(mockConnection);

      expect(mockConnection.attach).not.toHaveBeenCalled();
      expect(LauncherInstance['activeComponents']).not.toEqual([mockConnection.name]);
    });

    test('should add Connection component if Presence added', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      const mockPresence = {
        ...MOCK_COMPONENT,
        name: ComponentNames.PRESENCE,
      } as unknown as BaseComponent;

      LauncherInstance.addComponent(mockPresence);

      expect(mockPresence.attach).toHaveBeenCalled();
      expect(LauncherInstance['activeComponents']).toEqual([mockPresence.name]);

      const mockConnection = {
        ...MOCK_COMPONENT,
        name: ComponentNames.WHO_IS_ONLINE,
      } as unknown as BaseComponent;

      mockConnection.attach = jest.fn();

      LauncherInstance.addComponent(mockConnection);

      expect(mockConnection.attach).toHaveBeenCalled();
      expect(LauncherInstance['activeComponents']).toEqual([
        mockPresence.name,
        mockConnection.name,
      ]);
    });

    test('should show a console message if limit reached and not add component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(false);

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).not.toBeCalled();
    });

    test('should be remove component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      LauncherInstance.addComponent(MOCK_COMPONENT);
      LauncherInstance.removeComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.detach).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.updateMyProperties).toHaveBeenCalledWith({
        activeComponents: [],
      });
    });

    test('should show a console message if component is not initialized yet', () => {
      LauncherInstance.removeComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.detach).not.toBeCalled();
    });

    test('should show a console message if component is already active', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      LauncherInstance.addComponent(MOCK_COMPONENT);
      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).toHaveBeenCalledTimes(1);
    });
  });

  describe('Participant Events', () => {
    test('should publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();

      LauncherInstance.subscribe(ParticipantEvent.LIST_UPDATED, callback);

      LauncherInstance['onParticipantListUpdate']({
        participant1: {
          extras: null,
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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.LIST_UPDATED, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.LOCAL_UPDATED event', () => {
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();

      const callback = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.JOINED, callback);

      LauncherInstance['onParticipantListUpdate']({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          extras: null,
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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalledTimes(2);
    });

    test('should publish ParticipantEvent.LEFT event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.LEFT, callback);

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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalled();
    });

    test('should skip and not publish ParticipantEvent.LEFT event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.LEFT, callback);

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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(LauncherInstance['publish']).not.toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.LOCAL_LEFT event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.LEFT, callback);

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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalled();
    });

    test('should publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.JOINED, callback);

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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalled();
    });

    test('should skip and publish ParticipantEvent.JOINED event', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.JOINED, callback);

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

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(LauncherInstance['publish']).not.toHaveBeenCalled();
    });

    test("should not publish RealtimeEvent.REALTIME_HOST_CHANGE if my participant isn't host", () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      // @ts-ignore
      ABLY_REALTIME_MOCK.isLocalParticipantHost = false;

      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(RealtimeEvent.REALTIME_HOST_CHANGE, callback);

      LauncherInstance['onHostParticipantDidChange']({
        newHostParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        oldHostParticipantId: 'test',
      });

      expect(spy).toHaveBeenCalledWith(RealtimeEvent.REALTIME_HOST_CHANGE, callback);
      expect(ABLY_REALTIME_MOCK.setSyncProperty).not.toHaveBeenCalled();
    });

    test('should publish RealtimeEvent.REALTIME_HOST_CHANGE', () => {
      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      // @ts-ignore
      ABLY_REALTIME_MOCK.isLocalParticipantHost = true;

      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(RealtimeEvent.REALTIME_HOST_CHANGE, callback);
      LauncherInstance['participants'] = [MOCK_LOCAL_PARTICIPANT];

      LauncherInstance['onHostParticipantDidChange']({
        newHostParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        oldHostParticipantId: 'test',
      });

      expect(spy).toHaveBeenCalledWith(RealtimeEvent.REALTIME_HOST_CHANGE, callback);

      expect(ABLY_REALTIME_MOCK.setSyncProperty).toHaveBeenCalled();
    });

    test('should publish REALTIME_HOST_AVAILABLE when host is available', () => {
      LauncherInstance['publish'] = jest.fn();

      LauncherInstance['onHostAvailabilityChange'](true);
      expect(LauncherInstance['publish']).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_HOST_AVAILABLE,
      );
    });

    test('should publish REALTIME_NO_HOST_AVAILABLE when host is not available', () => {
      LauncherInstance['publish'] = jest.fn();

      LauncherInstance['onHostAvailabilityChange'](false);
      expect(LauncherInstance['publish']).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_NO_HOST_AVAILABLE,
      );
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
    expect(LauncherFacadeInstance).toHaveProperty('addComponent');
    expect(LauncherFacadeInstance).toHaveProperty('removeComponent');
  });
});
