import { TextEncoder, TextDecoder } from 'util';

import { PresenceEvent } from '@superviz/socket-client';

import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_AVATAR, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import { ROOM_STATE_MOCK } from '../../../__mocks__/roomState.mock';
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
import { MeetingColors, MeetingColorsHex } from '../../common/types/meeting-colors.types';
import { Participant, ParticipantType } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { useStore } from '../../common/utils/use-store';
import { IOC } from '../../services/io';
import { Presence3DManager } from '../../services/presence-3d-manager';
import { ParticipantInfo } from '../../services/realtime/base/types';
import { RoomStateService } from '../../services/roomState';
import { VideoFrameState } from '../../services/video-conference-manager/types';
import { ComponentNames } from '../types';

import { VideoConference } from '.';

Object.assign(global, { TextDecoder, TextEncoder });

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
  isMessageBridgeReady: jest.fn().mockReturnValue(true),
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

jest.useFakeTimers();

const MOCK_REALTIME = Object.assign({}, ABLY_REALTIME_MOCK, {
  hasJoinedRoom: true,
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
});

describe('VideoConference', () => {
  let VideoConferenceInstance: VideoConference;

  const { localParticipant, hasJoinedRoom } = useStore(StoreType.GLOBAL);
  localParticipant.publish(MOCK_LOCAL_PARTICIPANT);
  hasJoinedRoom.publish(true);
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();

    VideoConferenceInstance = new VideoConference({
      userType: 'host',
      allowGuests: false,
    });

    VideoConferenceInstance['localParticipant'] = MOCK_LOCAL_PARTICIPANT;
    VideoConferenceInstance.attach({
      ioc: new IOC(MOCK_LOCAL_PARTICIPANT),
      realtime: { ...MOCK_REALTIME, hasJoinedRoom: true } as any,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
      Presence3DManagerService: Presence3DManager,
      roomState: { ...ROOM_STATE_MOCK } as RoomStateService,
      useStore,
    });
  });

  test('should not show avatar settings if local participant has avatar', () => {
    VideoConferenceInstance.detach();

    VideoConferenceInstance = new VideoConference({
      defaultAvatars: true,
    });

    VideoConferenceInstance['localParticipant'] = {
      ...MOCK_LOCAL_PARTICIPANT,
      avatar: MOCK_AVATAR,
    };

    VideoConferenceInstance.attach({
      ioc: new IOC(MOCK_LOCAL_PARTICIPANT),
      Presence3DManagerService: Presence3DManager,
      realtime: MOCK_REALTIME,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
      roomState: ROOM_STATE_MOCK,
      useStore,
    });

    VideoConferenceInstance['start']();
    expect(VideoConferenceInstance['videoConfig'].canUseDefaultAvatars).toBeFalsy();
  });

  test('should subscribe to realtime events', () => {
    expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantsObserver.subscribe).toHaveBeenCalled();
    expect(ABLY_REALTIME_MOCK.participantLeaveObserver.subscribe).toHaveBeenCalled();
  });

  test('should subscribe from video events', () => {
    expect(VIDEO_MANAGER_MOCK.meetingStateObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.frameStateObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.realtimeEventsObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.participantJoinedObserver.subscribe).toHaveBeenCalled();
    expect(VIDEO_MANAGER_MOCK.participantLeftObserver.subscribe).toHaveBeenCalled();
  });

  describe('host handler', () => {
    beforeEach(() => {
      VideoConferenceInstance['initializedList'] = true;
      VideoConferenceInstance['participantsTypes'][MOCK_LOCAL_PARTICIPANT.id] =
        ParticipantType.HOST;
      const { participants } = VideoConferenceInstance['useStore'](StoreType.GLOBAL);
      participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          ...MOCK_LOCAL_PARTICIPANT,
          type: ParticipantType.HOST,
        },
      });
    });

    test('should set as host the first participant that joins the room and type is host', () => {
      const participant: ParticipantInfo[] = [
        {
          timestamp: 0,
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];

      const fn = jest.fn();

      VideoConferenceInstance['useStore'] = jest.fn().mockReturnValue({
        participants: {
          value: {
            [MOCK_LOCAL_PARTICIPANT.id]: {
              ...participant[0],
              type: ParticipantType.HOST,
            },
          },
        },
        hostId: {
          value: '',
          publish: fn,
        },
      });

      VideoConferenceInstance['roomState']['setHost'] = fn;
      VideoConferenceInstance['onRealtimeParticipantsDidChange'](participant);

      expect(fn).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
      expect(fn).toBeCalledWith(MOCK_LOCAL_PARTICIPANT.id);
    });

    test('should keep the host if it is already set and stays in the room', () => {
      const originalList: ParticipantInfo[] = [
        {
          timestamp: 0,
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];

      VideoConferenceInstance['useStore'](StoreType.GLOBAL).participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          ...originalList[0],
        },
      });

      VideoConferenceInstance['roomState'].setHost = jest.fn();
      VideoConferenceInstance['onRealtimeParticipantsDidChange'](originalList);

      VideoConferenceInstance['participantsTypes']['second-id'] = ParticipantType.HOST;
      const secondList: ParticipantInfo[] = [
        {
          timestamp: 1,
          id: 'second-id',
          name: 'second name',
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];
      const { participants } = VideoConferenceInstance['useStore'](StoreType.GLOBAL);
      participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          ...originalList[0],
        },
        'second-id': {
          ...secondList[0],
        },
      });

      VideoConferenceInstance['onRealtimeParticipantsDidChange'](secondList);

      expect(VideoConferenceInstance['roomState'].setHost).toBeCalledTimes(0);
    });

    test('should not set host if the participant is not me', () => {
      const participant: ParticipantInfo[] = [
        {
          timestamp: 0,
          id: 'another-client-id',
          name: 'another name',
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];

      VideoConferenceInstance['participantsTypes'] = { 'another-client-id': ParticipantType.HOST };
      VideoConferenceInstance['useStore'](StoreType.GLOBAL).participants.publish({
        'another-client-id': participant[0],
      });

      VideoConferenceInstance['roomState'].setHost = jest.fn();
      VideoConferenceInstance['onRealtimeParticipantsDidChange'](participant);

      VideoConferenceInstance['participantsTypes'] = {};
      VideoConferenceInstance['useStore'](StoreType.GLOBAL).participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: { ...MOCK_LOCAL_PARTICIPANT },
      });

      expect(VideoConferenceInstance['roomState'].setHost).not.toBeCalled();
    });

    test('should init the timer to kick participants if the host leaves', () => {
      VideoConferenceInstance['participantsTypes'] = {};
      VideoConferenceInstance['localParticipant'] = {
        ...MOCK_LOCAL_PARTICIPANT,
        type: ParticipantType.GUEST,
      };
      VideoConferenceInstance['kickParticipantsOnHostLeave'] = true;
      VideoConferenceInstance['useStore'] = jest.fn().mockReturnValue({
        participants: {
          value: {
            [MOCK_LOCAL_PARTICIPANT.id]: VideoConferenceInstance['localParticipant'],
          },
        },
        destroy: jest.fn(),
      });
      VideoConferenceInstance['validateIfInTheRoomHasHost']();

      jest.advanceTimersByTime(3000 * 60);

      // check if the participant is kicked
      expect(VideoConferenceInstance['kickParticipantsOnHostLeave']).toBe(false);
      expect(VideoConferenceInstance['isAttached']).toBe(false);
    });

    test('should clear the timer to kick participants if in the room has host candidates', () => {
      VideoConferenceInstance['onParticipantJoined']({
        ...MOCK_LOCAL_PARTICIPANT,
        type: ParticipantType.GUEST,
      });

      expect(VideoConferenceInstance['kickParticipantsOnHostLeave']).toBe(true);

      const host: ParticipantInfo[] = [
        {
          timestamp: 0,
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];

      VideoConferenceInstance['onRealtimeParticipantsDidChange'](host);

      jest.advanceTimersByTime(1000 * 60);

      expect(VideoConferenceInstance['kickParticipantsOnHostLeave']).toBe(true);
    });
  });

  describe('detach', () => {
    beforeEach(() => {
      VideoConferenceInstance.detach();
    });

    test('should unsubscribe from realtime events', () => {
      expect(ABLY_REALTIME_MOCK.roomInfoUpdatedObserver.unsubscribe).toHaveBeenCalled();
      expect(ABLY_REALTIME_MOCK.participantsObserver.unsubscribe).toHaveBeenCalled();
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
      VideoConferenceInstance['roomState'].freezeSync = jest.fn();
      VideoConferenceInstance['onConnectionStatusChange'](MeetingConnectionStatus.BAD);

      expect(VideoConferenceInstance['roomState'].freezeSync).toBeCalledWith(true);
    });

    test('should enable sync if the connection status becomes good', () => {
      VideoConferenceInstance['roomState'].freezeSync = jest.fn();
      VideoConferenceInstance['connectionService'].oldConnectionStatus =
        MeetingConnectionStatus.BAD;

      VideoConferenceInstance['onConnectionStatusChange'](MeetingConnectionStatus.GOOD);

      expect(VideoConferenceInstance['roomState'].freezeSync).toBeCalledWith(false);
    });
  });

  describe('video events', () => {
    test('should initialize video when frame is initialized', () => {
      VideoConferenceInstance['onFrameStateChange'](VideoFrameState.INITIALIZED);

      expect(VIDEO_MANAGER_MOCK.start).toHaveBeenCalledWith({
        participant: VideoConferenceInstance['localParticipant'],
        group: VideoConferenceInstance['group'],
        roomId: MOCK_CONFIG.roomId,
      });
    });

    test('should not initialize video when frame is not initialized', () => {
      VideoConferenceInstance['onFrameStateChange'](VideoFrameState.INITIALIZING);

      expect(VIDEO_MANAGER_MOCK.start).not.toHaveBeenCalled();
    });

    test('should change host from video frame', () => {
      VideoConferenceInstance['roomState'].setHost = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_HOST_CHANGE,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(VideoConferenceInstance['roomState'].setHost).toBeCalledWith(
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should change grid mode from video frame', () => {
      VideoConferenceInstance['roomState'].setGridMode = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
        data: true,
      });

      expect(VideoConferenceInstance['roomState'].setGridMode).toBeCalledWith(true);
    });

    test('should set gather from video frame', () => {
      VideoConferenceInstance['roomState'].setGather = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GATHER,
        data: true,
      });

      expect(VideoConferenceInstance['roomState'].setGather).toBeCalledWith(true);
    });

    test('should set go to from video frame', () => {
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(EVENT_BUS_MOCK.publish).toBeCalledWith(
        RealtimeEvent.REALTIME_GO_TO_PARTICIPANT,
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should set draw data from video frame', () => {
      VideoConferenceInstance['roomState'].setDrawing = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_DRAWING_CHANGE,
        data: MOCK_DRAW_DATA,
      });

      expect(VideoConferenceInstance['roomState'].setDrawing).toBeCalledWith(MOCK_DRAW_DATA);
    });

    test('should set follow participant from video frame', () => {
      VideoConferenceInstance['roomState'].setFollowParticipant = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(VideoConferenceInstance['roomState'].setFollowParticipant).toBeCalledWith(
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should set participant to be kicked', () => {
      VideoConferenceInstance['roomState'].setKickParticipant = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: MeetingEvent.MEETING_KICK_PARTICIPANT,
        data: MOCK_LOCAL_PARTICIPANT.id,
      });

      expect(VideoConferenceInstance['roomState'].setKickParticipant).toBeCalledWith(
        MOCK_LOCAL_PARTICIPANT.id,
      );
    });

    test('should set transcript state', () => {
      VideoConferenceInstance['roomState'].setTranscript = jest.fn();
      VideoConferenceInstance['onRealtimeEventFromFrame']({
        event: RealtimeEvent.REALTIME_TRANSCRIPT_CHANGE,
        data: TranscriptState.TRANSCRIPT_START,
      });

      expect(VideoConferenceInstance['roomState'].setTranscript).toBeCalledWith(
        TranscriptState.TRANSCRIPT_START,
      );
    });

    test('should update participant properties from video frame', () => {
      const participant = {
        ...MOCK_LOCAL_PARTICIPANT,
        name: 'John Doe',
        type: ParticipantType.HOST,
      };

      VideoConferenceInstance['roomState'].updateMyProperties = jest.fn();
      VideoConferenceInstance['onParticipantJoined'](participant);

      expect(VideoConferenceInstance['roomState'].updateMyProperties).toBeCalledWith({
        name: 'John Doe',
        type: ParticipantType.HOST,
      });
    });

    test('should update participant avatar if it is not set and video frame has default avatars', () => {
      const participant = {
        ...MOCK_LOCAL_PARTICIPANT,
        name: 'John Doe',
        avatar: MOCK_AVATAR,
        type: ParticipantType.HOST,
      };

      VideoConferenceInstance['roomState'].updateMyProperties = jest.fn();
      VideoConferenceInstance['videoConfig'].canUseDefaultAvatars = true;
      VideoConferenceInstance['onParticipantJoined'](participant);

      expect(VideoConferenceInstance['roomState'].updateMyProperties).toBeCalledWith({
        name: 'John Doe',
        avatar: MOCK_AVATAR,
        type: ParticipantType.HOST,
      });
    });

    test('should publish message to client when my participant left', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      VideoConferenceInstance['localParticipant'] = MOCK_LOCAL_PARTICIPANT;

      VideoConferenceInstance['onParticipantLeft'](MOCK_LOCAL_PARTICIPANT);
      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MY_PARTICIPANT_LEFT,
        MOCK_LOCAL_PARTICIPANT,
      );
    });

    test('should publish message to client when meeting state changed', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      VideoConferenceInstance['onMeetingStateChange'](MeetingState.MEETING_CONNECTED);

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_STATE_UPDATE,
        MeetingState.MEETING_CONNECTED,
      );
    });

    test('should publish message to client and detach when same account error happened', () => {
      VideoConferenceInstance['publish'] = jest.fn();
      VideoConferenceInstance['roomState'].destroy = jest.fn();

      VideoConferenceInstance['onSameAccountError']('same-account-error');

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR,
        'same-account-error',
      );
      expect(VideoConferenceInstance['roomState'].destroy).toBeCalledWith();
    });

    test('should publish a message to client when devices change', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      VideoConferenceInstance['onDevicesChange'](DeviceEvent.DEVICES_BLOCKED);

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_DEVICES_CHANGE,
        DeviceEvent.DEVICES_BLOCKED,
      );
    });

    test('should publish a message to client when waiting for host', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      VideoConferenceInstance['onWaitingForHost'](true);

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_WAITING_FOR_HOST,
        true,
      );
    });

    test('should publish a message to client when frame size change', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      VideoConferenceInstance['onFrameSizeDidChange']({
        height: 100,
        width: 100,
      });

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        FrameEvent.FRAME_DIMENSIONS_UPDATE,
        {
          height: 100,
          width: 100,
        },
      );
    });

    test('should update participant list', () => {
      const { participants } = VideoConferenceInstance['useStore'](StoreType.GLOBAL);
      participants.publish({
        [MOCK_LOCAL_PARTICIPANT.id]: {
          ...MOCK_LOCAL_PARTICIPANT,
        },
      });

      VideoConferenceInstance['participantsOnMeeting'] = [];
      VideoConferenceInstance['publish'] = jest.fn();
      VideoConferenceInstance['onParticipantListUpdate']();

      const participantInfoList: ParticipantInfo[] = [
        {
          id: participants.value[MOCK_LOCAL_PARTICIPANT.id].id,
          color: participants.value[MOCK_LOCAL_PARTICIPANT.id].slot?.colorName || 'gray',
          avatar: participants.value[MOCK_LOCAL_PARTICIPANT.id].avatar,
          name: participants.value[MOCK_LOCAL_PARTICIPANT.id].name,
          type: participants.value[MOCK_LOCAL_PARTICIPANT.id].type,
          isHost: participants.value[MOCK_LOCAL_PARTICIPANT.id].isHost,
          slot: participants.value[MOCK_LOCAL_PARTICIPANT.id].slot,
          timestamp: participants.value[MOCK_LOCAL_PARTICIPANT.id].timestamp,
        },
      ];

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE,
        participantInfoList,
      );

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_AMOUNT_UPDATE,
        Object.values(participants.value).length,
      );
    });

    test('should not update participant list if new list is equal to old list', () => {
      const participants: Record<string, ParticipantInfo> = {
        [MOCK_LOCAL_PARTICIPANT.id]: {
          timestamp: 0,
          id: 'another-client-id',
          name: 'another name',
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.GUEST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      };

      VideoConferenceInstance['participantsOnMeeting'] = [];

      VideoConferenceInstance['publish'] = jest.fn();
      VideoConferenceInstance['onHostAvailabilityChange'] = jest.fn();

      VideoConferenceInstance['onParticipantListUpdate']();
      VideoConferenceInstance['onParticipantListUpdate']();

      expect(VideoConferenceInstance['publish']).toBeCalledTimes(3);
    });
  });

  describe('realtime events', () => {
    test('should update host', () => {
      VIDEO_MANAGER_MOCK.publishMessageToFrame = jest.fn();
      const { hostId } = VideoConferenceInstance['useStore'](StoreType.VIDEO);
      hostId.publish('new-host');

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_HOST_CHANGE,
        'new-host',
      );
    });

    test('should update participants', () => {
      const participant: ParticipantInfo[] = [
        {
          timestamp: 0,
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          color: MeetingColors[0],
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      ];

      VideoConferenceInstance['onRealtimeParticipantsDidChange'](participant);

      const expectedParticipants = {
        timestamp: 0,
        name: MOCK_LOCAL_PARTICIPANT.name,
        isHost: true,
        avatar: MOCK_AVATAR,
        type: ParticipantType.HOST,
        color: MeetingColors[0],
        participantId: MOCK_LOCAL_PARTICIPANT.id,
        slot: {
          colorName: MeetingColors[0],
          index: 0,
          color: MeetingColorsHex[0],
          textColor: MeetingColors[0],
          timestamp: 0,
        },
      };

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        RealtimeEvent.REALTIME_PARTICIPANT_LIST_UPDATE,
        [expectedParticipants],
      );
    });

    test('should publish message to client when participant joined', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      const presenceParticipant: PresenceEvent<Participant> = {
        connectionId: 'connection1',
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        timestamp: 0,
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      };

      VideoConferenceInstance['onParticipantJoinedOnRealtime'](presenceParticipant);

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_JOINED,
        VideoConferenceInstance['createParticipantFromPresence'](presenceParticipant),
      );
    });

    test('should publish message to client when participant left', () => {
      VideoConferenceInstance['publish'] = jest.fn();

      const presenceParticipant: PresenceEvent<Participant> = {
        connectionId: 'connection1',
        id: MOCK_LOCAL_PARTICIPANT.id,
        name: MOCK_LOCAL_PARTICIPANT.name as string,
        timestamp: 0,
        data: {
          id: MOCK_LOCAL_PARTICIPANT.id,
          name: MOCK_LOCAL_PARTICIPANT.name,
          isHost: true,
          avatar: MOCK_AVATAR,
          type: ParticipantType.HOST,
          slot: {
            colorName: MeetingColors[0],
            index: 0,
            color: MeetingColorsHex[0],
            textColor: MeetingColors[0],
            timestamp: 0,
          },
        },
      };

      VideoConferenceInstance['onParticipantLeftOnRealtime'](presenceParticipant);

      expect(VideoConferenceInstance['publish']).toBeCalledWith(
        MeetingEvent.MEETING_PARTICIPANT_LEFT,
        VideoConferenceInstance['createParticipantFromPresence'](presenceParticipant),
      );
    });

    test('should publish a message to client and detach when kick local participant happend', () => {
      VideoConferenceInstance['roomState'].destroy = jest.fn();
      VideoConferenceInstance['onKickLocalParticipant']();

      expect(VideoConferenceInstance['roomState'].destroy).toBeCalledWith();
    });
  });

  describe('toolbar controls', () => {
    test('should toggle chat', () => {
      VideoConferenceInstance['toggleChat']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_CHAT,
      );
    });

    test('should toggle meeting setup', () => {
      VideoConferenceInstance['toggleMeetingSetup']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MEETING_SETUP,
      );
    });

    test('should toggle user`s cam', () => {
      VideoConferenceInstance['toggleCam']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_CAM,
      );
    });

    test('should toggle user`s mic', () => {
      VideoConferenceInstance['toggleMicrophone']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_MICROPHONE,
      );
    });

    test('should toggle screenshare', () => {
      VideoConferenceInstance['toggleScreenShare']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_SCREENSHARE,
      );
    });

    test('should toggle transcript', () => {
      VideoConferenceInstance['toggleTranscript']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(
        MeetingControlsEvent.TOGGLE_TRANSCRIPT,
      );
    });

    test('should hang up', () => {
      VideoConferenceInstance['hangUp']();

      expect(VIDEO_MANAGER_MOCK.publishMessageToFrame).toBeCalledWith(MeetingControlsEvent.HANG_UP);
    });
  });
});
