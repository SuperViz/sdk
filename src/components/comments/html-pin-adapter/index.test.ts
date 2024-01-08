import { MOCK_ANNOTATION } from '../../../../__mocks__/comments.mock';

import { HTMLPin } from '.';

window.ResizeObserver = jest.fn().mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

const MOCK_ANNOTATION_HTML = {
  ...MOCK_ANNOTATION,
  position: JSON.stringify({
    x: 100,
    y: 100,
    z: null,
    type: 'html',
    elementId: '1',
  }),
};

describe('HTMLPinAdapter', () => {
  let instance: HTMLPin;
  let target: HTMLElement;
  let currentTarget: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <div data-superviz-id="1"></div>
        <div data-superviz-id="2"></div>
        <div data-superviz-id="3"></div>
      </div>
    `;

    instance = new HTMLPin('container');
    instance.setActive(true);
    instance['mouseDownCoordinates'] = { x: 100, y: 100 };
    target = instance['divWrappers'].get('1') as HTMLElement;
    currentTarget = target;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('constructor', () => {
    test('should create a new instance of HTMLPinAdapter', () => {
      const canvasPinAdapter = new HTMLPin('container');
      canvasPinAdapter.setActive(true);
      expect(canvasPinAdapter).toBeInstanceOf(HTMLPin);
    });

    test('should throw an error if no html element is found', () => {
      expect(() => new HTMLPin('not-found-html')).toThrowError(
        'Element with id not-found-html not found',
      );
    });
  });

  describe('destroy', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should destroy the HTML pin adapter', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);
      const removeListenersSpy = jest.spyOn(instance as any, 'removeListeners');
      const removeObserversSpy = jest.spyOn(instance as any, 'removeObservers');
      const onPinFixedObserverSpy = jest.spyOn(instance['onPinFixedObserver'], 'destroy');
      const removeElementListenersSpy = jest.spyOn(document.body as any, 'removeEventListener');
      const removeSpy = jest.fn();
      const removeEventListenerSpy = jest.fn();
      const disconnectSpy = jest.spyOn(instance['resizeObserver'], 'disconnect');

      const wrappers = [...instance['divWrappers']].map(([entry, value]) => {
        return [
          entry,
          { ...value, remove: removeSpy, removeEventListener: removeEventListenerSpy },
        ];
      });
      instance['divWrappers'] = new Map(wrappers as [key: any, value: any][]);

      instance.destroy();

      expect(disconnectSpy).toHaveBeenCalled();
      expect(removeListenersSpy).toHaveBeenCalled();
      expect(removeObserversSpy).toHaveBeenCalled();
      expect(onPinFixedObserverSpy).toHaveBeenCalled();
      expect(removeElementListenersSpy).toHaveBeenCalled();

      expect(removeSpy).toHaveBeenCalledTimes(3);

      expect(instance['annotations']).toEqual([]);
      expect(instance['elementsWithDataId']).toEqual(undefined);
      expect(instance['divWrappers']).toEqual(undefined);
      expect(instance['pins']).toEqual(undefined);
      expect(instance['onPinFixedObserver']).toEqual(undefined);
      expect(instance['divWrappers']).toEqual(undefined);
      expect(instance['resizeObserver']).toEqual(undefined);
      expect(instance['mutationObserver']).toEqual(undefined);
    });
  });

  describe('listeners', () => {
    afterEach(() => {
      jest.restoreAllMocks();
      instance['divWrappers'].clear();
      instance['prepareElements']();
    });

    test('should add event listeners to the HTML container', () => {
      const bodyAddEventListenerSpy = jest.spyOn(document.body, 'addEventListener');
      const wrapperAddEventListenerSpy = jest.fn();

      const wrappers = [...instance['divWrappers']].map(([entry, value]) => {
        return [entry, { ...value, addEventListener: wrapperAddEventListenerSpy }];
      });

      instance['divWrappers'] = new Map(wrappers as [key: any, value: any][]);

      instance['addListeners']();

      expect(bodyAddEventListenerSpy).toHaveBeenCalledTimes(2);
      expect(wrapperAddEventListenerSpy).toHaveBeenCalledTimes(6);
    });

    test('should remove event listeners from the HTML container', () => {
      const bodyRemoveEventListenerSpy = jest.spyOn(document.body, 'removeEventListener');
      const wrapperRemoveEventListenerSpy = jest.fn();

      const wrappers = [...instance['divWrappers']].map(([entry, value]) => {
        return [entry, { ...value, removeEventListener: wrapperRemoveEventListenerSpy }];
      });

      instance['divWrappers'] = new Map(wrappers as [key: any, value: any][]);

      instance['removeListeners']();

      expect(bodyRemoveEventListenerSpy).toHaveBeenCalledTimes(2);
      expect(wrapperRemoveEventListenerSpy).toHaveBeenCalledTimes(6);
    });

    test('should not call resizeObserver.unobserve if flag is true', () => {
      instance['removeElementListeners']('1', true);
      expect(instance['resizeObserver'].unobserve).not.toHaveBeenCalled();
    });

    test('should call resizeObserver.unobserve if flag is false', () => {
      instance['removeElementListeners']('1', false);
      expect(instance['resizeObserver'].unobserve).toHaveBeenCalled();
    });
  });

  describe('annotationSelected', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });

    test('should select annotation pin', async () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['selectedPin']).toBeNull();

      instance['annotationSelected'](
        new CustomEvent('select-annotation', {
          detail: {
            uuid: MOCK_ANNOTATION_HTML.uuid,
          },
        }),
      );

      expect([...instance['pins'].values()].some((pin) => pin.hasAttribute('active'))).toBeTruthy();
    });

    test('should not select annotation pin if uuid is not defined', async () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

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
  });

  describe('renderAnnotationsPins', () => {
    afterAll(() => {
      jest.restoreAllMocks();
      instance['pins'].clear();
    });

    test('should not render anything if annotations list is empty', () => {
      instance['annotations'] = [];
      instance['pins'].clear();
      const spy = jest.spyOn(instance as any, 'removeAnnotationsPins');

      instance['renderAnnotationsPins']();

      expect(spy).toHaveBeenCalled();
      expect(instance['pins'].size).toEqual(0);
    });

    test('should render annotations pins', () => {
      instance['annotations'] = [MOCK_ANNOTATION_HTML];
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(1);
    });

    test('should not render annotation pin if annotation is resolved', () => {
      instance['annotations'] = [
        {
          ...MOCK_ANNOTATION_HTML,
          resolved: true,
        },
      ];
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not render annotation pin if pin was not set using html adapter', () => {
      instance['annotations'] = [MOCK_ANNOTATION];
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not render annotation pin if element with the elementId of the annotation is not found', () => {
      instance['annotations'] = [
        {
          ...MOCK_ANNOTATION_HTML,
          position: JSON.stringify({
            x: 100,
            y: 100,
            z: null,
            type: 'html',
            elementId: 'not-found',
          }),
        },
      ];
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not render annotation pin if wrapper associated with the elementId of the annotation is not found', () => {
      instance['annotations'] = [
        {
          ...MOCK_ANNOTATION_HTML,
          position: JSON.stringify({
            x: 100,
            y: 100,
            z: null,
            type: 'html',
            elementId: '1',
          }),
        },
      ];

      instance['divWrappers']
        .get('1')
        ?.querySelector('[data-pins-wrapper]')!
        .removeAttribute('data-pins-wrapper');
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      // // delete this avoids an error being throw when the pin is destroyed
      // delete instance['elementsWithDataId']['1'];

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not render new annotation pin if it already exists', () => {
      instance['annotations'] = [MOCK_ANNOTATION_HTML];
      instance['pins'].clear();

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(1);

      instance['renderAnnotationsPins']();

      expect(instance['pins'].size).toEqual(1);
    });

    test('should not create pin if annotation element id is not found', () => {
      document.body.innerHTML = ``;
    });
  });

  describe('onClick', () => {
    let element: HTMLElement;

    beforeEach(() => {
      element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      instance['annotations'] = [MOCK_ANNOTATION_HTML];
      instance['pins'].clear();
      instance['setElementReadyToPin'](element, '1');
      instance['renderAnnotationsPins']();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should create temporary pin when mouse clicks canvas', () => {
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();
    });

    test('should not create a temporary pin if the adapter is not active', () => {
      instance.setActive(false);

      instance['onClick']({
        x: 100,
        y: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      instance.setActive(true);
      expect(instance['pins'].has('temporary-pin')).toBeFalsy();
    });

    test('should remove temporary pin when selecting another pin', () => {
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);
      expect(instance['pins'].has('temporary-pin')).toBeTruthy();

      instance['annotationSelected'](
        new CustomEvent('select-annotation', {
          detail: {
            uuid: MOCK_ANNOTATION_HTML.uuid,
          },
        }),
      );

      expect(instance['pins'].has('temporary-pin')).toBeFalsy();
    });

    test('should not create a temporary pin if clicking over another pin', () => {
      const pin = instance['pins'].get(MOCK_ANNOTATION_HTML.uuid);
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target: pin,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeFalsy();
    });

    test('should not create a temporary pin if distance between mouse down and mouse up is more than 10px', () => {
      instance['onMouseDown']({ x: 100, y: 100 } as unknown as MouseEvent);

      instance['onClick']({
        clientX: 100,
        clientY: 111,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeFalsy();
    });
  });

  describe('clearElement', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should remove pins and listeners and set cursor to default on element being cleared', () => {
      instance['prepareElements']();
      instance['annotations'] = [MOCK_ANNOTATION_HTML];
      instance['renderAnnotationsPins']();

      const wrapper = instance['divWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.cursor).not.toEqual('default');
      expect(instance['pins'].size).toEqual(1);
      expect(Object.keys(instance['elementsWithDataId']).length).toEqual(3);

      const spy = jest.spyOn(instance as any, 'removeElementListeners');
      instance['clearElement']('1');

      expect(spy).toHaveBeenCalled();
      expect(instance['pins'].size).toEqual(0);
      expect(Object.keys(instance['elementsWithDataId']).length).toEqual(2);
      expect(wrapper.style.cursor).toEqual('default');
    });

    test('should not clear element if it is not stored in elementsWithDataId', () => {
      instance['prepareElements']();
      instance['annotations'] = [MOCK_ANNOTATION_HTML];
      instance['renderAnnotationsPins']();

      const wrapper = instance['divWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.cursor).not.toEqual('default');
      expect(instance['pins'].size).toEqual(1);
      expect(Object.keys(instance['elementsWithDataId']).length).toEqual(3);

      const spy = jest.spyOn(instance as any, 'removeElementListeners');
      instance['clearElement']('not-found');

      expect(spy).not.toHaveBeenCalled();
      expect(instance['pins'].size).toEqual(1);
      expect(Object.keys(instance['elementsWithDataId']).length).toEqual(3);
      expect(wrapper.style.cursor).not.toEqual('default');
    });
  });

  describe('setCommentsMetadata', () => {
    test('should store updated data about comments and local participant', () => {
      instance.setCommentsMetadata('right', 'user-avatar', 'user name');

      expect(instance['commentsSide']).toEqual('right');
      expect(instance['localParticipant']).toEqual({
        avatar: 'user-avatar',
        name: 'user name',
      });
    });
  });

  describe('resetPins', () => {
    test('should remove active on Escape key', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);
      const detail = {
        uuid: MOCK_ANNOTATION_HTML.uuid,
      };

      instance['annotationSelected']({ detail } as unknown as CustomEvent);

      expect(instance['selectedPin']).not.toBeNull();

      instance['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

      expect(instance['selectedPin']).toBeNull();
    });

    test('should reset on KeyBoardEvent if the key is Escape', () => {
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();

      instance['resetPins']({ key: 'Escape' } as unknown as KeyboardEvent);

      expect(instance['pins'].has('temporary-pin')).toBeFalsy();
    });

    test('should not reset on KeyboardEvent if the key is not Escape', () => {
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();

      instance['resetPins']({ key: 'Enter' } as unknown as KeyboardEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();
    });
  });

  describe('annotationSelected', () => {
    test('should toggle active attribute when click same annotation twice', () => {
      const detail = {
        uuid: MOCK_ANNOTATION_HTML.uuid,
      };

      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);
      instance['annotationSelected']({ detail } as unknown as CustomEvent);

      expect(instance['selectedPin']).not.toBeNull();
      expect(instance['selectedPin']?.hasAttribute('active')).toBeTruthy();

      instance['annotationSelected']({ detail } as unknown as CustomEvent);

      expect(instance['selectedPin']).toBeNull();
    });

    test('should not select annotation pin if it does not exist', async () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

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

    test('should remove highlight from annotation pin when sidebar is closed', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);
      instance['annotationSelected'](
        new CustomEvent('select-annotation', {
          detail: {
            uuid: MOCK_ANNOTATION_HTML.uuid,
          },
        }),
      );

      let pin = instance['pins'].get(MOCK_ANNOTATION_HTML.uuid);

      expect(pin?.hasAttribute('active')).toBeTruthy();

      instance['onToggleAnnotationSidebar'](
        new CustomEvent('toggle-annotation-sidebar', {
          detail: {
            open: false,
          },
        }),
      );

      pin = instance['pins'].get(MOCK_ANNOTATION_HTML.uuid);

      expect(pin?.hasAttribute('active')).toBeFalsy();
    });

    test('should not remove highlight from annotation pin when sibar is opened', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);
      instance['annotationSelected'](
        new CustomEvent('select-annotation', {
          detail: {
            uuid: MOCK_ANNOTATION_HTML.uuid,
          },
        }),
      );

      let pin = instance['pins'].get(MOCK_ANNOTATION_HTML.uuid);

      expect(pin?.hasAttribute('active')).toBeTruthy();

      instance['onToggleAnnotationSidebar'](
        new CustomEvent('toggle-annotation-sidebar', {
          detail: {
            open: true,
          },
        }),
      );

      pin = instance['pins'].get(MOCK_ANNOTATION_HTML.uuid);

      expect(pin?.hasAttribute('active')).toBeTruthy();
    });
  });

  describe('removeAnnotationPin', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should remove annotation pin', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['pins'].size).toEqual(1);

      instance.removeAnnotationPin(MOCK_ANNOTATION_HTML.uuid);

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not remove annotation pin if it does not exist', () => {
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['pins'].size).toEqual(1);

      instance.removeAnnotationPin('not_found_uuid');

      expect(instance['pins'].size).toEqual(1);
    });
  });

  describe('updateAnnotations', () => {
    test('should not render annotations if the adapter is not active and visibility is false', async () => {
      instance.setActive(false);
      instance.setPinsVisibility(false);

      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['pins'].size).toEqual(0);
    });

    test('should remove pins when visibility is false', () => {
      instance.setPinsVisibility(true);

      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['pins'].size).toEqual(1);

      instance.setPinsVisibility(false);

      expect(instance['pins'].size).toEqual(0);
    });

    test('should not render annotation if the coordinate type is not canvas', () => {
      instance.updateAnnotations([
        {
          ...MOCK_ANNOTATION_HTML,
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

    test('should remove annotation pin when it is resolved', () => {
      const annotation = {
        ...MOCK_ANNOTATION_HTML,
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
      instance.updateAnnotations([MOCK_ANNOTATION_HTML]);

      expect(instance['pins'].size).toEqual(1);

      instance['container'].style.display = 'none';

      instance.updateAnnotations([]);

      expect(instance['pins'].size).toEqual(0);
    });
  });

  describe('onMouseDown', () => {
    test('should update mouse coordinates on mousedown event', () => {
      instance['onMouseDown']({ x: 351, y: 153 } as unknown as MouseEvent);
      expect(instance['mouseDownCoordinates']).toEqual({ x: 351, y: 153 });
    });
  });

  describe('renderTemporaryPin', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });

    test('should remove previous temporary pin container when rendering temporary pin over another element', () => {
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();
      expect(instance['temporaryPinCoordinates'].elementId).toBe(
        currentTarget.getAttribute('data-wrapper-id'),
      );

      const removeSpy = jest.spyOn(instance['temporaryPinContainer'] as any, 'remove');
      const deleteSpy = jest.spyOn(instance['pins'], 'delete');

      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target: document.body.querySelector('[data-wrapper-id="2"]') as HTMLElement,
        currentTarget: document.body.querySelector('[data-wrapper-id="2"]') as HTMLElement,
      } as unknown as MouseEvent);

      expect(removeSpy).toHaveBeenCalled();
      expect(deleteSpy).toHaveBeenCalled();
      expect(instance['pins'].has('temporary-pin')).toBeTruthy();
      expect(instance['temporaryPinCoordinates'].elementId).toBe('2');
    });
  });

  describe('translateAndScalePins', () => {
    afterEach(() => {
      instance['divWrappers'].clear();
    });

    test('should apply the correct translate and scale to the specified pins wrapper', () => {
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const transformObject = {
        scale: Math.random() * 10,
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000,
      };

      const transformString = `scale(${transformObject.scale}) translateX(${transformObject.translateX}px) translateY(${transformObject.translateY}px)`;

      expect(wrapper.style.transform).not.toEqual(transformString);

      instance['translateAndScalePins']('1', transformObject);

      expect(wrapper.style.transform).toEqual(transformString);
    });

    test('should not apply the transform if the wrapper does not exist', () => {
      const transformObject = {
        scale: Math.random() * 10,
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000,
      };

      const spyParse = jest.spyOn(instance as any, 'parseTransform');

      instance['translateAndScalePins']('not-found', transformObject);

      expect(instance['divWrappers'].has('not-found')).toBeFalsy();
      expect(spyParse).not.toHaveBeenCalled();
    });

    test('should keep previous transform if the new transform is not defined', () => {
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const transformObject = {
        scale: Math.random() * 10,
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000,
      };

      const transformString = `scale(${transformObject.scale}) translateX(${transformObject.translateX}px) translateY(${transformObject.translateY}px)`;

      expect(wrapper.style.transform).not.toEqual(transformString);

      instance['translateAndScalePins']('1', transformObject);

      expect(wrapper.style.transform).toEqual(transformString);

      instance['translateAndScalePins']('1', {});

      expect(wrapper.style.transform).toEqual(transformString);
    });
  });

  describe('translateAndScaleContainer', () => {
    beforeEach(() => {
      instance['pinsContainer'].style.transform = 'scale(1) translateX(0px) translateY(0px)';
    });

    test('should apply the correct translate and scale to the pins container', () => {
      const transformObject = {
        scale: Math.random() * 10,
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000,
      };

      const transformString = `scale(${transformObject.scale}) translateX(${transformObject.translateX}px) translateY(${transformObject.translateY}px)`;

      expect(instance['pinsContainer'].style.transform).not.toEqual(transformString);

      instance['translateAndScaleContainer'](transformObject);

      expect(instance['pinsContainer'].style.transform).toEqual(transformString);
    });

    test('should keep previous transform if the new transform is not defined', () => {
      const transformObject = {
        scale: Math.random() * 10,
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000,
      };

      const transformString = `scale(${transformObject.scale}) translateX(${transformObject.translateX}px) translateY(${transformObject.translateY}px)`;

      expect(instance['pinsContainer'].style.transform).not.toEqual(transformString);

      instance['translateAndScaleContainer'](transformObject);

      expect(instance['pinsContainer'].style.transform).toEqual(transformString);

      instance['translateAndScaleContainer']({});

      expect(instance['pinsContainer'].style.transform).toEqual(transformString);
    });
  });

  describe('setElementReadyToPin', () => {
    beforeEach(() => {
      instance['divWrappers'].get('1')!.style.cursor = 'default';
    });

    afterEach(() => {
      jest.restoreAllMocks();
      instance['divWrappers'].clear();
    });

    test('should change cursor and add event listeners', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const spy = jest.spyOn(instance as any, 'addElementListeners');
      delete instance['elementsWithDataId']['1'];
      instance['setElementReadyToPin'](element, '1');

      expect(wrapper.style.cursor).not.toEqual('default');
      expect(spy).toHaveBeenCalled();
    });

    test('should not change cursor and add event listeners if comments are not active', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const spy = jest.spyOn(instance as any, 'addElementListeners');
      instance.setActive(false);
      delete instance['elementsWithDataId']['1'];
      instance['setElementReadyToPin'](element, '1');

      expect(wrapper.style.cursor).toEqual('default');
      expect(spy).not.toHaveBeenCalled();
    });

    test('should not change cursor and add event listeners if pins are not visible', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const spy = jest.spyOn(instance as any, 'addElementListeners');

      instance.setPinsVisibility(false);
      delete instance['elementsWithDataId']['1'];
      instance['setElementReadyToPin'](element, '1');

      expect(wrapper.style.cursor).toEqual('default');
      expect(spy).not.toHaveBeenCalled();
    });

    test('should create new divWrapper if divWrapper not found', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const spySet = jest.spyOn(instance['divWrappers'], 'set');
      const spyCreate = jest.spyOn(instance as any, 'createWrapper');

      instance['pinsContainer'].innerHTML = '';
      instance['divWrappers'].clear();

      delete instance['elementsWithDataId']['1'];

      instance['setElementReadyToPin'](element, '1');

      expect(spyCreate).toHaveBeenCalled();
      expect(spySet).toHaveBeenCalled();
    });
  });

  describe('addTemporaryPinToElement', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should add temporary pin to element', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const temporaryPinContainer = document.createElement('div');
      temporaryPinContainer.id = 'temp-container';
      const pin = document.createElement('div');
      pin.id = 'temp-pin';
      const spy = jest
        .spyOn(instance as any, 'createTemporaryPinContainer')
        .mockReturnValue(temporaryPinContainer);

      instance['addTemporaryPinToElement']('1', pin);

      expect(spy).toHaveBeenCalled();
      expect(temporaryPinContainer.querySelector('#temp-pin')).toBe(pin);
      expect(instance['divWrappers'].get('1')?.querySelector('#temp-container')).toBe(
        temporaryPinContainer,
      );
    });

    test('should not add temporary pin to element if element is not found', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const temporaryPinContainer = document.createElement('div');
      temporaryPinContainer.id = 'temp-container';
      const pin = document.createElement('div');
      pin.id = 'temp-pin';
      const spy = jest
        .spyOn(instance as any, 'createTemporaryPinContainer')
        .mockReturnValue(temporaryPinContainer);

      instance['addTemporaryPinToElement']('not-found', pin);

      expect(spy).not.toHaveBeenCalled();
      expect(temporaryPinContainer.querySelector('#temp-pin')).toBe(null);
      expect(instance['divWrappers'].get('1')?.querySelector('#temp-container')).toBe(null);
    });

    test('should not add temporary pin to element if wrapper is not found', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const temporaryPinContainer = document.createElement('div');
      temporaryPinContainer.id = 'temp-container';
      const pin = document.createElement('div');
      pin.id = 'temp-pin';
      const spy = jest
        .spyOn(instance as any, 'createTemporaryPinContainer')
        .mockReturnValue(temporaryPinContainer);
      instance['divWrappers'].delete('1');
      instance['addTemporaryPinToElement']('1', pin);

      expect(spy).not.toHaveBeenCalled();
      expect(temporaryPinContainer.querySelector('#temp-pin')).toBe(null);
    });
  });

  describe('createWrapper', () => {
    test('should create a new wrapper', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      instance['pinsContainer'].innerHTML = '';

      const wrapper = instance['createWrapper'](element, '1');

      const pinsWrapper = wrapper.querySelector('[data-pins-wrapper]') as HTMLElement;
      const containerRect = element.getBoundingClientRect();

      expect(wrapper).toBeInstanceOf(HTMLDivElement);
      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.top).toEqual(`${containerRect.top}px`);
      expect(wrapper.style.left).toEqual(`${containerRect.left}px`);
      expect(wrapper.style.width).toEqual(`${containerRect.width}px`);
      expect(wrapper.style.height).toEqual(`${containerRect.height}px`);
      expect(wrapper.style.pointerEvents).toEqual('none');
      expect(wrapper.style.transform).toEqual('translateX(0) translateY(0) scale(1)');
      expect(wrapper.style.cursor).toEqual('default');
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('1');
      expect(wrapper.id).toEqual('superviz-id-1');

      expect(pinsWrapper).toBeInstanceOf(HTMLDivElement);
      expect(pinsWrapper.style.position).toEqual('absolute');
      expect(pinsWrapper.style.overflow).toEqual('hidden');
      expect(pinsWrapper.style.top).toEqual('0px');
      expect(pinsWrapper.style.left).toEqual('0px');
      expect(pinsWrapper.style.width).toEqual('100%');
      expect(pinsWrapper.style.height).toEqual('100%');
    });

    test('should not create a new wrapper if wrapper already exists', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      instance['pinsContainer'].innerHTML = '';

      const wrapper1 = instance['createWrapper'](element, '1');
      const wrapper2 = instance['createWrapper'](element, '1');

      expect(wrapper1).toBeInstanceOf(HTMLDivElement);
      expect(wrapper2).toBe(undefined);
    });
  });

  describe('handleResizeObserverChanges', () => {
    test('should update the wrapper position when the element is resized', () => {
      const element = document.body.querySelector('[data-superviz-id="1"]') as HTMLElement;
      const wrapper = instance['divWrappers'].get('1') as HTMLElement;
      const pinsWrapper = wrapper.querySelector('[data-pins-wrapper]') as HTMLElement;

      const width = Math.random() * 1000;
      const height = Math.random() * 1000;
      const top = Math.random() * 1000;
      const left = Math.random() * 1000;

      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;

      const changes = {
        target: element,
      } as unknown as ResizeObserverEntry;

      element.getBoundingClientRect = jest.fn().mockReturnValue({
        width,
        height,
        top,
        left,
      });

      instance['handleResizeObserverChanges']([changes]);

      expect(wrapper.style.width).toEqual(`${width}px`);
      expect(wrapper.style.height).toEqual(`${height}px`);
      expect(wrapper.style.top).toEqual(`${top}px`);
      expect(wrapper.style.left).toEqual(`${left}px`);
      expect(pinsWrapper.style.width).toEqual(`${width}px`);
      expect(pinsWrapper.style.height).toEqual(`${height}px`);
      expect(pinsWrapper.style.top).toEqual('0px');
      expect(pinsWrapper.style.left).toEqual('0px');
    });
  });

  describe('handleMutationObserverChanges', () => {
    let setElementsSpy: jest.SpyInstance;
    let renderAnnotationsSpy: jest.SpyInstance;
    let clearElementSpy: jest.SpyInstance;
    let removeAnnotationSpy: jest.SpyInstance;

    beforeEach(() => {
      setElementsSpy = jest.spyOn(instance as any, 'setElementReadyToPin');
      renderAnnotationsSpy = jest.spyOn(instance as any, 'renderAnnotationsPins');
      clearElementSpy = jest.spyOn(instance as any, 'clearElement');
      removeAnnotationSpy = jest.spyOn(instance as any, 'removeAnnotationPin');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should set elements and update pins when a new element with the specified attribute appears', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: null,
      } as unknown as MutationRecord;

      instance['handleMutationObserverChanges']([change]);

      expect(setElementsSpy).toHaveBeenCalled();
      expect(renderAnnotationsSpy).toHaveBeenCalled();
      expect(clearElementSpy).not.toHaveBeenCalled();
      expect(removeAnnotationSpy).not.toHaveBeenCalled();
    });

    test('should clear elements and remove pins if the attribute is removed from the element', () => {
      const change = {
        target: document.createElement('div') as HTMLElement,
        oldValue: '1',
      } as unknown as MutationRecord;

      instance['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).toHaveBeenCalled();
      expect(removeAnnotationSpy).toHaveBeenCalled();
      expect(renderAnnotationsSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });

    test('should clear element if the attribute changes, but still exists', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: '2',
      } as unknown as MutationRecord;

      instance['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).toHaveBeenCalled();
      expect(renderAnnotationsSpy).toHaveBeenCalled();
      expect(setElementsSpy).toHaveBeenCalled();
      expect(removeAnnotationSpy).not.toHaveBeenCalled();
    });

    test('should do nothing if there is not new nor old value to the attribute', () => {
      const target = document.createElement('div') as HTMLElement;
      target.setAttribute('data-superviz-id', '');
      const change = {
        target,
        oldValue: null,
      } as unknown as MutationRecord;

      instance['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).not.toHaveBeenCalled();
      expect(removeAnnotationSpy).not.toHaveBeenCalled();
      expect(renderAnnotationsSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });

    test('should do nothing if the new value is the same as the old attribute value', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: '1',
      } as unknown as MutationRecord;

      instance['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).not.toHaveBeenCalled();
      expect(removeAnnotationSpy).not.toHaveBeenCalled();
      expect(renderAnnotationsSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });
  });

  describe('onToggleAnnotationSidebar', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should remove active attribute from selected pin if sidebar is closed', () => {
      const spy = jest.spyOn(instance as any, 'resetSelectedPin');
      instance['onToggleAnnotationSidebar']({ detail: { open: false } } as unknown as CustomEvent);
      expect(spy).toHaveBeenCalled();
    });

    test('should not remove active attribute from selected pin if sidebar is opened', () => {
      const spy = jest.spyOn(instance as any, 'resetSelectedPin');
      instance['onToggleAnnotationSidebar']({ detail: { open: true } } as unknown as CustomEvent);
      expect(spy).not.toHaveBeenCalled();
    });

    test('should remove temporary pin if sidebar is closed', () => {
      const spy = jest.spyOn(instance as any, 'removeAnnotationPin');
      instance['onClick']({
        clientX: 100,
        clientY: 100,
        target,
        currentTarget,
      } as unknown as MouseEvent);

      expect(instance['pins'].has('temporary-pin')).toBeTruthy();

      instance['onToggleAnnotationSidebar']({ detail: { open: false } } as unknown as CustomEvent);

      expect(spy).toHaveBeenCalledWith('temporary-pin');
    });
  });
});
