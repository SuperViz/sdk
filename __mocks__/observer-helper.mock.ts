import { jest } from '@jest/globals';
import { ObserverHelper } from '@superviz/immersive-core';

export const MOCK_OBSERVER_HELPER: ObserverHelper = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  publish: jest.fn(),
  reset: jest.fn(),
  destroy: jest.fn(),
} as unknown as ObserverHelper;
