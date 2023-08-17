import { isEqual } from 'lodash';

import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils/logger';
import { BaseComponent } from '../../components/base';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import { PubSub } from '../../services/pubsub';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyParticipant, RealtimeMessage } from '../../services/realtime/ably/types';
import { HostObserverCallbackResponse } from '../../services/realtime/base/types';

import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';

export class Launcher implements DefaultLauncher {
  private readonly shouldKickParticipantsOnHostLeave: boolean;
  private readonly logger: Logger;

  private participant: Participant;
  private group: Group;

  private readonly realtime: AblyRealtimeService;
  private readonly pubsub: PubSub;
  private readonly eventBus: EventBus = new EventBus();

  private participants: Participant[] = [];

  constructor({ participant, group, shouldKickParticipantsOnHostLeave }: LauncherOptions) {
    this.shouldKickParticipantsOnHostLeave = shouldKickParticipantsOnHostLeave ?? true;
    this.participant = participant;
    this.group = group;

    this.logger = new Logger('@superviz/sdk/launcher');
    this.realtime = new AblyRealtimeService(
      config.get<string>('apiUrl'),
      config.get<string>('ablyKey'),
    );

    // events with realtime
    this.pubsub = new PubSub(this.realtime);
    // internal events without realtime
    this.eventBus = new EventBus();

    this.logger.log('launcher created');

    this.startRealtime();
  }

  /**
   * @function addComponent
   * @description add component to launcher
   * @param component - component to add
   * @returns {void}
   */
  public addComponent = (component: BaseComponent): void => {
    component.attach({
      localParticipant: this.participant,
      realtime: this.realtime,
      group: this.group,
      config: config.configuration,
      eventBus: this.eventBus,
    });
  };

  /**
   * @function removeComponent
   * @description remove component from launcher
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
    this.logger.log('launcher service @ subscribeToPubSubEvent');
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
    this.logger.log('launcher service @ unsubscribeFromPubSubEvent');
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
    this.logger.log('launcher service @ publishToPubSubEvent');
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
    this.logger.log('launcher service @ startRealtime');

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
    this.realtime.hostObserver.subscribe(this.onHostParticipantDidChange);
  };

  /** Realtime Listeners */

  /**
   * @function onParticipantListUpdate
   * @description on participant list update
   * @param participants - participants list
   * @returns {void}
   */
  private onParticipantListUpdate = (participants: Record<string, AblyParticipant>): void => {
    this.logger.log('launcher service @ onParticipantListUpdate');

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
    this.logger.log('launcher service @ onParticipantJoined');

    const participant = this.participants.find(
      (participant) => participant.id === ablyParticipant.data.id,
    );

    if (!participant) return;

    if (participant.id === this.participant.id) {
      this.logger.log('launcher service @ onParticipantJoined - local participant joined');
      this.pubsub.publishEventToClient(ParticipantEvent.LOCAL_JOINED, participant);
    }

    this.logger.log('launcher service @ onParticipantJoined - participant joined', participant);
    this.pubsub.publishEventToClient(ParticipantEvent.JOINED, participant);
  };

  /**
   * @function onParticipantLeave
   * @description on participant leave
   * @param ablyParticipant - ably participant
   * @returns {void}
   */
  private onParticipantLeave = (ablyParticipant: AblyParticipant): void => {
    this.logger.log('launcher service @ onParticipantLeave');

    const participant = this.participants.find((participant) => {
      return participant.id === ablyParticipant.data.id;
    });

    if (!participant) return;

    if (participant.id === this.participant.id) {
      this.logger.log('launcher service @ onParticipantLeave - local participant left');
      this.pubsub.publishEventToClient(ParticipantEvent.LOCAL_LEFT, participant);
    }

    this.logger.log('launcher service @ onParticipantLeave - participant left', participant);
    this.pubsub.publishEventToClient(ParticipantEvent.LEFT, participant);
  };

  /**
   * @function onHostParticipantDidChange
   * @description handler for host participant change event
   * @param {HostObserverCallbackResponse} data - host change data
   * @returns {void}
   * */
  private onHostParticipantDidChange = (data: HostObserverCallbackResponse): void => {
    const newHost = this.participants.find((participant) => {
      return participant.id === data?.newHostParticipantId;
    });

    if (this.realtime.isLocalParticipantHost) {
      this.publishToPubSubEvent(RealtimeEvent.REALTIME_HOST_CHANGE, newHost);
    }
  };
}

/**
 * @function Launcher
 * @description create launcher instance
 * @param options - launcher options
 * @returns {LauncherFacade}
 */
export default (options: LauncherOptions): LauncherFacade => {
  const launcher = new Launcher(options);

  return {
    subscribe: launcher.subscribeToPubSubEvent,
    unsubscribe: launcher.unsubscribeFromPubSubEvent,
    publish: launcher.publishToPubSubEvent,
    fetchHistory: launcher.fetchPubSubHistory,
    addComponent: launcher.addComponent,
    removeComponent: launcher.removeComponent,
  };
};
