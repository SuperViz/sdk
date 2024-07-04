import * as Socket from '@superviz/socket-client';

import { MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';

import { IOCState } from './types';

import { IOC } from '.';

describe('io', () => {
  let instance: IOC | null = null;

  beforeEach(() => {
    instance = new IOC(MOCK_LOCAL_PARTICIPANT);
  });

  afterEach(() => {
    instance?.destroy();
    instance = null;
  });

  test('should create an instance', () => {
    expect(instance).toBeInstanceOf(IOC);
  });

  test('should create a room', () => {
    const room = instance?.createRoom('test');

    expect(room).toBeDefined();
    expect(room).toHaveProperty('on');
    expect(room).toHaveProperty('off');
    expect(room).toHaveProperty('emit');
  });

  test('should force reconnect', () => {
    const spy = jest.spyOn(instance as any, 'forceReconnect');
    const callback = jest.fn();

    instance?.stateSubject.subscribe(callback);
    instance?.['handleConnectionState']({
      state: Socket.ClientState.DISCONNECTED,
      reason: '',
    });

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(IOCState.DISCONNECTED);
  });

  test('should not force reconnect if reason is Unauthorized connection', () => {
    const spy = jest.spyOn(instance as any, 'forceReconnect');
    const callback = jest.fn();

    instance?.stateSubject.subscribe(callback);
    instance?.['handleConnectionState']({
      state: Socket.ClientState.DISCONNECTED,
      reason: 'Unauthorized connection',
    });

    expect(callback).toHaveBeenCalledWith(IOCState.AUTH_ERROR);
    expect(spy).not.toHaveBeenCalled();
  });

  test('should not force reconnect if state is not DISCONNECTED or RECONNECT_ERROR', () => {
    const spy = jest.spyOn(instance as any, 'forceReconnect');

    instance?.['handleConnectionState']({
      state: Socket.ClientState.CONNECTED,
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
