import { ObserverHelper } from '@superviz/immersive-core';
import isEqual from 'lodash.isequal';

import {
  DeviceEvent,
  MeetingConnectionStatus,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
} from '../../common/types/events.types';
import { User, UserGroup } from '../../common/types/user.types';
import { ConnectionService } from '../connection-status';
import { IntegrationManager } from '../integration';
import { UserOn3D } from '../integration/users/types';
import RealtimeService from '../realtime';
import PhotonRealtimeService from '../realtime/photon';
import VideoConferencingManager from '../video-conference-manager';
import { VideoFrameState } from '../video-conference-manager/types';

import {
  SuperVizSdk,
  CommunicatorOptions,
  InitializeAdapterOptions,
  AdapterMethods,
} from './types';

class Communicator {
  private readonly videoManager: VideoConferencingManager;
  private readonly realtime: PhotonRealtimeService;
  private readonly connectionService: ConnectionService;

  private integrationManager: IntegrationManager | null = null;

  private debug: boolean = false;
  private language: string = 'en';
  private readonly roomId: string;
  private readonly userGroup: UserGroup;
  private observerHelpers: { string?: ObserverHelper } = {};
  private user: User;
  private userList: User[] = [];

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    photonAppId,
    userGroup,
    user,
    shouldKickUsersOnHostLeave,
  }: CommunicatorOptions) {
    this.debug = debug;
    this.language = language;
    this.roomId = roomId;
    this.user = user;
    this.userGroup = userGroup;

    this.realtime = RealtimeService.build();

    this.videoManager = new VideoConferencingManager({
      apiKey,
      debug,
      language,
      roomId,
    });

    this.connectionService = new ConnectionService();
    this.connectionService.addListerners();

    // Connection observers
    this.connectionService.connectionStatusObserver.subscribe(this.onConnectionStatusChange);

    // Video observers
    this.videoManager.subscribeToFrameState(this.onFrameStateDidChange);
    this.videoManager.subscribeToRealtimeJoin(this.onRealtimeJoin);
    this.videoManager.subscribeToHostChange(this.onHostDidChange);
    this.videoManager.subscribeToGridModeChange(this.onGridModeDidChange);
    this.videoManager.subscribeToSameAccountError(this.onSameAccountError);
    this.videoManager.subscribeToDevicesEvents(this.onDevicesChange);
    this.videoManager.subscribeToUserAmountUpdate(this.onUserAmountUpdate);
    this.videoManager.subscribeToUserListUpdate(this.onUserListUpdate);
    this.videoManager.subscribeToUserJoined(this.onUserJoined);
    this.videoManager.subscribeToUserLeft(this.onUserLeft);
    this.videoManager.meetingStateObserver.subscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.subscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );

    // Realtime observers
    this.realtime.subscribeToRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.subscribeToMasterActorUpdate(this.onMasterActorDidChange);
    this.realtime.subscribeToSyncProperties(this.onSyncPropertiesDidChange);
    this.realtime.subscribeToWaitForHost(this.onWaitForHostDidChange);
    this.realtime.subscribeToKickAllUsers(this.onKickAllUsersDidChange);
    this.realtime.subscribeToActorJoined(this.onUserJoinedInRealtime);
    this.realtime.subscribeToActorLeave(this.onUserLeaveInRealtime);
    this.realtime.authenticationObserver.subscribe(this.onAuthenticationFailed);

    this.realtime.start({
      actorInfo: {
        userId: this.user.id,
        ...this.user,
      },
      roomId: this.roomId,
      photonAppId,
      apiKey,
      shouldKickUsersOnHostLeave: shouldKickUsersOnHostLeave ?? true,
    });
  }

  private get isIntegrationManagerInitializated(): boolean {
    return !!this.integrationManager;
  }

  public start() {
    this.videoManager.start({
      roomId: this.roomId,
      user: this.user,
      userGroup: this.userGroup,
    });
  }

  public destroy() {
    this.publish(MeetingEvent.DESTROY, undefined);

    this.videoManager.unsubscribeFromFrameState(this.onFrameStateDidChange);
    this.videoManager.unsubscribeFromRealtimeJoin(this.onRealtimeJoin);
    this.videoManager.unsubscribeFromHostChange(this.onHostDidChange);
    this.videoManager.unsubscribeFromGridModeChange(this.onGridModeDidChange);
    this.videoManager.unsubscribeFromUserAmountUpdate(this.onUserAmountUpdate);
    this.videoManager.unsubscribeFromUserListUpdate(this.onUserListUpdate);
    this.videoManager.unsubscribeFromUserJoined(this.onUserJoined);
    this.videoManager.unsubscribeFromUserLeft(this.onUserLeft);
    this.videoManager.meetingStateObserver.unsubscribe(this.onMeetingStateUpdate);
    this.videoManager.meetingConnectionObserver.unsubscribe(
      this.connectionService.updateMeetingConnectionStatus,
    );

    this.realtime.unsubscribeFromRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.unsubscribeFromMasterActorUpdate(this.onMasterActorDidChange);
    this.realtime.unsubscribeFromSyncProperties(this.onSyncPropertiesDidChange);
    this.realtime.unsubscribeFromWaitForHost(this.onWaitForHostDidChange);
    this.realtime.unsubscribeFromKickAllUsers(this.onKickAllUsersDidChange);
    this.realtime.authenticationObserver.unsubscribe(this.onAuthenticationFailed);
    this.realtime.unsubscribeFromActorJoined(this.onUserJoinedInRealtime);
    this.realtime.unsubscribeFromActorLeave(this.onUserLeaveInRealtime);

    this.connectionService.connectionStatusObserver.unsubscribe(this.onConnectionStatusChange);

    Object.keys(this.observerHelpers).forEach((type) => this.unsubscribe(type));
    this.videoManager.leave();
    this.realtime.leave();
    this.connectionService.removeListeners();
  }

  public setSyncProperties = <T>(name: string, property: T): void => {
    this.realtime.setSyncProperties({ [name]: property });
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

  private onRealtimeJoin = (userInfo) => {
    this.realtime.join(userInfo);
  };

  private onHostDidChange = (hostId: string): void => {
    this.realtime.setMasterActor(hostId);
  };

  private onFrameStateDidChange = (state: VideoFrameState): void => {
    if (state === VideoFrameState.INITIALIZED) {
      this.start();
    }
  };

  private onActorsListDidChange = (room) => {
    this.videoManager.actorsListDidChange(room._customProperties.slots);
    this.videoManager.gridModeDidChange(room._customProperties.isGridModeEnable);
  };

  private onMasterActorDidChange = (masterActor) => {
    this.videoManager.onMasterActorDidChange(masterActor?.newMasterActorUserId);
  };

  private onGridModeDidChange = (isGridModeEnable: boolean): void => {
    this.realtime.setGridMode(isGridModeEnable);
  };

  private onWaitForHostDidChange = (isWaiting: boolean): void => {
    this.videoManager.waitForHostDidChange(isWaiting);
  };

  private onUserJoinedInRealtime = (actor): void => {
    if (!this.isIntegrationManagerInitializated) return;

    const { id, name } = actor.customProperties;

    this.integrationManager.addUser({
      id,
      name,
    });
  };

  private onUserLeaveInRealtime = (actor): void => {
    if (!this.isIntegrationManagerInitializated) return;

    this.integrationManager.removeUser(actor.customProperties.id);
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
    if (user.id === this.user.id) {
      this.publish(MeetingEvent.MY_USER_JOINED, user);
    }

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
    this.userList = users;
    const myUser = this.userList.find((user) => user.id === this.user.id);

    if (!isEqual(myUser, this.user)) {
      this.user = myUser;
      this.publish(MeetingEvent.MY_USER_UPDATED, this.user);
    }

    this.publish(MeetingEvent.MEETING_USER_LIST_UPDATE, this.userList);
  };

  private onAuthenticationFailed = (): void => {
    this.publish(RealtimeEvent.REALTIME_AUTHENTICATION_FAILED, null);
    this.destroy();
  };

  private onMeetingStateUpdate = (newState: MeetingState) => {
    this.publish(MeetingEvent.MEETING_STATE_UPDATE, newState);
  };

  private onConnectionStatusChange = (newStatus: MeetingConnectionStatus): void => {
    this.publish(MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE, newStatus);
  };

  // Integrator methods
  public init3DAdapter({
    isAvatarsEnabled,
    isPointersEnabled,
  }: InitializeAdapterOptions): AdapterMethods {
    if (this.isIntegrationManagerInitializated) {
      throw new Error('is integration manager initializeted');
    }

    this.integrationManager = new IntegrationManager({
      isAvatarsEnabled,
      isPointersEnabled,
      localUser: {
        id: this.user.id,
        name: this.user.name,
      },
      userList: this.userList.map((user) => {
        const { id, name }: User = user;

        return {
          id,
          name,
        };
      }),
    });

    return {
      disablePointers: this.integrationManager.disablePointers,
      enablePointers: this.integrationManager.enablePointers,
      enableAvatars: this.integrationManager.enableAvatars,
      disableAvatars: this.integrationManager.disableAvatars,
      getUsersOn3D: () => this.integrationManager.users,
    };
  }

  public getUsersOn3D(): UserOn3D[] {
    return this.integrationManager.users;
  }
}

export default (params: CommunicatorOptions): SuperVizSdk => {
  const communicator = new Communicator(params);

  return {
    setSyncProperty: (name, property) => communicator.setSyncProperties(name, property),
    subscribe: (propertyName, listener) => communicator.subscribe(propertyName, listener),
    unsubscribe: (propertyName) => communicator.unsubscribe(propertyName),
    destroy: () => communicator.destroy(),

    init3DAdapter: (props) => communicator.init3DAdapter(props),
    getUsersOn3D: () => communicator.getUsersOn3D(),
  };
};
