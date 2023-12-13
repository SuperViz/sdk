import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import {
  MOCK_ABLY_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_2,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_1,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { RealtimeEvent } from '../../common/types/events.types';
import { MeetingColorsHex } from '../../common/types/meeting-colors.types';

import { WhoIsOnline } from './index';

describe('Who Is Online', () => {
  let whoIsOnlineComponent: WhoIsOnline;

  beforeEach(async () => {
    jest.clearAllMocks();

    whoIsOnlineComponent = new WhoIsOnline();
    whoIsOnlineComponent.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    whoIsOnlineComponent['element'].updateParticipants = jest.fn();

    const gray = MeetingColorsHex[16];
    whoIsOnlineComponent['color'] = gray;
  });

  afterEach(() => {
    whoIsOnlineComponent.detach();
  });

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

    test('should publish follow to event bus', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, {
        detail: { id: MOCK_ABLY_PARTICIPANT_DATA_2.id },
      });

      whoIsOnlineComponent['followMousePointer'](event);

      expect(whoIsOnlineComponent['eventBus'].publish).toHaveBeenCalledWith(
        RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
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

  describe('setGather', () => {
    beforeEach(() => {
      whoIsOnlineComponent['followMousePointer'] = jest
        .fn()
        .mockImplementation(whoIsOnlineComponent['followMousePointer']);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should set element.data to following.data', () => {
      whoIsOnlineComponent['setGather']({ ...MOCK_ABLY_PARTICIPANT, clientId: 'ably-id' });
      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_1);
    });

    test('should early return if following the local participant', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;

      whoIsOnlineComponent['setGather'](MOCK_ABLY_PARTICIPANT);

      expect(whoIsOnlineComponent['followMousePointer']).not.toHaveBeenCalled();
      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_2);
    });

    test('should set element.following to undefiend return if no id is passed', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;

      whoIsOnlineComponent['setGather']({
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

  describe('gatherAll', () => {
    test('should publish detail to realtime', () => {
      const event = new CustomEvent(RealtimeEvent.REALTIME_GATHER, {
        detail: {
          ...MOCK_ABLY_PARTICIPANT_DATA_1,
        },
      });

      whoIsOnlineComponent['gatherAll'](event);

      expect(whoIsOnlineComponent['realtime'].setGatherWIOParticipant).toHaveBeenCalledWith(
        event.detail,
      );
    });
  });

  describe('stopFollowing', () => {
    test('should do nothing if participant leaving is not being followed', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_2;

      whoIsOnlineComponent['stopFollowing'](MOCK_ABLY_PARTICIPANT);

      expect(whoIsOnlineComponent['element'].following).toBe(MOCK_ABLY_PARTICIPANT_DATA_2);
    });

    test('should set element.following to undefined if following the participant who is leaving', () => {
      whoIsOnlineComponent['element'].following = MOCK_ABLY_PARTICIPANT_DATA_1;

      whoIsOnlineComponent['stopFollowing']({
        ...MOCK_ABLY_PARTICIPANT,
        clientId: MOCK_ABLY_PARTICIPANT_DATA_1.id,
      });

      expect(whoIsOnlineComponent['element'].following).toBe(undefined);
    });
  });
});
