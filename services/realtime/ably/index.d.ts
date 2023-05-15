/// <reference types="lodash" />
import Ably from 'ably';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';
import { AblyParticipant, AblyParticipants, AblyRealtime, AblyRealtimeData, ParticipantDataInput } from './types';
export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
    private client;
    private participants;
    private hostParticipantId;
    private myParticipant;
    private localParticipantId;
    private isBroadcast;
    private supervizChannel;
    private clientSyncChannel;
    private broadcastChannel;
    private clientSyncPropertiesQueue;
    private clientSyncPropertiesTimeOut;
    private isReconnecting;
    private isJoinedRoom;
    private currentReconnectAttempt;
    private localRoomProperties?;
    private enableSync;
    private isSyncFrozen;
    private roomId;
    private shouldKickParticipantsOnHostLeave;
    private readonly ablyKey;
    private apiKey;
    private readonly apiUrl;
    private left;
    private state;
    private supervizChannelState;
    private connectionState;
    constructor(apiUrl: string, ablyKey: string);
    get roomProperties(): AblyRealtimeData;
    get getMyParticipant(): AblyParticipant;
    get hostClientId(): string;
    get getParticipants(): AblyParticipants;
    get participant(): unknown;
    start({ initialParticipantData, roomId, apiKey, shouldKickParticipantsOnHostLeave, isBroadcast, }: StartRealtimeType): void;
    /**
     * @function auth
     * @description authenticates to the realtime service
     * @param {Ably.Types.TokenParams} tokenParams
     * @param {AblyTokenCallBack} callback
     * @returns {void}
     */
    private auth;
    /**
     * @function Join
     * @description join realtime room
     * @returns {void}
     * @param joinProperties
     */
    join(joinProperties: ParticipantInfo): void;
    /**
     * @function leave
     * @description leave realtime room
     * @returns {void}
     */
    leave(): void;
    /**
     * @function setHost
     * @param {string} participantParticipantId
     * @description set a new host to the room
     * @returns {void}
     */
    setHost: (participantParticipantId: string) => Promise<void>;
    /**
     * @function setGridMode
     * @param {boolean} isGridModeEnable
     * @description synchronizes the grid mode of the cameras in the room
     * @returns {void}
     */
    setGridMode(isGridModeEnable: boolean): void;
    /**
     * @function setSyncProperty
     * @param {string} name
     * @param {unknown} property
     * @description add/change and sync a property in the room
     * @returns {void}
     */
    setSyncProperty<T>(name: string, property: T): Promise<void>;
    /**
     * @function setFollowParticipant
     * @param {string} participantId
     * @description add/change and sync a property in the room
     * @returns {void}
     */
    setFollowParticipant(participantId?: string): void;
    /**
     * @function setGather
     * @param {boolean} active
     * @description sync to all participants to go to the host position
     * @returns {void}
     */
    setGather(active: boolean): void;
    /**
     * @function getParticipantSlot
     * @param {string} participantId
     * @returns {void}
     */
    getParticipantSlot(participantId: string): number;
    /**
     * @function freezeSync
     * @param {boolean} isFrozen
     * @returns {void}
     */
    freezeSync: (isFrozen: boolean) => void;
    /**
     * @function setParticipantData
     * @param {ParticipantDataInput} data
     * @returns {void}
     */
    setParticipantData: (data: ParticipantDataInput) => void;
    /**
     * @function publishClientSyncProperties
     * @description publish client sync props
     * @returns {void}
     */
    private publishClientSyncProperties;
    /**
     * @function onAblyPresenceEnter
     * @description callback that receives the event that a participant has entered the room
     * @param {Ably.Types.PresenceMessage} presenceMessage
     * @returns {void}
     */
    private onAblyPresenceEnter;
    /**
     * @function onAblyPresenceUpdate
     * @description  callback that receives the event that
     * a participant's properties have been updated
     * @param {Ably.Types.PresenceMessage} presenceMessage
     * @returns {void}
     */
    private onAblyPresenceUpdate;
    /**
     * @function onAblyPresenceLeave
     * @description  callback that receives the exit event from a participant
     * @param {Ably.Types.PresenceMessage} presenceMessage
     * @returns {void}
     */
    private onAblyPresenceLeave;
    /**
     * @function onAblySyncChannelUpdate
     * @description callback that receives the update event from ably's channel
     * @param {Ably.Types.Message} message
     * @returns {void}
     */
    private onAblySyncChannelUpdate;
    /**
     * @function onReceiveBroadcastSync
     * @description receive the info of all participants from the host
     * @param {Ably.Types.Message} message
     * @returns {void}
     */
    private onReceiveBroadcastSync;
    /**
     * @function onAblyRoomUpdate
     * @description callback that receives the update event from ably's room
     * @param {Ably.Types.Message} message
     * @returns {void}
     */
    private onAblyRoomUpdate;
    /**
     * @function updateLocalRoomState
     * @description update room data
     * @param {AblyRealtimeData} data
     * @returns {void}
     */
    private updateLocalRoomState;
    /**
     * @function updateMyProperties
     * @param {ParticipantInfo} participantInfo
     * @description updates local participant properties
     * @returns {void}
     */
    updateMyProperties: import("lodash").DebouncedFunc<(newProperties: ParticipantInfo) => void>;
    /**
     * @function updateRoomProperties
     * @param {AblyRealtimeData} properties
     * @description updates room properties
     * @returns {void}
     */
    private updateRoomProperties;
    /**
     * @function buildClient
     * @description ably client build
     * @returns {void}
     */
    private buildClient;
    /**
     * @function publishParticipantUpdate
     * @param {AblyParticipant} participant
     * @description publish a participant's changes to observer
     * @returns {void}
     */
    private publishParticipantUpdate;
    /**
     * @function updateParticipants
     * @description update participant list
     * @returns {void}
     */
    private updateParticipants;
    /**
     * @function checkBroadcast
     * @description check if it has any audience in participant list
     * and change the isBroadcast parameter based on it
     * @returns {void}
     */
    private checkBroadcast;
    /**
     * @function updateHostInfo
     * @param {string} newHostId
     * @description update host info
     * @returns {void}
     */
    private updateHostInfo;
    /**
     * @function initializeRoomProperties
     * @param {Ably.Types.PresenceMessage} participant
     * @param {AblyRealtimeData} additionalProperties
     * @description initializes room properties
     * @returns {void}
     */
    private initializeRoomProperties;
    /**
     * @function forceReconnect
     * @returns {void}
     */
    private forceReconnect;
    /**
     * @function throw
     * @param {string} message
     * @returns {void}
     */
    private throw;
    /**
     * @function publishStateUpdate
     * @description saves the room locally and publishes it to the sdk
     * @param {RealtimeStateTypes} state
     * @returns
     */
    private publishStateUpdate;
    /**
     * @function fetchRoomProperties
     * @returns {AblyRealtimeData | null}
     */
    private fetchRoomProperties;
    /**
     * @function hostPassingHandle
     * @description
       determines when guest participants should wait for the host before entering the meeting room
     * @returns {void}
     */
    private hostPassingHandle;
    /**
     * @function findSlotIndex
     * @description finds an available slot
     * @param {Ably.Types.PresenceMessage} myPresenceParam
     * @returns {void}
     */
    findSlotIndex: (myPresenceParam: Ably.Types.PresenceMessage) => Promise<void>;
    /**
     * @function confirmSlot
     * @description confirms that my slot is valid
     * @param {Ably.Types.PresenceMessage} participant
     * @returns {void}
     */
    confirmSlot: import("lodash").DebouncedFunc<(myPresenceParam: Ably.Types.PresenceMessage) => Promise<void>>;
    /**
     * @function onStateChange
     * @description Translates connection state and channel state into realtime state
     * @returns {void}
     */
    onStateChange(): void;
    /**
     * @function onAblyConnectionStateChange
     * @param {Ably.Types.ConnectionStateChange} state
     * @description gets ably's new connection state
     * @returns {void}
     */
    private onAblyConnectionStateChange;
    /**
     * @function onAblyChannelStateChange
     * @param {Ably.Types.ChannelStateChange} state
     * @description gets ably's new channel state
     * @returns {void}
     */
    private onAblyChannelStateChange;
    /**
     * @function onJoinRoom
     * @param {Ably.Types.PresenceMessage} myPresence
     * @returns {void}
     */
    private onJoinRoom;
    /**
     * @function onParticipantJoin
     * @returns {void}
     * @param presence
     */
    private onParticipantJoin;
    /**
     * @function onParticipantLeave
     * @returns {void}
     * @param presence
     */
    private onParticipantLeave;
    /**
     * @function onHostLeft
     * @param {Ably.Types.PresenceMessage} participant
     * @returns {void}
     */
    private onHostLeft;
    /**
     * @function syncBroadcast
     * @description sends the information of all participants to the audience
     * @returns {void}
     */
    private syncBroadcast;
    /**
     * @function isMessageTooBig
     * @description calculates the size of a sync message and checks if it's bigger than limit
     * @returns {boolean}
     */
    private isMessageTooBig;
    private isClientMessageTooBig;
}
