import { Singleton } from '../common/types';
import { CreateSingleton } from '../common/utils';
import subject from '../subject';

const instance: Singleton<WhoIsOnlineStore> = CreateSingleton<WhoIsOnlineStore>();

export class WhoIsOnlineStore {
  public disablePresenceControls = subject<boolean>(false);

  constructor() {
    if (instance.value) {
      throw new Error('WhoIsOnlineStore is a singleton. There can only be one instance of it.');
    }

    instance.value = this;
  }

  public destroy() {
    this.disablePresenceControls.destroy();
    instance.value = null;
  }
}

const store = new WhoIsOnlineStore();
const destroy = store.destroy.bind(store) as () => void;

const disablePresenceControls = store.disablePresenceControls.expose();

export function useWhoIsOnlineStore() {
  return {
    disablePresenceControls,
    destroy,
  };
}

export type WhoIsOnlineStoreReturnType = ReturnType<typeof useWhoIsOnlineStore>;
