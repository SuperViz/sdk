import { jest } from '@jest/globals';

import { MeetingColors, MeetingColorsHex } from '../src/common/types/meeting-colors.types';
import { AblyRealtimeService } from '../src/services/realtime';

import { MOCK_OBSERVER_HELPER } from './observer-helper.mock';
import { MOCK_ABLY_PARTICIPANT, MOCK_ABLY_PARTICIPANT_DATA_2 } from './participants.mock';

export const createRealtimeMessage = (messageName: string) => ({
  name: messageName,
  participantId: 'unit-test-participant-id',
  data: 'unit-test-data',
  timestamp: 1686342771747,
});

export const createRealtimeHistory = () => ({
  'unit-test-message-1': new Array(10).fill(createRealtimeMessage('unit-test-message-1')),
  'unit-test-message-2': new Array(10).fill(createRealtimeMessage('unit-test-message-2')),
  'unit-test-message-3': new Array(10).fill(createRealtimeMessage('unit-test-message-3')),
});

export const ABLY_REALTIME_MOCK: AblyRealtimeService = {
  isLocalParticipantHost: true,
  setFollow: jest.fn(),
  setGather: jest.fn(),
  setHost: jest.fn(),
  setGridMode: jest.fn(),
  setDrawing: jest.fn(),
  freezeSync: jest.fn(),
  setParticipantData: jest.fn(),
  setSyncProperty: jest.fn(),
  setKickParticipant: jest.fn(),
  setTranscript: jest.fn(),
  start: jest.fn(),
  join: jest.fn(),
  leave: jest.fn(),
  setFollowParticipant: jest.fn(),
  setGatherWIOParticipant: jest.fn(),
  domainWhitelisted: true,
  isDomainWhitelisted: jest.fn().mockReturnValue(true),
  fetchSyncClientProperty: jest.fn((key?: string) => {
    if (key) {
      return createRealtimeMessage(key);
    }

    return createRealtimeHistory();
  }),
  getSlotColor: jest.fn().mockReturnValue({
    color: MeetingColorsHex[0],
    name: MeetingColors[0],
  }),
  getParticipants: {
    'unit-test-participant1-id': { ...MOCK_ABLY_PARTICIPANT },
    'unit-test-participant2-id': {
      ...MOCK_ABLY_PARTICIPANT,
      data: MOCK_ABLY_PARTICIPANT_DATA_2,
    },
  },
  roomInfoUpdatedObserver: MOCK_OBSERVER_HELPER,
  participantsObserver: MOCK_OBSERVER_HELPER,
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeaveObserver: MOCK_OBSERVER_HELPER,
  hostObserver: MOCK_OBSERVER_HELPER,
  syncPropertiesObserver: MOCK_OBSERVER_HELPER,
  kickAllParticipantsObserver: MOCK_OBSERVER_HELPER,
  kickParticipantObserver: MOCK_OBSERVER_HELPER,
  authenticationObserver: MOCK_OBSERVER_HELPER,
  commentsObserver: MOCK_OBSERVER_HELPER,
  hostAvailabilityObserver: MOCK_OBSERVER_HELPER,
  presenceMouseParticipantLeaveObserver: MOCK_OBSERVER_HELPER,
  presenceMouseParticipantJoinedObserver: MOCK_OBSERVER_HELPER,
  presenceMouseObserver: MOCK_OBSERVER_HELPER,
  domainRefusedObserver: MOCK_OBSERVER_HELPER,
  presenceSlotsInfosObserver: MOCK_OBSERVER_HELPER,
  presenceWIOObserver: MOCK_OBSERVER_HELPER,
  privateModeWIOObserver: MOCK_OBSERVER_HELPER,
  followWIOObserver: MOCK_OBSERVER_HELPER,
  gatherWIOObserver: MOCK_OBSERVER_HELPER,
  sameAccountObserver: MOCK_OBSERVER_HELPER,
  subscribeToParticipantUpdate: jest.fn(),
  unsubscribeFromParticipantUpdate: jest.fn(),
  updateMyProperties: jest.fn(),
  getParticipantSlot: jest.fn(),
  updateComments: jest.fn(),
  updatePresenceMouse: jest.fn(),
  setPrivateWIOParticipant: jest.fn(),
  setFollowWIOParticipant: jest.fn(),
  leavePresenceMouseChannel: jest.fn(),
  enterPresenceMouseChannel: jest.fn(),
  enterWIOChannel: jest.fn(),
  leaveWIOChannel: jest.fn(),
  setKickParticipantsOnHostLeave: jest.fn(),
} as unknown as AblyRealtimeService;
