import * as Socket from '@superviz/socket-client';
import throttle from 'lodash/throttle';

import { ComponentLifeCycleEvent } from '../../common/types/events.types';
import { Participant } from '../../common/types/participant.types';
import { Logger, Observable, Observer } from '../../common/utils';
import { IOC } from '../../services/io';

import { RealtimeChannelEvent, RealtimeChannelState, RealtimeData, RealtimeMessage } from './types';

export class Channel extends Observable {
  private name: string;
  private ioc: IOC;
  private channel: Socket.Room;
  protected logger: Logger;
  private state: RealtimeChannelState = RealtimeChannelState.DISCONNECTED;
  private declare localParticipant: Participant;
  private callbacksToSubscribeWhenJoined: Array<{
    event: string;
    callback: (data: unknown) => void;
  }> = [];

  constructor(name: string, ioc: IOC, localParticipant: Participant) {
    super();

    this.name = name;
    this.ioc = ioc;
    this.logger = new Logger('@superviz/sdk/realtime-channel');
    this.channel = this.ioc.createRoom(`realtime:${this.name}`);
    this.localParticipant = localParticipant;

    this.subscribeToRealtimeEvents();
    this.logger.log('started');
  }

  public async disconnect(): Promise<void> {
    if (this.state === RealtimeChannelState.DISCONNECTED) {
      this.logger.log('Realtime channel is already disconnected');
      return;
    }

    this.logger.log('destroyed');
    this.changeState(RealtimeChannelState.DISCONNECTED);
    this.channel.disconnect();
  }

  /**
   * @function publish
   * @description Publishes an event with optional data to the channel.
   * @param event - The name of the event to publish.
   * @param data - Optional data to be sent along with the event.
   */
  public publish = throttle((event: string, data?: unknown): void => {
    if (Object.values(ComponentLifeCycleEvent).includes(event as ComponentLifeCycleEvent)) {
      this.publishEventToClient(event, data);
      return;
    }

    if (this.state !== RealtimeChannelState.CONNECTED) {
      const message = `Realtime channel ${this.name} is not started yet. You can't publish event ${event} before start`;
      this.logger.log(message);
      console.warn(`[SuperViz] ${message}`);
      return;
    }

    this.channel.emit(`message:${this.name}`, { name: event, payload: data });
  }, 30);

  /**
   * @function subscribe
   * @description Subscribes to a specific event and registers a callback function to handle the received data.
   *  If the channel is not yet available, the subscription will be queued and executed once the channel is joined.
   * @param event - The name of the event to subscribe to.
   * @param callback - The callback function to handle the received data. It takes a parameter of type `RealtimeMessage` or `string`.
   */
  public subscribe = (event: string, callback: (data: RealtimeMessage | string) => void): void => {
    if (this.state !== RealtimeChannelState.CONNECTED) {
      this.callbacksToSubscribeWhenJoined.push({ event, callback });
      return;
    }

    if (!this.observers[event]) {
      this.observers[event] = new Observer();
    }

    this.observers[event].subscribe(callback);
  };

  /**
   * @function unsubscribe
   * @description Unsubscribes from a specific event.
   * @param event - The event to unsubscribe from.
   * @param callback - An optional callback function to be called when the event is unsubscribed.
   */
  public unsubscribe = (
    event: string,
    callback?: (data: RealtimeMessage | string) => void,
  ): void => {
    if (!this.observers[event]) return;

    this.observers[event].unsubscribe(callback);
  };

  /**
   * @function changeState
   * @description change realtime component state and publish state to client
   * @param state
   * @returns {void}
   */
  private changeState(state: RealtimeChannelState): void {
    this.logger.log('realtime component @ changeState - state changed', state);
    this.state = state;

    this.publishEventToClient(RealtimeChannelEvent.REALTIME_CHANNEL_STATE_CHANGED, this.state);
  }

  private subscribeToRealtimeEvents(): void {
    this.channel.presence.on(Socket.PresenceEvents.JOINED_ROOM, (event) => {
      if (event.id !== this.localParticipant.id) return;

      this.changeState(RealtimeChannelState.CONNECTED);

      this.callbacksToSubscribeWhenJoined.forEach(({ event, callback }) => {
        this.subscribe(event, callback);
      });

      this.logger.log('joined room');
      // publishing again to make sure all clients know that we are connected
      this.changeState(RealtimeChannelState.CONNECTED);
    });

    this.channel.on<RealtimeData>(`message:${this.name}`, (event) => {
      this.logger.log('message received', event);
      this.publishEventToClient(event.data.name, {
        data: event.data.payload,
        participantId: event.presence.id,
        name: event.data.name,
        timestamp: event.timestamp,
      } as RealtimeMessage);
    });
  }

  /**
   * @function fetchHistory
   * @description get realtime client data history
   * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
   */
  public fetchHistory = async (
    eventName?: string,
  ): Promise<RealtimeMessage[] | Record<string, RealtimeMessage[]> | null> => {
    if (this.state !== RealtimeChannelState.CONNECTED) {
      const message = `Realtime component is not started yet. You can't retrieve history before start`;

      this.logger.log(message);
      console.warn(`[SuperViz] ${message}`);
      return null;
    }

    const history: RealtimeMessage[] | Record<string, RealtimeMessage[]> = await new Promise(
      (resolve, reject) => {
        const next = (data: Socket.RoomHistory) => {
          if (!data.events?.length) {
            resolve(null);
          }

          const groupMessages = data.events.reduce(
            (group: Record<string, RealtimeMessage[]>, event: Socket.SocketEvent<RealtimeData>) => {
              if (!group[event.data.name]) {
                // eslint-disable-next-line no-param-reassign
                group[event.data.name] = [];
              }

              group[event.data.name].push({
                data: event.data.payload,
                name: event.data.name,
                participantId: event.presence.id,
                timestamp: event.timestamp,
              });

              return group;
            },
            {},
          );

          if (eventName && !groupMessages[eventName]) {
            reject(new Error(`Event ${eventName} not found in the history`));
          }

          if (eventName) {
            resolve(groupMessages[eventName]);
          }

          resolve(groupMessages);
        };

        this.channel.history(next);
      },
    );

    return history;
  };

  /**
   * @function publishEventToClient
   * @description - publish event to client
   * @param event - event name
   * @param data - data to publish
   * @returns {void}
   */
  private publishEventToClient = (event: string, data?: unknown): void => {
    this.logger.log('realtime channel @ publishEventToClient', { event, data });

    if (!this.observers[event]) return;

    this.observers[event].publish(data);
  };
}
