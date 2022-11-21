import { ObserverHelper } from '@superviz/immersive-core';
import isEqual from 'lodash.isequal';

import {
  DeviceEvent,
  Dimensions,
  MeetingConnectionStatus,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
} from '../../common/types/events.types';
import { MeetingColors } from '../../common/types/meeting-colors.types';
import { User, UserGroup } from '../../common/types/user.types';
import { logger } from '../../common/utils';
import { BrowserService } from '../browser';
import { ConnectionService } from '../connection-status';
import { IntegrationManager } from '../integration';
import { Adapter, AdapterMethods } from '../integration/base-adapter/types';
import { AblyRealtimeService } from '../realtime';
import { AblyActor } from '../realtime/ably/types';
import { RealtimeJoinOptions } from '../realtime/base/types';
import VideoConferencingManager from '../video-conference-manager';
import {
  VideoFrameState,
  VideoManagerOptions,
  WindowSize,
} from '../video-conference-manager/types';

import { SuperVizSdk, CommunicatorOptions, AdapterOptions } from './types';

const pjson = require('../../../package.json');

class Communicator {
  private readonly realtime: AblyRealtimeService;
  private readonly connectionService: ConnectionService;
  private readonly browserService: BrowserService;
  private integrationManager: IntegrationManager | null = null;
  private videoManager: VideoConferencingManager;

  private readonly roomId: string;
  private readonly userGroup: UserGroup;

