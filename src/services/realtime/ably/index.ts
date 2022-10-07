import Ably from 'ably';

import { RealtimeEvent } from '../../../common/types/events.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { logger } from '../../../common/utils';
import ApiService from '../../api';
import { RealtimeService } from '../base';
import { ActorInfo, RealtimeJoinOptions, StartRealtimeType, SyncProperty } from '../base/types';

import {
  AblyChannelState,
  AblyConnectionState,
  AblyRealtime,
  AblyActors,
  AblyRealtimeData,
  AblyActor,
  AblyTokenCallBack,
} from './types';

const KICK_USERS_TIME = 1000 * 60;
let KICK_USERS_TIMEOUT = null;

export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  private client: Ably.Realtime;
  private state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  private actors: AblyActors;
  private connectionIdToUserId: { [key: string]: string } = {};
  private hostUserId: string = null;
  private myActorProperties: ActorInfo = null;
  private roomChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private roomSyncChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private isReconnecting: boolean = false;
  private currentReconnecAttempt: number = 0;
  private localRoomProperties?: AblyRealtimeData = null;
  private initialRoomProperties: AblyRealtimeData = null;
  private enableSync: boolean = true;
  private roomId: string;
  private shouldKickUsersOnHostLeave: boolean;
  private ablyKey: string;
  private apiKey: string;

  constructor(ablyKey: string) {
    super();

    this.ablyKey = ablyKey;

    // bind ably callbacks
    this.onAblyPresenceEnter = this.onAblyPresenceEnter.bind(this);
    this.onAblyPresenceUpdate = this.onAblyPresenceUpdate.bind(this);
    this.onAblyPresenceLeave = this.onAblyPresenceLeave.bind(this);
    this.onAblyRoomUpdate = this.onAblyRoomUpdate.bind(this);
    this.onAblySyncChannelUpdate = this.onAblySyncChannelUpdate.bind(this);
    this.onAblyChannelStateChange = this.onAblyChannelStateChange.bind(this);
    this.onAblyConnectionStateChange = this.onAblyConnectionStateChange.bind(this);
    this.auth = this.auth.bind(this);
  }

  private get isJoinedRoom() {
    return this.state === RealtimeStateTypes.JOINED;
  }

  private get getMyActor() {
    return this.actors[this.myActorProperties.userId];
  }

  private get host() {
    return this.actors[this.connectionIdToUserId[this.localRoomProperties?.hostConnectionId]];
  }

  private get isHost() {
    return this.localRoomProperties?.hostConnectionId === this.getMyActor?.connectionId;
  }

  public start({ actorInfo, roomId, apiKey, shouldKickUsersOnHostLeave }: StartRealtimeType): void {
    // @TODO - Implement this
    this.enableSync = true;

    // update myself
    this.updateMyProperties(actorInfo);

    this.roomId = `superviz:${roomId.toLowerCase()}-${apiKey}`;
    this.shouldKickUsersOnHostLeave = shouldKickUsersOnHostLeave;
    this.apiKey = apiKey;

    if (!this.client) {
      this.buildClient();
    }
  }

  /**
   * @function auth
   * @description authenticates to the realtime service
   * @param {Ably.Types.TokenParams} tokenParams
   * @param {AblyTokenCallBack} callback
   * @returns {void}
   */
  private async auth(
    tokenParams: Ably.Types.TokenParams,
    callback: AblyTokenCallBack,
  ): Promise<void> {
    const ably = new Ably.Rest({ key: this.ablyKey });
    const { origin } = window.location;

    ably.auth.requestToken(
      tokenParams,
      {
        authUrl: `${ApiService.baseUrl}/realtime/auth`,
        key: this.ablyKey,
        authParams: {
          domain: origin,
          apiKey: this.apiKey,
        },
      },
      (error, tokenRequest) => {
        if (error) {
          this.authenticationObserver.publish(RealtimeEvent.REALTIME_AUTHENTICATION_FAILED);
        }
        callback(error, tokenRequest);
      },
    );
  }

  /**
   * @function setHost
   * @param {RealtimeJoinOptions} actor
   * @description join realtime room
   * @returns {void}
   */
  public join(actor: RealtimeJoinOptions): void {
    logger.log('REALTIME', `Entering room. Room ID: ${this.roomId}`);

    this.updateMyProperties(actor);

    // join custom sync channel
    this.roomSyncChannel = this.client.channels.get(`${this.roomId}:sync`);
    this.roomSyncChannel.subscribe(this.onAblySyncChannelUpdate);

    // join main room channel
    this.roomChannel = this.client.channels.get(this.roomId);
    this.roomChannel.on(this.onAblyChannelStateChange);
    this.roomChannel.subscribe(this.onAblyRoomUpdate);

    // presence only in the main channel
    this.roomChannel.presence.subscribe('enter', this.onAblyPresenceEnter);
    this.roomChannel.presence.subscribe('update', this.onAblyPresenceUpdate);
    this.roomChannel.presence.subscribe('leave', this.onAblyPresenceLeave);

    // enter
    this.roomChannel.presence.enter(this.myActorProperties);
  }

  /**
   * @function leave
   * @description leave realtime room
   * @returns {void}
   */
  public leave(): void {
    logger.log('REALTIME', 'Disconnecting from ably servers');
    this.client.close();
    this.isReconnecting = false;
    this.roomId = null;
    this.actors = {};
    this.connectionIdToUserId = {};
    this.hostUserId = null;
    this.myActorProperties = null;
    this.roomChannel = null;
    this.roomSyncChannel = null;
    this.client = null;
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
   * @function setGridMode
   * @param {boolean} isGridModeEnable
   * @description synchronizes the grid mode of the cameras in the room
   * @returns {void}
   */
  public setGridMode(isGridModeEnable: boolean): void {
    const roomProperties = this.localRoomProperties;

    this.updateRoomProperties(Object.assign({}, roomProperties, { isGridModeEnable }));
  }

  /**
   * @function setSyncProperty
   * @param {SyncProperty} property
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setSyncProperty(property: SyncProperty): void {
    // keep in room properties for validation
    const roomProperties = this.localRoomProperties;
    let { syncProperties } = roomProperties;
    syncProperties = {
      ...syncProperties,
      ...property,
    };
    const newRoomProperties = {
      ...roomProperties,
      syncProperties,
    };

    Object.entries(property).forEach(([key, value]) => {
      this.roomSyncChannel.publish(key, value, (error: Ably.Types.ErrorInfo) => {
        if (!error) return;

        logger.log(`publish failed with error ${error}`);
      });
    });

    this.updateRoomProperties(newRoomProperties);
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
    const user: AblyActor = Object.assign({}, presenceMessage, {
      customProperties: data,
      userId: presenceMessage.clientId,
    });

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

  /**
   * @function updateLocalRoomState
   * @description update room data
   * @param {AblyRealtimeData} data
   * @returns {void}
   */
  private updateLocalRoomState = (data: AblyRealtimeData): void => {
    this.localRoomProperties = Object.assign({}, this.localRoomProperties, data);

    this.roomInfoUpdatedObserver.publish({
      _customProperties: this.localRoomProperties,
    });

    if (data.hostConnectionId) {
      this.updateHostInfo(data.hostConnectionId);
    } else {
      this.hostPassingHandle();
    }
  };

  /**
   * @function validateRoomProperties
   * @description validates room properties and removes unused slots
   * @returns {void}
   */
  private validateRoomProperties(): void {
    let needToUpdateProperties = false;
    const roomProperties = this.localRoomProperties;
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

    if (needToUpdateProperties && this.isHost) {
      this.updateRoomProperties(newRoomProperties);
    }
  }

  /**
   * @function updateMyProperties
   * @param {ActorInfo | RealtimeJoinOptions} actorInfo
   * @description updates local actor properties
   * @returns {void}
   */
  private updateMyProperties(actorInfo: ActorInfo | RealtimeJoinOptions): void {
    if (!this.enableSync && this.myActorProperties?.noSlotRequired) {
      return;
    }

    let actor = actorInfo;

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
   * @param {AblyRealtimeData} properties
   * @description updates room properties
   * @returns {Promise<void>}
   */
  private updateRoomProperties(properties: AblyRealtimeData): void {
    if (!this.enableSync) {
      return;
    }

    const newProperties = {
      ...this.localRoomProperties,
      ...properties,
    };

    this.roomChannel.publish('update', newProperties);
  }

  /**
   * @function buildClient
   * @description ably client build
   * @returns {void}
   */
  private buildClient(): void {
    if (this.client) {
      this.throw('Tried to call buildClient@Ably is already initialized');
    }

    const options: Ably.Types.ClientOptions = {
      key: this.ablyKey,
      disconnectedRetryTimeout: 5000,
      suspendedRetryTimeout: 5000,
      clientId: this.myActorProperties.userId,
      // transportParams: { remainPresentFor: 1000 } // TODO investigate best params
      authCallback: this.auth,
    };

    this.client = new Ably.Realtime(options);

    this.client.connection.on(this.onAblyConnectionStateChange);
  }

  /**
   * @function publishActorUpdate
   * @param {AblyActor} actor
   * @description publish a user's changes to observer
   * @returns {void}
   */
  private publishActorUpdate(actor: AblyActor): void {
    if (this.actorObservers[actor.data.userId]) {
      this.actorObservers[actor.data.userId].publish(actor);
    }
  }

  /**
   * @function updateActors
   * @description update user list
   * @returns {void}
   */
  private updateActors(): void {
    const actors = {};
    const connectionIdToUserId = {};

    this.roomChannel.presence.get((_, members) => {
      members.forEach((member) => {
        const userId = member.clientId;
        const actor: AblyActor = member as AblyActor;
        connectionIdToUserId[member.connectionId] = actor.data.userId;

        actor.userId = userId;
        actor.customProperties = actor.data;
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
  }

  /**
   * @function updateHostInfo
   * @param {string} newHostId
   * @description update user list
   * @returns {void}
   */
  private updateHostInfo(newHostId: string): void {
    const oldHostUserId = this.hostUserId;
    const hostUserId = this.connectionIdToUserId[newHostId];

    if (hostUserId === this.hostUserId) return;

    this.hostUserId = hostUserId;

    if (!this.hostUserId) {
      this.hostPassingHandle();
      return;
    }

    this.masterActorObserver.publish({
      oldMasterActorUserId: oldHostUserId,
      newMasterActorUserId: this.hostUserId,
    });

    logger.log(
      'RELTIME',
      `Master actor has been changed. New Master Actor: ${this.hostUserId} - ${newHostId}`,
    );
  }

  /**
   * @function initializeRoomProperties
   * @param {Ably.Types.PresenceMessage} user
   * @param {AblyRealtimeData} additionalProperties
   * @description initializes room properties
   * @returns {void}
   */
  private initializeRoomProperties(
    user: Ably.Types.PresenceMessage,
    additionalProperties: AblyRealtimeData = {},
  ): void {
    const roomProperties: AblyRealtimeData = {
      slots: Array(16).fill(null),
      userIdToSlotIndex: {},
      isGridModeEnable: false,
      syncProperties: {},
      ...additionalProperties,
    };

    roomProperties.slots[0] = {
      connectionId: user.connectionId,
      userId: user.data.userId,
      color: this.getActorColor(0),
      timestamp: user.timestamp,
    };

    roomProperties.userIdToSlotIndex[user.data.userId] = 0;

    this.updateRoomProperties(roomProperties);
    this.updateActors();
  }

  /**
   * @function addToSlot
   * @description add a slot for a user
   * @param {Ably.Types.PresenceMessage} user
   * @returns {Promise<void>}
   */
  private async addToSlot(user: Ably.Types.PresenceMessage): Promise<void> {
    const roomProperties = await this.fetchRoomProperties();
    const actorUserId = user.data.userId;

    this.localRoomProperties = roomProperties;

    if (!this.localRoomProperties?.userIdToSlotIndex) {
      return;
    }

    if (this.localRoomProperties.userIdToSlotIndex[actorUserId] !== undefined) {
      return;
    }

    const { slots, userIdToSlotIndex } = this.localRoomProperties;

    for (let index = 0; index < slots.length; index += 1) {
      if (!slots[index]) {
        slots[index] = {
          connectionId: user.connectionId,
          userId: user.data.userId,
          color: this.getActorColor(index),
          timestamp: user.timestamp,
        };
        userIdToSlotIndex[user.data.userId] = index;
        break;
      }
    }

    this.updateRoomProperties({ slots, userIdToSlotIndex });
  }

  /**
   * @function removeFromSlot
   * @description remove a slot for a user
   * @param {Ably.Types.PresenceMessage} user
   * @returns {Promise<void>}
   */
  private removeFromSlot(user: Ably.Types.PresenceMessage): void {
    const roomProperties = this.localRoomProperties;
    const actorUserId = user.data.userId;

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

  /**
   * @function forceReconnect
   * @returns {void}
   */
  private forceReconnect(): void {
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

    this.buildClient();

    this.updateMyProperties(this.myActorProperties);
  }

  /**
   * @function forceReconnect
   * @returns {void}
   */
  private throw(message: string): void {
    logger.log(message);
    throw new Error(message);
  }

  /**
   * @function publishStateUpdate
   * @description publish the new realtime state
   * @param {RealtimeStateTypes} state
   * @returns
   */
  private publishStateUpdate(state: RealtimeStateTypes): void {
    if (this.state === state) return;

    this.state = state;

    logger.log('REALTIME', `Realtime state did change. New state: ${this.state}`);

    this.realtimeStateObserver.publish(this.state);
  }

  /**
   * @function fetchRoomProperties
   * @returns {Promise<AblyRealtimeData | null>}
   */
  private fetchRoomProperties(): Promise<AblyRealtimeData | null> {
    return new Promise((resolve, reject) => {
      this.roomChannel.history((error, resultPage) => {
        if (error) {
          reject(error);
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
  }

  /**
   * @function waitForHostHandle
   * @description
    determines when guest users should wait for the host before entering the meeting room
   * @param {Ably.Types.PresenceMessage} user
   * @returns {void}
   */
  private waitForHostHandle(user: Ably.Types.PresenceMessage): void {
    this.roomChannel.presence.get((_, members) => {
      const hostCandidatesNr = members
        .filter((member) => member.data.isHostCandidate)
        .map((member) => member.connectionId);

      if (
        !hostCandidatesNr.includes(this.host?.connectionId) &&
        hostCandidatesNr.includes(user.connectionId)
      ) {
        clearTimeout(KICK_USERS_TIMEOUT);

        this.setHost(user.data.userId);
        this.waitForHostObserver.publish(false);
      }

      if (hostCandidatesNr.length) {
        this.waitForHostObserver.publish(false);

        return;
      }

      this.waitForHostObserver.publish(true);
    });
  }

  /**
   * @function hostPassingHandle
   * @description set the next host automatically according to the candidate list
   * @returns {void}
   */
  private hostPassingHandle(): void {
    this.roomChannel.presence.get((_, members: Ably.Types.PresenceMessage[]) => {
      const hostCandidatesNr = members
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
   * @function onAblyConnectionStateChange
   * @param {Ably.Types.ConnectionStateChange} state
   * @description gets ably's new connection state
   * @returns {void}
   */
  private onAblyConnectionStateChange(state: Ably.Types.ConnectionStateChange): void {
    const stateName = state.current;
    const newState = AblyConnectionState[stateName as keyof typeof RealtimeStateTypes];

    if (newState === RealtimeStateTypes.READY_TO_JOIN) {
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
  }

  /**
   * @function onAblyChannelStateChange
   * @param {Ably.Types.ChannelStateChange} state
   * @description gets ably's new channel state
   * @returns {void}
   */
  private onAblyChannelStateChange(state: Ably.Types.ChannelStateChange): void {
    const stateName = state.current;
    const newState = AblyChannelState[stateName as keyof typeof RealtimeStateTypes];

    if (newState !== this.state) {
      this.publishStateUpdate(newState);
    }
  }

  /**
   * @function onActorJoin
   * @param {Ably.Types.PresenceMessage} user
   * @returns {void}
   */
  private async onJoinRoom(user: Ably.Types.PresenceMessage): Promise<void> {
    this.localRoomProperties = await this.fetchRoomProperties();

    if (!this.localRoomProperties) {
      await this.initializeRoomProperties(user, this.initialRoomProperties);
    }

    await this.updateActors();

    this.isReconnecting = false;
    this.joinRoomObserver.publish(this.roomChannel);

    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);
    this.validateRoomProperties();

    this.fetchRoomProperties();
    this.waitForHostHandle(user);

    logger.log('REALTIME', 'Joined realtime room');
  }

  /**
   * @function onActorJoin
   * @param {Ably.Types.PresenceMessage} actor
   * @returns {void}
   */
  private async onActorJoin(actor: Ably.Types.PresenceMessage): Promise<void> {
    await this.updateActors();

    const user = Object.assign({}, actor, { customProperties: actor.data, userId: actor.clientId });

    this.actorJoinedObserver.publish(user);

    if (this.isHost) {
      logger.log('REALTIME', `Actor joined room. Actor data: ${JSON.stringify(actor)}`);
      this.addToSlot(actor);
    }

    this.fetchRoomProperties();
    this.waitForHostHandle(actor);
  }

  /**
   * @function onActorLeave
   * @param {Ably.Types.PresenceMessage} actor
   * @returns {void}
   */
  private async onActorLeave(actor: Ably.Types.PresenceMessage, cleanup: boolean): Promise<void> {
    const user = Object.assign({}, actor, { customProperties: actor.data, userId: actor.clientId });

    if (this.state === RealtimeStateTypes.READY_TO_JOIN || actor.connectionId === '-1') {
      return;
    }
    await this.updateActors();

    const hostLeft = actor.data.userId === this.hostUserId;

    this.actorLeaveObserver.publish(user);

    if (hostLeft) {
      this.onHostLeft(actor);
    }

    if (this.isHost && !cleanup) {
      logger.log('REALTIME', `Actor left room. Actor data: ${JSON.stringify(actor)}`);
      this.removeFromSlot(actor);
    }
  }

  /**
   * @function onHostLeft
   * @param {Ably.Types.PresenceMessage} actor
   * @returns {void}
   */
  private onHostLeft(actor: Ably.Types.PresenceMessage): void {
    this.removeFromSlot(actor);
    this.updateRoomProperties({ hostConnectionId: null });
  }
}
