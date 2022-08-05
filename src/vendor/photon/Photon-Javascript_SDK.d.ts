/**
 Exitgames
 @namespace Exitgames
 */
/**
 Exitgames utilities
 @namespace Exitgames.Common
 */
declare module Exitgames.Common {
    class Logger {
        private prefix;
        private level;
        /**
         @classdesc Logger with ability to control logging level.
         Prints messages to browser console.
         Each logging method perfoms toString() calls and default formatting of arguments only after it checks logging level. Therefore disabled level logging method call with plain arguments doesn't involves much overhead.
         But if one prefer custom formatting or some calculation for logging methods arguments he should check logging level before doing this to avoid unnecessary operations:
         if(logger.isLevelEnabled(Logger.Level.DEBUG)) {
                logger.debug("", someCall(x, y), x + "," + y);
            }
         @constructor Exitgames.Common.Logger
         @param {string} [prefix=""] All log messages will be prefixed with that.
         @param {Exitgames.Common.Logger.Level} [level=Level.INFO] Initial logging level.
         */
        constructor(prefix?: string, level?: number);
        /**
         @summary Sets logger prefix.
         @method Exitgames.Common.Logger#setPrefix
         @param {stirng} prefix New prefix.
         */
        setPrefix(prefix: string): void;
        /**
         @summary Gets logger prefix.
         @method Exitgames.Common.Logger#getPrefix
         @returns {string} Prefix.
         */
        getPrefix(): string;
        /**
         @summary Changes current logging level.
         @method Exitgames.Common.Logger#setLevel
         @param {Exitgames.Common.Logger.Level} level New logging level.
         */
        setLevel(level: number): void;
        /**
         @summary Sets global method to be called on logger.exception call.
         @method Exitgames.Common.Logger#setExceptionHandler
         @param {(string) => boolean} handler Exception handler. Return true to cancel throwing.
         */
        static setExceptionHandler(handler: (n: number, s: string) => boolean): void;
        /**
         @summary Checks if logging level active.
         @method Exitgames.Common.Logger#isLevelEnabled
         @param {Exitgames.Common.Logger.Level} level Level to check.
         @returns {boolean} True if level active.
         */
        isLevelEnabled(level: number): boolean;
        /**
         @summary Returns current logging level.
         @method Exitgames.Common.Logger#getLevel
         @returns {Exitgames.Common.Logger.Level} Current logging level.
         */
        getLevel(): number;
        /**
         @summary Logs message if logging level = DEBUG, INFO, WARN, ERROR
         @method Exitgames.Common.Logger#debug
         @param {string} mess Message to log.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
         */
        debug(mess: string, ...optionalParams: any[]): void;
        /**
         @summary Logs message if logging level = INFO, WARN, ERROR
         @method Exitgames.Common.Logger#info
         @param {string} mess Message to log.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
         */
        info(mess: string, ...optionalParams: any[]): void;
        /**
         @summary Logs message if logging level = WARN, ERROR
         @method Exitgames.Common.Logger#warn
         @param {string} mess Message to log.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
         */
        warn(mess: string, ...optionalParams: any[]): void;
        /**
         @summary Logs message if logging level = ERROR
         @method Exitgames.Common.Logger#error
         @param {string} mess Message to log.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
         */
        error(mess: string, ...optionalParams: any[]): void;
        /**
         @summary Throws an Error or executes exception handler if set.
         @method Exitgames.Common.Logger#exception
         @param {string} mess Message passed to Error or exception handler.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of log message after space character.
         */
        exception(code: number, mess: string, ...optionalParams: any[]): void;
        /**
         @summary Applies default logger formatting to arguments
         @method Exitgames.Common.Logger#format
         @param {string} mess String to start formatting with.
         @param {...any} optionalParams For every additional parameter toString() applies and result added to the end of formatted string after space character.
         @returns {string} Formatted string.
         */
        format(mess: string, ...optionalParams: any[]): string;
        /**
         @summary Applies default logger formatting to array of objects.
         @method Exitgames.Common.Logger#format
         @param {string} mess String to start formatting with.
         @param {any[]} optionalParams For every additional parameter toString() applies and result added to the end of formatted string after space character.
         @returns {string} Formatted string.
         */
        formatArr(mess: string, optionalParams: any[]): string;
        /**
         @summary Logging levels. Set to restrict log output.
         @member Exitgames.Common.Logger.Level
         @readonly
         @property {number} DEBUG All logging methods enabled.
         @property {number} INFO info(...), warn(...), error(...) methods enabled.
         @property {number} WARN warn(...) and error(...) methods enabled.
         @property {number} ERROR Only error(...) method enabled.
         @property {number} OFF Logging off.
         */
        static Level: {
            DEBUG: number;
            INFO: number;
            WARN: number;
            ERROR: number;
            OFF: number;
        };
        private static exceptionHandler;
        private static log_types;
        private log;
        private format0;
    }
    class Util {
        static isArray(obj: any): boolean;
        static getPropertyOrElse(obj: any, prop: string, defaultValue: any): any;
    }
}
/**
 Photon
 @namespace Photon
 */
declare module Photon {
    /**
     @summary These are the options that can be used as underlying transport protocol.
     @member Photon.ConnectionProtocol
     @readonly
     @property {number} Ws WebSockets connection.
     @property {number} Wss WebSockets Secure connection.
     **/
enum ConnectionProtocol {
        Ws = 0,
            Wss = 1
    }
enum TypeExtType {
        None = 0,
            Byte = 1,
            Short = 2,
            Int = 3,
            Long = 4,
            Float = 5,
            Double = 6,
            String = 7,
            Bool = 8,
            Table = 9,
            Dict = 10,
            Object = 11
    }
    class TypeExt {
        static Is(x: any): boolean;
        static Byte(x: any): any;
        static Short(x: any): any;
        static Int(x: any): any;
        static Long(x: any): any;
        static Float(x: any): any;
        static Double(x: any): any;
        static String(x: any): any;
        static Bool(x: any): any;
        static Dict(t1: number, t2: number, x: any): any;
        static TableTypedKeys(): any;
        static DictTypedKeys(keyType: number, valType: number): any;
        static PutTypedKey(x: any, k: any, v: any): void;
    }
    class PhotonPeer {
        private protocol;
        private address;
        private subprotocol;
        addProtocolPrefix(address: string, protocol: number): string;
        url: string;
        /**
         @classdesc Instances of the PhotonPeer class are used to connect to a Photon server and communicate with it.
         A PhotonPeer instance allows communication with the Photon Server, which in turn distributes messages to other PhotonPeer clients.
         An application can use more than one PhotonPeer instance, which are treated as separate users on the server.
         Each should have its own listener instance, to separate the operations, callbacks and events.
         @constructor Photon.PhotonPeer
         @param {Photon.ConnectionProtocol} protocol Connection protocol.
         @param {string} address Server address:port.
         @param {string} [subprotocol=""] WebSocket protocol.
         @param {string} [debugName=""] Log messages prefixed with this value.
         */
        constructor(protocol: Photon.ConnectionProtocol, address: string, subprotocol?: string, debugName?: string);
        Destroy(): void;
        /**
         @summary Peer sends 'keep alive' message to server as this timeout exceeded after last send operation.
         Set it < 1000 to disable 'keep alive' operation
         @member Photon.PhotonPeer#keepAliveTimeoutMs
         @type {number}
         @default 3000
         */
        keepAliveTimeoutMs: number;
        /**
         @summary Checks if peer is connecting.
         @method Photon.PhotonPeer#isConnecting
         @returns {boolean} True if peer is connecting.
         */
        isConnecting(): boolean;
        getRtt(): number;
        getServerTimeMs(): number;
        ping(syncServerTime?: boolean): void;
        /**
         @summary Checks if peer is connected.
         @method Photon.PhotonPeer#isConnected
         @returns {boolean} True if peer is connected.
         */
        isConnected(): boolean;
        /**
         @summary Checks if peer is closing.
         @method Photon.PhotonPeer#isClosing
         @returns {boolean} True if peer is closing.
         */
        isClosing(): boolean;
        /**
         @summary Starts connection to server.
         @method Photon.PhotonPeer#connect
         */
        connect(appid: string): void;
        /**
         @summary Disconnects from server.
         @method Photon.PhotonPeer#disconnect
         */
        disconnect(): void;
        /**
         @summary Sends operation to the Photon Server.
         @method Photon.PhotonPeer#sendOperation
         @param {number} code Code of operation.
         @param {object} [data] Parameters of operation as a flattened array of key-value pairs: [key1, value1, key2, value2...]
         @param {boolean} [sendReliable=false] Selects if the operation must be acknowledged or not. If false, the operation is not guaranteed to reach the server.
         @param {number} [channelId=0] The channel in which this operation should be sent.
         */
        sendOperation(code: number, data?: any, sendReliable?: boolean, channelId?: number): void;
        /**
         @summary Registers listener for peer status change.
         @method Photon.PhotonPeer#addPeerStatusListener
         @param {PhotonPeer.StatusCodes} statusCode Status change to this value will be listening.
         @param {Function} callback The listener function that processes the status change. This function don't accept any parameters.
         */
        addPeerStatusListener(statusCode: string, callback: () => void): void;
        /**
         @summary Registers listener for custom event.
         @method Photon.PhotonPeer#addEventListener
         @param {number} eventCode Custom event code.
         @param {Function} callback The listener function that processes the event. This function may accept object with event content.
         */
        addEventListener(eventCode: number, callback: (x: any) => void): void;
        /**
         @summary Registers listener for operation response.
         @method Photon.PhotonPeer#addResponseListener
         @param {number} operationCode Operation code.
         @param {Function} callback The listener function that processes the event. This function may accept object with operation response content.
         */
        addResponseListener(operationCode: number, callback: (x: any) => void): void;
        /**
         @summary Removes listener if exists for peer status change.
         @method Photon.PhotonPeer#removePeerStatusListener
         @param {string} statusCode One of PhotonPeer.StatusCodes to remove listener for.
         @param {Function} callback Listener to remove.
         */
        removePeerStatusListener(statusCode: string, callback: Function): void;
        /**
         @summary Removes listener if exists for custom event.
         @method Photon.PhotonPeer#removeEventListener
         @param {number} eventCode Event code to remove to remove listener for.
         @param {Function} callback Listener to remove.
         */
        removeEventListener(eventCode: number, callback: Function): void;
        /**
         @summary Removes listener if exists for operation response.
         @method Photon.PhotonPeer#removeResponseListener
         @param {number} operationCode Operation code to remove listener for.
         @param {Function} callback Listener to remove.
         */
        removeResponseListener(operationCode: number, callback: Function): void;
        /**
         @summary Removes all listeners for peer status change specified.
         @method Photon.PhotonPeer#removePeerStatusListenersForCode
         @param {string} statusCode One of PhotonPeer.StatusCodes to remove all listeners for.
         */
        removePeerStatusListenersForCode(statusCode: string): void;
        /**
         @summary Removes all listeners for custom event specified.
         @method Photon.PhotonPeer#removeEventListenersForCode
         @param {number} eventCode Event code to remove all listeners for.
         */
        removeEventListenersForCode(eventCode: number): void;
        /**
         @summary Removes all listeners for operation response specified.
         @method Photon.PhotonPeer#removeResponseListenersForCode
         @param {number} operationCode Operation code to remove all listeners for.
         */
        removeResponseListenersForCode(operationCode: number): void;
        /**
         @summary Sets peer logger level.
         @method Photon.PhotonPeer#setLogLevel
         @param {Exitgames.Common.Logger.Level} level Logging level.
         */
        setLogLevel(level: number): void;
        /**
         @summary Called if no listener found for received custom event.
         Override to relay unknown event to user's code or handle known events without listener registration.
         @method Photon.PhotonPeer#onUnhandledEvent
         @param {number} eventCode Code of received event.
         @param {object} [args] Content of received event or empty object.
         */
        onUnhandledEvent(eventCode: number, args: any): void;
        /**
         @summary Called if no listener found for received operation response event.
         Override to relay unknown response to user's code or handle known responses without listener registration.
         @method Photon.PhotonPeer#onUnhandledEvent
         @param {number} operationCode Code of received response.
         @param {object} [args] Content of received response or empty object.
         */
        onUnhandledResponse(operationCode: number, args: any): void;
        /**
         @summary Enum for peer status codes.
         Use to subscribe to status changes.
         @member Photon.PhotonPeer.StatusCodes
         @readonly
         @property {string} connecting Is connecting to server.
         @property {string} connect Connected to server.
         @property {string} connectFailed Connection to server failed.
         @property {string} disconnect Disconnected from server.
         @property {string} connectClosed Connection closed by server.
         @property {string} error General connection error.
         @property {string} timeout Disconnected from server for timeout.
         */
        static StatusCodes: {
            connecting: string;
            connect: string;
            connectFailed: string;
            disconnect: string;
            connectClosed: string;
            error: string;
            timeout: string;
        };
        private _dispatchEvent;
        private _dispatchResponse;
        _logger: Exitgames.Common.Logger;
        private _socket?;
        private _frame;
        private _sessionid;
        private _isConnecting;
        private _isConnected;
        private _isClosing;
        private _peerStatusListeners;
        private _eventListeners;
        private _responseListeners;
        private _stringify;
        private _encode;
        private _decode;
        private _onMessage;
        private lastRtt;
        private initTimestamp;
        private serverTimeBaseLock;
        private serverTimeBase;
        private serverTimeBaseTimestamp;
        private keepAliveTimer;
        private resetKeepAlive;
        private _ping;
        private _send;
        private _onMessageReceived;
        private _parseMessageValuesArrayToJSON;
        _parseEvent(code: number, event: any): void;
        _parseResponse(code: number, response: any): void;
        private _parseInternalResponse;
        private _onConnecting;
        private _onConnect;
        private _onConnectFailed;
        private _onDisconnect;
        private _onTimeout;
        private _onError;
        private _addListener;
        private _dispatch;
        private _dispatchPeerStatus;
        private _removeListener;
        private _removeListenersForCode;
    }
}
/**
 Photon Load Balancing API
 @namespace Photon.LoadBalancing
 */
