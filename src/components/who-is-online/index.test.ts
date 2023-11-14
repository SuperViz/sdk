import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import {
  MOCK_AVATAR,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { MeetingColorsHex } from '../../common/types/meeting-colors.types';
import sleep from '../../common/utils/sleep';
import { AblyRealtimeService } from '../../services/realtime';

import { Participant } from './types';

import { WhoIsOnline } from './index';

// should equal the 'data' field of MOCK_ABLY_PARTICIPANT
const MOCK_PARTICIPANT: Participant & { participantId: string } = {
  id: 'unit-test-participant1-id',
  avatar: MOCK_AVATAR,
  color: MeetingColorsHex[0],
  name: 'unit-test-participant1-name',
  slotIndex: 0,
  participantId: 'unit-test-participant1-ably-id',
};

describe('Who Is Online', () => {
  let whoIsOnlineComponent: WhoIsOnline;
  let AblyRealtimeServiceInstance: AblyRealtimeService;

  beforeEach(async () => {
    jest.clearAllMocks();
    AblyRealtimeServiceInstance = new AblyRealtimeService(
      'unit-test-api-key',
      'unit-test-ably-key',
    );

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

  test('should update participants when participant joins', async () => {
    const presenceData: Participant = {
      id: 'participant2',
      name: 'participant2',
      color: undefined,
      slotIndex: 3,
    };

    const currentParticipants = [...whoIsOnlineComponent['participants']];

    whoIsOnlineComponent['onParticipantJoined'](presenceData);
    expect(whoIsOnlineComponent['participants'].length).toBe(3);
    expect(whoIsOnlineComponent['participants']).toEqual([...currentParticipants, presenceData]);
  });

  test('should remove participant from participants list on leave', () => {
    const presenceData = {
      ...MOCK_PARTICIPANT,
    };

    expect(whoIsOnlineComponent['participants'].length).toBe(2);
    expect(whoIsOnlineComponent['participants'][0]).toEqual(MOCK_PARTICIPANT);

    whoIsOnlineComponent['onParticipantLeave'](presenceData);

    expect(whoIsOnlineComponent['participants'].length).toBe(1);
    expect(whoIsOnlineComponent['participants'][0]).not.toEqual(MOCK_PARTICIPANT);
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

  test('should correctly update list when participant join even if participant already in the list', () => {
    jest.useFakeTimers();
    const presenceData = {
      ...MOCK_PARTICIPANT,
      color: undefined,
    };

    whoIsOnlineComponent['participants'][0] = presenceData;

    expect(whoIsOnlineComponent['participants'].length).toBe(2);
    whoIsOnlineComponent['onParticipantJoined'](presenceData);
    jest.advanceTimersByTime(1000);
    expect(whoIsOnlineComponent['participants'].length).toBe(2);
    expect(whoIsOnlineComponent['participants'][0]).toEqual({
      ...presenceData,
      color: MeetingColorsHex[presenceData.slotIndex],
    });
    jest.useRealTimers();
  });

  test("should correctly update user color if it isn't right initially", async () => {
    const fakeId = 'fake-id';
    whoIsOnlineComponent['getColorAfterDelay'](fakeId);
    await sleep(200);
    expect(whoIsOnlineComponent['participants'].map((participant) => participant.id)).not.toContain(
      'fake-id',
    );

    whoIsOnlineComponent['onParticipantJoined']({ name: 'fake', id: 'fake-id', slotIndex: 3 });
    whoIsOnlineComponent['realtime'] = Object.assign({}, ABLY_REALTIME_MOCK, {
      getParticipants: {
        ...whoIsOnlineComponent['realtime'].getParticipants,
        'fake-id': {
          data: {
            name: 'fake',
            slotIndex: 3,
            id: 'fake-id',
          },
        },
      },
    });

    await sleep(500);

    expect(whoIsOnlineComponent['participants'].map((participant) => participant.id)).toContain(
      'fake-id',
    );
  });

  test('should update list of participants already in the room if initial list is incomplete', () => {
    whoIsOnlineComponent['participants'] = [
      { name: 'participant', id: 'random-participant', slotIndex: 3 },
    ];
    whoIsOnlineComponent['onParticipantListUpdate'](
      whoIsOnlineComponent['realtime'].getParticipants,
    );

    expect(whoIsOnlineComponent['participants'].length).toBe(3); // 2 from real list + 1 from mock

    const expected = [
      { name: 'participant', id: 'random-participant', slotIndex: 3 },
      ...Object.values(whoIsOnlineComponent['realtime'].getParticipants).map((participant) => {
        const { color, avatar, id, name, participantId, slotIndex } = participant.data;
        return { color, avatar, id, name, participantId, slotIndex };
      }),
    ];

    expect(whoIsOnlineComponent['participants']).toStrictEqual(expected);
  });

  test('should interrupt update if participants list is equal to realtime participants list', () => {
    whoIsOnlineComponent['compareParticipants'] = jest.fn(
      whoIsOnlineComponent['compareParticipants'],
    );

    whoIsOnlineComponent['participants'] = Object.values(
      whoIsOnlineComponent['realtime'].getParticipants,
    ).map((participant) => {
      const { slotIndex } = participant.data;
      const color = MeetingColorsHex[slotIndex];

      return {
        ...participant.data,
        participantId: participant.id,
        color,
        slotIndex,
      };
    });

    whoIsOnlineComponent['onParticipantListUpdate'](
      whoIsOnlineComponent['realtime'].getParticipants,
    );

    expect(whoIsOnlineComponent['compareParticipants']).toBeCalled();
    expect(whoIsOnlineComponent['compareParticipants']).toHaveReturnedWith(true);
  });

  test('should update users correctly if lists having same size is a coincidence', () => {
    whoIsOnlineComponent['compareParticipants'] = jest.fn(
      whoIsOnlineComponent['compareParticipants'],
    );

    whoIsOnlineComponent['participants'] = Object.values(
      whoIsOnlineComponent['realtime'].getParticipants,
    ).map((participant) => {
      const { slotIndex } = participant.data;
      const color = MeetingColorsHex[slotIndex + 4];

      return {
        ...participant.data,
        id: participant.id + 'random',
        participantId: participant.id + 'random',
        color,
        slotIndex,
      };
    });

    whoIsOnlineComponent['onParticipantListUpdate'](
      whoIsOnlineComponent['realtime'].getParticipants,
    );

    expect(whoIsOnlineComponent['compareParticipants']).toBeCalled();
    expect(whoIsOnlineComponent['compareParticipants']).toHaveReturnedWith(false);
    expect(whoIsOnlineComponent['participants'].length).toBe(4);
  });
});
