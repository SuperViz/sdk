import { SuperVizSdkOptions } from '../../common/types/sdk-options.types';
import { PubSub } from '../../services/pubsub';

export interface DefaultLaucher {}

export interface LaucherOptions extends Omit<SuperVizSdkOptions, 'environment' | 'debug'> {
  apiUrl: string;
  apiKey: string;
  ablyKey: string;
  conferenceLayerUrl: string;
}

export interface LaucherFacade {
  subscribe: typeof PubSub.prototype.subscribe;
  unsubscribe: typeof PubSub.prototype.unsubscribe;
  publish: typeof PubSub.prototype.publish;
  fetchHistory: typeof PubSub.prototype.fetchHistory;
}