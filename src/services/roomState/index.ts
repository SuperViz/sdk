import {
  PresenceEvent,
  PresenceEvents,
  Room,
  RoomEvents,
  SocketEvent,
} from '@superviz/socket-client';

import { TranscriptState } from '../../common/types/events.types';
import { ParticipantType } from '../../common/types/participant.types';
import { RealtimeStateTypes } from '../../common/types/realtime.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger, Observer } from '../../common/utils';
import { useStore } from '../../common/utils/use-store';
import { ParticipantInfo } from '../realtime/base/types';
import { DrawingData } from '../video-conference-manager/types';

import { RoomPropertiesEvents, VideoRoomProperties } from './type';

export class RoomStateService {
  private room: Room;
  private logger: Logger;
  private myParticipant: Partial<ParticipantInfo> = {};
  private localRoomProperties?: VideoRoomProperties = null;
  private enableSync: boolean;
  private left: boolean;
  private isSyncFrozen: boolean;
  private state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  private readonly MESSAGE_SIZE_LIMIT = 60000;
  private useStore: typeof useStore = useStore.bind(this);
  public kickParticipantObserver: Observer;

  constructor(room: Room, logger: Logger) {
    this.room = room;
    this.logger = logger;
    this.kickParticipantObserver = new Observer({ logger: this.logger });

    const { localParticipant, participants } = this.useStore(StoreType.GLOBAL);

    localParticipant.subscribe((participant) => {
      this.enableSync = participant.type !== ParticipantType.AUDIENCE;
      this.myParticipant = {
        ...this.myParticipant,
        ...participant,
      };
    });

    participants.subscribe();

    this.join();
  }

  /**
   * @function join
   * @description subscribes to room events
   * @returns {void}
   */
  private join = (): void => {
    this.room.presence.on(PresenceEvents.LEAVE, this.onParticipantLeave);
    this.room.presence.on(PresenceEvents.JOINED_ROOM, this.onPresenceEnter);
    this.room.on(RoomEvents.JOINED_ROOM, this.onJoinRoom);
    this.room.on(RoomEvents.JOINED_ROOM, this.onJoinRoom);

    if (!this.enableSync) return;
    this.room.on(RoomPropertiesEvents.UPDATE, this.updateLocalRoomState);
  };

  /**
   * @function updateMyProperties
   * @param {Partial<ParticipantInfo>} participantInfo
   * @description updates local participant properties
   * @returns {void}
   */
  public updateMyProperties = (newProperties?: Partial<ParticipantInfo>): void => {
    const properties = newProperties ?? ({} as ParticipantInfo);

    if (this.isMessageTooBig(properties) || this.left || !this.enableSync || this.isSyncFrozen) {
      return;
    }

    if (properties.avatar === undefined) {
      delete properties.avatar;
    }

    this.myParticipant = {
      ...this.myParticipant,
      ...properties,
    };

    this.room.presence.update(this.myParticipant);
    this.logger.log('REALTIME', 'updating my properties', this.myParticipant);
  };

  /**
   * @function isMessageTooBig
   * @description calculates the size of a sync message and checks if it's bigger than limit
   * @param {unknown} msg
   * @param {number} limit
   * @returns {boolean}
   */
  private isMessageTooBig = (msg: unknown, limit: number = this.MESSAGE_SIZE_LIMIT): boolean => {
    const messageString = JSON.stringify(msg);
    const size = new TextEncoder().encode(messageString).length;

    if (size > limit) {
      this.logger.log('Message too long, the message limit size is 60kb.');
      return true;
    }
    return false;
  };

  /**
   * @function updateRoomProperties
   * @param {AblyRealtimeData} properties
   * @description updates room properties
   * @returns {void}
   */
  private updateRoomProperties = (properties: VideoRoomProperties): void => {
    if (this.isMessageTooBig(properties) || this.isSyncFrozen || this.left) return;

    const newProperties = {
      ...this.localRoomProperties,
      ...properties,
    };

    this.localRoomProperties = newProperties;

    this.room.emit(RoomPropertiesEvents.UPDATE, newProperties);
  };

  /**
   * @function setHost
   * @param {string} participantId
   * @description set a new host to the room
   * @returns {void}
   */
  public setHost = (participantId: string): void => {
    this.updateRoomProperties({ hostClientId: participantId });
  };

  /**
   * @function setKickParticipant
   * @param {string} kickParticipantId
   * @description set a participant to be kicked from the room
   * @returns {void}
   */
  public setKickParticipant = (kickParticipantId: string): Promise<void> => {
    if (!kickParticipantId) return;
    const { participants } = useStore(StoreType.GLOBAL);

    const participant = participants.value[kickParticipantId];
    this.updateRoomProperties({
      // @ts-ignore
      kickParticipant: participant,
    });
  };

  /**
   * @function setGridMode
   * @param {boolean} isGridModeEnabled
   * @description synchronizes the grid mode of the cameras in the room
   * @returns {void}
   */
  public setGridMode(isGridModeEnabled: boolean): void {
    this.updateRoomProperties({ isGridModeEnabled });
  }

  /**
   * @function setDrawing
   * @param drawing {DrawingData}  -  drawing payload*
   * @description synchronizes the drawing in the room
   * @returns {void}
   */
  public setDrawing(drawing: DrawingData): void {
    this.updateRoomProperties({ drawing });
  }

