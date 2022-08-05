import { logger } from '../../common/utils';
import VideoConferencingManager from '../VideoConfereceManager';
import { VideoFrameStateType } from '../VideoConferenceManager.types';
import RealtimeService from '../realtime/RealtimeService';
import PhotonRealtimeService from '../realtime/photon/PhotonRealtimeService';

import { ICommunicatorTypes } from './Communicator.types';

export default class Communicator {
  private videoManager: VideoConferencingManager;

  private debug: boolean = false;
  private language: string = 'en';
  private roomId: string;
  private externalUserId: string;
  private photonAppId: string;
  private realtime: PhotonRealtimeService;

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    externalUserId,
    photonAppId,
  }: ICommunicatorTypes) {
    this.debug = debug;
    this.language = language;
    this.roomId = roomId;
    this.externalUserId = externalUserId;
    this.photonAppId = photonAppId;

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
    this.realtime.subscribeToRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.subscribeToMasterActorUpdate(this.onMasterActorDidChange);
  }

  start() {
    this.videoManager.start({
      roomId: this.roomId,
      externalUserId: this.externalUserId,
    });
    this.realtime.start(
      this.roomId,
      { userId: this.externalUserId },
      { photonAppId: this.photonAppId },
    );
  }

  onMeetingJoin = (userInfo) => {
    this.realtime.join(userInfo);
  };

  onHostDidChange = (hostId) => {
    this.realtime.setMasterActor(hostId);
  };

  leave() {
    this.videoManager.leave();
    this.realtime.leave();
  }

  destroy() {
    this.videoManager.unsubscribeFromFrameState(this.onFrameStateDidChange);
    this.videoManager.unsubscribeFromMeetingJoin(this.onMeetingJoin);
    this.videoManager.unsubscribeFromHostChange(this.onHostDidChange);
    this.videoManager.unsubscribeFromGridModeChange(this.onGridModeDidChange);
    this.realtime.unsubscribeFromRoomInfoUpdated(this.onActorsListDidChange);
    this.realtime.unsubscribeFromMasterActorUpdate(this.onMasterActorDidChange);
    this.leave();
  }

  onFrameStateDidChange = (state: VideoFrameStateType) => {
    if (state === VideoFrameStateType.INITIALIZED) {
      this.start();
    }
  };

  onActorsListDidChange = (room) => {
    this.videoManager.actorsListDidChange(room._customProperties.slots);
    this.videoManager.gridModeDidChange(room._customProperties.isGridModeEnable);
  };

  onMasterActorDidChange = (masterActor) => {
    this.videoManager.onMasterActorDidChange(masterActor?.newMasterActorUserId);
  };

  onGridModeDidChange = (isGridModeEnable) => {
    this.realtime.setGridMode(isGridModeEnable);
  };
}
