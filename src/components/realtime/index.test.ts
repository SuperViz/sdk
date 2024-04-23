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
    test('should log started', () => {
      const spy = jest.spyOn(RealtimeComponentInstance['logger'], 'log');
      RealtimeComponentInstance['start']();

      expect(spy).toHaveBeenCalledWith('started');
      expect(RealtimeComponentInstance['state']).toBe(RealtimeComponentState.STARTED);
    });
  });

  describe('connect', () => {
    test('should log an error when trying to create a channel before start', () => {
      RealtimeComponentInstance['state'] = RealtimeComponentState.STOPPED;

      const spy = jest.spyOn(RealtimeComponentInstance['logger'], 'log');
      RealtimeComponentInstance.connect('test');

      expect(spy).toHaveBeenCalled();
    });

    test('should create a new channel', () => {
      const channel = RealtimeComponentInstance.connect('test');

      expect(channel).toBeDefined();
      expect(RealtimeComponentInstance['channels']).toHaveLength(1);
      expect(RealtimeComponentInstance['channels'][0]).toBe(channel);
    });
  });

  describe('destroy', () => {
    test('should disconnect from the channels', () => {
      const channel = RealtimeComponentInstance.connect('test');

      const spy = jest.spyOn(RealtimeComponentInstance, 'disconnectToAllChannels' as any);
      const spy2 = jest.spyOn(channel, 'disconnect' as any);
      RealtimeComponentInstance['destroy']();

      expect(spy).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
    });

    test('should change state to stopped', () => {
      RealtimeComponentInstance['destroy']();

      expect(RealtimeComponentInstance['state']).toBe('STOPPED');
    });
  });
});
