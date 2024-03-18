import * as Socket from '@superviz/socket-client';
import { isEqual } from 'lodash';

import { ParticipantEvent, RealtimeEvent } from '../../common/types/events.types';
import { Group, Participant, ParticipantType } from '../../common/types/participant.types';
import { Observable } from '../../common/utils';
import { Logger } from '../../common/utils/logger';
import { useStore } from '../../common/utils/use-store';
import { BaseComponent } from '../../components/base';
import { ComponentNames } from '../../components/types';
import ApiService from '../../services/api';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import { IOC } from '../../services/io';
import LimitsService from '../../services/limits';
import { AblyRealtimeService } from '../../services/realtime';
import { AblyParticipant } from '../../services/realtime/ably/types';
import { SlotService } from '../../services/slot';
import { useGlobalStore } from '../../services/stores';
import { PublicSubject } from '../../services/stores/common/types';

import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';

export class Launcher extends Observable implements DefaultLauncher {
  protected readonly logger: Logger;

  private isDestroyed = false;
  private activeComponents: ComponentNames[] = [];
  private componentsToAttachAfterJoin: Partial<BaseComponent>[] = [];
  private activeComponentsInstances: Partial<BaseComponent>[] = [];

  private ioc: IOC;
  private LauncherRealtimeRoom: Socket.Room;
  private realtime: AblyRealtimeService;
  private eventBus: EventBus = new EventBus();

  private participant: PublicSubject<Participant>;
  private participants: PublicSubject<Map<string, Participant>>;
  private group: PublicSubject<Group>;

  constructor({ participant, group: participantGroup }: LauncherOptions) {
    super();
    const { localParticipant, participants, group } = useGlobalStore();

    this.participant = localParticipant;
    this.participants = participants;
    this.group = group;

    this.participant.value = {
      ...participant,
      type: ParticipantType.GUEST,
    };
    this.group.value = participantGroup;

    this.logger = new Logger('@superviz/sdk/launcher');

    // Ably realtime service
    this.realtime = new AblyRealtimeService(
      config.get<string>('apiUrl'),
      config.get<string>('ablyKey'),
    );

    // SuperViz IO Room
    this.ioc = new IOC(this.participant.value);
    this.LauncherRealtimeRoom = this.ioc.createRoom('launcher');

    // internal events without realtime
    this.eventBus = new EventBus();

    this.logger.log('launcher created');

    this.startAbly();
    this.startIOC();
  }

  /**
   * @function addComponent
   * @description add component to launcher
   * @param component - component to add
   * @returns {void}
   */
  public addComponent = (component: Partial<BaseComponent>): void => {
    if (!this.canAddComponent(component)) return;

    if (!this.realtime.isJoinedRoom) {
      this.logger.log('launcher service @ addComponent - not joined yet');
      this.componentsToAttachAfterJoin.push(component);
      return;
    }

    component.attach({
      ioc: this.ioc,
      realtime: this.realtime,
      config: config.configuration,
      eventBus: this.eventBus,
      useStore,
    });

    this.activeComponents.push(component.name);
    this.activeComponentsInstances.push(component);
    this.realtime.updateMyProperties({ activeComponents: this.activeComponents });

    ApiService.sendActivity(
      this.participant.value.id,
      this.group.value.id,
      this.group.value.name,
      component.name,
    );
  };

  /**
   * @function attachComponentsAfterJoin
   * @description attach components after join
   * @returns {void}
   */
  private attachComponentsAfterJoin = (): void => {
    this.logger.log('launcher service @ attachComponentsAfterJoin');

    this.componentsToAttachAfterJoin.forEach((component) => {
      this.logger.log(
        'launcher service @ attachComponentsAfterJoin - attaching component',
        component.name,
      );
      this.addComponent(component);
    });

    this.componentsToAttachAfterJoin = [];
  };

