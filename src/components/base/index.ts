import { Group, Participant } from '../../common/types/participant.types';
import { Logger, Observable } from '../../common/utils';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';
import { ComponentNames } from '../types';

import { DefaultAttachComponentOptions } from './types';

export abstract class BaseComponent extends Observable {
  public abstract name: ComponentNames;
  protected abstract logger: Logger;
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

  protected abstract destroy(): void;
  protected abstract start(): void;
}
