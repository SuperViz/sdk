import { FrameBricklayer, MessageBridge, ObserverHelper } from '@superviz/immersive-core';
import NoSleep from 'nosleep.js';

import videoConferenceStyle from '../../common/styles/videoConferenceStyle';
import {
  DeviceEvent,
  MeetingConnectionStatus,
  MeetingEvent,
  MeetingState,
  RealtimeEvent,
  Dimensions,
  MeetingControlsEvent,
} from '../../common/types/events.types';
import { StartMeetingOptions } from '../../common/types/meeting.types';
import { User } from '../../common/types/user.types';
import { logger } from '../../common/utils';
import { BrowserService } from '../browser';

import { VideoFrameState, VideoManagerOptions, FrameSize, Offset } from './types';

const FRAME_ID = 'sv-video-frame';
const FRAME_EXPANSIVE_CLASS = 'sv-video-frame--expansive-mode';

export default class VideoConfereceManager {
  private messageBridge: MessageBridge;
  private bricklayer: FrameBricklayer;
  private browserService: BrowserService;

  private frameOffset: Offset;

  public readonly frameStateObserver = new ObserverHelper({ logger });
  public readonly frameSizeObserver = new ObserverHelper({ logger });

  public readonly realtimeObserver = new ObserverHelper({ logger });
  public readonly hostChangeObserver = new ObserverHelper({ logger });
  public readonly gridModeChangeObserver = new ObserverHelper({ logger });
  public readonly followUserObserver = new ObserverHelper({ logger });
  public readonly goToUserObserver = new ObserverHelper({ logger });
  public readonly gatherUsersObserver = new ObserverHelper({ logger });

  public readonly sameAccountErrorObserver = new ObserverHelper({ logger });
  public readonly devicesObserver = new ObserverHelper({ logger });
  public readonly meetingStateObserver = new ObserverHelper({ logger });
  public readonly meetingConnectionObserver = new ObserverHelper({ logger });

  public readonly userAmountUpdateObserver = new ObserverHelper({ logger });
  public readonly userJoinedObserver = new ObserverHelper({ logger });
  public readonly userAvatarObserver = new ObserverHelper({ logger });
  public readonly userLeftObserver = new ObserverHelper({ logger });
  public readonly userListObserver = new ObserverHelper({ logger });

  frameState = VideoFrameState.UNINITIALIZED;

  constructor(options: VideoManagerOptions) {
    const {
      apiKey,
      debug,
      language,
      roomId,
      canUseCams,
      canUseScreenshare,
      canUseDefaultAvatars,
      canUseFollow,
      canUseGoTo,
      canUseGather,
      position,
      browserService,
      isBroadcast,
      offset,
      canUseDefaultToolbar,
    } = options;

    this.browserService = browserService;

    const wrapper = document.createElement('div');

    /**
     * @TODO - add full horizontal view support on desktop, currently only works on mobile.
     * request: https://github.com/SuperViz/sdk/issues/33
     */
    const camerasOrientation =
      ['right', 'left'].includes(position) && !this.browserService.isMobileDevice
        ? 'vertical'
        : 'horizontal';

    const frameOptions = {
      apiKey,
      debug,
      canUseFollow,
      canUseGoTo,
      canUseCams,
      canUseGather,
      canUseScreenshare,
      canUseDefaultAvatars,
      camerasOrientation,
      canUseDefaultToolbar,
      isBroadcast,
      roomId,
    };

    wrapper.classList.add('sv_video_wrapper');
    wrapper.id = 'sv-video-wrapper';

    document.body.appendChild(wrapper);

    this.updateFrameState(VideoFrameState.INITIALIZING);

    this.bricklayer = new FrameBricklayer();
    this.bricklayer.build(
      wrapper.id,
      process.env.SDK_VIDEO_CONFERENCE_LAYER_URL,
      FRAME_ID,
      frameOptions,
      {
        allow: 'camera *;microphone *; display-capture *;',
      },
    );

    this.setFrameOffset(offset);
    this.setFrameStyle(position);
    this.bricklayer.element.addEventListener('load', this.onFrameLoad);
    window.addEventListener('resize', this.onWindowResize);
  }

