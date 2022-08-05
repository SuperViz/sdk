import { FrameBricklayer, MessageBridge, ObserverHelper } from '@superviz/immersive-core';

import videoConferenceStyle from '../common/styles/videoConferenceStyle';
import { MessageTypes } from '../common/types/messages.types';
import { logger } from '../common/utils';

import {
  VideoFrameStateType,
  IVideoManagerConfig,
  FrameSizeType,
} from './VideoConferenceManager.types';

const FRAME_ID = 'sv-video-frame';
export default class VideoConfereceManager {
  private messageBridge: MessageBridge;
  private bricklayer: FrameBricklayer;

  private frameStateObserver = new ObserverHelper({ logger });
  private meetingJoinObserver = new ObserverHelper({ logger });

  frameState = VideoFrameStateType.UNINITIALIZED;

  constructor(config: IVideoManagerConfig) {
    const wrapper = document.createElement('div');
    const style = document.createElement('style');

    style.innerHTML = videoConferenceStyle;

    wrapper.classList.add('sv_video_wrapper');
    wrapper.id = 'sv-video-wrapper';

    document.body.appendChild(wrapper);
    document.head.appendChild(style);

    this.updateFrameState(VideoFrameStateType.INITIALIZING);

    this.bricklayer = new FrameBricklayer();
    this.bricklayer.build(
      wrapper.id,
      process.env.SDK_VIDEO_CONFERENCE_LAYER_URL,
      FRAME_ID,
      {
        apiKey: config.apiKey,
        debug: config.debug,
        language: config.language,
      },
      {
        allow: 'camera *;microphone *; display-capture *;',
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
    this.meetingJoinObserver.destroy();

    this.bricklayer = null;
    this.frameState = null;
  }

  private onFrameLoad = () => {
    this.messageBridge = new MessageBridge({
      logger,
      contentWindow: this.bricklayer.element.contentWindow,
    });

    // @Todo: create option to destroy all these listens
    this.messageBridge.listen(MessageTypes.MEETING_USER_AMOUNT_UPDATE, this.onUserAmountUpdate);
    this.messageBridge.listen(MessageTypes.MEETING_USER_JOINED, this.onUserJoined);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LEFT, this.onUserLeft);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LIST_UPDATE, this.onUserListUpdate);
    this.messageBridge.listen(MessageTypes.FRAME_SIZE_UPDATE, this.updateFrameSize);
    this.messageBridge.listen(MessageTypes.MEETING_JOIN, this.meetingJoin);

    this.updateFrameState(VideoFrameStateType.INITIALIZED);
  };

  private onUserAmountUpdate = (users) => {};
  private onUserJoined = (user) => {};
  private onUserLeft = (user) => {};
  private onUserListUpdate = (users) => {};

  private updateFrameSize = (size: FrameSizeType) => {
    const frame = document.getElementById(FRAME_ID);

    frame.classList.toggle('sv-video-frame--expansive-mode');
  };

  private updateFrameState(state: VideoFrameStateType) {
    if (state !== this.frameState) {
      this.frameState = state;
      this.frameStateObserver.publish(this.frameState);
    }
  }

  private meetingJoin = (userInfo = {}) => {
    this.meetingJoinObserver.publish(userInfo);
  };

  actorsListDidChange(actorsList) {
    this.messageBridge.publish(MessageTypes.REALTIME_USER_LIST_UPDATE, actorsList);
  }

  onMasterActorDidChange(hostId) {
    this.messageBridge.publish(MessageTypes.REALTIME_HOST_CHANGE, hostId);
  }

  subscribeToFrameState = this.frameStateObserver.subscribe;
  unsubscribeFromFrameState = this.frameStateObserver.unsubscribe;
  subscribeToMeetingJoin = this.meetingJoinObserver.subscribe;
  unsubscribeFromMeetingJoin = this.meetingJoinObserver.unsubscribe;
}
