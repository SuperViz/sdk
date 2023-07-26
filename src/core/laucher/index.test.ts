import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../../components/base';

import { LaucherFacade, LaucherOptions } from './types';

import Facade, { Laucher } from '.';

jest.mock('../../services/realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => ABLY_REALTIME_MOCK),
}));

const MOCK_COMPONENT = {
  attach: jest.fn(),
  detach: jest.fn(),
} as unknown as BaseComponent;

const DEFAULT_INITIALIZATION_MOCK: LaucherOptions = {
  apiKey: 'unit-test-api-key',
  ablyKey: 'unit-test-ably-key',
  conferenceLayerUrl: 'https://unit-test-conference-layer-url.com',
  apiUrl: 'https://unit-test-apiurl.com',
  roomId: 'unit-test-room-id',
  participant: MOCK_LOCAL_PARTICIPANT,
  group: MOCK_GROUP,
};

const PUB_SUB_MOCK = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  publish: jest.fn(),
  fetchHistory: jest.fn(),
};

jest.mock('../../services/pubsub', () => ({
  PubSub: jest.fn().mockImplementation(() => PUB_SUB_MOCK),
}));

describe('Laucher', () => {
  let LaucherInstance: Laucher;

  beforeEach(() => {
    jest.clearAllMocks();

    LaucherInstance = new Laucher(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Laucher).toBeDefined();
  });

  test('should be inicialize realtime service', () => {
    expect(ABLY_REALTIME_MOCK.start).toHaveBeenCalled();
  });

  describe('PubSub', () => {
    test('should be subscribe to event', () => {
      const callback = jest.fn();

      LaucherInstance.subscribeToPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be unsubscribe from event', () => {
      const callback = jest.fn();

      LaucherInstance.unsubscribeFromPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.unsubscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be publish event to realtime', () => {
      LaucherInstance.publishToPubSubEvent('test', 'test');

      expect(PUB_SUB_MOCK.publish).toHaveBeenCalledWith('test', 'test');
    });

    test('should be fetch history', async () => {
      LaucherInstance.fetchPubSubHistory('test');

      expect(PUB_SUB_MOCK.fetchHistory).toHaveBeenCalledWith('test');
    });
  });

  describe('Components', () => {
    test('should be add component', () => {
      LaucherInstance.addComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.attach).toHaveBeenCalledWith({
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        realtime: ABLY_REALTIME_MOCK,
      });
    });

    test('should be remove component', () => {
      LaucherInstance.removeComponent(MOCK_COMPONENT);

      expect(MOCK_COMPONENT.detach).toHaveBeenCalled();
    });
  });
});

describe('Laucher Facade', () => {
  let LaucherFacadeInstance: LaucherFacade;

  beforeEach(() => {
    jest.clearAllMocks();
    LaucherFacadeInstance = Facade(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Facade).toBeDefined();
  });

  test('should be return a facade with the correct methods', () => {
    expect(LaucherFacadeInstance).toHaveProperty('subscribe');
    expect(LaucherFacadeInstance).toHaveProperty('unsubscribe');
    expect(LaucherFacadeInstance).toHaveProperty('publish');
    expect(LaucherFacadeInstance).toHaveProperty('fetchHistory');
    expect(LaucherFacadeInstance).toHaveProperty('addComponent');
    expect(LaucherFacadeInstance).toHaveProperty('removeComponent');
  });
});
