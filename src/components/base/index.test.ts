import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { Configuration } from '../../services/config/types';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';
import { ComponentNames } from '../types';

import { BaseComponent } from '.';

class DummyComponent extends BaseComponent {
  protected logger: Logger;
  public name: ComponentNames;

  constructor() {
    super();

    this.name = ComponentNames.VIDEO_CONFERENCE;
    this.logger = new Logger('@superviz/sdk/dummy-component');
  }

  protected destroy(): void {
    this.logger.log('destroyed');
  }

  protected start(): void {
    this.logger.log('started');
  }
}

const REALTIME_MOCK = Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true });

jest.mock('../../common/utils/observer', () => ({
  Observer: jest.fn().mockImplementation(() => MOCK_OBSERVER_HELPER),
}));

jest.useFakeTimers();
global.fetch = jest.fn();

describe('BaseComponent', () => {
  let DummyComponentInstance: DummyComponent;

  beforeEach(() => {
    console.error = jest.fn();

    jest.clearAllMocks();
    DummyComponentInstance = new DummyComponent();
  });

  test('should be defined', () => {
    expect(BaseComponent).toBeDefined();
  });

  describe('attach', () => {
    test('should not call start if realtime is not joined room', () => {
      DummyComponentInstance.attach({
        realtime: ABLY_REALTIME_MOCK,
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      DummyComponentInstance['start'] = jest.fn(DummyComponentInstance['start']);
      DummyComponentInstance['attach'] = jest.fn(DummyComponentInstance['attach']);
      DummyComponentInstance['logger'].log = jest.fn();

      expect(DummyComponentInstance['start']).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);

      expect(DummyComponentInstance['attach']).toHaveBeenCalledTimes(1);
    });

    test('should not start if domain is not whitelisted', () => {
      const ablyMock = { ...ABLY_REALTIME_MOCK };

      ablyMock['isDomainWhitelisted'] = false;

      DummyComponentInstance.attach({
        realtime: ablyMock as AblyRealtimeService,
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      DummyComponentInstance['start'] = jest.fn();

      jest.advanceTimersByTime(1000);

      expect(DummyComponentInstance['start']).not.toHaveBeenCalled();
    });

    test('should attach the component with success', () => {
      DummyComponentInstance['start'] = jest.fn();
      expect(DummyComponentInstance.attach).toBeDefined();

      DummyComponentInstance.attach({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: REALTIME_MOCK,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      expect(DummyComponentInstance['localParticipant']).toEqual(MOCK_LOCAL_PARTICIPANT);
      expect(DummyComponentInstance['realtime']).toEqual(REALTIME_MOCK);
      expect(DummyComponentInstance['isAttached']).toBeTruthy();
      expect(DummyComponentInstance['start']).toBeCalled();
    });

    test('should throw error if realtime or localParticipant are not provided', () => {
      expect(DummyComponentInstance.attach).toBeDefined();

      expect(() => {
        DummyComponentInstance.attach({
          localParticipant: null as unknown as Participant,
          realtime: null as unknown as AblyRealtimeService,
          group: null as unknown as Group,
          config: null as unknown as Configuration,
          eventBus: null as unknown as EventBus,
        });
      }).toThrowError();
    });
  });

  describe('detach', () => {
    test('should detach the component with success', () => {
      DummyComponentInstance['destroy'] = jest.fn();
      expect(DummyComponentInstance.detach).toBeDefined();

      DummyComponentInstance.attach({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: REALTIME_MOCK,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      DummyComponentInstance.detach();

      expect(DummyComponentInstance['localParticipant']).toBeUndefined();
      expect(DummyComponentInstance['realtime']).toBeUndefined();
      expect(DummyComponentInstance['isAttached']).toBeFalsy();
      expect(DummyComponentInstance['destroy']).toBeCalled();
    });

    test('should unsubscribe from all events', () => {
      const callback = jest.fn();

      DummyComponentInstance['destroy'] = jest.fn();

      DummyComponentInstance.attach({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: REALTIME_MOCK,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      DummyComponentInstance.subscribe('test', callback);

      expect(DummyComponentInstance['observers']['test']).toBeDefined();

      const spyDestroy = jest.spyOn(DummyComponentInstance['observers']['test'], 'destroy');
      const spyReset = jest.spyOn(DummyComponentInstance['observers']['test'], 'reset');

      DummyComponentInstance.detach();

      expect(spyDestroy).toBeCalled();
      expect(spyReset).toBeCalled();
      expect(DummyComponentInstance['observers']).toBeUndefined();
    });

    test('should not detach the component if it is not attached', () => {
      DummyComponentInstance['logger'].log = jest.fn();
      expect(DummyComponentInstance.detach).toBeDefined();

      DummyComponentInstance.detach();

      expect(DummyComponentInstance['logger'].log).toBeCalled();
    });
  });
});
