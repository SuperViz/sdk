import { Logger } from '../../common/utils';
import { PubSub } from '../../services/pubsub';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { RealtimeComponentEvent, RealtimeComponentState } from './types';

export class Realtime extends BaseComponent {
  private pubsub: PubSub;

  private callbacksToSubscribeWhenJoined: Array<{
    event: string;
    callback: (data: unknown) => void;
  }> = [];

  protected logger: Logger;
  public name: ComponentNames;
  private state: RealtimeComponentState = RealtimeComponentState.STOPPED;

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
  }

  protected destroy(): void {
    this.logger.log('destroyed');
    this.changeState(RealtimeComponentState.STOPPED);
    this.pubsub.destroy();
  }

  protected start(): void {
    this.logger.log('started');
    this.pubsub = new PubSub(this.realtime);

    this.callbacksToSubscribeWhenJoined.forEach(({ event, callback }) => {
      this.pubsub.subscribe(event, callback);
    });

    this.changeState(RealtimeComponentState.STARTED);
  }

  /**
   * @function publish
   * @description Publish an event
   * @param type - event type
   * @param data - event data
   * @returns {void}
   */
  public publish = (event: string, data?: unknown): void => {
    if (!this.pubsub) {
      const message = `Realtime component is not started yet. You can't publish event ${event} before start`;
      this.logger.log(message);
      console.error(message);
      return;
    }

    this.pubsub.publish(event, data);
  };

  /**
   * @function subscribe
   * @description subscribe to event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public subscribe = (event: string, callback: (data: unknown) => void): void => {
    if (!this.pubsub) {
      this.callbacksToSubscribeWhenJoined.push({ event, callback });
      return;
    }

    this.pubsub.subscribe(event, callback);
  };

  /**
   * @function unsubscribe
   * @description - unsubscribe from event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public unsubscribe = (event: string, callback?: (data: unknown) => void): void => {
    this.pubsub.unsubscribe(event, callback);
  };

  /**
   * @function fetchSyncClientProperty
   * @description get realtime client data history
   * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
   */
  public fetchHistory(
    eventName?: string,
  ): Promise<RealtimeMessage | Record<string, RealtimeMessage>> {
    return this.pubsub.fetchHistory(eventName);
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

    this.pubsub.publishEventToClient(RealtimeComponentEvent.REALTIME_STATE_CHANGED, this.state);
  }
}
