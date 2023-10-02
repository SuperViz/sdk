import { Group, Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';
import { ComponentNames } from '../types';
import { DefaultAttachComponentOptions } from './types';
export declare abstract class BaseComponent {
    private observers;
    protected localParticipant: Participant;
    protected group: Group;
    protected realtime: AblyRealtimeService;
    protected eventBus: EventBus;
    abstract name: ComponentNames;
    protected abstract logger: Logger;
    protected isAttached: boolean;
    /**
     * @function attach
     * @description attach component
     * @returns {void}
     */
    attach: (params: DefaultAttachComponentOptions) => void;
    detach: () => void;
    /**
     * @function subscribe
     * @description Subscribe to an event
     * @param type - event type
     * @param listener - event callback
     * @returns {void}
     */
    subscribe: (type: string, listener: Function) => void;
    /**
     * @function unsubscribe
     * @description Unsubscribe from an event
     * @param type - event type
     * @returns {void}
     */
    unsubscribe: (type: string) => void;
    /**
     * @function publish
     * @description Publish an event to client
     * @param type - event type
     * @param data - event data
     * @returns {void}
     */
    protected publish: (type: string, data?: unknown) => void;
    protected abstract destroy(): void;
    protected abstract start(): void;
}
