import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils/logger';
import { PubSub } from '../../services/pubsub';
import { AblyRealtimeService } from '../../services/realtime';
import { RealtimeMessage } from '../../services/realtime/ably/types';

import { DefaultLaucher, LaucherFacade, LaucherOptions } from './types';

export class Laucher implements DefaultLaucher {
  private readonly apiKey: string;
  private readonly ablyKey: string;
  private readonly apiUrl: string;
  private readonly conferenceLayerUrl: string;
  private readonly shouldKickParticipantsOnHostLeave: boolean;
  private readonly logger: Logger;

  private participant: Participant;
  private readonly roomId: string;
  private group: Group;

  private readonly realtime: AblyRealtimeService;
  private readonly pubsub: PubSub;

  constructor({
    ablyKey,
    apiUrl,
    apiKey,
    conferenceLayerUrl,
    participant,
    group,
    roomId,
    shouldKickParticipantsOnHostLeave,
  }: LaucherOptions) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.ablyKey = ablyKey;
    this.conferenceLayerUrl = conferenceLayerUrl;
    this.shouldKickParticipantsOnHostLeave = shouldKickParticipantsOnHostLeave ?? true;
    this.participant = participant;
    this.roomId = roomId;
    this.group = group;

    this.logger = new Logger('@superviz/sdk/inicializator');
    this.realtime = new AblyRealtimeService(this.apiUrl, this.ablyKey);
    this.pubsub = new PubSub(this.realtime);

    this.logger.log('Inicializator created');

    this.startRealtime();
  }

  /**
   * @function subscribeToPubSubEvent
   * @description subscribe to pubsub event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public subscribeToPubSubEvent = (event: string, callback: (data: unknown) => void): void => {
    this.logger.log('inicializator service @ subscribeToPubSubEvent');
    this.pubsub.subscribe(event, callback);
  };

  /**
   * @function unsubscribeFromPubSubEvent
   * @description unsubscribe from pubsub event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public unsubscribeFromPubSubEvent = (event: string, callback: (data: unknown) => void): void => {
    this.logger.log('inicializator service @ unsubscribeFromPubSubEvent');
    this.pubsub.unsubscribe(event, callback);
  };

  /**
   * @function publishToPubSubEvent
   * @description publish to pubsub event
   * @param event - event name
   * @param data - data to publish
   * @returns {void}
   */
  public publishToPubSubEvent = (event: string, data: unknown): void => {
    this.logger.log('inicializator service @ publishToPubSubEvent');
    this.pubsub.publish(event, data);
  };

  /**
   * @function fetchPubSubHistory
   * @description fetch pubsub history
   * @param eventName - event name
   * @returns realtime message or realtime history
   */
  public fetchPubSubHistory = (
    eventName?: string,
  ): Promise<RealtimeMessage | Record<string, RealtimeMessage>> => {
    return this.pubsub.fetchHistory(eventName);
  };

  /**
   * @function startRealtime
   * @description start realtime service and join to room
   * @returns {void}
   */
  private startRealtime = (): void => {
    this.logger.log('inicializator service @ startRealtime');

    this.realtime.start({
      apiKey: this.apiKey,
      participant: this.participant,
      isBroadcast: true,
      roomId: this.roomId,
      shouldKickParticipantsOnHostLeave: this.shouldKickParticipantsOnHostLeave,
    });

    this.realtime.join();
  };
}

/**
 * @function Laucher
 * @description create inicializator instance
 * @param options - inicializator options
 * @returns {LaucherFacade}
 */
export default (options: LaucherOptions): LaucherFacade => {
  const laucher = new Laucher(options);

  return {
    subscribe: laucher.subscribeToPubSubEvent,
    unsubscribe: laucher.unsubscribeFromPubSubEvent,
    publish: laucher.publishToPubSubEvent,
    fetchHistory: laucher.fetchPubSubHistory,
  };
};
