import { ObserverHelper } from '@superviz/immersive-core';
import Ably from 'ably';

import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { logger } from '../../../common/utils';
import { RealtimeService } from '../base';
import { ActorInfo, StartRealtimeType } from '../base/types';

import { AblyChannelState, AblyConnectionState, AblyRealtime, AblyActor } from './types';

const ABLY_KEY = process.env.SDK_REALTIME_KEY;
const KICK_USERS_TIME = 1000 * 60;
let KICK_USERS_TIMEOUT = null;

export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  static LOGGER_PREFIX = 'ABLY';

  client: Ably.Realtime;
  state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  ablyError? = null;
  previousState = null;
  actors: AblyActor;
  connectionIdToUserId = {};
  masterActorUserId = null;
  myActorProperties = null;
  roomChannel = null;
  roomSyncChannel = null;
  isReconnecting = false;
  currentReconnecAttempt: 0;
  localRoomProperties = null;
  initialRoomProperties = null;
  enableSync: boolean = true;
  hadJoinedLobbyAtLeastOnce: boolean = false;
  shouldEnterRoomOnReconnect?: boolean;
  isInitializingReconnect: boolean;
  roomId?: string;
  shouldKickUsersOnHostLeave: boolean;
  currentReconnectAttempt: number;

  constructor() {
    super();

    // bind ably callbacks
    this.onAblyPresenceEnter = this.onAblyPresenceEnter.bind(this);
    this.onAblyPresenceUpdate = this.onAblyPresenceUpdate.bind(this);
    this.onAblyPresenceLeave = this.onAblyPresenceLeave.bind(this);
    this.onAblyRoomUpdate = this.onAblyRoomUpdate.bind(this);
    this.onAblySyncChannelUpdate = this.onAblySyncChannelUpdate.bind(this);
  }

  // getters
  private get isJoinedRoom() {
    return this.state === RealtimeStateTypes.JOINED;
  }

  private get getMyActor() {
    return this.actors[this.myActorProperties.userId];
  }

  private get getMasterActor() {
    return this.actors[this.connectionIdToUserId[this.localRoomProperties?.hostConnectionId]];
  }

  private get isMasterActor() {
    return this.localRoomProperties?.hostConnectionId === this.getMyActor?.connectionId;
  }

  private get getRoomProperties() {
    return this.localRoomProperties ? this.localRoomProperties : null;
  }

  public start({ actorInfo, roomId, apiKey, shouldKickUsersOnHostLeave }: StartRealtimeType): void {
    // @TODO - Implement this
    this.enableSync = true;

    // update myself
    this.updateMyProperties(actorInfo);

    this.roomId = `superviz:${roomId.toLowerCase()}-${apiKey}`;
    this.shouldKickUsersOnHostLeave = shouldKickUsersOnHostLeave;

    if (!this.client) {
      this.buildClient();
    }
  }

  public auth(apiKey: string): void {}

  public join(myActorProperties, aditionalRoomProperties = {}) {
    this.initialRoomProperties = aditionalRoomProperties;
    if (myActorProperties) {
      this.updateMyProperties(myActorProperties);
    }

    logger.log(
      `Entering realtime room. Room ID: ${this.roomId} | Custom Join Properties: ${JSON.stringify(
        aditionalRoomProperties,
      )}`,
    );

    // join custom sync channel
    this.roomSyncChannel = this.client.channels.get(`${this.roomId}:sync`);
    this.roomSyncChannel.subscribe(this.onAblySyncChannelUpdate);

    // join main room channel
    this.roomChannel = this.client.channels.get(this.roomId);
    this.roomChannel.on(this.onStateChange);
    this.roomChannel.subscribe(this.onAblyRoomUpdate);

    // presence only in the main channel
    this.roomChannel.presence.subscribe('enter', this.onAblyPresenceEnter);
    this.roomChannel.presence.subscribe('update', this.onAblyPresenceUpdate);
    this.roomChannel.presence.subscribe('leave', this.onAblyPresenceLeave);

    // enter
    this.roomChannel.presence.enter(this.myActorProperties);
  }

  /**
   * @function setHost
   * @param {string} actorUserId
   * @description set a new host to the room
   * @returns {void}
   */

  public setHost(actorUserId: string): void {
    if (!actorUserId) {
      return;
    }

    const { connectionId } = this.actors[actorUserId];
    this.updateRoomProperties({ hostConnectionId: connectionId });
  }

  /**
   * @function onAblyPresenceEnter
   * @description callback that receives the event that a user has entered the room
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceEnter(presenceMessage: Ably.Types.PresenceMessage): void {
    if (presenceMessage.clientId === this.myActorProperties.userId) {
      this.onJoinRoom(presenceMessage);
    } else {
      this.onActorJoin(presenceMessage);
    }
  }

  /**
   * @function onAblyPresenceUpdate
   * @description  callback that receives the event that a user's properties have been updated
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceUpdate(presenceMessage: Ably.Types.PresenceMessage): void {
    const { clientId, data } = presenceMessage;
    const user = Object.assign({}, presenceMessage, { customProperties: data });

    this.actors[clientId] = user;
    this.publishActorUpdate(this.actors[clientId]);
    this.actorsObserver.publish(this.actors);
  }

  /**
   * @function onAblyPresenceLeave
   * @description  callback that receives the exit event from a user
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceLeave(presenceMessage: Ably.Types.PresenceMessage): void {
    this.onActorLeave(presenceMessage, false);
  }

  /**
   * @function onAblyRoomUpdate
   * @description callback that receives the update event from ably's channel
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  private onAblySyncChannelUpdate(message: Ably.Types.Message): void {
    const { name, data } = message;
    const property = {};

    property[name] = data;
    this.syncPropertiesObserver.publish(property);
  }

  /**
   * @function onAblyRoomUpdate
   * @description callback that receives the update event from ably's room
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  private onAblyRoomUpdate(message: Ably.Types.Message): void {
    if (message.name === 'update') {
      this.updateLocalRoomState(message.data);
    }
  }

  private updateLocalRoomState = async (data): Promise<void> => {
    this.localRoomProperties = data;

    this.roomInfoUpdatedObserver.publish({
      _customProperties: this.localRoomProperties,
    });

    if (data.hostConnectionId) {
      this.updateMasterActorInfo(data.hostConnectionId);
    } else {
      this.hostPassingHandle();
    }
  };

  private validateRoomProperties() {
    let needToUpdateProperties = false;
    const roomProperties = this.getRoomProperties;
    const roomActors = this.actors;

    if (!roomProperties || !roomActors) {
      return;
    }

    const { slots } = roomProperties;
    const currentConnectionIds = Object.values(roomActors).map((actor) => {
      return actor.connectionId;
    });

    const slotsToBeRemove = slots.filter((slot) => {
      if (!slot || currentConnectionIds.includes(slot.connectionId)) return;

      return slot;
    });

    const newRoomProperties = {
      slots: roomProperties.slots,
      userIdToSlotIndex: roomProperties.userIdToSlotIndex,
    };

    // Remove all slots not to be used
    if (slotsToBeRemove?.length) {
      needToUpdateProperties = true;

      slotsToBeRemove.forEach((oldSlot) => {
        delete newRoomProperties.userIdToSlotIndex[oldSlot.userId];
        newRoomProperties.slots[roomProperties.userIdToSlotIndex[oldSlot.userId]] = null;
      });
    }

    if (needToUpdateProperties && this.isMasterActor) {
      this.updateRoomProperties(newRoomProperties);
    }
  }

  leave() {
    logger.log('REALTIME', 'Disconnecting from ably servers');
    this.client.close();
    this.isReconnecting = false;
    this.roomId = null;
    this.previousState = null;
    this.actors = {};
    this.connectionIdToUserId = {};
    this.masterActorUserId = null;
    this.myActorProperties = null;
    this.roomChannel = null;
    this.roomSyncChannel = null;
    this.client = null;
  }

  /**
   * @function updateMyProperties
   * @param {ActorInfo} actorInfo
   * @description updates local actor properties
   * @returns {void}
   */
  private updateMyProperties(actorInfo: ActorInfo): void {
    if (!this.enableSync && this.myActorProperties?.noSlotRequired) {
      return;
    }

    let actor: ActorInfo = actorInfo;

    if (!this.enableSync) {
      actor = Object.assign({}, actor, { noSlotRequired: true });
    }

    this.myActorProperties = {
      ...this.myActorProperties,
      ...actor,
    };

    if (!this.isJoinedRoom) {
      return;
    }

    this.roomChannel.presence.update(this.myActorProperties);
  }

  /**
   * @function updateRoomProperties
   * @param {} properties
   * @description updates room properties
   * @returns {Promise<void>}
   */
  private updateRoomProperties = async (properties): Promise<void> => {
    if (!this.enableSync) {
      return;
    }

    const newProperties = {
      ...this.getRoomProperties,
      ...properties,
    };

    await this.roomChannel.publish('update', newProperties);
  };

  subscribeToActorUpdate(userId, callback) {
    if (!this.actorObservers[userId]) {
      this.actorObservers[userId] = new ObserverHelper({ logger });
    }

    this.actorObservers[userId].subscribe(callback);
  }

  unsubscribeFromActorUpdate(userId, callback) {
    this.actorObservers[userId].unsubscribe(callback);
  }

  getUserUniqueInteger(userId) {
    let uniqueInteger = 0;
    if (this.actors[userId] && this.actors[userId].data && this.getRoomProperties) {
      if (this.actors[userId]?.data.noSlotRequired) {
        uniqueInteger = 16;
      } else {
        const hasSlot = this.getRoomProperties?.slots?.find((slot) => slot?.userId === userId);
        if (hasSlot) {
          return this.getRoomProperties?.userIdToSlotIndex?.[userId];
        }
      }
    }

    return uniqueInteger;
  }

  getActorColor(index) {
    let avatarColorIndex = index;
    avatarColorIndex %= 16;
    return MeetingColors[avatarColorIndex];
  }

  // internal
  buildClient() {
    if (this.client) {
      this.throw('Tried to call buildClient@Ably is already initialized');
    }

    const options: Ably.Types.ClientOptions = {
      key: ABLY_KEY,
      disconnectedRetryTimeout: 5000,
      suspendedRetryTimeout: 5000,
      clientId: this.myActorProperties.userId,
      // transportParams: { remainPresentFor: 1000 } // TODO investigate best params
    };

    this.client = new Ably.Realtime(options);

    this.client.connection.on(this.onStateChange);
  }

  publishActorUpdate(actor) {
    if (this.actorObservers[actor.data.userId]) {
      this.actorObservers[actor.data.userId].publish(actor);
    }
  }

  updateActors = async (isNewRoom = false) => {
    const actors = {};
    const connectionIdToUserId = {};

    await this.roomChannel.presence.get((err, members) => {
      if (err) {
        console.error(err);
      }
      members.forEach((member) => {
        const userId = member.clientId;
        const actor = { ...member };
        connectionIdToUserId[member.connectionId] = actor.data.userId;

        actor.userId = userId; // FORCE PHOTON ARCHITECTURE
        actor.customProperties = actor.data; // FORCE PHOTON ARCHITECTURE
        actors[userId] = actor;
      });
      this.actors = actors;
      this.connectionIdToUserId = connectionIdToUserId;
      this.actorsObserver.publish(this.actors);
    });

    Object.values(this.actors).forEach((actor) => {
      this.addToSlot(actor);
    });
    this.validateRoomProperties();
  };

  updateMasterActorInfo(newMasterConnectionId: string = null, updateRoomInfo: boolean = true) {
    const oldMasterActorUserId = this.masterActorUserId;
    const masterActorUserId = this.connectionIdToUserId[newMasterConnectionId];

    if (masterActorUserId !== this.masterActorUserId) {
      this.masterActorUserId = masterActorUserId;
      if (!this.masterActorUserId) {
        this.hostPassingHandle();
        return;
      }
      setTimeout(() => {
        this.masterActorObserver.publish({
          oldMasterActorUserId,
          newMasterActorUserId: this.masterActorUserId,
        });
        logger.log(
          'RELTIME',
          `Master actor has been changed. New Master Actor: ${this.masterActorUserId} - ${newMasterConnectionId}`,
        );
      }, 500);
    }
  }

  initializeRoomProperties = async (myActor, additionalProperties = {}) => {
    const roomProperties = {
      slots: Array(16).fill(null),
      userIdToSlotIndex: {},
      isGridModeEnable: false,
      syncProperties: {},
      ...additionalProperties,
    };

    roomProperties.slots[0] = {
      connectionId: myActor.connectionId,
      userId: myActor.data.userId,
      color: this.getActorColor(0),
      timestamp: myActor.timestamp,
    };
    roomProperties.userIdToSlotIndex[myActor.data.userId] = 0;
    await this.updateRoomProperties(roomProperties);
    await this.updateActors(!roomProperties); // save actors
  };

  addToSlot = async (actorInfo) => {
    const roomProperties = await this.fetchRoomProperties();
    this.localRoomProperties = roomProperties;
    const actorUserId = actorInfo.userId;
    if (!this.localRoomProperties?.userIdToSlotIndex) {
      return;
    }

    if (this.localRoomProperties.userIdToSlotIndex[actorUserId] !== undefined) {
      return;
    }

    const slots = [...this.localRoomProperties.slots];
    const userIdToSlotIndex = { ...this.localRoomProperties.userIdToSlotIndex };

    for (let index = 0; index < slots.length; index += 1) {
      if (!slots[index]) {
        slots[index] = {
          connectionId: actorInfo.connectionId,
          userId: actorInfo.data.userId,
          color: this.getActorColor(index),
          timestamp: actorInfo.timestamp,
        };
        userIdToSlotIndex[actorInfo.data.userId] = index;
        break;
      }
    }

    await this.updateRoomProperties({ slots, userIdToSlotIndex });
  };

  removeFromSlot(actorInfo) {
    const roomProperties = this.getRoomProperties;
    const actorUserId = actorInfo.data.userId;

    if (roomProperties.userIdToSlotIndex[actorUserId] === undefined) {
      logger.log('REALTIME', 'Tried to remove an actor that is not in room from a room slot');
      return;
    }

    const newRoomProperties = {
      slots: [...roomProperties.slots],
      userIdToSlotIndex: { ...roomProperties.userIdToSlotIndex },
    };

    delete newRoomProperties.userIdToSlotIndex[actorUserId];
    newRoomProperties.slots[roomProperties.userIdToSlotIndex[actorUserId]] = null;
    this.updateRoomProperties(newRoomProperties);
  }

  forceReconnect() {
    logger.log(
      'REALTIME',
      `RECONNECT: Starting force realtime reconnect | Current attempt: ${this.currentReconnecAttempt}`,
    );

    if (!this.roomId) {
      this.throw('Tried to reconnect without roomId set');
    }

    if (this.state === RealtimeStateTypes.READY_TO_JOIN) {
      logger.log('REALTIME', 'Rejoining room since client aready connected to ably servers.');
      this.join(this.myActorProperties);
      return;
    }

    logger.log('REALTIME', 'RECONNECT: Restarting ably server since user lost connection.');

    const options = {
      key: ABLY_KEY,
      disconnectedRetryTimeout: 5000,
      suspendedRetryTimeout: 5000,
      clientId: this.myActorProperties.userId,
    };

    this.client = new Ably.Realtime(options);
    this.client.connection.on(this.onStateChange);

    this.updateMyProperties(this.myActorProperties);
  }

  private throw(message: string): void {
    logger.log(message);
    throw new Error(message);
  }

  publishStateUpdate(state) {
    if (this.state === state) {
      return;
    }

    this.previousState = this.state;
    this.state = state;
    logger.log('REALTIME', `Realtime state did change. New state: ${this.state}`);
    this.realtimeStateObserver.publish(this.state, state);

    if (this.roomChannel) {
      this.roomChannel.status((err, channelDetails) => {
        if (err) {
          console.error(err);
        }
      });
    }
  }

  fetchRoomProperties = () => {
    return new Promise((resolve, reject) => {
      this.roomChannel.history((err, resultPage) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        const lastMessage = resultPage.items[0]?.data;
        if (lastMessage) {
          this.updateLocalRoomState(lastMessage);
          resolve(lastMessage);
        } else {
          resolve(null);
        }
      });
    });
  };

  setGridMode = (isGridModeEnable) => {
    const roomProperties = this.getRoomProperties;
    const newRoomProperties = {
      ...roomProperties,
      isGridModeEnable,
    };
    this.updateRoomProperties(newRoomProperties);
  };

  setSyncProperties = (properties) => {
    // keep in room properties for validation
    const roomProperties = this.getRoomProperties;
    let { syncProperties } = roomProperties;
    syncProperties = {
      ...syncProperties,
      ...properties,
    };
    const newRoomProperties = {
      ...roomProperties,
      syncProperties,
    };

    // sync!
    this.roomSyncChannel.publish(
      Object.keys(properties)[0],
      Object.values(properties)[0],
      (err) => {
        if (err) {
          console.log(`publish failed with error ${err}`);
        } else {
          console.log('publish succeeded');
        }
      },
    );

    this.updateRoomProperties(newRoomProperties);
  };

  waitForHostHandle(actor) {
    console.error('wait for host not implemented');
    // this.waitForHostObserver.publish(false);

    /*
    const masterActorUserId = this.connectionIdToUserId[this.client.myRoomMasterconnectionId()];
    const masterActor = this.actors[masterActorUserId];

    const hostCandidatesNr = this.client.actorsArray
      .filter((actor) => actor?.data?.isHostCandidate)
      .map((actor) => actor.connectionId);

    if (
      !hostCandidatesNr.includes(masterActor.connectionId) &&
      hostCandidatesNr.includes(actor.connectionId)
    ) {
      clearTimeout(KICK_USERS_TIMEOUT);

      this.setHost(actor.customProperties.userId);
      this.waitForHostObserver.publish(false);

      return;
    }

    if (hostCandidatesNr.length) {
      this.waitForHostObserver.publish(false);

      return;
    }

    this.waitForHostObserver.publish(true);
    */
  }

  hostPassingHandle() {
    const slotList = this.localRoomProperties.slots.filter((slot) => !!slot);

    const oldestSlot = slotList
      .sort((a?: number, b?: number) => {
        const timestampA = slotList[a]?.timestamp ? slotList[a]?.timestamp : 9999999999;
        const timestampB = slotList[b]?.timestamp ? slotList[b]?.timestamp : 9999999999;
        return timestampB - timestampA;
      })
      .pop();

    if (oldestSlot.connectionId !== this.getMyActor.connectionId) {
      return;
    }
    this.roomChannel.presence.get((err, members) => {
      const membersListCopy = members.filter(() => true);
      const hostCandidatesNr = membersListCopy
        .filter((member) => member.data.isHostCandidate)
        .map((member) => member.connectionId);
      if (this.shouldKickUsersOnHostLeave && !hostCandidatesNr.length) {
        KICK_USERS_TIMEOUT = setTimeout(() => {
          this.kickAllUsersObserver.publish(true);
        }, KICK_USERS_TIME);
        logger.log('REALTIME', `users will be removed in ${KICK_USERS_TIME}ms`);

        return;
      }

      if (hostCandidatesNr.length) {
        const nextHostCandidateUserid = this.connectionIdToUserId[hostCandidatesNr[0]];

        logger.log('REALTIME', `passing the host to the user: ${nextHostCandidateUserid}`);

        this.setHost(nextHostCandidateUserid);
      }
    });
  }

  /**
   * @function onStateChange
   * @param {Ably.Types.ConnectionStateChange} state
   * @description gets ably's new connection state
   * @returns {void}
   */
  private onStateChange = (state: Ably.Types.ConnectionStateChange): void => {
    const stateName = state.current;
    const newState = AblyConnectionState[stateName] || AblyChannelState[stateName];

    if (newState === RealtimeStateTypes.READY_TO_JOIN) {
      this.hadJoinedLobbyAtLeastOnce = true;
      this.currentReconnecAttempt = 0;
    }

    if (state.current === 'connected' && this.isReconnecting) {
      this.onJoinRoom(this.getMyActor);
    }

    if (this.state === RealtimeStateTypes.RETRYING) {
      // rejoin room
      this.forceReconnect();
    }

    if (newState === RealtimeStateTypes.FAILED) {
      this.forceReconnect();
      return;
    }

    if (state.retryIn) {
      this.currentReconnecAttempt++;
      this.isReconnecting = true;
      this.publishStateUpdate(RealtimeStateTypes.RETRYING);
      this.reconnectObserver.publish(this.currentReconnecAttempt);
    }

    if (newState !== this.state) {
      this.publishStateUpdate(newState);
    }
  };

  onRoomListUpdate = (rooms) => {
    this.roomListUpdatedObserver.publish(rooms);
  };

  onRoomList = (rooms) => {
    this.roomListUpdatedObserver.publish(rooms);
  };

  onJoinRoom = async (myActor) => {
    const roomProperties = await this.fetchRoomProperties();
    this.localRoomProperties = roomProperties;
    // new room or empty room
    if (!roomProperties) {
      await this.initializeRoomProperties(myActor, this.initialRoomProperties);
    }

    await this.updateActors();

    if (
      (!this.localRoomProperties?.hostConnectionId || !this.getMasterActor) &&
      this.myActorProperties.isHostCandidate
    ) {
      // @TODO - set me as host if I have host candidate
      this.setHost(this.myActorProperties.userId);
    }

    this.isReconnecting = false;
    this.joinRoomObserver.publish(this.roomChannel);

    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);
    this.validateRoomProperties();
    logger.log('REALTIME', 'Joined realtime room');

    setTimeout(() => {
      this.fetchRoomProperties();
    }, 1200);
  };

  onActorJoin = async (actor) => {
    await this.updateActors();

    const user = Object.assign({}, actor, { customProperties: actor.data, userId: actor.clientId });

    this.actorJoinedObserver.publish(user);

    if (this.isMasterActor) {
      logger.log('REALTIME', `Actor joined room. Actor data: ${JSON.stringify(actor)}`);
      this.addToSlot(actor);
    }

    setTimeout(() => {
      this.fetchRoomProperties();
    }, 1200);
  };

  onActorLeave = async (actor: Ably.Types.PresenceMessage, cleanup: boolean) => {
    const user = Object.assign({}, actor, { customProperties: actor.data, userId: actor.clientId });

    if (this.state === RealtimeStateTypes.READY_TO_JOIN || actor.connectionId === '-1') {
      return;
    }
    await this.updateActors();

    const hostLeft = actor.data.userId === this.masterActorUserId;

    this.actorLeaveObserver.publish(user);

    if (hostLeft) {
      this.onHostLeft(actor);
    }

    if (this.isMasterActor && !cleanup) {
      logger.log('REALTIME', `Actor left room. Actor data: ${JSON.stringify(actor)}`);
      this.removeFromSlot(actor);
    }
  };

  onHostLeft = (actor) => {
    this.removeFromSlot(actor);
    this.updateRoomProperties({ hostConnectionId: null });
  };
}