  /**
   * @function onFrameLoad
   * @returns {void}
   */
  private onFrameLoad = (): void => {
    this.messageBridge = new MessageBridge({
      logger,
      contentWindow: this.bricklayer.element.contentWindow,
    });

    if (this.browserService.isMobileDevice) {
      const noSleep = new NoSleep();

      const enableNoSleep = () => {
        noSleep.enable();
        this.bricklayer.element.removeEventListener('click', enableNoSleep, false);
      };

      this.bricklayer.element.addEventListener('click', enableNoSleep, false);
    }

    // @TODO: create option to destroy all these listens.
    this.messageBridge.listen(MeetingEvent.MEETING_USER_AMOUNT_UPDATE, this.onUserAmountUpdate);
    this.messageBridge.listen(MeetingEvent.MEETING_USER_JOINED, this.onUserJoined);
    this.messageBridge.listen(MeetingEvent.MEETING_USER_LEFT, this.onUserLeft);
    this.messageBridge.listen(MeetingEvent.MEETING_USER_LIST_UPDATE, this.onUserListUpdate);
    this.messageBridge.listen(MeetingEvent.FRAME_SIZE_UPDATE, this.updateFrameSize);
    this.messageBridge.listen(MeetingEvent.MEETING_HOST_CHANGE, this.onMeetingHostChange);
    this.messageBridge.listen(MeetingEvent.MEETING_GRID_MODE_CHANGE, this.onGridModeChange);
    this.messageBridge.listen(MeetingEvent.MEETING_SAME_USER_ERROR, this.onSameAccountError);
    this.messageBridge.listen(MeetingEvent.MEETING_STATE_UPDATE, this.meetingStateUpdate);
    this.messageBridge.listen(
      MeetingEvent.MEETING_CONNECTION_STATUS_CHANGE,
      this.onConnectionStatusChange,
    );
    this.messageBridge.listen(MeetingEvent.MEETING_DEVICES_CHANGE, this.onDevicesChange);
    this.messageBridge.listen(RealtimeEvent.REALTIME_JOIN, this.realtimeJoin);
    this.messageBridge.listen(MeetingEvent.FRAME_DIMENSIONS_UPDATE, this.onFrameDimensionsUpdate);
    this.messageBridge.listen(RealtimeEvent.REALTIME_FOLLOW_USER, this.onFollowUserDidChange);
    this.messageBridge.listen(RealtimeEvent.REALTIME_SET_AVATAR, this.onUserAvatarChange);
    this.messageBridge.listen(RealtimeEvent.REALTIME_GO_TO_USER, this.onGoToDidChange);
    this.messageBridge.listen(RealtimeEvent.REALTIME_GATHER, this.onGather);

    this.updateFrameState(VideoFrameState.INITIALIZED);
    this.onWindowResize();
  };

  /**
   * @function setFrameOffset
   * @description adds the offset to aid frame positioning.
   * @param {Offset} customOffset
   * @returns {void}
   */
  private setFrameOffset = (customOffset: Offset): void => {
    const offset = customOffset ?? {};

    // add the keys that were not set
    ['top', 'bottom', 'left', 'right'].forEach((key) => {
      const usedKeys = Object.keys(offset);

      if (usedKeys.includes(key)) return;

      offset[key] = 0;
    });

    this.frameOffset = offset as Offset;
  };

  /**
   * @function setFrameStyle
   * @description injects the style and positions the frame container.
   * @param {string} position
   * @returns {void}
   */
  private setFrameStyle = (position: string): void => {
    const style = document.createElement('style');
    const { bottom, left, right, top } = this.frameOffset;

    style.innerHTML = `
    :root {
      --superviz-offset-top: ${top}px;
      --superviz-offset-right: ${right}px;
      --superviz-offset-left: ${left}px;
      --superviz-offset-bottom: ${bottom}px;
    } 
    ${videoConferenceStyle}    
    `;

    document.head.appendChild(style);

    if (this.browserService.isMobileDevice) {
      this.bricklayer.element.classList.add('sv-video-frame--bottom');
      return;
    }

    this.bricklayer.element.classList.add(`sv-video-frame--${position}`);
  };

  /**
   * @function onFrameDimensionsUpdate
   * @param {Dimensions} params
   * @description callback that updates the frame size according to the size of the inner content
   * @returns {void}
   */
  private onFrameDimensionsUpdate = ({ width, height }: Dimensions): void => {
    const frame = document.getElementById(FRAME_ID);
    const {
      bottom: offsetBottom,
      right: offsetRight,
      left: offsetLeft,
      top: offsetTop,
    } = this.frameOffset;

    const SET_UPDATE_WIDTH = width !== null;
    const FULL_WIDTH = width === 0;
    const SET_UPDATE_HEIGHT = !!height;
    const FULL_HEIGHT = height === 0 || height > window.innerHeight;
    const FULL_PERCENT = '100%';

    let frameWidth: string;
    let frameHeight: string;

    if (SET_UPDATE_WIDTH) frameWidth = `${width}px`;
    if (FULL_WIDTH) frameWidth = `calc(${FULL_PERCENT} - ${offsetRight}px - ${offsetLeft}px)`;

    if (SET_UPDATE_HEIGHT) frameHeight = `${height}px`;
    if (FULL_HEIGHT) frameHeight = `calc(${FULL_PERCENT} - ${offsetTop}px - ${offsetBottom}px)`;

    frame.style.width = frameWidth;
    frame.style.height = frameHeight;

    this.frameSizeObserver.publish({ width: frameWidth, height: frameHeight });
  };

