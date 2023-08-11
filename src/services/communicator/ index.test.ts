import exp from 'constants';

import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import {
  MOCK_AVATAR_CONFIG,
  MOCK_PARTICIPANT_TO_3D,
  MOCK_PLUGIN,
} from '../../../__mocks__/plugins.mock';
import {
  MeetingControlsEvent,
  RealtimeEvent,
  TranscriptionEvent,
} from '../../common/types/events.types';
import { AblyRealtimeService } from '../realtime';

import { CommunicatorOptions, SuperVizSdk } from './types';

import Communicator from '.';

const createRealtimeMessage = (messageName: string) => ({
  name: messageName,
  participantId: 'unit-test-participant-id',
  data: 'unit-test-data',
  timestamp: 1686342771747,
});

const createRealtimeHistory = () => ({
  'unit-test-message-1': new Array(10).fill(createRealtimeMessage('unit-test-message-1')),
  'unit-test-message-2': new Array(10).fill(createRealtimeMessage('unit-test-message-2')),
  'unit-test-message-3': new Array(10).fill(createRealtimeMessage('unit-test-message-3')),
});

const COMMUNICATOR_INITIALIZATION_MOCK: CommunicatorOptions = {
  apiKey: 'unit-test-api-key',
  ablyKey: 'unit-test-ably-key',
  conferenceLayerUrl: 'https://unit-test-conference-layer-url.com',
  apiUrl: 'https://unit-test-apiurl.com',
  roomId: 'unit-test-room-id',
  participant: {
    id: 'unit-test-participant-id',
    name: 'unit-test-participant-name',
  },
  group: {
    name: 'unit-test-group-test-name',
    id: 'unit-test-group-test-id',
  },
};

const AblyRealtimeMock = {
  setGather: jest.fn(),
  setParticipantData: jest.fn(),
  setSyncProperty: jest.fn(),
  start: jest.fn(),
  leave: jest.fn(),
  setFollowParticipant: jest.fn(),
  fetchSyncClientProperty: jest.fn((key?: string) => {
    if (key) {
      return createRealtimeMessage(key);
    }

    return createRealtimeHistory();
  }),
  roomInfoUpdatedObserver: MOCK_OBSERVER_HELPER,
  participantsObserver: MOCK_OBSERVER_HELPER,
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeaveObserver: MOCK_OBSERVER_HELPER,
  hostObserver: MOCK_OBSERVER_HELPER,
  hostAvailabilityObserver: MOCK_OBSERVER_HELPER,
  syncPropertiesObserver: MOCK_OBSERVER_HELPER,
  kickAllParticipantsObserver: MOCK_OBSERVER_HELPER,
  kickParticipantObserver: MOCK_OBSERVER_HELPER,
  authenticationObserver: MOCK_OBSERVER_HELPER,
};

const VideoManagerMock = {
  leave: jest.fn(),
  publishMessageToFrame: jest.fn(),
  frameStateObserver: MOCK_OBSERVER_HELPER,
  frameSizeObserver: MOCK_OBSERVER_HELPER,
  realtimeObserver: MOCK_OBSERVER_HELPER,
  hostChangeObserver: MOCK_OBSERVER_HELPER,
  kickParticipantObserver: MOCK_OBSERVER_HELPER,
  gridModeChangeObserver: MOCK_OBSERVER_HELPER,
  drawingChangeObserver: MOCK_OBSERVER_HELPER,
  followParticipantObserver: MOCK_OBSERVER_HELPER,
  goToParticipantObserver: MOCK_OBSERVER_HELPER,
  gatherParticipantsObserver: MOCK_OBSERVER_HELPER,
  waitingForHostObserver: MOCK_OBSERVER_HELPER,
  sameAccountErrorObserver: MOCK_OBSERVER_HELPER,
  devicesObserver: MOCK_OBSERVER_HELPER,
  meetingStateObserver: MOCK_OBSERVER_HELPER,
  meetingConnectionObserver: MOCK_OBSERVER_HELPER,
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeftObserver: MOCK_OBSERVER_HELPER,
};

jest.mock('../realtime', () => ({
  AblyRealtimeService: jest.fn().mockImplementation(() => AblyRealtimeMock),
}));

jest.mock('../video-conference-manager', () => {
  return jest.fn().mockImplementation(() => VideoManagerMock);
});

