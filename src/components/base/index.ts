import { Group, Participant } from '../../common/types/participant.types';
import { Logger, Observer } from '../../common/utils';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';

import { DefaultAttachComponentOptions } from './types';

export abstract class BaseComponent {
  public abstract name: string;
  protected abstract logger: Logger;

  private observers: Record<string, Observer> = {};

  protected localParticipant: Participant;
  protected group: Group;
  protected realtime: AblyRealtimeService;
  protected eventBus: EventBus;
  protected isAttached = false;

  /**
   * @function attach
   * @description attach component
   * @returns {void}
   */
  public attach = (params: DefaultAttachComponentOptions): void => {
    if (Object.values(params).includes(null) || Object.values(params).includes(undefined)) {
      const message = `${this.name} @ attach - params are required`;

      this.logger.log(message);
      throw new Error(message);
    }

    const { realtime, localParticipant, group, config: globalConfig, eventBus } = params;

    config.setConfig(globalConfig);

    this.realtime = realtime;
    this.localParticipant = localParticipant;
    this.group = group;
    this.eventBus = eventBus;
    this.isAttached = true;

    if (!this.realtime.isJoinedRoom) {
      this.logger.log(`${this.name} @ attach - not joined yet`);

      setTimeout(() => {
        this.logger.log(`${this.name} @ attach - retrying`);
        this.attach(params);
      }, 1000);

      return;
    }

    this.logger.log(`${this.name} @ attached`);

    this.start();
  };

  /*
   * @function detach
   * @description detach component
   * @returns {void}
   * */
  public detach = (): void => {
    if (!this.isAttached) {
      this.logger.log(`${this.name} @ detach - component is not attached}`);
      return;
    }

    this.logger.log('detached');
    this.destroy();

    this.realtime = undefined;
    this.localParticipant = undefined;
    this.isAttached = false;

    Object.keys(this.observers).forEach((type) => this.unsubscribe(type));
  };

  /**
   * @function subscribe
   * @description Subscribe to an event
   * @param type - event type
   * @param listener - event callback
   * @returns {void}
   */
  public subscribe = (type: string, listener: Function): void => {
    this.logger.log(`subscribed to ${type} event`);

    if (!this.observers[type]) {
      this.observers[type] = new Observer({ logger: this.logger });
    }

    this.observers[type].subscribe(listener);
  };

  /**
   * @function unsubscribe
   * @description Unsubscribe from an event
   * @param type - event type
   * @returns {void}
   */
  public unsubscribe = (type: string): void => {
    this.logger.log(`unsubscribed from ${type} event`);

    if (!this.observers[type]) return;

    this.observers[type].reset();
    delete this.observers[type];
  };

  /**
   * @function publish
   * @description Publish an event to client
   * @param type - event type
   * @param data - event data
   * @returns {void}
   */
  protected publish = (type: string, data?: unknown): void => {
    const hasListenerRegistered = type in this.observers;

    if (!hasListenerRegistered) return;

    this.observers[type].publish(data);
  };

  protected abstract destroy(): void;
  protected abstract start(): void;
}
