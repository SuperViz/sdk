import { MOCK_CANVAS } from '../../../__mocks__/canvas.mock';
import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';

import { ParticipantMouse } from './types';

import { MousePointers } from './index';

const MOCK_MOUSE: ParticipantMouse = {
  ...MOCK_LOCAL_PARTICIPANT,
  x: 30,
  y: 30,
  slotIndex: 0,
  visible: true,
};

const participant2 = MOCK_MOUSE;
participant2.id = 'unit-test-participant2-ably-id';

const participants: Record<string, ParticipantMouse> = {};
participants[MOCK_LOCAL_PARTICIPANT.id] = MOCK_MOUSE;
participants[participant2.id] = participant2;

const { getElementById } = document;

const createMousePointers = (): MousePointers => {
  const presenceMouseComponent = new MousePointers('canvas');

  presenceMouseComponent.attach({
    realtime: ABLY_REALTIME_MOCK,
    localParticipant: MOCK_LOCAL_PARTICIPANT,
    group: MOCK_GROUP,
    config: MOCK_CONFIG,
    eventBus: EVENT_BUS_MOCK,
  });

  presenceMouseComponent['canvas'] = {
    ...presenceMouseComponent['canvas'],
    ...MOCK_CANVAS,
  } as unknown as HTMLCanvasElement;

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
      'Canvas with id not-found-container not found',
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
      presenceMouseComponent['canvas'].removeEventListener = jest.fn();

      presenceMouseComponent['destroy']();

      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
      expect(presenceMouseComponent['divWrapper'].hasChildNodes()).toBeFalsy();
      expect(presenceMouseComponent['canvas'].removeEventListener).toBeCalled();
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
        x: event.x,
        y: event.y,
        visible: true,
      } as ParticipantMouse);
    });
  });

  describe('onParticipantsDidChange', () => {
    beforeEach(() => {
      presenceMouseComponent['localParticipant'] = MOCK_LOCAL_PARTICIPANT;
      presenceMouseComponent['presences'] = new Map();

      participants[MOCK_LOCAL_PARTICIPANT.id] = MOCK_MOUSE;
      participants[participant2.id] = participant2;
    });

    test('should update presence mouse element for external participants', () => {
      presenceMouseComponent['updatePresenceMouseParticipant'] = jest.fn();
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        x: 1000,
        y: 1000,
        slotIndex: 0,
        visible: true,
      };

      const participant2 = MOCK_MOUSE;
      participant2.id = 'unit-test-participant2-ably-id';

      const participant3 = MOCK_MOUSE;
      participant3.id = 'unit-test-local-participant-id';

      const participants: Record<string, ParticipantMouse> = {
        participant: MOCK_MOUSE,
        participant2,
        participant3,
      };

      presenceMouseComponent['localParticipant'] = { id: 'unit-test-participant1-ably-id' };

      presenceMouseComponent['onParticipantsDidChange'](participants);

      const expected = new Map();
      expected.set(participant2.id, participant2);

      expect(presenceMouseComponent['presences']).toEqual(expected);
    });

    test('should go to participant if following', () => {
      presenceMouseComponent['goToMouse'] = jest
        .fn()
        .mockImplementation(presenceMouseComponent['goToMouse']);
      presenceMouseComponent['following'] = participant2.id;
      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(presenceMouseComponent['goToMouse']).toHaveBeenCalledWith(participant2.id);
    });
  });

  describe('onParticipantLeftOnRealtime', () => {
    test('should remove presence mouse participant', () => {
      const spy = jest.spyOn(presenceMouseComponent as any, 'removePresenceMouseParticipant');
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        x: 1000,
        y: 1000,
        slotIndex: 0,
        visible: true,
      };

      presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_MOUSE);

      expect(spy).toHaveBeenCalledWith(MOCK_MOUSE.id);
    });
  });

  describe('goToMouse', () => {
    test('should not call callback if user id is not found', () => {
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        x: 1000,
        y: 1000,
        slotIndex: 0,
        visible: true,
      };

      const participant2 = MOCK_MOUSE;
      participant2.id = 'unit-test-participant2-ably-id';

      const participants: Record<string, ParticipantMouse> = {
        participant: MOCK_MOUSE,
        participant2,
      };

      presenceMouseComponent['onParticipantsDidChange'](participants);

      presenceMouseComponent['goToMouseCallback'] = jest.fn();
      presenceMouseComponent['goToMouse']('not-found-user-id');

      expect(presenceMouseComponent['goToMouseCallback']).not.toHaveBeenCalled();
    });

    test('should call callback if user id is found', () => {
      presenceMouseComponent['onParticipantsDidChange'](participants);

      presenceMouseComponent['goToMouseCallback'] = jest.fn();
      presenceMouseComponent['goToMouse'](participant2.id);

      expect(presenceMouseComponent['goToMouseCallback']).toHaveBeenCalledTimes(1);
      expect(presenceMouseComponent['goToMouseCallback']).toHaveBeenCalledWith({
        x: 20,
        y: 20,
      });
    });
  });

  describe('animate', () => {
    test('should call requestAnimationFrame', () => {
      window.requestAnimationFrame = jest.fn();
      presenceMouseComponent['animate']();
      expect(window.requestAnimationFrame).toHaveBeenCalledWith(presenceMouseComponent['animate']);
    });

    test('should call renderPresenceMouses if visible', () => {
      presenceMouseComponent['visible'] = true;
      presenceMouseComponent['renderPresenceMouses'] = jest.fn();
      presenceMouseComponent['animate']();
      expect(presenceMouseComponent['renderPresenceMouses']).toHaveBeenCalled();
    });

    test('should not call renderPresenceMouses if not visible', () => {
      const newPresence = new Map();
      newPresence.set('test', { ...participant2, visible: false });
      presenceMouseComponent['presences'] = newPresence;

      presenceMouseComponent['renderPresenceMouses'] = jest.fn();
      presenceMouseComponent['animate']();
      expect(presenceMouseComponent['renderPresenceMouses']).not.toHaveBeenCalled();
    });
  });

  describe('onMyParticipantMouseOut', () => {
    beforeAll(() => {
      jest.restoreAllMocks();
    });
    test('should publish own mouse visibility as false to realtime', () => {
      presenceMouseComponent['onMyParticipantMouseOut']();
      expect(ABLY_REALTIME_MOCK.updatePresenceMouse).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        visible: false,
      } as ParticipantMouse);
    });
  });

  describe('renderPresenceMouses', () => {
    const div = document.createElement('div');
    div.style.height = '200px';
    div.style.width = '200px';

    beforeAll(() => {
      document.getElementById = getElementById;
      document.body.innerHTML =
        '<canvas class="superviz-presence-mouse-wrapper" style="width: 200px; height: 200px"/>';
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    test('should create mouseFollower if not found', () => {
      presenceMouseComponent = createMousePointers();
      expect(presenceMouseComponent['divWrapper'].hasChildNodes()).toBeFalsy();
      jest
        .spyOn(presenceMouseComponent['divWrapper'] as any, 'clientWidth', 'get')
        .mockImplementation(() => 200);

      jest
        .spyOn(presenceMouseComponent['divWrapper'] as any, 'clientHeight', 'get')
        .mockImplementation(() => 200);

      presenceMouseComponent['renderPresenceMouses']({ ...MOCK_MOUSE, id: 'none' });
      expect(presenceMouseComponent['divWrapper'].hasChildNodes()).toBeTruthy();
    });
  });
});
