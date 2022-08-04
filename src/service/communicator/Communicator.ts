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
    this.realtime.subscribeToRoomInfoUpdated(this.onActorsListDidChange);
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

  leave() {
    this.videoManager.leave();
  }

  destroy() {
    this.videoManager.destroy();
  }

  onFrameStateDidChange = (state: VideoFrameStateType) => {
    if (state === VideoFrameStateType.INITIALIZED) {
      this.start();
    }
  };

  onActorsListDidChange = (actorsList) => {
    this.videoManager.actorsListDidChange(actorsList._customProperties.slots);
  };
}
