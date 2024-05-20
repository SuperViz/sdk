import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { Channel } from './channel';
import {
  RealtimeChannelEvent,
  RealtimeChannelState,
  RealtimeComponentEvent,
  RealtimeComponentState,
  RealtimeMessage,
} from './types';

export class Realtime extends BaseComponent {
  private channel: Channel;

  protected logger: Logger;
  public name: ComponentNames;
  private declare localParticipant: Participant;
  private state: RealtimeComponentState = RealtimeComponentState.STOPPED;
  private channels: Map<string, Channel> = new Map();
  private callbacksToSubscribeWhenJoined: Array<{
    event: string;
    callback: (data: unknown) => void;
  }> = [];

  constructor() {
    super();

    this.name = ComponentNames.REALTIME;
    this.logger = new Logger('@superviz/sdk/realtime-component');
    const { localParticipant } = this.useStore(StoreType.GLOBAL);
    localParticipant.subscribe();
  }

  /**
   * @function connect
   * @description - connect to a channel
   * @param name - channel name
   * @returns {Channel}
   */
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

  public subscribe = (event: string, callback: (data: RealtimeMessage | string) => void): void => {
    if (!this.channel) {
      this.callbacksToSubscribeWhenJoined.push({ event, callback });
      return;
    }

    this.channel?.subscribe(event, callback);
  };

  public publish = (event: string, data?: unknown): void => {
    this.channel?.publish(event, data);
  };

  public unsubscribe = (event: string, callback?: (data: RealtimeMessage) => void): void => {
    this.channel?.unsubscribe(event, callback);
  };

  protected start(): void {
    this.logger.log('started');
    this.channel = new Channel('default', this.ioc, this.localParticipant);

    this.channel.subscribe(RealtimeChannelEvent.REALTIME_CHANNEL_STATE_CHANGED, (state) => {
      if (state !== RealtimeChannelState.CONNECTED) return;

      this.callbacksToSubscribeWhenJoined.forEach(({ event, callback }) => {
        this.channel.subscribe(event, callback);
      });

      this.changeState(RealtimeComponentState.STARTED);
      this.callbacksToSubscribeWhenJoined = [];

      this.channel.unsubscribe(RealtimeChannelEvent.REALTIME_CHANNEL_STATE_CHANGED);
      this.channels.set('default', this.channel);
    });
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

    this.channel?.['publishEventToClient'](
      RealtimeComponentEvent.REALTIME_STATE_CHANGED,
      this.state,
    );
  }
}
