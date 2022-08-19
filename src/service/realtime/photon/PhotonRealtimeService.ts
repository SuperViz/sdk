import { ObserverHelper, RealtimeStateTypes } from '@superviz/immersive-core';
import debounce from 'lodash.debounce';

import packageInfo from '../../../../package.json';
import { MeetingcolorsTypes } from '../../../common/types/meetingcolors.types';
import { logger } from '../../../common/utils';

import { PHOTON_REGIONS } from './types/photon-region.types';
import {
  REALTIME_STATE,
  PHOTON_STATE_TO_REALTIME_STATE,
  PHOTON_FAILED_REASONS,
  PHOTON_ERROR_TO_FAILED_REASONS,
} from './types/photon-state.types';

const { Photon } = require('../../../vendor/photon/Photon-Javascript_SDK');

const MAX_REALTIME_LOBBY_RETRIES = 3;
const RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL = 5000;
export default class PhotonRealtimeService {
  static LOGGER_PREFIX = 'PHOTON';

  Photon;
  client;
  state: RealtimeStateTypes = REALTIME_STATE.DISCONNECTED;
  stateReason?: PHOTON_FAILED_REASONS = null;
  previousState = null;
  actors = {};
  masterActor = null;
  actorNrToUserId = {};
  masterActorUserId = null;
  myActorProperties = null;
  enableSync: boolean = true;
  hadJoinedLobbyAtLeastOnce: boolean = false;
  shouldEnterRoomOnReconnect?: boolean;
  isInitializingReconnect: boolean;
  roomId?: string;
  currentReconnecAttempt: number;
  oldSyncProperties: {} = {};
  region: PHOTON_REGIONS;
  actorObservers: ObserverHelper[];
  actorsObserver: ObserverHelper;
  subscribeToActorsUpdate: Function;
  unsubscribeFromActorsUpdate: Function;
  actorJoinedObserver: ObserverHelper;
  subscribeToActorJoined: Function;
  unsubscribeFromActorJoined: Function;
  actorLeaveObserver: ObserverHelper;
  subscribeToActorLeave: Function;
  unsubscribeFromActorLeave: Function;
  joinRoomObserver: ObserverHelper;
  subscribeToJoinRoom: Function;
  unsubscribeFromJoinRoom: Function;
  reconnectObserver: ObserverHelper;
  subscribeToReconnectUpdate: Function;
  unsubscribeFromReconnectUpdate: Function;
  roomInfoUpdatedObserver: ObserverHelper;
  subscribeToRoomInfoUpdated: Function;
  unsubscribeFromRoomInfoUpdated: Function;
  roomListUpdatedObserver: ObserverHelper;
  subscribeToRoomListUpdated: Function;
  unsubscribeFromRoomListUpdated: Function;
  masterActorObserver: ObserverHelper;
  subscribeToMasterActorUpdate: Function;
  unsubscribeFromMasterActorUpdate: Function;
  realtimeStateObserver: ObserverHelper;
  subscribeToRealtimeState: Function;
  unsubscribeFromRealtimeState: Function;
  syncPropertiesObserver: ObserverHelper;
  subscribeToSyncProperties: Function;
  unsubscribeFromSyncProperties: Function;

  constructor() {
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
  }

  start(roomId, actorInfo, options) {
    this.region = options?.region ?? PHOTON_REGIONS.default;
    this.enableSync = options?.enableSync ?? true;

    if (!this.client) {
      this.buildClient(options.photonAppId);
    }

    if (!this.client.isInLobby()) {
      this.log('info', `Connecting to region master '${this.region}'.`);
      this.client.connectToRegionMaster(this.region);
    }

    this.updateMyProperties(actorInfo);

    this.roomId = roomId;
  }

