import { MOCK_OBSERVER_HELPER } from '../../../../__mocks__/observer-helper.mock';
import { MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import {
  MOCK_INTEGRATION_MANAGER_OPTIONS,
  MOCK_PARTICIPANT_ON_3D,
  MOCK_PARTICIPANT_TO_3D,
  MOCK_PLUGIN,
} from '../../../../__mocks__/plugins.mock';

import { BasePluginManager } from '.';

describe('Base Plugin Service', () => {
  let BasePluginManagerService: BasePluginManager;

  beforeEach(() => {
    jest.clearAllMocks();
    BasePluginManagerService = new BasePluginManager(MOCK_INTEGRATION_MANAGER_OPTIONS);
  });

  test('should be return a instance of BasePluginManager', () => {
    expect(BasePluginManagerService).toBeInstanceOf(BasePluginManager);
  });

  test('should be initialize the plugin', () => {
    expect(BasePluginManagerService.plugin).toBeDefined();
    expect(MOCK_PLUGIN.init).toBeCalledTimes(1);
  });

  test('shoul be initialize the plugin with the correct parameters', () => {
    expect(BasePluginManagerService.plugin).toBeDefined();
    expect(MOCK_PLUGIN.init).toBeCalledWith(
      {
        subscribeToParticipantsObserver: expect.any(Function),
        unsubscribeToParticipantsObserver: expect.any(Function),
        subscribeToParticipantUpdate: expect.any(Function),
        unsubscribeToParticipantUpdate: expect.any(Function),
        updateMyProperties: expect.any(Function),
        subscribe: expect.any(Function),
        unsubscribe: expect.any(Function),
        getParticipantSlot: expect.any(Function),
      },
      MOCK_PARTICIPANT_TO_3D,
    );
  });

  test('should be enable avatars', () => {
    BasePluginManagerService.disableAvatars();
    expect(BasePluginManagerService.isAvatarsEnabled).toBeFalsy();

    BasePluginManagerService.enableAvatars();
    expect(BasePluginManagerService.isAvatarsEnabled).toBeTruthy();
  });

  test('should be disable avatars', () => {
    BasePluginManagerService.enableAvatars();
    expect(BasePluginManagerService.isAvatarsEnabled).toBeTruthy();

    BasePluginManagerService.disableAvatars();
    expect(BasePluginManagerService.isAvatarsEnabled).toBeFalsy();
  });

  test('should be enable mouse', () => {
    BasePluginManagerService.disableMouse();
    expect(BasePluginManagerService.isMouseEnabled).toBeFalsy();

    BasePluginManagerService.enableMouse();
    expect(BasePluginManagerService.isMouseEnabled).toBeTruthy();
  });

  test('should be disable mouse', () => {
    BasePluginManagerService.enableMouse();
    expect(BasePluginManagerService.isMouseEnabled).toBeTruthy();

    BasePluginManagerService.disableMouse();
    expect(BasePluginManagerService.isMouseEnabled).toBeFalsy();
  });

  test('should be enable laser', () => {
    BasePluginManagerService.disableLaser();
    expect(BasePluginManagerService.isLaserEnabled).toBeFalsy();

    BasePluginManagerService.enableLaser();
    expect(BasePluginManagerService.isLaserEnabled).toBeTruthy();
  });

  test('should be disable laser', () => {
    BasePluginManagerService.enableLaser();
    expect(BasePluginManagerService.isLaserEnabled).toBeTruthy();

    BasePluginManagerService.disableLaser();
    expect(BasePluginManagerService.isLaserEnabled).toBeFalsy();
  });

  test('should be create an avatar for the participant', async () => {
    await BasePluginManagerService.createAvatar(MOCK_PARTICIPANT_ON_3D);

    expect(MOCK_PLUGIN.destroyAvatar).toBeCalledTimes(1);
    expect(MOCK_PLUGIN.createAvatar).toBeCalledTimes(1);
    expect(MOCK_PLUGIN.createName).toBeCalledTimes(1);
  });

  test('should be destroy an avatar for the participant', async () => {
    await BasePluginManagerService.createAvatar(MOCK_PARTICIPANT_ON_3D);
    BasePluginManagerService.destroyAvatar(MOCK_PARTICIPANT_ON_3D);

    /**
     * called 2 times because the createAvatar method calls the
     * destroyAvatar method before creating the avatar
     */
    expect(MOCK_PLUGIN.destroyAvatar).toBeCalledTimes(2);
  });

  test('should be create a mouse for the participant', () => {
    BasePluginManagerService.createMouse(MOCK_PARTICIPANT_ON_3D);

    expect(MOCK_PLUGIN.destroyMouse).toBeCalledTimes(1);
    expect(MOCK_PLUGIN.createMouse).toBeCalledTimes(1);
  });

  test('should be destroy a mouse for the participant', () => {
    BasePluginManagerService.createMouse(MOCK_PARTICIPANT_ON_3D);
    BasePluginManagerService.destroyMouse(MOCK_PARTICIPANT_ON_3D);

    /**
     * called 2 times because the createMouse method calls the
     * destroyMouse method before creating the mouse
     */
    expect(MOCK_PLUGIN.destroyMouse).toBeCalledTimes(2);
  });

  test('should be create a laser for the participant', () => {
    BasePluginManagerService.createLaser(MOCK_PARTICIPANT_ON_3D);

    expect(MOCK_PLUGIN.destroyLaser).toBeCalledTimes(1);
    expect(MOCK_PLUGIN.createLaser).toBeCalledTimes(1);
  });

  test('should be destroy a laser for the participant', () => {
    BasePluginManagerService.createLaser(MOCK_PARTICIPANT_ON_3D);
    BasePluginManagerService.destroyLaser(MOCK_PARTICIPANT_ON_3D);

    /**
     * called 2 times because the createLaser method calls the
     * destroyLaser method before creating the laser
     * */

    expect(MOCK_PLUGIN.destroyLaser).toBeCalledTimes(2);
  });

  test('should go to participant', () => {
    BasePluginManagerService.goToParticipant(MOCK_PARTICIPANT_ON_3D.id);

    expect(MOCK_PLUGIN.goToParticipant).toBeCalledTimes(1);
  });
});
