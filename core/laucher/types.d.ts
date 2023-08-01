import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { BaseComponent } from '../../components/base';
import { PubSub } from '../../services/pubsub';
export interface DefaultLaucher {
}
export interface LaucherOptions extends Omit<SuperVizSdkOptions, 'environment' | 'debug' | 'roomId'> {
}
export interface LaucherFacade {
    subscribe: typeof PubSub.prototype.subscribe;
    unsubscribe: typeof PubSub.prototype.unsubscribe;
    publish: typeof PubSub.prototype.publish;
    fetchHistory: typeof PubSub.prototype.fetchHistory;
    addComponent: (component: BaseComponent) => void;
    removeComponent: (component: BaseComponent) => void;
}
