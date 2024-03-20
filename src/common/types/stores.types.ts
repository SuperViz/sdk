import { useGlobalStore } from '../../services/stores';
import { PublicSubject } from '../../services/stores/common/types';

export enum StoreType {
  GLOBAL = 'global-store',
  COMMENTS = 'comments-store',
  WHO_IS_ONLINE = 'who-is-online-store',
}

type StoreApi<T extends (...args: any[]) => any> = {
  [K in keyof ReturnType<T>]: {
    subscribe(callback?: (value: keyof T) => void): void;
    subject: PublicSubject<keyof T>;
    publish<T>(value: T): void;
  };
};

// When creating new Stores, expand the ternary with the new Store. For example:
// ...T extends StoreType.GLOBAL ? StoreApi<typeof useGlobalStore> : T extends StoreType.WHO_IS_ONLINE ? StoreApi<typeof useWhoIsOnlineStore> : never;
// Yes, it will be a little bit verbose, but it's not like we'll be creating more and more Stores just for. Rarely will someone need to come here
export type Store<T> = T extends StoreType.GLOBAL ? StoreApi<typeof useGlobalStore> : never;
export type StoresTypes = typeof StoreType;