  /**
   * @function updateFrameSize
   * @param {FrameSize} size
   * @returns {void}
   */
  private updateFrameSize = (size: FrameSize): void => {
    const frame = document.getElementById(FRAME_ID);
    const isExpanded = frame.classList.contains(FRAME_EXPANSIVE_CLASS);

    if (size === FrameSize.LARGE && isExpanded) return;

    if (size === FrameSize.SMALL && !isExpanded) return;

    frame.classList.toggle(FRAME_EXPANSIVE_CLASS);
  };

  /**
   * @function onWindowResize
   * @description update window-host size to iframe
   * @returns {void}
   */
  private onWindowResize = (): void => {
    const {
      bottom: offsetBottom,
      left: offsetLeft,
      right: offsetRight,
      top: offsetTop,
    } = this.frameOffset;

    let { innerHeight: height, innerWidth: width } = window;

    height = height - offsetBottom - offsetTop;
    width = width - offsetLeft - offsetRight;

    this.messageBridge.publish(MeetingEvent.FRAME_PARENT_SIZE_UPDATE, { height, width });
  };

  /**
   * @function onUserAmountUpdate
   * @param {Array<User>} users
   * @description updates the number of users within the meeting
   * @returns {void}
   */
  private onUserAmountUpdate = (users: Array<User>): void => {
    this.userAmountUpdateObserver.publish(users);
  };

  /**
   * @function onUserJoined
   * @param {User} user
   * @description callback that is triggered whenever a user enters the meeting room
   * @returns {void}
   */
  private onUserJoined = (user: User): void => {
    this.userJoinedObserver.publish(user);
  };

  /**
   * @function onUserLeft
   * @param {User} user
   * @description callback that is triggered whenever a user left the meeting room
   * @returns {void}
   */
  private onUserLeft = (user: User): void => {
    this.userLeftObserver.publish(user);
  };

  /**
   * @function onUserListUpdate
   * @param {Array<User>} users
   * @description callback that is called whenever the list of users is updated
   * @returns {void}
   */
  private onUserListUpdate = (users: Array<User>): void => {
    this.userListObserver.publish(users);
  };

  /**
   * @function onUserAvatarChange
   * @param {avatarLink} string
   * @description update user avatar
   * @returns {void}
   */
  private onUserAvatarChange = (avatarLink: string): void => {
    this.userAvatarObserver.publish(avatarLink);
  };

  /**
   * @function updateFrameState
   * @description updates frame state
   * @param {VideoFrameState} state
   * @retruns {void}
   */
  private updateFrameState(state: VideoFrameState): void {
    if (state !== this.frameState) {
      this.frameState = state;
      this.frameStateObserver.publish(this.frameState);
    }

    const states = {
      [VideoFrameState.INITIALIZING]: MeetingState.FRAME_INITIALIZING,
      [VideoFrameState.INITIALIZED]: MeetingState.FRAME_INITIALIZED,
      [VideoFrameState.UNINITIALIZED]: MeetingState.FRAME_UNINITIALIZED,
    };

    this.meetingStateUpdate(states[state]);
  }

  /**
   * @function realtimeJoin
   * @param userInfo
   * @returns {void}
   */
  private realtimeJoin = (userInfo = {}): void => {
    this.realtimeObserver.publish(userInfo);
  };

  /**
   * @function onMeetingHostChange
   * @param {string} hostId
   * @returns {void}
   */
  private onMeetingHostChange = (hostId: string): void => {
    this.hostChangeObserver.publish(hostId);
  };

  /**
   * @function onFollowUserDidChange
   * @param {string} userId
   * @returns {void}
   */
  private onFollowUserDidChange = (userId: string): void => {
    this.followUserObserver.publish(userId);
  };

  /**
   * @function onGoToDidChange
   * @param {string} userId
   * @returns {void}
   */
  private onGoToDidChange = (userId: string): void => {
    this.goToUserObserver.publish(userId);
  };

  /**
   * @function onGather
   * @returns {void}
   */
  private onGather = (): void => {
    this.gatherUsersObserver.publish();
  };

