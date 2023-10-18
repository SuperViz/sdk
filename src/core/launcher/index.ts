import { isEqual } from 'lodash';

import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Group, Participant } from '../../common/types/participant.types';
import { Observable } from '../../common/utils';
import { Logger } from '../../common/utils/logger';
import { BaseComponent } from '../../components/base';
import { ComponentNames } from '../../components/types';
import ApiService from '../../services/api';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import LimitsService from '../../services/limits';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { HostObserverCallbackResponse } from '../../services/realtime/base/types';

import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';

export class Launcher extends Observable implements DefaultLauncher {
  private readonly shouldKickParticipantsOnHostLeave: boolean;
  protected readonly logger: Logger;

  private activeComponents: ComponentNames[] = [];
  private participant: Participant;
  private group: Group;

  private readonly realtime: AblyRealtimeService;
  private readonly eventBus: EventBus = new EventBus();

  private participants: Participant[] = [];

  constructor({ participant, group, shouldKickParticipantsOnHostLeave }: LauncherOptions) {
    super();

    this.shouldKickParticipantsOnHostLeave = shouldKickParticipantsOnHostLeave ?? true;
    this.participant = participant as Participant;
    this.group = group;

    this.logger = new Logger('@superviz/sdk/launcher');
    this.realtime = new AblyRealtimeService(
      config.get<string>('apiUrl'),
      config.get<string>('ablyKey'),
    );

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
    const hasComponentLimit = LimitsService.checkComponentLimit(component.name);
    const isComponentActive = this.activeComponents.includes(component.name);

    if (isComponentActive) {
      const message = `Component ${component.name} is already active. Please remove it first`;
      this.logger.log(message);
      console.error(message);
      return;
    }

    if (!hasComponentLimit) {
      const message = `You reached the limit usage of ${component.name}`;
      this.logger.log(message);
      console.error(message);
      return;
    }

    component.attach({
      localParticipant: this.participant,
      realtime: this.realtime,
      group: this.group,
      config: config.configuration,
      eventBus: this.eventBus,
    });

    this.activeComponents.push(component.name);
    this.realtime.updateMyProperties({ activeComponents: this.activeComponents });

    ApiService.sendActivity(this.participant.id, this.group.id, this.group.name, component.name);
    ApiService.createOrUpdateParticipant(config.get<string>('apiKey'), {
      name: this.participant?.name,
      participantId: this.participant?.id,
    });
  };

  /**
   * @function removeComponent
   * @description remove component from launcher
   * @param component - component to remove
   * @returns {void}
   */
  public removeComponent = (component: BaseComponent): void => {
    if (!this.activeComponents.includes(component.name)) {
      const message = `Component ${component.name} is not initialized yet.`;
      this.logger.log(message);
      console.error(message);
      return;
    }

    component.detach();

    this.activeComponents.splice(this.activeComponents.indexOf(component.name), 1);
    this.realtime.updateMyProperties({ activeComponents: this.activeComponents });
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
    this.realtime.hostAvailabilityObserver.subscribe(this.onHostAvailabilityChange);
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
      this.publish(ParticipantEvent.LIST_UPDATED, participantList);

      this.logger.log('Publishing ParticipantEvent.LIST_UPDATED', participantList);
    }

    if (localParticipant && !isEqual(this.participant, localParticipant)) {
      this.participant = localParticipant;
      this.publish(ParticipantEvent.LOCAL_UPDATED, localParticipant);

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
      this.publish(ParticipantEvent.LOCAL_JOINED, participant);
    }

    this.logger.log('launcher service @ onParticipantJoined - participant joined', participant);
    this.publish(ParticipantEvent.JOINED, participant);
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
      this.publish(ParticipantEvent.LOCAL_LEFT, participant);
    }

    this.logger.log('launcher service @ onParticipantLeave - participant left', participant);
    this.publish(ParticipantEvent.LEFT, participant);
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
      this.realtime.setSyncProperty(RealtimeEvent.REALTIME_HOST_CHANGE, newHost);
      this.publish(RealtimeEvent.REALTIME_HOST_CHANGE, newHost);
    }
  };

  /**
   * @function onHostAvailabilityChange
   * @description Callback function that is called when the availability of the host changes.
   * @param {boolean} isHostAvailable - A boolean indicating whether the host is available or not.
   * @returns {void}
   */
  private onHostAvailabilityChange = (isHostAvailable: boolean): void => {
    this.logger.log('launcher service @ onHostAvailabilityChange');

    if (isHostAvailable) {
      this.publish(RealtimeEvent.REALTIME_HOST_AVAILABLE);
      return;
    }
    this.publish(RealtimeEvent.REALTIME_NO_HOST_AVAILABLE);
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
    subscribe: launcher.subscribe,
    unsubscribe: launcher.unsubscribe,
    addComponent: launcher.addComponent,
    removeComponent: launcher.removeComponent,
  };
};
