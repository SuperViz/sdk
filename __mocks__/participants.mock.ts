import { Avatar, Group, Participant, ParticipantType } from '../src';
import { AblyParticipant } from '../src/services/realtime/ably/types';

export const MOCK_AVATAR: Avatar = {
  imageUrl: 'unit-test-avatar-thumbnail.png',
  model3DUrl: 'unit-test-avatar-model.glb',
};

export const MOCK_LOCAL_PARTICIPANT: Participant = {
  id: 'unit-test-local-participant-id',
  name: 'unit-test-local-participant-name',
  color: '#000',
};

export const MOCK_GROUP: Group = {
  id: 'unit-test-group-id',
  name: 'unit-test-group-name',
};

export const MOCK_ABLY_PARTICIPANT: AblyParticipant = {
  clientId: MOCK_LOCAL_PARTICIPANT.id,
  action: 'present',
  connectionId: 'connection1',
  encoding: 'h264',
  id: 'unit-test-participant1-ably-id',
  timestamp: new Date().getTime(),
  data: {
    participantId: MOCK_LOCAL_PARTICIPANT.id,
    slotIndex: 0,
  },
};
