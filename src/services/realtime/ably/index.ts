import Ably from 'ably';
import throttle from 'lodash/throttle';

import { RealtimeEvent } from '../../../common/types/events.types';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { logger } from '../../../common/utils';
import ApiService from '../../api';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';

import {
  AblyParticipant,
  AblyParticipants,
  AblyRealtime,
  AblyRealtimeData,
  AblyTokenCallBack,
  ParticipantDataInput,
} from './types';

const KICK_PARTICIPANTS_TIME = 1000 * 60;
const MESSAGE_SIZE_LIMIT = 2000;
const SYNC_PROPERTY_INTERVAL = 1000;

let KICK_PARTICIPANTS_TIMEOUT = null;
export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  private client: Ably.Realtime;
  private participants: AblyParticipants = {};
  private hostParticipantId: string = null;
  private myParticipant: AblyParticipant = null;

  private localParticipantId: string = null;
  private isBroadcast: boolean = false;

  private roomChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private roomSyncChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private roomBroadcastChannel: Ably.Types.RealtimeChannelCallbacks = null;

  private isReconnecting: boolean = false;
  private isJoinedRoom: boolean = false;
  private currentReconnecAttempt: number = 0;
  private localRoomProperties?: AblyRealtimeData = null;
  private enableSync: boolean = true;
  private isSyncFreezed: boolean = false;
  private roomId: string;
  private shouldKickParticipantsOnHostLeave: boolean;
  private ablyKey: string;
  private apiKey: string;
  private left: boolean = false;

  private state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  private roomChannelState: Ably.Types.ChannelStateChange;
  private connectionState: Ably.Types.ConnectionStateChange;

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
    this.onReceiveBroadcastSync = this.onReceiveBroadcastSync.bind(this);
    this.getParticipantSlot = this.getParticipantSlot.bind(this);
    this.auth = this.auth.bind(this);
  }

  public get roomProperties() {
    return this.localRoomProperties;
  }

  public get getMyParticipant() {
    return this.myParticipant;
  }

  public get hostClientId() {
    return this.roomProperties?.hostClientId;
  }

  public get getParticipants(): AblyParticipants {
    return this.participants;
  }

  public get participant(): unknown {
    return this.myParticipant;
  }

  public start({
    initialParticipantData,
    roomId,
    apiKey,
    shouldKickParticipantsOnHostLeave,
    isBroadcast,
  }: StartRealtimeType): void {
    this.myParticipant = {
      data: initialParticipantData,
      timestamp: null,
      action: null,
      clientId: initialParticipantData.participantId,
      connectionId: null,
      encoding: null,
      id: null,
    };
    this.isBroadcast = isBroadcast;
    this.enableSync = initialParticipantData.type !== ParticipantType.AUDIENCE;
    this.roomId = `superviz:${roomId.toLowerCase()}-${apiKey}`;
    this.localParticipantId = this.myParticipant.data.participantId;

    this.shouldKickParticipantsOnHostLeave = shouldKickParticipantsOnHostLeave;
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
  private auth(tokenParams: Ably.Types.TokenParams, callback: AblyTokenCallBack): void {
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
   * @function Join
   * @description join realtime room
   * @returns {void}
   * @param joinProperties
   */
  public join(joinProperties: ParticipantInfo): void {
    logger.log('REALTIME', `Entering room. Room ID: ${this.roomId}`);
    this.updateMyProperties(joinProperties);

    // join custom sync channel
    this.roomSyncChannel = this.client.channels.get(`${this.roomId}:sync`);
    this.roomSyncChannel.subscribe(this.onAblySyncChannelUpdate);

    if (this.isBroadcast) {
      this.roomBroadcastChannel = this.client.channels.get(`${this.roomId}:broadcast`);
      if (!this.enableSync) {
        this.roomBroadcastChannel.subscribe('update', this.onReceiveBroadcastSync);
      }
    }

    // join main room channel
    this.roomChannel = this.client.channels.get(this.roomId);
    this.roomChannel.on(this.onAblyChannelStateChange);
    this.roomChannel.subscribe('update', this.onAblyRoomUpdate);

    // presence only in the main channel
    this.roomChannel.presence.subscribe('enter', this.onAblyPresenceEnter);
    if (this.enableSync) {
      this.roomChannel.presence.subscribe('update', this.onAblyPresenceUpdate);
    }
    this.roomChannel.presence.subscribe('leave', this.onAblyPresenceLeave);

    // enter
    this.roomChannel.presence.enter(this.myParticipant.data);
  }

  /**
   * @function leave
   * @description leave realtime room
   * @returns {void}
   */
  public leave(): void {
    logger.log('REALTIME', 'Disconnecting from ably servers');
    this.client.close();
    this.isJoinedRoom = false;
    this.isReconnecting = false;
    this.roomId = null;
    this.participants = {};
    this.hostParticipantId = null;
    this.myParticipant = null;
    this.roomChannel = null;
    this.roomSyncChannel = null;
    this.client = null;
    this.left = true;
  }

  /**
   * @function setHost
   * @param {string} participantParticipantId
   * @description set a new host to the room
   * @returns {void}
   */
  public setHost = async (participantParticipantId: string): Promise<void> => {
    if (!participantParticipantId) return;

    const participant = this.participants[participantParticipantId];
    await this.updateRoomProperties({
      hostClientId: participant.clientId,
    });
  };

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
   * @param {string} name
   * @param {unknown} property
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setSyncProperty = throttle((name: string, property: unknown): void => {
    if (this.isMessageTooBig(property) || this.isSyncFreezed) return;
    this.roomSyncChannel.publish(name, property, (error: Ably.Types.ErrorInfo) => {
      if (!error) return;

      logger.log(`publish failed with error ${error}`);
    });
  }, SYNC_PROPERTY_INTERVAL);

  /**
   * @function setFollowParticipant
   * @param {string | null} participantId
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setFollowParticipant(participantId: string | null): void {
    this.updateRoomProperties({
      followParticipantId: participantId,
    });
  }

  /**
   * @function setGather
   * @param {boolean} active
   * @description sync to all participants to go to the host position
   * @returns {void}
   */
  public setGather(active: boolean): void {
    this.updateRoomProperties({
      gather: active,
    });
  }

  /**
   * @function getParticipantSlot
   * @param {string} participantId
   * @returns {void}
   */
  public getParticipantSlot(participantId: string): number {
    if (participantId) {
      const id = participantId.toString();
      const exists = this.participants && this.participants[id];
      if (exists) {
        return this.participants[participantId]?.data?.slotIndex;
      }
      return 16; // GRAY COLOR
    }
    return 16; // GRAY COLOR
  }

  /**
   * @function freezeSync
   * @param {boolean} isFreezed
   * @returns {void}
   */
  public freezeSync = (isFreezed: boolean): void => {
    this.isSyncFreezed = isFreezed;

    if (isFreezed) {
      this.roomChannel.detach();
      this.roomSyncChannel.detach();
      this.roomBroadcastChannel?.detach();
      this.roomChannel.unsubscribe();
      this.roomSyncChannel.unsubscribe();
      this.roomBroadcastChannel?.unsubscribe();
      return;
    }

    this.join(this.myParticipant.data);
  };

  /**
   * @function setParticipantData
   * @param {ParticipantDataInput} data
   * @returns {void}
   */
  public setParticipantData = (data: ParticipantDataInput): void => {
    this.myParticipant.data = Object.assign({}, this.myParticipant.data, data);
  };

  /**
   * @function onAblyPresenceEnter
   * @description callback that receives the event that a participant has entered the room
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceEnter(presenceMessage: Ably.Types.PresenceMessage): void {
    if (presenceMessage.clientId === this.myParticipant.data.participantId) {
      this.onJoinRoom(presenceMessage);
    } else {
      this.onParticipantJoin(presenceMessage);
    }
  }

  /**
   * @function onAblyPresenceUpdate
   * @description  callback that receives the event that
   * a participant's properties have been updated
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceUpdate(presenceMessage: Ably.Types.PresenceMessage): void {
    if (!this.isJoinedRoom) return;

    const { clientId } = presenceMessage;
    const participant: AblyParticipant = Object.assign({}, presenceMessage, {
      participantId: presenceMessage.clientId,
    });
    this.publishParticipantUpdate(participant);

    if (this.participants && this.participants[clientId]) {
      if (this.hostParticipantId === this.localParticipantId && this.isBroadcast) {
        this.syncBroadcast();
      }
    }
  }

  /**
   * @function onAblyPresenceLeave
   * @description  callback that receives the exit event from a participant
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceLeave(presenceMessage: Ably.Types.PresenceMessage): void {
    this.onParticipantLeave(presenceMessage);
  }

  /**
   * @function onAblySyncChannelUpdate
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
   * @function onReceiveBroadcastSync
   * @description receive the info of all participants from the host
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  onReceiveBroadcastSync(message: Ably.Types.Message): void {
    const participants = message.data;
    participants.forEach((member) => {
      const participantId = member.clientId;
      this.participants[participantId] = member;
      if (!member.data?.isAudience) {
        this.participants[participantId].data = JSON.parse(this.participants[participantId].data);
        this.publishParticipantUpdate(this.participants[participantId]);
      }
    });
  }

  /**
   * @function onAblyRoomUpdate
   * @description callback that receives the update event from ably's room
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  private onAblyRoomUpdate(message: Ably.Types.Message): void {
    this.updateLocalRoomState(message.data);
  }

  /**
   * @function updateLocalRoomState
   * @description update room data
   * @param {AblyRealtimeData} data
   * @returns {void}
   */
  private updateLocalRoomState = (data: AblyRealtimeData): void => {
    this.localRoomProperties = Object.assign({}, this.localRoomProperties, data);

    this.roomInfoUpdatedObserver.publish(this.localRoomProperties);

    if (data.hostClientId) {
      this.updateHostInfo(data.hostClientId);
    } else {
      this.hostPassingHandle();
    }
    this.updateParticipants();
  };

  /**
   * @function updateMyProperties
   * @param {ParticipantInfo} participantInfo
   * @description updates local participant properties
   * @returns {void}
   */
  public updateMyProperties = throttle((newProperties: ParticipantInfo): void => {
    const properties = newProperties;

    if (
      this.isMessageTooBig(newProperties) ||
      this.left ||
      !this.enableSync ||
      this.isSyncFreezed
    ) {
      return;
    }

    if (properties.avatar === undefined) {
      delete properties.avatar;
    }
    this.myParticipant.data = {
      ...this.myParticipant.data,
      ...newProperties,
    };

    if (!this.isJoinedRoom) {
      return;
    }

    return this.roomChannel.presence.update(this.myParticipant.data);
  }, SYNC_PROPERTY_INTERVAL);

  /**
   * @function updateRoomProperties
   * @param {AblyRealtimeData} properties
   * @description updates room properties
   * @returns {void}
   */
  private updateRoomProperties = async (properties: AblyRealtimeData): Promise<void> => {
    if (this.isMessageTooBig(properties) || this.isSyncFreezed || this.left) return;

    const newProperties = {
      ...this.localRoomProperties,
      ...properties,
    };

    await this.roomChannel.publish('update', newProperties);
  };

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
      clientId: this.myParticipant.data.participantId,
      authCallback: this.auth,
    };

    this.client = new Ably.Realtime(options);

    this.client.connection.on(this.onAblyConnectionStateChange);
  }

  /**
   * @function publishParticipantUpdate
   * @param {AblyParticipant} participant
   * @description publish a participant's changes to observer
   * @returns {void}
   */
  private publishParticipantUpdate(participant: AblyParticipant): void {
    this.participants[participant.clientId] = participant;
    this.participantsObserver.publish(this.participants);
    if (this.participantObservers[participant.clientId]) {
      this.participantObservers[participant.clientId].publish(participant);
    }
  }

  /**
   * @function updateParticipants
   * @description update participant list
   * @returns {void}
   */
  private updateParticipants = async (): Promise<void> => {
    const participants = {};

    await this.roomChannel.presence.get((_, members) => {
      members.forEach((member) => {
        participants[member.clientId] = { ...member };
      });
      this.participants = participants;
      this.participantsObserver.publish(this.participants);
    });
  };

  /**
   * @function updateHostInfo
   * @param {string} newHostId
   * @description update host info
   * @returns {void}
   */
  private updateHostInfo = async (newHostId: string): Promise<void> => {
    const currentConnectedClients: string[] = [];
    await this.roomChannel.presence.get((err, members) => {
      members.forEach((member) => {
        if (err) {
          return;
        }
        currentConnectedClients.push(member.clientId);
      });
    });

    if (!newHostId || !currentConnectedClients.includes(newHostId)) {
      this.hostPassingHandle();
      return;
    }

    if (KICK_PARTICIPANTS_TIMEOUT) {
      clearTimeout(KICK_PARTICIPANTS_TIMEOUT);
    }

    const oldMasterParticipantParticipantId = this.hostParticipantId;
    this.hostParticipantId = newHostId;

    this.masterParticipantObserver.publish({
      oldMasterParticipantParticipantId,
      newMasterParticipantParticipantId: this.hostParticipantId,
    });

    logger.log('RELTIME', `Master participant has been changed. New Master Participant: ${this.hostParticipantId}`);
  };

  /**
   * @function initializeRoomProperties
   * @param {Ably.Types.PresenceMessage} participant
   * @param {AblyRealtimeData} additionalProperties
   * @description initializes room properties
   * @returns {void}
   */
  private initializeRoomProperties = async (
    participant: Ably.Types.PresenceMessage,
    additionalProperties: AblyRealtimeData = {},
  ): Promise<void> => {
    const roomProperties = {
      isGridModeEnable: false,
      ...additionalProperties,
    };

    // set host to me if im candidate
    if (this.myParticipant?.data.type) {
      roomProperties.hostClientId = this.myParticipant.data.participantId;
    }
    await this.updateParticipants();
    await this.updateRoomProperties(roomProperties);
  };

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
      this.join(this.myParticipant.data);
      return;
    }

    logger.log('REALTIME', 'RECONNECT: Restarting ably server since participant lost connection.');

    this.buildClient();

    this.updateMyProperties(this.myParticipant.data);
  }

  /**
   * @function throw
   * @param {string} message
   * @returns {void}
   */
  private throw(message: string): void {
    logger.log(message);
    throw new Error(message);
  }

  /**
   * @function publishStateUpdate
   * @description saves the room locally and publishes it to the sdk
   * @param {RealtimeStateTypes} state
   * @returns
   */
  private publishStateUpdate(state: RealtimeStateTypes): void {
    if (this.state === state) return;

    this.state = state;

    logger.log(
      'REALTIME',
      `Realtime state did change. New state: ${RealtimeStateTypes[this.state]}`,
    );

    this.realtimeStateObserver.publish(this.state);
  }

  /**
   * @function fetchRoomProperties
   * @returns {AblyRealtimeData | null}
   */
  private fetchRoomProperties(): Promise<AblyRealtimeData | null> {
    return new Promise((resolve, reject) => {
      this.roomChannel.history((error, resultPage) => {
        if (error) {
          reject(error);
        }

        const lastMessage = resultPage.items[0]?.data;

        if (lastMessage) {
          resolve(lastMessage);
        } else {
          resolve(null);
        }
      });
    });
  }

  /**
   * @function hostPassingHandle
   * @description
     determines when guest participants should wait for the host before entering the meeting room
   * @returns {void}
   */
  private hostPassingHandle = throttle(async (): Promise<void> => {
    this.localRoomProperties = await this.fetchRoomProperties();

    this.roomChannel.presence.get((_, members) => {
      const hostCandidates = members
        .filter((member) => {
          return member.data.type === ParticipantType.HOST;
        })
        .map((member) => member.clientId);

      // no proper host candidate, kick everyone
      if (this.shouldKickParticipantsOnHostLeave && hostCandidates.length === 0) {
        KICK_PARTICIPANTS_TIMEOUT = setTimeout(() => {
          this.kickAllParticipantsObserver.publish(true);
        }, KICK_PARTICIPANTS_TIME);
        return;
      }

      const nextHostCandidateParticipantid = hostCandidates[0];

      // if i find that I am the next host candidate, I set it to everyone
      if (nextHostCandidateParticipantid === this.localParticipantId) {
        this.setHost(nextHostCandidateParticipantid);
      }
    });
  }, 1000);

  /**
   * @function findSlotIndex
   * @description finds an available slot
   * @param {Ably.Types.PresenceMessage} myPresenceParam
   * @returns {void}
   */
  findSlotIndex = async (myPresenceParam: Ably.Types.PresenceMessage) => {
    let myPresence = myPresenceParam;
    const availableSlots = Array.apply(null, { length: 15 }).map(Number.call, Number);
    await this.roomChannel.presence.get((error, members) => {
      if (error) {
        return;
      }

      members.forEach((member) => {
        if (member.connectionId === myPresence.connectionId) {
          myPresence = member;
        }
        if (
          member.connectionId !== myPresence.connectionId &&
          member.data.hasOwnProperty('slotIndex')
        ) {
          availableSlots.splice(availableSlots.indexOf(member.data.slotIndex), 1);
        }
      });
    });
    if (availableSlots.length === 0) {
      console.error('no slots available!');
      return;
    }
    const slotChosen = availableSlots[0];
    this.myParticipant.data.slotIndex = slotChosen;

    await this.updateMyProperties({ slotIndex: availableSlots[0] });
    const timeToWait = Math.floor(Math.random() * 500);
    setTimeout(() => {
      this.confirmSlot(myPresence);
    }, timeToWait);
  };

  /**
   * @function confirmSlot
   * @description confirms that my slot is valid
   * @param {Ably.Types.PresenceMessage} participant
   * @returns {void}
   */
  confirmSlot = throttle(async (myPresenceParam: Ably.Types.PresenceMessage) => {
    const usedSlots: Ably.Types.PresenceMessage[] = [];
    let myPresence = myPresenceParam;
    await this.roomChannel.presence.get((err, members) => {
      members.forEach((member) => {
        if (member.connectionId === myPresence.connectionId) {
          myPresence = member;
        }
        if (
          member.connectionId !== myPresence.connectionId &&
          member.data.slotIndex !== undefined
        ) {
          usedSlots.push(member.data.slotIndex);
        }
      });
    });
    if (
      this.myParticipant.data.slotIndex === undefined ||
      usedSlots.includes(this.myParticipant.data.slotIndex)
    ) {
      this.findSlotIndex(myPresence);
    } else {
      // confirm slot and propagate
      const roomProperties = await this.fetchRoomProperties();
      this.updateRoomProperties(roomProperties);
    }
  }, 1000);

  /**
   * @function onStateChange
   * @description Translates connection state and channel state into realtime state
   * @returns {void}
   */
  onStateChange(): void {
    const roomChannelCurrentState = this.roomChannelState?.current;
    const connectionCurrentState = this.connectionState?.current;
    const isConnectedToAblyService = connectionCurrentState === 'connected';
    const isInitializing = ['initialized', 'connecting'].includes(connectionCurrentState);
    const isDisconnected =
      ['closed', 'closing'].includes(connectionCurrentState) ||
      ['detaching', 'detached'].includes(roomChannelCurrentState);

    const avaliableStates = {
      [RealtimeStateTypes.DISCONNECTED]: isDisconnected,
      [RealtimeStateTypes.INITIALIZING]: isInitializing,
      [RealtimeStateTypes.READY_TO_JOIN]: !roomChannelCurrentState && isConnectedToAblyService,
      [RealtimeStateTypes.CONNECTING]: roomChannelCurrentState === 'attaching',
      [RealtimeStateTypes.CONNECTED]:
        roomChannelCurrentState === 'attached' && isConnectedToAblyService,
      [RealtimeStateTypes.FAILED]:
        roomChannelCurrentState === 'failed' || connectionCurrentState === 'failed',
      [RealtimeStateTypes.RETRYING]:
        connectionCurrentState === 'suspended' || roomChannelCurrentState === 'suspended',
    };

    const currentState = Object.entries(avaliableStates).find(([key, value]) => value && key)[0];
    const newState = Number(currentState);

    if (newState === RealtimeStateTypes.READY_TO_JOIN) {
      this.currentReconnecAttempt = 0;
    }

    if (isConnectedToAblyService && this.isReconnecting) {
      this.onJoinRoom(this.getMyParticipant);
    }

    if (newState === RealtimeStateTypes.RETRYING || newState === RealtimeStateTypes.FAILED) {
      // rejoin room
      this.forceReconnect();
    }

    if (this.connectionState?.retryIn) {
      this.currentReconnecAttempt++;
      this.isReconnecting = true;
      this.publishStateUpdate(RealtimeStateTypes.RETRYING);
      this.reconnectObserver.publish(this.currentReconnecAttempt);
    }

    this.publishStateUpdate(newState);
  }

  /**
   * @function onAblyConnectionStateChange
   * @param {Ably.Types.ConnectionStateChange} state
   * @description gets ably's new connection state
   * @returns {void}
   */
  private onAblyConnectionStateChange(state: Ably.Types.ConnectionStateChange): void {
    this.connectionState = state;
    this.onStateChange();
  }

  /**
   * @function onAblyChannelStateChange
   * @param {Ably.Types.ChannelStateChange} state
   * @description gets ably's new channel state
   * @returns {void}
   */
  private onAblyChannelStateChange(state: Ably.Types.ChannelStateChange): void {
    this.roomChannelState = state;
    this.onStateChange();
  }

  /**
   * @function onJoinRoom
   * @param {Ably.Types.PresenceMessage} myPresence
   * @returns {void}
   */
  private async onJoinRoom(myPresence: Ably.Types.PresenceMessage): Promise<void> {
    this.isJoinedRoom = true;
    this.localRoomProperties = await this.fetchRoomProperties();
    if (this.enableSync) {
      await this.findSlotIndex(myPresence);
    }
    const isNewRoom = !this.localRoomProperties;
    if (isNewRoom) {
      await this.initializeRoomProperties(myPresence);
    } else {
      await this.updateParticipants();
      if (this.localRoomProperties?.hostClientId) {
        await this.updateHostInfo(this.localRoomProperties?.hostClientId);
      } else if (this.myParticipant.data.type === ParticipantType.HOST) {
        await this.setHost(this.myParticipant.data.participantId);
      }
      this.localRoomProperties = await this.fetchRoomProperties();
      this.updateLocalRoomState(this.localRoomProperties);
    }

    this.isReconnecting = false;
    this.joinRoomObserver.publish(this.roomChannel);

    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);

    logger.log('REALTIME', 'Joined realtime room');
  }

  /**
   * @function onParticipantJoin
   * @returns {void}
   * @param presence
   */
  private onParticipantJoin = async (presence: Ably.Types.PresenceMessage): Promise<void> => {
    this.participantJoinedObserver.publish(presence);
    await this.updateParticipants();
    this.updateMyProperties({}); // send a sync
  };

  /**
   * @function onParticipantLeave
   * @returns {void}
   * @param presence
   */
  private onParticipantLeave(presence: Ably.Types.PresenceMessage): void {
    if (this.state === RealtimeStateTypes.READY_TO_JOIN) {
      return;
    }

    const hostLeft = presence.data.participantId === this.hostParticipantId;

    this.participantLeaveObserver.publish(presence);

    if (hostLeft) {
      this.onHostLeft(presence);
    }

    this.updateParticipants();
  }

  /**
   * @function onHostLeft
   * @param {Ably.Types.PresenceMessage} participant
   * @returns {void}
   */
  private onHostLeft(participant: Ably.Types.PresenceMessage): void {
    this.updateRoomProperties({ hostClientId: null });
  }

  /**
   * @function syncBroadcast
   * @description sends the information of all participants to the audience
   * @returns {void}
   */
  private syncBroadcast = throttle(() => {
    const ABLY_KEY_64 = btoa(this.ablyKey);
    const url = `https://rest.ably.io/channels/${this.roomId.toLowerCase()}/presence`;
    fetch(url, {
      headers: { Authorization: `Basic ${ABLY_KEY_64}` },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((participants) => {
        this.roomBroadcastChannel.publish('update', participants);
      });
  }, 1000);

  /**
   * @function isMessageTooBig
   * @description calculates the size of a sync message and checks if its bigger than limit
   * @returns {boolean}
   */
  private isMessageTooBig = (msg: Object | string) => {
    const messageString = JSON.stringify(msg);
    const size = new TextEncoder().encode(messageString).length;
    if (size > MESSAGE_SIZE_LIMIT) {
      console.error('Message to long, the message limit size is 2kb.');
      return true;
    }
    return false;
  };
}
