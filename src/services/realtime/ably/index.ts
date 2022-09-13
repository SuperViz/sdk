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
  roomChannel = null; // TODO ABLY TYPES?
  roomSyncChannel = null;
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

    this.roomId = `${roomId}-${apiKey}`;
    this.shouldKickUsersOnHostLeave = shouldKickUsersOnHostLeave;

    if (!this.client) {
      this.buildClient();
    }
  }

  auth(apiKey: string): void {
    const { origin } = window.location;
    const query = `apiKey=${apiKey}&domain=${origin}`;
    this.client.setCustomAuthentication(query);
  }

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
      // update room properties locally
      // this.saveRoomState
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
    this.roomChannel.presence.enter(this.myActorProperties, () => {});

    /*
    this.client.joinRoom(this.roomId, {
      createIfNotExists: true,
      ...aditionalRoomProperties,
    });
    */
  }

  updateLocalRoomState = async (data) => {
    let updateActors = false;
    if (this.localRoomProperties === null) {
      updateActors = true;
      setTimeout(() => {
        // THIS FIXES BUG WHERE INFO DOESNT ARRIVE IN THE UI
        this.roomInfoUpdatedObserver.publish({ _customProperties: this.localRoomProperties }); // to keep with photon API we add _customProperties
      }, 1000);
    }
    this.localRoomProperties = {
      ...data,
    };
    this.roomInfoUpdatedObserver.publish({ _customProperties: this.localRoomProperties }); // to keep with photon API we add _customProperties
    if (updateActors) {
      await this.updateActors(); // save actors
      if (!this.localRoomProperties.hostConnectionId) {
        this.setMasterActor(this.myActorProperties.userId); // set me as host
      }
    }

    if (data.hostConnectionId) {
      this.updateMasterActorInfo(data.hostConnectionId);
    }

    if (!this.getMasterActor && Object.values(this.actors).length > 0) {
      this.hostPassingHandle();
    }
  };

  leave() {
    this.log('info', 'Disconnecting from ably servers');
    console.log(this.client);
    this.client.close();

    this.roomId = null;
    this.previousState = null;
    this.actors = null;
    this.connectionIdToUserId = {};
    this.masterActorUserId = null;
    this.myActorProperties = null;
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

    // if (actor.name !== this.getMyActor.name && this.enableSync) {
    // this.client.myActor().setName(actor.name);
    //}

    // this.client.myActor().setCustomProperties(actor);
    this.myActorProperties = {
      ...this.myActorProperties,
      ...actor,
    };

    if (!this.isJoinedRoom) {
      return;
    }
    // var channel = this.client.channels.get(this.roomId);
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

    if (this.isJoinedRoom) {
      if (this.actors[userId]?.data.noSlotRequired) {
        uniqueInteger = 16;
      } else {
        uniqueInteger = this.getRoomProperties.userIdToSlotIndex?.[userId] ?? 0;
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

    const { name: appVersion } = packageInfo;

    // For the full code sample see here: https://github.com/ably/quickstart-js
    let options: Ably.Types.ClientOptions = {
      key: ABLY_KEY,
      clientId: this.myActorProperties.userId,
      // transportParams: { remainPresentFor: 1000 } // TODO investigate best params
    };

    this.client = new Ably.Realtime(options);

    this.client.connection.on(this.onStateChange);

    /*
    this.client.onError = this.onError;   NOT USED
    this.client.onEvent = this.onEvent;   
    this.client.onOperationResponse = this.onOperationResponse;
    this.client.onActorPropertiesChange = this.onActorPropertiesChange;   // DONE
    this.client.onRoomListUpdate = this.onRoomListUpdate;
    this.client.onRoomList = this.onRoomList;
    this.client.onJoinRoom = this.onJoinRoom;       DONE
    this.client.onActorJoin = this.onActorJoin;     DONE
    this.client.onActorLeave = this.onActorLeave;
    */
  }

  publishActorUpdate(actor) {
    if (this.actorObservers[actor.data.userId]) {
      this.actorObservers[actor.data.userId].publish(actor);
    }
  }

  async updateActors() {
    const actors = {};
    const connectionIdToUserId = {};

    await this.roomChannel.presence.get((err, members) => {
      members.forEach((member) => {
        const userId = member.clientId;
        const actor = { ...member };
        connectionIdToUserId[member.connectionId] = actor.data.userId;

        //actor.userId = userId;
        actors[userId] = actor;
      });
      this.actors = actors;
      this.connectionIdToUserId = connectionIdToUserId;
      this.actorsObserver.publish(this.actors);
    });

    if (this.isMasterActor) {
      Object.values(this.actors).forEach((actor) => {
        this.addToSlot(actor);
      });
    }
  }

  updateMasterActorInfo(newMasterConnectionId: string = null, updateRoomInfo: boolean = true) {
    const oldMasterActorUserId = this.masterActorUserId;
    const masterActorUserId = this.connectionIdToUserId[newMasterConnectionId];

    if (masterActorUserId !== this.masterActorUserId) {
      this.masterActorUserId = masterActorUserId;
      setTimeout(() => {
        this.masterActorObserver.publish({
          oldMasterActorUserId,
          newMasterActorUserId: this.masterActorUserId,
        });
        this.log(
          'info',
          `Master actor has been changed. New Master Actor: ${this.masterActorUserId} - ${newMasterConnectionId}`,
        );
      }, 500); // FIXES HOST NOT APPEARING IN INTERFACE
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
  };

  validateRoomProperties() {
    let needToUpdateProperties = false;
    const roomProperties = this.getRoomProperties;
    const alreadyHaveProperties = Object.keys(roomProperties).length > 0;

    if (!alreadyHaveProperties) {
      return;
    }

    const roomActors = this.client.myRoomActors();
    const userIdToSlotIndex = { ...roomProperties.userIdToSlotIndex };
    const slots = roomProperties.slots.map((actorInfo) => {
      // If user has left the room, free up the slot
      if (actorInfo?.userId !== roomActors[actorInfo?.connectionId]?.customProperties?.userId) {
        needToUpdateProperties = true;
        delete userIdToSlotIndex[actorInfo.userId];
        return null;
      }

      return actorInfo;
    });

    if (needToUpdateProperties) {
      this.updateRoomProperties({ slots, userIdToSlotIndex });
    }
  }

  addToSlot = async (actorInfo) => {
    const roomProperties = this.getRoomProperties;
    const actorUserId = actorInfo.userId;
    if (!roomProperties?.userIdToSlotIndex) {
      console.error('room properties not available');
      return;
    }

    if (roomProperties.userIdToSlotIndex[actorUserId] !== undefined) {
      console.error('return, actor already in slots', actorUserId);
      return;
    }

    const slots = [...roomProperties.slots];
    const userIdToSlotIndex = { ...roomProperties.userIdToSlotIndex };

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

  initReconnect = debounce(() => {
    this.log('info', 'RECONNECT: Initializing reconnect');
    this.publishStateUpdate(REALTIME_STATE.RETRYING);

    this.currentReconnectAttempt = 0;
    this.isInitializingReconnect = false;

    this.reconnectObserver.publish(this.currentReconnectAttempt);

    this.reconnect();
  }, RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL);

  retryReconnect = debounce(() => {
    this.currentReconnectAttempt += 1;
    this.reconnectObserver.publish(this.currentReconnectAttempt);

    this.reconnect();
  }, RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL);

  reconnect() {
    this.log(
      'info',
      `RECONNECT: Starting ably reconnect | Current attempt: ${this.currentReconnectAttempt}`,
    );

    if (!this.roomId) {
      this.throw('error', 'Tried to reconnect without roomId set');
    }

    /*
     * If user is connected to master server, tries to reconnect using joinRoom
     * rejoin option
     */
    if (this.client.isConnectedToMaster() && this.shouldEnterRoomOnReconnect) {
      this.log(
        'info',
        'RECONNECT: Rejoining room since client aready connected to master server on start reconnect.',
      );
      this.join(this.myActorProperties);
      return;
    }

    /*
     * If user has lost his connection to master server, tries connecting to
     * it and starts joins the room again in onStateChange when reach
     * state READY_TO_JOIN.
     */
    this.log('info', 'RECONNECT: Reconnecting to master server since user lost connection.');
    this.updateMyProperties(this.myActorProperties);
  }

  handleStateUpdateDuringRetry(newState) {
    if (this.state !== REALTIME_STATE.RETRYING) {
      this.throw(
        'error',
        `handleStateUpdateDuringRetry@AblyRealtimeService called while in state ${this.state}`,
      );
    }

    if (newState === REALTIME_STATE.FAILED) {
      if (
        this.currentReconnectAttempt >= MAX_REALTIME_LOBBY_RETRIES &&
        !this.shouldEnterRoomOnReconnect
      ) {
        this.log(
          'info',
          `RECONNECT: Stopping reconnect to lobby after ${this.currentReconnectAttempt} attempts`,
        );
        return REALTIME_STATE.FAILED;
      }

      this.retryReconnect();
      return REALTIME_STATE.RETRYING;
    }

    if (newState === REALTIME_STATE.READY_TO_JOIN) {
      if (!this.shouldEnterRoomOnReconnect) {
        this.log(
          'info',
          'RECONNECT: Skipping join room since shouldEnterRoomOnReconnect is set false.',
        );
        this.shouldEnterRoomOnReconnect = null;
        return newState;
      }

      this.log('info', 'RECONNECT: Joining room after reconnecting to master server.');
      this.join(this.myActorProperties);

      // Continues in state RETRYING untill we gets in CONNECTED state
      return REALTIME_STATE.RETRYING;
    }

    if (newState === REALTIME_STATE.JOINED) {
      this.shouldEnterRoomOnReconnect = null;
      this.log('info', 'RECONNECT: Actor successfully reconnected.');
      return newState;
    }

    return REALTIME_STATE.RETRYING;
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
      // STATISTICS
      this.roomChannel.status((err, channelDetails) => {
        // console.log('CHANNEL DETAILS', channelDetails);
      });
    }
  }

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

  onError = (error) => {
    console.error(error);
  };

  onEvent = () => {};

  onStateChange = (state) => {
    const stateName = state.current;
    let newState =
      ABLY_CONNECTION_STATE_TO_REALTIME_STATE[stateName as keyof typeof REALTIME_STATE] ||
      ABLY_CHANNEL_STATE_TO_REALTIME_STATE[stateName as keyof typeof REALTIME_STATE];

    if (newState === REALTIME_STATE.READY_TO_JOIN) {
      this.hadJoinedLobbyAtLeastOnce = true;
    }

    if (this.state === newState) {
      return;
    }

    if (newState === REALTIME_STATE.FAILED && this.state !== REALTIME_STATE.RETRYING) {
      this.isInitializingReconnect = true;
      this.shouldEnterRoomOnReconnect =
        this.state === REALTIME_STATE.CONNECTING || this.state === REALTIME_STATE.CONNECTED;

      this.publishStateUpdate(REALTIME_STATE.RETRYING);
      this.initReconnect();
      return;
    }

    if (this.isInitializingReconnect) {
      return;
    }

    if (this.state === REALTIME_STATE.RETRYING) {
      newState = this.handleStateUpdateDuringRetry(newState);
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
    // add additional properties?
    // get property history
    // merge and publish
    await this.roomChannel.history({ limit: 5 }, async (error, page) => {
      if (error) {
        // handle the error properly
        console.error(error);
        return;
      }
      // To save time we'll assume that the history is less than the maximum we specified. In a real
      // application, you'd use the additional `PaginatedResult` methods provided in the `page` object
      // in order to read back through the channel's history, one page at a time.
      // See https://ably.com/docs/realtime/history#paginated-result for details.

      await this.roomChannel.presence.get(async (err, members) => {
        // The messages are in reverse chronological order, so copy the array and reverse it
        const messages = [...page.items];
        //messages.reverse();

        // If the history is empty, it means this is a newly-created game. Select which player will be
        // going first. We'll toggle this value whenever the current player makes a move.
        if (messages.length === 0 || members.length === 1) {
          await this.initializeRoomProperties(myActor, this.initialRoomProperties); // initialize room
        } else {
          console.warn('HISTORY PRESENT!', messages);
          // Replay all the historical messages in order to bring the to the correct state
          // await this.updateActors(); // to known people that are already inside beforehand
          console.log('LAST MESSAGE', messages[0].data);
          // for (let msg of messages) {
          this.updateLocalRoomState(messages[0].data);
          // }
        }
      });

      this.joinRoomObserver.publish(this.roomChannel);
      this.log('info', 'Joined realtime room');
      this.publishStateUpdate(REALTIME_STATE.JOINED);
    });
  };

  onActorJoin = async (actor) => {
    await this.updateActors();
    this.actorJoinedObserver.publish(actor);
    if (this.isMasterActor) {
      console.log('add to slot!');
      this.log(
        'info',
        `Actor joined room. Actor data: ${JSON.stringify({
          ...actor,
        })}`,
      );
      this.addToSlot(actor);
    }
  };

  onActorLeave = async (actor, cleanup) => {
    if (this.state === REALTIME_STATE.READY_TO_JOIN || actor.connectionId === -1) {
      return;
    }
    await this.updateActors();

    const hostLeft = actor.data.userId === this.masterActorUserId;
    //const isMasterActor = this.localRoomProperties.hostConnectionId === this.getMyActor.connectionId;

    // this.updateRoomInfo(); // TODO MASTER SHOULD UPDATE ROOM PROPERTIES ?
    this.actorLeaveObserver.publish(actor);

    if (hostLeft) {
      this.removeFromSlot(actor);
    }

    if (this.isMasterActor && !cleanup) {
      this.log(
        'info',
        `Actor leaved room. Actor data: ${JSON.stringify({
          ...actor,
        })}`,
      );
      this.removeFromSlot(actor);
    }
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