describe('Communicator', () => {
  test('should be defined', () => {
    expect(Communicator).toBeDefined();
  });

  test('should exprt a function', () => {
    expect(typeof Communicator).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof Communicator(COMMUNICATOR_INITIALIZATION_MOCK)).toBe('object');
  });

  test('should return an object with the expected properties', () => {
    const communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    expect(communicator).toHaveProperty('setSyncProperty');
    expect(communicator).toHaveProperty('subscribe');
    expect(communicator).toHaveProperty('unsubscribe');
    expect(communicator).toHaveProperty('destroy');
    expect(communicator).toHaveProperty('follow');
    expect(communicator).toHaveProperty('fetchSyncProperty');
    expect(communicator).toHaveProperty('gather');
    expect(communicator).toHaveProperty('goTo');
    expect(communicator).toHaveProperty('toggleMeetingSetup');
    expect(communicator).toHaveProperty('toggleMicrophone');
    expect(communicator).toHaveProperty('toggleScreenShare');
    expect(communicator).toHaveProperty('hangUp');
    expect(communicator).toHaveProperty('toggleCam');
    expect(communicator).toHaveProperty('toggleChat');
    expect(communicator).toHaveProperty('startTranscription');
    expect(communicator).toHaveProperty('stopTranscription');
    expect(communicator).toHaveProperty('loadPlugin');
    expect(communicator).toHaveProperty('unloadPlugin');
  });

  describe('setSyncProperty', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the setSyncProperty method of the realtime service', () => {
      communicator.setSyncProperty('test', 'test');

      expect(AblyRealtimeMock.setSyncProperty).toHaveBeenCalledTimes(1);
    });

    test('should call the setSyncProperty method of the realtime service with the expected arguments', () => {
      communicator.setSyncProperty('test', 'test');

      expect(AblyRealtimeMock.setSyncProperty).toHaveBeenCalledWith('test', 'test');
    });
  });

  describe('subscribe', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the subscribe method', () => {
      const callback = jest.fn();
      jest.spyOn(communicator, 'subscribe');
      communicator.subscribe('test', callback);

      expect(communicator.subscribe).toBeCalledWith('test', callback);
    });
  });

  describe('unsubscribe', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the unsubscribe method', () => {
      jest.spyOn(communicator, 'unsubscribe');
      communicator.subscribe('test', jest.fn());
      communicator.unsubscribe('test');

      expect(communicator.unsubscribe).toBeCalledWith('test');
    });

    test('should skip the unsubscribe method if the event is not subscribed', () => {
      jest.spyOn(communicator, 'unsubscribe');
      communicator.unsubscribe('test');

      expect(communicator.unsubscribe).toBeCalledWith('test');
    });
  });

  describe('destroy', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the destroy method', () => {
      jest.spyOn(communicator, 'destroy');
      communicator.destroy();

      expect(communicator.destroy).toBeCalledTimes(1);
      expect(AblyRealtimeMock.leave).toBeCalledTimes(1);
      expect(VideoManagerMock.leave).toBeCalledTimes(1);
      expect(AblyRealtimeMock.roomInfoUpdatedObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.participantsObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.participantJoinedObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.participantLeaveObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.hostObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.hostAvailabilityObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.syncPropertiesObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.kickAllParticipantsObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.kickParticipantObserver.unsubscribe).toBeCalled();
      expect(AblyRealtimeMock.authenticationObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.frameStateObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.frameSizeObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.realtimeObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.hostChangeObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.kickParticipantObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.followParticipantObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.goToParticipantObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.gatherParticipantsObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.gridModeChangeObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.drawingChangeObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.sameAccountErrorObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.devicesObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.participantLeftObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.meetingStateObserver.unsubscribe).toBeCalled();
      expect(VideoManagerMock.meetingConnectionObserver.unsubscribe).toBeCalled();
    });
  });

  describe('follow', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the follow method', () => {
      jest.spyOn(communicator, 'follow');
      communicator.follow('test');

      expect(communicator.follow).toBeCalledWith('test');
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
        'test',
      );
      expect(AblyRealtimeMock.setFollowParticipant).toBeCalledWith('test');
    });
  });

  describe('fetchSyncProperty', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the fetchSyncProperty and return the last message of type test', () => {
      jest.spyOn(communicator, 'fetchSyncProperty');
      const history = communicator.fetchSyncProperty('test');

      expect(communicator.fetchSyncProperty).toBeCalledWith('test');
      expect(AblyRealtimeMock.fetchSyncClientProperty).toBeCalledWith('test');
      expect(history).toEqual(createRealtimeMessage('test'));
    });

    test('should call the fetchSyncProperty and return the realtime history', () => {
      jest.spyOn(communicator, 'fetchSyncProperty');
      const history = communicator.fetchSyncProperty();

      expect(communicator.fetchSyncProperty).toBeCalled();
      expect(AblyRealtimeMock.fetchSyncClientProperty).toBeCalled();
      expect(history).toEqual(createRealtimeHistory());
    });
  });

  describe('toggleMeetingSetup', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the toggleMeetingSetup method', () => {
      jest.spyOn(communicator, 'toggleMeetingSetup');
      communicator.toggleMeetingSetup();

      expect(communicator.toggleMeetingSetup).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_SETUP,
      );
    });
  });

  describe('toggleMicrophone', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the toggleMicrophone method', () => {
      jest.spyOn(communicator, 'toggleMicrophone');
      communicator.toggleMicrophone();

      expect(communicator.toggleMicrophone).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MICROPHONE,
      );
    });
  });

  describe('toggleCam', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the toggleCam method', () => {
      jest.spyOn(communicator, 'toggleCam');
      communicator.toggleCam();

      expect(communicator.toggleCam).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_CAM,
      );
    });
  });

  describe('toggleScreenShare', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the toggleScreenShare method', () => {
      jest.spyOn(communicator, 'toggleScreenShare');
      communicator.toggleScreenShare();

      expect(communicator.toggleScreenShare).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_SCREENSHARE,
      );
    });
  });

  describe('hangUp', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the hangUp method', () => {
      jest.spyOn(communicator, 'hangUp');
      communicator.hangUp();

      expect(communicator.hangUp).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(MeetingControlsEvent.HANG_UP);
    });
  });

  describe('toggleChat', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the toggleChat method', () => {
      jest.spyOn(communicator, 'toggleChat');
      communicator.toggleChat();

      expect(communicator.toggleChat).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_CHAT,
      );
    });
  });

  describe('startTranscription', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the startTranscription method', () => {
      jest.spyOn(communicator, 'startTranscription');
      communicator.startTranscription('en-US');

      expect(communicator.startTranscription).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        TranscriptionEvent.TRANSCRIPTION_START,
        'en-US',
      );
    });
  });

  describe('stopTranscription', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the stopTranscription method', () => {
      jest.spyOn(communicator, 'stopTranscription');
      communicator.stopTranscription();

      expect(communicator.stopTranscription).toBeCalled();
      expect(VideoManagerMock.publishMessageToFrame).toBeCalledWith(
        TranscriptionEvent.TRANSCRIPTION_STOP,
        undefined,
      );
    });
  });

  describe('loadPlugin', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the loadPlugin method', () => {
      jest.spyOn(communicator, 'loadPlugin');
      communicator.loadPlugin(MOCK_PLUGIN, {
        plugin: MOCK_PLUGIN,
        avatarConfig: MOCK_AVATAR_CONFIG,
        localParticipant: MOCK_PARTICIPANT_TO_3D,
        RealtimeService: AblyRealtimeMock as unknown as AblyRealtimeService,
      });

      expect(communicator.loadPlugin).toBeCalled();
    });

    test('should throw an error if the plugin is loaded twice', () => {
      jest.spyOn(communicator, 'loadPlugin');

      communicator.loadPlugin(MOCK_PLUGIN, {
        plugin: MOCK_PLUGIN,
        avatarConfig: MOCK_AVATAR_CONFIG,
        localParticipant: MOCK_PARTICIPANT_TO_3D,
        RealtimeService: AblyRealtimeMock as unknown as AblyRealtimeService,
      });

      expect(communicator.loadPlugin).toBeCalled();
      expect(communicator.loadPlugin).toThrowError('the 3D plugin has already been started');
    });
  });

  describe('unloadPlugin', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the unloadPlugin method', () => {
      jest.spyOn(communicator, 'unloadPlugin');
      communicator.loadPlugin(MOCK_PLUGIN, {
        plugin: MOCK_PLUGIN,
        avatarConfig: MOCK_AVATAR_CONFIG,
        localParticipant: MOCK_PARTICIPANT_TO_3D,
        RealtimeService: AblyRealtimeMock as unknown as AblyRealtimeService,
      });

      communicator.unloadPlugin();

      expect(communicator.unloadPlugin).toBeCalled();
      expect(MOCK_PLUGIN.destroy).toBeCalled();
    });

    test('should skip the unloadPlugin method if the plugin is not loaded', () => {
      jest.spyOn(communicator, 'unloadPlugin');
      communicator.unloadPlugin();

      expect(communicator.unloadPlugin).toBeCalled();
      expect(MOCK_PLUGIN.destroy).not.toBeCalled();
    });
  });

  describe('gather', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the gather method', () => {
      jest.spyOn(communicator, 'gather');
      communicator.gather();

      expect(communicator.gather).toBeCalled();
      expect(AblyRealtimeMock.setGather).toBeCalled();
    });
  });

  describe('goTo', () => {
    let communicator: SuperVizSdk;

    beforeEach(() => {
      jest.clearAllMocks();
      communicator = Communicator(COMMUNICATOR_INITIALIZATION_MOCK);
    });

    test('should call the goTo method', () => {
      jest.spyOn(communicator, 'goTo');
      communicator.loadPlugin(MOCK_PLUGIN, {
        plugin: MOCK_PLUGIN,
        avatarConfig: MOCK_AVATAR_CONFIG,
        localParticipant: MOCK_PARTICIPANT_TO_3D,
        RealtimeService: AblyRealtimeMock as unknown as AblyRealtimeService,
      });

      communicator.goTo('test');

      expect(communicator.goTo).toBeCalled();
      expect(MOCK_PLUGIN.goToParticipant).toBeCalled();
    });
  });
});
