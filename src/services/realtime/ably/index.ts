import Ably from 'ably';
import throttle from 'lodash/throttle';

import { RealtimeEvent, TranscriptState } from '../../../common/types/events.types';
import { Nullable } from '../../../common/types/global.types';
import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { Participant, ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { Annotation } from '../../../components/comments/types';
import { ParticipantMouse } from '../../../components/presence-mouse/types';
import { ComponentNames } from '../../../components/types';
import { DrawingData } from '../../video-conference-manager/types';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';

import {
  AblyParticipant,
  AblyRealtime,
  AblyRealtimeData,
  AblyTokenCallBack,
  ParticipantDataInput,
  RealtimeMessage,
} from './types';

const MESSAGE_SIZE_LIMIT = 60000;
const CLIENT_MESSAGE_SIZE_LIMIT = 10000;
const SYNC_PROPERTY_INTERVAL = 1000;
const SYNC_MOUSE_INTERVAL = 100;

export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  private client: Ably.Realtime;
  private participants: Record<string, AblyParticipant> = {};
  private participantsWIO: Record<string, AblyParticipant> = {};
  private participantsMouse: Record<string, ParticipantMouse> = {};
  private participantsOn3d: Record<string, AblyParticipant> = {};
  private hostParticipantId: string = null;
  private myParticipant: AblyParticipant = null;
  private commentsChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private supervizChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private clientSyncChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private clientRoomStateChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private broadcastChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private presenceWIOChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private presence3DChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private clientRoomState: Record<string, RealtimeMessage> = {};
  private clientSyncPropertiesQueue: Record<string, RealtimeMessage[]> = {};

  private isReconnecting: boolean = false;

  public isJoinedRoom: boolean = false;
  public isJoinedPresence3D: boolean = false;

  private currentReconnectAttempt: number = 0;
  private localRoomProperties?: AblyRealtimeData = null;
  private enableSync: boolean = true;
  private isSyncFrozen: boolean = false;
  private roomId: string;
  private readonly ablyKey: string;
  private apiKey: string;
  private readonly apiUrl: string;
  private left: boolean = false;
  private domainWhitelisted: boolean = true;

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
    this.onAblyChannelStateChange = this.onAblyChannelStateChange.bind(this);
    this.onAblyConnectionStateChange = this.onAblyConnectionStateChange.bind(this);
    this.onReceiveBroadcastSync = this.onReceiveBroadcastSync.bind(this);
    this.getParticipantSlot = this.getParticipantSlot.bind(this);
    this.auth = this.auth.bind(this);
  }

  public get roomProperties() {
    return this.localRoomProperties;
  }

  public get hostClientId() {
    return this.roomProperties?.hostClientId;
  }

  public get isLocalParticipantHost(): boolean {
    return this.hostClientId === this.localParticipantId;
  }

  public get isDomainWhitelisted(): boolean {
    return this.domainWhitelisted;
  }

  public get getParticipants(): Record<string, AblyParticipant> {
    return this.participants;
  }

  public get participant() {
    return this.myParticipant;
  }

  public get localParticipantId(): string | null {
    return this.myParticipant.data?.participantId ?? null;
  }

  public get isBroadcast(): boolean {
    return Object.values(this.participants).some(
      (participant) => participant.data.type === ParticipantType.AUDIENCE,
    );
  }

  public start({ participant, roomId, apiKey }: StartRealtimeType): void {
    this.myParticipant = {
      data: {
        ...participant,
        participantId: participant.id,
      },
      timestamp: null,
      action: null,
      clientId: participant.id,
      connectionId: null,
      encoding: null,
      id: null,
      extras: null,
    };
    this.enableSync = participant.type !== ParticipantType.AUDIENCE;
    this.roomId = `superviz:${roomId.toLowerCase()}-${apiKey}`;

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
    if (!this.domainWhitelisted) return;

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

        if (error?.message?.includes("this domain don't have permission")) {
          this.domainWhitelisted = false;
        }

        callback(error, tokenRequest);
      },
    );
  }

  /**
   * @function join
   * @description join realtime room
   * @returns {void}
   * @param joinProperties
   */
  public join(participant?: Participant): void {
    const participantInfo = participant
      ? Object.assign({}, participant, { participantId: participant.id })
      : this.myParticipant.data;

    this.logger.log('REALTIME', `Entering room. Room ID: ${this.roomId}`);
    this.updateMyProperties(participantInfo);

    // join custom sync channel
    this.clientSyncChannel = this.client.channels.get(`${this.roomId}:client-sync`);

    this.clientRoomStateChannel = this.client.channels.get(`${this.roomId}:client-state`);

    this.broadcastChannel = this.client.channels.get(`${this.roomId}:broadcast`);
    if (!this.enableSync) {
      this.broadcastChannel.subscribe('update', this.onReceiveBroadcastSync);
    }

    // join main room channel
    this.supervizChannel = this.client.channels.get(this.roomId);
    this.supervizChannel.on(this.onAblyChannelStateChange);
    this.supervizChannel.subscribe('update', this.onAblyRoomUpdate);

    // join the comments channel
    this.commentsChannel = this.client.channels.get(`${this.roomId}:comments`);
    this.commentsChannel.subscribe('update', this.onCommentsChannelUpdate);

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
    this.logger.log('REALTIME', 'Disconnecting from ably servers');
    this.supervizChannel.presence.leave();
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

    const participant = this.participants[kickParticipantId];
    this.updateRoomProperties({
      kickParticipant: participant,
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
   * @function setDrawing
   * @param drawing {DrawingData}  -  drawing payload*
   * @description synchronizes the drawing in the room
   * @returns {void}
   */
  public setDrawing(drawing: DrawingData): void {
    const roomProperties = this.localRoomProperties;
    this.updateRoomProperties(Object.assign({}, roomProperties, { drawing }));
  }

  /**
   * @function setTranscript
   * @param state {TranscriptState}
   * @description synchronizes the transcript state in the room
   * @returns {void}
   */
  public setTranscript(state: TranscriptState): void {
    const roomProperties = this.localRoomProperties;
    this.updateRoomProperties(Object.assign({}, roomProperties, { transcript: state }));
  }

  /**
   * @function setSyncProperty
   * @param {string} name
   * @param {unknown} property
   * @description add/change and sync a property in the room
   * @returns {void}
   */
  public setSyncProperty<T>(name: string, property: T): void {
    // closure to create the event
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
      this.logger.log('REALTIME', 'Message too big, not sending');
      this.throw('Message too long, the message limit size is 10kb.');
    }

    this.logger.log('adding to queue', name, property);

    if (!this.clientSyncPropertiesQueue[name]) {
      this.clientSyncPropertiesQueue[name] = [];
    }

    this.clientSyncPropertiesQueue[name].push(createEvent(name, property));
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
    return MeetingColors['gray'];
  }

  /**
   * @function freezeSync
   * @param {boolean} isFrozen
   * @description Detaches and unsubscribes from channels to freeze synchronization with the room.
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

    this.join();
  };

  /**
   * @function setParticipantData
   * @param {ParticipantDataInput} data
   * @returns {void}
   */
  public setParticipantData = (data: ParticipantDataInput): void => {
    this.myParticipant.data = Object.assign({}, this.myParticipant.data, data);

    this.updateMyProperties(this.myParticipant.data);
    this.updatePresence3D(this.myParticipant.data);
  };

  /**
   * @function onAblyPresenceEnter
   * @description callback that receives the event that a participant has entered the room
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceEnter(presenceMessage: Ably.Types.PresenceMessage): void {
    if (presenceMessage.clientId === this.myParticipant.data.participantId && this.isJoinedRoom) {
      this.sameAccountObserver.publish(true);
      return;
    }

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
    this.logger.log('REALTIME', 'Room update received', message.data);

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

    this.updateParticipants();

    if (data.kickParticipant && data.kickParticipant.clientId === this.myParticipant.clientId) {
      this.updateRoomProperties({ kickParticipant: null });

      this.kickParticipantObserver.publish(this.myParticipant.clientId);
    }
  };

  /**
   * @function updateMyProperties
   * @param {ParticipantInfo} participantInfo
   * @description updates local participant properties
   * @returns {void}
   */
  public updateMyProperties = (newProperties: ParticipantInfo = {}): void => {
    const properties = newProperties;

    if (this.isMessageTooBig(properties) || this.left || !this.enableSync || this.isSyncFrozen) {
      return;
    }

    if (properties.avatar === undefined) {
      delete properties.avatar;
    }

    this.myParticipant.data = {
      ...this.myParticipant.data,
      ...properties,
    };

    if (!this.isJoinedRoom) return;

    this.supervizChannel.presence.update(this.myParticipant.data);
    this.logger.log('REALTIME', 'updating my properties', this.myParticipant.data);
  };

  /**
   * @function updateRoomProperties
   * @param {AblyRealtimeData} properties
   * @description updates room properties
   * @returns {void}
   */
  private updateRoomProperties = (properties: AblyRealtimeData): void => {
    if (this.isMessageTooBig(properties) || this.isSyncFrozen || this.left) return;

    const newProperties = {
      ...this.localRoomProperties,
      ...properties,
    };

    this.supervizChannel.publish('update', newProperties);
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
  private updateParticipants = (): void => {
    const participants = {};

    this.supervizChannel.presence.get((_, members) => {
      members.forEach((member) => {
        participants[member.clientId] = { ...member };
      });

      this.participants = participants;
      this.participantsObserver.publish(this.participants);
    });
  };

  /**
   * @function initializeRoomProperties
   * @description
        Initializes the room properties,
        including setting the host client ID and updating the participant list.
   * @returns {Promise<void>}
   */
  private initializeRoomProperties = (): void => {
    const roomProperties: AblyRealtimeData = {
      isGridModeEnable: false,
      hostClientId: null,
      followParticipantId: null,
      gather: false,
      drawing: null,
    };

    this.updateParticipants();
    this.updateRoomProperties(roomProperties);
  };

  /**
   * @function forceReconnect
   * @description Forces a reconnection to the Ably server if the participant loses connection.
   * If the client is already connected to the Ably server, it rejoins the room.
   * @throws {Error} if roomId is not set
   * @returns {void}
   */
  private forceReconnect(): void {
    this.logger.log(
      'REALTIME',
      `RECONNECT: Starting force realtime reconnect | Current attempt: ${this.currentReconnectAttempt}`,
    );

    if (!this.roomId) {
      this.throw('Tried to reconnect without roomId set');
    }

    if (this.state === RealtimeStateTypes.READY_TO_JOIN) {
      this.logger.log('REALTIME', 'Rejoining room since client already connected to ably servers.');
      this.join();
      return;
    }

    this.logger.log(
      'REALTIME',
      'RECONNECT: Restarting ably server since participant lost connection.',
    );

    this.buildClient();

    this.updateMyProperties(this.myParticipant.data);
  }

  /**
   * @function throw
   * @param {string} message
   * @returns {void}
   */
  private throw(message: string): void {
    this.logger.log(message);
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

    this.logger.log(
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

    if (!this.domainWhitelisted) return;

    if (newState === RealtimeStateTypes.READY_TO_JOIN) {
      this.currentReconnectAttempt = 0;
    }

    if (isConnectedToAblyService && this.isReconnecting) {
      this.onJoinRoom(this.participant);
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
  private async onJoinRoom(
    myPresence: AblyParticipant | Ably.Types.PresenceMessage,
  ): Promise<void> {
    this.isJoinedRoom = true;
    this.localRoomProperties = await this.fetchRoomProperties();
    this.myParticipant = myPresence;

    if (!this.localRoomProperties) {
      this.initializeRoomProperties();
    } else {
      this.updateParticipants();

      this.localRoomProperties = await this.fetchRoomProperties();
      this.updateLocalRoomState(this.localRoomProperties);
    }

    this.isReconnecting = false;
    this.publishStateUpdate(RealtimeStateTypes.CONNECTED);
    this.participantJoinedObserver.publish(myPresence);
    this.logger.log('REALTIME', 'Joined realtime room');
  }

  /**
   * @function onParticipantJoin
   * @returns {void}
   * @param presence
   */
  private onParticipantJoin = (presence: Ably.Types.PresenceMessage): void => {
    this.updateParticipants();
    this.participantJoinedObserver.publish(presence);
    this.updateMyProperties(); // send a sync
  };

  /**
   * @function onParticipantLeave
   * @returns {void}
   * @param presence
   */
  private onParticipantLeave(presence: Ably.Types.PresenceMessage): void {
    if (this.state === RealtimeStateTypes.READY_TO_JOIN) return;

    const followedLeft =
      presence.data.participantId === this.localRoomProperties.followParticipantId;

    if (followedLeft) {
      this.setFollowParticipant();
    }

    this.participantLeaveObserver.publish(presence);

    this.updateParticipants();
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
   * @function spliceArrayBySize
   * @description splits an array into smaller arrays by size
   * @param {Array<unknown>} array
   * @param {number} maxSizeKB
   */
  private spliceArrayBySize(array: Array<unknown>, maxSizeKB: number = MESSAGE_SIZE_LIMIT) {
    const sizeOfElementInKB = (element: unknown) => {
      const elementString = JSON.stringify(element);
      const size = new TextEncoder().encode(elementString).length;

      return size;
    };

    let currentSizeKB = 0;
    const splicedArrays = [];
    let currentSlice = [];

    for (let i = 0; i < array.length; i++) {
      const elementSizeKB = sizeOfElementInKB(array[i]);

      if (currentSizeKB + elementSizeKB <= maxSizeKB) {
        currentSlice.push(array[i]);
        currentSizeKB += elementSizeKB;
      } else {
        splicedArrays.push(currentSlice);
        currentSlice = [array[i]];
        currentSizeKB = elementSizeKB;
      }
    }

    if (currentSlice.length > 0) {
      splicedArrays.push(currentSlice);
    }

    return {
      data: splicedArrays[0],
      lengthToBeSplitted: splicedArrays[0].length,
    };
  }

  /**
   * @function isMessageTooBig
   * @description calculates the size of a sync message and checks if it's bigger than limit
   * @param {unknown} msg
   * @param {number} limit
   * @returns {boolean}
   */
  private isMessageTooBig = (msg: unknown, limit: number = MESSAGE_SIZE_LIMIT): boolean => {
    const messageString = JSON.stringify(msg);
    const size = new TextEncoder().encode(messageString).length;

    if (size > limit) {
      this.logger.log('Message too long, the message limit size is 60kb.');
      return true;
    }
    return false;
  };

  /** Comments */
  private onCommentsChannelUpdate = (message: Ably.Types.Message): void => {
    this.logger.log('REALTIME', 'Comments channel update', message);
    this.commentsObserver.publish(message);
  };

  public updateComments = (annotations: Annotation[]) => {
    this.commentsChannel.publish('update', annotations);
  };

  /** Who Is Online */

  public enterWIOChannel = (participant: Participant): void => {
    if (!this.presenceWIOChannel) {
      this.presenceWIOChannel = this.client.channels.get(`${this.roomId.toLowerCase()}-wio`);
    }

    this.presenceWIOChannel.attach();
    this.presenceWIOChannel.subscribe('private', this.onSetPrivate);
    this.presenceWIOChannel.subscribe('follow', this.onSetFollow);
    this.presenceWIOChannel.subscribe('gather', this.onSetGather);
  };

  public leaveWIOChannel = (): void => {
    if (!this.presenceWIOChannel) return;

    this.presenceWIOChannel.unsubscribe();
    this.presenceWIOChannel.detach();
    this.presenceWIOChannel = null;
  };

  private onSetPrivate = ({ data: { id, isPrivate } }): void => {
    this.participants[id].data.isPrivate = isPrivate;
    this.privateModeWIOObserver.publish(this.participants);
  };

  private onSetFollow = (data: Participant): void => {
    this.followWIOObserver.publish(data);
  };

  private onSetGather = ({ data }: Ably.Types.Message): void => {
    this.gatherWIOObserver.publish({ detail: { id: data.id } });
  };

  public setPrivateWIOParticipant = (id: string, isPrivate: boolean): void => {
    this.presenceWIOChannel.publish('private', { id, isPrivate });
  };

  public setFollowWIOParticipant = (data): void => {
    this.presenceWIOChannel.publish('follow', { ...data });
  };

  public setGatherWIOParticipant = (data): void => {
    this.presenceWIOChannel.publish('gather', { ...data });
  };

  /** Presence 3D */

  public enterPresence3DChannel(participant: Participant) {
    if (!this.isJoinedRoom) {
      this.logger.log(
        'REALTIME',
        'Cannot enter presence 3D channel because the participant is not in the room',
      );

      setTimeout(() => {
        this.enterPresence3DChannel(participant);
      }, 1000);

      return;
    }

    if (!this.presence3DChannel) {
      this.presence3DChannel = this.client.channels.get(`${this.roomId.toLowerCase()}-presence-3d`);
      this.presence3DChannel.attach();

      this.presence3DChannel.presence.subscribe('enter', this.onPresence3DChannelEnter);
      this.presence3DChannel.presence.subscribe('leave', this.onPresence3DChannelLeave);
      this.presence3DChannel.presence.subscribe('update', this.publish3DUpdate);
    }

    this.presence3DChannel.presence.enter(participant);
  }

  public leavePresence3DChannel = (): void => {
    if (!this.presence3DChannel) return;

    this.presence3DChannel.presence.leave();
    this.presence3DChannel = null;
  };

  public updatePresence3D = throttle((data: ParticipantInfo): void => {
    if (!data || !data.id) return;

    const participant = Object.assign({}, this.participantsOn3d[data.id]?.data ?? {}, data);

    this.participantsOn3d[data.id] = {
      ...this.participants[participant.id],
      data: {
        ...participant,
        ...this.participants[participant.id]?.data,
      },
    };

    if (!this.presence3DChannel) return;

    this.presence3DChannel.presence.update(participant);
  }, SYNC_PROPERTY_INTERVAL);

  private onPresence3DChannelEnter = (participant: Ably.Types.PresenceMessage): void => {
    if (participant.clientId === this.myParticipant.clientId) {
      this.isJoinedPresence3D = true;
    }

    const slot = this.getParticipantSlot(participant.clientId);

    this.presence3dJoinedObserver.publish({
      ...participant,
      data: {
        ...participant.data,
        ...this.participants[participant.clientId]?.data,
        slotIndex: slot,
        color: this.getSlotColor(slot).color,
      },
    });
  };

  private onPresence3DChannelLeave = (participant: Ably.Types.PresenceMessage): void => {
    delete this.participantsOn3d[participant.clientId];
    this.presence3dLeaveObserver.publish(participant);
  };

  /**
   * @function publish3DUpdate
   * @param {AblyParticipant} participant
   * @description publish a participant's changes to observer
   * @returns {void}
   */
  private publish3DUpdate = (participant: Ably.Types.PresenceMessage): void => {
    const slot = this.getParticipantSlot(participant.clientId);

    const participantToPublish = {
      ...participant,
      data: {
        ...participant.data,
        ...this.participants[participant.clientId]?.data,
        slotIndex: slot,
        color: this.getSlotColor(slot).color,
      },
    };

    this.participantsOn3d[participant.clientId] = participantToPublish;

    if (this.participants3DObservers[participant.clientId]) {
      this.participants3DObservers[participant.clientId].publish(participantToPublish);
    }

    this.presence3dObserver.publish(this.participantsOn3d);
  };
}
