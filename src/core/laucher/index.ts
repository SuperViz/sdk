import { isEqual } from 'lodash';

import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils/logger';
import { BaseComponent } from '../../components/base';
import config from '../../services/config';
import { PubSub } from '../../services/pubsub';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyParticipant, RealtimeMessage } from '../../services/realtime/ably/types';

import { DefaultLaucher, LaucherFacade, LaucherOptions } from './types';

export class Laucher implements DefaultLaucher {
  private readonly shouldKickParticipantsOnHostLeave: boolean;
  private readonly logger: Logger;

  private participant: Participant;
  private group: Group;

  private readonly realtime: AblyRealtimeService;
  private readonly pubsub: PubSub;

  private components: BaseComponent[] = [];
  private participants: Participant[] = [];

  constructor({ participant, group, shouldKickParticipantsOnHostLeave }: LaucherOptions) {
    this.shouldKickParticipantsOnHostLeave = shouldKickParticipantsOnHostLeave ?? true;
    this.participant = participant;
    this.group = group;

    this.logger = new Logger('@superviz/sdk/laucher');
    this.realtime = new AblyRealtimeService(
      config.get<string>('apiUrl'),
      config.get<string>('ablyKey'),
    );
    this.pubsub = new PubSub(this.realtime);

    this.logger.log('laucher created');

    this.startRealtime();
  }

  /**
   * @function addComponent
   * @description add component to laucher
   * @param component - component to add
   * @returns {void}
   */
  public addComponent = (component: BaseComponent): void => {
    component.attach({
      localParticipant: this.participant,
      realtime: this.realtime,
    });
  };

  /**
   * @function removeComponent
   * @description remove component from laucher
   * @param component - component to remove
   * @returns {void}
   */
  public removeComponent = (component: BaseComponent): void => {
    component.detach();
  };

  /**
   * @function subscribeToPubSubEvent
   * @description subscribe to pubsub event
   * @param event - event name
   * @param callback - callback function
   * @returns {void}
   */
  public subscribeToPubSubEvent = (event: string, callback: (data: unknown) => void): void => {
    this.logger.log('laucher service @ subscribeToPubSubEvent');
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
    this.logger.log('laucher service @ unsubscribeFromPubSubEvent');
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
    this.logger.log('laucher service @ publishToPubSubEvent');
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
    this.logger.log('laucher service @ startRealtime');

    this.realtime.start({
      participant: this.participant,
      apiKey: config.get<string>('apiKey'),
      roomId: config.get<string>('roomId'),
      shouldKickParticipantsOnHostLeave: this.shouldKickParticipantsOnHostLeave,
    });

    this.realtime.join();

    // subscribe to realtime events
    this.subscribeToRealtimeEvents();
  };

  /**
   * @function subscribeToRealtimeEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToRealtimeEvents = (): void => {
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.subscribe(this.onParticipantLeave);
    this.realtime.participantsObserver.subscribe(this.onParticipantListUpdate);
  };

  /** Realtime Listeners */

  /**
   * @function onParticipantListUpdate
   * @description on participant list update
   * @param participants - participants list
   * @returns {void}
   */
  private onParticipantListUpdate = (participants: Record<string, AblyParticipant>): void => {
    this.logger.log('laucher service @ onParticipantListUpdate');

    const participantList = Object.values(participants).map((participant) => ({
      id: participant.data.id,
      name: participant.data?.name,
      type: participant.data?.type,
      avatar: participant.data?.avatar,
      avatarConfig: participant.data?.avatarConfig,
      isHost: this.realtime.hostClientId === participant.clientId,
      color: this.realtime.getSlotColor(participant.data?.slotIndex).color,
    }));

    const localParticipant = participantList.find((participant) => {
      return participant?.id === this.participant?.id;
    });

    if (!isEqual(this.participants, participantList)) {
      this.participants = participantList;
      this.pubsub.publishEventToClient(ParticipantEvent.LIST_UPDATED, participantList);

      this.logger.log('Publishing ParticipantEvent.LIST_UPDATED', participantList);
    }

    if (localParticipant && !isEqual(this.participant, localParticipant)) {
      this.participant = localParticipant;
      this.pubsub.publishEventToClient(ParticipantEvent.LOCAL_UPDATED, localParticipant);

      this.logger.log('Publishing ParticipantEvent.UPDATED', localParticipant);
    }
  };

  /**
   * @function onParticipantJoined
   * @description on participant joined
   * @param ablyParticipant - ably participant
   * @returns {void}
   */
  private onParticipantJoined = (ablyParticipant: AblyParticipant): void => {
    this.logger.log('laucher service @ onParticipantJoined');

    const participant = this.participants.find(
      (participant) => participant.id === ablyParticipant.data.id,
    );

    if (!participant) return;

    if (participant.id === this.participant.id) {
      this.logger.log('laucher service @ onParticipantJoined - local participant joined');
      this.pubsub.publishEventToClient(ParticipantEvent.LOCAL_JOINED, participant);
    }

    this.logger.log('laucher service @ onParticipantJoined - participant joined', participant);
    this.pubsub.publishEventToClient(ParticipantEvent.JOINED, participant);
  };

  /**
   * @function onParticipantLeave
   * @description on participant leave
   * @param ablyParticipant - ably participant
   * @returns {void}
   */
  private onParticipantLeave = (ablyParticipant: AblyParticipant): void => {
    this.logger.log('laucher service @ onParticipantLeave');

    const participant = this.participants.find((participant) => {
      return participant.id === ablyParticipant.data.id;
    });

    if (!participant) return;

    if (participant.id === this.participant.id) {
      this.logger.log('laucher service @ onParticipantLeave - local participant left');
      this.pubsub.publishEventToClient(ParticipantEvent.LOCAL_LEFT, participant);
    }

    this.logger.log('laucher service @ onParticipantLeave - participant left', participant);
    this.pubsub.publishEventToClient(ParticipantEvent.LEFT, participant);
  };
}

/**
 * @function Laucher
 * @description create laucher instance
 * @param options - laucher options
 * @returns {LaucherFacade}
 */
export default (options: LaucherOptions): LaucherFacade => {
  const laucher = new Laucher(options);

  return {
    subscribe: laucher.subscribeToPubSubEvent,
    unsubscribe: laucher.unsubscribeFromPubSubEvent,
    publish: laucher.publishToPubSubEvent,
    fetchHistory: laucher.fetchPubSubHistory,
    addComponent: laucher.addComponent,
    removeComponent: laucher.removeComponent,
  };
};
