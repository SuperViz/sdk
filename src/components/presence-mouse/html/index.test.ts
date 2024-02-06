import { MOCK_CONFIG } from '../../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../../__mocks__/realtime.mock';
import { ParticipantMouse, Element } from '../types';

import { PointersHTML } from '.';

const createMousePointers = (): PointersHTML => {
  const presenceMouseComponent = new PointersHTML('html');

  presenceMouseComponent.attach({
    realtime: ABLY_REALTIME_MOCK,
    localParticipant: MOCK_LOCAL_PARTICIPANT,
    group: MOCK_GROUP,
    config: MOCK_CONFIG,
    eventBus: EVENT_BUS_MOCK,
  });

  return presenceMouseComponent;
};

describe('MousePointers on HTML', () => {
  let presenceMouseComponent: PointersHTML;
  const participants: Record<string, ParticipantMouse> = {};
  let MOCK_MOUSE: ParticipantMouse;

  beforeEach(() => {
    document.body.innerHTML = `<div><div id="html"><span data-superviz-id="1"></span><span data-superviz-id="2"></span></div></div>`;

    MOCK_MOUSE = {
      ...MOCK_LOCAL_PARTICIPANT,
      x: 30,
      y: 30,
      slotIndex: 0,
      visible: true,
    };

    const participant1 = { ...MOCK_MOUSE };
    const participant2 = { ...MOCK_MOUSE };
    const participant3 = { ...MOCK_MOUSE };
    participant2.id = 'unit-test-participant2-ably-id';
    participant3.id = 'unit-test-participant3-ably-id';

    participants[participant1.id] = { ...participant1 };
    participants[participant2.id] = { ...participant2 };
    participants[participant3.id] = { ...participant3 };

    presenceMouseComponent = createMousePointers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    test('should throw an error if no container is found', () => {
      expect(() => new PointersHTML('not-found-container')).toThrowError(
        'Element with id not-found-container not found',
      );
    });

    test('should set different properties', () => {
      const presenceMouseComponent = new PointersHTML('html');
      const elementsWithDataAttribute = new Map();

      elementsWithDataAttribute.set('1', document.querySelector('[data-superviz-id="1"]'));
      elementsWithDataAttribute.set('2', document.querySelector('[data-superviz-id="2"]'));

      expect(presenceMouseComponent['container']).toEqual(document.getElementById('html'));
      expect(presenceMouseComponent['name']).toEqual('presence');
      expect(presenceMouseComponent['dataAttributeName']).toEqual('data-superviz-id');
      expect(presenceMouseComponent['elementsWithDataAttribute']).toEqual(
        elementsWithDataAttribute,
      );
      expect(presenceMouseComponent['mutationObserver']).toBeInstanceOf(MutationObserver);
    });

    test('should call observeContainer', () => {
      const observeContainerSpy = jest.spyOn(PointersHTML.prototype as any, 'observeContainer');
      const mouse = new PointersHTML('html');

      expect(observeContainerSpy).toHaveBeenCalled();
    });

    test('should call renderAllWrappers', () => {
      const renderAllWrappersSpy = jest.spyOn(PointersHTML.prototype as any, 'renderAllWrappers');
      const mouse = new PointersHTML('html');

      expect(renderAllWrappersSpy).toHaveBeenCalled();
    });

    test('should set dataAttributeName from options', () => {
      const presenceMouseComponent = new PointersHTML('html', { dataAttributeName: 'data-test' });

      expect(presenceMouseComponent['dataAttributeName']).toEqual('data-test');
    });
  });

  describe('start', () => {
    test('should call enterPresenceMouseChannel', () => {
      const enterPresenceMouseChannelSpy = jest.spyOn(
        ABLY_REALTIME_MOCK,
        'enterPresenceMouseChannel',
      );
      presenceMouseComponent['start']();

      expect(enterPresenceMouseChannelSpy).toHaveBeenCalledWith(MOCK_LOCAL_PARTICIPANT);
    });

    test('should call addListenersToWrappers', () => {
      const addListenersToWrappersSpy = jest.spyOn(
        PointersHTML.prototype as any,
        'addListenersToWrappers',
      );
      presenceMouseComponent['start']();

      expect(addListenersToWrappersSpy).toHaveBeenCalled();
    });

    test('should call subscribeToRealtimeEvents', () => {
      const subscribeToRealtimeEventsSpy = jest.spyOn(
        PointersHTML.prototype as any,
        'subscribeToRealtimeEvents',
      );
      presenceMouseComponent['start']();

      expect(subscribeToRealtimeEventsSpy).toHaveBeenCalled();
    });

    test('should call eventBus.subscribe', () => {
      const subscribeSpy = jest.spyOn(presenceMouseComponent['eventBus'] as any, 'subscribe');
      presenceMouseComponent['start']();

      expect(subscribeSpy).toHaveBeenCalledTimes(3);
    });

    test('should call requestAnimationFrame', () => {
      const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame');
      presenceMouseComponent['start']();

      expect(requestAnimationFrameSpy).toHaveBeenCalledWith(expect.any(Function));
    });

    describe('destroy', () => {
      test('should call cancelAnimationFrame', () => {
        const cancelAnimationFrameSpy = jest.spyOn(window, 'cancelAnimationFrame');
        presenceMouseComponent['destroy']();

        expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(
          presenceMouseComponent['animationFrame'],
        );
      });

      test('should call realtime.leavePresenceMouseChannel', () => {
        const leavePresenceMouseChannelSpy = jest.spyOn(
          ABLY_REALTIME_MOCK,
          'leavePresenceMouseChannel',
        );
        presenceMouseComponent['destroy']();

        expect(leavePresenceMouseChannelSpy).toHaveBeenCalled();
      });

      test('should remove each wrapper from the DOM', () => {
        expect(document.querySelectorAll('[data-wrapper-id]').length).toBe(2);
        const wrappersSpy = jest.spyOn(presenceMouseComponent['wrappers'], 'clear');
        const voidWrappersSpy = jest.spyOn(presenceMouseComponent['voidElementsWrappers'], 'clear');
        const svgWrappersSpy = jest.spyOn(presenceMouseComponent['svgElementsWrappers'], 'clear');
        presenceMouseComponent['destroy']();

        expect(document.querySelectorAll('[data-wrapper-id]').length).toBe(0);
        expect(wrappersSpy).toHaveBeenCalled();
        expect(voidWrappersSpy).toHaveBeenCalled();
        expect(svgWrappersSpy).toHaveBeenCalled();
      });

      test('should call removeListenersFromWrappers', () => {
        const removeListenersFromWrappersSpy = jest.spyOn(
          PointersHTML.prototype as any,
          'removeListenersFromWrappers',
        );
        presenceMouseComponent['destroy']();

        expect(removeListenersFromWrappersSpy).toHaveBeenCalled();
      });

      test('should call mutationObserver.disconnect', () => {
        const disconnectSpy = jest.spyOn(presenceMouseComponent['mutationObserver'], 'disconnect');
        presenceMouseComponent['destroy']();

        expect(disconnectSpy).toHaveBeenCalled();
      });

      test('should call unsubscribeFromRealtimeEvents', () => {
        const unsubscribeFromRealtimeEventsSpy = jest.spyOn(
          PointersHTML.prototype as any,
          'unsubscribeFromRealtimeEvents',
        );
        presenceMouseComponent['destroy']();

        expect(unsubscribeFromRealtimeEventsSpy).toHaveBeenCalled();
      });

      test('should call eventBus.unsubscribe', () => {
        const unsubscribeSpy = jest.spyOn(presenceMouseComponent['eventBus'] as any, 'unsubscribe');
        presenceMouseComponent['destroy']();

        expect(unsubscribeSpy).toHaveBeenCalledTimes(3);
      });

      test('should clear elementsWithDataAttribute', () => {
        const elementsSpy = jest.spyOn(
          presenceMouseComponent['elementsWithDataAttribute'],
          'clear',
        );

        presenceMouseComponent['destroy']();

        expect(elementsSpy).toHaveBeenCalled();
      });

      test('should avoid memory leaks', () => {
        presenceMouseComponent['destroy']();

        expect(presenceMouseComponent['logger']).toBeUndefined();
        expect(presenceMouseComponent['voidElementsWrappers']).toBeUndefined();
        expect(presenceMouseComponent['svgElementsWrappers']).toBeUndefined();
        expect(presenceMouseComponent['presences']).toBeUndefined();
        expect(presenceMouseComponent['elementsWithDataAttribute']).toBeUndefined();
        expect(presenceMouseComponent['mutationObserver']).toBeUndefined();
        expect(presenceMouseComponent['wrappers']).toBeUndefined();
      });
    });
  });

  describe('renderWrapper', () => {
    beforeEach(() => {
      presenceMouseComponent['wrappers'].clear();
      presenceMouseComponent['voidElementsWrappers'].clear();
    });

    test('should call renderElementWrapper', () => {
      const renderElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderElementWrapper',
      );
      const element = document.querySelector('[data-superviz-id="1"]') as Element;
      presenceMouseComponent['renderWrapper'](element, '1');

      expect(renderElementWrapperSpy).toHaveBeenCalledWith(element, '1');
    });

    test('should call renderSVGElementWrapper', () => {
      const renderSVGElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderSVGElementWrapper',
      );

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const element = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect',
      ) as unknown as Element;
      svg.appendChild(element);
      document.body.appendChild(svg);

      presenceMouseComponent['renderWrapper'](element, '1');

      expect(renderSVGElementWrapperSpy).toHaveBeenCalledWith(element, '1');
    });

    test('should call renderVoidElementWrapper', () => {
      const renderVoidElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderVoidElementWrapper',
      );

      const div = document.createElement('div') as HTMLDivElement;
      const element = document.createElement('img') as unknown as Element;
      div.appendChild(element);

      presenceMouseComponent['renderWrapper'](element, '1');
      expect(renderVoidElementWrapperSpy).toHaveBeenCalledWith(element, '1');
    });

    test('should do nothing if wrapper already exists', () => {
      const renderElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderElementWrapper',
      );
      const renderVoidElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderVoidElementWrapper',
      );
      const renderSVGElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderSVGElementWrapper',
      );

      const element = document.querySelector('[data-superviz-id="1"]') as Element;
      presenceMouseComponent['wrappers'].set('1', element);
      presenceMouseComponent['renderWrapper'](element, '1');

      expect(renderElementWrapperSpy).not.toHaveBeenCalled();
      expect(renderVoidElementWrapperSpy).not.toHaveBeenCalled();
      expect(renderSVGElementWrapperSpy).not.toHaveBeenCalled();
    });
  });

  describe('addWrapperListeners', () => {
    test('should add event listeners to the wrapper', () => {
      const wrapper = document.createElement('div');
      const addEventListenerSpy = jest.spyOn(wrapper, 'addEventListener');
      presenceMouseComponent['wrappers'].set('1', wrapper);
      presenceMouseComponent['addWrapperListeners']('1');

      expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(addEventListenerSpy).toHaveBeenCalledWith('mouseout', expect.any(Function));
    });

    test('should not add event listeners if wrapper is not found', () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      presenceMouseComponent['addWrapperListeners']('not-found');

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('removeWrapperListeners', () => {
    test('should remove event listeners from the wrapper', () => {
      const wrapper = document.createElement('div');
      const removeEventListenerSpy = jest.spyOn(wrapper, 'removeEventListener');
      presenceMouseComponent['wrappers'].set('1', wrapper);
      presenceMouseComponent['removeWrapperListeners']('1');

      expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseout', expect.any(Function));
    });

    test('should not remove event listeners if wrapper is not found', () => {
      const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
      presenceMouseComponent['removeWrapperListeners']('not-found');

      expect(removeEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('renderVoidElementWrapper', () => {
    test('should create a wrapper and append it to the parent', () => {
      const element = document.createElement('img') as unknown as Element;
      const parent = document.createElement('div');
      parent.appendChild(element);

      presenceMouseComponent['renderVoidElementWrapper'](element, '1');

      const wrapper = parent.querySelector('[data-wrapper-id="1"]') as HTMLElement;

      expect(wrapper).toBeTruthy();
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('1');
      expect(presenceMouseComponent['voidElementsWrappers'].get('1')).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('absolute');
      expect(wrapper.style.width).toEqual('0px');
      expect(wrapper.style.height).toEqual('0px');
      expect(wrapper.style.top).toEqual('0px');
      expect(wrapper.style.left).toEqual('0px');
      expect(wrapper.style.overflow).toEqual('visible');
    });
  });

  describe('renderSVGElementWrapper', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div><div id="html"><svg data-superviz-id="0"><ellipse data-superviz-id="1"></ellipse><rect data-superviz-id="2"></rect></svg></div></div>`;
      presenceMouseComponent = createMousePointers();
    });

    test('should create a wrapper for a rect element and append it to the parent', () => {
      const rect = document.body.getElementsByTagName('rect')[0];

      presenceMouseComponent['renderSVGElementWrapper'](rect, '2');

      const wrapper = document.body.querySelector('[data-wrapper-id="2"]') as HTMLElement;

      expect(wrapper).toBeTruthy();
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('2');
      expect(presenceMouseComponent['wrappers'].get('2')).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.width).toEqual('0px');
      expect(wrapper.style.height).toEqual('0px');
      expect(wrapper.style.top).toEqual('0px');
      expect(wrapper.style.left).toEqual('0px');
      expect(wrapper.style.overflow).toEqual('visible');
    });

    test('should create a wrapper for a ellipse element and append it to the parent', () => {
      const ellipse = document.body.getElementsByTagName('ellipse')[0];

      presenceMouseComponent['renderSVGElementWrapper'](ellipse, '1');

      const wrapper = document.body.querySelector('[data-wrapper-id="1"]') as HTMLElement;

      expect(wrapper).toBeTruthy();
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('1');
      const wrapper2 = presenceMouseComponent['wrappers'].get('1');
      expect(wrapper2).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.width).toEqual('0px');
      expect(wrapper.style.height).toEqual('0px');
      expect(wrapper.style.top).toEqual('0px');
      expect(wrapper.style.left).toEqual('0px');
      expect(wrapper.style.overflow).toEqual('visible');
    });

    test('should create a wrapper for a svg element and append it to the parent', () => {
      const svg = document.body.getElementsByTagName('svg')[0];

      presenceMouseComponent['renderSVGElementWrapper'](svg, '0');

      const wrapper = document.body.querySelector('[data-wrapper-id="0"]') as HTMLElement;

      expect(wrapper).toBeTruthy();
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('0');
      expect(presenceMouseComponent['wrappers'].get('0')).toEqual(wrapper);
      expect(wrapper.style.position).toEqual('absolute');
      expect(wrapper.style.width).toEqual('0px');
      expect(wrapper.style.height).toEqual('0px');
      expect(wrapper.style.top).toEqual('0px');
      expect(wrapper.style.left).toEqual('0px');
      expect(wrapper.style.overflow).toEqual('visible');
    });
  });

  describe('renderElementWrapper', () => {
    test('should create a wrapper and append it to the parent', () => {
      const element = document.querySelector('[data-superviz-id="1"]') as Element;
      presenceMouseComponent['renderElementWrapper'](element, '1');

      const wrapper = document.querySelector('[data-wrapper-id="1"]') as HTMLElement;

      expect(wrapper).toBeTruthy();
      expect(wrapper.getAttribute('data-wrapper-id')).toEqual('1');
      expect(presenceMouseComponent['wrappers'].get('1')).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('absolute');
      expect(wrapper.style.width).toEqual('100%');
      expect(wrapper.style.height).toEqual('100%');
      expect(wrapper.style.top).toEqual('0px');
      expect(wrapper.style.left).toEqual('0px');
      expect(wrapper.style.overflow).toEqual('visible');
    });
  });

  describe('onMyParticipantMouseMove', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div><div id="html"><div data-superviz-id="1" style="width: 100px; height: 100px;"></div></div></div>`;
      presenceMouseComponent = createMousePointers();
    });

    test('should call realtime.updatePresenceMouse', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      const event = {
        currentTarget: {
          clientWidth: 100,
          clientHeight: 100,
          getAttribute: () => '1',
        },
        offsetX: 50,
        offsetY: 50,
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseMove'](event);

      expect(updatePresenceMouseSpy).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        x: 0.5,
        y: 0.5,
        elementId: '1',
        visible: true,
      });
    });

    test('should not call realtime.updatePresenceMouse if isPrivate', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      presenceMouseComponent['isPrivate'] = true;

      const event = {
        currentTarget: {
          clientWidth: 100,
          clientHeight: 100,
          getAttribute: () => '1',
        },
        offsetX: 50,
        offsetY: 50,
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseMove'](event);

      expect(updatePresenceMouseSpy).not.toHaveBeenCalled();
    });

    test('should not call realtime.updatePresenceMouse if container has no width', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      const event = {
        currentTarget: {
          clientWidth: 0,
          clientHeigh: 100,
          getAttribute: () => '1',
        },
        offsetX: 50,
        offsetY: 50,
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseMove'](event);

      expect(updatePresenceMouseSpy).not.toHaveBeenCalled();
    });

    test('should not call realtime.updatePresenceMouse if container has no height', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      const event = {
        currentTarget: {
          clientWidth: 100,
          clientHeight: 0,
          getAttribute: () => '1',
        },
        offsetX: 50,
        offsetY: 50,
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseMove'](event);

      expect(updatePresenceMouseSpy).not.toHaveBeenCalled();
    });
  });

  describe('onMyParticipantMouseOut', () => {
    test('should call realtime.updatePresenceMouse', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      const event = {
        currentTarget: {
          getAttribute: () => '1',
        },
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseOut'](event);

      expect(updatePresenceMouseSpy).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        elementId: '',
        visible: false,
      });
    });
  });

  describe('onParticipantsDidChange', () => {
    test('should set presences', () => {
      presenceMouseComponent['onParticipantsDidChange'](participants);
      const map = new Map(Object.entries(participants));
      map.delete(MOCK_LOCAL_PARTICIPANT.id);

      expect(presenceMouseComponent['presences']).toEqual(map);
    });

    test('should call removePresenceMouseParticipant', () => {
      const removePresenceMouseParticipantSpy = jest.spyOn(
        presenceMouseComponent as any,
        'removePresenceMouseParticipant',
      );

      const map = new Map(Object.entries(participants));

      presenceMouseComponent['onParticipantsDidChange'](participants);
      presenceMouseComponent['userBeingFollowedId'] = 'unit-test-participant2-ably-id';
      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(removePresenceMouseParticipantSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('goToMouse', () => {
    beforeEach(() => {
      participants['unit-test-participant2-ably-id'].elementId = '1';
      presenceMouseComponent['onParticipantsDidChange'](participants);
    });

    test('should call scrollIntoView', () => {
      presenceMouseComponent['createMouseElement'](
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );

      presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView =
        jest.fn();

      presenceMouseComponent['wrappers'].set('1', document.createElement('div'));

      presenceMouseComponent['goToMouse']('unit-test-participant2-ably-id');

      expect(
        presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView,
      ).toHaveBeenCalledWith({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      });
    });

    test('should not call scrollIntoView if wrapper is not found', () => {
      presenceMouseComponent['createMouseElement'](
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );

      presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView =
        jest.fn();

      presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!.elementId =
        'not-found';
      presenceMouseComponent['goToMouse']('unit-test-participant2-ably-id');

      expect(
        presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView,
      ).not.toHaveBeenCalled();
    });

    test('should not call scrollIntoView if participant is not found', () => {
      presenceMouseComponent['createMouseElement'](
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );

      presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView =
        jest.fn();

      presenceMouseComponent['goToMouse']('not-found');

      expect(
        presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView,
      ).not.toHaveBeenCalled();
    });
  });

  describe('followMouse', () => {
    test('should set userBeingFollowedId', () => {
      presenceMouseComponent['followMouse']('unit-test-participant2-ably-id');
      expect(presenceMouseComponent['userBeingFollowedId']).toEqual(
        'unit-test-participant2-ably-id',
      );
    });
  });

  describe('handleMutationObserverChanges', () => {
    let setElementsSpy: jest.SpyInstance;
    let clearElementSpy: jest.SpyInstance;
    let renderWrapperSpy: jest.SpyInstance;

    beforeEach(() => {
      setElementsSpy = jest.spyOn(
        presenceMouseComponent['elementsWithDataAttribute'] as any,
        'set',
      );
      clearElementSpy = jest.spyOn(presenceMouseComponent as any, 'clearElement');
      renderWrapperSpy = jest.spyOn(presenceMouseComponent as any, 'renderWrapper');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should set elements and update pins when a new element with the specified attribute appears', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: null,
      } as unknown as MutationRecord;

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(setElementsSpy).toHaveBeenCalled();
      expect(renderWrapperSpy).toHaveBeenCalled();
      expect(clearElementSpy).not.toHaveBeenCalled();
    });

    test('should clear elements and remove the wrappers if the attribute is removed from the element', () => {
      const change = {
        target: document.createElement('div') as HTMLElement,
        oldValue: '1',
      } as unknown as MutationRecord;

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).toHaveBeenCalled();
      expect(renderWrapperSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });

    test('should clear element if the attribute changes, but still exists', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: '2',
      } as unknown as MutationRecord;

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).toHaveBeenCalled();
      expect(renderWrapperSpy).toHaveBeenCalled();
      expect(setElementsSpy).toHaveBeenCalled();
    });

    test('should do nothing if there is not new nor old value to the attribute', () => {
      const target = document.createElement('div') as HTMLElement;
      target.setAttribute('data-superviz-id', '');
      const change = {
        target,
        oldValue: null,
      } as unknown as MutationRecord;

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).not.toHaveBeenCalled();
      expect(renderWrapperSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });

    test('should do nothing if the new value is the same as the old attribute value', () => {
      const change = {
        target: document.body.querySelector('[data-superviz-id="1"]') as HTMLElement,
        oldValue: '1',
      } as unknown as MutationRecord;

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).not.toHaveBeenCalled();
      expect(renderWrapperSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });

    test('should clear element then do nothing if new value is filtered', () => {
      document.body.innerHTML =
        '<div id="container"><div data-superviz-id="1-matches";"><div><div data-superviz-id="does-not-match"></div></div>';
      presenceMouseComponent = new PointersHTML('container', {
        dataAttributeValueFilters: [/.*-matches$/],
      });
      const change = {
        target: document.body.querySelector('[data-superviz-id="1-matches"]') as HTMLElement,
        oldValue: '2',
      } as unknown as MutationRecord;

      setElementsSpy = jest.spyOn(
        presenceMouseComponent['elementsWithDataAttribute'] as any,
        'set',
      );
      renderWrapperSpy = jest.spyOn(presenceMouseComponent as any, 'renderWrapper');
      clearElementSpy = jest.spyOn(presenceMouseComponent as any, 'clearElement');

      presenceMouseComponent['handleMutationObserverChanges']([change]);

      expect(clearElementSpy).toHaveBeenCalled();
      expect(renderWrapperSpy).not.toHaveBeenCalled();
      expect(setElementsSpy).not.toHaveBeenCalled();
    });
  });

  describe('onParticipantLeftOnRealtime', () => {
    test('should call removePresenceMouseParticipant', () => {
      const removePresenceMouseParticipantSpy = jest.spyOn(
        presenceMouseComponent as any,
        'removePresenceMouseParticipant',
      );

      presenceMouseComponent['onParticipantLeftOnRealtime'](MOCK_MOUSE);

      expect(removePresenceMouseParticipantSpy).toHaveBeenCalledWith(MOCK_MOUSE.id);
    });
  });

  describe('setParticipantPrivate', () => {
    test('should call realtime.updatePresenceMouse', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      presenceMouseComponent['setParticipantPrivate'](true);

      expect(updatePresenceMouseSpy).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        visible: false,
      });
    });

    test('should set isPrivate', () => {
      presenceMouseComponent['setParticipantPrivate'](true);
      expect(presenceMouseComponent['isPrivate']).toBeTruthy();
    });
  });

  describe('setPositionNotStatic', () => {
    test('should set position relative if position is static', () => {
      const element = document.createElement('div');
      element.style.position = 'static';

      presenceMouseComponent['setPositionNotStatic'](element);

      expect(element.style.position).toEqual('relative');
    });

    test('should not set position relative if position is not static', () => {
      const element = document.createElement('div');
      element.style.position = 'relative';

      presenceMouseComponent['setPositionNotStatic'](element);

      expect(element.style.position).toEqual('relative');
    });
  });

  describe('createMouseElement', () => {
    beforeEach(() => {
      participants['unit-test-participant2-ably-id'].elementId = '1';
    });

    test('should create a mouse element and append it to the wrapper', () => {
      const mouse = presenceMouseComponent['createMouseElement'](
        participants['unit-test-participant2-ably-id'],
      );

      expect(mouse).toBeTruthy();
      expect(mouse.getAttribute('id')).toEqual('mouse-unit-test-participant2-ably-id');
      expect(mouse.getAttribute('class')).toEqual('mouse-follower');
      expect(mouse.getAttribute('data-element-id')).toEqual('1');
      expect(mouse.querySelector('.pointer-mouse')).toBeTruthy();
      expect(mouse.querySelector('.mouse-user-name')).toBeTruthy();
      expect(presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')).toEqual(mouse);
    });

    test('should not create a mouse element if wrapper is not found', () => {
      const mouse = presenceMouseComponent['createMouseElement'](
        participants['unit-test-participant3-ably-id'],
      );

      expect(mouse).toBeFalsy();
    });
  });

  /**
   *  private getTextColorValue = (slotIndex: number): string => {
    return [2, 4, 5, 7, 8, 16].includes(slotIndex) ? '#FFFFFF' : '#26242A';
  };
 
   */
  describe('getTextColorValue', () => {
    test('should return the correct colors', () => {
      const indexArray: number[] = [];
      for (let i = 0; i < 17; i++) {
        indexArray.push(i);
      }

      indexArray.forEach((index, i) => {
        if ([2, 4, 5, 7, 8, 16].includes(i)) {
          expect(presenceMouseComponent['getTextColorValue'](index)).toBe('#FFFFFF');
          return;
        }

        expect(presenceMouseComponent['getTextColorValue'](index)).toBe('#26242A');
      });
    });
  });

  describe('updateSVGPosition', () => {
    test('should update the wrapper position', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

      rect.getBoundingClientRect = () =>
        ({
          left: 100,
          top: 100,
          width: 100,
          height: 100,
        } as unknown as DOMRect);

      svg.appendChild(rect);
      document.body.appendChild(svg);

      const wrapper = document.createElement('div');
      document.body.appendChild(wrapper);

      presenceMouseComponent['updateSVGPosition'](rect, wrapper);

      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('100px');
      expect(wrapper.style.left).toEqual('100px');
    });
  });

  describe('createRectWrapper', () => {
    test('should identify the correct external viewport when there are nested svgs', () => {
      document.body.innerHTML = `
        <div id="html">
          <svg id="svg1">
            <svg id="svg2">
              <rect id="rect" data-superviz-id="1"></rect>
            </svg>
          </svg>
        </div>
        `;

      const mouse = createMousePointers();
      const svg1 = document.getElementById('svg1');
      const svg2 = document.getElementById('svg2');

      const spyOne = jest.spyOn(svg1!.parentElement as any, 'appendChild');
      const spyTwo = jest.spyOn(svg2!.parentElement as any, 'appendChild');

      mouse['createRectWrapper'](document.getElementById('rect') as Element, '1');

      expect(spyOne).toHaveBeenCalled();
      expect(spyTwo).not.toHaveBeenCalled();
    });
  });

  describe('createEllipseWrapper', () => {
    test('should identify the correct external viewport when there are nested svgs', () => {
      document.body.innerHTML = `
        <div id="html">
          <svg id="svg1">
            <svg id="svg2">
              <ellipse id="ellipse" data-superviz-id="1"></ellipse>
            </svg>
          </svg>
        </div>
        `;

      const mouse = createMousePointers();
      const svg1 = document.getElementById('svg1');
      const svg2 = document.getElementById('svg2');

      const spyOne = jest.spyOn(svg1!.parentElement as any, 'appendChild');
      const spyTwo = jest.spyOn(svg2!.parentElement as any, 'appendChild');

      mouse['createEllipseWrapper'](document.getElementById('ellipse') as Element, '1');

      expect(spyOne).toHaveBeenCalled();
      expect(spyTwo).not.toHaveBeenCalled();
    });
  });

  describe('animate', () => {
    test('should call requestAnimationFrame', () => {
      const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame');
      presenceMouseComponent['animate']();

      expect(requestAnimationFrameSpy).toHaveBeenCalledWith(expect.any(Function));
    });

    test('should call updateVoidElementWrapper', () => {
      const updateVoidElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateVoidElementWrapper',
      );
      presenceMouseComponent['animate']();

      expect(updateVoidElementWrapperSpy).toHaveBeenCalled();
    });

    test('should call updateSVGElementWrapper', () => {
      const updateSVGElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateSVGElementWrapper',
      );
      presenceMouseComponent['animate']();

      expect(updateSVGElementWrapperSpy).toHaveBeenCalled();
    });

    test('should call updateParticipantsMouses', () => {
      const updateParticipantsMousesSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateParticipantsMouses',
      );
      presenceMouseComponent['animate']();

      expect(updateParticipantsMousesSpy).toHaveBeenCalled();
    });
  });

  describe('updateParticipantsMouses', () => {
    beforeEach(() => {
      presenceMouseComponent['onParticipantsDidChange'](participants);
    });

    test('should call removePresenceMouseParticipant if mouse is not visible', () => {
      const removePresenceMouseParticipantSpy = jest.spyOn(
        presenceMouseComponent as any,
        'removePresenceMouseParticipant',
      );

      presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!.visible = false;
      presenceMouseComponent['updateParticipantsMouses']();

      expect(removePresenceMouseParticipantSpy).toHaveBeenCalledWith(
        'unit-test-participant2-ably-id',
      );
    });

    test('should call removePresenceMouseParticipant if mouse has no elementId', () => {
      const removePresenceMouseParticipantSpy = jest.spyOn(
        presenceMouseComponent as any,
        'removePresenceMouseParticipant',
      );

      presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!.elementId = '';
      presenceMouseComponent['updateParticipantsMouses']();

      expect(removePresenceMouseParticipantSpy).toHaveBeenCalledWith(
        'unit-test-participant2-ably-id',
      );
    });

    test('should call renderPresenceMouses', () => {
      const renderPresenceMousesSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderPresenceMouses',
      );

      presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!.elementId = '1';
      presenceMouseComponent['updateParticipantsMouses']();

      expect(renderPresenceMousesSpy).toHaveBeenCalledWith(
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );
    });

    test('should call goToMouse', () => {
      const goToMouseSpy = jest.spyOn(presenceMouseComponent as any, 'goToMouse');

      presenceMouseComponent['userBeingFollowedId'] = 'unit-test-participant2-ably-id';
      presenceMouseComponent['updateParticipantsMouses']();

      expect(goToMouseSpy).toHaveBeenCalledWith('unit-test-participant2-ably-id');
    });
  });

  describe('updateVoidElementWrapper', () => {
    test('should update the wrapper position', () => {
      presenceMouseComponent['elementsWithDataAttribute'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
          };
        },
        offsetLeft: 100,
        offsetTop: 100,
      } as any);

      presenceMouseComponent['voidElementsWrappers'].set('1', {
        getBoundingClientRect() {
          return {
            width: 200,
            height: 200,
          };
        },
        offsetLeft: 200,
        offsetTop: 200,
        style: {
          // eslint-disable-next-line func-names
          setProperty: jest.fn().mockImplementation(function (key, value) {
            this[key] = value;
          }),
          width: '0',
          height: '0',
          top: '0',
          left: '0',
        },
      } as any);

      presenceMouseComponent['updateVoidElementWrapper']();

      const wrapper = presenceMouseComponent['voidElementsWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.setProperty).toBeCalled();
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('100px');
      expect(wrapper.style.left).toEqual('100px');
    });

    test('should not update the wrapper position if it is already updated', () => {
      presenceMouseComponent['elementsWithDataAttribute'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
          };
        },
        offsetLeft: 100,
        offsetTop: 100,
      } as any);

      presenceMouseComponent['voidElementsWrappers'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
          };
        },
        offsetLeft: 200,
        offsetTop: 200,
        style: {
          setProperty: jest.fn(),
        },
      } as any);

      presenceMouseComponent['updateVoidElementWrapper']();

      const wrapper = presenceMouseComponent['voidElementsWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.setProperty).not.toBeCalled();
    });
  });

  describe('updateSVGElementWrapper', () => {
    test('should update the wrapper position', () => {
      presenceMouseComponent['elementsWithDataAttribute'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
        tagName: {
          toLowerCase: () => 'rect',
        },
      } as any);

      presenceMouseComponent['svgElementsWrappers'].set('1', {
        getBoundingClientRect() {
          return {
            width: 200,
            height: 200,
            left: 200,
            top: 200,
          };
        },
        style: {
          // eslint-disable-next-line func-names
          setProperty: jest.fn().mockImplementation(function (key, value) {
            this[key] = value;
          }),
          width: '0',
          height: '0',
          top: '0',
          left: '0',
        },
      } as any);

      presenceMouseComponent['updateSVGElementWrapper']();

      const wrapper = presenceMouseComponent['svgElementsWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.setProperty).toBeCalled();
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('100px');
      expect(wrapper.style.left).toEqual('100px');
    });

    test('should not update the wrapper position if it is already updated', () => {
      presenceMouseComponent['elementsWithDataAttribute'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
      } as any);

      presenceMouseComponent['svgElementsWrappers'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
        style: {
          setProperty: jest.fn(),
        },
      } as any);

      presenceMouseComponent['updateSVGElementWrapper']();

      const wrapper = presenceMouseComponent['svgElementsWrappers'].get('1') as HTMLElement;

      expect(wrapper.style.setProperty).not.toBeCalled();
    });

    test('should call updateSVGPosition if element is an svg', () => {
      presenceMouseComponent['updateSVGPosition'] = jest.fn();

      presenceMouseComponent['elementsWithDataAttribute'].set('1', {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
        tagName: {
          toLowerCase: () => 'svg',
        },
      } as any);

      presenceMouseComponent['svgElementsWrappers'].set('1', {
        getBoundingClientRect() {
          return {
            width: 200,
            height: 200,
            left: 200,
            top: 200,
          };
        },
        style: {
          setProperty: jest.fn(),
        },
      } as any);

      presenceMouseComponent['updateSVGElementWrapper']();

      expect(presenceMouseComponent['updateSVGPosition']).toHaveBeenCalled();
      expect(
        presenceMouseComponent['svgElementsWrappers'].get('1')?.style.setProperty,
      ).not.toBeCalled();
    });
  });

  describe('removePresenceMouseParticipant', () => {
    beforeEach(() => {
      presenceMouseComponent['onParticipantsDidChange'](participants);
      presenceMouseComponent['updateParticipantsMouses']();
    });

    test('should remove the mouse element and the participant from the presences and mouses', () => {
      const mouse = document.createElement('div');
      mouse.setAttribute('id', 'mouse-unit-test-participant2-ably-id');
      document.body.appendChild(mouse);

      presenceMouseComponent['presences'].set('unit-test-participant2-ably-id', MOCK_MOUSE);
      presenceMouseComponent['mouses'].set('unit-test-participant2-ably-id', mouse);

      presenceMouseComponent['removePresenceMouseParticipant']('unit-test-participant2-ably-id');

      expect(document.getElementById('mouse-unit-test-participant2-ably-id')).toBeFalsy();
      expect(presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')).toBeFalsy();
      expect(presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')).toBeFalsy();
    });

    test('should not remove the mouse element if it does not exist', () => {
      const presenceSpy = jest.spyOn(presenceMouseComponent['presences'], 'delete');
      const mouseSpy = jest.spyOn(presenceMouseComponent['mouses'], 'delete');

      presenceMouseComponent['removePresenceMouseParticipant']('not-found');

      expect(presenceSpy).not.toHaveBeenCalled();
      expect(mouseSpy).not.toHaveBeenCalled();
    });
  });

  /**
   * private renderPresenceMouses = (participant: ParticipantMouse): void => {
    const userMouseIdExist = document.getElementById(`mouse-${participant.id}`);
    let mouseFollower = userMouseIdExist;
 
    Iif (mouseFollower && mouseFollower.getAttribute('data-element-id') !== participant.elementId) {
      mouseFollower.remove();
      this.mouses.delete(participant.id);
      mouseFollower = null;
    }
 
    if (!mouseFollower) {
      mouseFollower = this.createMouseElement(participant);
    }
 
    const divMouseUser = document.getElementById(`mouse-${participant.id}`);
    const divPointer = document.getElementById(`mouse-${participant.id}`);
 
    Iif (!divMouseUser || !divPointer) return;
 
    const mouseUser = divMouseUser.getElementsByClassName('mouse-user-name')[0] as HTMLDivElement;
    const pointerUser = divPointer.getElementsByClassName('pointer-mouse')[0] as HTMLDivElement;
 
    if (pointerUser) {
      pointerUser.style.backgroundImage = `url(https://production.cdn.superviz.com/static/pointers/${participant.slotIndex}.svg)`;
    }
 
    if (mouseUser) {
      mouseUser.style.color = this.getTextColorValue(participant.slotIndex);
      mouseUser.style.backgroundColor = participant.color;
      mouseUser.innerHTML = participant.name;
    }
 
    const { x, y } = participant;
    const { width, height } = this.wrappers.get(participant.elementId).getBoundingClientRect();
 
    mouseFollower.style.left = `${x * width}px`;
    mouseFollower.style.top = `${y * height}px`;
  };
   */

  describe('renderPresenceMouses', () => {
    let participant: ParticipantMouse;
    let mouseFollower: HTMLElement;
    let divMouseUser: HTMLElement;
    let divPointer: HTMLElement;
    let mouseUser: HTMLDivElement;
    let pointerUser: HTMLDivElement;

    beforeEach(() => {
      participant = {
        ...MOCK_MOUSE,
        elementId: '1',
      };

      mouseFollower = document.createElement('div');
      mouseFollower.setAttribute('id', `mouse-${participant.id}`);
      document.body.appendChild(mouseFollower);

      divMouseUser = document.createElement('div');
      divMouseUser.setAttribute('id', `mouse-${participant.id}`);
      document.body.appendChild(divMouseUser);

      divPointer = document.createElement('div');
      divPointer.setAttribute('id', `mouse-${participant.id}`);
      document.body.appendChild(divPointer);

      mouseUser = document.createElement('div');
      mouseUser.setAttribute('class', 'mouse-user-name');
      divMouseUser.appendChild(mouseUser);

      pointerUser = document.createElement('div');
      pointerUser.setAttribute('class', 'pointer-mouse');
      divPointer.appendChild(pointerUser);

      presenceMouseComponent['wrappers'].set('1', document.createElement('div'));
    });

    test('should remove the mouse element if it exists and has a different elementId', () => {
      const removeSpy = jest.spyOn(mouseFollower, 'remove');

      participant.elementId = '2';
      presenceMouseComponent['renderPresenceMouses'](participant);

      expect(removeSpy).toHaveBeenCalled();
    });

    test('should create the mouse element if it does not exist', () => {
      const createMouseElementSpy = jest.spyOn(presenceMouseComponent as any, 'createMouseElement');

      presenceMouseComponent['renderPresenceMouses'](participant);

      expect(createMouseElementSpy).toHaveBeenCalledWith(participant);
    });

    test('should not create the mouse element if it already exists', () => {
      const createMouseElementSpy = jest.spyOn(presenceMouseComponent as any, 'createMouseElement');

      mouseFollower.setAttribute('data-element-id', participant.elementId as string);

      presenceMouseComponent['renderPresenceMouses'](participant);

      expect(createMouseElementSpy).toHaveBeenCalledTimes(0);
    });
  });
});
