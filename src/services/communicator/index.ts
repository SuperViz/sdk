import isEqual from 'lodash.isequal';

import {
  DeviceEvent,
  Dimensions,
  FrameEvent,
  MeetingConnectionStatus,
  MeetingControlsEvent,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
  TranscriptionEvent,
} from '../../common/types/events.types';
import { Participant, Group } from '../../common/types/participant.types';
import { Observer, logger } from '../../common/utils';
import { BrowserService } from '../browser';
import { ConnectionService } from '../connection-status';
import { IntegrationManager } from '../integration';
import { Plugin, PluginMethods } from '../integration/base-plugin/types';
import { AblyRealtimeService } from '../realtime';
import { AblyRealtimeData, AblyParticipant, RealtimeMessage } from '../realtime/ably/types';
import { HostObserverCallbackResponse, ParticipantInfo } from '../realtime/base/types';
import VideoConferencingManager from '../video-conference-manager';
import { VideoFrameState, VideoManagerOptions } from '../video-conference-manager/types';

import { SuperVizSdk, CommunicatorOptions, PluginOptions, ParticipandToFrame } from './types';

const PACKAGE_JSON = require('../../../package.json');

class Communicator {
  private readonly realtime: AblyRealtimeService;
  private readonly connectionService: ConnectionService;
  private readonly browserService: BrowserService;
  private integrationManager: IntegrationManager | null = null;
  private videoManager: VideoConferencingManager;

  private readonly roomId: string;
  private readonly group: Group;

  private observers: Record<string, Observer> = {};
  private participant: Participant;
  private participantList: Participant[] = [];
  private isBroadcast: boolean = false;

  constructor({
    conferenceLayerUrl,
    apiUrl,
    apiKey,
    debug = false,
    language,
    roomId,
    ablyKey,
    group,
    participant,
    shouldKickParticipantsOnHostLeave,
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
    waterMark,
    camerasPosition,
    skipMeetingSettings = false,
    disableCameraOverlay = false,
    layoutPosition,
  }: CommunicatorOptions) {
    this.roomId = roomId;
    this.group = group;
    this.participant = participant;

    this.realtime = new AblyRealtimeService(apiUrl, ablyKey);
    this.browserService = new BrowserService();

    const canUseCams = !camsOff;
    const canUseScreenshare = !screenshareOff;
    const canUseChat = !chatOff;
    const canUseDefaultAvatars = !!defaultAvatars && !participant?.avatar?.model;
    const canUseDefaultToolbar = defaultToolbar ?? true;

    const canUseFollow = !!enableFollow;
    const canUseGoTo = !!enableGoTo;
    const canUseGather = !!enableGather;

    if (participant?.avatar === undefined) {
      this.participant = Object.assign({}, this.participant, {
        avatar: {
          model: '',
        },
      });
    }

    this.connectionService = new ConnectionService();
    this.connectionService.addListeners();

    // Connection observers
    this.connectionService.connectionStatusObserver.subscribe(this.onConnectionStatusChange);

    this.startVideo({
      conferenceLayerUrl,
      canUseChat,
      canUseCams,
      canUseScreenshare,
      canUseDefaultAvatars,
      canUseFollow,
      canUseGoTo,
      canUseGather,
      canUseDefaultToolbar,
      devices,
      ablyKey,
      apiKey,
      apiUrl,
      debug,
      language,
      roomId,
      browserService: this.browserService,
      offset,
      locales: locales ?? [],
      avatars: avatars ?? [],
      customColors,
      waterMark,
      camerasPosition,
      skipMeetingSettings,
      disableCameraOverlay,
      layoutPosition,
    });

    // Realtime observers
    this.realtime.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.subscribe(this.onParticipantsDidChange);
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeft);
    this.realtime.hostObserver.subscribe(this.onHostParticipantDidChange);
    this.realtime.syncPropertiesObserver.subscribe(this.onSyncPropertiesDidChange);
    this.realtime.kickAllParticipantsObserver.subscribe(this.onKickAllParticipantsDidChange);
    this.realtime.authenticationObserver.subscribe(this.onAuthenticationFailed);