  /**
   * @function setTranscript
   * @param state {TranscriptState}
   * @description synchronizes the transcript state in the room
   * @returns {void}
   */
  public setTranscript(state: TranscriptState): void {
    this.updateRoomProperties({ transcript: state });
  }

  /**
   * @function initializeRoomProperties
   * @description
        Initializes the room properties,
        including setting the host client ID and updating the participant list.
   * @returns {Promise<void>}
   */
  private initializeRoomProperties = (): void => {
    const roomProperties: VideoRoomProperties = {
      isGridModeEnabled: false,
      hostClientId: null,
      followParticipantId: null,
      gather: false,
      drawing: null,
      transcript: TranscriptState.TRANSCRIPT_STOP,
      kickParticipant: null,
    };

    this.localRoomProperties = roomProperties;

    this.updateRoomProperties(roomProperties);
  };

  /**
   * @function onParticipantLeave
   * @returns {void}
   * @param presence
   */
  private onParticipantLeave = (presence: PresenceEvent): void => {
    if (presence.id === this.myParticipant.id) {
      this.left = true;
    }

    const followedLeft = presence.id === this.localRoomProperties?.followParticipantId;

    if (followedLeft) {
      this.setFollowParticipant();
    }
  };

  /**
   * @function fetchRoomProperties
   * @returns {AblyRealtimeData | null}
   */
  private async fetchRoomProperties(): Promise<unknown | null> {
    const lastMessage: SocketEvent<unknown> = await new Promise((resolve, reject) => {
      this.room.history((data) => {
        if (!data) {
          reject(data);
        }

        const lastMessage = data.events[0];

        if (lastMessage) {
          resolve(lastMessage);
        } else {
          resolve(null);
        }
      });
    });

    if (lastMessage?.timestamp < Date.now() - 1000 * 60 * 60) return null;

    return lastMessage?.data || null;
  }

  /**
   * @function onJoinRoom
   * @returns {Promise<void>}
   */
  private onJoinRoom = async (): Promise<void> => {
    this.localRoomProperties = await this.fetchRoomProperties();

    if (!this.localRoomProperties) {
      this.initializeRoomProperties();
    } else {
      this.localRoomProperties = await this.fetchRoomProperties();
      this.updateLocalRoomState({ data: this.localRoomProperties });
    }

    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);
    this.logger.log('REALTIME', 'Joined realtime room');
  };

  /**
   * @function publishStateUpdate
   * @description saves the room locally and publishes it to the sdk
   * @param {RealtimeStateTypes} state
   * @returns
   */
  private publishStateUpdate(state: RealtimeStateTypes): void {
    if (this.state === state) return;

    this.state = state;

    this.logger.log(
      'REALTIME',
      `Realtime state did change. New state: ${RealtimeStateTypes[this.state]}`,
    );

    const { meetingState } = this.useStore(StoreType.VIDEO);
    meetingState.publish(this.state);
  }

  /**
   * @function onAblyPresenceEnter
   * @description callback that receives the event that a participant has entered the room
   * @returns {void}
   */
  private onPresenceEnter = (): void => {
    this.updateMyProperties();
  };

  /**
   * @function setFollowParticipant
   * @param {string} participantId
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setFollowParticipant(participantId?: string): void {
    this.updateRoomProperties({ followParticipantId: participantId });
  }

  /**
   * @function setGather
   * @param {boolean} active
   * @description sync to all participants to go to the host position
   * @returns {void}
   */
  public setGather(active: boolean): void {
    this.updateRoomProperties({ gather: active });
  }

  /**
   * @function updateLocalRoomState
   * @description update room data
   * @param {VideoRoomProperties} data
   * @returns {void}
   */
  private updateLocalRoomState = async ({ data }: { data: VideoRoomProperties }): Promise<void> => {
    this.logger.log('REALTIME', 'Room update received', data);
    this.localRoomProperties = Object.assign({}, this.localRoomProperties, data);

    const { drawing, followParticipantId, gather, hostId, isGridModeEnabled, transcript } =
      this.useStore(StoreType.VIDEO);

    drawing.publish(data.drawing);
    followParticipantId.publish(data.followParticipantId);
    gather.publish(data.gather);
    hostId.publish(data.hostClientId);
    isGridModeEnabled.publish(data.isGridModeEnabled);
    transcript.publish(data.transcript);

    if (data.kickParticipant && data.kickParticipant.id === this.myParticipant.id) {
      this.updateRoomProperties({ kickParticipant: null });

      this.kickParticipantObserver.publish(this.myParticipant.id);
    }
  };

  /**
   * @function freezeSync
   * @param {boolean} isFrozen
   * @description Detaches and unsubscribes from channels to freeze synchronization with the room.
   * @returns {void}
   */
  public freezeSync = (isFrozen: boolean): void => {
    this.isSyncFrozen = isFrozen;

    if (isFrozen) {
      this.destroy();
      return;
    }

    this.join();
  };

  /**
   * @function destroy
   * @description stopsthe service
   */
  public destroy() {
    this.room.presence.off(PresenceEvents.LEAVE);
    this.room.presence.off(PresenceEvents.JOINED_ROOM);
    this.room.off(RoomEvents.JOINED_ROOM, this.onJoinRoom);
    this.room.off(RoomPropertiesEvents.UPDATE, this.updateLocalRoomState);
  }
}
