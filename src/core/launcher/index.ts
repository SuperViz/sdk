import * as Socket from '@superviz/socket-client';
import { isEqual } from 'lodash';

import { ParticipantEvent } from '../../common/types/events.types';
import { Participant } from '../../common/types/participant.types';
import { StoreType } from '../../common/types/stores.types';
import { Observable } from '../../common/utils';
import { Logger } from '../../common/utils/logger';
import { useStore } from '../../common/utils/use-store';
import { BaseComponent } from '../../components/base';
import { ComponentNames } from '../../components/types';
import ApiService from '../../services/api';
import config from '../../services/config';
import { EventBus } from '../../services/event-bus';
import { IOC } from '../../services/io';
import { IOCState } from '../../services/io/types';
import LimitsService from '../../services/limits';
import { Presence3DManager } from '../../services/presence-3d-manager';
import { SlotService } from '../../services/slot';
import { useGlobalStore } from '../../services/stores';

import { DefaultLauncher, LauncherFacade, LauncherOptions } from './types';

export class Launcher extends Observable implements DefaultLauncher {
  protected readonly logger: Logger;

  private isDestroyed = false;
  private activeComponents: ComponentNames[] = [];
  private componentsToAttachAfterJoin: Partial<BaseComponent>[] = [];
  private activeComponentsInstances: Partial<BaseComponent>[] = [];

  private ioc: IOC;
  private room: Socket.Room;
  private eventBus: EventBus = new EventBus();
  private timestamp: number = 0;

  private useStore = useStore.bind(this) as typeof useStore;

