import Ably from 'ably';
import throttle from 'lodash/throttle';

import { RealtimeEvent } from '../../../common/types/events.types';
import { ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { logger } from '../../../common/utils';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';

import {
  AblyParticipant,
  AblyParticipants,
  AblyRealtime,
  AblyRealtimeData,
  AblyTokenCallBack,
  ParticipantDataInput,
  RealtimeMessage,
} from './types';

const KICK_PARTICIPANTS_TIME = 1000 * 60;
const MESSAGE_SIZE_LIMIT = 60000;
const CLIENT_MESSAGE_SIZE_LIMIT = 10000;
const SYNC_PROPERTY_INTERVAL = 1000;

let KICK_PARTICIPANTS_TIMEOUT = null;
export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  private client: Ably.Realtime;
  private participants: AblyParticipants = {};
  private hostParticipantId: string = null;
  private myParticipant: AblyParticipant = null;

  private localParticipantId: string = null;
  private isBroadcast: boolean = false;

  private supervizChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private clientSyncChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private clientRoomStateChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private broadcastChannel: Ably.Types.RealtimeChannelCallbacks = null;

  private clientRoomState: Record<string, RealtimeMessage> = {};
  private clientSyncPropertiesQueue: Record<string, RealtimeMessage[]> = {};
  private clientSyncPropertiesTimeOut: ReturnType<typeof setTimeout> = null;

  private isReconnecting: boolean = false;
  private isJoinedRoom: boolean = false;
  private currentReconnectAttempt: number = 0;
  private localRoomProperties?: AblyRealtimeData = null;
  private enableSync: boolean = true;
  private isSyncFrozen: boolean = false;
  private roomId: string;
  private shouldKickParticipantsOnHostLeave: boolean;
  private readonly ablyKey: string;
  private apiKey: string;
  private readonly apiUrl: string;
  private left: boolean = false;

  private state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  private supervizChannelState: Ably.Types.ChannelStateChange;
  private connectionState: Ably.Types.ConnectionStateChange;

  constructor(apiUrl: string, ablyKey: string) {
    super();

    this.ablyKey = ablyKey;
    this.apiUrl = apiUrl;

    // bind ably callbacks
    this.onAblyPresenceEnter = this.onAblyPresenceEnter.bind(this);
    this.onAblyPresenceUpdate = this.onAblyPresenceUpdate.bind(this);
    this.onAblyPresenceLeave = this.onAblyPresenceLeave.bind(this);
    this.onAblyRoomUpdate = this.onAblyRoomUpdate.bind(this);
    this.onClientSyncChannelUpdate = this.onClientSyncChannelUpdate.bind(this);
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

  public get isLocalParticipantHost(): boolean {
    return this.hostClientId === this.localParticipantId;
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
        authUrl: `${this.apiUrl}/realtime/auth`,
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
    this.clientSyncChannel = this.client.channels.get(`${this.roomId}:client-sync`);
    this.clientSyncChannel.subscribe(this.onClientSyncChannelUpdate);

    this.clientRoomStateChannel = this.client.channels.get(`${this.roomId}:client-state`);

    this.broadcastChannel = this.client.channels.get(`${this.roomId}:broadcast`);
    if (!this.enableSync) {
      this.broadcastChannel.subscribe('update', this.onReceiveBroadcastSync);
    }

    // join main room channel
    this.supervizChannel = this.client.channels.get(this.roomId);
    this.supervizChannel.on(this.onAblyChannelStateChange);
    this.supervizChannel.subscribe('update', this.onAblyRoomUpdate);

    // presence only in the main channel
    this.supervizChannel.presence.subscribe('enter', this.onAblyPresenceEnter);
    if (this.enableSync) {
      this.supervizChannel.presence.subscribe('update', this.onAblyPresenceUpdate);
    }
    this.supervizChannel.presence.subscribe('leave', this.onAblyPresenceLeave);

    // enter
    this.supervizChannel.presence.enter(this.myParticipant.data);
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
    this.supervizChannel = null;
    this.clientSyncChannel = null;
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
  public setSyncProperty<T>(name: string, property: T): void {
    const queue = this.clientSyncPropertiesQueue[name] ?? [];

    // clousure to create the event
    const createEvent = (name: string, data: T): RealtimeMessage => {
      return {
        name,
        data,
        participantId: this.myParticipant.data.participantId,
        timestamp: Date.now(),
      };
    };

    // if the property is too big, don't add to the queue
    if (this.isMessageTooBig(createEvent(name, property), CLIENT_MESSAGE_SIZE_LIMIT)) {
      logger.log('REALTIME', 'Message too big, not sending');
      this.throw('Message too long, the message limit size is 10kb.');
    }

    // if the queue is too big, publish before add more events
    if (this.isMessageTooBig(queue)) {
      logger.log('REALTIME', 'Message queue too big, publishing');
      this.publishClientSyncProperties();
    }

    logger.log('adding to queue', name, property);

    if (!this.clientSyncPropertiesQueue[name]) {
      this.clientSyncPropertiesQueue[name] = [];
    }

    this.clientSyncPropertiesQueue[name].push(createEvent(name, property));

    if (!this.clientSyncPropertiesTimeOut) {
      this.clientSyncPropertiesTimeOut = setTimeout(() => {
        this.publishClientSyncProperties();
      }, 1000);
    }
  }

  /**
   * @function setFollowParticipant
   * @param {string} participantId
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setFollowParticipant(participantId?: string): void {
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
    }
    return 16; // GRAY COLOR
  }

  /**
   * @function freezeSync
   * @param {boolean} isFrozen
   * @returns {void}
   */
  public freezeSync = (isFrozen: boolean): void => {
    this.isSyncFrozen = isFrozen;

    if (isFrozen) {
      this.supervizChannel.detach();
      this.clientSyncChannel.detach();
      this.broadcastChannel?.detach();
      this.supervizChannel.unsubscribe();
      this.clientSyncChannel.unsubscribe();
      this.broadcastChannel?.unsubscribe();
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
   * @function publishClientSyncProperties
   * @description publish client sync props
   * @returns {void}
   */
  private publishClientSyncProperties = (): void => {
    if (this.state !== RealtimeStateTypes.CONNECTED) return;

    Object.keys(this.clientSyncPropertiesQueue).forEach((name) => {
      const eventQueue = this.clientSyncPropertiesQueue[name];
      this.clientSyncPropertiesQueue[name] = [];

      if (!eventQueue.length) return;

      this.clientSyncChannel.publish(name, eventQueue, (error: Ably.Types.ErrorInfo) => {
        if (error) {
          logger.log(`publish failed with error ${error}`);
          return;
        }

        logger.log('events published', name, eventQueue);
      });
    });

    clearTimeout(this.clientSyncPropertiesTimeOut);
    this.clientSyncPropertiesTimeOut = null;
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
   * @function onClientSyncChannelUpdate
   * @description callback that receives the update event from ably's channel
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  private onClientSyncChannelUpdate(message: Ably.Types.Message): void {
    const { name, data } = message;
    const property = {};

    property[name] = data;
    this.syncPropertiesObserver.publish(property);

    if (this.isLocalParticipantHost) this.saveClientRoomState(name, data);
  }

  /**
   * @function saveClientRoomState
   * @description
      Saves the latest state of the room for the client
      and publishes it to the client room state channel.
   * @param {string} name - The name of the room state to save.
   * @param {RealtimeMessage[]} data - The data to save as the latest state of the room.
   * @returns {void}
   */
  private saveClientRoomState = (name: string, data: RealtimeMessage[]): void => {
    this.clientRoomState[name] = data[data.length - 1];
    this.clientRoomStateChannel.publish('update', this.clientRoomState);

    logger.log('REALTIME', 'setting new room state backup');
  };

  /**
   * @function onReceiveBroadcastSync
   * @description receive the info of all participants from the host
   * @param {Ably.Types.Message} message
   * @returns {void}
   */
  private onReceiveBroadcastSync(message: Ably.Types.Message): void {
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
  private updateLocalRoomState = async (data: AblyRealtimeData): Promise<void> => {
    this.localRoomProperties = Object.assign({}, this.localRoomProperties, data);

    this.roomInfoUpdatedObserver.publish(this.localRoomProperties);

    if (!data.hostClientId) {
      this.hostPassingHandle();
    } else if (data?.hostClientId !== this.hostParticipantId) {
      this.updateHostInfo(data.hostClientId);
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

    if (this.isMessageTooBig(newProperties) || this.left || !this.enableSync || this.isSyncFrozen) {
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

    return this.supervizChannel.presence.update(this.myParticipant.data);
  }, SYNC_PROPERTY_INTERVAL);

  /**
   * @function updateRoomProperties
   * @param {AblyRealtimeData} properties
   * @description updates room properties
   * @returns {void}
   */
  private updateRoomProperties = async (properties: AblyRealtimeData): Promise<void> => {
    if (this.isMessageTooBig(properties) || this.isSyncFrozen || this.left) return;

    const newProperties = {
      ...this.localRoomProperties,
      ...properties,
    };

    await this.supervizChannel.publish('update', newProperties);
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

    await this.supervizChannel.presence.get((_, members) => {
      members.forEach((member) => {
        participants[member.clientId] = { ...member };
      });
      this.participants = participants;
      this.checkBroadcast();
      this.participantsObserver.publish(this.participants);
    });
  };

  /**
   * @function checkBroadcast
   * @description check if it has any audience in participant list
   * and change the isBroadcast parameter based on it
   * @returns {void}
   */
  private checkBroadcast() {
    this.isBroadcast = Object.values(this.participants).some(
      (participant) => participant.data.type === ParticipantType.AUDIENCE,
    );
  }

  /**
   * @function updateHostInfo
   * @param {string} newHostId
   * @description update host info
   * @returns {void}
   */
  private updateHostInfo = async (newHostId: string): Promise<void> => {
    const currentConnectedClients: string[] = [];
    await this.supervizChannel.presence.get((err, members) => {
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

    const oldHostParticipantId = this.hostParticipantId;
    this.hostParticipantId = newHostId;

    this.hostObserver.publish({
      oldHostParticipantId,
      newHostParticipantId: this.hostParticipantId,
    });

    logger.log(
      'REALTIME',
      `Master participant has been changed. New Master Participant: ${this.hostParticipantId}`,
    );
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
      `RECONNECT: Starting force realtime reconnect | Current attempt: ${this.currentReconnectAttempt}`,
    );

    if (!this.roomId) {
      this.throw('Tried to reconnect without roomId set');
    }

    if (this.state === RealtimeStateTypes.READY_TO_JOIN) {
      logger.log('REALTIME', 'Rejoining room since client already connected to ably servers.');
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
      this.supervizChannel.history((error, resultPage) => {
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
   * @function fetchSyncClientProperty
   * @description
   * @param {string} eventName - name event to be fetched
   * @returns {ClientRealtimeData}
   */
  public async fetchSyncClientProperty(
    eventName?: string,
  ): Promise<RealtimeMessage | Record<string, RealtimeMessage>> {
    try {
      const clienthistory: Record<string, RealtimeMessage> = await new Promise(
        (resolve, reject) => {
          this.clientRoomStateChannel.history((error, resultPage) => {
            if (error) reject(error);

            const lastMessage = resultPage.items[0]?.data;
            if (lastMessage) {
              resolve(lastMessage);
            } else {
              resolve(null);
            }
          });
        },
      );

      if (eventName && !clienthistory[eventName]) {
        throw new Error(`Event ${eventName} not found in the history`);
      }

      if (eventName) {
        return clienthistory[eventName];
      }

      return clienthistory;
    } catch (error) {
      logger.log('REALTIME', 'Error in fetch client realtime data', error.message);
    }
  }

  /**
   * @function hostPassingHandle
   * @description
     determines when guest participants should wait for the host before entering the meeting room
   * @returns {void}
   */
  private hostPassingHandle = throttle(async (): Promise<void> => {
    this.localRoomProperties = await this.fetchRoomProperties();

    this.supervizChannel.presence.get((_, members) => {
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

      const nextHostCandidateParticipantId = hostCandidates[0];

      // if I find that I am the next host candidate, I set it to everyone
      if (nextHostCandidateParticipantId === this.localParticipantId) {
        this.setHost(nextHostCandidateParticipantId);
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
    await this.supervizChannel.presence.get((error, members) => {
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
  private confirmSlot = throttle(async (myPresenceParam: Ably.Types.PresenceMessage) => {
    const usedSlots: Ably.Types.PresenceMessage[] = [];
    let myPresence = myPresenceParam;
    await this.supervizChannel.presence.get((err, members) => {
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
  private onStateChange(): void {
    const roomChannelCurrentState = this.supervizChannelState?.current;
    const connectionCurrentState = this.connectionState?.current;
    const isConnectedToAblyService = connectionCurrentState === 'connected';
    const isInitializing = ['initialized', 'connecting'].includes(connectionCurrentState);
    const isDisconnected =
      ['closed', 'closing'].includes(connectionCurrentState) ||
      ['detaching', 'detached'].includes(roomChannelCurrentState);

    const availableStates = {
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

    const currentState = Object.entries(availableStates).find(([key, value]) => value && key)[0];
    const newState = Number(currentState);

    if (newState === RealtimeStateTypes.READY_TO_JOIN) {
      this.currentReconnectAttempt = 0;
    }

    if (isConnectedToAblyService && this.isReconnecting) {
      this.onJoinRoom(this.getMyParticipant);
    }

    if (newState === RealtimeStateTypes.RETRYING || newState === RealtimeStateTypes.FAILED) {
      // rejoin room
      this.forceReconnect();
    }

    if (this.connectionState?.retryIn) {
      this.currentReconnectAttempt++;
      this.isReconnecting = true;
      this.publishStateUpdate(RealtimeStateTypes.RETRYING);
      this.reconnectObserver.publish(this.currentReconnectAttempt);
      return;
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
    this.supervizChannelState = state;
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

    if (this.enableSync) await this.findSlotIndex(myPresence);

    if (!this.localRoomProperties) {
      await this.initializeRoomProperties(myPresence);
    } else {
      await Promise.all([
        this.updateParticipants(),
        this.localRoomProperties?.hostClientId &&
          this.updateHostInfo(this.localRoomProperties.hostClientId),
      ]);
      this.localRoomProperties = await this.fetchRoomProperties();
      this.updateLocalRoomState(this.localRoomProperties);
    }

    this.isReconnecting = false;
    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);
    this.participantJoinedObserver.publish(myPresence);
    logger.log('REALTIME', 'Joined realtime room');
  }

  /**
   * @function onParticipantJoin
   * @returns {void}
   * @param presence
   */
  private onParticipantJoin = async (presence: Ably.Types.PresenceMessage): Promise<void> => {
    await this.updateParticipants();
    this.participantJoinedObserver.publish(presence);
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
    const followedLeft =
      presence.data.participantId === this.localRoomProperties.followParticipantId;

    if (followedLeft) {
      this.setFollowParticipant();
    }

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
        this.broadcastChannel.publish('update', participants);
      });
  }, 1000);

  /**
   * @function isMessageTooBig
   * @description calculates the size of a sync message and checks if it's bigger than limit
   * @param {unknown} msg
   * @returns {boolean}
   */
  private isMessageTooBig = (msg: unknown, limit: number = MESSAGE_SIZE_LIMIT): boolean => {
    const messageString = JSON.stringify(msg);
    const size = new TextEncoder().encode(messageString).length;

    if (size > limit) {
      logger.log('Message too long, the message limit size is 60kb.');
      return true;
    }
    return false;
  };
}
