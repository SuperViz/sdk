import { FrameBricklayer, MessageBridge, ObserverHelper } from '@superviz/immersive-core';

import { meetingRoomStyles, meetingSettingsStyles } from '../common/styles/videoConferenceStyle';
import { MessageTypes } from '../common/types/messages.types';
import { logger } from '../common/utils';

import { IVideoFrameState, IVideoManagerConfig } from './VideoConferenceManager.types';

export default class VideoConfereceManager {
  private messageBridge: MessageBridge;
  private bricklayer: FrameBricklayer;

  private frameStateObserver = new ObserverHelper({ logger });

  frameState = IVideoFrameState.UNINITIALIZED;

  constructor(config: IVideoManagerConfig) {
    const wrapper = document.createElement('div');
    const style = document.createElement('style');

    // @TODO - Change style to be based on the frame events
    style.innerHTML = meetingRoomStyles;

    wrapper.classList.add('sv_video_wrapper');
    wrapper.id = 'sv-video-wrapper';

    document.body.appendChild(wrapper);
    document.head.appendChild(style);

    this.updateFrameState(IVideoFrameState.INITIALIZING);

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

  start(options) {
    this.messageBridge.publish(MessageTypes.MEETING_START, options);
  }

  leave() {
    this.messageBridge.publish(MessageTypes.MEETING_LEAVE, {});

    this.destroy();
  }

  destroy() {
    this.messageBridge.destroy();
    this.bricklayer.destroy();
    this.frameStateObserver.destroy();

    this.bricklayer = null;
    this.frameState = null;
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

    this.updateFrameState(IVideoFrameState.INITIALIZED);
  };

  private onUserAmountUpdate = (users) => {};
  private onUserJoined = (user) => {};
  private onUserLeft = (user) => {};
  private onUserListUpdate = (users) => {};

  private updateFrameState(state: IVideoFrameState) {
    if (state !== this.frameState) {
      this.frameState = state;
      this.frameStateObserver.publish(this.frameState);
    }
  }

  subscribeToFrameState = this.frameStateObserver.subscribe;
  unsubscribeFromFrameState = this.frameStateObserver.subscribe;
}
