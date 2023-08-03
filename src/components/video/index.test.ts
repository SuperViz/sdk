import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import {
  MOCK_AVATAR,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { RealtimeEvent } from '../../common/types/events.types';
import { MeetingColors } from '../../common/types/meeting-colors.types';
import { AblyParticipant, AblyRealtimeData } from '../../services/realtime/ably/types';
import { VideoFrameState } from '../../services/video-conference-manager/types';

import { VideoComponent } from '.';

const VIDEO_MANAGER_MOCK = {
  start: jest.fn(),
  leave: jest.fn(),
  publishMessageToFrame: jest.fn(),
  frameStateObserver: MOCK_OBSERVER_HELPER,
  frameSizeObserver: MOCK_OBSERVER_HELPER,
  realtimeEventsObserver: MOCK_OBSERVER_HELPER,
  waitingForHostObserver: MOCK_OBSERVER_HELPER,
  sameAccountErrorObserver: MOCK_OBSERVER_HELPER,
  devicesObserver: MOCK_OBSERVER_HELPER,
  meetingStateObserver: MOCK_OBSERVER_HELPER,
  meetingConnectionObserver: MOCK_OBSERVER_HELPER,
  participantJoinedObserver: MOCK_OBSERVER_HELPER,
  participantLeftObserver: MOCK_OBSERVER_HELPER,
};

const MOCK_DRAW_DATA = {
  name: 'participant1',
  lineColor: '255, 239, 51',
  textColor: '#000000',
  pencil: 'blob:http://localhost:8080/b3cde217-c2cc-4092-a2e5-cf4c498f744e',
  clickX: [0, 109],
  clickY: [0, 109],
  clickDrag: [],
  drawingWidth: 300,
  drawingHeight: 600,
  externalClickX: 566,
  externalClickY: 300,
  fadeOut: false,
};

jest.mock('../../services/video-conference-manager', () => {
  return jest.fn().mockImplementation(() => VIDEO_MANAGER_MOCK);
});

describe('VideoComponent', () => {
  let VideoComponentInstance: VideoComponent;

  beforeEach(() => {
    jest.clearAllMocks();

    VideoComponentInstance = new VideoComponent();
    VideoComponentInstance.attach({
      realtime: ABLY_REALTIME_MOCK,
      localParticipant: {
        ...MOCK_LOCAL_PARTICIPANT,
        avatar: MOCK_AVATAR,
      },
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
    });
  });

  afterEach(() => {
    VideoComponentInstance.detach();
  });

  test('should not show avatar settings if local participant has avatar', () => {
    expect(VideoComponentInstance['videoConfig'].canUseDefaultAvatars).toBeFalsy();
  });

  test('should subscribe to realtime events', () => {
    expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantsObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.hostObserver.subscribe).toHaveBeenCalled();
  });

  test('should subscribe from video events', () => {
    expect(VIDEO_MANAGER_MOCK.frameStateObserver.subscribe).toHaveBeenCalled();
  });

  describe('detach', () => {
    beforeEach(() => {
      VideoComponentInstance.detach();
    });

    test('should unsubscribe from realtime events', () => {
      expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.hostObserver.unsubscribe).toHaveBeenCalled();
    });

    test('should unsubscribe from video events', () => {
      expect(VIDEO_MANAGER_MOCK.frameStateObserver.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('video events', () => {
    test('should initialize video when frame is initialized', () => {
      VideoComponentInstance['onFrameStateChange'](VideoFrameState.INITIALIZED);

      expect(VIDEO_MANAGER_MOCK.start).toHaveBeenCalledWith({
        participant: VideoComponentInstance['localParticipant'],
        group: VideoComponentInstance['group'],
        roomId: MOCK_CONFIG.roomId,
      });
    });

    test('should not initialize video when frame is not initialized', () => {
      VideoComponentInstance['onFrameStateChange'](VideoFrameState.INITIALIZING);

      expect(VIDEO_MANAGER_MOCK.start).not.toHaveBeenCalled();
    });

    test('should change host from video frame', () => {
      VideoComponentInstance['onRealtimeEvent']({
        event: RealtimeEvent.REALTIME_HOST_CHANGE,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(ABLY_REALTIME_MOCK.setHost).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });

    test('should change grid mode from video frame', () => {
      VideoComponentInstance['onRealtimeEvent']({
        event: RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
        data: true,
      });

      expect(ABLY_REALTIME_MOCK.setGridMode).toBeCalledWith(true);
    });

    test('should set gather from video frame', () => {
      VideoComponentInstance['onRealtimeEvent']({
        event: RealtimeEvent.REALTIME_GATHER,
        data: true,
      });

      expect(ABLY_REALTIME_MOCK.setGather).toBeCalledWith(true);
    });

    test('should set draw data from video frame', () => {
      VideoComponentInstance['onRealtimeEvent']({
        event: RealtimeEvent.REALTIME_DRAWING_CHANGE,
        data: MOCK_DRAW_DATA,
      });

      expect(ABLY_REALTIME_MOCK.setDrawing).toBeCalledWith(MOCK_DRAW_DATA);
    });

    test('should set follow participant from video frame', () => {
      VideoComponentInstance['onRealtimeEvent']({
        event: RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(ABLY_REALTIME_MOCK.setFollowParticipant).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });
  });

  describe('realtime events', () => {
    test('should update host participant', () => {
      VideoComponentInstance['onHostParticipantDidChange']({
        oldHostParticipantId: '',
        newHostParticipantId: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_HOST_CHANGE,
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should update participants', () => {
      const ablyParticipant: AblyParticipant = {
        clientId: 'client1',
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: MOCK_LOCAL_PARTICIPANT.id,
          slotIndex: 0,
        },
      };

      VideoComponentInstance['onParticipantsDidChange']({
        [MOCK_LOCAL_PARTICIPANT.id]: ablyParticipant,
      });

      const expectedParticipants = {
        timestamp: ablyParticipant.timestamp,
        connectionId: ablyParticipant.connectionId,
        participantId: ablyParticipant.data.participantId,
        color: MeetingColors[ablyParticipant.data.slotIndex],
        name: ablyParticipant.data.name,
      };

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_PARTICIPANT_LIST_UPDATE,
        [expectedParticipants],
      );
    });

    test('should update room info', () => {
      const realtimeData: AblyRealtimeData = {
        drawing: MOCK_DRAW_DATA,
        followParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        gather: true,
        hostClientId: MOCK_LOCAL_PARTICIPANT.id,
        isGridModeEnable: true,
      };

      // @ts-ignore
      VideoComponentInstance['realtime'].hostClientId = MOCK_LOCAL_PARTICIPANT.id;
      VideoComponentInstance['onRoomInfoUpdated'](realtimeData);

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
        realtimeData.isGridModeEnable,
      );

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
        realtimeData.followParticipantId,
      );

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_DRAWING_CHANGE,
        realtimeData.drawing,
      );

      expect(ABLY_REALTIME_MOCK.setGather).toBeCalledWith(false);
    });

    test('should update room info and not update gather', () => {
      const realtimeData: AblyRealtimeData = {
        drawing: {
          name: 'participant1',
          lineColor: '255, 239, 51',
          textColor: '#000000',
          pencil: 'blob:http://localhost:8080/b3cde217-c2cc-4092-a2e5-cf4c498f744e',
          clickX: [0, 109],
          clickY: [0, 109],
          clickDrag: [],
          drawingWidth: 300,
          drawingHeight: 600,
          externalClickX: 566,
          externalClickY: 300,
          fadeOut: false,
        },
        followParticipantId: MOCK_LOCAL_PARTICIPANT.id,
        gather: false,
        hostClientId: MOCK_LOCAL_PARTICIPANT.id,
        isGridModeEnable: true,
      };

      VideoComponentInstance['onRoomInfoUpdated'](realtimeData);

      expect(ABLY_REALTIME_MOCK.setGather).not.toHaveBeenCalled();
    });
  });
});
