import { ObserverHelper } from '@superviz/immersive-core';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';

import debounce from 'lodash.debounce';

import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { logger } from '../../../common/utils';

const ABLY_KEY = '';

import Ably from 'ably';

import {
  REALTIME_STATE,
  ABLY_CHANNEL_STATE_TO_REALTIME_STATE,
  ABLY_CONNECTION_STATE_TO_REALTIME_STATE,
} from './types';

import { StartRealtimeType } from './../types';

import { update } from 'lodash';
import RealtimeService from '..';

const packageInfo = require('../../../../package.json');

const MAX_REALTIME_LOBBY_RETRIES = 3;
const RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL = 5000;
const KICK_USERS_TIME = 1000 * 60;
let KICK_USERS_TIMEOUT = null;

export default class AblyRealtimeService extends RealtimeService {
  static LOGGER_PREFIX = 'ABLY';

  client;
  state: RealtimeStateTypes = REALTIME_STATE.DISCONNECTED;
  ablyError? = null;
  previousState = null;
  actors: { [id: string]: Ably.Types.PresenceMessage };
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
    // Actors observers helpers
    this.actorObservers = [];

    this.actorsObserver = new ObserverHelper({ logger });
    this.subscribeToActorsUpdate = this.actorsObserver.subscribe;
    this.unsubscribeFromActorsUpdate = this.actorsObserver.unsubscribe;

    this.actorJoinedObserver = new ObserverHelper({ logger });
    this.subscribeToActorJoined = this.actorJoinedObserver.subscribe;
    this.unsubscribeFromActorJoined = this.actorJoinedObserver.unsubscribe;

    this.actorLeaveObserver = new ObserverHelper({ logger });
    this.subscribeToActorLeave = this.actorLeaveObserver.subscribe;
    this.unsubscribeFromActorLeave = this.actorLeaveObserver.unsubscribe;

    this.joinRoomObserver = new ObserverHelper({ logger });
    this.subscribeToJoinRoom = this.joinRoomObserver.subscribe;
    this.unsubscribeFromJoinRoom = this.joinRoomObserver.unsubscribe;

    this.syncPropertiesObserver = new ObserverHelper({ logger });
    this.subscribeToSyncProperties = this.syncPropertiesObserver.subscribe;
    this.unsubscribeFromSyncProperties = this.syncPropertiesObserver.unsubscribe;

    this.reconnectObserver = new ObserverHelper({ logger });
    this.subscribeToReconnectUpdate = this.reconnectObserver.subscribe;
    this.unsubscribeFromReconnectUpdate = this.reconnectObserver.unsubscribe;

    // Room info obervers helpers
    this.roomInfoUpdatedObserver = new ObserverHelper({ logger });
    this.subscribeToRoomInfoUpdated = this.roomInfoUpdatedObserver.subscribe;
    this.unsubscribeFromRoomInfoUpdated = this.roomInfoUpdatedObserver.unsubscribe;

    this.roomListUpdatedObserver = new ObserverHelper({ logger });
    this.subscribeToRoomListUpdated = this.roomListUpdatedObserver.subscribe;
    this.unsubscribeFromRoomListUpdated = this.roomListUpdatedObserver.unsubscribe;

    this.masterActorObserver = new ObserverHelper({ logger });
    this.subscribeToMasterActorUpdate = this.masterActorObserver.subscribe;
    this.unsubscribeFromMasterActorUpdate = this.masterActorObserver.unsubscribe;

    this.realtimeStateObserver = new ObserverHelper({ logger });
    this.subscribeToRealtimeState = this.realtimeStateObserver.subscribe;
    this.unsubscribeFromRealtimeState = this.realtimeStateObserver.unsubscribe;

    this.waitForHostObserver = new ObserverHelper({ logger });
    this.subscribeToWaitForHost = this.waitForHostObserver.subscribe;
    this.unsubscribeFromWaitForHost = this.waitForHostObserver.unsubscribe;

