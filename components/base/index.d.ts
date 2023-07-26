import { Participant } from '../../common/types/participant.types';
import { Logger } from '../../common/utils';
import { AblyRealtime } from '../../services/realtime/ably/types';
import { DefaultAttachComponentOptions } from './types';
export declare abstract class BaseComponent {
    protected localParticipant: Participant;
    protected realitme: AblyRealtime;
    protected abstract name: string;
    protected abstract logger: Logger;
    protected isAttached: boolean;
    /**
     * @function attach
     * @description attach component
     * @returns {void}
     */
    attach: ({ realtime, localParticipant }: DefaultAttachComponentOptions) => void;
    detach: () => void;
    protected abstract destroy(): void;
    protected abstract start(): void;
}
