import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { Channel } from './channel';
import { RealtimeComponentEvent, RealtimeComponentState } from './types';

export class Realtime extends BaseComponent {
  protected logger: Logger;
  public name: ComponentNames;
  private declare localParticipant: Participant;
  private state: RealtimeComponentState = RealtimeComponentState.STOPPED;
  private channels: Array<Channel> = [];

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe();
  }

  public connect(name: string): any {
    if (this.state !== RealtimeComponentState.STARTED) {
      this.logger.log(
        "Realtime component is not started yet. You can't create a channel before start",
      );
      return;
    }

    const channel = new Channel(name, this.ioc, this.localParticipant);

    this.channels.push(channel);

    return channel;
  }

  protected start(): void {
    this.logger.log('started');
    this.changeState(RealtimeComponentState.STARTED);
  }

  protected destroy(): void {
    this.logger.log('destroyed');
    this.changeState(RealtimeComponentState.STOPPED);
    this.disconnectToAllChannels();
  }

  /**
   * @function disconnectToAllChannels
   * @description - disconnect to all channels
   * @returns {void}
   */
  private disconnectToAllChannels(): void {
    this.channels.forEach((channel) => channel.disconnect());
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
}
