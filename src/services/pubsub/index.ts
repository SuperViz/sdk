import { Logger, Observer } from '../../common/utils';
import { AblyRealtimeService } from '../realtime';
import { RealtimeMessage } from '../realtime/ably/types';

export class PubSub {
  private readonly realtime: AblyRealtimeService;
  private readonly logger: Logger;

  private observers: Map<string, Observer> = new Map();

  constructor(realtime: AblyRealtimeService) {
    this.logger = new Logger('@superviz/sdk/pubsub');
    this.realtime = realtime;

    this.realtime.syncPropertiesObserver.subscribe(this.onSyncPropertiesChange);

    this.logger.log('PubSub created');
  }

  /**
   * @function subscribe
   * @description subscribe to event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public subscribe = (event: string, callback: (data: unknown) => void): void => {
    this.logger.log('pubsub service @ subscribe', { event, callback });

    if (!this.observers.has(event)) {
      this.observers.set(event, new Observer());
    }

    this.observers.get(event).subscribe(callback);
  };

  /**
   * @function unsubscribe
   * @description - unsubscribe from event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public unsubscribe = (event: string, callback: (data: unknown) => void): void => {
    this.logger.log('pubsub service @ unsubscribe', { event, callback });

    if (!this.observers.has(event)) return;

    this.observers.get(event).reset();
    this.observers.delete(event);
  };

  /**
   * @function publish
   * @description - publish event to realtime
   * @param event - event name
   * @param data - data to publish
   * @returns {void}
   */
  public publish = (event: string, data: unknown): void => {
    this.logger.log('pubsub service @ publish', { event, data });

    this.realtime.setSyncProperty(event, data);
  };

  /**
   * @function fetchSyncClientProperty
   * @description get realtime client data history
   * @returns {RealtimeMessage | Record<string, RealtimeMessage>}
   */
  public fetchHistory(
    eventName?: string,
  ): Promise<RealtimeMessage | Record<string, RealtimeMessage>> {
    return this.realtime.fetchSyncClientProperty(eventName);
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

    if (!this.observers.has(event)) return;

    this.observers.get(event).publish(data);
  };

  /**
   * @function onSyncPropertiesChange
   * @description - sync properties change handler
   * @param properties - properties
   * @returns {void}
   */
  private onSyncPropertiesChange = (properties: Record<string, unknown>): void => {
    this.logger.log('pubsub service @ onSyncPropertiesChange', { properties });

    Object.entries(properties).forEach(([key, value]) => {
      this.publishEventToClient(key, value);
    });
  };
}
