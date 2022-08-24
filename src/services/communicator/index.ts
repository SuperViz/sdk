import { ObserverHelper } from '@superviz/immersive-core';

import { DevicesMessageTypes, MessageTypes } from '../../common/types/messages.types';
import { OrganizationType } from '../../common/types/organization.types';
import { UserType } from '../../common/types/user.types';
import RealtimeService from '../realtime';
import PhotonRealtimeService from '../realtime/photon';
import VideoConferencingManager from '../video-conference-manager';
import { VideoFrameStateType } from '../video-conference-manager/types';

import { CommunicatorType } from './types';

export default class Communicator {
  private videoManager: VideoConferencingManager;

  private debug: boolean = false;
  private language: string = 'en';
  private roomId: string;
  private user: UserType;
  private photonAppId: string;
  private realtime: PhotonRealtimeService;
  private organization: OrganizationType;
  private observerHelpers: { string?: ObserverHelper } = {};

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    photonAppId,
    organization,
    user,
  }: CommunicatorType) {
    const { id: externalUserId } = user;

    this.debug = debug;
    this.language = language;
    this.roomId = roomId;
    this.user = user;
    this.photonAppId = photonAppId;
    this.organization = organization;

    this.realtime = RealtimeService.build();

    this.videoManager = new VideoConferencingManager({
      apiKey,
      debug,
      language,
      roomId,
      externalUserId,
    });

    this.videoManager.subscribeToFrameState(this.onFrameStateDidChange);
    this.videoManager.subscribeToMeetingJoin(this.onMeetingJoin);
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
  }

  public start() {
    this.videoManager.start({
      roomId: this.roomId,
      user: this.user,
      organization: this.organization,
    });
    this.realtime.start(this.roomId, { userId: this.user.id }, { photonAppId: this.photonAppId });
  }

  public leave() {
    this.videoManager.leave();
    this.realtime.leave();
  }

  public destroy() {
    this.videoManager.unsubscribeFromFrameState(this.onFrameStateDidChange);
    this.videoManager.unsubscribeFromMeetingJoin(this.onMeetingJoin);
    this.videoManager.unsubscribeFromHostChange(this.onHostDidChange);
    this.videoManager.unsubscribeFromGridModeChange(this.onGridModeDidChange);
    this.videoManager.unsubscribeFromUserAmountUpdate(this.onUserAmountUpdate);
    this.videoManager.unsubscribeFromUserListUpdate(this.onUserListUpdate);
    this.videoManager.unsubscribeFromUserJoined(this.onUserJoined);
    this.videoManager.unsubscribeFromUserLeft(this.onUserLeft);

    this.realtime.unsubscribeFromRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.unsubscribeFromMasterActorUpdate(this.onMasterActorDidChange);
    this.realtime.unsubscribeFromSyncProperties(this.onSyncPropertiesDidChange);

    Object.keys(this.observerHelpers).forEach((type) => this.unsubscribe(type));
    this.leave();
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

  public publish = (type: string, data: any): void => {
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

  private onMeetingJoin = (userInfo) => {
    this.realtime.join(userInfo);
  };

  private onHostDidChange = (hostId) => {
    this.realtime.setMasterActor(hostId);
  };

  private onFrameStateDidChange = (state: VideoFrameStateType) => {
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
  };

  private onUserListUpdate = (users: Array<UserType>): void => {
    this.publish(MessageTypes.MEETING_USER_LIST_UPDATE, users);
  };
}
