import { isEqual } from 'lodash';

import {
  DeviceEvent,
  Dimensions,
  FrameEvent,
  MeetingConnectionStatus,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
  TranscriptState,
} from '../../common/types/events.types';
import { Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { BrowserService } from '../../services/browser';
import config from '../../services/config';
import { ConnectionService } from '../../services/connection-status';
import { AblyParticipant, AblyRealtimeData } from '../../services/realtime/ably/types';
import { HostObserverCallbackResponse } from '../../services/realtime/base/types';
import VideoConfereceManager from '../../services/video-conference-manager';
import {
  DrawingData,
  RealtimeObserverPayload,
  VideoFrameState,
  VideoManagerOptions,
} from '../../services/video-conference-manager/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ParticipandToFrame, VideoComponentOptions } from './types';

export class VideoComponent extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private participantToFrameList: ParticipandToFrame[] = [];
  private participantsOnMeeting: Partial<Participant>[] = [];

  private videoManager: VideoConfereceManager;
  private connectionService: ConnectionService;
  private browserService: BrowserService;

  private videoConfig: VideoManagerOptions;
  private params?: VideoComponentOptions;

  constructor(params?: VideoComponentOptions) {
    super();

    this.params = params;

    this.name = ComponentNames.VIDEO_CONFERENCE;
    this.logger = new Logger(`@superviz/sdk/${ComponentNames.VIDEO_CONFERENCE}`);

    this.browserService = new BrowserService();
    this.connectionService = new ConnectionService();
    this.connectionService.addListeners();

    // Connection observers
    this.connectionService.connectionStatusObserver.subscribe(this.onConnectionStatusChange);
  }

  /**
   * @function start
   * @description start video component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('video component @ start');
    this.publish(MeetingEvent.MEETING_START);

    this.suscribeToRealtimeEvents();
    this.startVideo();
  }

  /**
   * @function destroy
   * @description destroy video component
   * @returns {void}
   */
  protected destroy(): void {
    this.logger.log('video component @ destroy');

    this.publish(MeetingEvent.DESTROY);

    this.unsubscribeFromRealtimeEvents();
    this.unsubscribeFromVideoEvents();

    this.videoManager.leave();
    this.connectionService.removeListeners();
  }

  /**
   * @function startVideo
   * @description start video manager
   * @param {VideoManagerOptions} options - video manager params
   * @returns {void}
   */
  private startVideo = (): void => {
    this.videoConfig = {
      language: this.params?.language,
      canUseChat: !this.params?.chatOff,
      canUseCams: !this.params?.camsOff,
      canUseScreenshare: !this.params?.screenshareOff,
      canUseDefaultAvatars: !!this.params?.defaultAvatars && !this.localParticipant?.avatar?.model,
      canUseGather: !!this.params?.enableGather,
      canUseFollow: !!this.params?.enableFollow,
      canUseGoTo: !!this.params?.enableGoTo,
      canUseDefaultToolbar: this.params?.defaultToolbar ?? true,
      camerasPosition: this.params?.camerasPosition,
      devices: this.params?.devices,
      skipMeetingSettings: this.params?.skipMeetingSettings,
      browserService: this.browserService,
      offset: this.params?.offset,
      locales: this.params?.locales ?? [],
      avatars: this.params?.avatars ?? [],
      customColors: this.params?.customColors,
      layoutPosition: this.params?.layoutPosition,
    };

    this.logger.log('video component @ start video', this.videoConfig);
    this.videoManager = new VideoConfereceManager(this.videoConfig);

    this.subscribeToVideoEvents();
  };

  /**
   * @function subscribeToVideoEvents
   * @description subscribe to video events
   * @returns {void}
   */
  private subscribeToVideoEvents = (): void => {
    this.logger.log('video component @ subscribe to video events');

    this.videoManager.meetingConnectionObserver.subscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );
    this.videoManager.participantListObserver.subscribe(this.onParticipantListUpdate);
    this.videoManager.waitingForHostObserver.subscribe(this.onWaitingForHost);
    this.videoManager.frameSizeObserver.subscribe(this.onFrameSizeDidChange);
    this.videoManager.meetingStateObserver.subscribe(this.onMeetingStateChange);
    this.videoManager.frameStateObserver.subscribe(this.onFrameStateChange);
    this.videoManager.realtimeEventsObserver.subscribe(this.onRealtimeEventFromFrame);
    this.videoManager.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.videoManager.participantLeftObserver.subscribe(this.onParticipantLeft);
    this.videoManager.sameAccountErrorObserver.subscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.subscribe(this.onDevicesChange);
  };

  /**
   * @function unsubscribeFromVideoEvents
   * @description unsubscribe from video events
   * @returns {void}
   * */
  private unsubscribeFromVideoEvents = (): void => {
    this.logger.log('video component @ unsubscribe from video events');

    this.videoManager.meetingConnectionObserver.unsubscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );
    this.videoManager.participantListObserver.unsubscribe(this.onParticipantListUpdate);
    this.videoManager.waitingForHostObserver.unsubscribe(this.onWaitingForHost);
    this.videoManager.frameSizeObserver.unsubscribe(this.onFrameSizeDidChange);
    this.videoManager.meetingStateObserver.unsubscribe(this.onMeetingStateChange);
    this.videoManager.frameStateObserver.unsubscribe(this.onFrameStateChange);
    this.videoManager.realtimeEventsObserver.unsubscribe(this.onRealtimeEventFromFrame);
    this.videoManager.participantJoinedObserver.unsubscribe(this.onParticipantJoined);
    this.videoManager.participantLeftObserver.unsubscribe(this.onParticipantLeft);
    this.videoManager.sameAccountErrorObserver.unsubscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.unsubscribe(this.onDevicesChange);
  };

  /**
   * @function suscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private suscribeToRealtimeEvents = (): void => {
    this.logger.log('video component @ subscribe to realtime events');
    this.realtime.kickAllParticipantsObserver.subscribe(this.onKickAllParticipantsDidChange);
    this.realtime.kickParticipantObserver.subscribe(this.onKickLocalParticipant);
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoinedOnRealtime);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeftOnRealtime);
    this.realtime.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.subscribe(this.onRealtimeParticipantsDidChange);
    this.realtime.hostObserver.subscribe(this.onHostParticipantDidChange);
  };

  /**
   * @function unsubscribeFromRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private unsubscribeFromRealtimeEvents = (): void => {
    this.logger.log('video component @ unsubscribe from realtime events');
    this.realtime.kickAllParticipantsObserver.unsubscribe(this.onKickAllParticipantsDidChange);
    this.realtime.participantJoinedObserver.unsubscribe(this.onParticipantJoinedOnRealtime);
    this.realtime.participantLeaveObserver.unsubscribe(this.onParticipantLeftOnRealtime);
    this.realtime.roomInfoUpdatedObserver.unsubscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.unsubscribe(this.onRealtimeParticipantsDidChange);
    this.realtime.hostObserver.unsubscribe(this.onHostParticipantDidChange);
  };

  /**
   * @function createParticipantListFromAblyList
   * @description update participant list from ably participant list
   * @param {Record<string, AblyParticipant>} participants - ably participant list
   * @returns {Participant[]} participant list
   * */
  private createParticipantFromAblyPresence = (participant: AblyParticipant): Participant => {
    return {
      id: participant.clientId,
      color: this.realtime.getSlotColor(participant.data?.slotIndex).color,
      avatar: participant.data.avatar,
      type: participant.data.type,
      name: participant.data.name,
      isHost: this.realtime.hostClientId === participant.clientId,
    };
  };

  /** Video Events */

  /**
   * @function onFrameSizeDidChange
   * @description handler for frame size change event
   * @param {Dimensions} dimensions - frame dimensions
   * @returns {void}
   * */
  private onFrameSizeDidChange = (dimensions: Dimensions): void => {
    this.publish(FrameEvent.FRAME_DIMENSIONS_UPDATE, dimensions);
  };

  /**
   * @function onWaitingForHost
   * @description handler for waiting for host event
   * @param {boolean} waiting - whether or not waiting for host
   * @returns {void}
   */
  private onWaitingForHost = (waiting: boolean): void => {
    this.publish(MeetingEvent.MEETING_WAITING_FOR_HOST, waiting);
  };

  /**
   * @function onCOnnectionStatusChange
   * @description handler for connection status change event
   * @param {MeetingConnectionStatus} newStatus - new connection status
   * @returns {void}
   */
  private onConnectionStatusChange = (newStatus: MeetingConnectionStatus): void => {
    this.logger.log('video component @ on connection status change', newStatus);

    const connectionProblemStatus = [
      MeetingConnectionStatus.BAD,
      MeetingConnectionStatus.DISCONNECTED,
      MeetingConnectionStatus.POOR,
      MeetingConnectionStatus.LOST_CONNECTION,
    ];

    if (connectionProblemStatus.includes(newStatus)) {
      this.realtime.freezeSync(true);
    }

    if (
      connectionProblemStatus.includes(this.connectionService.oldConnectionStatus) &&
      !connectionProblemStatus.includes(newStatus)
    ) {
      this.realtime.freezeSync(false);
    }

    this.publish(MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE, newStatus);
  };

  /**
   * @function onMeetingStateChange
   * @description handler for meeting state change event
   * @param {MeetingState} state - meeting state
   * @returns {void}
   */
  private onMeetingStateChange = (state: MeetingState): void => {
    this.logger.log('video component @ on meeting state change', state);
    this.publish(MeetingEvent.MEETING_STATE_UPDATE, state);
  };

  /**
   * @function onSameAccountError
   * @description handler for same account error event
   * @param {string} error - error message
   * @returns {void}
   * */
  private onSameAccountError = (error: string): void => {
    this.publish(MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR, error);
    this.detach();
  };

  /**
   * @function onDevicesChange
   * @description handler for devices change event
   * @param {DeviceEvent} state - device state
   * @returns {void}
   * */
  private onDevicesChange = (state: DeviceEvent): void => {
    this.publish(MeetingEvent.MEETING_DEVICES_CHANGE, state);
  };

  /**
   * @function onFrameStateChange
   * @description handler for frame state change event
   * @param {VideoFrameState} state - frame state
   * @returns
   */
  private onFrameStateChange = (state: VideoFrameState): void => {
    this.logger.log('video component @ on frame state change', state);

    if (state !== VideoFrameState.INITIALIZED) return;

    this.videoManager.start({
      group: this.group,
      participant: this.localParticipant,
      roomId: config.get<string>('roomId'),
    });
  };

  /**
   * @function onRealtimeEventFromFrame
   * @description handler for realtime event
   * @param {RealtimeObserverPayload} payload - realtime event payload
   * @returns {void}
   * */
  private onRealtimeEventFromFrame = ({ event, data }: RealtimeObserverPayload): void => {
    this.logger.log('video component @ on realtime event from frame', event, data);

    const _ = {
      [RealtimeEvent.REALTIME_HOST_CHANGE]: (data: string) => this.realtime.setHost(data),
      [RealtimeEvent.REALTIME_GATHER]: (data: boolean) => this.realtime.setGather(data),
      [RealtimeEvent.REALTIME_GRID_MODE_CHANGE]: (data: boolean) => this.realtime.setGridMode(data),
      [RealtimeEvent.REALTIME_DRAWING_CHANGE]: (data: DrawingData) => {
        this.realtime.setDrawing(data);
      },
      [RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT]: (data: string) => {
        this.realtime.setFollowParticipant(data);
      },
      [MeetingEvent.MEETING_KICK_PARTICIPANT]: (data: string) => {
        this.realtime.setKickParticipant(data);
      },
      [RealtimeEvent.REALTIME_TRANSCRIPT_CHANGE]: (data: TranscriptState) => {
        this.realtime.setTranscript(data);
      },
      [RealtimeEvent.REALTIME_GO_TO_PARTICIPANT]: (data: string) => {
        this.eventBus.publish(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, data);
      },
    }[event](data);

    this.publish(event, data);
  };

  /**
   * @function onParticipantJoined
   * @description handler for participant joined event
   * @param {Participant} participant - participant
   * @returns {void}
   */
  private onParticipantJoined = (participant: Participant): void => {
    this.logger.log('video component @ on participant joined', participant);

    this.localParticipant = participant;

    this.publish(MeetingEvent.MEETING_PARTICIPANT_JOINED, participant);
    this.publish(MeetingEvent.MY_PARTICIPANT_JOINED, participant);

    if (this.videoConfig.canUseDefaultAvatars) {
      this.realtime.updateMyProperties({
        avatar: participant.avatar,
        name: participant.name,
      });

      return;
    }

    this.realtime.updateMyProperties({
      name: participant.name,
    });
  };

  /**
   * @function onParticipantLeft
   * @description handler for participant left event
   * @param {Participant} _ - participant
   * @returns {void}
   */
  private onParticipantLeft = (_: Participant): void => {
    this.logger.log('video component @ on participant left', this.localParticipant);

    this.publish(MeetingEvent.MY_PARTICIPANT_LEFT, this.localParticipant);
    this.detach();
  };

  private onParticipantListUpdate = (participants: Partial<Participant>[]): void => {
    this.logger.log('video component @ on participant list update', participants);

    if (isEqual(this.participantsOnMeeting, participants)) return;

    this.publish(MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, participants);

    if (this.participantsOnMeeting.length !== participants.length) {
      this.publish(MeetingEvent.MEETING_PARTICIPANT_AMOUNT_UPDATE, participants.length);
    }

    this.participantsOnMeeting = participants;
  };

  /** Realtime Events */

  /**
   * @function onKickAllParticipantsDidChange
   * @description handler for kick all participants event
   * @param {boolean} kick - whether or not to kick all participants
   * @returns {void}
   */
  private onKickAllParticipantsDidChange = (kick: boolean): void => {
    this.logger.log('video component @ on kick all participants did change', kick);

    this.publish(MeetingEvent.MEETING_KICK_PARTICIPANTS, kick);
    this.detach();
  };

  /**
   * @function onKickLocalParticipant
   * @description handler for kick local participant event
   * @param {string} participantId - participant id
   * @returns {void}
   */

  private onKickLocalParticipant = (): void => {
    this.logger.log('video component @ on kick local participant');

    this.publish(MeetingEvent.MEETING_KICK_PARTICIPANT, this.localParticipant);
    this.detach();
  };

  /**
   * @function onRoomInfoUpdated
   * @description handler for room info update event
   * @param {AblyRealtimeData} room - room info
   * @returns {void}
   * */
  private onRoomInfoUpdated = (room: AblyRealtimeData): void => {
    this.logger.log('video component @ on room info updated', room);
    const { isGridModeEnable, followParticipantId, gather, drawing, transcript } = room;

    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
      isGridModeEnable,
    );
    this.videoManager.publishMessageToFrame(RealtimeEvent.REALTIME_DRAWING_CHANGE, drawing);
    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
      followParticipantId,
    );
    this.videoManager.publishMessageToFrame(RealtimeEvent.REALTIME_TRANSCRIPT_CHANGE, transcript);

    if (this.realtime.hostClientId === this.localParticipant.id && gather) {
      this.realtime.setGather(false);
    }
  };

  /**
   * @function onRealtimeParticipantsDidChange
   * @description handler for participant list update event
   * @param {Record<string, AblyParticipant>} participants - participants
   * @returns {void}
   */
  private onRealtimeParticipantsDidChange = (
    participants: Record<string, AblyParticipant>,
  ): void => {
    this.logger.log('video component @ on participants did change', participants);

    const participantList: ParticipandToFrame[] = Object.values(participants).map(
      (participant: AblyParticipant) => {
        return {
          timestamp: participant.timestamp,
          connectionId: participant.connectionId,
          participantId: participant.clientId,
          color: this.realtime.getSlotColor(participant.data.slotIndex).name,
          name: participant.data.name,
          isHost: this.realtime.hostClientId === participant.clientId,
          avatar: participant.data.avatar,
          type: participant.data.type,
        };
      },
    );

    if (!isEqual(this.participantToFrameList, participantList)) {
      this.videoManager.publishMessageToFrame(
        RealtimeEvent.REALTIME_PARTICIPANT_LIST_UPDATE,
        participantList,
      );
    }

    this.participantToFrameList = participantList;
  };

  /**
   * @function onHostParticipantDidChange
   * @description handler for host participant change event
   * @param {HostObserverCallbackResponse} data - host change data
   * @returns {void}
   * */
  private onHostParticipantDidChange = (data: HostObserverCallbackResponse): void => {
    this.logger.log('video component @ on host participant did change', data);

    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_HOST_CHANGE,
      data?.newHostParticipantId,
    );
  };

  /**
   * @function onParticipantJoinedOnRealtime
   * @description handler for participant joined event
   * @param {AblyParticipant} participant - participant
   * @returns {void}
   */
  private onParticipantJoinedOnRealtime = (participant: AblyParticipant): void => {
    this.logger.log('video component @ on participant joined on realtime', participant);

    this.publish(
      MeetingEvent.MEETING_PARTICIPANT_JOINED,
      this.createParticipantFromAblyPresence(participant),
    );
  };

  /**
   * @function onParticipantLeftOnRealtime
   * @description handler for participant left event
   * @param {AblyParticipant} participant
   * @returns {void}
   */
  private onParticipantLeftOnRealtime = (participant: AblyParticipant): void => {
    this.logger.log('video component @ on participant left on realtime', participant);

    this.publish(
      MeetingEvent.MEETING_PARTICIPANT_LEFT,
      this.createParticipantFromAblyPresence(participant),
    );
  };
}