declare module Photon.LoadBalancing {
    interface ConnectOptions {
        keepMasterConnection?: boolean;
        lobbyName?: string;
        lobbyType?: number;
        lobbyStats?: boolean;
        region?: string;
        userAuthSecret?: string;
    }
    interface CreateIfNotExistsRandomRoomOptions {
        isVisible?: boolean;
        isOpen?: boolean;
        maxPlayers?: number;
        customGameProperties?: {
            [index: string]: any;
    };
        propsListedInLobby?: string[];
        emptyRoomLiveTime?: number;
        suspendedPlayerLiveTime?: number;
        plugins?: string[];
    }
    interface CreateIfNotExistsRoomOptions extends CreateIfNotExistsRandomRoomOptions {
        isVisible?: boolean;
        isOpen?: boolean;
        maxPlayers?: number;
        customGameProperties?: {
            [index: string]: any;
    };
        propsListedInLobby?: string[];
        emptyRoomLiveTime?: number;
        suspendedPlayerLiveTime?: number;
        plugins?: string[];
        lobbyName?: string;
        lobbyType?: number;
    }
    interface CreateRoomOptions extends CreateIfNotExistsRoomOptions {
        expectedUsers?: string[];
    }
    interface JoinRoomOptions {
        rejoin?: boolean;
        createIfNotExists?: boolean;
        expectedUsers?: string[];
    }
    interface JoinRandomRoomOptions {
        expectedCustomRoomProperties?: any;
        expectedMaxPlayers?: number;
        matchingType?: number;
        lobbyName?: string;
        lobbyType?: number;
        sqlLobbyFilter?: string;
        expectedUsers?: string[];
    }
    class Actor {
        name: string;
        actorNr: number;
        isLocal: boolean;
        /**
         @classdesc Summarizes a "player" within a room, identified (in that room) by ID (or "actorNr"). Extend to implement custom logic.
         @constructor Photon.LoadBalancing.Actor
         @param {string} name Actor name.
         @param {number} actorNr Actor ID.
         @param {boolean} isLocal Actor is local.
         */
        constructor(name: string, actorNr: number, isLocal: boolean);
        userId: string;
        /**
         @summary Actor's room: the room initialized by client for create room operation or room client connected to.
         @method Photon.LoadBalancing.Actor#getRoom
         @returns {Photon.LoadBalancing.Room} Actor's room.
         */
        getRoom(): Room | null;
        /**
         @summary Raises game custom event.
         @method Photon.LoadBalancing.Actor#raiseEvent
         @param {number} eventCode Identifies this type of event (and the content). Your game's event codes can start with 0.
         @param {object} [data] Custom data you want to send along (use null, if none).
         @param {object} [options] Additional options
         @property {object} options Additional options
         @property {number} [options.interestGroup] The ID of the interest group this event goes to (exclusively).
         @property {Photon.LoadBalancing.Constants.EventCaching} [options.cache=EventCaching.DoNotCache] Events can be cached (merged and removed) for players joining later on.
         @property {Photon.LoadBalancing.Constants.ReceiverGroup} [options.receivers=ReceiverGroup.Others] Defines to which group of players the event is passed on.
         @property {number[]} [options.targetActors] Defines the target players who should receive the event (use only for small target groups).
         @property {boolean} [options.webForward=false] Forward to web hook.
         */
        raiseEvent(eventCode: number, data?: any, options?: {
        interestGroup?: number;
        cache?: number;
        receivers?: number;
        targetActors?: number[];
        webForward?: boolean;
    }): void;
    private setProp;
    /**
     @summary Sets actor name.
     @method Photon.LoadBalancing.Actor#setName
     @param {string} name Actor name.
     */
    setName(name: string): void;
    /**
     @summary Called on every actor properties update: properties set by client, poperties update from server.
     Override to update custom room state.
     @method Photon.LoadBalancing.Actor#onPropertiesChange
     @param {object} changedCustomProps Key-value map of changed properties.
     @param {boolean} [byClient] true if properties set by client.
     */
    onPropertiesChange(changedCustomProps: any, byClient?: boolean): void;
    /**
     @summary Returns custom property by name.
     @method Photon.LoadBalancing.Actor#getCustomProperty
     @param {string} name Name of the property.
     @returns {object} Property or undefined if property not found.
     */
    getCustomProperty(name: string): any;
    /**
     @summary Returns custom property by name or default value.
     @method Photon.LoadBalancing.Actor#getCustomPropertyOrElse
     @param {string} name Name of the property.
     @param {object} defaultValue Default property value.
     @returns {object} Property or default value if property not found.
     */
    getCustomPropertyOrElse(name: string, defaultValue: any): any;
    /**
     @summary Sets custom property.
     @method Photon.LoadBalancing.Actor#setCustomProperty
     @param {string} name Name of the property.
     @param {object} value Property value.
     @param {boolean} [webForward=false] Forward to web hook.
     @param {object} [expectedValue] Property value expected when update occurs. (CAS : "Check And Swap")
     */
    setCustomProperty(name: string, value: any, webForward?: boolean, expectedValue?: any): void;
    /**
     @summary Sets custom properties.
     @method Photon.LoadBalancing.Actor#setCustomProperties
     @param {object} properties Table of properties to set.
     @param {boolean} [webForward=false] Forward to web hook.
     @param {object} [expectedProperties] Table of properties expected when update occurs. (CAS : "Check And Swap")
     */
    setCustomProperties(properties: {
        [index: string]: any;
    }, webForward?: boolean, expectedProperties?: {}): void;
    /**
     @summary Returns true if actor is in suspended state.
     @method Photon.LoadBalancing.Actor#isSuspended
     @returns {boolean} Actor suspend state.
     **/
    isSuspended(): boolean;
    _getAllProperties(): {
        [index: string]: any;
    };
    _setLBC(lbc: LoadBalancingClient): void;
    /**
     @summary Returns custom properties.
     @method Photon.LoadBalancing.Actor#getCustomProperties
     @returns {object} Custom properties.
     **/
    getCustomProperties(): {
        [index: string]: any;
    };
    private customProperties;
    private loadBalancingClient?;
    private suspended;
    _updateFromResponse(vals: {
        [index: string]: any;
    }): void;
    _updateMyActorFromResponse(vals: {
        [index: string]: any;
    }): void;
    private updateIfExists;
    _updateFromProps(props: {
        [index: string]: any;
    }): void;
    _setSuspended(s: boolean): void;
    static _getActorNrFromResponse(vals: {
        [index: string]: any;
    }): any;
}
    class RoomInfo {
        /**
         @summary Room name.
         @member Photon.LoadBalancing.RoomInfo#name
         @type {string}
         @readonly
         */
        name: string;
        /**
         @summary Joined room Game server address.
         @member Photon.LoadBalancing.RoomInfo#address
         @type {string}
         @readonly
         */
        address: string;
        /**
         @summary Max players before room is considered full.
         @member Photon.LoadBalancing.RoomInfo#maxPlayers
         @type {number}
         @readonly
         */
        maxPlayers: number;
        /**
         @summary Shows the room in the lobby's room list. Makes sense only for local room.
         @member Photon.LoadBalancing.RoomInfo#isVisible
         @type {boolean}
         @readonly
         */
        isVisible: boolean;
        /**
         @summary Defines if this room can be joined.
         @member Photon.LoadBalancing.RoomInfo#isOpen
         @type {boolean}
         @readonly
         */
        isOpen: boolean;
        /**
         @summary Count of player currently in room.
         @member Photon.LoadBalancing.RoomInfo#playerCount
         @type {number}
         @readonly
         */
        playerCount: number;
        /**
         @summary Time in ms indicating how long the room instance will be keeped alive in the server room cache after all clients have left the room.
         @member Photon.LoadBalancing.RoomInfo#emptyRoomLiveTime
         @type {number}
         @readonly
         */
        emptyRoomLiveTime: number;
        /**
         @summary Time in ms indicating how long suspended player will be kept in the room.
         @member Photon.LoadBalancing.RoomInfo#suspendedPlayerLiveTime
         @type {number}
         @readonly
         **/
        suspendedPlayerLiveTime: number;
        /**
         @summary Expected users.
         @member Photon.LoadBalancing.RoomInfo#expectedUsers
         @type {number}
         @readonly
         **/
        expectedUsers?: string[];
        /**
         @summary Expected server plugins.
         @member Photon.LoadBalancing.RoomInfo#plugins
         @type {string[]}
         @readonly
         **/
        plugins?: string[];
        /**
         @summary Room removed (in room list updates).
         @member Photon.LoadBalancing.RoomInfo#removed
         @type {boolean}
         @readonly
         */
        removed: boolean;
        private cleanupCacheOnLeave;
        /**
         @summary Master client set by game server. Note: Not all servers support this currently. If the value of the property is 0, use lowest actorid instead.
         @member Photon.LoadBalancing.RoomInfo#masterClientId
         @type { number }
         @readonly
         */
        masterClientId: number;
        /**
         @summary Returns custom properties.
         @method Photon.LoadBalancing.RoomInfo#getCustomProperties
         @returns {object} Custom properties.
         **/
        getCustomProperties(): {
            [index: string]: any;
        };
        /**
         @summary Returns properties listed in lobby.
         @method Photon.LoadBalancing.RoomInfo#getPropsListedInLobby
         @returns {object} Properties listed in lobby.
         **/
        getPropsListedInLobby(): string[];
        protected _customProperties: {
            [index: string]: any;
        };
        protected _propsListedInLobby: string[];
        /**
         @summary Called on every room properties update: room creation, properties set by client, poperties update from server.
         Override to update custom room state.
         @method Photon.LoadBalancing.RoomInfo#onPropertiesChange
         @param {object} changedCustomProps Key-value map of changed properties.
         @param {boolean} [byClient] true if called on room creation or properties set by client.
         */
        onPropertiesChange(changedCustomProps: any, byClient?: boolean): void;
        /**
         @summary Returns custom property by name.
         @method Photon.LoadBalancing.RoomInfo#getCustomProperty
         @param {string} name Name of the property.
         @returns {object} Property or undefined if property not found.
         */
        getCustomProperty(prop: string): any;
        /**
         @summary Returns custom property by name or default value.
         @method Photon.LoadBalancing.RoomInfo#getCustomPropertyOrElse
         @param {string} name Name of the property.
         @param {object} defaultValue Default property value.
         @returns {object} Property or default value if property not found.
         */
        getCustomPropertyOrElse(prop: string, defaultValue: any): any;
        /**
         @classdesc Used for Room listings of the lobby (not yet joining). Offers the basic info about a room: name, player counts, properties, etc.
         @constructor Photon.LoadBalancing.RoomInfo
         @param {string} name Room name.
         */
        constructor(name: string);
        _updateFromMasterResponse(vals: any): void;
        _updateFromProps(props: {
            [index: string]: any;
        }): void;
        _updateFromEvent(payload: Object): void;
        private updateIfExists;
    }
    class Room extends RoomInfo {
        /**
         @classdesc Represents a room client joins or is joined to. Extend to implement custom logic. Custom properties can be set via setCustomProperty() while being in the room.
         @mixes Photon.LoadBalancing.RoomInfo
         @constructor Photon.LoadBalancing.Room
         @param {string} name Room name.
         */
        constructor(name: string);
        /**
         @summary Sets custom property
         @method Photon.LoadBalancing.Room#setCustomProperty
         @param {string} name Name of the property.
         @param {object} value Property value.
         @param {boolean} [webForward=false] Forward to web hook.
         @param {object} [expectedValue] Property value expected when update occurs. (CAS : "Check And Swap")
         */
        setCustomProperty(name: string, value: any, webForward?: boolean, expectedValue?: any): void;
        /**
         @summary Sets custom property
         @method Photon.LoadBalancing.Room#setCustomProperties
         @param {object} properties Table of properties to set.
         @param {boolean} [webForward=false] Forward to web hook.
         @param {object} [expectedProperties] Table of properties expected when update occurs. (CAS : "Check And Swap")
         */
        setCustomProperties(properties: {
            [index: string]: any;
        }, webForward?: boolean, expectedProperties?: {}): void;
    private setProp;
    /**
     * @summary Sets rooms visibility in the lobby's room list.
     * @method Photon.LoadBalancing.Room#setIsVisible
     * @param {boolean} isVisible New visibility value.
     */
    setIsVisible(isVisible: boolean): void;
    /**
     * @summary Sets if this room can be joined.
     * @method Photon.LoadBalancing.Room#setIsOpen
     * @param {boolean} isOpen New property value.
     */
    setIsOpen(isOpen: boolean): void;
    /**
     * @summary Sets max players before room is considered full.
     * @method Photon.LoadBalancing.Room#setMaxPlayers
     * @param {number} maxPlayers New max players value.
     */
    setMaxPlayers(maxPlayers: number): void;
    /**
     * @summary Sets room live time in the server room cache after all clients have left the room.
     * @method Photon.LoadBalancing.Room#setEmptyRoomLiveTime
     * @param {number} emptyRoomLiveTime New live time value in ms.
     */
    setEmptyRoomLiveTime(emptyRoomLiveTime: number): void;
    /**
     * @summary Sets time in ms indicating how long suspended player will be kept in the room.
     * @method Photon.LoadBalancing.Room#setSuspendedPlayerLiveTime
     * @param {number} suspendedPlayerLiveTime New live time value in ms.
     */
    setSuspendedPlayerLiveTime(suspendedPlayerLiveTime: number): void;
    /**
     * @summary Sets expected server plugins.
     * @method Photon.LoadBalancing.Room#setPlugins
     * @param {string[]} plugins New plugins list.
     */
    setPlugins(plugins: string[]): void;
    /**
     @summary Sets list of the room properties to pass to the RoomInfo list in a lobby.
     @method Photon.LoadBalancing.Room#setPropsListedInLobby
     @param {string[]} props Array of properties names.
     */
    setPropsListedInLobby(props: string[]): void;
    /**
     @summary Sets list of the room properties to pass to the RoomInfo list in a lobby.
     @method Photon.LoadBalancing.Room#setPropsListedInLobby
     @param {string[]} props Array of properties names.
     */
    setExpectedUsers(props: string[]): void;
    /**
     @summary Attempts to remove all current expected users from the server's Slot Reservation list.
     Note that this operation can conflict with new/other users joining. They might be
     adding users to the list of expected users before or after this client called ClearExpectedUsers.
     This room's expectedUsers value will update, when the server sends a successful update.
     Internals: This methods wraps up setting the ExpectedUsers property of a room.
     @method Photon.LoadBalancing.Room#clearExpectedUsers
     */
    clearExpectedUsers(): void;
    /**
     @summary Asks the server to assign another player as Master Client of your current room.
     This method calls an operation on the server to set a new Master Client, which takes a roundtrip.
     In case of success, this client and the others get the new Master Client from the server.
     @method Photon.LoadBalancing.Room#setMasterClient
     @param {number} actorNr New Master Client actor ID.
     */
    setMasterClient(actorNr: number): void;
    private loadBalancingClient?;
    _setLBC(lbc: LoadBalancingClient): void;
}
    class LoadBalancingClient {
        private appId;
        private appVersion;
        static JoinMode: {
            Default: number;
            CreateIfNotExists: number;
            RejoinOnly: number;
        };
        /**
         @summary Called on client state change. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onStateChange
         @param {Photon.LoadBalancing.LoadBalancingClient.State} state New client state.
         */
        onStateChange(state: number): void;
        /**
         @summary Called if client error occures. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onError
         @param {Photon.LoadBalancing.LoadBalancingClient.PeerErrorCode} errorCode Client error code.
         @param {string} errorMsg Error message.
         */
        onError(errorCode: number, errorMsg: string): void;
        /**
         @summary Called on operation response. Override if need custom workflow or response error handling.
         @method Photon.LoadBalancing.LoadBalancingClient#onOperationResponse
         @param {number} errorCode Server error {@link Photon.LoadBalancing.Constants.ErrorCode code}.
         @param {string} errorMsg Error message.
         @param {number} code Operation {@link Photon.LoadBalancing.Constants.OperationCode code}.
         @param {object} content Operation response content.
         */
        onOperationResponse(errorCode: number, errorMsg: string, code: number, content: any): void;
        /**
         @summary Called on custom event. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onEvent
         @param {number} code Event code.
         @param {object} content Event content.
         @param {number} actorNr Actor ID event raised by.
         */
        onEvent(code: number, content: any, actorNr: number): void;
        /**
         @summary Called on room list received from Master server (on connection). Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onRoomList
         @param {{@link Photon.LoadBalancing.RoomInfo}[]} rooms Room list.
         */
        onRoomList(rooms: RoomInfo[]): void;
        /**
         @summary Called on room list updates received from Master server. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onRoomListUpdate
         @param {{@link Photon.LoadBalancing.RoomInfo}[]} rooms Updated room list.
         @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsUpdated Rooms whose properties were changed.
         @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsAdded New rooms in list.
         @param {{@link Photon.LoadBalancing.RoomInfo}[]} roomsRemoved Rooms removed from list.
         */
        onRoomListUpdate(rooms: RoomInfo[], roomsUpdated: RoomInfo[], roomsAdded: RoomInfo[], roomsRemoved: RoomInfo[]): void;
        /**
         @summary Called on joined room properties changed event. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onMyRoomPropertiesChange
         */
        onMyRoomPropertiesChange(): void;
        /**
         @summary Called on actor properties changed event. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onActorPropertiesChange
         @param {Photon.LoadBalancing.Actor} actor Actor whose properties were changed.
         */
        onActorPropertiesChange(actor: Actor): void;
        /**
         @summary Called when client joins room. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onJoinRoom
         @param {boolean} createdByMe True if room is created by client.
         */
        onJoinRoom(createdByMe: boolean): void;
        /**
         @summary Called when new actor joins the room client joined to. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onActorJoin
         @param {Photon.LoadBalancing.Actor} actor New actor.
         */
        onActorJoin(actor: Actor): void;
        /**
         @summary Called when actor leaves the room client joined to. Also called for every actor during room cleanup. Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onActorLeave
         @param {Photon.LoadBalancing.Actor} actor Actor left the room.
         @param {boolean} cleanup True if called during room cleanup (e.g. on disconnect).
         */
        onActorLeave(actor: Actor, cleanup: boolean): void;
        /**
         @summary Called when actor suspended in the room client joined to.Override to handle it.
         @method Photon.LoadBalancing.LoadBalancingClient#onActorSuspend
         @param {Photon.LoadBalancing.Actor} actor Actor suspended in the room.
         */
        onActorSuspend(actor: Actor): void;
        /**
         @summary Called when {@link Photon.LoadBalancing.LoadBalancingClient#findFriends findFriends} request completed. <br/>
         Override to handle request results.
         @method Photon.LoadBalancing.LoadBalancingClient#onFindFriendsResult
         @param {number} errorCode Result error code. 0 if request is successful.
         @param {string} errorMsg Error message.
         @param {object} friends Table with actors names as keys and friend statuses as values: {name1: friendStatus1, name2: friendStatus2, ... }.
         @property {object} friendStatus Friend status.
         @property {boolean} friendStatus.online Online status.
         @property {string} friendStatus.roomId Joined room.
         */
        onFindFriendsResult(errorCode: number, errorMsg: string, friends: any): void;
        /**
         @summary Called when lobbies statistics update received. <br/>
         Update can be automated by set up during {@link Photon.LoadBalancing.LoadBalancingClient#connect connect} or requested explicitly by {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats}. <br/>
         Override to handle request results.
         @method Photon.LoadBalancing.LoadBalancingClient#onLobbyStats
         @param {number} errorCode Result error code. 0 if request is successful. For automated updates is always 0.
         @param {string} errorMsg Error message. For automated updates is always empty.
         @param {object[]} lobbies Array of lobbies statistics: [lobbyStats1, lobbyStats1, ... ].
         @property {object} lobbyStats Lobby statistics.
         @property {string} lobbyStats.lobbyName Lobby name.
         @property {number} lobbyStats.lobbyType Lobby type.
         @property {number} lobbyStats.peerCount The number of players in the lobby (on Master, not playing).
         @property {number} lobbyStats.gameCount The number of games in the lobby.
         */
        onLobbyStats(errorCode: number, errorMsg: string, lobbies: any[]): void;
        /**
         @summary Called when application statistics update received. <br/>
         Override to handle request results.
         @method Photon.LoadBalancing.LoadBalancingClient#onAppStats
         @param {number} errorCode Result error code. Currently is always 0.
         @param {string} errorMsg Error message. Currently is always empty.
         @param {object} stats Application statistics.
         @property {object} stats Application statistics.
         @property {number} stats.peerCount Count of players currently online on Game servers.
         @property {number} stats.masterPeerCount Count of players on Master server (looking for game).
         @property {number} stats.gameCount Count of games currently in use (includes invisible and full rooms, so it doesn't match lobby list).
         */
        onAppStats(errorCode: number, errorMsg: string, stats: any): void;
        /**
         @summary Called when {@link Photon.LoadBalancing.LoadBalancingClient#getRegions getRegions} request completed.<br/>
         Override to handle request results.
         @param {number} errorCode Result error code. 0 if request is successful.
         @param {string} errorMsg Error message.
         @param {object} regions Object with region codes as keys and Master servers addresses as values.
         */
        onGetRegionsResult(errorCode: number, errorMsg: string, regions: {
            [index: string]: string;
        }): void;
        /**
         @summary Called when {@link Photon.LoadBalancing.LoadBalancingClient#webRpc webRpc} request completed.<br/>
         Override to handle request results.
         @method Photon.LoadBalancing.LoadBalancingClient#onWebRpcResult
         @param {number} errorCode Result error code. 0 if request is successful.
         @param {string} message Error message if errorCode ~ = 0 or optional message returned by remote procedure.
         @param {string} uriPath Request path.
         @param {number} resultCode Result code returned by remote procedure.
         @param {object} data Data returned by remote procedure.
         */
        onWebRpcResult(errorCode: number, message: string, uriPath: string, resultCode: number, data: any): void;
        /**
         @summary Called when the server reports non-critical error.<br/>
         Override to handle the event.
         @method Photon.LoadBalancing.LoadBalancingClient#onServerErrorInfo
         @description In most cases this could be either:<br>
         1. an error from webhooks plugin (if HasErrorInfo is enabled), <a href=https://doc.photonengine.com/en-us/realtime/current/gameplay/web-extensions/webhooks#options> read more</a><br>
         2. an error sent from a custom server plugin via PluginHost.BroadcastErrorInfoEvent, see <a href=https://doc.photonengine.com/en-us/server/current/plugins/manual#handling_http_response> example</a><br>
         3. an error sent from the server, for example, when the limit of cached events has been exceeded in the room (all clients will be disconnected and the room will be closed in this case), <a href=https://doc.photonengine.com/en-us/realtime/current/gameplay/cached-events#special_considerations> read more</a><br>
         @param {string} info Error info.
         */
        onServerErrorInfo(info: string): void;
        /**
         @summary Override with creation of custom room (extended from Room): { return new CustomRoom(...); }
         @method Photon.LoadBalancing.LoadBalancingClient#roomFactory
         @param {string} name Room name. Pass to super() in custom actor constructor.
         */
        roomFactory(name: string): Room;
        /**
         @summary Override with creation of custom actor (extended from Actor): { return new CustomActor(...); }
         @method Photon.LoadBalancing.LoadBalancingClient#actorFactory
         @param {string} name Actor name. Pass to super() in custom room constructor.
         @param {number} actorNr Actor ID. Pass to super() in custom room constructor.
         @param {boolean} isLocal Actor is local. Pass to super() in custom room constructor.
         */
        actorFactory(name: string, actorNr: number, isLocal: boolean): Actor;
        /**
         @summary Returns local actor.
         Client always has local actor even if not joined.
         @method Photon.LoadBalancing.LoadBalancingClient#myActor
         @returns {Photon.LoadBalancing.Actor} Local actor.
         */
        myActor(): Actor;
        /**
         @summary Returns client's room.
         Client always has it's room even if not joined. It's used for room creation operation.
         @method Photon.LoadBalancing.LoadBalancingClient#myRoom
         @returns {Photon.LoadBalancing.Room} Current room.
         */
        myRoom(): Room;
        /**
         @summary Returns actors in room client currently joined including local actor.
         @method Photon.LoadBalancing.LoadBalancingClient#myRoomActors
         @returns {object} actorNr -> {@link Photon.LoadBalancing.Actor} map of actors in room.
         */
        myRoomActors(): {
            [index: number]: Actor;
        };
        /**
         @summary Returns numer of actors in room client currently joined including local actor.
         @method Photon.LoadBalancing.LoadBalancingClient#myRoomActorCount
         @returns {number} Number of actors.
         */
        myRoomActorCount(): number;
        myRoomActorsArray(): Actor[];
        /**
         @summary Actor number of the player who's the master of this Room. Note: This changes when the current master leaves the room.
         @method Photon.LoadBalancing.LoadBalancingClient#myRoomMasterActorNr
         @type {number}
         */
        myRoomMasterActorNr(): number;
        /**
         @summary Triggers game server Round Trip Time measurement.
         @method Photon.LoadBalancing.LoadBalancingClient#updateRtt
         */
        updateRtt(): void;
        /**
         @summary Fetches server time from the game server and updates the base value used for extrapolation in {@link Photon.LoadBalancing.LoadBalancingClient#getServerTimeMs getServerTimeMs()}.
         @method Photon.LoadBalancing.LoadBalancingClient#syncServerTime
         */
        syncServerTime(): void;
        /**
         @summary Returns the latest measurement of game server Round Trip Time.<br/>
         RTT is measured once on connection and then on each {@link Photon.LoadBalancing.LoadBalancingClient#updateRtt updateRtt()} call.
         @method Photon.LoadBalancing.LoadBalancingClient#getRtt
         @type {number}
         */
        getRtt(): number;
        /**
         @summary Returns game server time extrapolation in milliseconds based on the server time fetched on connection or on {@link Photon.LoadBalancing.LoadBalancingClient#syncServerTime syncServerTime()} call.<br/>
         The server time is a signed 32 bit integer making a full cycle in 49.71 days.
         @method Photon.LoadBalancing.LoadBalancingClient#getServerTimeMs
         @type {number}
         */
        getServerTimeMs(): number;
        private roomFactoryInternal;
        private actorFactoryInternal;
        /**
         @classdesc Implements the Photon LoadBalancing workflow. This class should be extended to handle system or custom events and operation responses.
         @constructor Photon.LoadBalancing.LoadBalancingClient
         @param {Photon.ConnectionProtocol} protocol Connecton protocol.
         @param {string} appId Cloud application ID.
         @param {string} appVersion Cloud application version.
         */
        constructor(protocol: number, appId: string, appVersion: string);
        /**
         @summary Changes default NameServer address and port before connecting to NameServer.
         @method Photon.LoadBalancing.LoadBalancingClient#setNameServerAddress
         @param {string} address New address and port.
         */
        setNameServerAddress(address: string): void;
        /**
         @summary Returns current NameServer address.
         @method Photon.LoadBalancing.LoadBalancingClient#getNameServerAddress
         @returns {string} NameServer address address.
         */
        getNameServerAddress(): string;
        /**
         @summary Changes default Master server address and port before connecting to Master server.
         @method Photon.LoadBalancing.LoadBalancingClient#setMasterServerAddress
         @param {string} address New address and port.
         */
        setMasterServerAddress(address: string): void;
        /**
         @summary Returns current Master server address.
         @method Photon.LoadBalancing.LoadBalancingClient#getMasterServerAddress
         @returns {string} Master server address.
         */
        getMasterServerAddress(): string;
        /**
         @summary Sets user ID required for authentication and FindFriends service. The value will be used the next time you connect. Set this ID before you connect, not while being connected.
         @method Photon.LoadBalancing.LoadBalancingClient#setUserId
         @param {string} userId New user id.
         */
        setUserId(userId: string): void;
        /**
         @summary Returns previously set user id.
         @method Photon.LoadBalancing.LoadBalancingClient#getUserId
         @returns {string} User id.
         */
        getUserId(): string;
        /**
         @summary Enables custom authentication and sets it's parameters.
         @method Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication
         @param {string} authParameters This string must contain any (http get) parameters expected by the used authentication service.
         @param {Photon.LoadBalancing.Constants.CustomAuthenticationType} [authType=Photon.LoadBalancing.Constants.CustomAuthenticationType.Custom] The type of custom authentication provider that should be used.
         @param {any} [authData] The data to be passed-on to the auth service via POST. String passed as is, objects as application/json
         */
        setCustomAuthentication(authParameters: string, authType?: number, authData?: any): void;
        /**
         @summary Starts connection to Master server.
         @method Photon.LoadBalancing.LoadBalancingClient#connect
         @param {object} [options] Additional options
         @property {object} options Additional options
         @property {boolean} [options.keepMasterConnection=false] Don't disconnect from Master server after joining room.
         @property {string} [options.lobbyName] Name of the lobby connect to.
         @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
         @property {boolean} [options.lobbyStats=false] If true, Master server will be sending lobbies statistics periodically.<br/> Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>Alternatively, {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats} can be used.
         @returns {boolean} True if current client state allows connection.
         */
        connect(options?: {
        keepMasterConnection?: boolean;
        lobbyName?: string;
        lobbyType?: number;
        lobbyStats?: boolean;
    }): boolean;
    /**
     @summary Starts connection to NameServer.
     @method Photon.LoadBalancing.LoadBalancingClient#connectToNameServer
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {string} [options.region] If specified, Connect to region master after succesfull connection to name server
     @property {string} [options.lobbyName] Name of the lobby connect to.
     @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
     @property {boolean} [options.lobbyStats=false] If true, Master server will be sending lobbies statistics periodically.<br/> Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>Alternatively, {@link Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats requestLobbyStats} can be used.
     @property {boolean} [options.keepMasterConnection=false] Don't disconnect from Master server after joining room.
     @returns {boolean} True if current client state allows connection.
     */
    connectToNameServer(options?: {
        region?: string;
        lobbyName?: string;
        lobbyType?: number;
        lobbyStats?: boolean;
        keepMasterConnection?: boolean;
    }): boolean;
    /**
     @summary Can be used to reconnect to the master server after a disconnect.
     Common use case: Press the Lock Button on a iOS device and you get disconnected immediately
     @method Photon.LoadBalancing.LoadBalancingClient#reconnectToMaster
     @returns {boolean} True if current client state allows reconnection.
     */
    reconnectToMaster(): boolean;
    /**
     @summary Can be used to return to a room quickly by directly reconnecting to a game server to rejoin a room.
     Rejoining room will not send any player properties. Instead client will receive up-to-date ones from server.
     If you want to set new player properties, do it once rejoined.
     @method Photon.LoadBalancing.LoadBalancingClient#reconnectToMaster
     @returns {boolean} True if current client state allows reconnection.
     */
    reconnectAndRejoin(): boolean;
    private fillCreateRoomOptions;
    /**
     @summary Creates a new room on the server (or fails when the name is already taken). Takes parameters (except name) for new room from myRoom() object. Set them before call.
     @method Photon.LoadBalancing.LoadBalancingClient#createRoomFromMy
     @param {string} [roomName] New room name. Assigned automatically by server if empty or not specified.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {string} [options.lobbyName] Name of the lobby to create room in.
     @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
     */
    createRoomFromMy(roomName?: string, options?: CreateRoomOptions): void;
    copyCreateOptionsFromMyRoom(options?: CreateRoomOptions): CreateRoomOptions;
    /**
     @summary Creates a new room on the server (or fails when the name is already taken).
     @method Photon.LoadBalancing.LoadBalancingClient#createRoom
     @param {string} [roomName] The name to create a room with. Must be unique and not in use or can't be created. If not specified or null, the server will assign a GUID as name.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {boolean} [options.isVisible=true] Shows the room in the lobby's room list.
     @property {boolean} [options.isOpen=true] Keeps players from joining the room (or opens it to everyone).
     @property {number} [options.maxPlayers=0] Max players before room is considered full (but still listed).
     @property {object} [options.customGameProperties] Custom properties to apply to the room on creation (use string-typed keys but short ones).
     @property {string[]} [options.propsListedInLobby] Defines the custom room properties that get listed in the lobby.
     @property {number} [options.emptyRoomLiveTime=0] Room live time (ms) in the server room cache after all clients have left the room.
     @property {number} [options.suspendedPlayerLiveTime=0] Player live time (ms) in the room after player suspended.
     @property {string[]} [options.plugins] Expected server plugins.
     @property {string} [options.lobbyName=""] Name of the lobby to create room in.
     @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
     @property {string[]} [options.expectedUsers] Expected users.
     @returns {boolean} True if current client state allows connection.
     */
    createRoom(roomName?: string, options?: CreateRoomOptions): boolean;
    /**
     @summary Joins a room by name and sets this player's properties.
     @method Photon.LoadBalancing.LoadBalancingClient#joinRoom
     @param {string} roomName The name of the room to join. Must be existing already, open and non-full or can't be joined.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {boolean} [options.rejoin=false] Rejoin using current userId.
     @property {boolean} [options.createIfNotExists=false] Create room if not exists.
     @property {string[]} [options.expectedUsers] Expected users.
     @param {object} [createOptions] Room options for creation
     @property {object} createOptions Room options for creation
     @property {boolean} [createOptions.isVisible=true] Shows the room in the lobby's room list.
     @property {boolean} [createOptions.isOpen=true] Keeps players from joining the room (or opens it to everyone).
     @property {number} [createOptions.maxPlayers=0] Max players before room is considered full (but still listed).
     @property {object} [createOptions.customGameProperties] Custom properties to apply to the room on creation (use string-typed keys but short ones).
     @property {string[]} [createOptions.propsListedInLobby] Defines the custom room properties that get listed in the lobby.
     @property {number} [createOptions.emptyRoomLiveTime=0] Room live time (ms) in the server room cache after all clients have left the room.
     @property {number} [createOptions.suspendedPlayerLiveTime=0] Player live time (ms) in the room after player suspended.
     @property {string[]} [createOptions.plugins] Informs the server of the expected plugin setup.
     @property {string} [createOptions.lobbyName=""] Name of the lobby to create room in.
     @property {Photon.LoadBalancing.Constants.LobbyType} [createOptions.lobbyType=LobbyType.Default] Type of the lobby.
     @returns {boolean} If the operation will be sent (requires connection to Master Server).
     */
    joinRoom(roomName: string, options?: JoinRoomOptions, createOptions?: CreateIfNotExistsRoomOptions): boolean;
    private fillJoinRandomRoomOptions;
    /**
     @summary Joins a random, available room.
     This operation fails if all rooms are closed or full.
     @method Photon.LoadBalancing.LoadBalancingClient#joinRandomRoom
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {object} [options.expectedCustomRoomProperties] If specified, a room will only be joined, if it matches these custom properties. Use null to accept rooms with any properties.
     @property {number} [options.expectedMaxPlayers] If specified, filters for a particular maxPlayer setting. Use 0 to accept any maxPlayer value.
     @property {Photon.LoadBalancing.Constants.MatchmakingMode} [options.matchmakingMode=MatchmakingMode.FillRoom] Selects one of the available matchmaking algorithms.
     @property {string} [options.lobbyName] Name of the lobby to search rooms in.
     @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
     @property {string} [options.sqlLobbyFilter] Basically the "where" clause of a sql statement. Examples: 'C0 = 1 AND C2 > 50'. 'C5 = "Map2" AND C2 > 10 AND C2 < 20'
     @property {string[]} [options.expectedUsers] Expected users.
     @returns {boolean} If the operation will be sent (requires connection to Master Server).
     */
    joinRandomRoom(options?: JoinRandomRoomOptions): boolean;
    /**
     @summary Attempts to join a room that matches the specified filter and creates a room if none found.
     This operation is a combination of filter-based random matchmaking with the option to create a new room,
     if no fitting room exists.
     The benefit of that is that the room creation is done by the same operation and the room can be found
     by the very next client, looking for similar rooms.

     There are separate parameters for joining and creating a room.

     This method can only be called while connected to a Master Server.
     This client's State is set to ClientState.Joining immediately.

     Either IMatchmakingCallbacks.OnJoinedRoom or IMatchmakingCallbacks.OnCreatedRoom get called.

     More about matchmaking:
     https://doc.photonengine.com/en-us/realtime/current/reference/matchmaking-and-lobby

     Check the return value to make sure the operation will be called on the server.
     Note: There will be no callbacks if this method returned false.
     @method Photon.LoadBalancing.LoadBalancingClient#joinRandomOrCreateRoom
     @param {object} [options] Additional join options
     @property {object} options Additional options
     @property {object} [options.expectedCustomRoomProperties] If specified, a room will only be joined, if it matches these custom properties. Use null to accept rooms with any properties.
     @property {number} [options.expectedMaxPlayers] If specified, filters for a particular maxPlayer setting. Use 0 to accept any maxPlayer value.
     @property {Photon.LoadBalancing.Constants.MatchmakingMode} [options.matchmakingMode=MatchmakingMode.FillRoom] Selects one of the available matchmaking algorithms.
     @property {string} [options.lobbyName] Name of the lobby to search rooms in.
     @property {Photon.LoadBalancing.Constants.LobbyType} [options.lobbyType=LobbyType.Default] Type of the lobby.
     @property {string} [options.sqlLobbyFilter] Basically the "where" clause of a sql statement. Examples: 'C0 = 1 AND C2 > 50'. 'C5 = "Map2" AND C2 > 10 AND C2 < 20'
     @property {string[]} [options.expectedUsers] Expected users.
     @param {string} [createRoomName] New room name. Assigned automatically by server if empty or not specified.
     @param {object} [createOptions] Additional create options
     @property {object} createOptions Additional create options
     @property {boolean} [createOptions.isVisible=true] Shows the room in the lobby's room list.
     @property {boolean} [createOptions.isOpen=true] Keeps players from joining the room (or opens it to everyone).
     @property {number} [createOptions.maxPlayers=0] Max players before room is considered full (but still listed).
     @property {object} [createOptions.customGameProperties] Custom properties to apply to the room on creation (use string-typed keys but short ones).
     @property {string[]} [createOptions.propsListedInLobby] Defines the custom room properties that get listed in the lobby.
     @property {number} [createOptions.emptyRoomLiveTime=0] Room live time (ms) in the server room cache after all clients have left the room.
     @property {number} [createOptions.suspendedPlayerLiveTime=0] Player live time (ms) in the room after player suspended.
     @property {string[]} [createOptions.plugins] Expected server plugins.
     @returns {boolean} If the operation will be sent (requires connection to Master Server).
     */
    joinRandomOrCreateRoom(options?: JoinRandomRoomOptions, createRoomName?: string, createOptions?: CreateIfNotExistsRandomRoomOptions): boolean;
    _setPropertiesOfRoom(properties: {}, webForward: boolean, expectedProperties: any): void;
    _setPropertiesOfActor(actorNr: number, properties: {}, webForward: boolean, expectedProperties: any): void;
    /**
     @summary Disconnects from all servers.
     @method Photon.LoadBalancing.LoadBalancingClient#disconnect
     */
    disconnect(): void;
    /**
     @summary Disconnects client from Game server keeping player in room (to rejoin later) and connects to Master server if not connected.
     @method Photon.LoadBalancing.LoadBalancingClient#suspendRoom
     @property {object} options Additional options
     @property {boolean} [options.sendAuthCookie] Securely transmit the encrypted object AuthCookie to the web service in PathLeave webhook when available
     */
    suspendRoom(options?: {
        sendAuthCookie?: boolean;
    }): void;
    /**
     @summary Leaves room and connects to Master server if not connected.
     @method Photon.LoadBalancing.LoadBalancingClient#leaveRoom
     @property {object} options Additional options
     @property {boolean} [options.sendAuthCookie] Securely transmit the encrypted object AuthCookie to the web service in PathLeave webhook when available
     */
    leaveRoom(options?: {
        sendAuthCookie?: boolean;
    }): void;
    /**
     @summary Raises game custom event
     @method Photon.LoadBalancing.LoadBalancingClient#raiseEvent
     @param {number} eventCode Identifies this type of event (and the content). Your game's event codes can start with 0.
     @param {object} [data] Custom data you want to send along (use null, if none).
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {number} [options.interestGroup] The ID of the interest group this event goes to (exclusively).
     @property {Photon.LoadBalancing.Constants.EventCaching} [options.cache=EventCaching.DoNotCache] Events can be cached (merged and removed) for players joining later on.
     @property {Photon.LoadBalancing.Constants.ReceiverGroup} [options.receivers=ReceiverGroup.Others] Defines to which group of players the event is passed on.
     @property {number[]} [options.targetActors] Defines the target players who should receive the event (use only for small target groups).
     @property {boolean} [options.webForward=false] Forward to web hook.
     */
    raiseEvent(eventCode: number, data?: any, options?: {
        interestGroup?: number;
        cache?: number;
        receivers?: number;
        targetActors?: number[];
        webForward?: boolean;
    }): void;
    /**
     @summary Changes client's interest groups (for events in room).<br/>
     Note the difference between passing null and []: null won't add/remove any groups, [] will add/remove all (existing) groups.<br/>
     First, removing groups is executed. This way, you could leave all groups and join only the ones provided.
     @method Photon.LoadBalancing.LoadBalancingClient#changeGroups
     @param {number[]} groupsToRemove Groups to remove from interest. Null will not leave any. A [] will remove all.
     @param {number[]} groupsToAdd Groups to add to interest. Null will not add any. A [] will add all current.
     */
    changeGroups(groupsToRemove: number[], groupsToAdd: number[]): void;
    /**
     @summary Requests Master server for actors online status and joined rooms.<br/>
     Override {@link Photon.LoadBalancing.LoadBalancingClient#onFindFriendsResult onFindFriendsResult} to handle request results.
     @method Photon.LoadBalancing.LoadBalancingClient#findFriends
     @param {string[]} friendsToFind Actors names.
     **/
    findFriends(friendsToFind: string[]): void;
    /**
     @summary Requests Master server for lobbies statistics.<br/>
     Override {@link Photon.LoadBalancing.LoadBalancingClient#onLobbyStats onLobbyStats} to handle request results.<br/>
     Alternatively, automated updates can be set up during {@link Photon.LoadBalancing.LoadBalancingClient#connect connect}.
     @method Photon.LoadBalancing.LoadBalancingClient#requestLobbyStats
     @param {any[]} lobbiesToRequest Array of lobbies id pairs [ [lobbyName1, lobbyType1], [lobbyName2, lobbyType2], ... ]. If not specified or null, statistics for all lobbies requested.

     **/
    requestLobbyStats(lobbiesToRequest?: any[][]): void;
    private requestLobbyStatsErr;
    /**
     @summary Requests NameServer for regions list.<br/>
     Override {@link Photon.LoadBalancing.LoadBalancingClient#onGetRegionsResult onGetRegionsResult} to handle request results.<br/>
     @method Photon.LoadBalancing.LoadBalancingClient#getRegions
     **/
    getRegions(): void;
    /**
     @summary Sends web rpc request to Master server.<br/ >
     Override {@link Photon.LoadBalancing.LoadBalancingClient#onWebRpcResult onWebRpcResult} to handle request results.<br/>
     @method Photon.LoadBalancing.LoadBalancingClient#webRpc
     @param {string} uriPath Request path.
     @param {object} parameters Request parameters.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {boolean} [options.sendAuthCookie] Defines if the authentication cookie gets sent to a WebHook (if setup)
     **/
    webRpc(uriPath: string, parameters?: {}, options?: {
        sendAuthCookie?: boolean;
    }): void;
    /**
     @summary Connects to a specific region's Master server, using the NameServer to find the IP.
     @method Photon.LoadBalancing.LoadBalancingClient#connectToRegionMaster
     @param {string} region Region connect to Master server of.
     @returns {boolean} True if current client state allows connection.
     **/
    connectToRegionMaster(region: string): boolean;
    /**
     @summary Checks if client is connected to Master server (usually joined to lobby and receives room list updates).
     @method Photon.LoadBalancing.LoadBalancingClient#isConnectedToMaster
     @returns {boolean} True if client is connected to Master server.
     */
    isConnectedToMaster(): boolean | undefined;
    /**
     @summary Checks if client is connected to NameServer server.
     @method Photon.LoadBalancing.LoadBalancingClient#isConnectedToNameServer
     @returns {boolean} True if client is connected to NameServer server.
     */
    isConnectedToNameServer(): boolean | undefined;
    /**
     @summary Checks if client is in lobby and ready to join or create game.
     @method Photon.LoadBalancing.LoadBalancingClient#isInLobby
     @returns {boolean} True if client is in lobby.
     */
    isInLobby(): boolean;
    /**
     @summary Checks if client is joined to game.
     @method Photon.LoadBalancing.LoadBalancingClient#isJoinedToRoom
     @returns {boolean} True if client is joined to game.
     */
    isJoinedToRoom(): boolean;
    /**
     @deprecated Use isJoinedToRoom()
     */
    isConnectedToGame(): boolean;
    /**
     @summary Current room list from Master server.
     @method Photon.LoadBalancing.LoadBalancingClient#availableRooms
     @returns {{@link Photon.LoadBalancing.RoomInfo}[]} Current room list
     */
    availableRooms(): RoomInfo[];
    /**
     @summary Sets client logger level
     @method Photon.LoadBalancing.LoadBalancingClient#setLogLevel
     @param {Exitgames.Common.Logger.Level} level Logging level.
     */
    setLogLevel(level: number): void;
    private connectionProtocol;
    private masterServerAddress;
    private nameServerAddress;
    private nameServerPeer?;
    masterPeer?: MasterPeer;
    gamePeer?: GamePeer;
    private gamePeerWaitingForDisconnect;
    autoJoinLobby: boolean;
    private connectOptions;
    private createRoomOptions?;
    private joinRoomOptions;
    private currentRoom;
    private roomInfos;
    private roomInfosDict;
    private addRoom;
    private clearRooms;
    private purgeRemovedRooms;
    private _myActor;
    private actors;
    private actorsArray;
    private lowestActorId;
    private addActor;
    private removeActor;
    private clearActors;
    private userId;
    private userAuthType;
    private userAuthParameters;
    private userAuthData;
    private findFriendsRequestList;
    private lobbyStatsRequestList;
    state: number;
    logger: Exitgames.Common.Logger;
    private changeState;
    private createRoomInternal;
    private updateUserIdAndNickname;
    private initNameServerPeer;
    initMasterPeer(mp: Photon.LoadBalancing.MasterPeer): void;
    private connectToGameServer;
    private initGamePeer;
    private _cleanupNameServerPeerData;
    private _cleanupMasterPeerData;
    private _cleanupGamePeerData;
    private _onOperationResponseInternal2;
    private _onErrorInternal;
    private validNextState;
    private initValidNextState;
    private checkNextState;
    static PeerErrorCode: {
        /**
         @summary Enum for client peers error codes.
         @member Photon.LoadBalancing.LoadBalancingClient.PeerErrorCode
         @readonly
         @property {number} Ok No Error.
         @property {number} MasterError General Master server peer error.
         @property {number} MasterConnectFailed Master server connection error.
         @property {number} MasterConnectClosed Disconnected from Master server.
         @property {number} MasterTimeout Disconnected from Master server for timeout.
         @property {number} MasterEncryptionEstablishError Master server encryption establishing failed.
         @property {number} MasterAuthenticationFailed Master server authentication failed.
         @property {number} GameError General Game server peer error.
         @property {number} GameConnectFailed Game server connection error.
         @property {number} GameConnectClosed Disconnected from Game server.
         @property {number} GameTimeout Disconnected from Game server for timeout.
         @property {number} GameEncryptionEstablishError Game server encryption establishing failed.
         @property {number} GameAuthenticationFailed Game server authentication failed.
         @property {number} NameServerError General NameServer peer error.
         @property {number} NameServerConnectFailed NameServer connection error.
         @property {number} NameServerConnectClosed Disconnected from NameServer.
         @property {number} NameServerTimeout Disconnected from NameServer for timeout.
         @property {number} NameServerEncryptionEstablishError NameServer encryption establishing failed.
         @property {number} NameServerAuthenticationFailed NameServer authentication failed.
         */
        Ok: number;
        MasterError: number;
        MasterConnectFailed: number;
        MasterConnectClosed: number;
        MasterTimeout: number;
        MasterEncryptionEstablishError: number;
        MasterAuthenticationFailed: number;
        GameError: number;
        GameConnectFailed: number;
        GameConnectClosed: number;
        GameTimeout: number;
        GameEncryptionEstablishError: number;
        GameAuthenticationFailed: number;
        NameServerError: number;
        NameServerConnectFailed: number;
        NameServerConnectClosed: number;
        NameServerTimeout: number;
        NameServerEncryptionEstablishError: number;
        NameServerAuthenticationFailed: number;
    };
    static State: {
        /**
         @summary Enum for client states.
         @member Photon.LoadBalancing.LoadBalancingClient.State
         @readonly
         @property {number} Error Critical error occurred.
         @property {number} Uninitialized Client is created but not used yet.
         @property {number} ConnectingToNameServer Connecting to NameServer.
         @property {number} ConnectedToNameServer Connected to NameServer.
         @property {number} ConnectingToMasterserver Connecting to Master (includes connect, authenticate and joining the lobby).
         @property {number} ConnectedToMaster Connected to Master server.
         @property {number} JoinedLobby Connected to Master and joined lobby. Display room list and join/create rooms at will.
         @property {number} ConnectingToGameserver Connecting to Game server(client will authenticate and join/create game).
         @property {number} ConnectedToGameserver Connected to Game server (going to auth and join game).
         @property {number} Joined The client joined room.
         @property {number} Disconnected The client is no longer connected (to any server). Connect to Master to go on.
         */
        Error: number;
        Uninitialized: number;
        ConnectingToNameServer: number;
        ConnectedToNameServer: number;
        ConnectingToMasterserver: number;
        ConnectedToMaster: number;
        JoinedLobby: number;
        ConnectingToGameserver: number;
        ConnectedToGameserver: number;
        Joined: number;
        Disconnected: number;
    };
    private static stateName;
    /**
     @summary Converts {@link Photon.LoadBalancing.LoadBalancingClient.State State} element to string name.
     @method Photon.LoadBalancing.LoadBalancingClient.StateToName
     @param {Photon.LoadBalancing.LoadBalancingClient.State} state Client state enum element.
     @returns {string} Specified element name or undefined if not found.
     */
    static StateToName(value: number): string | undefined;
}
    class LbcPeer extends Photon.PhotonPeer {
        webRpc(uriPath: string, parameters?: {}, options?: {
        sendAuthCookie?: boolean;
    }): void;
    webRpcHandler(lbc: LoadBalancingClient): (d: any) => void;
}
    class NameServerPeer extends LbcPeer {
        private client;
        constructor(client: LoadBalancingClient, protocol: Photon.ConnectionProtocol, address: string, subprotocol: string);
        onUnhandledEvent(code: number, args: any): void;
        onUnhandledResponse(code: number, args: any): void;
        getRegions(appId: string): void;
        opAuth(appId: string, appVersion: string, userAuthType: number, userAuthParameters: string, userAuthData: string, userId: string, region: string): void;
    }
    class MasterPeer extends LbcPeer {
        private client;
        constructor(client: LoadBalancingClient, protocol: ConnectionProtocol, address: string, subprotocol: string);
        onUnhandledEvent(code: number, args: any): void;
        onUnhandledResponse(code: number, args: any): void;
        findFriends(friendsToFind: string[]): void;
        requestLobbyStats(lobbiesToRequest: any[][]): void;
    }
    class GamePeer extends LbcPeer {
        private client;
        constructor(client: LoadBalancingClient, protocol: Photon.ConnectionProtocol, address: string, subprotocol: string);
        onUnhandledEvent(code: number, args: any): void;
        onUnhandledResponse(code: number, args: any): void;
        raiseEvent(eventCode: number, data?: any, options?: {
        interestGroup?: number;
        cache?: number;
        receivers?: number;
        targetActors?: number[];
        webForward?: boolean;
    }): void;
    changeGroups(groupsToRemove: number[], groupsToAdd: number[]): void;
    private checkGroupNumber;
    private checkGroupArray;
}
}
/**
 Photon Load Balancing API Constants
 @namespace Photon.LoadBalancing.Constants
 */
