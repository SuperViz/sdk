import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';

import { Realtime } from '.';

const PUB_SUB_MOCK = {
  destroy: jest.fn(),
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  publish: jest.fn(),
  fetchHistory: jest.fn(),
  publishEventToClient: jest.fn(),
};

jest.mock('../../services/pubsub', () => ({
  PubSub: jest.fn().mockImplementation(() => PUB_SUB_MOCK),
}));

jest.useFakeTimers();

describe('realtime component', () => {
  let RealtimeComponentInstance: Realtime;

  beforeEach(() => {
    jest.clearAllMocks();

    RealtimeComponentInstance = new Realtime();
    RealtimeComponentInstance.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });
  });

  test('should be subscribe to event', () => {
    const callback = jest.fn();

    RealtimeComponentInstance.subscribe('test', callback);

    expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith('test', callback);
  });

  test('should be unsubscribe from event', () => {
    const callback = jest.fn();

    RealtimeComponentInstance.unsubscribe('test', callback);

    expect(PUB_SUB_MOCK.unsubscribe).toHaveBeenCalledWith('test', callback);
  });

  test('should be publish event to realtime', () => {
    RealtimeComponentInstance.publish('test', 'test');

    expect(PUB_SUB_MOCK.publish).toHaveBeenCalledWith('test', 'test');
  });

  test('should be fetch history', async () => {
    RealtimeComponentInstance.fetchHistory('test');

    expect(PUB_SUB_MOCK.fetchHistory).toHaveBeenCalledWith('test');
  });

  test('should destroy pubsub when destroy realtime component', () => {
    RealtimeComponentInstance.detach();

    expect(PUB_SUB_MOCK.destroy).toHaveBeenCalled();
  });

  test('when realtime is not joined room should store callback to subscribe', () => {
    const callback = jest.fn();
    const RealtimeComponentInstance = new Realtime();

    RealtimeComponentInstance.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: false }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    RealtimeComponentInstance.subscribe('test', callback);

    expect(PUB_SUB_MOCK.subscribe).not.toHaveBeenCalled();
    expect(RealtimeComponentInstance['callbacksToSubscribeWhenJoined']).toEqual([
      { event: 'test', callback },
    ]);
  });

  test('should subscribe to events when joined room', async () => {
    const callback = jest.fn();
    const RealtimeComponentInstance = new Realtime();

    RealtimeComponentInstance.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: false }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    RealtimeComponentInstance.subscribe('test', callback);

    expect(PUB_SUB_MOCK.subscribe).not.toHaveBeenCalled();

    RealtimeComponentInstance['realtime'] = Object.assign({}, ABLY_REALTIME_MOCK, {
      isJoinedRoom: true,
    });

    // mock start call
    RealtimeComponentInstance['start']();

    expect(PUB_SUB_MOCK.subscribe).toHaveBeenCalledWith('test', callback);
  });
});
