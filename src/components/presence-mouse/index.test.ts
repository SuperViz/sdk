import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { MeetingEvent } from '../../common/types/events.types';
import { sleep } from '../../common/utils';
import { AblyParticipant } from '../../services/realtime/ably/types';
import type { PresenceMouse } from '../../web-components';

import { PresenceMouseComponent } from './index';

const createPresenceMouseComponent = (containerId?: string): PresenceMouseComponent => {
  const presenceMouseComponent = new PresenceMouseComponent('canvas');

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

describe('PresenceMouseComponent', () => {
  let presenceMouseComponent: PresenceMouseComponent;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <canvas id="canvas"></canvas>
      </div>  
      `;
  });

  test('should throw an error if no container is found', () => {
    expect(() => new PresenceMouseComponent('not-found-container')).toThrowError(
      'Container with id not-found-container not found',
    );
  });

  describe('start', () => {
    test('should subscribe to realtime events', () => {
      presenceMouseComponent = createPresenceMouseComponent();
      presenceMouseComponent['subscribeToRealtimeEvents'] = jest.fn();

      presenceMouseComponent['start']();

      expect(presenceMouseComponent['subscribeToRealtimeEvents']).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    test('should unsubscribe from realtime events', () => {
      presenceMouseComponent = createPresenceMouseComponent();
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

      expect(ABLY_REALTIME_MOCK.updateMyProperties).toHaveBeenCalledWith({
        mousePositionX: event.x,
        mousePositionY: event.y,
        originalWidth: 0,
        originalHeight: 0,
        containerId: 'container',
      });
    });
  });

  describe('onParticipantsDidChange', () => {
    test('should update presence mouse element for external participants', () => {
      presenceMouseComponent['presenceMouseElement']['updatePresenceMouseParticipant'] = jest.fn();
      const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
        clientId: 'MOCK_LOCAL_PARTICIPANT.id',
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant1-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: 'MOCK_LOCAL_PARTICIPANT.id',
          mousePositionX: 1,
          slotIndex: 0,
        },
      };

      const participant2 = MOCK_ABLY_PARTICIPANT;
      participant2.id = 'unit-test-participant2-ably-id';
      participant2.data.participantId = 'participant2-id';

      const participants: Record<string, AblyParticipant> = {
        participant: MOCK_ABLY_PARTICIPANT,
        participant2,
      };

      presenceMouseComponent['localParticipant'] = { id: 'unit-test-participant1-ably-id' };

      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(
        presenceMouseComponent['presenceMouseElement']['updatePresenceMouseParticipant'],
      ).toHaveBeenCalledWith(participant2.data);
    });
  });

  describe('onParticipantLeftOnRealtime', () => {
    test('should remove presence mouse participant', () => {
      presenceMouseComponent['presenceMouseElement']['removePresenceMouseParticipant'] = jest.fn();
      const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
        clientId: 'MOCK_LOCAL_PARTICIPANT.id',
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant1-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: 'MOCK_LOCAL_PARTICIPANT.id',
          slotIndex: 0,
        },
      };

      presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_ABLY_PARTICIPANT);

      expect(
        presenceMouseComponent['presenceMouseElement']['removePresenceMouseParticipant'],
      ).toHaveBeenCalledWith(MOCK_ABLY_PARTICIPANT.clientId);
    });
  });
});
