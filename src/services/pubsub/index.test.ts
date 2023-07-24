import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { AblyRealtimeService } from '../realtime';

import { PubSub } from '.';

jest.mock('../realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => ABLY_REALTIME_MOCK),
}));

describe('PubSub', () => {
  let PubSubInstance: PubSub;

  beforeEach(() => {
    jest.clearAllMocks();
    const realtime = new AblyRealtimeService('apiUrl', 'ablyKey');

    PubSubInstance = new PubSub(realtime);
  });

  test('should be defined', () => {
    expect(PubSub).toBeDefined();
  });

  test('should be subscribe to event', () => {
    const callback = jest.fn();

    PubSubInstance.subscribe('test', callback);

    expect(PubSubInstance['observers'].get('test')).toBeDefined();
  });

  test('should be unsubscribe from event', () => {
    const callback = jest.fn();

    PubSubInstance.subscribe('test', callback);
    PubSubInstance.unsubscribe('test', callback);

    expect(PubSubInstance['observers'].get('test')).not.toBeDefined();
  });

  test('should be skip unsubscribe event not exists', () => {
    const callback = jest.fn();

    PubSubInstance.unsubscribe('test', callback);

    expect(PubSubInstance['observers'].get('test')).not.toBeDefined();
  });

  test('should be publish event to realtime', () => {
    PubSubInstance.publish('test', 'test');

    expect(PubSubInstance['realtime'].setSyncProperty).toHaveBeenCalledWith('test', 'test');
  });

  test('should be publish event to client', () => {
    const callback = jest.fn();

    PubSubInstance.subscribe('test', callback);
    PubSubInstance.publish('test', 'test');
    PubSubInstance['onSyncPropertiesChange']({ test: 'test' });

    expect(callback).toHaveBeenCalledWith('test');
  });

  test('should be skip publish event to client if event not exists', () => {
    const callback = jest.fn();

    PubSubInstance.subscribe('test', callback);
    PubSubInstance.publish('test', 'test');
    PubSubInstance['onSyncPropertiesChange']({ test1: 'test' });

    expect(callback).not.toHaveBeenCalled();
  });
});
