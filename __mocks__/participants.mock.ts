import { Avatar, Participant, ParticipantType } from '../src/common/types/participant.types';

export const MOCK_AVATAR: Avatar = {
  model: 'unit-test-avatar-model.glb',
  thumbnail: 'unit-test-avatar-thumbnail.png',
};

export const MOCK_LOCAL_PARTICIPANT: Participant = {
  id: 'unit-test-local-participant-id',
  name: 'unit-test-local-participant-name',
  color: '#000',
  type: ParticipantType.HOST,
};
