import { Logger } from './logger';
import { Observable } from './observable';

class DummyObserverClass extends Observable {
  protected logger: Logger;

  constructor() {
    super();

    this.logger = new Logger('@superviz/sdk/dummie-observer-class');
  }
}

describe('observer class', () => {
  let DummyObserverClassInstance: DummyObserverClass;

  beforeEach(() => {
    DummyObserverClassInstance = new DummyObserverClass();
  });

  test('should subscribe to the event component with success', () => {
    const callback = jest.fn();

    expect(DummyObserverClassInstance.subscribe).toBeDefined();

    DummyObserverClassInstance.subscribe('test', callback);

    DummyObserverClassInstance['publish']('test', 'test');

    expect(callback).toBeCalledWith('test');
  });

  test('should unsubscribe to the event component with success', () => {
    const callback = jest.fn();

    expect(DummyObserverClassInstance.subscribe).toBeDefined();

    DummyObserverClassInstance.subscribe('test', callback);

    DummyObserverClassInstance['publish']('test', 'test');

    expect(callback).toBeCalledWith('test');

    DummyObserverClassInstance.unsubscribe('test');

    DummyObserverClassInstance['publish']('test', 'test');

    expect(callback).toBeCalledTimes(1);
  });

  test('should skip unsubscribe if the event is not subscribed', () => {
    expect(DummyObserverClassInstance.subscribe).toBeDefined();

    DummyObserverClassInstance.unsubscribe('test');
  });

  test('should skip publish if the event is not subscribed', () => {
    expect(DummyObserverClassInstance.subscribe).toBeDefined();

    DummyObserverClassInstance['publish']('test', 'test');
  });
});
