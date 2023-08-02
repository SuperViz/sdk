import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import config from '../../services/config';
import { AblyRealtimeService } from '../../services/realtime';

import { DefaultAttachComponentOptions } from './types';

export abstract class BaseComponent {
  protected localParticipant: Participant;
  protected group: Group;
  protected realtime: AblyRealtimeService;
  protected abstract name: string;
  protected abstract logger: Logger;

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

    const { realtime, localParticipant, group, config: globalConfig } = params;

    config.setConfig(globalConfig);

    this.realtime = realtime;
    this.localParticipant = localParticipant;
    this.group = group;
    this.isAttached = true;

    this.logger.log('attached');

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
  };

  protected abstract destroy(): void;
  protected abstract start(): void;
}