  join(myActorProperties, aditionalRoomProperties = {}) {
    if (!this.client.isInLobby()) {
      this.throw('error', 'Tried to join room without being in lobby');
    }

    if (myActorProperties) {
      this.updateMyProperties(myActorProperties);
    }

    this.log(
      'info',
      `Entering realtime room. Room ID: ${this.roomId} | Custom Join Properties: ${JSON.stringify(
        aditionalRoomProperties,
      )}`,
    );

    this.client.joinRoom(this.roomId, {
      createIfNotExists: true,
      ...aditionalRoomProperties,
    });
  }

  leave() {
    this.log('info', 'Disconnecting from photon servers');
    this.client.disconnect();

    this.roomId = null;
    this.stateReason = null;
    this.previousState = null;
    this.actors = {};
    this.masterActor = null;
    this.actorNrToUserId = {};
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

    if (actor.name !== this.getMyActor.name && this.enableSync) {
      this.client.myActor().setName(actor.name);
    }

    this.client.myActor().setCustomProperties(actor);
    this.myActorProperties = actor;
  }

  updateRoomProperties(properties) {
    if (!this.enableSync) {
      return;
    }

    this.client.myRoom().setCustomProperties(
      {
        ...this.getRoomProperties,
        ...properties,
      },
      true,
    );
    this.updateRoomInfo();
  }

