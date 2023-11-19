import { isEqual } from 'lodash';

import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Group, Participant, ParticipantType } from '../../common/types/participant.types';
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
  protected readonly logger: Logger;

  private isDestroyed = false;
  private activeComponents: ComponentNames[] = [];
  private activeComponentsInstances: BaseComponent[] = [];
  private participant: Participant;
  private group: Group;

  private realtime: AblyRealtimeService;
  private eventBus: EventBus = new EventBus();

  private participants: Participant[] = [];
  constructor({ participant, group }: LauncherOptions) {
    super();

    this.participant = {
      ...participant,
      type: ParticipantType.GUEST,
    };

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
    if (!this.canAddComponent(component)) return;

    component.attach({
      localParticipant: this.participant,
      realtime: this.realtime,
      group: this.group,
      config: config.configuration,
      eventBus: this.eventBus,
    });

    this.activeComponents.push(component.name);
    this.activeComponentsInstances.push(component);
    this.realtime.updateMyProperties({ activeComponents: this.activeComponents });

    const name =
      component.name === ComponentNames.WHO_IS_ONLINE ? ComponentNames.PRESENCE : component.name;
    ApiService.sendActivity(this.participant.id, this.group.id, this.group.name, name);
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

    this.activeComponentsInstances = this.activeComponentsInstances.filter((c) => {
      return c.name !== component.name;
    });
    this.activeComponents.splice(this.activeComponents.indexOf(component.name), 1);
    this.realtime.updateMyProperties({ activeComponents: this.activeComponents });
  };

  /**
   * @function destroy
   * @description destroy launcher and all components
   * @returns {void}
   */
  public destroy = (): void => {
    this.logger.log('launcher service @ destroy');

    this.activeComponentsInstances.forEach((component: BaseComponent) => {
      this.logger.log('launcher service @ destroy - removing component', component.name);
      this.removeComponent(component);
    });

    this.activeComponents = [];
    this.activeComponentsInstances = [];
    this.participant = undefined;

    this.eventBus.destroy();
    this.eventBus = undefined;

    this.realtime.participantJoinedObserver.unsubscribe(this.onParticipantJoined);
    this.realtime.participantLeaveObserver.unsubscribe(this.onParticipantLeave);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantListUpdate);
    this.realtime.hostObserver.unsubscribe(this.onHostParticipantDidChange);
    this.realtime.hostAvailabilityObserver.unsubscribe(this.onHostAvailabilityChange);
    this.realtime.leave();
    this.realtime = undefined;
    this.isDestroyed = true;
  };

  /**
   * @function canAddComponent
   * @description verifies if component can be added
   * @param component - component to be added
   * @returns {boolean}
   */
  private canAddComponent = (component: BaseComponent): boolean => {
    const isWhitelisted = this.realtime?.isDomainWhitelisted;
    const hasComponentLimit = LimitsService.checkComponentLimit(component.name);
    const isComponentActive = this.activeComponents.includes(component.name);

    const verifications = [
      {
        isValid: !this.isDestroyed,
        message:
          'Component can not be added because the superviz room is destroyed. Initialize a new room to add and use components.',
      },
      {
        isValid: isWhitelisted,
        message: `Component ${component.name} can't be used because this website's domain is not whitelisted. If you are the developer, please add your domain in https://dev-dashboard.superviz.com/developer`,
      },
      {
        isValid: !isComponentActive,
        message: `Component ${component.name} is already active. Please remove it first`,
      },
      {
        isValid: hasComponentLimit,
        message: `You reached the limit usage of ${component.name}`,
      },
    ];

    for (let i = 0; i < verifications.length; i++) {
      const { isValid, message } = verifications[i];

      if (!isValid) {
        this.logger.log(message);
        console.error(message);
        return false;
      }
    }

    return true;
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
    this.logger.log('launcher service @ onParticipantListUpdate', participants);

    const participantList = Object.values(participants).map((participant) => ({
      id: participant.data.id,
      name: participant.data?.name,
      type: participant.data?.type,
      avatar: participant.data?.avatar,
      avatarConfig: participant.data?.avatarConfig,
      isHost: this.realtime.hostClientId === participant.clientId,
      color: this.realtime.getSlotColor(participant.data?.slotIndex).color,
      activeComponents: participant.data?.activeComponents,
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
      this.activeComponents = localParticipant.activeComponents ?? [];
      this.activeComponentsInstances = this.activeComponentsInstances.filter((component) => {
        /**
         * @NOTE - Prevents removing all components when
         * in the first update, activeComponents is undefined.
         * It means we should keep all instances
         */
        if (!localParticipant.activeComponents) return true;

        return this.activeComponents.includes(component.name);
      });
      this.participant = localParticipant;
      this.publish(ParticipantEvent.LOCAL_UPDATED, localParticipant);

      this.logger.log('Publishing ParticipantEvent.UPDATED', localParticipant);
    }

    this.logger.log(
      'launcher service @ onParticipantListUpdate - participants updated',
      participantList,
    );
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
    destroy: launcher.destroy,
    subscribe: launcher.subscribe,
    unsubscribe: launcher.unsubscribe,
    addComponent: launcher.addComponent,
    removeComponent: launcher.removeComponent,
  };
};
