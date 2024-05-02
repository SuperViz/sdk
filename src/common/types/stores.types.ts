import { useGlobalStore } from '../../services/stores';
import { usePresence3DStore } from '../../services/stores/presence3D';
import { useVideoStore } from '../../services/stores/video';
import { useWhoIsOnlineStore } from '../../services/stores/who-is-online/index';

export enum StoreType {
  GLOBAL = 'global-store',
  COMMENTS = 'comments-store',
  WHO_IS_ONLINE = 'who-is-online-store',
  VIDEO = 'video-store',
  PRESENCE_3D = 'presence-3d-store',
}

type Subject<T extends (...args: any[]) => any, K extends keyof ReturnType<T>> = ReturnType<T>[K];

type StoreApiWithoutDestroy<T extends (...args: any[]) => any> = {
  [K in keyof ReturnType<T>]: {
    subscribe(callback?: (value: Subject<T, K>['value']) => void): void;
    subject: Subject<T, K>;
    publish(value: Subject<T, K>['value']): void;
    value: Subject<T, K>['value'];
  };
};

type StoreApi<T extends (...args: any[]) => any> = Omit<StoreApiWithoutDestroy<T>, 'destroy'> & {
  destroy(): void;
};

export type Store<T> = T extends StoreType.GLOBAL
  ? StoreApi<typeof useGlobalStore>
  : T extends StoreType.WHO_IS_ONLINE
  ? StoreApi<typeof useWhoIsOnlineStore>
  : T extends StoreType.VIDEO
  ? StoreApi<typeof useVideoStore>
  : T extends StoreType.PRESENCE_3D
  ? StoreApi<typeof usePresence3DStore>
  : never;
export type StoresTypes = typeof StoreType;