  /**
   * @function onGridModeChange
   * @param {boolean} isGridModeEnable
   * @returns {void}
   */
  private onGridModeChange = (isGridModeEnable: boolean): void => {
    this.gridModeChangeObserver.publish(isGridModeEnable);
  };

  /**
   * @function onSameAccountError
   * @param {string} error
   * @returns {void}
   */
  private onSameAccountError = (error: string): void => {
    this.sameAccountErrorObserver.publish(error);
  };

  /**
   * @function onDevicesChange
   * @param {DeviceEvent} state
   * @returns {void}
   */
  private onDevicesChange = (state: DeviceEvent): void => {
    this.devicesObserver.publish(state);
  };

  /**
   * @function meetingStateUpdate
   * @param {MeetingState} newState
   * @returns {void}
   */
  private meetingStateUpdate = (newState: MeetingState): void => {
    this.meetingStateObserver.publish(newState);
  };

  /**
   * @function onConnectionStatusChange
   * @param {MeetingConnectionStatus} newStatus
   * @returns {void}
   */
  private onConnectionStatusChange = (newStatus: MeetingConnectionStatus): void => {
    this.meetingConnectionObserver.publish(newStatus);
  };

  /**
   * @function waitForHostDidChange
   * @param {boolean} isWating
   * @returns {void}
   */
  public waitForHostDidChange = (isWating: boolean): void => {
    this.messageBridge.publish(RealtimeEvent.REALTIME_WAIT_FOR_HOST, isWating);
  };

  /**
   * @function gridModeDidChange
   * @param {boolean} isGridModeEnable
   * @returns {void}
   */
  public gridModeDidChange = (isGridModeEnable: boolean): void => {
    this.messageBridge.publish(RealtimeEvent.REALTIME_GRID_MODE_CHANGE, isGridModeEnable);
  };

  /**
   * @function actorsListDidChange
   * @param {} actorsList
   * @returns {void}
   */
  public actorsListDidChange = (actorsList): void => {
    this.messageBridge.publish(RealtimeEvent.REALTIME_USER_LIST_UPDATE, actorsList);
  };

  /**
   * @function onMasterActorDidChange
   * @param {string} hostId
   * @returns {void}
   */
  public onMasterActorDidChange = (hostId: string): void => {
    this.messageBridge.publish(RealtimeEvent.REALTIME_HOST_CHANGE, hostId);
  };

  /**
   * @function followUserDidChange
   * @param {string | null} userId
   * @returns {void}
   */
  public followUserDidChange = (userId: string | null): void => {
    this.messageBridge.publish(RealtimeEvent.REALTIME_FOLLOW_USER, userId);
  };

  /**
   * @function start
   * @param {StartMeetingOptions} options
   * @returns {void}
   */
  public start(options: StartMeetingOptions): void {
    this.messageBridge.publish(MeetingEvent.MEETING_START, options);
  }

  /**
   * @function leave
   * @returns {void}
   */
  public leave(): void {
    this.messageBridge.publish(MeetingEvent.MEETING_LEAVE, {});

    this.destroy();
  }

  /**
   * @function destroy
   * @returns {void}
   */
  public destroy(): void {
    this.messageBridge.destroy();
    this.bricklayer.destroy();
    this.frameStateObserver.destroy();
    this.realtimeObserver.destroy();
    this.hostChangeObserver.destroy();
    this.gridModeChangeObserver.destroy();
    this.followUserObserver.destroy();

    this.bricklayer = null;
    this.frameState = null;
  }

  /**
   * @funciton toggleMeetingSetup
   * @returns {void}
   */
  public toggleMeetingSetup(): void {
    this.messageBridge.publish(MeetingControlsEvent.TOGGLE_MEETING_SETUP);
  }

  /**
   * @funciton toggleMicrophone
   * @returns {void}
   */
  public toggleMicrophone(): void {
    this.messageBridge.publish(MeetingControlsEvent.TOGGLE_MICROPHONE);
  }

  /**
   * @funciton toggleScreenShare
   * @returns {void}
   */
  public toggleScreenShare(): void {
    this.messageBridge.publish(MeetingControlsEvent.TOGGLE_SCREENSHARE);
  }

  /**
   * @funciton hangUp
   * @returns {void}
   */
  public hangUp(): void {
    this.messageBridge.publish(MeetingControlsEvent.HANG_UP);
  }

  /**
   * @funciton toggleCam
   * @returns {void}
   */
  public toggleCam(): void {
    this.messageBridge.publish(MeetingControlsEvent.TOGGLE_CAM);
  }
}