  /**
   * @function removeComponent
   * @description remove component from launcher
   * @param component - component to remove
   * @returns {void}
   */
  public removeComponent = (component: Partial<BaseComponent>): void => {
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
    useGlobalStore().destroy();

    this.eventBus.destroy();
    this.eventBus = undefined;

    this.LauncherRealtimeRoom.presence.off(Socket.PresenceEvents.JOINED_ROOM);
    this.LauncherRealtimeRoom.presence.off(Socket.PresenceEvents.LEAVE);
    this.LauncherRealtimeRoom.presence.off(Socket.PresenceEvents.UPDATE);

    this.ioc.destroy();

    this.realtime.authenticationObserver.unsubscribe(this.onAuthentication);
    this.realtime.sameAccountObserver.unsubscribe(this.onSameAccount);
    this.realtime.participantJoinedObserver.unsubscribe(this.onParticipantJoined);
    this.realtime.participantsObserver.unsubscribe(this.onParticipantListUpdate);
    this.realtime.leave();
    this.realtime = undefined;
    this.isDestroyed = true;

    // clean window object
    window.SUPERVIZ = undefined;
  };

  /**
   * @function canAddComponent
   * @description verifies if component can be added
   * @param component - component to be added
   * @returns {boolean}
   */
  private canAddComponent = (component: Partial<BaseComponent>): boolean => {
    const hasComponentLimit = LimitsService.checkComponentLimit(component.name);
    const isComponentActive = this.activeComponents.includes(component.name);

    const verifications = [
      {
        isValid: !this.isDestroyed,
        message:
          'Component can not be added because the superviz room is destroyed. Initialize a new room to add and use components.',
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
   * @function startAbly
   * @description start realtime service and join to room
   * @returns {void}
   */
  private startAbly = (): void => {
    this.logger.log('launcher service @ startAbly');

    this.realtime.start({
      participant: this.participant.value,
      apiKey: config.get<string>('apiKey'),
      roomId: config.get<string>('roomId'),
    });

    this.realtime.join();

    // subscribe to realtime events
    this.subscribeToAblyEvents();
  };

  /**
   * @function subscribeToAblyEvents
   * @description subscribe to realtime events
   * @returns {void}
   */
  private subscribeToAblyEvents = (): void => {
    this.realtime.authenticationObserver.subscribe(this.onAuthentication);
    this.realtime.sameAccountObserver.subscribe(this.onSameAccount);
    this.realtime.participantJoinedObserver.subscribe(this.onParticipantJoined);
    this.realtime.participantsObserver.subscribe(this.onParticipantListUpdate);
  };

  /** Ably Listeners */

  private onAuthentication = (event: RealtimeEvent): void => {
    if (event !== RealtimeEvent.REALTIME_AUTHENTICATION_FAILED) return;

    this.destroy();
    console.error(
      `Room can't be initialized because this website's domain is not whitelisted. If you are the developer, please add your domain in https://dashboard.superviz.com/developer`,
    );
  };

  /**
   * @function onParticipantListUpdate
   * @description on participant list update
   * @param participants - participants list
   * @returns {void}
   */
  private onParticipantListUpdate = (participants: Record<string, AblyParticipant>): void => {
    this.logger.log('launcher service @ onParticipantListUpdate', participants);

    const participantList: Participant[] = Object.values(participants).map((participant) => ({
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
      return participant?.id === this.participant.value?.id;
    });

    if (localParticipant && !isEqual(this.participant.value, localParticipant)) {
      this.LauncherRealtimeRoom.presence.update<Participant>(localParticipant);
    }
  };

  /**
   * @function onParticipantJoined
   * @description on participant joined
   * @param ablyParticipant - ably participant
   * @returns {void}
   */
  private onParticipantJoined = (ablyParticipant: AblyParticipant): void => {
    if (ablyParticipant.clientId !== this.participant.value.id) return;

    this.logger.log('launcher service @ onParticipantJoined - local participant joined');
    this.attachComponentsAfterJoin();
  };

  private onSameAccount = (): void => {
    this.publish(ParticipantEvent.SAME_ACCOUNT_ERROR);
    this.destroy();
  };

  /** New IO */

  /**
   * @function startIOC
   * @description start IO service
   * @returns {void}
   */

  private startIOC = (): void => {
    this.logger.log('launcher service @ startIOC');

    this.LauncherRealtimeRoom.presence.on<Participant>(
      Socket.PresenceEvents.JOINED_ROOM,
      this.onParticipantJoinedIOC,
    );

    this.LauncherRealtimeRoom.presence.on<Participant>(
      Socket.PresenceEvents.LEAVE,
      this.onParticipantLeaveIOC,
    );

    this.LauncherRealtimeRoom.presence.on<Participant>(
      Socket.PresenceEvents.UPDATE,
      this.onParticipantUpdatedIOC,
    );
  };

  /**
   * @function onParticipantJoinedIOC
   * @description on participant joined
   * @param presence - participant presence
   * @returns {void}
   */
  private onParticipantJoinedIOC = (presence: Socket.PresenceEvent<Participant>): void => {
    if (presence.id === this.participant.value.id) {
      // Assign a slot to the participant
      SlotService.register(this.LauncherRealtimeRoom, this.realtime, this.participant.value);
      this.LauncherRealtimeRoom.presence.update<Participant>(this.participant.value);
    }

    // When the participant joins, it is without any data, it's updated later
    this.participants.value.set(presence.id, {
      id: presence.id,
      name: presence.name,
      ...presence.data,
    });

    if (presence.id === this.participant.value.id) {
      this.logger.log('launcher service @ onParticipantJoined - local participant joined');
      this.publish(ParticipantEvent.LOCAL_JOINED, this.participant.value);
    }

    this.logger.log('launcher service @ onParticipantJoined - participant joined', presence.data);

    this.publish(ParticipantEvent.JOINED, this.participants.value.get(presence.id));
  };

  /**
   * @function onParticipantLeaveIOC
   * @description on participant leave
   * @param presence - participant presence
   * @returns {void}
   */
  private onParticipantLeaveIOC = (presence: Socket.PresenceEvent<Participant>): void => {
    this.participants.value.delete(presence.id);

    if (presence.id === this.participant.value.id) {
      this.logger.log('launcher service @ onParticipantLeave - local participant left');
      this.publish(ParticipantEvent.LOCAL_LEFT, presence.data);
    }

    this.logger.log('launcher service @ onParticipantLeave - participant left', presence.data);
    this.publish(ParticipantEvent.LEFT, presence.data);
  };

  /**
   * @function onParticipantUpdatedIOC
   * @description on participant updated
   * @param presence - participant presence
   * @returns {void}
   */
  private onParticipantUpdatedIOC = (presence: Socket.PresenceEvent<Participant>): void => {
    if (
      presence.id === this.participant.value.id &&
      !isEqual(this.participant.value, presence.data)
    ) {
      this.activeComponentsInstances = this.activeComponentsInstances.filter((component) => {
        /**
         * @NOTE - Prevents removing all components when
         * in the first update, activeComponents is undefined.
         * It means we should keep all instances
         */
        if (!presence.data.activeComponents) return true;

        return this.activeComponents.includes(component.name);
      });

      this.participant.value = presence.data;
      this.publish(ParticipantEvent.LOCAL_UPDATED, presence.data);

      this.logger.log('Publishing ParticipantEvent.UPDATED', presence.data);
    }

    this.participants.value.set(presence.id, presence.data);
    const participantList = Array.from(this.participants.value.values());

    this.logger.log('Publishing ParticipantEvent.LIST_UPDATED', this.participants.value);
    this.publish(ParticipantEvent.LIST_UPDATED, participantList);
  };
}

/**
 * @function Launcher
 * @description create launcher instance
 * @param options - launcher options
 * @returns {LauncherFacade}
 */
export default (options: LauncherOptions): LauncherFacade => {
  if (window.SUPERVIZ) {
    console.warn('[SUPERVIZ] Room already initialized');

    return {
      destroy: window.SUPERVIZ.destroy,
      subscribe: window.SUPERVIZ.subscribe,
      unsubscribe: window.SUPERVIZ.unsubscribe,
      addComponent: window.SUPERVIZ.addComponent,
      removeComponent: window.SUPERVIZ.removeComponent,
    };
  }

  const launcher = new Launcher(options);

  window.SUPERVIZ = launcher;

  return {
    destroy: launcher.destroy,
    subscribe: launcher.subscribe,
    unsubscribe: launcher.unsubscribe,
    addComponent: launcher.addComponent,
    removeComponent: launcher.removeComponent,
  };
};
