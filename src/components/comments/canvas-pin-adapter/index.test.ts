import { MOCK_CANVAS } from '../../../../__mocks__/canvas.mock';
import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';

import { CanvasPin } from '.';

describe('CanvasPinAdapter', () => {
  let instance: CanvasPin;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="parentElement" style="width: 200px; height: 200px; overflow: auto;">
        <div id="divWrapper">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    `;

    instance = new CanvasPin('canvas');
    instance.setActive(true);
    instance['canvas'] = { ...instance['canvas'], ...MOCK_CANVAS } as unknown as HTMLCanvasElement;
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
    const addEventListenerSpy = jest.spyOn(instance['canvas'], 'addEventListener');
    instance['addListeners']();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(4);
  });

  test('should destroy the canvas pin adapter', () => {
    const removeEventListenerSpy = jest.spyOn(instance['canvas'], 'removeEventListener');

    instance.destroy();

    expect(instance['mouseElement']).toBeNull();
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
    instance['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    instance['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(instance['pins'].has('temporary-pin')).toBeTruthy();
  });

  test('should remove annotation pin', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['pins'].size).toEqual(1);

    instance.removeAnnotationPin(MOCK_ANNOTATION.uuid);

    expect(instance['pins'].size).toEqual(0);
  });

  test('should not remove annotation pin if it does not exist', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['pins'].size).toEqual(1);

    instance.removeAnnotationPin('not_found_uuid');

    expect(instance['pins'].size).toEqual(1);
  });

  test('should not render annotations if the adapter is not active and visibility is false', async () => {
    instance.setActive(false);
    instance.setPinsVisibility(false);

    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['pins'].size).toEqual(0);
  });

  test('should remove pins when visibility is false', () => {
    instance.setPinsVisibility(true);

    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['pins'].size).toEqual(1);

    instance.setPinsVisibility(false);

    expect(instance['pins'].size).toEqual(0);
  });

  test('should not render annotation if the coordinate type is not canvas', () => {
    instance.updateAnnotations([
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

    expect(instance['pins'].has('not-canvas')).toBeFalsy();
  });

  test('should select annotation pin', async () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['selectedPin']).toBeNull();

    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect([...instance['pins'].values()].some((pin) => pin.hasAttribute('active'))).toBeTruthy();
  });

  test('should not select annotation pin if uuid is not defined', async () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['selectedPin']).toBeNull();

    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: undefined,
        },
      }),
    );

    expect([...instance['pins'].values()].some((pin) => pin.hasAttribute('active'))).toBeFalsy();
  });

  test('should reset on KeyBoardEvent if the key is Escape', () => {
    instance['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    instance['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(instance['pins'].has('temporary-pin')).toBeTruthy();

    instance['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

    expect(instance['pins'].has('temporary-pin')).toBeFalsy();
  });

  test('should not reset on KeyboardEvent if the key is not Escape', () => {
    instance['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    instance['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    expect(instance['pins'].has('temporary-pin')).toBeTruthy();

    instance['resetPins']({ key: 'Enter' } as unknown as KeyboardEvent);

    expect(instance['pins'].has('temporary-pin')).toBeTruthy();
  });

  test('should remove active on Escape key', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);
    const detail = {
      uuid: MOCK_ANNOTATION.uuid,
    };

    instance['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(instance['selectedPin']).not.toBeNull();

    instance['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

    expect(instance['selectedPin']).toBeNull();
  });

  test('should toggle active attribute when click same annotation twice', () => {
    const detail = {
      uuid: MOCK_ANNOTATION.uuid,
    };

    instance.updateAnnotations([MOCK_ANNOTATION]);
    instance['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(instance['selectedPin']).not.toBeNull();
    expect(instance['selectedPin']?.hasAttribute('active')).toBeTruthy();

    instance['annotationSelected']({ detail } as unknown as CustomEvent);

    expect(instance['selectedPin']).toBeNull();
  });

  test('should not select annotation pin if it does not exist', async () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['selectedPin']).toBeNull();

    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: 'not-found',
        },
      }),
    );

    expect([...instance['pins'].values()].some((pin) => pin.hasAttribute('active'))).toBeFalsy();
  });

  test('should remove temporary pin when selecting another pin', () => {
    instance['canvas'].dispatchEvent(new MouseEvent('mouseenter'));
    instance['onClick']({ x: 100, y: 100 } as unknown as MouseEvent);

    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect(instance['pins'].has('temporary-pin')).toBeFalsy();
  });

  test('should remove highlight from annotation pin when sibar is closed', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);
    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    let pin = instance['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeTruthy();

    instance['onToggleAnnotationSidebar'](
      new CustomEvent('toggle-annotation-sidebar', {
        detail: {
          open: false,
        },
      }),
    );

    pin = instance['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeFalsy();
  });

  test('should not remove highlight from annotation pin when sibar is opened', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);
    instance['annotationSelected'](
      new CustomEvent('select-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    let pin = instance['pins'].get(MOCK_ANNOTATION.uuid);

    expect(pin?.hasAttribute('active')).toBeTruthy();

    instance['onToggleAnnotationSidebar'](
      new CustomEvent('toggle-annotation-sidebar', {
        detail: {
          open: true,
        },
      }),
    );

    pin = instance['pins'].get(MOCK_ANNOTATION.uuid);

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

    instance.updateAnnotations([
      { ...annotation, uuid: '000 ' },
      { ...annotation, uuid: '123' },
      { ...annotation, uuid: '321' },
    ]);

    expect(instance['pins'].size).toEqual(3);

    instance.updateAnnotations([
      { ...annotation, uuid: '000 ' },
      { ...annotation, uuid: '123', resolved: true },
      { ...annotation, uuid: '321', resolved: true },
    ]);

    expect(instance['pins'].size).toEqual(1);
  });

  test('should not render annotations if the canvas is hidden', () => {
    instance.updateAnnotations([MOCK_ANNOTATION]);

    expect(instance['pins'].size).toEqual(1);

    instance['canvas'].style.display = 'none';

    instance.updateAnnotations([]);

    expect(instance['pins'].size).toEqual(0);
  });

  test('should update the position of the mouse element', () => {
    const event = new MouseEvent('mousemove', { clientX: 100, clientY: 200 });
    const customEvent = {
      ...event,
      x: event.clientX,
      y: event.clientY,
    };

    instance['onMouseMove'](customEvent);

    const element = instance['mouseElement'];
    expect(element).toBeDefined();
    expect(element.getAttribute('position')).toBe(JSON.stringify({ x: 100, y: 200 }));
  });
});
