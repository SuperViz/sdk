import { MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { MOCK_REALTIME_SERVICE } from '../../../__mocks__/realtime.mock';
import { Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { AblyRealtimeService } from '../../services/realtime';

import { BaseComponent } from '.';

class DummyComponent extends BaseComponent {
  protected logger: Logger;
  protected name: string;

  constructor() {
    super();

    this.name = 'DummyComponent';
    this.logger = new Logger('@superviz/sdk/dummy-component');
  }

  protected destroy(): void {
    this.logger.log('destroyed');
  }

  protected start(): void {
    this.logger.log('started');
  }
}

describe('BaseComponent', () => {
  let DummyComponentInstance: DummyComponent;

  beforeEach(() => {
    jest.clearAllMocks();
    DummyComponentInstance = new DummyComponent();
  });

  test('should be defined', () => {
    expect(BaseComponent).toBeDefined();
  });

  describe('attach', () => {
    test('should attach the component with success', () => {
      DummyComponentInstance['start'] = jest.fn();
      expect(DummyComponentInstance.attach).toBeDefined();

      DummyComponentInstance.attach({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: MOCK_REALTIME_SERVICE,
      });

      expect(DummyComponentInstance['localParticipant']).toEqual(MOCK_LOCAL_PARTICIPANT);
      expect(DummyComponentInstance['realtime']).toEqual(MOCK_REALTIME_SERVICE);
      expect(DummyComponentInstance['isAttached']).toBeTruthy();
      expect(DummyComponentInstance['start']).toBeCalled();
    });

    test('should throw error if realtime or localParticipant are not provided', () => {
      expect(DummyComponentInstance.attach).toBeDefined();

      expect(() => {
        DummyComponentInstance.attach({
          localParticipant: null as unknown as Participant,
          realtime: null as unknown as AblyRealtimeService,
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
        realtime: MOCK_REALTIME_SERVICE,
      });

      DummyComponentInstance.detach();

      expect(DummyComponentInstance['localParticipant']).toBeUndefined();
      expect(DummyComponentInstance['realtime']).toBeUndefined();
      expect(DummyComponentInstance['isAttached']).toBeFalsy();
      expect(DummyComponentInstance['destroy']).toBeCalled();
    });

    test('should not detach the component if it is not attached', () => {
      DummyComponentInstance['logger'].log = jest.fn();
      expect(DummyComponentInstance.detach).toBeDefined();

      DummyComponentInstance.detach();

      expect(DummyComponentInstance['logger'].log).toBeCalled();
    });
  });
});
