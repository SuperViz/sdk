import { CanvasPinAdapter } from '.';

describe('CanvasPinAdapter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should create a new instance of CanvasPinAdapter', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    expect(canvasPinAdapter).toBeInstanceOf(CanvasPinAdapter);
  });

  test('should throw an error if no canvas element is found', () => {
    expect(() => new CanvasPinAdapter('not-found-canvas')).toThrowError(
      'Canvas with id not-found-canvas not found',
    );
  });

  test('should add event listeners to the canvas element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    const addEventListenerSpy = jest.spyOn(canvasPinAdapter['canvas'], 'addEventListener');
    canvasPinAdapter['addListeners']();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(4);
  });

  test('should destroy the canvas pin adapter', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    const removeEventListenerSpy = jest.spyOn(canvasPinAdapter['canvas'], 'removeEventListener');

    canvasPinAdapter.destroy();

    expect(canvasPinAdapter['mouseElement']).toBeNull();
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(4);
  });

  test('when mouse enters canvas, should create a new mouse element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    const mock = jest.fn().mockImplementation(() => document.createElement('div'));
    canvasPinAdapter['createMouseElement'] = mock;

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));

    expect(canvasPinAdapter['createMouseElement']).toHaveBeenCalledTimes(1);
  });

  test('when mouse leaves canvas, should remove the mouse element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseout'));

    expect(canvasPinAdapter['mouseElement']).toBeNull();
  });

  test('when mouse clicks canvas', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);
  });

  test('when mouse moves on canvas, should move the mouse element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');

    canvasPinAdapter['createMouseElement'] = jest.fn().mockImplementation(() => {
      const element = document.createElement('div');
      element.setAttribute('position', JSON.stringify({ x: 0, y: 0 }));

      return element;
    });

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onMouseMove']({ x: 100, y: 100 } as unknown as MouseEvent);

    console.log(canvasPinAdapter['mouseElement'].attributes);
  });
});
