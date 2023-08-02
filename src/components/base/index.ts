import { Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { AblyRealtimeService } from '../../services/realtime';

import { DefaultAttachComponentOptions } from './types';

export abstract class BaseComponent {
  protected localParticipant: Participant;
  protected realtime: AblyRealtimeService;
  protected abstract name: string;
  protected abstract logger: Logger;

  protected isAttached = false;

  /**
   * @function attach
   * @description attach component
   * @returns {void}
   */
  public attach = ({ realtime, localParticipant }: DefaultAttachComponentOptions): void => {
    if (!realtime || !localParticipant) {
      const message = `${this.name} @ attach - realtime and localParticipant are required`;

      this.logger.log(message);
      throw new Error(message);
    }

    this.logger.log('attached');
    this.realtime = realtime;
    this.localParticipant = localParticipant;
    this.isAttached = true;
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

    this.realtime = undefined;
    this.localParticipant = undefined;
    this.isAttached = false;

    this.logger.log('detached');
    this.destroy();
  };

  protected abstract destroy(): void;
  protected abstract start(): void;
}
