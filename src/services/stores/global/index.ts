import { Participant } from '../../../common/types/participant.types';
import { Singleton } from '../common/types';
import { CreateSingleton } from '../common/utils';
import subject from '../subject';

const instance: Singleton<GlobalStore> = CreateSingleton<GlobalStore>();

class GlobalStore {
  public localParticipant = subject<Participant>(null);
  public participants = subject<Participant[]>([]);

  constructor() {
    if (instance.value) {
      throw new Error('CommentsStore is a singleton. There can only be one instance of it.');
    }

    instance.value = this;
  }

  public destroy() {
    this.localParticipant.destroy();
    instance.value = null;
  }
}

const store = new GlobalStore();
const localParticipant = store.localParticipant.expose();
const participants = store.participants.expose();
const destroy = store.destroy.bind(store);

export function useGlobalStore() {
  return {
    localParticipant,
    participants,
    destroy,
  };
}
