import Ably from 'ably';

import { MOCK_ANNOTATION } from '../../../__mocks__/comments.mock';
import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import {
  MOCK_ABLY_PARTICIPANT_DATA_1,
  MOCK_AVATAR,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { MeetingColors, MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { ParticipantType } from '../../common/types/participant.types';
import sleep from '../../common/utils/sleep';
import { Launcher } from '../../core/launcher';
import { LauncherOptions } from '../../core/launcher/types';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyParticipant } from '../../services/realtime/ably/types';

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

  beforeEach(() => {
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

  test('should update participants when participant joins', () => {
    const gray = MeetingColorsHex[16];

    const presenceData: Ably.Types.PresenceMessage = {
      extras: null,
      action: 'enter',
      clientId: 'participant2',
      connectionId: 'connection2',
      encoding: 'h264',
      data: {
        id: 'participant2',
        name: 'participant2',
        color: gray,
        avatar: '',
      },
      id: 'unit-test-participant-ably-id',
      timestamp: new Date().getTime(),
    };

    const currentParticipants = [...whoIsOnlineComponent['participants']];

    whoIsOnlineComponent['onParticipantJoined'](presenceData);
    expect(whoIsOnlineComponent['participants'].length).toBe(3);
    expect(whoIsOnlineComponent['participants']).toEqual([
      ...currentParticipants,
      presenceData.data,
    ]);
  });

  test('should remove participant from participants list on leave', () => {
    const presenceData = {
      data: {
        ...MOCK_PARTICIPANT,
      },
    };

    expect(whoIsOnlineComponent['participants'].length).toBe(2);
    expect(whoIsOnlineComponent['participants'][0]).toEqual(MOCK_PARTICIPANT);

    whoIsOnlineComponent['onParticipantLeave'](presenceData);

    expect(whoIsOnlineComponent['participants'].length).toBe(1);
    expect(whoIsOnlineComponent['participants'][0]).not.toEqual(MOCK_PARTICIPANT);
  });

  test('should change slot color', () => {
    const { id, color, slotIndex } = whoIsOnlineComponent['participants'][0];

    expect(color).toBe(MOCK_PARTICIPANT.color);

    const numberOfColors = Object.keys(MeetingColorsHex).length / 2;
    let newSlot = slotIndex;
    while (slotIndex === newSlot) {
      newSlot = (newSlot + 1) % numberOfColors;
    }

    whoIsOnlineComponent['onSlotChange']({ id, slotIndex: newSlot });

    expect(whoIsOnlineComponent['participants'][0].color).not.toBe(color);
    expect(whoIsOnlineComponent['participants'][0].color).toBe(MeetingColorsHex[newSlot]);
  });

  test('should position component inside div if id is provided', async () => {
    whoIsOnlineComponent['element'].remove();
    const div = document.createElement('div');

    sleep();

    div.id = 'unit-test-div';
    document.body.appendChild(div);
    whoIsOnlineComponent['location'] = 'unit-test-div';
    whoIsOnlineComponent['positionWhoIsOnline']();

    expect(div.parentElement).toBe(document.body);
    expect(whoIsOnlineComponent['element'].parentElement).toBe(div);
    expect(whoIsOnlineComponent['element'].position).toBe('position: relative;');
  });

  test('should position at top-right if no id is provided', async () => {
    expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
    expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 20px;');
  });

  test('should position at top-right if invalid id is provided', async () => {
    whoIsOnlineComponent['element'].remove();
    const randomIdNumber = Math.ceil(Math.random() * 100);
    whoIsOnlineComponent['location'] = `random-id${randomIdNumber}`;
    whoIsOnlineComponent['positionWhoIsOnline']();

    expect(whoIsOnlineComponent['element'].parentElement).toBe(document.body);
    expect(whoIsOnlineComponent['element'].position).toBe('top: 20px; right: 20px;');
  });

  test('should update participants when update occurs', () => {
    const oldParticipants = [...whoIsOnlineComponent['participants']];
    const newParticipants = oldParticipants.map((participant) => {
      return {
        ...participant,
        color: MeetingColorsHex[participant.slotIndex + 1],
      };
    });

    newParticipants.push(MOCK_ABLY_PARTICIPANT_DATA_1);

    expect(whoIsOnlineComponent['participants']).toEqual(oldParticipants);

    const onUpdate = whoIsOnlineComponent['onWhoIsOnlineUpdate'];
    whoIsOnlineComponent['onWhoIsOnlineUpdate'] = jest.fn(onUpdate);
    whoIsOnlineComponent['onWhoIsOnlineUpdate']({
      clientId: 'unit-test-remote-participant-id',
      data: newParticipants,
    });

    expect(whoIsOnlineComponent['onWhoIsOnlineUpdate']).toHaveBeenCalledTimes(1);
    expect(whoIsOnlineComponent['participants']).not.toEqual(oldParticipants);
    expect(whoIsOnlineComponent['participants']).toEqual(newParticipants);
  });

  test('should not update participantes when update occurs if local user published the update', () => {
    const oldParticipants = [...whoIsOnlineComponent['participants']];
    const newParticipants = oldParticipants.map((participant) => {
      return {
        ...participant,
        color: MeetingColorsHex[participant.slotIndex + 1],
      };
    });

    newParticipants.push(MOCK_ABLY_PARTICIPANT_DATA_1);

    expect(whoIsOnlineComponent['participants']).toEqual(oldParticipants);

    const onUpdate = whoIsOnlineComponent['onWhoIsOnlineUpdate'];
    whoIsOnlineComponent['onWhoIsOnlineUpdate'] = jest.fn(onUpdate);
    whoIsOnlineComponent['onWhoIsOnlineUpdate']({
      clientId: whoIsOnlineComponent['localParticipant'].id,
      data: newParticipants,
    });

    expect(whoIsOnlineComponent['onWhoIsOnlineUpdate']).toHaveBeenCalledTimes(1);
    expect(whoIsOnlineComponent['participants']).toEqual(oldParticipants);
    expect(whoIsOnlineComponent['participants']).not.toEqual(newParticipants);
  });
});
