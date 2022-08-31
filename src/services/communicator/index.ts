import { ObserverHelper } from '@superviz/immersive-core';

import { DevicesMessageTypes, MessageTypes } from '../../common/types/messages.types';
import { OrganizationType } from '../../common/types/organization.types';
import { UserType } from '../../common/types/user.types';
import RealtimeService from '../realtime';
import PhotonRealtimeService from '../realtime/photon';
import VideoConferencingManager from '../video-conference-manager';
import { VideoFrameStateType } from '../video-conference-manager/types';

import { CommunicatorFacade, CommunicatorType } from './types';

class Communicator {
  private readonly videoManager: VideoConferencingManager;
  private readonly realtime: PhotonRealtimeService;

  private debug: boolean = false;
  private language: string = 'en';
  private readonly roomId: string;
  private readonly user: UserType;
  private readonly organization: OrganizationType;
  private observerHelpers: { string?: ObserverHelper } = {};

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    photonAppId,
    organization,
    user,
    shouldKickUsersOnHostLeave,
  }: CommunicatorType) {
    this.debug = debug;
    this.language = language;
    this.roomId = roomId;
    this.user = user;
    this.organization = organization;

    this.realtime = RealtimeService.build();

    this.videoManager = new VideoConferencingManager({
      apiKey,
      debug,
      language,
      roomId,
    });

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

    // Realtime observers
    this.realtime.subscribeToRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.subscribeToMasterActorUpdate(this.onMasterActorDidChange);
    this.realtime.subscribeToSyncProperties(this.onSyncPropertiesDidChange);
    this.realtime.subscribeToWaitForHost(this.onWaitForHostDidChange);
    this.realtime.subscribeToKickAllUsers(this.onKickAllUsersDidChange);
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

  public start() {
    this.videoManager.start({
      roomId: this.roomId,
      user: this.user,
      organization: this.organization,
    });
  }

  public destroy() {
    this.publish(MessageTypes.DESTROY, undefined);

    this.videoManager.unsubscribeFromFrameState(this.onFrameStateDidChange);
    this.videoManager.unsubscribeFromRealtimeJoin(this.onRealtimeJoin);
    this.videoManager.unsubscribeFromHostChange(this.onHostDidChange);
    this.videoManager.unsubscribeFromGridModeChange(this.onGridModeDidChange);
    this.videoManager.unsubscribeFromUserAmountUpdate(this.onUserAmountUpdate);
    this.videoManager.unsubscribeFromUserListUpdate(this.onUserListUpdate);
    this.videoManager.unsubscribeFromUserJoined(this.onUserJoined);
    this.videoManager.unsubscribeFromUserLeft(this.onUserLeft);

    this.realtime.unsubscribeFromRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.unsubscribeFromMasterActorUpdate(this.onMasterActorDidChange);
    this.realtime.unsubscribeFromSyncProperties(this.onSyncPropertiesDidChange);
    this.realtime.unsubscribeFromWaitForHost(this.onWaitForHostDidChange);
    this.realtime.unsubscribeFromKickAllUsers(this.onKickAllUsersDidChange);
    this.realtime.authenticationObserver.unsubscribe(this.onAuthenticationFailed);

    Object.keys(this.observerHelpers).forEach((type) => this.unsubscribe(type));
    this.videoManager.leave();
    this.realtime.leave();
  }

  public setSyncProperties = (property) => {
    this.realtime.setSyncProperties(property);
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
    this.publish(MessageTypes.MEETING_KICK_USERS, kick);
    this.destroy();
  };

  private onRealtimeJoin = (userInfo) => {
    this.realtime.join(userInfo);
  };

  private onHostDidChange = (hostId: string): void => {
    this.realtime.setMasterActor(hostId);
  };

  private onFrameStateDidChange = (state: VideoFrameStateType): void => {
    if (state === VideoFrameStateType.INITIALIZED) {
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

  private onSameAccountError = (error: string): void => {
    this.publish(MessageTypes.MEETING_SAME_ACCOUNT_ERROR, error);
    this.destroy();
  };

  private onDevicesChange = (state: DevicesMessageTypes): void => {
    this.publish(MessageTypes.MEETING_DEVICES_CHANGE, state);
  };

  private onUserAmountUpdate = (count: number): void => {
    this.publish(MessageTypes.MEETING_USER_AMOUNT_UPDATE, count);
  };

  private onUserJoined = (user: UserType): void => {
    this.publish(MessageTypes.MEETING_USER_JOINED, user);
  };

  private onUserLeft = (user: UserType): void => {
    this.publish(MessageTypes.MEETING_USER_LEFT, user);
    this.destroy();
  };

  private onUserListUpdate = (users: Array<UserType>): void => {
    this.publish(MessageTypes.MEETING_USER_LIST_UPDATE, users);
  };

  private onAuthenticationFailed = (): void => {
    this.publish(MessageTypes.REALTIME_AUTHENTICATION_FAILED, null);
    this.destroy();
  };
}

export default (params: CommunicatorType): CommunicatorFacade => {
  const communicator = new Communicator(params);

  return {
    setSyncProperty: (property) => communicator.setSyncProperties(property),
    subscribe: (property, listener) => communicator.subscribe(property, listener),
    unsubscribe: (property) => communicator.unsubscribe(property),
    destroy: () => communicator.destroy(),
  };
};
