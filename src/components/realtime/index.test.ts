import type * as Socket from '@superviz/socket-client';

import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { useStore } from '../../common/utils/use-store';
import { IOC } from '../../services/io';

import { RealtimeComponentState } from './types';

import { Realtime } from '.';

jest.mock('lodash/throttle', () => jest.fn((fn) => fn));
jest.useFakeTimers();

describe('realtime component', () => {
  let RealtimeComponentInstance: Realtime;

  beforeEach(() => {
    jest.clearAllMocks();

    console.error = jest.fn();
    console.debug = jest.fn();

    RealtimeComponentInstance = new Realtime();
    RealtimeComponentInstance.attach({
      ioc: new IOC(MOCK_LOCAL_PARTICIPANT),
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
      useStore,
    });

    RealtimeComponentInstance['state'] = RealtimeComponentState.STARTED;
  });

  afterEach(() => {
    jest.clearAllMocks();
    RealtimeComponentInstance.detach();
  });

  test('should create a new instance of Realtime', () => {
    expect(RealtimeComponentInstance).toBeInstanceOf(Realtime);
  });

  describe('start', () => {
    test('should subscribe to realtiem events', () => {
      const spy = jest.spyOn(RealtimeComponentInstance, 'subscribeToRealtimeEvents' as any);
      RealtimeComponentInstance['start']();

      expect(spy).toHaveBeenCalled();
    });

    test('should subscribe to callbacks when joined', () => {
      const spy = jest.spyOn(RealtimeComponentInstance['room'], 'on' as any);
      RealtimeComponentInstance['start']();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    test('should disconnect from the room', () => {
      const spy = jest.spyOn(RealtimeComponentInstance['room'], 'disconnect' as any);
      RealtimeComponentInstance['destroy']();

      expect(spy).toHaveBeenCalled();
    });

    test('should change state to stopped', () => {
      RealtimeComponentInstance['destroy']();

      expect(RealtimeComponentInstance['state']).toBe('STOPPED');
    });
  });

  describe('publish', () => {
    test('should log an error when trying to publish an event before start', () => {
      RealtimeComponentInstance['state'] = RealtimeComponentState.STOPPED;

      const spy = jest.spyOn(RealtimeComponentInstance['logger'], 'log' as any);
      RealtimeComponentInstance.publish('test');

      expect(spy).toHaveBeenCalled();
    });

    test('should publish an event', () => {
      const spy = jest.spyOn(RealtimeComponentInstance['room'], 'emit' as any);
      RealtimeComponentInstance['start']();
      RealtimeComponentInstance.publish('test');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('subscribe', () => {
    test('should subscribe to an event', () => {
      RealtimeComponentInstance['observers']['test'] = MOCK_OBSERVER_HELPER;
      const spy = jest.spyOn(RealtimeComponentInstance['observers']['test'], 'subscribe' as any);
      RealtimeComponentInstance['start']();
      RealtimeComponentInstance.subscribe('test', () => {});

      expect(spy).toHaveBeenCalled();
    });

    test('should subscribe to an event when joined', () => {
      RealtimeComponentInstance['state'] = RealtimeComponentState.STOPPED;
      RealtimeComponentInstance.subscribe('test', () => {});

      expect(RealtimeComponentInstance['callbacksToSubscribeWhenJoined']).toHaveLength(1);
    });
  });

  describe('unsubscribe', () => {
    test('should unsubscribe from an event', () => {
      RealtimeComponentInstance['observers']['test'] = MOCK_OBSERVER_HELPER;
      const spy = jest.spyOn(RealtimeComponentInstance['observers']['test'], 'unsubscribe' as any);
      RealtimeComponentInstance['start']();
      RealtimeComponentInstance.unsubscribe('test', () => {});

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('subscribeToRealtimeEvents', () => {
    test('should subscribe to all realtime events', () => {
      const spy = jest.spyOn(RealtimeComponentInstance['room'], 'on' as any);
      RealtimeComponentInstance['start']();
      RealtimeComponentInstance['subscribeToRealtimeEvents']();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('fetchHistory', () => {
    test('should return null when the realtime is not started', async () => {
      RealtimeComponentInstance['state'] = RealtimeComponentState.STOPPED;
      const h = await RealtimeComponentInstance.fetchHistory();

      expect(h).toEqual(null);
    });

    test('should return null when the history is empty', async () => {
      const spy = jest
        .spyOn(RealtimeComponentInstance['room'], 'history' as any)
        .mockImplementationOnce((...args: unknown[]) => {
          const next = args[0] as (data: any) => void;
          next({ events: [] });
        });

      RealtimeComponentInstance['start']();
      const h = await RealtimeComponentInstance.fetchHistory();

      expect(spy).toHaveBeenCalled();
      expect(h).toEqual(null);
    });

    test('should return the history', async () => {
      const spy = jest
        .spyOn(RealtimeComponentInstance['room'], 'history' as any)
        .mockImplementationOnce((...args: unknown[]) => {
          const next = args[0] as (data: any) => void;
          next({
            events: [
              {
                timestamp: 1710336284652,
                presence: { id: 'unit-test-presence-id', name: 'unit-test-presence-name' },
                data: { name: 'unit-test-event-name', payload: 'unit-test-event-payload' },
              },
            ],
          });
        });

      RealtimeComponentInstance['start']();
      const h = await RealtimeComponentInstance.fetchHistory();

      expect(spy).toHaveBeenCalled();
      expect(h).toEqual({
        'unit-test-event-name': [
          {
            data: 'unit-test-event-payload',
            name: 'unit-test-event-name',
            participantId: 'unit-test-presence-id',
            timestamp: 1710336284652,
          },
        ],
      });
    });

    test('should return the history for a specific event', async () => {
      const spy = jest
        .spyOn(RealtimeComponentInstance['room'], 'history' as any)
        .mockImplementationOnce((...args: unknown[]) => {
          const next = args[0] as (data: any) => void;
          next({
            events: [
              {
                timestamp: 1710336284652,
                presence: { id: 'unit-test-presence-id', name: 'unit-test-presence-name' },
                data: { name: 'unit-test-event-name', payload: 'unit-test-event-payload' },
              },
            ],
          });
        });

      RealtimeComponentInstance['start']();
      const h = await RealtimeComponentInstance.fetchHistory('unit-test-event-name');

      expect(spy).toHaveBeenCalled();
      expect(h).toEqual([
        {
          data: 'unit-test-event-payload',
          name: 'unit-test-event-name',
          participantId: 'unit-test-presence-id',
          timestamp: 1710336284652,
        },
      ]);
    });

    test('should reject when the event is not found', async () => {
      const spy = jest
        .spyOn(RealtimeComponentInstance['room'], 'history' as any)
        .mockImplementationOnce((...args: unknown[]) => {
          const next = args[0] as (data: any) => void;
          next({
            events: [
              {
                timestamp: 1710336284652,
                presence: { id: 'unit-test-presence-id', name: 'unit-test-presence-name' },
                data: { name: 'unit-test-event-name', payload: 'unit-test-event-payload' },
              },
            ],
          });
        });

      RealtimeComponentInstance['start']();
      const h = RealtimeComponentInstance.fetchHistory('unit-test-event-wrong-name');

      await expect(h).rejects.toThrow('Event unit-test-event-wrong-name not found in the history');
    });
  });
});
