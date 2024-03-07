import { Store, StoreType } from '../../common/types/stores.types';
import { Configuration } from '../../services/config/types';
import { EventBus } from '../../services/event-bus';
import { AblyRealtimeService } from '../../services/realtime';
import { useGlobalStore } from '../../services/stores';

export interface DefaultAttachComponentOptions {
  realtime: AblyRealtimeService;
  config: Configuration;
  eventBus: EventBus;
  useStore: <T extends StoreType>(name: T) => Store<T>;
}

export type GlobalStore = {
  [K in keyof ReturnType<typeof useGlobalStore>]: {
    subscribe(callback?: (value: unknown) => void): void;
  };
};
