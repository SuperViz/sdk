import { FrameBricklayer, MessageBridge } from '@superviz/immersive-core';

import { logger } from '../common/utils';

import { IVideoManagerConfig } from './VideoConferenceManager.types';

export default class {
  private messageBridge: MessageBridge;
  private bricklayer: FrameBricklayer;

  constructor(config: IVideoManagerConfig) {
    const wrapper = document.createElement('div');

    wrapper.classList.add('sv_video_wrapper');
    wrapper.id = 'sv-video-wrapper';

    document.body.appendChild(wrapper);

    this.bricklayer = new FrameBricklayer();
    this.bricklayer.build(
      wrapper.id,
      process.env.SDK_VIDEO_CONFERENCE_LAYER_URL,
      'sv-video-frame',
      {
        apiKey: config.apiKey,
        debug: config.debug,
        language: config.language,
      },
      {
        allow: 'camera;microphone',
      },
    );

    this.bricklayer.element.addEventListener('load', this.onFrameLoad);
  }

  start() {
    // TODO: initialize meeting settings
  }

  join() {
    // TODO: join room
  }

  leave() {
    this.destroy();
  }

  destroy() {
    this.bricklayer.destroy();

    this.bricklayer = null;
  }

  private onFrameLoad = () => {
    this.messageBridge = new MessageBridge({
      logger,
      contentWindow: this.bricklayer.element.contentWindow,
    });

    // TODO: add messages
  };
}
