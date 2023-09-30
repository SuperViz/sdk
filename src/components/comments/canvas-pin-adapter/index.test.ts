import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';
import sleep from '../../../common/utils/sleep';

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
    canvasPinAdapter.setActive(true);
    expect(canvasPinAdapter).toBeInstanceOf(CanvasPinAdapter);
  });

  test('should throw an error if no canvas element is found', () => {
    expect(() => new CanvasPinAdapter('not-found-canvas')).toThrowError(
      'Canvas with id not-found-canvas not found',
    );
  });

  test('should add event listeners to the canvas element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);
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
    canvasPinAdapter.setActive(true);
    const mock = jest.fn().mockImplementation(() => document.createElement('div'));
    canvasPinAdapter['createMouseElement'] = mock;

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));

    expect(canvasPinAdapter['createMouseElement']).toHaveBeenCalledTimes(1);
  });

  test('when mouse leaves canvas, should remove the mouse element', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseout'));

    expect(canvasPinAdapter['mouseElement']).toBeNull();
  });

  test('when mouse clicks canvas', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);
  });

  test('should remove annotation pin', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.removeAnnotationPin(MOCK_ANNOTATION.uuid);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should not remove annotation pin if it does not exist', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.removeAnnotationPin('not_found_uuid');

    expect(canvasPinAdapter['pins'].size).toEqual(1);
  });

  test('should not render annotations if the adapter is not active', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(false);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should remove pins when isActive is turned to false', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.setActive(false);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should not render annotation if the coordinate type is not canvas', () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([
      {
        ...MOCK_ANNOTATION,
        uuid: 'not-canvas',
        position: JSON.stringify({
          x: 100,
          y: 100,
          type: 'not-canvas',
        }),
      },
    ]);

    expect(canvasPinAdapter['pins'].has('not-canvas')).toBeFalsy();
  });

  test('should select annotation pin', async () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).not.toBeDefined();

    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect(
      [...canvasPinAdapter['pins'].values()].some((pin) => pin.hasAttribute('active')),
    ).toBeTruthy();
  });

  test('should not select annotation pin if uuid is not defined', async () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).not.toBeDefined();

    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: undefined,
        },
      }),
    );

    expect(
      [...canvasPinAdapter['pins'].values()].some((pin) => pin.hasAttribute('active')),
    ).toBeFalsy();
  });

  test('should not select annotation pin if it does not exist', async () => {
    const canvasPinAdapter = new CanvasPinAdapter('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).not.toBeDefined();

    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: 'not-found',
        },
      }),
    );

    expect(
      [...canvasPinAdapter['pins'].values()].some((pin) => pin.hasAttribute('active')),
    ).toBeFalsy();
  });
});