    this.kickAllUsersObserver = new ObserverHelper({ logger });
    this.subscribeToKickAllUsers = this.kickAllUsersObserver.subscribe;
    this.unsubscribeFromKickAllUsers = this.kickAllUsersObserver.unsubscribe;
    this.authenticationObserver = new ObserverHelper({ logger });

    // bind ably callbacks
    this.onAblyPresenceEnter = this.onAblyPresenceEnter.bind(this);
    this.onAblyPresenceUpdate = this.onAblyPresenceUpdate.bind(this);
    this.onAblyPresenceLeave = this.onAblyPresenceLeave.bind(this);
    this.onAblyRoomUpdate = this.onAblyRoomUpdate.bind(this);
    this.onAblySyncChannelUpdate = this.onAblySyncChannelUpdate.bind(this);
  }

  start({ actorInfo, roomId, apiKey, shouldKickUsersOnHostLeave }: StartRealtimeType): void {
    // @TODO - Implement this
    this.enableSync = true;

    // update myself
    this.updateMyProperties(actorInfo);

    this.roomId = `${roomId.toLowerCase()}-${apiKey}`;
    this.shouldKickUsersOnHostLeave = shouldKickUsersOnHostLeave;

    if (!this.client) {
      this.buildClient();
    }
  }

  auth(apiKey: string): void {}

  onAblyPresenceEnter(member) {
    let actor = { ...member };
    if (member.clientId === this.myActorProperties.userId) {
      this.onJoinRoom(actor);
    } else {
      this.onActorJoin(actor);
    }
  }

  onAblyPresenceUpdate(member) {
    const userId = member.clientId;
    member.customProperties = member.data; // force photon architecture
    this.actors[userId] = member;

    this.publishActorUpdate(this.actors[userId]);

    this.actorsObserver.publish(this.actors); // DO ACTORS NEED THEIR OWN CHANNELS?
  }

  onAblyPresenceLeave(member) {
    const actor = { ...member };
    this.onActorLeave(actor, false);
  }

  onAblySyncChannelUpdate(message) {
    const name = message.name;
    var key = name;
    var property = {};
    property[key] = message.data;
    this.syncPropertiesObserver.publish(property);
  }

  onAblyRoomUpdate(message) {
    if (message.name === 'update') {
      this.updateLocalRoomState(message.data);
    }
  }

  join(myActorProperties, aditionalRoomProperties = {}) {
    this.initialRoomProperties = aditionalRoomProperties;
    if (myActorProperties) {
      this.updateMyProperties(myActorProperties);
    }

    this.log(
      'info',
      `Entering realtime room. Room ID: ${this.roomId} | Custom Join Properties: ${JSON.stringify(
        aditionalRoomProperties,
      )}`,
    );

    // join custom sync channel
    this.roomSyncChannel = this.client.channels.get(`${this.roomId}:sync`);
    this.roomSyncChannel.subscribe(this.onAblySyncChannelUpdate);
    //this.roomSyncChannel.on(this.onStateChange); // maybe not necessary?

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

  updateLocalRoomState = async (data) => {
    this.localRoomProperties = {
      ...data,
    };
    this.roomInfoUpdatedObserver.publish({
      _customProperties: this.localRoomProperties,
    });

    if (data.hostConnectionId) {
      this.updateMasterActorInfo(data.hostConnectionId);
    } else {
      this.hostPassingHandle();
    }
  };

  validateRoomProperties() {
    let needToUpdateProperties = false;
    const roomProperties = this.getRoomProperties;
    const roomActors = this.actors;
    if (!roomProperties || !roomActors) {
      return;
    }
    const oldSlots = [];
    const currentConnectionIds = [];
    Object.values(roomActors).forEach((actor) => {
      currentConnectionIds.push(actor.connectionId);
    });
    const slots = roomProperties.slots;
    slots.forEach((slot) => {
      if (slot) {
        if (!currentConnectionIds.includes(slot.connectionId)) {
          oldSlots.push(slot);
        }
      }
    });
    const newRoomProperties = {
      slots: [...roomProperties.slots],
      userIdToSlotIndex: { ...roomProperties.userIdToSlotIndex },
    };
    oldSlots.forEach((oldSlot) => {
      needToUpdateProperties = true;
      if (oldSlot) {
        delete newRoomProperties.userIdToSlotIndex[oldSlot.userId];
        newRoomProperties.slots[roomProperties.userIdToSlotIndex[oldSlot.userId]] = null;
      }
    });
    if (needToUpdateProperties && this.isMasterActor) {
      this.updateRoomProperties(newRoomProperties);
    }
  }

  leave() {
    this.log('info', 'Disconnecting from ably servers');
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

  updateMyProperties(actorInfo) {
    if (!this.enableSync && this.myActorProperties?.noSlotRequired) {
      return;
    }
    let actor = { ...actorInfo };

    if (!this.enableSync) {
      actor = {
        noSlotRequired: true,
        userId: actor.userId,
      };
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

  updateRoomProperties = async (properties) => {
    if (!this.enableSync) {
      return;
    }

    const newProperties = {
      ...this.getRoomProperties,
      ...properties,
    };

    await this.roomChannel.publish('update', newProperties);
  };

  setMasterActor(actorUserId) {
    if (!actorUserId) {
      return;
    }
    const actor = this.actors[actorUserId];
    const connectionId = actor.connectionId;
    this.updateRoomProperties({ hostConnectionId: connectionId });
  }

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
      this.throw('error', 'Tried to call buildClient@Ably is already initialized');
    }

    let options: Ably.Types.ClientOptions = {
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
        this.log(
          'info',
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
      this.log('warn', 'Tried to remove an actor that is not in room from a room slot');
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
    this.log(
      'info',
      `RECONNECT: Starting force ably reconnect | Current attempt: ${this.currentReconnecAttempt}`,
    );

    if (!this.roomId) {
      this.throw('error', 'Tried to reconnect without roomId set');
    }

    if (this.state === REALTIME_STATE.READY_TO_JOIN) {
      this.log('info', 'RECONNECT: Rejoining room since client aready connected to ably servers.');
      this.join(this.myActorProperties);
      return;
    }

    this.log('info', 'RECONNECT: Restarting ably server since user lost connection.');
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

  log(level, message) {
    // const timestamp = new Date().toISOString();
    // logger.log(`${level} ${AblyRealtimeService.LOGGER_PREFIX} - ${timestamp} - ${message}`);

    logger.log(message);
  }

  // TODO: not the best way to do this but will prevent creating unnecessary variables
  throw(level, message) {
    this.log(level, message);
    throw new Error(message);
  }

  publishStateUpdate(state) {
    if (this.state === state) {
      return;
    }

    this.previousState = this.state;
    this.state = state;
    this.log('info', `Realtime state did change. New state: ${this.state}`);
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
          console.log('publish failed with error ' + err);
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

      this.setMasterActor(actor.customProperties.userId);
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
    let slotList = this.localRoomProperties.slots.filter((slot) => !!slot);

    var oldestSlot = slotList
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
        .filter((member) => {
          return member.data.isHostCandidate;
        })
        .map((member) => member.connectionId);
      if (this.shouldKickUsersOnHostLeave && !hostCandidatesNr.length) {
        KICK_USERS_TIMEOUT = setTimeout(() => {
          this.kickAllUsersObserver.publish(true);
        }, KICK_USERS_TIME);
        this.log('info', `users will be removed in ${KICK_USERS_TIME}ms`);

        return;
      }

      if (hostCandidatesNr.length) {
        const nextHostCandidateUserid = this.connectionIdToUserId[hostCandidatesNr[0]];

        this.log('info', `passing the host to the user: ${nextHostCandidateUserid}`);

        this.setMasterActor(nextHostCandidateUserid);
      }
    });
  }

  onStateChange = (state) => {
    const stateName = state.current;
    let newState =
      ABLY_CONNECTION_STATE_TO_REALTIME_STATE[stateName as keyof typeof REALTIME_STATE] ||
      ABLY_CHANNEL_STATE_TO_REALTIME_STATE[stateName as keyof typeof REALTIME_STATE];

    if (newState === REALTIME_STATE.READY_TO_JOIN) {
      this.hadJoinedLobbyAtLeastOnce = true;
      this.currentReconnecAttempt = 0;
    }

    if (state.current === 'connected' && this.isReconnecting) {
      this.onJoinRoom(this.getMyActor);
    }

    if (this.state === REALTIME_STATE.RETRYING) {
      // rejoin room
      this.forceReconnect();
    }

    if (newState === REALTIME_STATE.FAILED) {
      this.forceReconnect();
      return;
    }

    if (state.retryIn) {
      this.currentReconnecAttempt++;
      this.isReconnecting = true;
      this.publishStateUpdate(REALTIME_STATE.RETRYING);
      this.reconnectObserver.publish(this.currentReconnecAttempt);
    }

    if (newState !== this.state) {
      this.publishStateUpdate(newState);
    }
  };

  onOperationResponse = (errorCode, _, code) => {};

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
      this.setMasterActor(this.myActorProperties.userId); // set me as host if I have host candidate  TODO
    }

    this.isReconnecting = false;
    this.joinRoomObserver.publish(this.roomChannel);

    this.publishStateUpdate(REALTIME_STATE.CONNECTED);
    this.validateRoomProperties();
    this.log('info', 'Joined realtime room');

    setTimeout(() => {
      this.fetchRoomProperties();
    }, 1200);
  };

  onActorJoin = async (actor) => {
    await this.updateActors();
    actor.customProperties = actor.data; // PHOTON ARCHITECTURE
    actor.userId = actor.clientId; // PHOTON ARCHITECTURE
    this.actorJoinedObserver.publish(actor);
    if (this.isMasterActor) {
      this.log(
        'info',
        `Actor joined room. Actor data: ${JSON.stringify({
          ...actor,
        })}`,
      );
      this.addToSlot(actor);
    }
    setTimeout(() => {
      this.fetchRoomProperties();
    }, 1200);
  };

  onActorLeave = async (actor, cleanup) => {
    actor.customProperties = actor.data; // PHOTON ARCHITECTURE
    actor.userId = actor.clientId; // PHOTON ARCHITECTURE

    if (this.state === REALTIME_STATE.READY_TO_JOIN || actor.connectionId === -1) {
      return;
    }
    await this.updateActors();

    const hostLeft = actor.data.userId === this.masterActorUserId;

    this.actorLeaveObserver.publish(actor);

    if (hostLeft) {
      this.onHostLeft(actor);
    }

    if (this.isMasterActor && !cleanup) {
      this.log(
        'info',
        `Actor left room. Actor data: ${JSON.stringify({
          ...actor,
        })}`,
      );
      this.removeFromSlot(actor);
    }
  };

  onHostLeft = (actor) => {
    this.removeFromSlot(actor);
    this.updateRoomProperties({ hostConnectionId: null });
  };

  // getters
  get isJoinedRoom() {
    // @Todo: set in immersive-core the new state 5
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    return this.state === REALTIME_STATE.JOINED;
  }

  get isConnected() {
    // TODO set CONNECTED OR JOINED (5)
    return this.state === REALTIME_STATE.JOINED || REALTIME_STATE.CONNECTED;
  }

  get canJoinRoom() {
    return this.state === REALTIME_STATE.READY_TO_JOIN;
  }

  get getMyActor() {
    return this.actors[this.myActorProperties.userId];
  }

  get getMyProperties() {
    return this.actors[this.myActorProperties.userId].data;
  }

  get getMasterActor() {
    return this.actors[this.connectionIdToUserId[this.localRoomProperties?.hostConnectionId]];
  }

  get isMasterActor() {
    return this.localRoomProperties?.hostConnectionId === this.getMyActor?.connectionId;
  }

  get room() {
    return { _customProperties: this.localRoomProperties ? this.localRoomProperties : null };
  }

  get getRoomProperties() {
    return this.localRoomProperties ? this.localRoomProperties : null;
  }
}
