import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { sleep } from '../../common/utils';
import type { PresenceMouse } from '../../web-components';
import { styles } from '../../web-components/presence-mouse/styles';

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

  presenceMouseComponent['presenceMouseElement'] = document.createElement(
    'superviz-presence-mouse',
  ) as PresenceMouse;

  presenceMouseComponent['presenceMouseElement']['updatePresenceMouseParticipant'] = jest.fn();
  presenceMouseComponent['presenceMouseElement']['removePresenceMouseParticipant'] = jest.fn();
  presenceMouseComponent['divWrapper'].appendChild(presenceMouseComponent['presenceMouseElement']);

  return presenceMouseComponent;
};

describe('MousePointers', () => {
  let presenceMouseComponent: MousePointers;
  beforeEach(async () => {
    jest.clearAllMocks();
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    const div = document.createElement('div') as HTMLDivElement;
    div.id = 'teste-div';
    canvas.id = 'canvas';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.appendChild(canvas);
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(document.body.children[0] as HTMLDivElement);
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
        originalWidth: 0,
        originalHeight: 0,
        containerId: 'container',
        visible: true,
      });
    });
  });

  describe('onParticipantsDidChange', () => {
    test('should update presence mouse element for external participants', () => {
      presenceMouseComponent['presenceMouseElement']['updatePresenceMouseParticipant'] = jest.fn();
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        mousePositionX: 1000,
        mousePositionY: 1000,
        originalWidth: 1000,
        originalHeight: 1000,
        slotIndex: 0,
        containerId: presenceMouseComponent['containerId'] as string,
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

      expect(
        presenceMouseComponent['presenceMouseElement']['updatePresenceMouseParticipant'],
      ).toHaveBeenCalledWith(participant2);
    });
  });

  describe('onParticipantLeftOnRealtime', () => {
    test('should remove presence mouse participant', () => {
      presenceMouseComponent['presenceMouseElement']['removePresenceMouseParticipant'] = jest.fn();
      const MOCK_MOUSE: ParticipantMouse = {
        ...MOCK_LOCAL_PARTICIPANT,
        mousePositionX: 1000,
        mousePositionY: 1000,
        originalWidth: 1000,
        originalHeight: 1000,
        slotIndex: 0,
        containerId: presenceMouseComponent['containerId'] as string,
        visible: true,
      };

      presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_MOUSE);

      expect(
        presenceMouseComponent['presenceMouseElement']['removePresenceMouseParticipant'],
      ).toHaveBeenCalledWith(MOCK_MOUSE.id);
    });
  });

  describe('goToMousePointer', () => {
    test('should not scroll if element is null', async () => {
      const a = createMousePointers();
      a['positions'] = {
        'unit-test-local-participant-id': {
          x: 1000,
          y: 1000,
        },
      };

      const wrapper = a['divWrapper'];
      a['divWrapper'] = null as unknown as HTMLDivElement;
      a['goToMousePointer']('unit-test-local-participant-id');
      expect(wrapper.scrollTop).toEqual(0);
      expect(wrapper.scrollLeft).toEqual(0);
    });

    test('should not scroll if pointer is already in view', () => {
      presenceMouseComponent = createMousePointers();

      presenceMouseComponent['positions']['random-id'] = {
        x: 10,
        y: 10,
      };

      presenceMouseComponent['goToMousePointer']('random-id');
      expect(presenceMouseComponent['divWrapper'].scrollTop).toEqual(0);
      expect(presenceMouseComponent['divWrapper'].scrollLeft).toEqual(0);
    });

    test('should scroll to element if it is larger than its parent', () => {
      presenceMouseComponent = createMousePointers();

      presenceMouseComponent['divWrapper'].parentElement!.scrollTo = jest.fn();

      jest.spyOn(presenceMouseComponent['divWrapper'], 'clientWidth', 'get').mockReturnValue(100);
      jest.spyOn(presenceMouseComponent['divWrapper'], 'clientHeight', 'get').mockReturnValue(100);

      jest
        .spyOn(
          presenceMouseComponent['divWrapper'].parentElement as HTMLElement,
          'clientWidth',
          'get',
        )
        .mockReturnValue(10);
      jest
        .spyOn(
          presenceMouseComponent['divWrapper'].parentElement as HTMLElement,
          'clientHeight',
          'get',
        )
        .mockReturnValue(10);
      jest
        .spyOn(
          presenceMouseComponent['divWrapper'].parentElement as HTMLElement,
          'scrollHeight',
          'get',
        )
        .mockReturnValue(1000);

      const element = document.createElement('div');
      element.setAttribute('position', JSON.stringify({ x: 40, y: 40 }));
      presenceMouseComponent['divWrapper'].appendChild(element);
      presenceMouseComponent['positions']['random-id'] = {
        x: 150,
        y: 150,
      };

      presenceMouseComponent['goToMousePointer']('random-id');

      expect(presenceMouseComponent['divWrapper'].parentElement!.scrollTo).toHaveBeenCalledTimes(1);
      expect(presenceMouseComponent['divWrapper'].parentElement!.scrollTo).toHaveBeenCalledWith({
        left: 150,
        top: 150,
        behavior: 'smooth',
      });
    });
  });
});
