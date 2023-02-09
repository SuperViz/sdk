import sdk from './index';

describe('root export', () => {
  test('should export a function', () => {
    expect(sdk).toBe(undefined);
  });
});
