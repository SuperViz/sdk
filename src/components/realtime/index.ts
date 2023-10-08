import { Logger } from '../../common/utils';
import { PubSub } from '../../services/pubsub';
import { RealtimeMessage } from '../../services/realtime/ably/types';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

export class Realtime extends BaseComponent {
  private pubsub: PubSub;

  protected logger: Logger;
  public name: ComponentNames;

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
  }

  protected destroy(): void {
    this.logger.log('destroyed');
    this.pubsub.destroy();
  }

  protected start(): void {
    this.logger.log('started');
    this.pubsub = new PubSub(this.realtime);
  }

  /**
   * @function publish
   * @description Publish an event
   * @param type - event type
   * @param data - event data
   * @returns {void}
   */
  public publish = (event: string, data?: unknown): void => {
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
}
