import { BehaviorSubject, distinctUntilChanged, shareReplay } from 'rxjs';
import type { Subscription } from 'rxjs';

import { PublicSubject } from '../common/types';

export class Subject<T> {
  public state: T;
  private subject: BehaviorSubject<T>;
  private subscriptions: Map<string | this, Subscription> = new Map();
  private showLog: boolean;

  constructor(state: T, subject: BehaviorSubject<T>, showLog?: boolean) {
    this.state = state;
    this.showLog = !!showLog;
    this.subject = subject.pipe(
      distinctUntilChanged(),
      shareReplay({ bufferSize: 1, refCount: true }),
    ) as BehaviorSubject<T>;
  }

  private getValue(): T {
    return this.state;
  }

  private setValue = (newValue: T): void => {
    this.state = newValue;
    this.subject.next(this.state);
  };

  public subscribe = (subscriptionId: string | this, callback: (value: T) => void) => {
    const subscription = this.subject.subscribe(callback);
    this.subscriptions.set(subscriptionId, subscription);
  };

  public unsubscribe(subscriptionId: string) {
    this.subscriptions.get(subscriptionId)?.unsubscribe();
    this.subscriptions.delete(subscriptionId);
  }

  public destroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.clear();
  }

  public expose(): PublicSubject<T> {
    const subscribe = this.subscribe.bind(this);
    const unsubscribe = this.unsubscribe.bind(this);
    const getter = this.getValue.bind(this);
    const setter = this.setValue.bind(this);

    return {
      get value() {
        return getter();
      },
      set value(newValue: T) {
        setter(newValue);
      },
      subscribe,
      unsubscribe,
    };
  }
}

export default function subject<T>(initialState: T, showLog?: boolean): Subject<T> {
  const subject = new BehaviorSubject<T>(initialState);

  return new Subject<T>(initialState, subject, showLog);
}
