import { PresenceEvent } from '@superviz/socket-client';

import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';
import { BaseComponent } from '../../components/base';
import { DefaultAttachComponentOptions } from '../../components/base/types';
import { ComponentNames } from '../../components/types';
import { IOC } from '../../services/io';
import LimitsService from '../../services/limits';
import { useGlobalStore } from '../../services/stores';

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
    console.warn = jest.fn();
    console.error = jest.fn();
    console.log = jest.spyOn(console, 'log').mockImplementation(console.log) as any;

    jest.clearAllMocks();
    jest.restoreAllMocks();

    const { localParticipant } = useGlobalStore();
    localParticipant.value = MOCK_LOCAL_PARTICIPANT;

    LauncherInstance = new Launcher(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Launcher).toBeDefined();
  });

  test('should initialize realtime service', () => {
    expect(ABLY_REALTIME_MOCK.start).toHaveBeenCalled();
  });

  describe('Components', () => {
    beforeEach(() => {
      LauncherInstance['realtime'].hasJoinedRoom = true;
    });

    test('should not add component if realtime is not joined room', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);
      const { hasJoinedRoom } = useStore(StoreType.GLOBAL);
      hasJoinedRoom.publish(false);

      const spy = jest.spyOn(LauncherInstance, 'addComponent');

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).not.toBeCalled();
      expect(LauncherInstance['activeComponentsInstances'].length).toBe(0);
      expect(LauncherInstance['componentsToAttachAfterJoin'].length).toBe(1);

      LauncherInstance['realtime'].hasJoinedRoom = true;
      LauncherInstance['onParticipantJoined']({
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
        },
      } as unknown as PresenceEvent<Participant>);

      expect(spy).toHaveBeenCalledWith(MOCK_COMPONENT);
    });

    test('should add component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).toHaveBeenCalledWith(
        expect.objectContaining({
          ioc: expect.any(IOC),
          realtime: ABLY_REALTIME_MOCK,
          config: MOCK_CONFIG,
          eventBus: EVENT_BUS_MOCK,
          useStore,
        } as DefaultAttachComponentOptions),
      );

      const { localParticipant } = LauncherInstance['useStore'](StoreType.GLOBAL);

      expect(localParticipant.value.activeComponents?.length).toBe(1);
      expect(localParticipant.value.activeComponents![0]).toBe(MOCK_COMPONENT.name);
    });

    test('should show a console message if limit reached and not add component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(false);

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).not.toBeCalled();
    });

    test('should remove component', () => {
      LimitsService.checkComponentLimit = jest.fn().mockReturnValue(true);

      LauncherInstance.addComponent(MOCK_COMPONENT);
      LauncherInstance.removeComponent(MOCK_COMPONENT);

      const { localParticipant } = LauncherInstance['useStore'](StoreType.GLOBAL);

      expect(MOCK_COMPONENT.detach).toHaveBeenCalled();
      expect(localParticipant.value.activeComponents?.length).toBe(0);
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

    test('should show a console message if the launcher is destroyed', () => {
      LauncherInstance.destroy();

      LauncherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).not.toBeCalled();
    });
  });

  describe('Participant Events', () => {
    test('should publish ParticipantEvent.JOINED event', () => {
      const { participants } = useStore(StoreType.GLOBAL);
      participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: { ...MOCK_LOCAL_PARTICIPANT },
      });

      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();

      const callback = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.JOINED, callback);

      LauncherInstance['onParticipantUpdatedIOC']({
        connectionId: 'connection1',
        data: {
          ...MOCK_LOCAL_PARTICIPANT,
        },
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        timestamp: Date.now(),
      });

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.JOINED, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalledTimes(2);
    });

    test('should publish ParticipantEvent.LEFT event', () => {
      const { participants } = useStore(StoreType.GLOBAL);
      participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: { ...MOCK_LOCAL_PARTICIPANT },
      });

      const callback = jest.fn();
      const spy = jest.spyOn(LauncherInstance, 'subscribe');
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance.subscribe(ParticipantEvent.LEFT, callback);

      LauncherInstance['onParticipantLeaveIOC']({
        connectionId: 'connection1',
        data: MOCK_LOCAL_PARTICIPANT,
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        timestamp: Date.now(),
      });

      expect(spy).toHaveBeenCalledWith(ParticipantEvent.LEFT, callback);
      expect(LauncherInstance['publish']).toHaveBeenCalled();
    });

    test('should update activeComponentsInstances when participant list is updated', () => {
      LauncherInstance.addComponent(MOCK_COMPONENT);

      LauncherInstance['onParticipantListUpdate']({
        participant1: {
          extras: null,
          clientId: MOCK_LOCAL_PARTICIPANT.id,
          action: 'present',
          connectionId: 'connection1',
          encoding: 'h264',
          id: 'unit-test-participant-ably-id',
          timestamp: new Date().getTime(),
          data: {
            participantId: MOCK_LOCAL_PARTICIPANT.id,
            activeComponents: [MOCK_COMPONENT.name],
          },
        },
      });

      expect(LauncherInstance['activeComponentsInstances'].length).toBe(1);
    });

    test('should remove component when participant is not usign it anymore', () => {
      LauncherInstance.addComponent(MOCK_COMPONENT);

      LauncherInstance['onParticipantUpdatedIOC']({
        connectionId: 'connection1',
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        data: {
          ...MOCK_LOCAL_PARTICIPANT,
        },
        timestamp: Date.now(),
      });

      expect(LauncherInstance['activeComponentsInstances'].length).toBe(1);

      LauncherInstance.removeComponent(MOCK_COMPONENT);

      LauncherInstance['onParticipantUpdatedIOC']({
        connectionId: 'connection1',
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        data: {
          ...MOCK_LOCAL_PARTICIPANT,
        },
        timestamp: Date.now(),
      });

      expect(LauncherInstance['activeComponentsInstances'].length).toBe(0);
    });

    test('should publish REALTIME_SAME_ACCOUNT_ERROR, when same account callback is called', () => {
      LauncherInstance['publish'] = jest.fn();

      LauncherInstance['onSameAccount']();

      expect(LauncherInstance['publish']).toHaveBeenCalledWith(ParticipantEvent.SAME_ACCOUNT_ERROR);
    });
  });

  describe('destroy', () => {
    test('should destroy the instance if domain is not whitelisted', () => {
      console.error = jest.fn();
      jest.spyOn(LauncherInstance, 'destroy');

      LauncherInstance['onAuthentication'](true);
      expect(LauncherInstance.destroy).not.toHaveBeenCalled();

      LauncherInstance['onAuthentication'](false);
      expect(LauncherInstance.destroy).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(
        `Room can't be initialized because this website's domain is not whitelisted. If you are the developer, please add your domain in https://dashboard.superviz.com/developer`,
      );
    });

    test('should destroy the instance', () => {
      LauncherInstance.destroy();

      expect(ABLY_REALTIME_MOCK.leave).toHaveBeenCalled();
      expect(EVENT_BUS_MOCK.destroy).toHaveBeenCalled();
    });

    test('should unsubscribe from realtime events', () => {
      LauncherInstance.destroy();

      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
    });

    test('should remove all components', () => {
      LauncherInstance.addComponent(MOCK_COMPONENT);
      LauncherInstance.destroy();

      expect(MOCK_COMPONENT.detach).toHaveBeenCalled();
    });

    test('should destroy the instance when same account callback is called', () => {
      LauncherInstance['publish'] = jest.fn();
      LauncherInstance['destroy'] = jest.fn();

      LauncherInstance['onSameAccount']();

      expect(LauncherInstance['publish']).toHaveBeenCalledWith(ParticipantEvent.SAME_ACCOUNT_ERROR);
      expect(LauncherInstance['destroy']).toHaveBeenCalled();
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
    expect(LauncherFacadeInstance).toHaveProperty('destroy');
    expect(LauncherFacadeInstance).toHaveProperty('subscribe');
    expect(LauncherFacadeInstance).toHaveProperty('unsubscribe');
    expect(LauncherFacadeInstance).toHaveProperty('addComponent');
    expect(LauncherFacadeInstance).toHaveProperty('removeComponent');
  });

  test('should return the same instance if already initialized', () => {
    const instance = Facade(DEFAULT_INITIALIZATION_MOCK);
    const instance2 = Facade(DEFAULT_INITIALIZATION_MOCK);

    expect(instance).toStrictEqual(instance2);
  });

  test('should return different instances if it`s destroyed', () => {
    const instance = Facade(DEFAULT_INITIALIZATION_MOCK);
    instance.destroy();
    const instance2 = Facade(DEFAULT_INITIALIZATION_MOCK);

    expect(instance).not.toStrictEqual(instance2);
  });
});
