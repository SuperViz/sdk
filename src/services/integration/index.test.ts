import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import {
  MOCK_INTEGRATION_MANAGER_OPTIONS,
  MOCK_PARTICIPANT_ON_3D,
  MOCK_PARTICIPANT_ON_3D_LIST,
  MOCK_PARTICIPANT_TO_3D,
} from '../../../__mocks__/plugins.mock';
import { AblyParticipant } from '../realtime/ably/types';

import { IntegrationParticipantsManager } from './participants';
import { ParticipantOn3D, ParticipantTo3D, Position } from './participants/types';

import { IntegrationManager } from './index';

jest.mock('./participants', () => {
  return {
    IntegrationParticipantsManager: jest.fn().mockImplementation(() => {
      return {
        participant: MOCK_PARTICIPANT_ON_3D,
        participants: MOCK_PARTICIPANT_ON_3D_LIST,
        createParticipantOn3D: jest.fn((participant: ParticipantTo3D) => {
          return {
            ...MOCK_PARTICIPANT_ON_3D,
            id: participant.id,
          };
        }),
        addParticipantToList: jest.fn((participant) => {
          MOCK_PARTICIPANT_ON_3D_LIST.push(participant);
        }),
        removeParticipant: jest.fn((participant) => {
          const index = MOCK_PARTICIPANT_ON_3D_LIST.findIndex((p) => p.id === participant.id);
          MOCK_PARTICIPANT_ON_3D_LIST.splice(index, 1);
        }),
        setLocalParticipant: jest.fn(),
      };
    }),
  };
});

