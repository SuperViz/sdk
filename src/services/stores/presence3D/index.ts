import { Singleton } from '../common/types';
import { CreateSingleton } from '../common/utils';
import subject from '../subject';

const instance: Singleton<Presence3DStore> = CreateSingleton<Presence3DStore>();

export class Presence3DStore {
  public hasJoined3D = subject<boolean>(false);

  constructor() {
    if (instance.value) {
      throw new Error('Presence3DStore is a singleton. There can only be one instance of it.');
    }

    instance.value = this;
  }

  public destroy() {
    this.hasJoined3D.destroy();
  }
}

const store = new Presence3DStore();
const destroy = store.destroy.bind(store);

const hasJoined3D = store.hasJoined3D.expose();

export function usePresence3DStore() {
  return {
    hasJoined3D,
    destroy,
  };
}
