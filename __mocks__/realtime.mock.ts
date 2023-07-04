import { jest } from '@jest/globals';

import { AblyRealtimeService } from '../src/services/realtime';

import { MOCK_OBSERVER_HELPER } from './observer-helper.mock';

export const MOCK_REALTIME_SERVICE: AblyRealtimeService = {
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeaveObserver: MOCK_OBSERVER_HELPER,
  roomInfoUpdatedObserver: MOCK_OBSERVER_HELPER,
  syncPropertiesObserver: MOCK_OBSERVER_HELPER,
  participantsObserver: MOCK_OBSERVER_HELPER,
  subscribeToParticipantUpdate: jest.fn(),
  unsubscribeFromParticipantUpdate: jest.fn(),
  updateMyProperties: jest.fn(),
  subscribe: MOCK_OBSERVER_HELPER.subscribe,
  unsubscribe: MOCK_OBSERVER_HELPER.unsubscribe,
  getParticipantSlot: jest.fn(),
} as unknown as AblyRealtimeService;
