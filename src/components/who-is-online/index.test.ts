import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import {
  MOCK_ABLY_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_2,
  MOCK_LOCAL_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_1,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { RealtimeEvent, WhoIsOnlineEvent } from '../../common/types/events.types';
import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { useStore } from '../../common/utils/use-store';
import { IOC } from '../../services/io';

import { WhoIsOnline } from './index';

describe('Who Is Online', () => {
  let whoIsOnlineComponent: WhoIsOnline;

  beforeEach(async () => {
    jest.clearAllMocks();

    whoIsOnlineComponent = new WhoIsOnline();
    whoIsOnlineComponent.attach({
      ioc: new IOC(MOCK_LOCAL_PARTICIPANT),
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
      useStore,
    });

    whoIsOnlineComponent['localParticipantId'] = MOCK_LOCAL_PARTICIPANT.id;
    whoIsOnlineComponent['element'].updateParticipants = jest.fn();

    const gray = MeetingColorsHex[16];
    whoIsOnlineComponent['color'] = gray;
  });

  afterEach(() => {
    whoIsOnlineComponent.detach();
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });

  describe('start', () => {
    test('should create a new instance of Who Is Online', () => {
      expect(whoIsOnlineComponent).toBeInstanceOf(WhoIsOnline);
    });

    test('should position component inside div if id is provided', async () => {
      whoIsOnlineComponent['element'].remove();
      whoIsOnlineComponent['breakLayout'] = true;

      const div = document.createElement('div');

      div.id = 'unit-test-div';
      document.body.appendChild(div);
      whoIsOnlineComponent['position'] = 'unit-test-div';
      whoIsOnlineComponent['positionWhoIsOnline']();

      expect(div.parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].parentElement).toBe(div);
      expect(whoIsOnlineComponent['element'].position).toBe('position: relative;');
    });

    test('should position at top-right if no id is provided', async () => {
      expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 40px;');
    });

    test('should position at top-right if invalid id is provided', async () => {
      whoIsOnlineComponent['element'].remove();
      const randomIdNumber = Math.ceil(Math.random() * 100);
      whoIsOnlineComponent['position'] = `random-id${randomIdNumber}`;
      whoIsOnlineComponent['positionWhoIsOnline']();

      expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
      expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 40px;');
    });

    test('should allow an object with options in the constructor', () => {
      const whoIsOnlineComponent = new WhoIsOnline({
        position: 'bottom-left',
        styles: '.unit-test-class { color: red; }',
      });

      expect(whoIsOnlineComponent['position']).toBe('bottom-left');
    });

    test('should set default position when passing an object without position', () => {
      const whoIsOnlineComponent = new WhoIsOnline({
        styles: '.unit-test-class { color: red; }',
      });

      expect(whoIsOnlineComponent['position']).toBe('top-right');
    });
  });

  describe('onParticipantListUpdate', () => {
    test('should correctly update participant list', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(1);

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant2-ably-id': {
          ...MOCK_ABLY_PARTICIPANT,
          data: MOCK_ABLY_PARTICIPANT_DATA_2,
          id: 'unit-test-participant2-ably-id',
        },
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(2);
    });

    test('should not update participant list if participant is does not have whoIsOnline activated', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': {
          ...MOCK_ABLY_PARTICIPANT,
          data: { ...MOCK_ABLY_PARTICIPANT, activeComponents: [] },
        },
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(0);
    });

    test('should not add the same participant twice', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(1);

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(1);
    });

    test('should not display private participants', () => {
      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(1);

      const privateParticipant = {
        ...MOCK_ABLY_PARTICIPANT,
        data: {
          ...MOCK_ABLY_PARTICIPANT.data,
          isPrivate: true,
        },
      };

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': privateParticipant,
      });

      expect(whoIsOnlineComponent['participants'].length).toBe(0);
    });

    test('should display private local participant', () => {
      const participantsData = {};

      participantsData[MOCK_LOCAL_PARTICIPANT.id] = {
        ...MOCK_ABLY_PARTICIPANT,
        data: {
          ...MOCK_ABLY_PARTICIPANT.data,
          id: MOCK_LOCAL_PARTICIPANT.id,
        },
      };

      whoIsOnlineComponent['onParticipantListUpdate'](participantsData);

      expect(whoIsOnlineComponent['participants'].length).toBe(1);

      participantsData[MOCK_LOCAL_PARTICIPANT.id].data.isPrivate = true;

      whoIsOnlineComponent['onParticipantListUpdate'](participantsData);

      expect(whoIsOnlineComponent['participants'].length).toBe(1);
    });

    test('should call stopFollowing if previously followed participant leaves', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_1;
      whoIsOnlineComponent['following'] = MOCK_ABLY_PARTICIPANT_DATA_2.id;

      whoIsOnlineComponent['stopFollowing'] = jest
        .fn()
        .mockImplementation(whoIsOnlineComponent['stopFollowing']);

      whoIsOnlineComponent['onParticipantListUpdate']({
        'unit-test-participant1-ably-id': MOCK_ABLY_PARTICIPANT,
      });

      expect(whoIsOnlineComponent['stopFollowing']).toHaveBeenCalledWith({
        clientId: MOCK_ABLY_PARTICIPANT_DATA_2.id,
      });
    });
  });

  describe('events', () => {
    beforeEach(() => {
      const participants = {};
      participants[MOCK_LOCAL_PARTICIPANT.id] = MOCK_ABLY_PARTICIPANT;
      participants[MOCK_ABLY_PARTICIPANT.id] = {
        ...MOCK_ABLY_PARTICIPANT,
        data: MOCK_ABLY_PARTICIPANT_DATA_2,
      };

      whoIsOnlineComponent['onParticipantListUpdate'](participants);
      whoIsOnlineComponent['element'].addEventListener = jest.fn();
    });

    test('should publish private to event bus and realtime', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_PRIVATE_MODE, {
        detail: { isPrivate: false, id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['setPrivate'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_PRIVATE_MODE,
        false,
      );

      expect(whoIsOnlineComponent['realtime'].setPrivateWIOParticipant).toHaveBeenCalledWith(
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
        false,
      );
    });

    test('should publish local follow to event bus', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT, {
        detail: { id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['followMousePointer'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_LOCAL_FOLLOW_PARTICIPANT,
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
      );
    });

    test('should publish go-to to event bus', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, {
        detail: { id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['goToMousePointer'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        MOCK_ABLY_PARTICIPANT_DATA_2.id,
      );
    });
  });

  describe('setFollow', () => {
    beforeEach(() => {
      whoIsOnlineComponent['followMousePointer'] = jest
        .fn()
        .mockImplementation(whoIsOnlineComponent['followMousePointer']);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should set element.data to following.data', () => {
      whoIsOnlineComponent['setFollow']({ ...MOCK_ABLY_PARTICIPANT, clientId: 'ably-id' });
      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_1);
    });

    test('should early return if following the local participant', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;

      whoIsOnlineComponent['setFollow'](MOCK_ABLY_PARTICIPANT);

      expect(whoIsOnlineComponent['followMousePointer']).not.toHaveBeenCalled();
      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_2);
    });

    test('should set element.following to undefiend return if no id is passed', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;

      whoIsOnlineComponent['setFollow']({
        ...MOCK_ABLY_PARTICIPANT,
        clientId: 'ably-id',
        data: { id: '' },
      });

      const event = {
        detail: { id: '' },
      };

      expect(whoIsOnlineComponent['followMousePointer']).toHaveBeenCalledWith(event);
      expect(whoIsOnlineComponent['element'].following).toBe(undefined);
    });
  });

  describe('follow', () => {
    test('should publish detail to realtime', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GATHER, {
        detail: {
          ...MOCK_ABLY_PARTICIPANT_DATA_1,
        },
      });

      whoIsOnlineComponent['follow'](event);

      expect(whoIsOnlineComponent['realtime'].setFollowWIOParticipant).toHaveBeenCalledWith(
        event.detail,
      );
    });
  });

  describe('stopFollowing', () => {
    test('should do nothing if participant leaving is not being followed', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;
      whoIsOnlineComponent['following'] = 'ably-id';

      whoIsOnlineComponent['stopFollowing'](MOCK_ABLY_PARTICIPANT);

      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_2);
      expect(whoIsOnlineComponent['following']).toBe('ably-id');
    });

    test('should set element.following to undefined if following the participant who is leaving', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_1;
      whoIsOnlineComponent['following'] = MOCK_ABLY_PARTICIPANT_DATA_1.id;

      whoIsOnlineComponent['stopFollowing']({
        ...MOCK_ABLY_PARTICIPANT,
        clientId: MOCK_ABLY_PARTICIPANT_DATA_1.id,
      });

      expect(whoIsOnlineComponent['element'].following).toBe(undefined);
      expect(whoIsOnlineComponent['following']).toBe(undefined);
    });
  });

  describe('gather', () => {
    test('should call setGatherWIOParticipant with detail', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GATHER, {
        detail: {
          ...MOCK_ABLY_PARTICIPANT_DATA_1,
        },
      });

      whoIsOnlineComponent['gather'](event);

      expect(whoIsOnlineComponent['realtime'].setGatherWIOParticipant).toHaveBeenCalledWith({
        ...event.detail,
      });
    });
  });

  describe('events', () => {
    beforeEach(() => {
      whoIsOnlineComponent['publish'] = jest.fn();
    });

    test('should publish "go to" event when goToMousePointer is called', () => {
      whoIsOnlineComponent['goToMousePointer']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.GO_TO_PARTICIPANT,
        'unit-test-id',
      );
    });

    test('should not publish "go to" event if id is equal to local participant id', () => {
      whoIsOnlineComponent['goToMousePointer']({
        detail: { id: MOCK_LOCAL_PARTICIPANT.id },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).not.toHaveBeenCalled();
    });

    test('should publish "follow" event when followMousePointer is called', () => {
      whoIsOnlineComponent['followMousePointer']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.START_FOLLOWING_PARTICIPANT,
        'unit-test-id',
      );
    });

    test('should publish "stop following" if follow is called with undefined id', () => {
      whoIsOnlineComponent['followMousePointer']({
        detail: { id: undefined },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT,
      );
    });

    test('should publish "stop following" event when stopFollowing is called', () => {
      whoIsOnlineComponent['element'].following = {
        id: 'unit-test-id',
        color: 'unit-test-color',
        name: 'unit-test-name',
      };

      whoIsOnlineComponent['stopFollowing']({
        clientId: 'unit-test-id',
      });

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.STOP_FOLLOWING_PARTICIPANT,
      );
    });

    test('should publish "enter private mode" event when setPrivate is called with isPrivate as true', () => {
      whoIsOnlineComponent['setPrivate']({
        detail: { isPrivate: true, id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.ENTER_PRIVATE_MODE,
      );
    });

    test('should publish "leave private mode" event when setPrivate is called with isPrivate as false', () => {
      whoIsOnlineComponent['setPrivate']({
        detail: { isPrivate: false, id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.LEAVE_PRIVATE_MODE,
      );
    });

    test('should publish "follow me" event when follow is called with defined id', () => {
      whoIsOnlineComponent['follow']({
        detail: { id: 'unit-test-id' },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(
        WhoIsOnlineEvent.START_FOLLOW_ME,
        'unit-test-id',
      );
    });

    test('should publish "stop follow me" event when follow is called with undefined id', () => {
      whoIsOnlineComponent['follow']({
        detail: { id: undefined },
      } as CustomEvent);

      expect(whoIsOnlineComponent['publish']).toHaveBeenCalledWith(WhoIsOnlineEvent.STOP_FOLLOW_ME);
    });
  });

  describe('setStyles', () => {
    test('should append style element with user styles to head', () => {
      const styles = `
        .unit-test-class {
          color: red;
        }`;

      whoIsOnlineComponent['setStyles'](styles);
      const styleElement = document.getElementById('superviz-who-is-online-styles');
      expect(styleElement).toBeTruthy();
    });

    test('should do nothing if no styles are passed', () => {
      whoIsOnlineComponent['setStyles']();
      const styleElement = document.getElementById('superviz-who-is-online-styles');
      expect(styleElement).toBeFalsy();
    });
  });
});
