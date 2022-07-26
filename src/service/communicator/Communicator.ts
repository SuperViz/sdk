import { logger } from '../../common/utils';
import VideoConferencingManager from '../VideoConfereceManager';
import { VideoFrameStateType } from '../VideoConferenceManager.types';

import { ICommunicatorTypes } from './Communicator.types';

export default class Communicator {
  private videoManager: VideoConferencingManager;

  private debug: boolean = false;
  private language: string = 'en';
  private roomId: string;
  private externalUserId: string;

  constructor({
    apiKey,
    debug = false,
    language = 'en',
    roomId,
    externalUserId,
  }: ICommunicatorTypes) {
    this.debug = debug;
    this.language = language;
    this.roomId = roomId;
    this.externalUserId = externalUserId;

    this.videoManager = new VideoConferencingManager({
      apiKey,
      debug,
      language,
      roomId,
      externalUserId,
    });

    this.videoManager.subscribeToFrameState(this.onFrameStateDidChange);
  }

  start() {
    this.videoManager.start({
      roomId: this.roomId,
      externalUserId: this.externalUserId,
    });
  }

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
}
