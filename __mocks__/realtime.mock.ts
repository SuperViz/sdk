import { jest } from '@jest/globals';

import { MeetingColors, MeetingColorsHex } from '../src/common/types/meeting-colors.types';
import { AblyRealtimeService } from '../src/services/realtime';

import { MOCK_OBSERVER_HELPER } from './observer-helper.mock';

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
  isJoinedRoom: false,
  isLocalParticipantHost: true,
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
  roomInfoUpdatedObserver: MOCK_OBSERVER_HELPER,
  participantsObserver: MOCK_OBSERVER_HELPER,
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeaveObserver: MOCK_OBSERVER_HELPER,
  hostObserver: MOCK_OBSERVER_HELPER,
  syncPropertiesObserver: MOCK_OBSERVER_HELPER,
  kickAllParticipantsObserver: MOCK_OBSERVER_HELPER,
  kickParticipantObserver: MOCK_OBSERVER_HELPER,
  authenticationObserver: MOCK_OBSERVER_HELPER,
  subscribeToParticipantUpdate: jest.fn(),
  unsubscribeFromParticipantUpdate: jest.fn(),
  updateMyProperties: jest.fn(),
  getParticipantSlot: jest.fn(),
} as unknown as AblyRealtimeService;
