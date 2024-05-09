import { Store, StoreType } from '../../common/types/stores.types';
import { Configuration } from '../../services/config/types';
import { EventBus } from '../../services/event-bus';
import { IOC } from '../../services/io';
import { AblyRealtimeService } from '../../services/realtime';
import { RoomStateService } from '../../services/roomState';
import { useGlobalStore } from '../../services/stores';

export interface DefaultAttachComponentOptions {
  ioc: IOC;
  realtime: AblyRealtimeService;
  config: Configuration;
  eventBus: EventBus;
  useStore: <T extends StoreType>(name: T) => Store<T>;
  roomState: RoomStateService;
}

export type GlobalStore = {
  [K in keyof ReturnType<typeof useGlobalStore>]: {
    subscribe(callback?: (value: unknown) => void): void;
  };
};
