import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';

import { InicializatorFacade, InicializatorOptions } from './types';

import Facade, { Inicializator } from '.';

jest.mock('../../services/realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => ABLY_REALTIME_MOCK),
}));

const DEFAULT_INITIALIZATION_MOCK: InicializatorOptions = {
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

describe('Inicializator', () => {
  let InicializatorInstance: Inicializator;

  beforeEach(() => {
    jest.clearAllMocks();

    InicializatorInstance = new Inicializator(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Inicializator).toBeDefined();
  });

  test('should be inicialize realtime service', () => {
    expect(ABLY_REALTIME_MOCK.start).toHaveBeenCalled();
  });

  describe('PubSub', () => {
    test('should be subscribe to event', () => {
      const callback = jest.fn();

      InicializatorInstance.subscribeToPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be unsubscribe from event', () => {
      const callback = jest.fn();

      InicializatorInstance.unsubscribeFromPubSubEvent('test', callback);

      expect(PUB_SUB_MOCK.unsubscribe).toHaveBeenCalledWith('test', callback);
    });

    test('should be publish event to realtime', () => {
      InicializatorInstance.publishToPubSubEvent('test', 'test');

      expect(PUB_SUB_MOCK.publish).toHaveBeenCalledWith('test', 'test');
    });

    test('should be fetch history', async () => {
      InicializatorInstance.fetchPubSubHistory('test');

      expect(PUB_SUB_MOCK.fetchHistory).toHaveBeenCalledWith('test');
    });
  });
});

describe('Inicializator Facade', () => {
  let InicializatorFacadeInstance: InicializatorFacade;

  beforeEach(() => {
    jest.clearAllMocks();
    InicializatorFacadeInstance = Facade(DEFAULT_INITIALIZATION_MOCK);
  });

  test('should be defined', () => {
    expect(Facade).toBeDefined();
  });

  test('should be return a facade with the correct methods', () => {
    expect(InicializatorFacadeInstance).toHaveProperty('subscribe');
    expect(InicializatorFacadeInstance).toHaveProperty('unsubscribe');
    expect(InicializatorFacadeInstance).toHaveProperty('publish');
  });
});
