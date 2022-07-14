import { logger } from '../../common/utils';
import VideoConferencingManager from '../VideoConfereceManager';

import { ICommunicatorTypes } from './Communicator.types';

export default class Communicator {
  private videoManager: VideoConferencingManager;

  constructor(config: ICommunicatorTypes) {
    this.videoManager = new VideoConferencingManager({
      apiKey: config.apiKey,
      debug: config.debug,
      language: config.language,
    });
  }

  start() {
    this.videoManager.start();
  }

  join() {
    this.videoManager.join();
  }

  leave() {
    this.videoManager.leave();
  }

  destroy() {
    this.videoManager.destroy();
  }
}
