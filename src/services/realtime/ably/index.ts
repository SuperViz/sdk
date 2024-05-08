import Ably from 'ably';
import throttle from 'lodash/throttle';

import { RealtimeEvent } from '../../../common/types/events.types';
import { MeetingColors } from '../../../common/types/meeting-colors.types';
import { Participant, ParticipantType } from '../../../common/types/participant.types';
import { RealtimeStateTypes } from '../../../common/types/realtime.types';
import { StoreType } from '../../../common/types/stores.types';
import { useStore } from '../../../common/utils/use-store';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';

import {
  AblyParticipant,
  AblyRealtime,
  AblyRealtimeData,
  AblyTokenCallBack,
  ParticipantDataInput,
} from './types';

const MESSAGE_SIZE_LIMIT = 60000;
const SYNC_PROPERTY_INTERVAL = 1000;

export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
  private client: Ably.Realtime;
  private participants: Record<string, AblyParticipant> = {};
  private participantsOn3d: Record<string, AblyParticipant> = {};
  private hostParticipantId: string = null;
  private myParticipant: AblyParticipant = null;
  private supervizChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private broadcastChannel: Ably.Types.RealtimeChannelCallbacks = null;
  private presence3DChannel: Ably.Types.RealtimeChannelCallbacks = null;

  private isReconnecting: boolean = false;

  public hasJoinedRoom: boolean = false;
  public isJoinedPresence3D: boolean = false;

  private currentReconnectAttempt: number = 0;
  private localRoomProperties?: AblyRealtimeData = null;
  private enableSync: boolean = true;
  private roomId: string;
  private readonly ablyKey: string;
  private apiKey: string;
  private readonly apiUrl: string;

  private state: RealtimeStateTypes = RealtimeStateTypes.DISCONNECTED;
  private supervizChannelState: Ably.Types.ChannelStateChange;
  private connectionState: Ably.Types.ConnectionStateChange;
  private useStore: typeof useStore = useStore.bind(this);

  constructor(apiUrl: string, ablyKey: string) {
    super();

    this.ablyKey = ablyKey;
    this.apiUrl = apiUrl;

    // bind ably callbacks
    this.onAblyPresenceUpdate = this.onAblyPresenceUpdate.bind(this);
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
    const { participants } = useStore(StoreType.GLOBAL);
    return Object.values(participants.value).some(
      (participant) => participant.type === ParticipantType.AUDIENCE,
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

    const { hasJoinedRoom } = this.useStore(StoreType.GLOBAL);
    hasJoinedRoom.subscribe();
  }

  /**
   * @function auth
   * @description authenticates to the realtime service
   * @param {Ably.Types.TokenParams} tokenParams
   * @param {AblyTokenCallBack} callback
   * @returns {void}
   */
  private auth(tokenParams: Ably.Types.TokenParams, callback: AblyTokenCallBack): void {
    const { isDomainWhitelisted } = useStore(StoreType.GLOBAL);
    if (!isDomainWhitelisted.value) return;

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
          isDomainWhitelisted.publish(false);
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
    // this.updateMyProperties(participantInfo);

    this.broadcastChannel = this.client.channels.get(`${this.roomId}:broadcast`);
    if (!this.enableSync) {
      this.broadcastChannel.subscribe('update', this.onReceiveBroadcastSync);
    }

    // join main room channel
    this.supervizChannel = this.client.channels.get(this.roomId);
    this.supervizChannel.on(this.onAblyChannelStateChange);

    // presence only in the main channel
    if (this.enableSync) {
      this.supervizChannel.presence.subscribe('update', this.onAblyPresenceUpdate);
    }

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
    this.supervizChannel?.presence.leave();
    this.client?.close();
    this.hasJoinedRoom = false;
    this.isReconnecting = false;
    this.roomId = null;
    this.participants = {};
    this.hostParticipantId = null;
    this.myParticipant = null;
    this.supervizChannel = null;
    this.client = null;

    const { hasJoinedRoom } = this.useStore(StoreType.GLOBAL);
    hasJoinedRoom.publish(false);
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
   * @function setParticipantData
   * @param {ParticipantDataInput} data
   * @returns {void}
   */
  public setParticipantData = (data: ParticipantDataInput): void => {
    this.myParticipant.data = Object.assign({}, this.myParticipant.data, data);

    this.updatePresence3D(this.myParticipant.data);
  };

  /**
   * @function onAblyPresenceUpdate
   * @description  callback that receives the event that
   * a participant's properties have been updated
   * @param {Ably.Types.PresenceMessage} presenceMessage
   * @returns {void}
   */
  private onAblyPresenceUpdate(presenceMessage: Ably.Types.PresenceMessage): void {
    if (!this.hasJoinedRoom) return;

    const { clientId } = presenceMessage;
    const participant: AblyParticipant = Object.assign({}, presenceMessage, {
      participantId: presenceMessage.clientId,
    });

    this.publishParticipantUpdate(participant);

    const { participants } = useStore(StoreType.GLOBAL);
    const { hostId } = useStore(StoreType.VIDEO);

    const shouldSync =
      participants.value[clientId] && hostId.value === this.localParticipantId && this.isBroadcast;

    if (shouldSync) {
      this.syncBroadcast();
    }
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
   * @function onStateChange
   * @description Translates connection state and channel state into realtime state
   * @returns {void}
   */
  private onStateChange(): void {
    const { isDomainWhitelisted } = useStore(StoreType.GLOBAL);
    if (!isDomainWhitelisted.value) return;

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
      this.onJoinRoom();
    }

    if (newState === RealtimeStateTypes.RETRYING || newState === RealtimeStateTypes.FAILED) {
      // rejoin room
      this.forceReconnect();
    }

    if (this.connectionState?.retryIn) {
      this.currentReconnectAttempt++;
      this.isReconnecting = true;
      this.publishStateUpdate(RealtimeStateTypes.RETRYING);
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
  private async onJoinRoom(): Promise<void> {
    this.hasJoinedRoom = true;
    this.isReconnecting = false;

    this.logger.log('REALTIME', 'Joined realtime room');
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

  /** Presence 3D */

  public enterPresence3DChannel(participant: Participant) {
    if (!this.hasJoinedRoom) {
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
    const { hasJoined3D } = useStore(StoreType.PRESENCE_3D);

    if (participant.clientId === this.myParticipant.clientId) {
      hasJoined3D.publish(true);
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
