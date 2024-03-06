import { Participant } from '../../../common/types/participant.types';
import { Singleton } from '../common/types';
import { CreateSingleton } from '../common/utils';
import subject from '../subject';

const instance: Singleton<WhoIsOnlineStore> = CreateSingleton<WhoIsOnlineStore>();

export class WhoIsOnlineStore {
  public participantHasJoinedPresence = subject<Participant>(null);

  constructor() {
    if (instance.value) {
      throw new Error('CommentsStore is a singleton. There can only be one instance of it.');
    }

    instance.value = this;
  }

  public destroy() {
    this.participantHasJoinedPresence.destroy();
    instance.value = null;
  }
}

const store = new WhoIsOnlineStore();
const participantHasJoinedPresence = store.participantHasJoinedPresence.expose();
const destroy = store.destroy.bind(store);

export function useWhoIsOnlineStore() {
  return {
    participantHasJoinedPresence,
    destroy,
  };
}
