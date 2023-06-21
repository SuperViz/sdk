import debug from 'debug';

import { Debug } from './logger';

jest.mock('debug');

describe('Debug', () => {
  let debugInstance: Debug;
  let mockDebug: jest.MockedFunction<debug.Debugger>;

  beforeEach(() => {
    mockDebug = jest.fn() as unknown as jest.MockedFunction<debug.Debugger>;
    (debug as jest.MockedFunction<typeof debug>).mockReturnValue(mockDebug);
    debugInstance = new Debug('@superviz/sdk');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create a new instance of Debug', () => {
    expect(debugInstance).toBeDefined();
  });

  it('should call debug with the correct scope on initialization', () => {
    expect(debug).toHaveBeenCalledWith('@superviz/sdk');
  });

  it('should call debug with the correct arguments on log', () => {
    debugInstance.log('test-message', 123, { foo: 'bar' });
    expect(mockDebug).toHaveBeenCalledWith('test-message', 123, { foo: 'bar' });
  });

  it('should call debug.enable with the correct prefix on enable', () => {
    debugInstance.enable('test-prefix');
    expect(debug.enable).toHaveBeenCalledWith('test-prefix');
  });

  it('should call debug.disable on disable', () => {
    debugInstance.disable();
    expect(debug.disable).toHaveBeenCalled();
  });
});