declare module Photon.Lite.Constants {
    var LiteOpKey: {
        ActorList: number;
        ActorNr: number;
        ActorProperties: number;
        Add: number;
        Broadcast: number;
        Cache: number;
        Code: number;
        Data: number;
        GameId: number;
        GameProperties: number;
        Group: number;
        Properties: number;
        ReceiverGroup: number;
        Remove: number;
        TargetActorNr: number;
        EmptyRoomLiveTime: number;
    };
    var LiteEventCode: {
        Join: number;
        Leave: number;
        PropertiesChanged: number;
    };
    var LiteOpCode: {
        ChangeGroups: number;
        GetProperties: number;
        Join: number;
        Leave: number;
        RaiseEvent: number;
        SetProperties: number;
    };
}
declare module Photon.LoadBalancing.Constants {
    /**
     @summary Master and Game servers error codes.
     @member Photon.LoadBalancing.Constants.ErrorCode
     @readonly
     @property {number} Ok No Error.
     @property {number} OperationNotAllowedInCurrentState Operation can't be executed yet.
     @property {number} InvalidOperationCode The operation you called is not implemented on the server (application) you connect to. Make sure you run the fitting applications.
     @property {number} InternalServerError Something went wrong in the server. Try to reproduce and contact Exit Games.
     @property {number} InvalidAuthentication Authentication failed. Possible cause: AppId is unknown to Photon (in cloud service).
     @property {number} GameIdAlreadyExists GameId (name) already in use (can't create another). Change name.
     @property {number} GameFull Game is full. This can when players took over while you joined the game.
     @property {number} GameClosed Game is closed and can't be joined. Join another game.
     @property {number} ServerFull All servers are busy. This is a temporary issue and the game logic should try again after a brief wait time.
     @property {number} UserBlocked Not in use currently.
     @property {number} NoRandomMatchFound Random matchmaking only succeeds if a room exists thats neither closed nor full. Repeat in a few seconds or create a new room.
     @property {number} GameDoesNotExist Join can fail if the room (name) is not existing (anymore). This can happen when players leave while you join.
     @property {number} MaxCcuReached Authorization on the Photon Cloud failed becaus the concurrent users (CCU) limit of the app's subscription is reached.
     @property {number} InvalidRegion Authorization on the Photon Cloud failed because the app's subscription does not allow to use a particular region's server.
     @property {number} CustomAuthenticationFailed Custom Authentication of the user failed due to setup reasons (see Cloud Dashboard) or the provided user data (like username or token). Check error message for details.
     @property {number} AuthenticationTicketExpired The Authentication ticket expired. Usually, this is refreshed behind the scenes. Connect (and authorize) again.
     @property {number} PluginReportedError A server-side plugin (or webhook) failed to execute and reported an error. Check the OperationResponse.DebugMessage.
     @property {number} PluginMismatch CreateGame/JoinGame/Join operation fails if expected plugin does not correspond to loaded one.
     @property {number} JoinFailedPeerAlreadyJoined For join requests. Indicates the current peer already called join and is joined to the room.
     @property {number} JoinFailedFoundInactiveJoiner For join requests. Indicates the list of InactiveActors already contains an actor with the requested ActorNr or UserId.
     @property {number} JoinFailedWithRejoinerNotFound For join requests. Indicates the list of Actors (active and inactive) did not contain an actor with the requested ActorNr or UserId.
     @property {number} JoinFailedFoundExcludedUserId For join requests. Note: for future use - Indicates the requested UserId was found in the ExcludedList.
     @property {number} JoinFailedFoundActiveJoiner For join requests. Indicates the list of ActiveActors already contains an actor with the requested ActorNr or UserId.
     @property {number} HttpLimitReached For SetProerties and Raisevent (if flag HttpForward is true) requests. Indicates the maximum allowed http requests per minute was reached.
     @property {number} ExternalHttpCallFailed For WebRpc requests. Indicates the the call to the external service failed.
     @property {number} OperationLimitReached For operations with defined limits (as in calls per second, content count or size)
     @property {number} SlotErrorServer Error during matchmaking with slot reservation. E.g. the reserved slots can not exceed MaxPlayers.
     @property {number} InvalidEncryptionParameters Server will react with this error if invalid encryption parameters provided by token
     */
    var ErrorCode: {
        Ok: number;
        OperationNotAllowedInCurrentState: number;
        InvalidOperationCode: number;
        InternalServerError: number;
        InvalidAuthentication: number;
        GameIdAlreadyExists: number;
        GameFull: number;
        GameClosed: number;
        ServerFull: number;
        UserBlocked: number;
        NoRandomMatchFound: number;
        GameDoesNotExist: number;
        MaxCcuReached: number;
        InvalidRegion: number;
        CustomAuthenticationFailed: number;
        AuthenticationTicketExpired: number;
        PluginReportedError: number;
        PluginMismatch: number;
        JoinFailedPeerAlreadyJoined: number;
        JoinFailedFoundInactiveJoiner: number;
        JoinFailedWithRejoinerNotFound: number;
        JoinFailedFoundExcludedUserId: number;
        JoinFailedFoundActiveJoiner: number;
        HttpLimitReached: number;
        ExternalHttpCallFailed: number;
        OperationLimitReached: number;
        SlotError: number;
        InvalidEncryptionParameters: number;
    };
    /** End user doesn't need this */
    var ActorProperties: {
        PlayerName: number;
        UserId: number;
    };
    /** End user doesn't need this */
    var GameProperties: {
        MaxPlayers: number;
        IsVisible: number;
        IsOpen: number;
        PlayerCount: number;
        Removed: number;
        PropsListedInLobby: number;
        CleanupCacheOnLeave: number;
        MasterClientId: number;
        ExpectedUsers: number;
        PlayerTtl: number;
        EmptyRoomTtl: number;
    };
    /** End user doesn't need this */
    var EventCode: {
        GameList: number;
        GameListUpdate: number;
        QueueState: number;
        AppStats: number;
        AzureNodeInfo: number;
        Join: number;
        Leave: number;
        PropertiesChanged: number;
        Disconnect: number;
        LobbyStats: number;
        ErrorInfo: number;
        AuthEvent: number;
    };
    /** End user doesn't need this */
    var ParameterCode: {
        Address: number;
        PeerCount: number;
        GameCount: number;
        MasterPeerCount: number;
        UserId: number;
        ApplicationId: number;
        Position: number;
        MatchMakingType: number;
        GameList: number;
        Secret: number;
        AppVersion: number;
        AzureNodeInfo: number;
        AzureLocalNodeId: number;
        AzureMasterNodeId: number;
        RoomName: number;
        Broadcast: number;
        ActorList: number;
        ActorNr: number;
        PlayerProperties: number;
        CustomEventContent: number;
        Data: number;
        Code: number;
        GameProperties: number;
        Properties: number;
        TargetActorNr: number;
        ReceiverGroup: number;
        Cache: number;
        CleanupCacheOnLeave: number;
        Group: number;
        Remove: number;
        Add: number;
        EmptyRoomTTL: number;
        PlayerTTL: number;
        Plugins: number;
        ClientAuthenticationType: number;
        ClientAuthenticationParams: number;
        ClientAuthenticationData: number;
        JoinMode: number;
        MasterClientId: number;
        FindFriendsRequestList: number;
        FindFriendsResponseOnlineList: number;
        FindFriendsResponseRoomIdList: number;
        LobbyName: number;
        LobbyType: number;
        LobbyStats: number;
        Region: number;
        IsInactive: number;
        CheckUserOnJoin: number;
        ExpectedValues: number;
        UriPath: number;
        RpcCallParams: number;
        RpcCallRetCode: number;
        RpcCallRetMessage: number;
        RpcCallRetData: number;
        WebFlags: number;
        Nickname: number;
        PublishUserId: number;
        Info: number;
    };
    /**
     @summary Codes for parameters and events used in Photon Load Balancing API.
     @member Photon.LoadBalancing.Constants.OperationCode
     @readonly
     @property {number} Authenticate Authenticates this peer and connects to a virtual application.
     @property {number} JoinLobby Joins lobby (on Master).
     @property {number} LeaveLobby Leaves lobby (on Master).
     @property {number} CreateGame Creates a game (or fails if name exists).
     @property {number} JoinGame Joins room (by name).
     @property {number} JoinRandomGame Joins random room (on Master).
     @property {number} Leave Leaves the room.
     @property {number} RaiseEvent Raises event (in a room, for other actors/players).
     @property {number} SetProperties Sets Properties (of room or actor/player).
     @property {number} GetProperties Gets Properties.
     @property {number} ChangeGroups Changes interest groups in room.
     @property {number} FindFriends Requests Master server for actors online status and joined rooms.
     @property {number} LobbyStats Requests Master server for lobbies statistics.
     @property {number} GetRegions Gets list of regional servers from a NameServer.
     @property {number} Rpc Rpc operation.

     */
    var OperationCode: {
        Authenticate: number;
        JoinLobby: number;
        LeaveLobby: number;
        CreateGame: number;
        JoinGame: number;
        JoinRandomGame: number;
        Leave: number;
        RaiseEvent: number;
        SetProperties: number;
        GetProperties: number;
        ChangeGroups: number;
        FindFriends: number;
        LobbyStats: number;
        GetRegions: number;
        Rpc: number;
    };
    /**
     @summary Options for matchmaking rules for joinRandomGame.
     @member Photon.LoadBalancing.Constants.MatchmakingMode
     @readonly
     @property {number} FillRoom Default. FillRoom Fills up rooms (oldest first) to get players together as fast as possible. Makes most sense with MaxPlayers > 0 and games that can only start with more players.
     @property {number} SerialMatching Distributes players across available rooms sequentially but takes filter into account. Without filter, rooms get players evenly distributed.
     @property {number} RandomMatching Joins a (fully) random room. Expected properties must match but aside from this, any available room might be selected.
     */
    var MatchmakingMode: {
        FillRoom: number;
        SerialMatching: number;
        RandomMatching: number;
    };
    /**
     @summary Caching options for events.
     @member Photon.LoadBalancing.Constants.EventCaching
     @readonly
     @property {number} DoNotCache Default. Do not cache.
     @property {number} MergeCache Will merge this event's keys with those already cached.
     @property {number} ReplaceCache Replaces the event cache for this eventCode with this event's content.
     @property {number} RemoveCache Removes this event (by eventCode) from the cache.
     @property {number} AddToRoomCache Adds an event to the room's cache.
     @property {number} AddToRoomCacheGlobal Adds this event to the cache for actor 0 (becoming a "globally owned" event in the cache).
     @property {number} RemoveFromRoomCache Remove fitting event from the room's cache.
     @property {number} RemoveFromRoomCacheForActorsLeft Removes events of players who already left the room (cleaning up).
     */
    var EventCaching: {
        DoNotCache: number;
        MergeCache: number;
        ReplaceCache: number;
        RemoveCache: number;
        AddToRoomCache: number;
        AddToRoomCacheGlobal: number;
        RemoveFromRoomCache: number;
        RemoveFromRoomCacheForActorsLeft: number;
    };
    /**
     @summary Options for choosing room's actors who should receive events.
     @member Photon.LoadBalancing.Constants.ReceiverGroup
     @readonly
     @property {number} Others Default. Anyone else gets my event.
     @property {number} All Everyone in the current room (including this peer) will get this event.
     @property {number} MasterClient The "master client" does not have special rights but is the one who is in this room the longest time.
     */
    var ReceiverGroup: {
        Others: number;
        All: number;
        MasterClient: number;
    };
    /**
     @summary Options for optional "Custom Authentication" services used with Photon.
     @member Photon.LoadBalancing.Constants.CustomAuthenticationType
     @readonly
     @property {number} Custom Default. Use a custom authentification service.
     @property {number} Steam Authenticates users by their Steam Account. Set Steam's ticket as "ticket" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} Facebook Authenticates users by their Facebook Account. Set Facebooks's tocken as "token" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} Oculus Authenticates users by their Oculus Account and token. Set Oculus' userid as "userid" and nonce as "nonce" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} PlayStation4 Authenticates users by their PSN Account and token on PS4. Set token as "token", env as "env" and userName as "userName" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} Xbox Authenticates users by their Xbox Account. Pass the XSTS token via "authData" parameter of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} Viveport Authenticates users by their HTC Viveport Account. Set userToken as "userToken" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} NintendoSwitch Authenticates users by their NSA ID. Set token  as "token" and appversion as "appversion" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}(). The appversion is optional.
     @property {number} PlayStation5 Authenticates users by their PSN Account and token on PS5. Set token as "token", env as "env" and userName as "userName" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} Epic Authenticates users with Epic Online Services (EOS). Set token as "token" and ownershipToken as "ownershipToken" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}(). The ownershipToken is optional.
     @property {number} FacebookGaming Authenticates users with Facebook Gaming api. Set token as "token" via "authParameters" of {@link Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication setCustomAuthentication}().
     @property {number} None Disables custom authentification.
     */
    var CustomAuthenticationType: {
        Custom: number;
        Steam: number;
        Facebook: number;
        Oculus: number;
        PlayStation4: number;
        Xbox: number;
        Viveport: number;
        NintendoSwitch: number;
        PlayStation5: number;
        Epic: number;
        FacebookGaming: number;
        None: number;
    };
    /**
     @summary Options of lobby types available. Lobby types might be implemented in certain Photon versions and won't be available on older servers.
     @member Photon.LoadBalancing.Constants.LobbyType
     @readonly
     @property {number} Default This lobby is used unless another is defined by game or JoinRandom. Room-lists will be sent and JoinRandomRoom can filter by matching properties.
     @property {number} SqlLobby This lobby type lists rooms like Default but JoinRandom has a parameter for SQL-like "where" clauses for filtering. This allows bigger, less, or and and combinations.
     @property {number} AsyncRandomLobby This lobby does not send lists of games. It is only used for OpJoinRandomRoom. It keeps rooms available for a while when there are only inactive users left.
     **/
    var LobbyType: {
        Default: number;
        SqlLobby: number;
        AsyncRandomLobby: number;
    };
}
/**
 Photon Chat API Constants
 @namespace Photon.Chat.Constants
 */
