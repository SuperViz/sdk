import { FrameBricklayer, MessageBridge } from '@superviz/immersive-core';

import css from '../common/styles/videoConferenceStyle';
import { MessageTypes } from '../common/types/messages.types';
import { logger } from '../common/utils';

import { IVideoManagerConfig } from './VideoConferenceManager.types';

export default class {
  private messageBridge: MessageBridge;
  private bricklayer: FrameBricklayer;

  constructor(config: IVideoManagerConfig) {
    const wrapper = document.createElement('div');
    const style = document.createElement('style');

    style.innerHTML = css;

    wrapper.classList.add('sv_video_wrapper');
    wrapper.id = 'sv-video-wrapper';

    document.body.appendChild(wrapper);
    document.head.appendChild(style);

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
        allow: 'camera *;microphone *',
      },
    );

    this.bricklayer.element.addEventListener('load', this.onFrameLoad);
  }

  start() {
    // TODO: initialize meeting settings

    this.messageBridge.publish(MessageTypes.MEETING_START, {});
  }

  join() {
    // TODO: join room

    this.messageBridge.publish(MessageTypes.MEETING_ENTER_ROOM, {});
  }

  leave() {
    this.messageBridge.publish(MessageTypes.MEETING_LEAVE, {});

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

    this.messageBridge.listen(MessageTypes.MEETING_USER_AMOUNT_UPDATE, this.onUserAmountUpdate);
    this.messageBridge.listen(MessageTypes.MEETING_USER_JOINED, this.onUserJoined);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LEFT, this.onUserLeft);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LIST_UPDATE, this.onUserListUpdate);
  };

  private onUserAmountUpdate = (users) => {};
  private onUserJoined = (user) => {};
  private onUserLeft = (user) => {};
  private onUserListUpdate = (users) => {};
}
