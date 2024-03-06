import { PublicSubject } from '../../services/stores/common/types';
import { useGlobalStore } from '../../services/stores/global';
import { Store, StoreType, StoresTypes } from '../types/stores.types';

const stores = {
  [StoreType.GLOBAL]: useGlobalStore,
};

/**
 * @function subscribe
 * @description Subscribes to a subject and either update the value of the property each time there is a change, or call the callback that provides a custom behavior to the subscription
 * @param name The name of the property to be updated in case there isn't a callback
 * @param subject The subject to be subscribed
 * @param callback The callback to be called each time there is a change
 */
function subscribeTo<T>(
  name: string,
  subject: PublicSubject<T>,
  callback?: (value: T) => void,
): void {
  subject.subscribe(this, () => {
    this[name] = subject.value;

    if (callback) {
      callback(subject.value);
    }
  });

  this.unsubscribeFrom.push(subject.unsubscribe);
}

/**
 * @function useGlobalStore
 * @description Returns a proxy of the global store data and a subscribe function to be used in the components
 */
export function useStore<T extends StoreType>(name: T): Store<T> {
  // @TODO - Improve types to get better sugestions when writing code
  const storeData = stores[name as StoreType]();
  const bindedSubscribeTo = subscribeTo.bind(this);

  const proxy = new Proxy(storeData, {
    get(store: Store<T>, valueName: string) {
      return {
        subscribe<K extends Store<T>>(callback?: (value: K) => void) {
          bindedSubscribeTo(valueName, store[valueName], callback);
        },
        subject: store[valueName] as typeof storeData,
        publish(newValue: keyof Store<T>) {
          this.subject.value = newValue;
        },
      };
    },
  });

  return proxy;
}
