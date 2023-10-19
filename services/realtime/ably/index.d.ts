/// <reference types="lodash" />
import Ably from 'ably';
import { TranscriptState } from '../../../common/types/events.types';
import { Participant } from '../../../common/types/participant.types';
import { Annotation } from '../../../components/comments/types';
import { ParticipantMouse } from '../../../components/presence-mouse/types';
import { DrawingData } from '../../video-conference-manager/types';
import { RealtimeService } from '../base';
import { ParticipantInfo, StartRealtimeType } from '../base/types';
import { AblyParticipant, AblyRealtime, AblyRealtimeData, ParticipantDataInput, RealtimeMessage } from './types';
export default class AblyRealtimeService extends RealtimeService implements AblyRealtime {
    private client;
    private participants;
    private participantsMouse;
    private hostParticipantId;
    private myParticipant;
    private commentsChannel;
    private supervizChannel;
    private clientSyncChannel;
    private clientRoomStateChannel;
    private broadcastChannel;
    private presenceMouseChannel;
    private clientRoomState;
    private clientSyncPropertiesQueue;
    private clientSyncPropertiesTimeOut;
    private isReconnecting;
    isJoinedRoom: boolean;
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
    get hostClientId(): string;
    get isLocalParticipantHost(): boolean;
    get getParticipants(): Record<string, AblyParticipant>;
    get participant(): AblyParticipant;
    get localParticipantId(): string | null;
    get isBroadcast(): boolean;
    start({ participant, roomId, apiKey }: StartRealtimeType): void;
    /**
     * @function auth
     * @description authenticates to the realtime service
     * @param {Ably.Types.TokenParams} tokenParams
     * @param {AblyTokenCallBack} callback
     * @returns {void}
     */
    private auth;
    /**
     * @function join
     * @description join realtime room
     * @returns {void}
     * @param joinProperties
     */
    join(participant?: Participant): void;
    /**
     * @function leave
     * @description leave realtime room
     * @returns {void}
     */
    leave(): void;
    /**
     * @function setHost
     * @param {string} participantId
     * @description set a new host to the room
     * @returns {void}
     */
    setHost: (participantId: string) => Promise<void>;
    /**
     * @function setKickParticipant
     * @param {string} kickParticipantId
     * @description set a participant to be kicked from the room
     * @returns {void}
     */
    setKickParticipant: (kickParticipantId: string) => Promise<void>;
    /**
     * @function setGridMode
     * @param {boolean} isGridModeEnable
     * @description synchronizes the grid mode of the cameras in the room
     * @returns {void}
     */
    setGridMode(isGridModeEnable: boolean): void;
    /**
     * @function setDrawing
     * @param drawing {DrawingData}  -  drawing payload*
     * @description synchronizes the drawing in the room
     * @returns {void}
     */
    setDrawing(drawing: DrawingData): void;
    /**
     * @function setTranscript
     * @param state {TranscriptState}
     * @description synchronizes the transcript state in the room
     * @returns {void}
     */
    setTranscript(state: TranscriptState): void;
    /**
     * @function setSyncProperty
     * @param {string} name
     * @param {unknown} property
     * @description add/change and sync a property in the room
     * @returns {void}
     */
    setSyncProperty<T>(name: string, property: T): void;
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
     * @description Detaches and unsubscribes from channels to freeze synchronization with the room.
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
     * @function setKickParticipantsOnHostLeave
     * @param {boolean} shouldKick
     * @description set if the participants should be kicked when the host leaves
     * @param shouldKick
     */
    setKickParticipantsOnHostLeave: (shouldKick: boolean) => void;
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
     * @function onClientSyncChannelUpdate
     * @description callback that receives the update event from ably's channel
     * @param {Ably.Types.Message} message
     * @returns {void}
     */
    private onClientSyncChannelUpdate;
    /**
     * @function saveClientRoomState
     * @description
        Saves the latest state of the room for the client
        and publishes it to the client room state channel.
     * @param {string} name - The name of the room state to save.
     * @param {RealtimeMessage[]} data - The data to save as the latest state of the room.
     * @returns {void}
     */
    private saveClientRoomState;
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
    updateMyProperties: import("lodash").DebouncedFunc<(newProperties?: ParticipantInfo) => void>;
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
     * @function updateHostInfo
     * @param {string} newHostId
     * @description update host info
     * @returns {void}
     */
    private updateHostInfo;
    /**
     * @function initializeRoomProperties
     * @description
          Initializes the room properties,
          including setting the host client ID and updating the participant list.
     * @returns {Promise<void>}
     */
    private initializeRoomProperties;
    /**
     * @function forceReconnect
     * @description Forces a reconnection to the Ably server if the participant loses connection.
     * If the client is already connected to the Ably server, it rejoins the room.
     * @throws {Error} if roomId is not set
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
     * @function fetchSyncClientProperty
     * @description
     * @param {string} eventName - name event to be fetched
     * @returns {Promise<RealtimeMessage | Record<string, RealtimeMessage>}
     */
    fetchSyncClientProperty(eventName?: string): Promise<RealtimeMessage | Record<string, RealtimeMessage>>;
    /**
     * @function hostPassingHandle
     * @description
       determines when guest participants should wait for the host before entering the meeting room
     * @returns {void}
     */
    private hostPassingHandle;
    /**
     * @function findSlotIndex
     * @description Finds an available slot index for the participant and confirms it.
     * @param {Ably.Types.PresenceMessage} myPresenceParam - The presence message of the participant.
     * @returns {void}
     */
    findSlotIndex: (myPresenceParam: Ably.Types.PresenceMessage) => void;
    /**
     * @function confirmSlot
     * @description confirms that my slot is valid
     * @param {Ably.Types.PresenceMessage} participant
     * @returns {void}
     */
    private confirmSlot;
    /**
     * @function onStateChange
     * @description Translates connection state and channel state into realtime state
     * @returns {void}
     */
    private onStateChange;
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
     * @description Updates the room properties when the host leaves the room
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
     * @param {unknown} msg
     * @param {number} limit
     * @returns {boolean}
     */
    private isMessageTooBig;
    /** Comments */
    private onCommentsChannelUpdate;
    updateComments: (annotations: Annotation[]) => void;
    /** Presence Mouse */
    enterPresenceMouseChannel: (participant: Participant) => void;
    leavePresenceMouseChannel: () => void;
    updatePresenceMouse: import("lodash").DebouncedFunc<(data: Partial<ParticipantMouse>) => void>;
    private onPresenceMouseChannelEnter;
    private onPresenceMouseChannelLeave;
    /**
     * @function publishPresenceMouseUpdate
     * @param {AblyParticipant} participant
     * @description publish a participant's changes to observer
     * @returns {void}
     */
    private publishPresenceMouseUpdate;
}
