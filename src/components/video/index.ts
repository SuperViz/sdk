import { isEqual } from 'lodash';

import { RealtimeEvent } from '../../common/types/events.types';
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

import { ParticipandToFrame, VideoComponentOptions } from './types';

export class VideoComponent extends BaseComponent {
  protected name: string;
  protected logger: Logger;
  private participantList: ParticipandToFrame[] = [];

  private videoManager: VideoConfereceManager;
  private connectionService: ConnectionService;
  private browserService: BrowserService;

  private videoConfig: VideoManagerOptions;

  constructor(params?: VideoComponentOptions) {
    super();

    const {
      language,
      camsOff,
      screenshareOff,
      chatOff,
      defaultAvatars,
      offset,
      enableFollow,
      enableGoTo,
      enableGather,
      defaultToolbar,
      locales,
      avatars,
      devices,
      customColors,
      camerasPosition,
      skipMeetingSettings = false,
      disableCameraOverlay = false,
      layoutPosition,
    } = params ?? {};

    this.name = 'video-component';
    this.logger = new Logger('@superviz/sdk/video-component');

    this.browserService = new BrowserService();
    this.connectionService = new ConnectionService();
    this.connectionService.addListeners();

    this.videoConfig = {
      language,
      canUseChat: !chatOff,
      canUseCams: !camsOff,
      canUseScreenshare: !screenshareOff,
      canUseDefaultAvatars: !!defaultAvatars && !this.localParticipant?.avatar?.model,
      canUseGather: !!enableGather,
      canUseFollow: !!enableFollow,
      canUseGoTo: !!enableGoTo,
      canUseDefaultToolbar: defaultToolbar ?? true,
      camerasPosition,
      devices,
      skipMeetingSettings,
      disableCameraOverlay,
      browserService: this.browserService,
      offset,
      locales: locales ?? [],
      avatars: avatars ?? [],
      customColors,
      layoutPosition,
    };
  }

  /**
   * @function start
   * @description start video component
   * @returns {void}
   */
  protected start(): void {
    this.logger.log('video component @ start');

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

    this.unsubscribeFromRealtimeEvents();
    this.unsubscribeFromVideoEvents();
  }

  /**
   * @function startVideo
   * @description start video manager
   * @param {VideoManagerOptions} options - video manager params
   * @returns {void}
   */
  private startVideo = (): void => {
    this.logger.log('video component @ start video');
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

    this.videoManager.frameStateObserver.subscribe(this.onFrameStateChange);
    this.videoManager.realtimeEventsObserver.subscribe(this.onRealtimeEvent);
  };

  /**
   * @function unsubscribeFromVideoEvents
   * @description unsubscribe from video events
   * @returns {void}
   * */
  private unsubscribeFromVideoEvents = (): void => {
    this.logger.log('video component @ unsubscribe from video events');

    this.videoManager.frameStateObserver.unsubscribe(this.onFrameStateChange);
  };

  /**
   * @function suscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private suscribeToRealtimeEvents = (): void => {
    this.logger.log('video component @ subscribe to realtime events');
    this.realtime.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.subscribe(this.onParticipantsDidChange);
    this.realtime.hostObserver.subscribe(this.onHostParticipantDidChange);
  };

  /**
   * @function unsubscribeFromRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private unsubscribeFromRealtimeEvents = (): void => {
    this.logger.log('video component @ unsubscribe from realtime events');
    this.realtime.roomInfoUpdatedObserver.unsubscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantsDidChange);
    this.realtime.hostObserver.unsubscribe(this.onHostParticipantDidChange);
  };

  /** Video Events */

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
   * @function onRealtimeEvent
   * @description handler for realtime event
   * @param {RealtimeObserverPayload} payload - realtime event payload
   * @returns {void}
   * */
  private onRealtimeEvent = ({ event, data }: RealtimeObserverPayload): void => {
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
    }[event](data);
  };

  /** Realtime Events */

  /**
   * @function onRoomInfoUpdated
   * @description handler for room info update event
   * @param {AblyRealtimeData} room - room info
   * @returns {void}
   * */
  private onRoomInfoUpdated = (room: AblyRealtimeData): void => {
    this.logger.log('video component @ on room info updated', room);
    const { isGridModeEnable, followParticipantId, gather, drawing } = room;

    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
      isGridModeEnable,
    );
    this.videoManager.publishMessageToFrame(RealtimeEvent.REALTIME_DRAWING_CHANGE, drawing);
    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
      followParticipantId,
    );

    if (this.realtime.hostClientId === this.localParticipant.id && gather) {
      this.realtime.setGather(false);
    }
  };

  /**
   * @function onParticipantsDidChange
   * @description handler for participant list update event
   * @param {Record<string, AblyParticipant>} participants - participants
   * @returns {void}
   */
  private onParticipantsDidChange = (participants: Record<string, AblyParticipant>): void => {
    this.logger.log('video component @ on participants did change', participants);

    const participantList: ParticipandToFrame[] = Object.values(participants).map(
      (participant: AblyParticipant) => {
        return {
          timestamp: participant.timestamp,
          connectionId: participant.connectionId,
          participantId: participant.data.participantId,
          color: this.realtime.getSlotColor(participant.data.slotIndex).name,
          name: participant.data.name,
        };
      },
    );

    if (!isEqual(this.participantList, participantList)) {
      this.videoManager.publishMessageToFrame(
        RealtimeEvent.REALTIME_PARTICIPANT_LIST_UPDATE,
        participantList,
      );
    }

    this.participantList = participantList;
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
}
