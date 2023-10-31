import { positional } from 'yargs';

import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';

import { CanvasPin } from '.';

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
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    expect(canvasPinAdapter).toBeInstanceOf(CanvasPin);
  });

  test('should throw an error if no canvas element is found', () => {
    expect(() => new CanvasPin('not-found-canvas')).toThrowError(
      'Canvas with id not-found-canvas not found',
    );
  });

  test('should add event listeners to the canvas element', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    const addEventListenerSpy = jest.spyOn(canvasPinAdapter['canvas'], 'addEventListener');
    canvasPinAdapter['addListeners']();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(4);
  });

  test('should destroy the canvas pin adapter', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    const removeEventListenerSpy = jest.spyOn(canvasPinAdapter['canvas'], 'removeEventListener');

    canvasPinAdapter.destroy();

    expect(canvasPinAdapter['mouseElement']).toBeNull();
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(4);
  });

  test('when mouse enters canvas, should create a new mouse element', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    const mock = jest.fn().mockImplementation(() => document.createElement('div'));
    canvasPinAdapter['createMouseElement'] = mock;

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));

    expect(canvasPinAdapter['createMouseElement']).toHaveBeenCalledTimes(1);
  });

  test('when mouse leaves canvas, should remove the mouse element', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseout'));

    expect(canvasPinAdapter['mouseElement']).toBeNull();
  });

  test('should create temporary pin when mouse clicks canvas', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeTruthy();
  });

  test('should remove annotation pin', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.removeAnnotationPin(MOCK_ANNOTATION.uuid);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should not remove annotation pin if it does not exist', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.removeAnnotationPin('not_found_uuid');

    expect(canvasPinAdapter['pins'].size).toEqual(1);
  });

  test('should not render annotations if the adapter is not active and visibility is false', async () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(false);
    canvasPinAdapter.setPinsVisibility(false);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should remove pins when visibility is false', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setPinsVisibility(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter.setPinsVisibility(false);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should not render annotation if the coordinate type is not canvas', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
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
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).toBeNull();

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
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).toBeNull();

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

  test('should reset on KeyBoardEvent if the key is Escape', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeTruthy();

    canvasPinAdapter['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeFalsy();
  });

  test('should not reset on KeyboardEvent if the key is not Escape', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeTruthy();

    canvasPinAdapter['resetPins']({ key: 'Enter' } as unknown as KeyboardEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeTruthy();
  });

  test('should remove active on Escape key', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);
    const detail = {
      uuid: MOCK_ANNOTATION.uuid,
    };

    canvasPinAdapter['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(canvasPinAdapter['selectedPin']).not.toBeNull();

    canvasPinAdapter['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

    expect(canvasPinAdapter['selectedPin']).toBeNull();
  });

  test('should toggle active attribute when click same annotation twice', () => {
    const canvasPinAdapter = new CanvasPin('canvas');

    canvasPinAdapter.setActive(true);
    const detail = {
      uuid: MOCK_ANNOTATION.uuid,
    };

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);
    canvasPinAdapter['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(canvasPinAdapter['selectedPin']).not.toBeNull();
    expect(canvasPinAdapter['selectedPin']?.hasAttribute('active')).toBeTruthy();

    const ann = canvasPinAdapter['selectedPin'];
    canvasPinAdapter['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(canvasPinAdapter['selectedPin']).toBeNull();
  });

  test('should not select annotation pin if it does not exist', async () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['selectedPin']).toBeNull();

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

  test('should remove temporary pin when selecting another pin', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeFalsy();
  });

  test('should remove highlight from annotation pin when sibar is closed', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    canvasPinAdapter.setPinsVisibility(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);
    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    let pin = canvasPinAdapter['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeTruthy();

    canvasPinAdapter['onToggleAnnotationSidebar'](
      new CustomEvent('toggle-annotation-sidebar', {
        detail: {
          open: false,
        },
      }),
    );

    pin = canvasPinAdapter['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeFalsy();
  });

  test('should not remove highlight from annotation pin when sibar is opened', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    canvasPinAdapter.setPinsVisibility(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);
    canvasPinAdapter['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    let pin = canvasPinAdapter['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeTruthy();

    canvasPinAdapter['onToggleAnnotationSidebar'](
      new CustomEvent('toggle-annotation-sidebar', {
        detail: {
          open: true,
        },
      }),
    );

    pin = canvasPinAdapter['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeTruthy();
  });

  test('should not create a temporary pin if the adapter is not active', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(false);

    canvasPinAdapter['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    canvasPinAdapter['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(canvasPinAdapter['pins'].has('temporary-pin')).toBeFalsy();
  });

  test('should remove annotation pin when it is resolved', () => {
    const annotation = {
      ...MOCK_ANNOTATION,
      resolved: false,
    };

    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);
    canvasPinAdapter.updateAnnotations([
      { ...annotation, uuid: '000 ' },
      { ...annotation, uuid: '123' },
      { ...annotation, uuid: '321' },
    ]);

    expect(canvasPinAdapter['pins'].size).toEqual(3);

    const resolvedAnnotation = {
      ...annotation,
      resolved: true,
    };

    canvasPinAdapter.updateAnnotations([
      { ...annotation, uuid: '000 ' },
      { ...annotation, uuid: '123', resolved: true },
      { ...annotation, uuid: '321', resolved: true },
    ]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);
  });

  test('should not render annotations if the canvas is hidden', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    canvasPinAdapter.updateAnnotations([MOCK_ANNOTATION]);

    expect(canvasPinAdapter['pins'].size).toEqual(1);

    canvasPinAdapter['canvas'].style.display = 'none';

    canvasPinAdapter.updateAnnotations([]);

    expect(canvasPinAdapter['pins'].size).toEqual(0);
  });

  test('should update the position of the mouse element', () => {
    const canvasPinAdapter = new CanvasPin('canvas');
    canvasPinAdapter.setActive(true);

    const event = new MouseEvent('mousemove', { clientX: 100, clientY: 200 });
    const customEvent = {
      ...event,
      x: event.clientX,
      y: event.clientY,
    };

    canvasPinAdapter['onMouseMove'](customEvent);

    const element = canvasPinAdapter['mouseElement'];
    expect(element).toBeDefined();
    expect(element.getAttribute('position')).toBe(JSON.stringify({ x: 100, y: 200 }));
  });
});