declare module Photon.Chat.Constants {
    var ParameterCode: {
        Channels: number;
        Channel: number;
        Messages: number;
        Message: number;
        Senders: number;
        Sender: number;
        ChannelUserCount: number;
        UserId: number;
        MsgId: number;
        MsgIds: number;
        SubscribeResults: number;
        Status: number;
        Friends: number;
        SkipMessage: number;
        HistoryLength: number;
        WebFlags: number;
        Properties: number;
        ChannelSubscribers: number;
    };
    var OperationCode: {
        Subscribe: number;
        Unsubscribe: number;
        Publish: number;
        SendPrivate: number;
        ChannelHistory: number;
        UpdateStatus: number;
        AddFriendds: number;
        RemoveFriends: number;
    };
    var EventCode: {
        ChatMessages: number;
        Users: number;
        PrivateMessage: number;
        FriendsList: number;
        StatusUpdate: number;
        Subscribe: number;
        Unsubscribe: number;
        UserSubscribe: number;
        UserUnsubscribe: number;
    };
    /**
     @summary Contains commonly used status values for {@link Photon.Chat.ChatClient#setUserStatus}.You can define your own.<br/>
     While "online"(Online and up), the status message will be sent to anyone who has you on his friend list.<br/>
     Define custom online status values as you like with these rules:<br/>
     0: Means "offline".It will be used when you are not connected. In this status, there is no status message.<br/>
     1: Means "invisible" and is sent to friends as "offline". They see status 0, no message but you can chat.<br/>
     2: And any higher value will be treated as "online". Status can be set.<br/>
     @readonly
     @property {number} Offline Offline.
     @property {number} Invisible Offline. Be invisible to everyone. Sends no message.
     @property {number} Online Online and available.
     @property {number} Away Online but not available.
     @property {number} Dnd Do not disturb.
     @property {number} Lfg Looking For Game / Group. Could be used when you want to be invited or do matchmaking.
     @property {number} Playing Could be used when in a room, playing.
     @member Photon.Chat.Constants.UserStatus
     */
    var UserStatus: {
        Offline: number;
        Invisible: number;
        Online: number;
        Away: number;
        Dnd: number;
        Lfg: number;
        Playing: number;
    };
    var ChannelProperties: {
        MaxSubscribers: number;
        PublishSubscribers: number;
    };
    /**
     @summary Converts {@link Photon.Chat.Constants.UserStatus} element to string name.
     @param {Photon.Chat.Constants.UserStatus} status User status enum element.
     @returns {string} Specified element name or undefined if not found.
     @method Photon.Chat.Constants.UserStatusToName
     */
    function UserStatusToName(status: number): string | undefined;
}
/**
 Photon Chat API
 @namespace Photon.Chat
 */
