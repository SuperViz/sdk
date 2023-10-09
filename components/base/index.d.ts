import { Group, Participant } from '../../common/types/participant.types';
import { Logger, Observable } from '../../common/utils';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';
import { ComponentNames } from '../types';
import { DefaultAttachComponentOptions } from './types';
export declare abstract class BaseComponent extends Observable {
    abstract name: ComponentNames;
    protected abstract logger: Logger;
    protected localParticipant: Participant;
    protected group: Group;
    protected realtime: AblyRealtimeService;
    protected eventBus: EventBus;
    protected isAttached: boolean;
    /**
     * @function attach
     * @description attach component
     * @returns {void}
     */
    attach: (params: DefaultAttachComponentOptions) => void;
    detach: () => void;
    protected abstract destroy(): void;
    protected abstract start(): void;
}