    this.realtime.start({
      initialParticipantData: {
        participantId: this.participant.id,
        ...this.participant,
      },
      roomId: this.roomId,
      apiKey,
      shouldKickParticipantsOnHostLeave: shouldKickParticipantsOnHostLeave ?? true,
      isBroadcast: this.isBroadcast,
    });
  }

  private get isIntegrationManagerInitialized(): boolean {
    return !!this.integrationManager;
  }

  private checkBroadcastMode(): void {
    this.isBroadcast = this.participantList.some((participant) => participant.type === 'audience');
  }

  public start() {
    // log sdk version
    logger.log('SUPERVIZ SDK VERSION', PACKAGE_JSON.version);
    this.videoManager.start({
      roomId: this.roomId,
      participant: this.participant,
      group: this.group,
    });
  }

  /**
   * @function destroy
   * @description Destroy the communicator instance
   * @return {void}
   */
  public destroy(): void {
    this.publish(MeetingEvent.DESTROY, undefined);

    this.videoManager.frameStateObserver.unsubscribe(this.onFrameStateDidChange);
    this.videoManager.frameSizeObserver.unsubscribe(this.onFrameSizeDidChange);

    this.videoManager.realtimeObserver.unsubscribe(this.onRealtimeJoin);
    this.videoManager.hostChangeObserver.unsubscribe(this.onHostDidChange);
    this.videoManager.followParticipantObserver.unsubscribe(this.onFollowParticipantDidChange);
    this.videoManager.gridModeChangeObserver.unsubscribe(this.onGridModeDidChange);
    this.videoManager.goToParticipantObserver.unsubscribe(this.onGoToParticipantDidChange);
    this.videoManager.gatherParticipantsObserver.unsubscribe(this.onGatherDidChange);
    this.videoManager.sameAccountErrorObserver.unsubscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.unsubscribe(this.onDevicesChange);
    this.videoManager.participantAmountUpdateObserver.unsubscribe(this.onParticipantAmountUpdate);
    this.videoManager.participantListObserver.unsubscribe(this.onParticipantListUpdate);
    this.videoManager.participantLeftObserver.unsubscribe(this.onMyParticipantLeft);
    this.videoManager.participantAvatarObserver.unsubscribe(this.onParticipantAvatarUpdate);

    this.videoManager.meetingStateObserver.unsubscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.unsubscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );

    this.realtime.roomInfoUpdatedObserver.unsubscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantsDidChange);
    this.realtime.hostObserver.unsubscribe(this.onHostParticipantDidChange);
    this.realtime.syncPropertiesObserver.unsubscribe(this.onSyncPropertiesDidChange);
    this.realtime.kickAllParticipantsObserver.unsubscribe(this.onKickAllParticipantsDidChange);
    this.realtime.authenticationObserver.unsubscribe(this.onAuthenticationFailed);
    this.realtime.participantJoinedObserver.unsubscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.unsubscribe(this.onParticipantLeft);

    this.connectionService.connectionStatusObserver.unsubscribe(this.onConnectionStatusChange);

    Object.keys(this.observers).forEach((type) => this.unsubscribe(type));
    this.videoManager.leave();
    this.realtime.leave();
    this.connectionService.removeListeners();
    this.unloadPlugin();
  }

  /**
   * @function setSyncProperty
   * @description Set a property to be synced with other participants
   * @param name - name of the property
   * @param value - value of the property
   * @returns {void}
   */
  public setSyncProperty = (name: string, value?: unknown): void => {
    this.realtime.setSyncProperty(name, value);
  };

  /**
   * @function subscribe
   * @description Subscribe to an event
   * @param type - event type
   * @param listener - event callback
   * @returns {void}
   */
  public subscribe = (type: string, listener: Function): void => {
    if (!this.observers[type]) {
      this.observers[type] = new Observer({ logger });
    }

    this.observers[type].subscribe(listener);
  };

  /**
   * @function unsubscribe
   * @description Unsubscribe from an event
   * @param type - event type
   * @returns {void}
   */
  public unsubscribe = (type: string): void => {
    if (this.observers[type]) {
      this.observers[type].reset();
      delete this.observers[type];
    }
  };

  /**
   * @function publishMeetingControlEvent
   * @param event: MeetingControlsEvent
   * @description publish event to meeting controls
   * @returns {void}
   */
  public publishMeetingControlEvent(event: MeetingControlsEvent): void {
    this.videoManager.publishMessageToFrame(event);
  }

  /**
   * @function fetchSyncClientProperty
   * @description get realtime client data history
   * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
   */
  public fetchSyncClientProperty(
    eventName?: string,
  ): Promise<RealtimeMessage | Record<string, RealtimeMessage>> {
    return this.realtime.fetchSyncClientProperty(eventName);
  }

  /**
   * @function follow
   * @description - send follow message to all participants on plugin
   * @param participantId: string
   * @returns {void}
   */
  public follow(participantId?: string): void {
    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
      participantId,
    );
    this.realtime.setFollowParticipant(participantId);
  }

  /**
   * @function gather
   * @description send gather message to all participants on plugin
   * @returns {void}
   */
  public gather(): void {
    this.realtime.setGather(true);
  }

  /**
   * @function goTo
   * @description call goTo on plugin
   * @param participantId: string
   * @returns {void}
   */
  public goTo(participantId: string): void {
    this.integrationManager.goToParticipant(participantId);
  }

  /**
   * @function publishTranscriptionEvent
   * @description publish transcription event to transcription service
   * @param {TranscriptionEvent} event - event to be published
   * @param {unknown} payload - payload to be sent to transcription service
   */
  public publishTranscriptionEvent = (event: TranscriptionEvent, payload?: unknown): void => {
    this.videoManager.publishMessageToFrame(event, payload);
  };

  /**
   * @function startVideo
   * @description start video manager
   * @param {VideoManagerOptions} options - video manager params
   * @returns {void}
   */
  private startVideo = (options: VideoManagerOptions): void => {
    this.videoManager = new VideoConferencingManager(options);

    // Video observers
    this.videoManager.frameStateObserver.subscribe(this.onFrameStateDidChange);
    this.videoManager.frameSizeObserver.subscribe(this.onFrameSizeDidChange);

    this.videoManager.realtimeObserver.subscribe(this.onRealtimeJoin);
    this.videoManager.hostChangeObserver.subscribe(this.onHostDidChange);
    this.videoManager.followParticipantObserver.subscribe(this.onFollowParticipantDidChange);
    this.videoManager.goToParticipantObserver.subscribe(this.onGoToParticipantDidChange);
    this.videoManager.gatherParticipantsObserver.subscribe(this.onGatherDidChange);
    this.videoManager.gridModeChangeObserver.subscribe(this.onGridModeDidChange);
    this.videoManager.sameAccountErrorObserver.subscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.subscribe(this.onDevicesChange);
    this.videoManager.participantAmountUpdateObserver.subscribe(this.onParticipantAmountUpdate);
    this.videoManager.participantListObserver.subscribe(this.onParticipantListUpdate);
    this.videoManager.participantLeftObserver.subscribe(this.onMyParticipantLeft);
    this.videoManager.participantAvatarObserver.subscribe(this.onParticipantAvatarUpdate);
    this.videoManager.meetingStateObserver.subscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.subscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );
  };

  /**
   * @function publish
   * @description Publish an event to client
   * @param type - event type
   * @param data - event data
   * @returns {void}
   */
  private publish = (type: string, data: unknown): void => {
    const hasListenerRegistered = type in this.observers;

    if (hasListenerRegistered) {
      this.observers[type].publish(data);
    }
  };

  /**
   * @function onSyncPropertiesDidChange
   * @property {Record<string, unknown>} properties - properties that changed
   * @description handler for client sync properties change
   * @returns {void}
   */
  private onSyncPropertiesDidChange = (properties: Record<string, unknown>): void => {
    Object.entries(properties).forEach(([key, value]) => {
      this.publish(key, value);
    });
  };

  /**
   * @function onKickAllParticipantsDidChange
   * @description handler for kick all participants event
   * @param {boolean} kick - whether or not to kick all participants
   * @returns {void}
   */
  private onKickAllParticipantsDidChange = (kick: boolean): void => {
    this.publish(MeetingEvent.MEETING_KICK_PARTICIPANTS, kick);
    this.destroy();
  };

  /**
   * @function onRealtimeJoin
   * @description handler for realtime join event
   * @param {ParticipantInfo} participantInfo - participant info
   * @returns {void}
   */
  private onRealtimeJoin = (participantInfo: ParticipantInfo): void => {
    this.realtime.join(participantInfo);
  };

  /**
   * @function onHostDidChange
   * @description handler for host change event
   * @param {string} hostId - host id
   * @returns {void}
   */
  private onHostDidChange = (hostId: string): void => {
    this.realtime.setHost(hostId);
  };

  /**
   * @function onFollowParticipantDidChange
   * @description handler for follow participant change event
   * @param {string} participantId - participant id
   * @returns {void}
   * */
  private onFollowParticipantDidChange = (participantId?: string): void => {
    this.realtime.setFollowParticipant(participantId);
    this.setSyncProperty(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, participantId);
  };

  /**
   * @function onGoToParticipantDidChange
   * @description handler for go to participant change event
   * @param {string} participantId - participant id
   * @returns {void}
   * */
  private onGoToParticipantDidChange = (participantId: string): void => {
    this.integrationManager?.goToParticipant(participantId);
    this.setSyncProperty(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, participantId);
  };

  /**
   * @function onGatherDidChange
   * @description handler for gather change event
   * @returns {void}
   * */
  private onGatherDidChange = (): void => {
    this.realtime.setGather(true);
    this.setSyncProperty(RealtimeEvent.REALTIME_GATHER);
  };

  /**
   * @function onFrameStateDidChange
   * @param {VideoFrameState} state - frame state
   * @returns {void}
   */
  private onFrameStateDidChange = (state: VideoFrameState): void => {
    if (state !== VideoFrameState.INITIALIZED) return;

    this.start();
  };

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
   * @function onRoomInfoUpdated
   * @description handler for room info update event
   * @param {AblyRealtimeData} room - room info
   * @returns {void}
   * */
  private onRoomInfoUpdated = (room: AblyRealtimeData): void => {
    const { isGridModeEnable, followParticipantId, gather } = room;

    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_GRID_MODE_CHANGE,
      isGridModeEnable,
    );
    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT,
      followParticipantId,
    );

    if (this.realtime.hostClientId === this.participant.id && gather) {
      this.realtime.setGather(false);
    }
  };

  /**
   * @function onParticipantListUpdate
   * @description handler for participant list update event
   * @param {AblyParticipant[]} participants - participants
   * @returns {void}
   */
  private onParticipantsDidChange = (participants: AblyParticipant[]): void => {
    const participantListForVideoFrame: ParticipandToFrame[] = Object.values(participants).map(
      (participant: AblyParticipant) => {
        return {
          timestamp: participant.timestamp,
          connectionId: participant.connectionId,
          participantId: participant.clientId,
          color: this.realtime.getSlotColor(participant.data.slotIndex).name,
          name: participant.data.name,
        };
      },
    );

    // update participant list
    const participantList = this.updateParticipantListFromAblyList(participants);

    if (!isEqual(this.participantList, participantList)) {
      this.participantList = participantList;

      this.publish(MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, this.participantList);
      this.videoManager.publishMessageToFrame(
        RealtimeEvent.REALTIME_PARTICIPANT_LIST_UPDATE,
        participantListForVideoFrame,
      );
    }
  };

  /**
   * @function onHostParticipantDidChange
   * @description handler for host participant change event
   * @param {HostObserverCallbackResponse} data - host change data
   * @returns {void}
   * */
  private onHostParticipantDidChange = (data: HostObserverCallbackResponse): void => {
    const newHost = this.participantList.find((participant: Participant) => {
      return participant.id === data?.newHostParticipantId;
    });

    this.videoManager.publishMessageToFrame(
      RealtimeEvent.REALTIME_HOST_CHANGE,
      data?.newHostParticipantId,
    );

    if (this.realtime.isLocalParticipantHost) {
      this.setSyncProperty(MeetingEvent.MEETING_HOST_CHANGE, newHost);
    }
  };

  /**
   * @function onGridModeDidChange
   * @description handler for grid mode change event
   * @param {boolean} isGridModeEnable - is grid mode enable
   * @returns {void}
   * */
  private onGridModeDidChange = (isGridModeEnable: boolean): void => {
    this.realtime.setGridMode(isGridModeEnable);
  };

  /**
   * @function updateParticipantListFromAblyList
   * @description update participant list from ably participant list
   * @param {AblyParticipant[]} participants - ably participant list
   * @returns {Participant[]} participant list
   * */
  private updateParticipantListFromAblyList = (participants: AblyParticipant[]): Participant[] => {
    const participantList = Object.values(participants).map((participant: AblyParticipant) => ({
      id: participant.clientId,
      color: this.realtime.getSlotColor(participant.data?.slotIndex).color,
      avatarConfig: participant.data.avatarConfig,
      avatar: participant.data.avatar,
      type: participant.data.type,
      name: participant.data.name,
      isHost: this.realtime.hostClientId === participant.clientId,
    }));

    return participantList;
  };

  /**
   * @function onSameAccountError
   * @description handler for same account error event
   * @param {string} error - error message
   * @returns {void}
   * */
  private onSameAccountError = (error: string): void => {
    this.publish(MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR, error);
    this.destroy();
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
   * @function onParticipantAmountUpdate
   * @description handler for participant amount update event
   * @param {number} count - participant count
   * @returns {void}
   * */
  private onParticipantAmountUpdate = (count: number): void => {
    this.publish(MeetingEvent.MEETING_PARTICIPANT_AMOUNT_UPDATE, count);
  };

  /**
   * @function onParticipantJoined
   * @description handler for participant joined event
   * @param {AblyParticipant} ablyParticipant - ably participant
   * @returns {void}
   * */
  private onParticipantJoined = (ablyParticipant: AblyParticipant): void => {
    this.checkBroadcastMode();
    const participant = this.participantList.find(
      (participantItem) => participantItem.id === ablyParticipant.data.id,
    );

    if (!participant) return;

    if (participant.id === this.participant.id) {
      this.publish(MeetingEvent.MY_PARTICIPANT_JOINED, participant);
    }
    this.publish(MeetingEvent.MEETING_PARTICIPANT_JOINED, participant);
  };

  /**
   * @function onParticipantLeft
   * @description handler for participant left event
   * @param {AblyParticipant} ablyParticipant - ably participant
   * @returns {void}
   * */
  private onParticipantLeft = (ablyParticipant: AblyParticipant): void => {
    const participant = this.participantList.find(
      (participantItem) => participantItem.id === ablyParticipant.data.id,
    );
    this.publish(MeetingEvent.MEETING_PARTICIPANT_LEFT, participant);
  };

  /**
   * @function onMyParticipantLeft
   * @description handler for my participant left event
   * @param {Participant} participant - ably participant
   * @returns {void}
   * */
  private onMyParticipantLeft = (participant: Participant): void => {
    this.publish(MeetingEvent.MY_PARTICIPANT_LEFT, participant);
    this.destroy();
  };

  /**
   * @function onParticipantAvatarUpdate
   * @description handler for participant avatar update event
   * @param {string} avatarLink - avatar link
   * @returns {void}
   * */
  private onParticipantAvatarUpdate = (avatarLink: string): void => {
    this.participant.avatar.model = avatarLink;
  };

  /**
   * @function onParticipantListUpdate
   * @description handler for participant list update event
   * @param {Array<Participant>} participants - participant list
   * @returns {void}
   * */
  private onParticipantListUpdate = (participants: Array<Participant>): void => {
    const myParticipant = participants.find(
      (participant) => participant.id === this.participant.id,
    );

    if (!isEqual(myParticipant, this.participant)) {
      this.participant = Object.assign({}, this.participant, myParticipant);
      this.publish(MeetingEvent.MY_PARTICIPANT_UPDATED, this.participant);
    }
  };

  /**
   * @function onAuthenticationFailed
   * @description handler for authentication failed event
   * @param {RealtimeEvent} event - event name
   * @returns {void}
   */
  private onAuthenticationFailed = (event: RealtimeEvent): void => {
    this.publish(RealtimeEvent.REALTIME_AUTHENTICATION_FAILED, event);
    this.destroy();
  };

  /**
   * @function onMeetingStateUpdate
   * @description handler for meeting state update event
   * @param {MeetingState} newState - new meeting state
   * @returns {void}
   */
  private onMeetingStateUpdate = (newState: MeetingState) => {
    logger.log('MEETING STATE', newState);
    this.publish(MeetingEvent.MEETING_STATE_UPDATE, newState);
  };

  /**
   * @function onCOnnectionStatusChange
   * @description handler for connection status change event
   * @param {MeetingConnectionStatus} newStatus - new connection status
   * @returns {void}
   */
  private onConnectionStatusChange = (newStatus: MeetingConnectionStatus): void => {
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
   * @function loadPlugin
   * @description load plugin
   * @param {Plugin} plugin - plugin
   * @param {PluginOptions} pluginOptions - plugin options
   * @returns {PluginMethods}
   * */
  public loadPlugin(plugin: Plugin, pluginOptions: PluginOptions): PluginMethods {
    if (this.isIntegrationManagerInitialized) {
      throw new Error('the 3D plugin has already been started');
    }

    if (pluginOptions.avatarConfig) {
      this.realtime.setParticipantData({ avatarConfig: pluginOptions.avatarConfig });
    }

    if (this.participant.avatar && this.participant.avatar.model) {
      this.realtime.setParticipantData({ avatar: { model: this.participant.avatar.model } });
    }

    let participants = [];

    if (this.realtime.getParticipants) {
      participants = Object.values(this.realtime.getParticipants);
    }

    this.integrationManager = new IntegrationManager({
      plugin,
      ...pluginOptions,
      localParticipant: {
        id: this.participant.id,
        name: this.participant.name,
        avatar: this.participant.avatar,
        avatarConfig: pluginOptions.avatarConfig,
      },
      participantList: participants.map((participant) => {
        const id = participant.clientId;
        const { name, avatar, avatarConfig, slotIndex, isAudience } = participant.data;
        return {
          id,
          name,
          avatar,
          avatarConfig,
          slotIndex,
          isAudience,
        };
      }),
      RealtimeService: this.realtime,
    });

    return {
      enableAvatars: this.integrationManager?.enableAvatars,
      disableAvatars: this.integrationManager?.disableAvatars,
      enableMouse: this.integrationManager?.enableMouse,
      disableMouse: this.integrationManager?.disableMouse,
      enableLaser: this.integrationManager?.enableLaser,
      disableLaser: this.integrationManager?.disableLaser,
      getParticipantsOn3D: () => {
        return this.integrationManager?.participants ? this.integrationManager.participants : [];
      },
      getAvatars: () => this.integrationManager?.getAvatars,
    };
  }

  /**
   * @function unloadPlugin
   * @description unload plugin
   * @returns {void}
   * */
  public unloadPlugin(): void {
    if (this.integrationManager) {
      this.integrationManager.plugin.destroy();
      this.integrationManager = null;
    }
  }
}

export default (params: CommunicatorOptions): SuperVizSdk => {
  const communicator = new Communicator(params);

  return {
    setSyncProperty: (name, property) => communicator.setSyncProperty(name, property),
    subscribe: (propertyName, listener) => communicator.subscribe(propertyName, listener),
    unsubscribe: (propertyName) => communicator.unsubscribe(propertyName),
    destroy: () => communicator.destroy(),
    follow: (participantId) => communicator.follow(participantId),
    fetchSyncProperty: (eventName?: string) => communicator.fetchSyncClientProperty(eventName),
    gather: () => communicator.gather(),
    goTo: (participantId) => communicator.goTo(participantId),

    toggleMeetingSetup: () => {
      return communicator.publishMeetingControlEvent(MeetingControlsEvent.TOGGLE_MEETING_SETUP);
    },
    toggleMicrophone: () => {
      return communicator.publishMeetingControlEvent(MeetingControlsEvent.TOGGLE_MICROPHONE);
    },
    toggleCam: () => communicator.publishMeetingControlEvent(MeetingControlsEvent.TOGGLE_CAM),
    toggleScreenShare: () => {
      return communicator.publishMeetingControlEvent(MeetingControlsEvent.TOGGLE_SCREENSHARE);
    },
    hangUp: () => communicator.publishMeetingControlEvent(MeetingControlsEvent.HANG_UP),
    toggleChat: () => {
      return communicator.publishMeetingControlEvent(MeetingControlsEvent.TOGGLE_MEETING_CHAT);
    },

    startTranscription: (language) => {
      return communicator.publishTranscriptionEvent(
        TranscriptionEvent.TRANSCRIPTION_START,
        language,
      );
    },
    stopTranscription: () => {
      return communicator.publishTranscriptionEvent(TranscriptionEvent.TRANSCRIPTION_STOP);
    },

    loadPlugin: (plugin, props) => communicator.loadPlugin(plugin, props),
    unloadPlugin: () => communicator.unloadPlugin(),
  };
};
