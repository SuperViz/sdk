import { jest } from '@jest/globals';

import { Plugin } from '../src/services/integration/base-plugin/types';
import {
  AvatarConfig,
  ParticipantOn3D,
  ParticipantTo3D,
} from '../src/services/integration/participants/types';

import { MOCK_AVATAR, MOCK_LOCAL_PARTICIPANT } from './participants.mock';

export const MOCK_AVATAR_CONFIG: AvatarConfig = {
  height: 1.8,
  laserOrigin: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
};

export const MOCK_PARTICIPANT_TO_3D: ParticipantTo3D = {
  id: MOCK_LOCAL_PARTICIPANT.id as string,
  name: MOCK_LOCAL_PARTICIPANT.name as string,
  avatar: MOCK_AVATAR,
  avatarConfig: MOCK_AVATAR_CONFIG,
  isAudience: false,
};

export const MOCK_PARTICIPANT_ON_3D: ParticipantOn3D = {
  ...MOCK_PARTICIPANT_TO_3D,
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  rotation: {
    x: 0,
    y: 0,
  },
};

export const MOCK_PARTICIPANT_TO_3D_LIST = new Array(16).fill(MOCK_PARTICIPANT_TO_3D);
export const MOCK_PARTICIPANT_ON_3D_LIST = new Array(16).fill(MOCK_PARTICIPANT_ON_3D);

export const MOCK_PLUGIN: Plugin = {
  createMouse: jest.fn(),
  destroyMouse: jest.fn(),
  createLaser: jest.fn(),
  destroyLaser: jest.fn(),
  createAvatar: jest.fn(),
  createName: jest.fn(),
  destroyAvatar: jest.fn(),
  enableAvatars: jest.fn(),
  disableAvatars: jest.fn(),
  enableMouse: jest.fn(),
  disableMouse: jest.fn(),
  enableLaser: jest.fn(),
  disableLaser: jest.fn(),
  goToParticipant: jest.fn(),
  gather: jest.fn(),
  init: jest.fn(),
  destroy: jest.fn(),
  getAvatars: jest.fn(() => MOCK_PARTICIPANT_ON_3D_LIST),
};
