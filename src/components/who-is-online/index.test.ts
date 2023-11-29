import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import {
  MOCK_ABLY_PARTICIPANT,
  MOCK_ABLY_PARTICIPANT_DATA_2,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
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

  test('should publish in eventBus when listens to go-to-mouse-pointer', () => {
    whoIsOnlineComponent['element'].dispatchEvent(
      new CustomEvent('go-to-mouse-pointer', { detail: { id: 'unit-test-id' } }),
    );
    expect(EVENT_BUS_MOCK.publish).toHaveBeenCalledWith('go-to-mouse-pointer', 'unit-test-id');
  });
});