declare module Photon.Chat {
    /**
     @class Photon.Chat.Message
     @classdesc Encapsulates chat message data.
     */
    class Message {
        private sender;
        private content;
        constructor(sender: string, content: any);
        /**
         @summary Returns message sender.
         @return {string} Message sender.
         @method Photon.Chat.Message#getSender
         */
        getSender(): string;
        /**
         @summary Returns message content.
         @return {any} Message content.
         @method Photon.Chat.Message#getContent
         */
        getContent(): any;
    }
    /**
     @class Photon.Chat.Channel
     @classdesc Represents chat channel.
     */
    class Channel {
        private name;
        private isPrivat;
        private messages;
        private lastId;
        private properties;
        private publishSubscribers;
        private maxSubscribers;
        private subscribers;
        constructor(name: string, isPrivat: boolean);
        /**
         @summary Returns channel name (counterpart user id for private channel).
         @return {string} Channel name.
         @method Photon.Chat.Channel#getName
         */
        getName(): string;
        /**
         @summary Returns true if channel is private.
         @return {boolean} Channel private status.
         @method Photon.Chat.Channel#isPrivate
         */
        isPrivate(): boolean;
        /**
         @summary Returns messages cache.
         @return {{@link Photon.Chat.Message}[]} Array of messages.
         @method Photon.Chat.Channel#getMessages
         */
        getMessages(): Message[];
        /**
         @summary Returns ID of the last message received.
         @return {number} Last message ID.
         @method Photon.Chat.Channel#getLastId
         */
        getLastId(): number;
        /**
         @summary Clears messages cache.
         @method Photon.Chat.Channel#clearMessages
         */
        clearMessages(): void;
        addMessages(senders: string[], messages: any[]): any[];
        readProperties(props: {
            [index: string]: any;
        }): void;
        addSubscriber(user: string): boolean;
        removeSubscriber(user: string): boolean;
        reset(): void;
    }
    class ChatClient extends Photon.LoadBalancing.LoadBalancingClient {
        DefaultMaxSubscribers: number;
        /**
         @classdesc Implements the Photon Chat API workflow.<br/>
         This class should be extended to handle system or custom events and operation responses.<br/>

         @borrows Photon.LoadBalancing.LoadBalancingClient#setCustomAuthentication
         //            @borrows Photon.LoadBalancing.LoadBalancingClient#connectToNameServer // overrides with connectToNameServer with different parameters
         @borrows Photon.LoadBalancing.LoadBalancingClient#getRegions
         @borrows Photon.LoadBalancing.LoadBalancingClient#onGetRegionsResult
         @borrows Photon.LoadBalancing.LoadBalancingClient#isConnectedToNameServer
         @borrows Photon.LoadBalancing.LoadBalancingClient#disconnect
         @borrows Photon.LoadBalancing.LoadBalancingClient#setLogLevel

         @constructor Photon.Chat.ChatClient
         @param {Photon.ConnectionProtocol} protocol Connecton protocol.
         @param {string} appId Cloud application ID.
         @param {string} appVersion Cloud application version.
         */
        constructor(protocol: number, appId: string, appVersion: string);
        /**
         @summary Called on client state change. Override to handle it.
         @method Photon.Chat.ChatClient#onStateChange
         @param {Photon.Chat.ChatClient.ChatState} state New client state.
         */
        onStateChange(state: number): void;
        /**
         @summary Called if client error occures. Override to handle it.
         @method Chat.ChatClient#onError
         @param {Chat.ChatClient.ChatPeerErrorCode} errorCode Client error code.
         @param {string} errorMsg Error message.
         */
        onError(errorCode: number, errorMsg: string): void;
        /**
         @summary Called when {@link Photon.Chat.ChatClient#subscribe subscribe} request completed.<br/ >
         Override to handle request results.
         @param {object} results Object with channel names as keys and boolean results as values.
         @method Photon.Chat.ChatClient#onSubscribeResult
         */
        onSubscribeResult(results: Object): void;
        /**
         @summary Called when {@link Photon.Chat.ChatClient#unsubscribe unsubscribe} request completed.<br/ >
         Override to handle request results.
         @param {object} results Object with channel names as keys and boolean results as values.
         @method Photon.Chat.ChatClient#onUnsubscribeResult
         */
        onUnsubscribeResult(results: Object): void;
        /**
         @summary Called when new chat messages received.<br/ >
         Override to handle messages receive event.
         @param {string} channelName Chat channel name.
         @param {{@link Photon.Chat.Message}[]} messages Array of received messages.
         @method Photon.Chat.ChatClient#onChatMessages
         */
        onChatMessages(channelName: string, messages: Message[]): void;
        /**
         @summary Called when new private message received.<br/ >
         Override to handle message receive event.
         @param {string} channelName Private channel name(counterpart user id).
         @param {Photon.Chat.Message} message Received message.
         @method Photon.Chat.ChatClient#onPrivateMessage
         */
        onPrivateMessage(channelName: string, message: Message): void;
        /**
         @summary Called when user from friend list changes state.<br/ >
         Override to handle change state event.
         @param {string} userId User id.
         @param {number} status New User status. Predefined {@link Photon.chat.Constants.UserStatus Constants.UserStatus} or custom.
         @param {boolean} gotMessage True if status message updated.
         @param {string} statusMessage Optional status message (may be null even if gotMessage = true).
         @method Photon.Chat.ChatClient#onUserStatusUpdate
         */
        onUserStatusUpdate(userId: string, status: number, gotMessage: boolean, statusMessage: string): void;
        /**
         @summary A user has subscribed to a public chat channel
         @param {string} channelName Chat channel name.
         @param {string} userId User id.
         @method Photon.Chat.ChatClient#onUserSubscribe
         */
        onUserSubscribe(channelName: string, userId: string): void;
        /**
         @summary A user has unsubscribed from a public chat channel
         @param {string} channelName Chat channel name.
         @param {string} userId User id.
         @method Photon.Chat.ChatClient#onUserUnsubscribe
         */
        onUserUnsubscribe(channelName: string, userId: string): void;
        /**
         @summary Starts connection to NameServer.
         @method Photon.Chat.ChatClient#connectToNameServer
         @param {object} [options] Additional options
         @property {object} options Additional options
         @property {string} [options.region] If specified, Connect to region master after succesfull connection to name server
         @returns {boolean} True if current client state allows connection.
         */
        connectToNameServer(options?: {
        region?: string;
    }): boolean;
    /**
     @summary Connects to a specific region's Master server, using the NameServer to find the IP.
     Override {@link Photon.Chat.ChatClient#onWebRpcResult onWebRpcResult} to handle request results.<br/>
     @method Photon.Chat.ChatClient#connectToRegionFrontEnd
     @param {string} region Region connect to Master server of.
     @returns {boolean} True if current client state allows connection.
     **/
    connectToRegionFrontEnd(region: string): boolean;
    /**
     @summary Returns true if client connected to Front End.When connected, client can send messages, subscribe to channels and so on.
     @return {boolean} True if connected.
     @method Photon.Chat.ChatClient#isConnectedToFrontEnd
     */
    isConnectedToFrontEnd(): boolean;
    /**
     @summary Sends operation to subscribe to a list of channels by name.<br/>
     Override {@link Photon.Chat.ChatClient#onSubscribeResult onSubscribeResult} to handle request results.
     @param {string[]} channelNames Array of channel names to subscribe to.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {number} [options.historyLength] Controls messages history sent on subscription. Not specified or 0: no history. 1 and higher: number of messages in history. -1: all history.
     @property {number[]} [options.lastIds] Array of IDs of last messages received per channel. Useful when resubscribing to receive only messages we missed.
     @param {object} [createOptions] Room options for creation
     @property {object} createOptions Room options for creation
     @property {boolean} [createOptions.publishSubscribers=false] Whether or not the channel to be created will allow client to keep a list of users.
     @property {number} [createOptions.maxSubscribers=0] Limit of the number of users subscribed to the channel to be created.
     @return {boolean} True if operation sent.
     @method Photon.Chat.ChatClient#subscribe
     */
    subscribe(channelNames: string[], options?: {
        historyLength?: number;
        lastIds?: number[];
        createOptions?: {
            publishSubscribers: boolean;
            maxSubscribers: number;
        };
    }): boolean;
    /**
     @summary Sends operation to unsubscribe from a list of channels by name.<br/ >
     Override {@link Photon.Chat.ChatClient#onUnsubscribeResult onUnsubscribeResult} to handle request results.
     @param {string[]} channelNames Array of channel names to unsubscribe from.
     @return {boolean} True if operation sent.
     @method Photon.Chat.ChatClient#unsubscribe
     */
    unsubscribe(channelNames: string[]): boolean;
    /**
     @summary Sends a message to a public channel.<br/>
     Channel should be subscribed before publishing to it.
     Everyone in that channel will get the message.
     @param {string} channelName Channel name to send message to.
     @param {any} content Text string or arbitrary data to send.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {boolean} [options.webForward] Optionally, private messages can be forwarded as webhooks. Configure webhooks for your Chat app to use this.
     @return {boolean} True if message sent.
     @method Photon.Chat.ChatClient#publishMessage
     */
    publishMessage(channelName: string, content: any, options?: {
        webForward?: boolean;
    }): boolean;
    /**
     @summary Sends a private message to a single target user.<br/>
     @param {string} userId User id to send this message to.
     @param {any} content Text string or arbitrary data to send.
     @param {object} [options] Additional options
     @property {object} options Additional options
     @property {boolean} [options.webForward] Optionally, private messages can be forwarded as webhooks. Configure webhooks for your Chat app to use this.
     @return {boolean} True if message sent.
     @method Photon.Chat.ChatClient#sendPrivateMessage
     */
    sendPrivateMessage(userId: string, content: any, options?: {
        webForward?: boolean;
    }): boolean;
    /**
     @summary Sets the user's status (pre-defined or custom) and an optional message.<br/>
     The predefined status values can be found in {@link Photon.Chat.Constants.UserStatus Constants.UserStatus}.<br/>
     State UserStatus.Invisible will make you offline for everyone and send no message.
     @param {number} status User status to set.
     @param {string} [message=null] State message.
     @param {boolean} [skipMessage=false] If true { client does not send state message.
            @return {boolean} True if command sent.
            @method Photon.Chat.ChatClient#setUserStatus
     */
    setUserStatus(status: number, statusMessage?: string | null, skipMessage?: boolean): boolean;
    /**
     @summary Adds users to the list on the Chat Server which will send you status updates for those.
     @tparam string[] userIds Array of user ids.
     @return {boolean} True if command sent.
     */
    addFriends(userIds: string[]): boolean;
    /**
     @summary Removes users from the list on the Chat Server which will send you status updates for those.
     @tparam string[] friends Array of user ids.
     @return {boolean} True if command sent.
     */
    removeFriends(userIds: string[]): boolean;
    /**
     @summary Returns list of public channels client subscribed to.
     @return Channel[] Array of public channels.
     */
    getPublicChannels(): {
        [index: string]: any;
    };
    /**
     @summary Returns list of channels representing current private conversation.
     @return Channel[] Array of private channels.
     */
    getPrivateChannels(): {
        [index: string]: any;
    };
    private getOrAddChannel;
    initMasterPeer(mp: Photon.LoadBalancing.MasterPeer): void;
    private publicChannels;
    private privateChannels;
    private subscribeRequests;
    private unsubscribeRequests;
    static ChatPeerErrorCode: {
        /**
         @summary Enum for client peers error codes.
         @member Photon.Chat.ChatClient.ChatPeerErrorCode
         @readonly
         @property {number} Ok No Error.
         @property {number} FrontEndError General FrontEnd server peer error.
         @property {number} FrontEndConnectFailed FrontEnd server connection error.
         @property {number} FrontEndConnectClosed Disconnected from FrontEnd server.
         @property {number} FrontEndTimeout Disconnected from FrontEnd server for timeout.
         @property {number} FrontEndEncryptionEstablishError FrontEnd server encryption establishing failed.
         @property {number} FrontEndAuthenticationFailed FrontEnd server authentication failed.
         @property {number} NameServerError General NameServer peer error.
         @property {number} NameServerConnectFailed NameServer connection error.
         @property {number} NameServerConnectClosed Disconnected from NameServer.
         @property {number} NameServerTimeout Disconnected from NameServer for timeout.
         @property {number} NameServerEncryptionEstablishError NameServer encryption establishing failed.
         @property {number} NameServerAuthenticationFailed NameServer authentication failed.
         */
        Ok: number;
        FrontEndError: number;
        FrontEndConnectFailed: number;
        FrontEndConnectClosed: number;
        FrontEndTimeout: number;
        FrontEndEncryptionEstablishError: number;
        FrontEndAuthenticationFailed: number;
        NameServerError: number;
        NameServerConnectFailed: number;
        NameServerConnectClosed: number;
        NameServerTimeout: number;
        NameServerEncryptionEstablishError: number;
        NameServerAuthenticationFailed: number;
    };
    static ChatState: {
        /**
         @summary Enum for client states.
         @member Photon.Chat.ChatClient.ChatState
         @readonly
         @property {number} Error Critical error occurred.
         @property {number} Uninitialized Client is created but not used yet.
         @property {number} ConnectingToNameServer Connecting to NameServer.
         @property {number} ConnectedToNameServer Connected to NameServer.
         @property {number} ConnectingToFrontEnd Connecting to FrontEnd server.
         @property {number} ConnectedToFrontEnd Connected to FrontEnd server.
         @property {number} Disconnected The client is no longer connected (to any server).
         */
        Error: number;
        Uninitialized: number;
        ConnectingToNameServer: number;
        ConnectedToNameServer: number;
        ConnectingToFrontEnd: number;
        ConnectedToFrontEnd: number;
        Disconnected: number;
    };
    private static chatStateName;
    /**
     @summary Converts {@link Photon.Chat.ChatClient.ChatState ChatState} element to string name.
     @method Photon.Chat.ChatClient.StateToName
     @param {Photon.Chat.ChatClient.ChatState} state Client state.
     @returns {string} Specified element name or undefined if not found.
     */
    static StateToName(value: number): string | undefined;
}
}
