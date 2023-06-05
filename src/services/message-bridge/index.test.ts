import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { Debug } from '../../common/utils/logger';

import { MessageBridge } from '.';

jest.mock('../../common/utils/observer', () => ({
  Observer: jest.fn().mockImplementation(() => MOCK_OBSERVER_HELPER),
}));

describe('MessageBridge', () => {
  let MessageBridgeInstance: MessageBridge;

  beforeEach(() => {
    jest.clearAllMocks();

    MessageBridgeInstance = new MessageBridge({
      contentWindow: window,
      logger: new Debug('@superviz/message-bridge'),
    });
  });

  test('should be defined', () => {
    expect(MessageBridgeInstance).toBeDefined();
  });

  test('should have a publish method', () => {
    expect(MessageBridgeInstance.publish).toBeDefined();
  });

  test('should have a listen method', () => {
    expect(MessageBridgeInstance.listen).toBeDefined();
  });

  test('should have a destroy method', () => {
    expect(MessageBridgeInstance.destroy).toBeDefined();
  });

  describe('publish', () => {
    test('should call postMessage', () => {
      const spy = jest.spyOn(window, 'postMessage');
      MessageBridgeInstance.publish('test', { foo: 'bar' });
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('listen', () => {
    test('should add a listener', () => {
      const spy = jest.spyOn(MessageBridgeInstance, 'listen');

      MessageBridgeInstance.listen('test', () => {});
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    test('should remove the listener', () => {
      const spy = jest.spyOn(window, 'removeEventListener');

      MessageBridgeInstance.destroy();
      expect(spy).toHaveBeenCalled();
    });

    test('should throw an error if called twice', () => {
      MessageBridgeInstance.destroy();
      expect(() => MessageBridgeInstance.destroy()).toThrowError();
    });

    test('should delete all properties', () => {
      MessageBridgeInstance.destroy();
      expect(MessageBridgeInstance).toMatchObject({});
    });

    test('should reset all observers', () => {
      const spy = jest.spyOn(MOCK_OBSERVER_HELPER, 'reset');

      MessageBridgeInstance.listen('test', () => {});
      MessageBridgeInstance.destroy();
      expect(spy).toHaveBeenCalled();
    });
  });
});
