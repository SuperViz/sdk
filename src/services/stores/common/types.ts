type callback<T, K = undefined> = (a: T, b?: K) => void;

export type SimpleSubject<T> = {
  value: T;
  publish: callback<T>;
  subscribe: callback<string, callback<T>>;
  unsubscribe: callback<string>;
};

export type Singleton<T> = {
  set value(value: T);
  get value(): T;
};

export type PublicSubject<T> = {
  get value(): T;
  set value(T);
  subscribe: callback<string, callback<T>>;
  unsubscribe: callback<string>;
};