  setMasterActor(actorUserId) {
    const { actorNr } = this.actors[actorUserId];
    this.client.myRoom().setMasterClient(actorNr);
    this.updateMasterActorInfo(actorNr);
    this.log(
      'info',
      `Master actor has been changed. New Master Actor: ${actorUserId} - ${actorNr}`,
    );
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
      if (this.actors[userId]?.customProperties.noSlotRequired) {
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
    return MeetingcolorsTypes[avatarColorIndex];
  }

  // internal
  buildClient(photonAppId) {
    if (this.client) {
      this.throw(
        'error',
        'Tried to call buildClient@PhotonRealtimeService when LoadBalancingClient is already initialized',
      );
    }

    const { name: appVersion } = packageInfo;

    this.client = new Photon.LoadBalancing.LoadBalancingClient(
      Photon.ConnectionProtocol.Wss,
      photonAppId,
      appVersion,
    );

    this.log('Photon Realtime Client initialized', {
      masterServer: this.client.getMasterServerAddress(),
      nameServer: this.client.getNameServerAddress(),
    });

    this.client.onError = this.onError;
    this.client.onEvent = this.onEvent;
    this.client.onStateChange = this.onStateChange;
    this.client.onOperationResponse = this.onOperationResponse;
    this.client.onActorPropertiesChange = this.onActorPropertiesChange;
    this.client.onMyRoomPropertiesChange = this.onMyRoomPropertiesChange;
    this.client.onRoomListUpdate = this.onRoomListUpdate;
    this.client.onRoomList = this.onRoomList;
    this.client.onJoinRoom = this.onJoinRoom;
    this.client.onActorJoin = this.onActorJoin;
    this.client.onActorLeave = this.onActorLeave;

    // Exitgames.Common.Logger.Level.WARN === 3
    this.client.setLogLevel(3);
  }

  publishActorUpdate(actor) {
    if (this.actorObservers[actor.customProperties.userId]) {
      this.actorObservers[actor.customProperties.userId].publish(actor);
    }
  }

  updateActors() {
    const actors = {};
    const actorNrToUserId = {};

    Object.values(this.client.myRoomActors())
      .forEach((actor: {
        actorNr: string,
        customProperties: { userId: string } }) => {
        actors[actor.customProperties.userId] = actor;

        actorNrToUserId[actor.actorNr] = actor.customProperties.userId;
      });

    this.actors = actors;
    this.actorNrToUserId = actorNrToUserId;

    this.actorsObserver.publish(this.actors);
  }

  updateMasterActorInfo(newMasterActorNr: string = null, updateRoomInfo: boolean = true) {
    const oldMasterActorUserId = this.masterActorUserId;
    const masterActorUserId = this.actorNrToUserId[newMasterActorNr
        ?? this.client.myRoomMasterActorNr()]
        ?? null;

    if (masterActorUserId !== this.masterActorUserId) {
      this.masterActorUserId = masterActorUserId;
      this.masterActorObserver.publish({
        oldMasterActorUserId,
        newMasterActorUserId: this.masterActorUserId,
      });
    }
    if (updateRoomInfo) {
      this.updateRoomInfo();
    }
  }

  updateRoomInfo() {
    this.roomInfoUpdatedObserver.publish(this.client.myRoom());
    this.updateMasterActorInfo(null, false);
    this.checkSyncPropertiesChanged();
  }

  initializeRoomProperties() {
    const alreadyHaveProperties = this.getRoomProperties.slots
        && this.getRoomProperties.userIdToSlotIndex;
    const isMasterActor = this.client.myRoomMasterActorNr() === this.getMyActor.actorNr;

    if (alreadyHaveProperties || !isMasterActor) {
      return;
    }

    const myActor = this.getMyActor;

    const roomProperties = {
      slots: Array(16).fill(null),
      userIdToSlotIndex: {},
      isGridModeEnable: false,
      syncProperties: {},
    };

    roomProperties.slots[0] = {
      actorNr: myActor.actorNr,
      userId: myActor.getCustomProperties().userId,
      color: this.getActorColor(0),
    };
    roomProperties.userIdToSlotIndex[myActor.getCustomProperties().userId] = 0;

    this.updateRoomProperties(roomProperties);
  }

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
      if (actorInfo?.userId !== roomActors[actorInfo?.actorNr]?.customProperties?.userId) {
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

  setActorInfoInRoomProperties(actorInfo) {
    const roomProperties = this.getRoomProperties;
    const actorUserId = actorInfo.customProperties.userId;

    if (roomProperties.userIdToSlotIndex[actorUserId] !== undefined) {
      return;
    }

    const slots = [...roomProperties.slots];
    const userIdToSlotIndex = { ...roomProperties.userIdToSlotIndex };

    for (let index = 0; index < slots.length; index += 1) {
      if (!slots[index]) {
        slots[index] = {
          actorNr: actorInfo.actorNr,
          userId: actorInfo.customProperties.userId,
          color: this.getActorColor(index),
        };
        userIdToSlotIndex[actorInfo.customProperties.userId] = index;
        break;
      }
    }

    this.updateRoomProperties({ slots, userIdToSlotIndex });
  }

  removeActorInfoInRoomProperties(actorInfo) {
    const roomProperties = this.getRoomProperties;
    const actorUserId = actorInfo.customProperties.userId;

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

  initReconnect = debounce(function (photonState) {
    this.log('info', 'RECONNECT: Initializing reconnect');
    this.publishStateUpdate(REALTIME_STATE.RETRYING, photonState);

    this.currentReconnecAttempt = 0;
    this.isInitializingReconnect = false;

    this.reconnectObserver.publish(this.currentReconnecAttempt);

    this.reconnect();
  }, RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL);

  retryReconnect = debounce(function () {
    this.currentReconnecAttempt += 1;
    this.reconnectObserver.publish(this.currentReconnecAttempt);

    this.reconnect();
  }, RECONNECT_STATE_UPDATE_DEBOUNCE_INTERVAL);

  reconnect() {
    this.log(
      'info',
      `RECONNECT: Starting photon reconnect | Current attempt: ${this.currentReconnecAttempt}`,
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
    this.client.connectToRegionMaster(this.region ?? PHOTON_REGIONS.default);
    this.updateMyProperties(this.myActorProperties);
  }

  handleStateUpdateDuringRetry(newState, photonState) {
    if (this.state !== REALTIME_STATE.RETRYING) {
      this.throw(
        'error',
        `handleStateUpdateDuringRetry@PhotonRealtimeService called while in state ${this.state}`,
      );
    }

    if (newState === REALTIME_STATE.FAILED) {
      if (
        this.currentReconnecAttempt >= MAX_REALTIME_LOBBY_RETRIES
                && !this.shouldEnterRoomOnReconnect
      ) {
        this.log(
          'info',
          `RECONNECT: Stopping reconnect to lobby after ${this.currentReconnecAttempt} attempts`,
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

    if (newState === REALTIME_STATE.CONNECTED) {
      this.shouldEnterRoomOnReconnect = null;
      this.log('info', 'RECONNECT: Actor successfully reconnected.');
      return newState;
    }

    return REALTIME_STATE.RETRYING;
  }

  log(level, message) {
    // const timestamp = new Date().toISOString();
    // logger.log(`${level} ${PhotonRealtimeService.LOGGER_PREFIX} - ${timestamp} - ${message}`);

    logger.log(message);
  }

  // TODO: not the best way to do this but will prevent creating unnecessary variables
  throw(level, message) {
    this.log(level, message);
    throw new Error(message);
  }

  publishStateUpdate(state, photonState, reason = null) {
    const stateName = Photon.LoadBalancing.LoadBalancingClient.StateToName(photonState);

    this.stateReason = reason;

    if (this.state === state) {
      return;
    }

    this.previousState = this.state;
    this.state = state;
    this.log(
      'info',
      `Realtime state did change. New state: ${this.state} | Photon State: ${photonState} - ${stateName}`,
    );
    this.realtimeStateObserver.publish(this.state, this.stateReason);
  }

  setGridMode = (isGridModeEnable) => {
    const roomProperties = this.getRoomProperties;
    const newRoomProperties = {
      ...roomProperties,
      isGridModeEnable,
    };
    this.updateRoomProperties(newRoomProperties);
  };

  checkSyncPropertiesChanged = () => {
    const roomProperties = this.getRoomProperties;
    const { syncProperties } = roomProperties;
    // @Todo: Change this function to get deep difference between properties
    const propertiesChanged = Object
      .fromEntries(
        Object.entries(syncProperties)
          .filter(([key, value]) => this.oldSyncProperties[key] !== value),
      );
    this.syncPropertiesObserver.publish(propertiesChanged);
    this.oldSyncProperties = { ...syncProperties };
  };

  setSyncProperties = (properties) => {
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
    this.updateRoomProperties(newRoomProperties);
  };

  // Photon listeners
  onError = (errorCode, errorMessage) => {
    const photonErrorCodes = Photon.LoadBalancing.LoadBalancingClient.PeerErrorCode;
    const photonErrorName = Object.keys(photonErrorCodes).find(
      (errorName) => photonErrorCodes[errorName] === errorCode,
    );
    let reason = PHOTON_ERROR_TO_FAILED_REASONS[photonErrorName];

    this.log('error', `Photon error. Error Code: ${errorCode} | Error Message: ${errorMessage}`);

    if (!reason) {
      this.log(
        'fatal',
        `Not mapped photon error code. Code: ${errorCode} | Message: ${errorMessage}`,
      );
      reason = PHOTON_FAILED_REASONS.LOST_CONNECTION;
    }

    if (this.state === REALTIME_STATE.FAILED) {
      this.publishStateUpdate(
        REALTIME_STATE.FAILED,
        Photon.LoadBalancing.LoadBalancingClient.State.Error,
        reason,
      );
    }
  };

  onEvent = () => {};

  onStateChange = (state) => {
    const stateName = Photon.LoadBalancing.LoadBalancingClient.StateToName(state);
    let newState = PHOTON_STATE_TO_REALTIME_STATE[stateName as keyof typeof REALTIME_STATE];

    if (newState === REALTIME_STATE.READY_TO_JOIN) {
      this.hadJoinedLobbyAtLeastOnce = true;
    }

    if (this.state === newState) {
      return;
    }

    if (newState === REALTIME_STATE.FAILED && this.state !== REALTIME_STATE.RETRYING) {
      this.isInitializingReconnect = true;
      this.shouldEnterRoomOnReconnect = this.state === REALTIME_STATE.CONNECTING
          || this.state === REALTIME_STATE.CONNECTED;

      this.publishStateUpdate(REALTIME_STATE.RETRYING, state);
      this.initReconnect();
      return;
    }

    if (this.isInitializingReconnect) {
      return;
    }

    if (this.state === REALTIME_STATE.RETRYING) {
      newState = this.handleStateUpdateDuringRetry(newState, state);
    }

    if (newState !== this.state) {
      this.publishStateUpdate(newState, state);
    }
  };

  onOperationResponse = (errorCode, _, code) => {
    const isPluginReportedError = errorCode
        === Photon.LoadBalancing.Constants.ErrorCode.PluginReportedError;
    const isJoinGameError = code === Photon.LoadBalancing.Constants.OperationCode.JoinGame;

    if (isPluginReportedError && isJoinGameError) {
      this.publishStateUpdate(
        REALTIME_STATE.FAILED,
        Photon.LoadBalancing.LoadBalancingClient.State.Error,
        PHOTON_FAILED_REASONS.UNABLE_TO_LOAD_ROOM_INFO,
      );
    }
  };

  onActorPropertiesChange = (actor) => {
    this.actors[actor.customProperties.userId] = actor;

    this.publishActorUpdate(this.actors[actor.customProperties.userId]);

    this.actorsObserver.publish(this.actors);
  };

  onMyRoomPropertiesChange = () => {
    this.updateRoomInfo();
  };

  onRoomListUpdate = (rooms) => {
    this.roomListUpdatedObserver.publish(rooms);
  };

  onRoomList = (rooms) => {
    this.roomListUpdatedObserver.publish(rooms);
  };

  onJoinRoom = () => {
    this.initializeRoomProperties();
    this.updateActors();
    this.updateRoomInfo();
    this.joinRoomObserver.publish(this.client.myRoom());
    this.log('info', 'Joined realtime room');
    // @Todo: change state after have in immersive-core
    this.publishStateUpdate(5, 4);
    this.updateMasterActorInfo();
  };

  onActorJoin = (actor) => {
    this.updateActors();
    this.actorJoinedObserver.publish(actor);
    if (this.isMasterActor) {
      this.log(
        'info',
        `Actor joined room. Actor data: ${JSON.stringify({
          ...actor,
          loadBalancingClient: undefined,
        })}`,
      );
      this.setActorInfoInRoomProperties(actor);
    }
  };

  onActorLeave = (actor, cleanup) => {
    /*
         * If user opts to disconnect before enter a room, photon will emit actor
         * leave event for the local actor with actorNr -1. Since this actor was
         * not propagated via `this.actorJoinedObserver.publish`, we can simply
         * ignore the event.
         */
    if (this.state === REALTIME_STATE.READY_TO_JOIN || actor.actorNr === -1) {
      return;
    }

    this.updateActors();
    this.updateRoomInfo();
    this.actorLeaveObserver.publish(actor);
    const isMasterActorLeave = actor.customProperties.userId === this.masterActorUserId;
    if (isMasterActorLeave) {
      this.updateMasterActorInfo();
    }
    if (this.isMasterActor && !cleanup) {
      this.log(
        'info',
        `Actor leaved room. Actor data: ${JSON.stringify({
          ...actor,
          loadBalancingClient: undefined,
        })}`,
      );
      this.removeActorInfoInRoomProperties(actor);
    }
  };

  // getters
  get isJoinedRoom() {
    // @Todo: set in immersive-core the new state 5
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    return this.state == 5;
  }

  get isConnected() {
    return this.state === REALTIME_STATE.CONNECTED;
  }

  get canJoinRoom() {
    return this.client.isInLobby();
  }

  get getMyActor() {
    return this.client.myActor();
  }

  get getMyProperties() {
    return this.getMyActor.getCustomProperties();
  }

  get getMasterActor() {
    return this.masterActorUserId;
  }

  get isMasterActor() {
    return this.masterActorUserId === this.getMyProperties.userId;
  }

  get room() {
    return this.client.myRoom();
  }

  get getRoomProperties() {
    return this.room.getCustomProperties();
  }
}