  constructor({ participant, group: participantGroup }: LauncherOptions) {
    super();
    this.logger = new Logger('@superviz/sdk/launcher');

    const { localParticipant, participants, group, isDomainWhitelisted } = this.useStore(
      StoreType.GLOBAL,
    );

    localParticipant.publish({ ...participant });
    participants.subscribe(this.onParticipantListUpdate);
    isDomainWhitelisted.subscribe(this.onAuthentication);
    localParticipant.subscribe(this.onLocalParticipantUpdate);

    group.publish(participantGroup);
    this.ioc = new IOC(localParticipant.value);
    this.room = this.ioc.createRoom('launcher');

    // internal events without realtime
    this.eventBus = new EventBus();

    this.logger.log('launcher created');

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

    const { hasJoinedRoom, localParticipant, group } = useStore(StoreType.GLOBAL);

    if (!hasJoinedRoom.value) {
      this.logger.log('launcher service @ addComponent - not joined yet');
      this.componentsToAttachAfterJoin.push(component);
      return;
    }

    component.attach({
      ioc: this.ioc,
      config: config.configuration,
      eventBus: this.eventBus,
      useStore,
      Presence3DManagerService: Presence3DManager,
    });

    this.activeComponents.push(component.name);
    this.activeComponentsInstances.push(component);

    localParticipant.publish({
      ...localParticipant.value,
      activeComponents: this.activeComponents,
    });

    ApiService.sendActivity(
      localParticipant.value.id,
      group.value.id,
      group.value.name,
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

    const { localParticipant } = this.useStore(StoreType.GLOBAL);

    this.activeComponents.splice(this.activeComponents.indexOf(component.name), 1);
    localParticipant.publish({
      ...localParticipant.value,
      activeComponents: this.activeComponents,
    });
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

    useGlobalStore().destroy();

    this.eventBus.destroy();
    this.eventBus = undefined;

    this.room?.presence.off(Socket.PresenceEvents.JOINED_ROOM);
    this.room?.presence.off(Socket.PresenceEvents.LEAVE);
    this.room?.presence.off(Socket.PresenceEvents.UPDATE);
    this.ioc?.destroy();

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
    const isProvidedFeature = config.get<boolean>(`features.${component.name}`);
    const hasComponentLimit = LimitsService.checkComponentLimit(component.name);
    const isComponentActive = this.activeComponents?.includes(component.name);

    const verifications = [
      {
        isValid: isProvidedFeature,
        message: `Component ${component.name} is not enabled in the room`,
      },
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

  private onAuthentication = (isAuthenticated: boolean): void => {
    if (isAuthenticated) return;

    this.destroy();
    console.error(
      `Room can't be initialized because this website's domain is not whitelisted. If you are the developer, please add your domain in https://dashboard.superviz.com/developer`,
    );
  };

  private onLocalParticipantUpdate = (participant: Participant): void => {
    this.activeComponents = participant.activeComponents || [];

    if (this.activeComponents.length) {
      this.activeComponentsInstances = this.activeComponentsInstances.filter((ac) => {
        return this.activeComponents.includes(ac.name);
      });
    }
  };

  /**
   * @function onParticipantListUpdate
   * @description on participant list update
   * @param participants - participants list
   * @returns {void}
   */
  private onParticipantListUpdate = (participants: Record<string, Participant>): void => {
    this.logger.log('launcher service @ onParticipantListUpdate', participants);
    const { localParticipant } = useStore(StoreType.GLOBAL);

    const participant: Participant = Object.values(participants)
      .filter((participant) => participant.id === localParticipant.value.id)
      .map((participant) => {
        return {
          ...participant,
          color: participant.slot?.color,
        };
      })[0];

    if (!participant || isEqual(localParticipant.value, participant)) return;

    localParticipant.publish({
      ...localParticipant.value,
      ...participant,
    });

    this.activeComponentsInstances = this.activeComponentsInstances.filter((component) => {
      /**
       * @NOTE - Prevents removing all components when
       * in the first update, activeComponents is undefined.
       * It means we should keep all instances
       */
      if (!participant.activeComponents) return true;

      return this.activeComponents.includes(component.name);
    });
  };

  /**
   * @function onParticipantJoined
   * @description on participant joined
   * @param ablyParticipant - ably participant
   * @returns {void}
   */
  private onParticipantJoined = (participant: Socket.PresenceEvent<Participant>): void => {
    const { localParticipant } = useStore(StoreType.GLOBAL);
    if (participant.id !== localParticipant.value.id) return;

    this.logger.log('launcher service @ onParticipantJoined - local participant joined');
    this.attachComponentsAfterJoin();
  };

  private onSameAccount = (): void => {
    this.publish(ParticipantEvent.SAME_ACCOUNT_ERROR);
    this.destroy();
  };

  /** IO */

  /**
   * @function startIOC
   * @description start IO service
   * @returns {void}
   */

  private startIOC = (): void => {
    this.logger.log('launcher service @ startIOC');
    const { participants, localParticipant } = useStore(StoreType.GLOBAL);
    // retrieve the current participants in the room

    this.ioc.stateSubject.subscribe((state) => {
      if (state === IOCState.AUTH_ERROR) {
        this.onAuthentication(false);
      }
    });
    this.room.presence.get((presences) => {
      const participantsMap: Record<string, Participant> = {};

      presences.forEach((presence) => {
        participantsMap[presence.id] = {
          ...(presence.data as Participant),
          name: presence.name,
          id: presence.id,
          timestamp: presence.timestamp,
        };
      });

      participantsMap[localParticipant.value.id] = {
        ...participantsMap[localParticipant.value.id],
        ...localParticipant.value,
      };

      participants.publish(participantsMap);
    });

    this.room.presence.on<Participant>(
      Socket.PresenceEvents.JOINED_ROOM,
      this.onParticipantJoinedIOC,
    );

    this.room.presence.on<Participant>(Socket.PresenceEvents.LEAVE, this.onParticipantLeaveIOC);

    this.room.presence.on<Participant>(Socket.PresenceEvents.UPDATE, this.onParticipantUpdatedIOC);

    const { hasJoinedRoom } = useStore(StoreType.GLOBAL);
    hasJoinedRoom.publish(true);
  };

  /**
   * @function onParticipantJoinedIOC
   * @description on participant joined
   * @param presence - participant presence
   * @returns {void}
   */
  private onParticipantJoinedIOC = async (
    presence: Socket.PresenceEvent<Participant>,
  ): Promise<void> => {
    const { localParticipant } = useStore(StoreType.GLOBAL);
    if (presence.id !== localParticipant.value.id) return;

    // Assign a slot to the participant
    const slot = new SlotService(this.room);
    await slot.assignSlot();

    this.timestamp = presence.timestamp;

    this.room.presence.update(localParticipant.value);

    this.logger.log('launcher service @ onParticipantJoined - local participant joined');
    this.onParticipantJoined(presence);
    this.publish(ParticipantEvent.LOCAL_JOINED, localParticipant.value);
    this.publish(ParticipantEvent.JOINED, localParticipant.value);
  };

  /**
   * @function onParticipantLeaveIOC
   * @description on participant leave
   * @param presence - participant presence
   * @returns {void}
   */
  private onParticipantLeaveIOC = (presence: Socket.PresenceEvent<Participant>): void => {
    const { participants, localParticipant } = useStore(StoreType.GLOBAL);
    const participantsMap = { ...participants.value };
    delete participantsMap[presence.id];

    participants.publish(participantsMap);

    if (presence.id === localParticipant.value.id) {
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
    const { localParticipant } = useStore(StoreType.GLOBAL);

    if (
      localParticipant.value &&
      presence.id === localParticipant.value.id &&
      !isEqual(localParticipant.value, presence.data)
    ) {
      if (presence.data.timestamp === this.timestamp) {
        this.timestamp = 0;
        return;
      }

      localParticipant.publish({
        ...presence.data,
        ...localParticipant.value,
        timestamp: presence.timestamp,
      } as Participant);

      this.timestamp = presence.timestamp;
      this.room.presence.update(localParticipant.value);

      this.publish(ParticipantEvent.LOCAL_UPDATED, presence.data);

      this.logger.log('Publishing ParticipantEvent.UPDATED', presence.data);
    }

    const { participants } = useStore(StoreType.GLOBAL);

    if (!participants.value[presence.id]) {
      this.publish(ParticipantEvent.JOINED, presence.data);
    }

    const participantsMap = { ...participants.value };
    participantsMap[presence.id] = {
      ...presence.data,
      ...participants.value[presence.id],
      timestamp: presence.timestamp,
    };

    participants.publish(participantsMap);

    const participantList = Object.values(participants.value);
    this.logger.log('Publishing ParticipantEvent.LIST_UPDATED', participants.value);
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