describe('Integration Service', () => {
  let IntegrationManagerService: IntegrationManager;

  beforeEach(() => {
    jest.clearAllMocks();
    IntegrationManagerService = new IntegrationManager(MOCK_INTEGRATION_MANAGER_OPTIONS);
  });

  describe('participants manager', () => {
    test('should be create a new participant manager', () => {
      expect(IntegrationParticipantsManager).toHaveBeenCalledTimes(1);
    });

    test('should be return a participant on 3D list', () => {
      expect(IntegrationManagerService.participants).toEqual(MOCK_PARTICIPANT_ON_3D_LIST);
    });
  });

  test('should be return a list of participants on 3D', () => {
    expect(IntegrationManagerService.participants).toEqual(MOCK_PARTICIPANT_ON_3D_LIST);
  });

  test('should be return the local participant on 3D', () => {
    expect(IntegrationManagerService.localParticipant).toEqual(MOCK_PARTICIPANT_ON_3D);
  });

  test('should be add a participant on 3D', () => {
    jest.spyOn(IntegrationManagerService, 'createAvatar');
    jest.spyOn(IntegrationManagerService, 'createMouse');
    jest.spyOn(IntegrationManagerService, 'createLaser');

    const participantToBeAdded = {
      ...MOCK_PARTICIPANT_TO_3D,
      id: 'unit-test-participant-to-be-added-id',
    };

    const expectedParticipant = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeAdded.id,
    };

    IntegrationManagerService.addParticipant(participantToBeAdded);

    expect(IntegrationManagerService.createAvatar).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.createMouse).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.createLaser).toBeCalledWith(expectedParticipant);

    expect(IntegrationManagerService.RealtimeService.subscribeToParticipantUpdate).toBeCalled();

    expect(IntegrationManagerService.participants).toContainEqual(expectedParticipant);
  });

  test('should be remove a participant on 3D and unsubscribe to updates', () => {
    jest.spyOn(IntegrationManagerService, 'destroyAvatar');
    jest.spyOn(IntegrationManagerService, 'destroyMouse');
    jest.spyOn(IntegrationManagerService, 'destroyLaser');

    const participantToBeRemoved = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: 'unit-test-participant-to-be-removed-id',
    };

    const expectedParticipant = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeRemoved.id,
    };

    // add participant to be removed
    IntegrationManagerService.addParticipant(participantToBeRemoved);
    expect(IntegrationManagerService.participants).toContainEqual(expectedParticipant);

    // create avatar calls the destroy methods before creating the avatar
    expect(IntegrationManagerService.destroyAvatar).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.destroyMouse).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.destroyLaser).toBeCalledWith(expectedParticipant);

    IntegrationManagerService.removeParticipant(participantToBeRemoved, true);

    expect(IntegrationManagerService.RealtimeService.unsubscribeFromParticipantUpdate).toBeCalled();

    // remove participant
    expect(IntegrationManagerService.destroyAvatar).toBeCalledTimes(2);
    expect(IntegrationManagerService.destroyMouse).toBeCalledTimes(2);
    expect(IntegrationManagerService.destroyLaser).toBeCalledTimes(2);

    expect(IntegrationManagerService.participants).not.toContainEqual(expectedParticipant);
  });

  test('should be remove a participant on 3D and keep subscribed to updates', () => {
    jest.spyOn(IntegrationManagerService, 'destroyAvatar');
    jest.spyOn(IntegrationManagerService, 'destroyMouse');
    jest.spyOn(IntegrationManagerService, 'destroyLaser');

    const participantToBeRemoved = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: 'unit-test-participant-to-be-removed-id',
    };

    const expectedParticipant = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeRemoved.id,
    };

    // add participant to be removed
    IntegrationManagerService.addParticipant(participantToBeRemoved);
    expect(IntegrationManagerService.participants).toContainEqual(expectedParticipant);

    // create avatar calls the destroy methods before creating the avatar
    expect(IntegrationManagerService.destroyAvatar).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.destroyMouse).toBeCalledWith(expectedParticipant);
    expect(IntegrationManagerService.destroyLaser).toBeCalledWith(expectedParticipant);

    IntegrationManagerService.removeParticipant(participantToBeRemoved, false);

    expect(
      IntegrationManagerService.RealtimeService.unsubscribeFromParticipantUpdate,
    ).not.toBeCalled();

    // remove participant
    expect(IntegrationManagerService.destroyAvatar).toBeCalledTimes(2);
    expect(IntegrationManagerService.destroyMouse).toBeCalledTimes(2);
    expect(IntegrationManagerService.destroyLaser).toBeCalledTimes(2);

    expect(IntegrationManagerService.participants).not.toContainEqual(expectedParticipant);
  });

  test('should be update a participant on 3D', () => {
    jest.spyOn(IntegrationManagerService, 'createAvatar');
    jest.spyOn(IntegrationManagerService, 'createMouse');
    jest.spyOn(IntegrationManagerService, 'createLaser');
    jest.spyOn(IntegrationManagerService, 'removeParticipant');

    const participantToBeUpdated: ParticipantOn3D = {
      ...MOCK_PARTICIPANT_ON_3D,
      avatarConfig: {
        height: 1,
        scale: 100,
        laserOrigin: MOCK_PARTICIPANT_ON_3D.avatarConfig?.laserOrigin as Position,
      },
      rotation: {
        x: 1,
        y: 1,
      },
    };

    IntegrationManagerService.updateParticipant(participantToBeUpdated);
    expect(IntegrationManagerService.removeParticipant).toBeCalledWith(
      participantToBeUpdated,
      false,
    );

    expect(IntegrationManagerService.createAvatar).toBeCalledWith(MOCK_PARTICIPANT_ON_3D);
    expect(IntegrationManagerService.createMouse).toBeCalledWith(MOCK_PARTICIPANT_ON_3D);
    expect(IntegrationManagerService.createLaser).toBeCalledWith(MOCK_PARTICIPANT_ON_3D);

    expect(IntegrationManagerService.participants).toContain(MOCK_PARTICIPANT_ON_3D);
  });

  test('should be update a participant on 3D and add it if it does not exist', () => {
    jest.spyOn(IntegrationManagerService, 'removeParticipant');
    jest.spyOn(IntegrationManagerService, 'addParticipant');

    const participantToBeUpdated: ParticipantOn3D = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: 'unit-test-participant-to-be-updated-id',
    };

    IntegrationManagerService.updateParticipant(participantToBeUpdated);

    expect(IntegrationManagerService.removeParticipant).not.toBeCalled();
    expect(IntegrationManagerService.addParticipant).toBeCalledWith(participantToBeUpdated);
  });

  test('should be skip update a participant on 3D if it does not provied', () => {
    jest.spyOn(IntegrationManagerService, 'removeParticipant');
    jest.spyOn(IntegrationManagerService, 'addParticipant');

    IntegrationManagerService.updateParticipant(undefined as any);

    expect(IntegrationManagerService.removeParticipant).not.toBeCalled();
    expect(IntegrationManagerService.addParticipant).not.toBeCalled();
  });

  // refactor this method and test
  test('should be add participant in the list if it does existis and the properties is same', () => {
    jest.spyOn(IntegrationManagerService, 'removeParticipant');
    jest.spyOn(IntegrationManagerService, 'addParticipant');

    const participantToBeUpdated: ParticipantOn3D = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: 'unit-test-participant-to-be-updated-id',
    };

    IntegrationManagerService.updateParticipant(participantToBeUpdated);

    expect(IntegrationManagerService.removeParticipant).not.toBeCalled();
    expect(IntegrationManagerService.addParticipant).not.toBeCalled();
  });

  test('should be remove the participant when the participant leave the room', () => {
    jest.spyOn(IntegrationManagerService, 'removeParticipant');

    const participantToBeRemoved: Partial<AblyParticipant> = {
      clientId: 'unit-test-participant-to-be-removed-id',
    };

    const participantExpected = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeRemoved.clientId as string,
    };

    IntegrationManagerService.addParticipant(participantExpected);

    // mock realtime calls - improve that later
    // @ts-ignore
    IntegrationManagerService.onParticipantLeave(participantToBeRemoved);

    expect(IntegrationManagerService.removeParticipant).toBeCalledWith(participantExpected, true);
  });

  test('should be skip if the participant leaves and the participant list is empty', () => {
    jest.spyOn(IntegrationManagerService, 'removeParticipant');
    jest.spyOn(IntegrationManagerService, 'participants', 'get').mockReturnValue([]);

    const participantToBeRemoved: Partial<AblyParticipant> = {
      clientId: 'unit-test-participant-to-be-removed-id',
    };

    const participantExpected = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeRemoved.clientId as string,
    };

    IntegrationManagerService.addParticipant(participantExpected);

    // mock realtime calls - improve that later
    // @ts-ignore
    IntegrationManagerService.onParticipantLeave(participantToBeRemoved);

    expect(IntegrationManagerService.removeParticipant).not.toBeCalled();
  });

  test('should be update participant when the participant information is updated in the RealtimeService', () => {
    jest.spyOn(IntegrationManagerService, 'updateParticipant');

    const { name, avatar, position, rotation, avatarConfig } = MOCK_PARTICIPANT_ON_3D;

    const participantToBeUpdated: Partial<AblyParticipant> = {
      clientId: 'unit-test-participant-to-be-uptated-id',
      data: {
        participantId: 'unit-test-participant-to-be-uptated-id',
        ...MOCK_PARTICIPANT_ON_3D,
      },
    };

    const participantExpected = {
      ...MOCK_PARTICIPANT_ON_3D,
      id: participantToBeUpdated.clientId as string,
    };

    // add participant to the list
    IntegrationManagerService.addParticipant(participantExpected);

    // mock realtime calls - improve that later
    // @ts-ignore
    IntegrationManagerService.onParticipantUpdated(participantToBeUpdated);

    expect(IntegrationManagerService.updateParticipant).toBeCalledWith({
      position,
      rotation,
      id: 'unit-test-participant-to-be-uptated-id',
      name,
      avatar,
      avatarConfig,
    });
  });

  test('should be add participant when the participant join the realtime room', () => {
    jest.spyOn(IntegrationManagerService, 'addParticipant');

    const { name, avatar, position, rotation, avatarConfig, isAudience } = MOCK_PARTICIPANT_ON_3D;

    const participantToBeAdded: Partial<AblyParticipant> = {
      clientId: 'unit-test-participant-to-be-added-id',
      data: {
        participantId: 'unit-test-participant-to-be-added-id',
        ...MOCK_PARTICIPANT_ON_3D,
      },
    };

    // @ts-ignore
    IntegrationManagerService.onParticipantJoined(participantToBeAdded);

    expect(IntegrationManagerService.addParticipant).toBeCalledWith({
      id: 'unit-test-participant-to-be-added-id',
      name,
      avatar,
      avatarConfig,
      isAudience,
    });
  });
});
