import {
  MOCK_PARTICIPANT_ON_3D,
  MOCK_PARTICIPANT_ON_3D_LIST,
  MOCK_PARTICIPANT_TO_3D,
} from '../../../../__mocks__/plugins.mock';

import { IntegrationParticipantsManager } from './index';

describe('Integration Participants Service', () => {
  let IntegrationParticipantsManagerService: IntegrationParticipantsManager;

  beforeEach(() => {
    jest.clearAllMocks();
    IntegrationParticipantsManagerService = new IntegrationParticipantsManager();
  });

  test('should be export IntegrationParticipantsManager', () => {
    expect(IntegrationParticipantsManagerService).toBeInstanceOf(IntegrationParticipantsManager);
  });

  test('should be initialize with undefined participants', () => {
    expect(IntegrationParticipantsManagerService.participants).toEqual(undefined);
    expect(IntegrationParticipantsManagerService.participant).toEqual(undefined);
  });

  test('should be return a list of participants on 3D', () => {
    // should be return undefined if participants is not defined
    expect(IntegrationParticipantsManagerService.participants).toEqual(undefined);

    MOCK_PARTICIPANT_ON_3D_LIST.forEach((participant) => {
      IntegrationParticipantsManagerService.addParticipantToList(participant);
    });

    expect(IntegrationParticipantsManagerService.participants).toEqual(MOCK_PARTICIPANT_ON_3D_LIST);
  });

  test('should be return the local participant', () => {
    // should be return undefined if participant is not defined
    expect(IntegrationParticipantsManagerService.participant).toEqual(undefined);

    IntegrationParticipantsManagerService.setLocalParticipant(MOCK_PARTICIPANT_ON_3D);

    expect(IntegrationParticipantsManagerService.participant).toEqual(MOCK_PARTICIPANT_ON_3D);
  });

  test('should be add participant to list', () => {
    // should be return undefined if participants is not defined
    expect(IntegrationParticipantsManagerService.participants).toEqual(undefined);

    IntegrationParticipantsManagerService.addParticipantToList(MOCK_PARTICIPANT_ON_3D);

    expect(IntegrationParticipantsManagerService.participants).toContain(MOCK_PARTICIPANT_ON_3D);
  });

  test('should be remove participant from list', () => {
    // set participants before remove
    MOCK_PARTICIPANT_ON_3D_LIST.forEach((participant) => {
      IntegrationParticipantsManagerService.addParticipantToList(participant);
    });

    const participantToRemove = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: 'unit-test-participant-to-remove',
    };

    IntegrationParticipantsManagerService.addParticipantToList(participantToRemove);

    expect(IntegrationParticipantsManagerService.participants).toContain(participantToRemove);

    IntegrationParticipantsManagerService.removeParticipant(participantToRemove);

    expect(IntegrationParticipantsManagerService.participants).not.toContain(participantToRemove);
  });

  test('should create participant on 3D', () => {
    const participantOn3D =
      IntegrationParticipantsManagerService.createParticipantOn3D(MOCK_PARTICIPANT_TO_3D);

    expect(participantOn3D).toEqual(MOCK_PARTICIPANT_ON_3D);
  });
});