  private observerHelpers: { string?: ObserverHelper } = {};
  private user: User;
  private hasJoined: Boolean = false;
  private userList: User[] = [];

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    ablyKey,
    userGroup,
    user,
    shouldKickUsersOnHostLeave,
    // isBroadcast,
    camsOff,
    screenshareOff,
  }: CommunicatorOptions) {
    this.roomId = roomId;
    this.userGroup = userGroup;
    this.user = user;

    this.realtime = new AblyRealtimeService(ablyKey);
    this.browserService = new BrowserService();

    const canUseCams = !camsOff;
    const canUseScreenshare = !screenshareOff;

    // @TODO - turn this into a parameter when support for changing frame position is implemented.
    // request: https://github.com/SuperViz/sdk/issues/33
    const framePosition = 'right';

    this.connectionService = new ConnectionService();
    this.connectionService.addListerners();

    // Connection observers
    this.connectionService.connectionStatusObserver.subscribe(this.onConnectionStatusChange);

    this.startVideo({
      canUseCams,
      canUseScreenshare,
      apiKey,
      debug,
      language,
      roomId,
      position: framePosition,
      browserService: this.browserService,
      broadcast: false,
    });

    // Realtime observers
    this.realtime.roomInfoUpdatedObserver.subscribe(this.onRoomInfoUpdated);
    this.realtime.actorsObserver.subscribe(this.onActorsDidChange);
    this.realtime.masterActorObserver.subscribe(this.onMasterActorDidChange);
    this.realtime.syncPropertiesObserver.subscribe(this.onSyncPropertiesDidChange);
    this.realtime.kickAllUsersObserver.subscribe(this.onKickAllUsersDidChange);
    this.realtime.authenticationObserver.subscribe(this.onAuthenticationFailed);

    this.realtime.start({
      initialActorData: {
        userId: this.user.id,
        ...this.user,
      },
      roomId: this.roomId,
      apiKey,
      shouldKickUsersOnHostLeave: shouldKickUsersOnHostLeave ?? true,
    });
  }

  private get isIntegrationManagerInitializated(): boolean {
    return !!this.integrationManager;
  }

  public start() {
    // log sdk version
    logger.log('SUPERVIZ SDK VERSION', pjson.version);
    this.videoManager.start({
      roomId: this.roomId,
      user: this.user,
      userGroup: this.userGroup,
    });
  }

  public destroy() {
    this.publish(MeetingEvent.DESTROY, undefined);
    this.disconnectAdapter();

    this.videoManager.frameStateObserver.unsubscribe(this.onFrameStateDidChange);
    this.videoManager.frameSizeObserver.unsubscribe(this.onFrameSizeDidChange);

    this.videoManager.realtimeObserver.unsubscribe(this.onRealtimeJoin);
    this.videoManager.hostChangeObserver.unsubscribe(this.onHostDidChange);
    this.videoManager.followUserObserver.unsubscribe(this.onFollowUserDidChange);
    this.videoManager.gridModeChangeObserver.unsubscribe(this.onGridModeDidChange);
    this.videoManager.sameAccountErrorObserver.unsubscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.unsubscribe(this.onDevicesChange);
    this.videoManager.userAmountUpdateObserver.unsubscribe(this.onUserAmountUpdate);
    this.videoManager.userListObserver.unsubscribe(this.onUserListUpdate);
    this.videoManager.userJoinedObserver.unsubscribe(this.onUserJoined);
    this.videoManager.userLeftObserver.unsubscribe(this.onUserLeft);
    this.videoManager.meetingStateObserver.unsubscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.unsubscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );

    this.realtime.roomInfoUpdatedObserver.unsubscribe(this.onRoomInfoUpdated);
    this.realtime.actorsObserver.unsubscribe(this.onActorsDidChange);
    this.realtime.masterActorObserver.unsubscribe(this.onMasterActorDidChange);
    this.realtime.syncPropertiesObserver.unsubscribe(this.onSyncPropertiesDidChange);
    this.realtime.kickAllUsersObserver.unsubscribe(this.onKickAllUsersDidChange);
    this.realtime.authenticationObserver.unsubscribe(this.onAuthenticationFailed);

    this.connectionService.connectionStatusObserver.unsubscribe(this.onConnectionStatusChange);

    Object.keys(this.observerHelpers).forEach((type) => this.unsubscribe(type));
    this.videoManager.leave();
    this.realtime.leave();
    this.connectionService.removeListeners();
    this.hasJoined = false;
  }

  public setSyncProperty = <T>(name: string, property: T): void => {
    this.realtime.setSyncProperty(name, property);
  };

  public subscribe = (type: string, listener: Function) => {
    if (!this.observerHelpers[type]) {
      this.observerHelpers[type] = new ObserverHelper();
    }

    this.observerHelpers[type].subscribe(listener);
  };

  public unsubscribe = (type: string) => {
    if (this.observerHelpers[type]) {
      this.observerHelpers[type].reset();
      delete this.observerHelpers[type];
    }
  };

  private startVideo = (options: VideoManagerOptions): void => {
    this.videoManager = new VideoConferencingManager(options);

    // Video observers
    this.videoManager.frameStateObserver.subscribe(this.onFrameStateDidChange);
    this.videoManager.frameSizeObserver.subscribe(this.onFrameSizeDidChange);

    this.videoManager.realtimeObserver.subscribe(this.onRealtimeJoin);
    this.videoManager.hostChangeObserver.subscribe(this.onHostDidChange);
    this.videoManager.followUserObserver.subscribe(this.onFollowUserDidChange);
    this.videoManager.gridModeChangeObserver.subscribe(this.onGridModeDidChange);
    this.videoManager.sameAccountErrorObserver.subscribe(this.onSameAccountError);
    this.videoManager.devicesObserver.subscribe(this.onDevicesChange);
    this.videoManager.userAmountUpdateObserver.subscribe(this.onUserAmountUpdate);
    this.videoManager.userListObserver.subscribe(this.onUserListUpdate);
    this.videoManager.userJoinedObserver.subscribe(this.onUserJoined);
    this.videoManager.userLeftObserver.subscribe(this.onUserLeft);
    this.videoManager.meetingStateObserver.subscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.subscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );
  };

  private publish = (type: string, data: any): void => {
    const hasListenerRegistered = type in this.observerHelpers;

    if (hasListenerRegistered) {
      this.observerHelpers[type].publish(data);
    }
  };

  private onSyncPropertiesDidChange = (properties) => {
    Object.entries(properties).forEach(([key, value]) => {
      this.publish(key, value);
    });
  };

  private onKickAllUsersDidChange = (kick: boolean): void => {
    this.publish(MeetingEvent.MEETING_KICK_USERS, kick);
    this.destroy();
  };

  private onRealtimeJoin = (userInfo: RealtimeJoinOptions) => {
    this.realtime.join(userInfo);
  };

  private onHostDidChange = (hostId: string): void => {
    this.realtime.setHost(hostId);
  };

  private onFollowUserDidChange = (userId: string | null): void => {
    this.realtime.setFollowUser(userId);
  };

  private onFrameStateDidChange = (state: VideoFrameState): void => {
    if (state === VideoFrameState.INITIALIZED) {
      this.start();
    }
  };

  private onFrameSizeDidChange = (dimensions: Dimensions): void => {
    this.publish(MeetingEvent.FRAME_DIMENSIONS_UPDATE, dimensions);
  };

  private onRoomInfoUpdated = (room) => {
    const { isGridModeEnable, followUserId } = room._customProperties;

    this.videoManager.gridModeDidChange(isGridModeEnable);
    this.videoManager.followUserDidChange(followUserId);
  };

  private onActorsDidChange = (actors) => {
    if (actors[this.user.id] && !this.hasJoined) {
      this.publish(MeetingEvent.MY_USER_JOINED, this.user);
      this.hasJoined = true;
    }
    const userListForVideoFrame = Object.values(actors).map((actor: AblyActor) => {
      return {
        timestamp: actor.timestamp,
        connectionId: actor.connectionId,
        userId: actor.clientId,
        color: this.realtime.getSlotColor(actor.data.slotIndex).name,
      };
    });

    // update user list
    this.userList = this.updateUserListFromActors(actors);
    this.publish(MeetingEvent.MEETING_USER_LIST_UPDATE, this.userList);

    this.videoManager.actorsListDidChange(userListForVideoFrame);
  };

  private onMasterActorDidChange = (masterActor) => {
    this.videoManager.onMasterActorDidChange(masterActor?.newMasterActorUserId);
  };

  private onGridModeDidChange = (isGridModeEnable: boolean): void => {
    this.realtime.setGridMode(isGridModeEnable);
  };

  private updateUserListFromActors = (actors: AblyActor[]): User[] => {
    const userList = [];
    Object.values(actors).forEach((actor: AblyActor) => {
      userList.push({
        id: actor.clientId,
        color: this.realtime.getSlotColor(actor.data?.slotIndex).color,
        avatarUrl: actor.data.avatarUrl,
        avatarScale: actor.data.avatarScale,
        avatarHeight: actor.data.avatarHeight,
        isHostCandidate: actor.data.isHostCandidate,
        name: actor.data.name,
        isHost: this.realtime.localRoomProperties?.hostClientId === actor.clientId,
      });
    });
    return userList;
  };

  private onSameAccountError = (error: string): void => {
    this.publish(MeetingEvent.MEETING_SAME_USER_ERROR, error);
    this.destroy();
  };

  private onDevicesChange = (state: DeviceEvent): void => {
    this.publish(MeetingEvent.MEETING_DEVICES_CHANGE, state);
  };

  private onUserAmountUpdate = (count: number): void => {
    this.publish(MeetingEvent.MEETING_USER_AMOUNT_UPDATE, count);
  };

  private onUserJoined = (user: User): void => {
    this.publish(MeetingEvent.MEETING_USER_JOINED, user);
  };

  private onUserLeft = (user: User): void => {
    if (user.id === this.user.id) {
      this.publish(MeetingEvent.MY_USER_LEFT, user);
    }

    this.publish(MeetingEvent.MEETING_USER_LEFT, user);
    this.destroy();
  };

  private onUserListUpdate = (users: Array<User>): void => {
    const myUser = users.find((user) => user.id === this.user.id);

    if (!isEqual(myUser, this.user)) {
      this.user = myUser;
      this.publish(MeetingEvent.MY_USER_UPDATED, this.user);
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
    this.publish(MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE, newStatus);
  };

  // Integrator methods
  public connectAdapter(adapter: Adapter, adapterOptions: AdapterOptions): AdapterMethods {
    if (this.isIntegrationManagerInitializated) {
      throw new Error('the 3D adapter has already been started');
    }

    // this forces the initial property
    this.realtime.myActor.data.avatarUrl = adapterOptions.avatarUrl;
    this.realtime.myActor.data.avatarScale = adapterOptions.avatarScale;
    this.realtime.myActor.data.avatarHeight = adapterOptions.avatarHeight;

    let actors = [];
    if (this.realtime.getActors) {
      actors = Object.values(this.realtime.getActors);
    }
    this.integrationManager = new IntegrationManager({
      // @TODO - enable the flag when the feature is complete
      // isAvatarsEnabled: !this.user.isAudience,
      // isPointersEnabled: !this.user.isAudience,
      adapter,
      ...adapterOptions,
      localUser: {
        id: this.user.id,
        name: this.user.name,
        avatarUrl: adapterOptions.avatarUrl,
        avatarScale: adapterOptions.avatarScale,
        avatarHeight: adapterOptions.avatarHeight,
      },
      userList: actors.map((actor) => {
        const id = actor.clientId;
        const { name, avatarUrl, avatarScale, avatarHeight, slotIndex } = actor.data;
        return {
          id,
          name,
          avatarUrl,
          avatarScale,
          avatarHeight,
          slotIndex,
        };
      }),
      RealtimeService: this.realtime,
    });

    return {
      enableAvatars: this.integrationManager.enableAvatars,
      disableAvatars: this.integrationManager.disableAvatars,
      enablePointers: this.integrationManager.enablePointers,
      disablePointers: this.integrationManager.disablePointers,
      getUsersOn3D: () => (this.integrationManager.users ? this.integrationManager.users : []),
    };
  }

  public disconnectAdapter(): void {
    if (this.integrationManager) {
      this.integrationManager.adapter.destroy();
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

    connectAdapter: (adapter, props) => communicator.connectAdapter(adapter, props),
    disconnectAdapter: () => communicator.disconnectAdapter(),
  };
};
