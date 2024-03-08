import { Group, Participant } from '../../../common/types/participant.types';
import { Singleton } from '../common/types';
import { CreateSingleton } from '../common/utils';
import subject from '../subject';

const instance: Singleton<GlobalStore> = CreateSingleton<GlobalStore>();

export class GlobalStore {
  public localParticipant = subject<Participant>(null, true);
  public participants = subject<Participant[]>([]);
  public group = subject<Group>(null);

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
const destroy = store.destroy.bind(store);

const group = store.group.expose();
const participants = store.participants.expose();
const localParticipant = store.localParticipant.expose();

export function useGlobalStore() {
  return {
    localParticipant,
    participants,
    destroy,
    group,
  };
}

export type GlobalStoreReturnType = ReturnType<typeof useGlobalStore>;
