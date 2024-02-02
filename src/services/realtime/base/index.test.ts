import { RealtimeService } from '.';

describe('RealtimeService', () => {
  let RealtimeServiceInstance: RealtimeService;

  beforeEach(() => {
    jest.clearAllMocks();
    RealtimeServiceInstance = new RealtimeService();
  });

  test('should export RealtimeService', () => {
    expect(RealtimeService).toBeDefined();
  });

  test('should instantiate RealtimeService', () => {
    expect(RealtimeServiceInstance).toBeDefined();
    expect(RealtimeServiceInstance).toBeInstanceOf(RealtimeService);
    expect(RealtimeServiceInstance.participantObservers).toBeDefined();
    expect(RealtimeServiceInstance.participantsObserver).toBeDefined();
    expect(RealtimeServiceInstance.participantJoinedObserver).toBeDefined();
    expect(RealtimeServiceInstance.participantLeaveObserver).toBeDefined();
    expect(RealtimeServiceInstance.reconnectObserver).toBeDefined();
    expect(RealtimeServiceInstance.roomInfoUpdatedObserver).toBeDefined();
    expect(RealtimeServiceInstance.roomListUpdatedObserver).toBeDefined();
    expect(RealtimeServiceInstance.realtimeStateObserver).toBeDefined();
    expect(RealtimeServiceInstance.syncPropertiesObserver).toBeDefined();
    expect(RealtimeServiceInstance.kickAllParticipantsObserver).toBeDefined();
    expect(RealtimeServiceInstance.authenticationObserver).toBeDefined();
  });

  test('should subscribe to participant update', () => {
    const participantId = '123';
    const callback = jest.fn();

    RealtimeServiceInstance.subscribeToParticipantUpdate(participantId, callback);
    expect(RealtimeServiceInstance.participantObservers[participantId]).toBeDefined();
    expect(RealtimeServiceInstance.participantObservers[participantId].subscribe).toBeDefined();
  });

  test('should create new observer if participant observer is undefined', () => {
    const participantId = '123';
    const callback = jest.fn();

    expect(RealtimeServiceInstance.participantObservers[participantId]).toEqual(undefined);

    RealtimeServiceInstance.subscribeToParticipantUpdate(participantId, callback);
    expect(RealtimeServiceInstance.participantObservers[participantId]).toBeDefined();
    expect(RealtimeServiceInstance.participantObservers[participantId].subscribe).toBeDefined();
  });

  test('should unsubscribe from participant update', () => {
    const participantId = '123';
    const callback = jest.fn();

    RealtimeServiceInstance.subscribeToParticipantUpdate(participantId, callback);
    RealtimeServiceInstance.participantObservers[participantId].publish('test');
    expect(callback).toHaveBeenCalledTimes(1);

    RealtimeServiceInstance.unsubscribeFromParticipantUpdate(participantId, callback);
    RealtimeServiceInstance.participantObservers[participantId].publish('test');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should skip unsubscribe from participant update if participant observer is undefined', () => {
    const participantId = '123';
    const callback = jest.fn();

    RealtimeServiceInstance.unsubscribeFromParticipantUpdate(participantId, callback);
    expect(RealtimeServiceInstance.participantObservers[participantId]).toBeUndefined();
  });

  test('should return slot color', () => {
    const slotColor = RealtimeServiceInstance.getSlotColor(0);
    expect(slotColor.color).toEqual('#FFEF33');
    expect(slotColor.name).toEqual('yellow');
  });

  test('should return gray if slot index is undefined', () => {
    // @ts-ignore
    const slotColor = RealtimeServiceInstance.getSlotColor(undefined);
    expect(slotColor.color).toEqual('#878291');
    expect(slotColor.name).toEqual('gray');
  });

  test('should subscribe to participant 3d update and call callback on update', () => {
    const callback = jest.fn();
    expect(RealtimeServiceInstance.participants3DObservers['123']).toBeUndefined();
    RealtimeServiceInstance.subscribeToParticipant3DUpdate('123', callback);
    expect(RealtimeServiceInstance.participants3DObservers['123']).toBeDefined();
    RealtimeServiceInstance.participants3DObservers['123'].publish('test');
    expect(callback).toBeCalled();
  });

  test('should unsubscribe from participant 3d update', () => {
    const callback = jest.fn();
    RealtimeServiceInstance.subscribeToParticipant3DUpdate('123', callback);
    RealtimeServiceInstance.participants3DObservers['123'].publish('test');
    expect(callback).toBeCalledTimes(1);

    RealtimeServiceInstance.unsubscribeFromParticipant3DUpdate('123', callback);

    RealtimeServiceInstance.participants3DObservers['123'].publish('test');
    expect(callback).toBeCalledTimes(1);
  });
});
