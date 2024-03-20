import * as Socket from '@superviz/socket-client';
import throttle from 'lodash/throttle';

import { ComponentLifeCycleEvent } from '../../common/types/events.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger, Observer } from '../../common/utils';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';
import { Participant } from '../who-is-online/types';

import { RealtimeComponentEvent, RealtimeComponentState, RealtimeData } from './types';

export class Realtime extends BaseComponent {
  private callbacksToSubscribeWhenJoined: Array<{
    event: string;
    callback: (data: unknown) => void;
  }> = [];

  protected logger: Logger;
  public name: ComponentNames;
  private state: RealtimeComponentState = RealtimeComponentState.STOPPED;
  private declare localParticipant: Participant;

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe();
  }

  protected destroy(): void {
    this.logger.log('destroyed');
    this.changeState(RealtimeComponentState.STOPPED);
    this.room.disconnect();
  }

  protected start(): void {
    this.logger.log('started');

    this.subscribeToRealtimeEvents();
  }

  /**
   * @function publish
   * @description Publish an event
   * @param type - event type
   * @param data - event data
   * @returns {void}
   */
  public publish = throttle((event: string, data?: unknown): void => {
    if (Object.values(ComponentLifeCycleEvent).includes(event as ComponentLifeCycleEvent)) {
      this.publishEventToClient(event, data);
      return;
    }

    if (this.state !== RealtimeComponentState.STARTED) {
      const message = `Realtime component is not started yet. You can't publish event ${event} before start`;
      this.logger.log(message);
      console.error(message);
      return;
    }

    this.room.emit('message', { name: event, payload: data });
  }, 200);

  /**
   * @function subscribe
   * @description subscribe to event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public subscribe = (event: string, callback: (data: unknown) => void): void => {
    if (this.state !== RealtimeComponentState.STARTED) {
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
   * @description - unsubscribe from event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public unsubscribe = (event: string, callback?: (data: unknown) => void): void => {
    if (!this.observers[event]) return;

    this.observers[event].unsubscribe(callback);
  };

  /**
   * @function fetchHistory
   * @description get realtime client data history
   * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
   */
  public async fetchHistory(
    eventName?: string,
  ): Promise<RealtimeMessage[] | Record<string, RealtimeMessage[]> | null> {
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

        this.room.history(next);
      },
    );

    return history;
  }

  /**
   * @function changeState
   * @description change realtime component state and publish state to client
   * @param state
   * @returns {void}
   */
  private changeState(state: RealtimeComponentState): void {
    this.logger.log('realtime component @ changeState - state changed', state);
    this.state = state;

    this.publishEventToClient(RealtimeComponentEvent.REALTIME_STATE_CHANGED, this.state);
  }

  private subscribeToRealtimeEvents(): void {
    this.room.presence.on(Socket.PresenceEvents.JOINED_ROOM, (event) => {
      if (event.id !== this.localParticipant.id) return;

      this.logger.log('joined room');
      this.changeState(RealtimeComponentState.STARTED);

      this.callbacksToSubscribeWhenJoined.forEach(({ event, callback }) => {
        this.subscribe(event, callback);
      });
    });

    this.room.on<RealtimeData>('message', (event) => {
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
   * @function publishEventToClient
   * @description - publish event to client
   * @param event - event name
   * @param data - data to publish
   * @returns {void}
   */
  public publishEventToClient = (event: string, data?: unknown): void => {
    this.logger.log('pubsub service @ publishEventToClient', { event, data });

    if (!this.observers[event]) return;

    this.observers[event].publish(data);
  };
}
