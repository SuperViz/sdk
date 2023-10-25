import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import {
  MOCK_AVATAR,
  MOCK_GROUP,
  MOCK_LOCAL_PARTICIPANT,
} from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import {
  DeviceEvent,
  FrameEvent,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
  TranscriptState,
} from '../../common/types/events.types';
import { MeetingColors } from '../../common/types/meeting-colors.types';
import { AblyParticipant, AblyRealtimeData } from '../../services/realtime/ably/types';
import { VideoFrameState } from '../../services/video-conference-manager/types';
import { ComponentNames } from '../types';

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
  participantListObserver: MOCK_OBSERVER_HELPER,
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

jest.mock('../../services/event-bus', () => {
  return jest.fn().mockImplementation(() => EVENT_BUS_MOCK);
});

describe('VideoComponent', () => {
  let VideoComponentInstance: VideoComponent;

  beforeEach(() => {
    jest.clearAllMocks();

    VideoComponentInstance = new VideoComponent();
    VideoComponentInstance.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, {
        isJoinedRoom: true,
        participant: {
          clientId: 'client1',
          action: 'absent',
          connectionId: 'connection1',
          encoding: 'h264',
          id: 'unit-test-participant-ably-id',
          timestamp: new Date().getTime(),
          data: {
            id: MOCK_LOCAL_PARTICIPANT.id,
            participantId: MOCK_LOCAL_PARTICIPANT.id,
            activeComponents: [ComponentNames.VIDEO_CONFERENCE],
          },
        },
      }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });
  });

  afterEach(() => {
    VideoComponentInstance.detach();
  });

  test('should not show avatar settings if local participant has avatar', () => {
    VideoComponentInstance.detach();

    VideoComponentInstance = new VideoComponent({
      defaultAvatars: true,
    });

    VideoComponentInstance.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: {
        ...MOCK_LOCAL_PARTICIPANT,
        avatar: MOCK_AVATAR,
      },
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    expect(VideoComponentInstance['videoConfig'].canUseDefaultAvatars).toBeFalsy();
  });

  test('should subscribe to realtime events', () => {
    expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantsObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.hostObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantJoinedObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantLeaveObserver.subscribe).toHaveBeenCalled();
  });

  test('should subscribe from video events', () => {
    expect(VIDEO_MANAGER_MOCK.meetingStateObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.frameStateObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.realtimeEventsObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.participantJoinedObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.participantLeftObserver.subscribe).toHaveBeenCalled();
  });

  describe('detach', () => {
    beforeEach(() => {
      VideoComponentInstance.detach();
    });

    test('should unsubscribe from realtime events', () => {
      expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.hostObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantJoinedObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantLeaveObserver.unsubscribe).toHaveBeenCalled();
    });

    test('should unsubscribe from video events', () => {
      expect(VIDEO_MANAGER_MOCK.meetingStateObserver.unsubscribe).toHaveBeenCalled();
      expect(VIDEO_MANAGER_MOCK.frameStateObserver.unsubscribe).toHaveBeenCalled();
      expect(VIDEO_MANAGER_MOCK.realtimeEventsObserver.unsubscribe).toHaveBeenCalled();
      expect(VIDEO_MANAGER_MOCK.participantJoinedObserver.unsubscribe).toHaveBeenCalled();
      expect(VIDEO_MANAGER_MOCK.participantLeftObserver.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('connection events', () => {
    test('should freeze sync if the connection status is bad', () => {
      VideoComponentInstance['onConnectionStatusChange'](MeetingConnectionStatus.BAD);

      expect(ABLY_REALTIME_MOCK.freezeSync).toBeCalledWith(true);
    });

    test('should enable sync if the connection status becomes good', () => {
      VideoComponentInstance['connectionService'].oldConnectionStatus = MeetingConnectionStatus.BAD;

      VideoComponentInstance['onConnectionStatusChange'](MeetingConnectionStatus.GOOD);

      expect(ABLY_REALTIME_MOCK.freezeSync).toBeCalledWith(false);
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
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_HOST_CHANGE,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(ABLY_REALTIME_MOCK.setHost).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });

    test('should change grid mode from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
        data: true,
      });

      expect(ABLY_REALTIME_MOCK.setGridMode).toBeCalledWith(true);
    });

    test('should set gather from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GATHER,
        data: true,
      });

      expect(ABLY_REALTIME_MOCK.setGather).toBeCalledWith(true);
    });

    test('should set go to from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(EVENT_BUS_MOCK.publish).toBeCalledWith(
        RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should set draw data from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_DRAWING_CHANGE,
        data: MOCK_DRAW_DATA,
      });

      expect(ABLY_REALTIME_MOCK.setDrawing).toBeCalledWith(MOCK_DRAW_DATA);
    });

    test('should set follow participant from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(ABLY_REALTIME_MOCK.setFollowParticipant).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });

    test('should set follow participant from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: MeetingEvent.MEETING_KICK_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(ABLY_REALTIME_MOCK.setKickParticipant).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });

    test('should set follow participant from video frame', () => {
      VideoComponentInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_TRANSCRIPT_CHANGE,
        data: TranscriptState.TRANSCRIPT_START,
      });

      expect(ABLY_REALTIME_MOCK.setTranscript).toBeCalledWith(TranscriptState.TRANSCRIPT_START);
    });

    test('should update participant properties from video frame', () => {
      const participant = {
        ...MOCK_LOCAL_PARTICIPANT,
        name: 'John Doe',
      };

      VideoComponentInstance['onParticipantJoined'](participant);

      expect(ABLY_REALTIME_MOCK.updateMyProperties).toBeCalledWith({ name: 'John Doe' });
    });

    test('should update participant avatar if it is not set and video frame has default avatars', () => {
      const participant = {
        ...MOCK_LOCAL_PARTICIPANT,
        name: 'John Doe',
        avatar: MOCK_AVATAR,
      };

      VideoComponentInstance['videoConfig'].canUseDefaultAvatars = true;
      VideoComponentInstance['onParticipantJoined'](participant);

      expect(ABLY_REALTIME_MOCK.updateMyProperties).toBeCalledWith({
        name: 'John Doe',
        avatar: MOCK_AVATAR,
      });
    });

    test('should publish message to client when my participant left', () => {
      VideoComponentInstance['publish'] = jest.fn();

      VideoComponentInstance['onParticipantLeft'](MOCK_LOCAL_PARTICIPANT);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MY_PARTICIPANT_LEFT,
        MOCK_LOCAL_PARTICIPANT,
      );
    });

    test('should publish message to client when meeting state changed', () => {
      VideoComponentInstance['publish'] = jest.fn();

      VideoComponentInstance['onMeetingStateChange'](MeetingState.MEETING_CONNECTED);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_STATE_UPDATE,
        MeetingState.MEETING_CONNECTED,
      );
    });

    test('should publish message to client and detach when same account error happened', () => {
      VideoComponentInstance['publish'] = jest.fn();
      VideoComponentInstance['detach'] = jest.fn();

      VideoComponentInstance['onSameAccountError']('same-account-error');

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR,
        'same-account-error',
      );
      expect(ABLY_REALTIME_MOCK.updateMyProperties).toBeCalledWith({
        activeComponents: [],
      });
      expect(VideoComponentInstance['detach']).toBeCalled();
    });

    test('should publish a message to client when devices change', () => {
      VideoComponentInstance['publish'] = jest.fn();

      VideoComponentInstance['onDevicesChange'](DeviceEvent.DEVICES_BLOCKED);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_DEVICES_CHANGE,
        DeviceEvent.DEVICES_BLOCKED,
      );
    });

    test('should publish a message to client when waiting for host', () => {
      VideoComponentInstance['publish'] = jest.fn();

      VideoComponentInstance['onWaitingForHost'](true);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_WAITING_FOR_HOST,
        true,
      );
    });

    test('should publish a message to client when frame size change', () => {
      VideoComponentInstance['publish'] = jest.fn();

      VideoComponentInstance['onFrameSizeDidChange']({
        height: 100,
        width: 100,
      });

      expect(VideoComponentInstance['publish']).toBeCalledWith(FrameEvent.FRAME_DIMENSIONS_UPDATE, {
        height: 100,
        width: 100,
      });
    });

    test('should update participant list', () => {
      VideoComponentInstance['publish'] = jest.fn();
      const participants = [MOCK_LOCAL_PARTICIPANT];

      VideoComponentInstance['onParticipantListUpdate'](participants);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE,
        participants,
      );

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_AMOUNT_UPDATE,
        participants.length,
      );
    });

    test('should not update participant list if new list is equal to old list', () => {
      VideoComponentInstance['publish'] = jest.fn();
      const participants = [MOCK_LOCAL_PARTICIPANT];

      VideoComponentInstance['onParticipantListUpdate'](participants);
      VideoComponentInstance['onParticipantListUpdate'](participants);

      expect(VideoComponentInstance['publish']).toBeCalledTimes(2);
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
        extras: null,
        clientId: MOCK_LOCAL_PARTICIPANT.id,
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          avatar: MOCK_LOCAL_PARTICIPANT.avatar,
          isHost: VideoComponentInstance['realtime'].hostClientId === MOCK_LOCAL_PARTICIPANT.id,
          type: MOCK_LOCAL_PARTICIPANT.type,
          participantId: MOCK_LOCAL_PARTICIPANT.id,
          slotIndex: 0,
        },
      };

      VideoComponentInstance['onRealtimeParticipantsDidChange']({
        [MOCK_LOCAL_PARTICIPANT.id]: ablyParticipant,
      });

      const expectedParticipants = {
        timestamp: ablyParticipant.timestamp,
        connectionId: ablyParticipant.connectionId,
        participantId: ablyParticipant.data.participantId,
        color: MeetingColors[ablyParticipant.data.slotIndex],
        name: ablyParticipant.data.name,
        type: ablyParticipant.data.type,
        avatar: ablyParticipant.data.avatar,
        isHost: ablyParticipant.data.isHost,
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

    test('should publish message to client when participant joined', () => {
      VideoComponentInstance['publish'] = jest.fn();

      const ablyParticipant: AblyParticipant = {
        extras: null,
        clientId: MOCK_LOCAL_PARTICIPANT.id,
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: MOCK_LOCAL_PARTICIPANT.id,
          slotIndex: 0,
          avatar: MOCK_AVATAR,
          ...MOCK_LOCAL_PARTICIPANT,
        },
      };

      VideoComponentInstance['onParticipantJoinedOnRealtime'](ablyParticipant);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_JOINED,
        VideoComponentInstance['createParticipantFromAblyPresence'](ablyParticipant),
      );
    });

    test('should publish message to client when participant left', () => {
      VideoComponentInstance['publish'] = jest.fn();

      const ablyParticipant: AblyParticipant = {
        extras: null,
        clientId: MOCK_LOCAL_PARTICIPANT.id,
        action: 'present',
        connectionId: 'connection1',
        encoding: 'h264',
        id: 'unit-test-participant-ably-id',
        timestamp: new Date().getTime(),
        data: {
          participantId: MOCK_LOCAL_PARTICIPANT.id,
          slotIndex: 0,
          avatar: MOCK_AVATAR,
          ...MOCK_LOCAL_PARTICIPANT,
        },
      };

      VideoComponentInstance['onParticipantLeftOnRealtime'](ablyParticipant);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_LEFT,
        VideoComponentInstance['createParticipantFromAblyPresence'](ablyParticipant),
      );
    });

    test('should publish a message to client and detach when kick participants happend', () => {
      VideoComponentInstance['publish'] = jest.fn();
      VideoComponentInstance['detach'] = jest.fn();

      VideoComponentInstance['onKickAllParticipantsDidChange'](true);

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_KICK_PARTICIPANTS,
        true,
      );
      expect(ABLY_REALTIME_MOCK.updateMyProperties).toBeCalledWith({
        activeComponents: [],
      });
      expect(VideoComponentInstance['detach']).toBeCalled();
    });

    test('should publish a message to client and detach when kick local participant happend', () => {
      VideoComponentInstance['publish'] = jest.fn();
      VideoComponentInstance['detach'] = jest.fn();

      VideoComponentInstance['onKickLocalParticipant']();

      expect(VideoComponentInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_KICK_PARTICIPANT,
        VideoComponentInstance['localParticipant'],
      );

      expect(ABLY_REALTIME_MOCK.updateMyProperties).toBeCalledWith({
        activeComponents: [],
      });
      expect(VideoComponentInstance['detach']).toBeCalled();
    });
  });

  describe('toolbar controls', () => {
    test('should toggle chat', () => {
      VideoComponentInstance['toggleChat']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_CHAT,
      );
    });

    test('should toggle meeting setup', () => {
      VideoComponentInstance['toggleMeetingSetup']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_SETUP,
      );
    });

    test('should toggle user`s cam', () => {
      VideoComponentInstance['toggleCam']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_CAM,
      );
    });

    test('should toggle user`s mic', () => {
      VideoComponentInstance['toggleMicrophone']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MICROPHONE,
      );
    });

    test('should toggle screenshare', () => {
      VideoComponentInstance['toggleScreenShare']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_SCREENSHARE,
      );
    });

    test('should toggle transcript', () => {
      VideoComponentInstance['toggleTranscript']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_TRANSCRIPT,
      );
    });

    test('should hang up', () => {
      VideoComponentInstance['hangUp']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(MeetingControlsEvent.HANG_UP);
    });
  });
});
