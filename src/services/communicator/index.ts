import isEqual from 'lodash.isequal';

import {
  DeviceEvent,
  Dimensions,
  FrameEvent,
  MeetingConnectionStatus,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
} from '../../common/types/events.types';
import { Participant, Group } from '../../common/types/participant.types';
import { Observer, logger } from '../../common/utils';
import { BrowserService } from '../browser';
import { ConnectionService } from '../connection-status';
import { IntegrationManager } from '../integration';
import { Plugin, PluginMethods } from '../integration/base-plugin/types';
import { AblyRealtimeService } from '../realtime';
import { AblyRealtimeData, AblyParticipant, RealtimeMessage } from '../realtime/ably/types';
import { ParticipantInfo } from '../realtime/base/types';
import VideoConferencingManager from '../video-conference-manager';
import { VideoFrameState, VideoManagerOptions } from '../video-conference-manager/types';

import { SuperVizSdk, CommunicatorOptions, PluginOptions } from './types';

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
  private hasJoined: Boolean = false;
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
    camerasOrientation,
    skipMeetingSettings = false,
    disableCameraOverlay = false,
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

    // @TODO - turn this into a parameter when support for changing frame position is implemented.
    // request: https://github.com/SuperViz/sdk/issues/33
    const framePosition = 'right';

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
      position: framePosition,
      browserService: this.browserService,
      offset,
      locales: locales ?? [],
      avatars: avatars ?? [],
      customColors,
      waterMark,
      camerasOrientation,
      skipMeetingSettings,
      disableCameraOverlay,
    });

    // Realtime observers
    this.realtime.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdated);
    this.realtime.participantsObserver.subscribe(this.onParticipantsDidChange);
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeft);
    this.realtime.masterParticipantObserver.subscribe(this.onMasterParticipantDidChange);
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

  public destroy() {
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
    this.realtime.masterParticipantObserver.unsubscribe(this.onMasterParticipantDidChange);
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
    this.hasJoined = false;
    this.unloadPlugin();
  }

  public setSyncProperty = <T>(name: string, property?: T): void => {
    this.realtime.setSyncProperty(name, property);
  };

  public subscribe = (type: string, listener: Function) => {
    if (!this.observers[type]) {
      this.observers[type] = new Observer({ logger });
    }

    this.observers[type].subscribe(listener);
  };

  public unsubscribe = (type: string) => {
    if (this.observers[type]) {
      this.observers[type].reset();
      delete this.observers[type];
    }
  };

  /**
   * @function toggleChat
   * @returns {void}
   */
  public toggleChat(): void {
    this.videoManager.toggleChat();
  }

  /**
   * @function toggleMeetingSetup
   * @returns {void}
   */
  public toggleMeetingSetup(): void {
    this.videoManager.toggleMeetingSetup();
  }

  /**
   * @function toggleCam
   * @returns {void}
   */
  public toggleCam(): void {
    this.videoManager.toggleCam();
  }

  /**
   * @function toggleMicrophone
   * @returns {void}
   */
  public toggleMicrophone(): void {
    this.videoManager.toggleMicrophone();
  }

  /**
   * @function toggleScreenShare
   * @returns {void}
   */
  public toggleScreenShare(): void {
    this.videoManager.toggleScreenShare();
  }

  /**
   * @function hangUp
   * @returns {void}
   */
  public hangUp(): void {
    this.videoManager.hangUp();
  }

  /**
   * @function follow
   * @param participantId: string
   * @returns {void}
   */
  public follow(participantId?: string): void {
    this.videoManager.followParticipantDidChange(participantId);
    this.realtime.setFollowParticipant(participantId);
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
   * @function gather
   * @returns {void}
   */
  public gather(): void {
    this.realtime.setGather(true);
  }

  /**
   * @function goTo
   * @param participantId: string
   * @returns {void}
   */
  public goTo(participantId: string): void {
    this.integrationManager.goToParticipant(participantId);
  }

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

  public startTranscription = (language): void => {
    this.videoManager.startTranscription(language);
  };

  public stopTranscription = (): void => {
    this.videoManager.stopTranscription();
  };

  private publish = (type: string, data: any): void => {
    const hasListenerRegistered = type in this.observers;

    if (hasListenerRegistered) {
      this.observers[type].publish(data);
    }
  };

  private onSyncPropertiesDidChange = (properties) => {
    Object.entries(properties).forEach(([key, value]) => {
      this.publish(key, value);
    });
  };

  private onKickAllParticipantsDidChange = (kick: boolean): void => {
    this.publish(MeetingEvent.MEETING_KICK_PARTICIPANTS, kick);
    this.destroy();
  };

  private onRealtimeJoin = (participantInfo: ParticipantInfo) => {
    this.realtime.join(participantInfo);
  };

  private onHostDidChange = (hostId: string): void => {
    const participant = this.participantList.find((participant) => participant.id === hostId);

    this.realtime.setHost(hostId);
    this.setSyncProperty(MeetingEvent.MEETING_HOST_CHANGE, participant);
  };

  private onFollowParticipantDidChange = (participantId?: string): void => {
    this.realtime.setFollowParticipant(participantId);
    this.setSyncProperty(RealtimeEvent.REALTIME_FOLLOW_PARTICIPANT, participantId);
  };

  private onGoToParticipantDidChange = (participantId: string): void => {
    this.integrationManager?.goToParticipant(participantId);
    this.setSyncProperty(RealtimeEvent.REALTIME_GO_TO_PARTICIPANT, participantId);
  };

  private onGatherDidChange = (): void => {
    this.realtime.setGather(true);
    this.setSyncProperty(RealtimeEvent.REALTIME_GATHER);
  };

  private onFrameStateDidChange = (state: VideoFrameState): void => {
    if (state === VideoFrameState.INITIALIZED) {
      this.start();
    }
  };

  private onFrameSizeDidChange = (dimensions: Dimensions): void => {
    this.publish(FrameEvent.FRAME_DIMENSIONS_UPDATE, dimensions);
  };

  private onRoomInfoUpdated = (room: AblyRealtimeData) => {
    const { isGridModeEnable, followParticipantId, gather } = room;

    this.videoManager.gridModeDidChange(isGridModeEnable);
    this.videoManager.followParticipantDidChange(followParticipantId);
    if (this.realtime.hostClientId === this.participant.id && gather) {
      this.realtime.setGather(false);
    }
  };

  private onParticipantsDidChange = (participants) => {
    if (participants[this.participant.id] && !this.hasJoined) {
      this.hasJoined = true;
    }
    const participantListForVideoFrame = Object.values(participants).map(
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
    this.participantList = this.updateParticipantListFromParticipants(participants);
    this.publish(MeetingEvent.MEETING_PARTICIPANT_LIST_UPDATE, this.participantList);

    this.videoManager.participantsListDidChange(participantListForVideoFrame);
  };

  private onMasterParticipantDidChange = (masterParticipant) => {
    this.videoManager.onMasterParticipantDidChange(
      masterParticipant?.newMasterParticipantParticipantId,
    );
  };

  private onGridModeDidChange = (isGridModeEnable: boolean): void => {
    this.realtime.setGridMode(isGridModeEnable);
  };

  private updateParticipantListFromParticipants = (
    participants: AblyParticipant[],
  ): Participant[] => {
    const participantList = [];
    Object.values(participants).forEach((participant: AblyParticipant) => {
      participantList.push({
        id: participant.clientId,
        color: this.realtime.getSlotColor(participant.data?.slotIndex).color,
        avatarConfig: participant.data.avatarConfig,
        avatar: participant.data.avatar,
        type: participant.data.type,
        name: participant.data.name,
        isHost: this.realtime.hostClientId === participant.clientId,
      });
    });
    return participantList;
  };

  private onSameAccountError = (error: string): void => {
    this.publish(MeetingEvent.MEETING_SAME_PARTICIPANT_ERROR, error);
    this.destroy();
  };

  private onDevicesChange = (state: DeviceEvent): void => {
    this.publish(MeetingEvent.MEETING_DEVICES_CHANGE, state);
  };

  private onParticipantAmountUpdate = (count: number): void => {
    this.publish(MeetingEvent.MEETING_PARTICIPANT_AMOUNT_UPDATE, count);
  };

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

  private onParticipantLeft = (ablyParticipant: AblyParticipant): void => {
    const participant = this.participantList.find(
      (participantItem) => participantItem.id === ablyParticipant.data.id,
    );
    this.publish(MeetingEvent.MEETING_PARTICIPANT_LEFT, participant);
  };

  private onMyParticipantLeft = (participant: Participant): void => {
    this.publish(MeetingEvent.MY_PARTICIPANT_LEFT, participant);
    this.destroy();
  };

  private onParticipantAvatarUpdate = (avatarLink: string): void => {
    this.participant.avatar.model = avatarLink;
  };

  private onParticipantListUpdate = (participants: Array<Participant>): void => {
    const myParticipant = participants.find(
      (participant) => participant.id === this.participant.id,
    );

    if (!isEqual(myParticipant, this.participant)) {
      this.participant = Object.assign({}, this.participant, myParticipant);
      this.publish(MeetingEvent.MY_PARTICIPANT_UPDATED, this.participant);
    }
  };

  private onAuthenticationFailed = (event: RealtimeEvent): void => {
    this.publish(RealtimeEvent.REALTIME_AUTHENTICATION_FAILED, event);
    this.destroy();
  };

  private onMeetingStateUpdate = (newState: MeetingState) => {
    logger.log('MEETING STATE', newState);
    this.publish(MeetingEvent.MEETING_STATE_UPDATE, newState);
  };

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

    toggleMeetingSetup: () => communicator.toggleMeetingSetup(),
    toggleMicrophone: () => communicator.toggleMicrophone(),
    toggleCam: () => communicator.toggleCam(),
    toggleScreenShare: () => communicator.toggleScreenShare(),
    hangUp: () => communicator.hangUp(),
    toggleChat: () => communicator.toggleChat(),

    startTranscription: (language) => communicator.startTranscription(language),
    stopTranscription: () => communicator.stopTranscription(),

    loadPlugin: (plugin, props) => communicator.loadPlugin(plugin, props),
    unloadPlugin: () => communicator.unloadPlugin(),
  };
};
