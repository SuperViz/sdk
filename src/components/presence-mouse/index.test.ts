import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';

import { ParticipantMouse } from './types';

import { MousePointers } from './index';

const createMousePointers = (containerId?: string): MousePointers => {
  const presenceMouseComponent = new MousePointers('canvas');

  presenceMouseComponent.attach({
    realtime: ABLY_REALTIME_MOCK,
    localParticipant: MOCK_LOCAL_PARTICIPANT,
    group: MOCK_GROUP,
    config: MOCK_CONFIG,
    eventBus: EVENT_BUS_MOCK,
  });

  return presenceMouseComponent;
};

describe('MousePointers', () => {
  let presenceMouseComponent: MousePointers;

  beforeEach(() => {
    jest.clearAllMocks();

    document.body.innerHTML = `
      <div>
        <canvas id="canvas"></canvas>
      </div>  
      `;
  });

  test('should throw an error if no container is found', () => {
    expect(() => new MousePointers('not-found-container')).toThrowError(
      'Container with id not-found-container not found',
    );
  });

  describe('start', () => {
    test('should subscribe to realtime events', () => {
      presenceMouseComponent = createMousePointers();
      presenceMouseComponent['subscribeToRealtimeEvents'] = jest.fn();

      presenceMouseComponent['start']();

      expect(presenceMouseComponent['subscribeToRealtimeEvents']).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    test('should unsubscribe from realtime events', () => {
      presenceMouseComponent = createMousePointers();
      presenceMouseComponent['container'].removeEventListener = jest.fn();

      presenceMouseComponent['destroy']();

      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
      expect(presenceMouseComponent['divWrapper'].hasChildNodes()).toBeFalsy();
      expect(presenceMouseComponent['container'].removeEventListener).toBeCalled();
    });
  });

  describe('subscribeToRealtimeEvents', () => {
    test('should subscribe to realtime events', () => {
      presenceMouseComponent['subscribeToRealtimeEvents']();

      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.subscribe).toHaveBeenCalledWith(
        presenceMouseComponent['onParticipantLeftOnRealtime'],
      );
      expect(ABLY_REALTIME_MOCK.participantsObserver.subscribe).toHaveBeenCalledWith(
        presenceMouseComponent['onParticipantsDidChange'],
      );
    });
  });

  describe('unsubscribeFromRealtimeEvents', () => {
    test('should subscribe to realtime events', () => {
      presenceMouseComponent['unsubscribeFromRealtimeEvents']();

      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.unsubscribe).toHaveBeenCalledWith(
        presenceMouseComponent['onParticipantLeftOnRealtime'],
      );
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalledWith(
        presenceMouseComponent['onParticipantsDidChange'],
      );
    });
  });

  describe('onMyParticipantMouseMove', () => {
    test('should update my participant mouse position', () => {
      const presenceContainerId = document.createElement('div');
      presenceMouseComponent['containerId'] = 'container';
      document.getElementById = jest.fn().mockReturnValue(presenceContainerId);

      const event = { x: 10, y: 20 };
      presenceMouseComponent['onMyParticipantMouseMove'](event as unknown as MouseEvent);

      expect(ABLY_REALTIME_MOCK.updatePresenceMouse).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        mousePositionX: event.x,
        mousePositionY: event.y,
        visible: true,
      } as ParticipantMouse);
    });
  });

  describe('onParticipantsDidChange', () => {
    test('should update presence mouse element for external participants', () => {
      presenceMouseComponent['updatePresenceMouseParticipant'] = jest.fn();
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        mousePositionX: 1000,
        mousePositionY: 1000,
        slotIndex: 0,
        visible: true,
      };

      const participant2 = MOCK_MOUSE;
      participant2.id = 'unit-test-participant2-ably-id';

      const participants: Record<string, ParticipantMouse> = {
        participant: MOCK_MOUSE,
        participant2,
      };

      presenceMouseComponent['localParticipant'] = { id: 'unit-test-participant1-ably-id' };

      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(presenceMouseComponent['updatePresenceMouseParticipant']).toHaveBeenCalledWith(
        participant2,
      );
    });
  });

  describe('onParticipantLeftOnRealtime', () => {
    test('should remove presence mouse participant', () => {
      presenceMouseComponent['removePresenceMouseParticipant'] = jest.fn();
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        mousePositionX: 1000,
        mousePositionY: 1000,
        slotIndex: 0,
        visible: true,
      };

      presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_MOUSE);

      expect(presenceMouseComponent['removePresenceMouseParticipant']).toHaveBeenCalledWith(
        MOCK_MOUSE.id,
      );
    });
  });
});
