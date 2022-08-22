import { FrameBricklayer, MessageBridge, ObserverHelper } from '@superviz/immersive-core';

import videoConferenceStyle from '../common/styles/videoConferenceStyle';
import { DevicesMessageTypes, MessageTypes } from '../common/types/messages.types';
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
  private hostChangeObserver = new ObserverHelper({ logger });
  private gridModeChangeObserver = new ObserverHelper({ logger });
  private sameAccountErrorObserver = new ObserverHelper({ logger });
  private devicesObserver = new ObserverHelper({ logger });

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
    this.hostChangeObserver.destroy();
    this.gridModeChangeObserver.destroy();

    this.bricklayer = null;
    this.frameState = null;
  }

  private onFrameLoad = () => {
    this.messageBridge = new MessageBridge({
      logger,
      contentWindow: this.bricklayer.element.contentWindow,
    });

    // @TODO: create option to destroy all these listens.
    this.messageBridge.listen(MessageTypes.MEETING_USER_AMOUNT_UPDATE, this.onUserAmountUpdate);
    this.messageBridge.listen(MessageTypes.MEETING_USER_JOINED, this.onUserJoined);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LEFT, this.onUserLeft);
    this.messageBridge.listen(MessageTypes.MEETING_USER_LIST_UPDATE, this.onUserListUpdate);
    this.messageBridge.listen(MessageTypes.FRAME_SIZE_UPDATE, this.updateFrameSize);
    this.messageBridge.listen(MessageTypes.MEETING_JOIN, this.meetingJoin);
    this.messageBridge.listen(MessageTypes.MEETING_HOST_CHANGE, this.onMeetingHostChange);
    this.messageBridge.listen(MessageTypes.MEETING_GRID_MODE_CHANGE, this.onGridModeChange);
    this.messageBridge.listen(MessageTypes.MEETING_SAME_ACCOUNT_ERROR, this.onSameAccountError);
    this.messageBridge.listen(MessageTypes.MEETING_DEVICES_CHANGE, this.onDevicesChange);

    this.updateFrameState(VideoFrameStateType.INITIALIZED);
  };

  private onUserAmountUpdate = (users: Array<Object>): void => {};
  private onUserJoined = (user: Object): void => {};
  private onUserLeft = (user: Object): void => {};
  private onUserListUpdate = (users: Array<Object>): void => {};

  private updateFrameSize = (size: FrameSizeType): void => {
    const frame = document.getElementById(FRAME_ID);
    const isExpanded = frame.classList.contains('sv-video-frame--expansive-mode');

    if (size === FrameSizeType.LARGE && isExpanded) return;

    if (size === FrameSizeType.SMALL && !isExpanded) return;

    frame.classList.toggle('sv-video-frame--expansive-mode');
  };

  private updateFrameState(state: VideoFrameStateType): void {
    if (state !== this.frameState) {
      this.frameState = state;
      this.frameStateObserver.publish(this.frameState);
    }
  }

  private meetingJoin = (userInfo = {}): void => {
    this.meetingJoinObserver.publish(userInfo);
  };

  private onMeetingHostChange = (hostId: string): void => {
    this.hostChangeObserver.publish(hostId);
  };

  private onGridModeChange = (isGridModeEnable: boolean): void => {
    this.gridModeChangeObserver.publish(isGridModeEnable);
  };

  private onSameAccountError = (error: string): void => {
    this.sameAccountErrorObserver.publish(error);
  };

  private onDevicesChange = (state: DevicesMessageTypes): void => {
    this.devicesObserver.publish(state);
  };

  gridModeDidChange(isGridModeEnable) {
    this.messageBridge.publish(MessageTypes.REALTIME_GRID_MODE_CHANGE, isGridModeEnable);
  }

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

  subscribeToHostChange = this.hostChangeObserver.subscribe;
  unsubscribeFromHostChange = this.hostChangeObserver.unsubscribe;

  subscribeToGridModeChange = this.gridModeChangeObserver.subscribe;
  unsubscribeFromGridModeChange = this.gridModeChangeObserver.unsubscribe;

  subscribeToSameAccountError = this.sameAccountErrorObserver.subscribe;
  unsubscribeFromSameAccountError = this.sameAccountErrorObserver.unsubscribe;

  subscribeToDevicesEvents = this.devicesObserver.subscribe;
  unsubscribeFromDevicesEvents = this.devicesObserver.unsubscribe;
}
