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
  private channels: Map<string, Channel> = new Map();

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe();
  }

  public connect(name: string): Channel {
    if (this.state !== RealtimeComponentState.STARTED) {
      const message =
        "[SuperViz] Realtime component is not started yet. You can't connect to a channel before start";

      this.logger.log(message);
      console.warn(message);
      return;
    }

    let channel: Channel = this.channels.get(name);

    if (channel) return channel;

    channel = new Channel(name, this.ioc, this.localParticipant);

    this.channels.set(name, channel);

    return channel;
  }

  protected start(): void {
    this.logger.log('started');
    this.changeState(RealtimeComponentState.STARTED);
  }

  protected destroy(): void {
    this.logger.log('destroyed');
    this.changeState(RealtimeComponentState.STOPPED);
    this.disconnectFromAllChannels();
  }

  /**
   * @function disconnectToAllChannels
   * @description - disconnect to all channels
   * @returns {void}
   */
  private disconnectFromAllChannels(): void {
    this.channels.forEach((channel) => channel.disconnect());
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

    this.publish(RealtimeComponentEvent.REALTIME_STATE_CHANGED, this.state);
  }
}
