import { MOCK_CONFIG } from '../../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../../__mocks__/realtime.mock';
import { INDEX_IS_WHITE_TEXT } from '../../../common/types/meeting-colors.types';
import { ParticipantMouse } from '../types';

import { PointersHTML } from '.';

const createMousePointers = (id: string = 'html'): PointersHTML => {
  const presenceMouseComponent = new PointersHTML(id);

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
    document.body.innerHTML = `<div><div id="html"></div></div>`;

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
      expect(() => createMousePointers('not-found-container')).toThrowError(
        'Element with id not-found-container not found',
      );
    });

    test('should set different properties', () => {
      createMousePointers();

      expect(presenceMouseComponent['container']).toEqual(document.getElementById('html'));
      expect(presenceMouseComponent['name']).toEqual('presence');
    });
  });

  describe('start', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('should call enterPresenceMouseChannel', () => {
      const enterPresenceMouseChannelSpy = jest.spyOn(
        ABLY_REALTIME_MOCK,
        'enterPresenceMouseChannel',
      );
      presenceMouseComponent['start']();

      expect(enterPresenceMouseChannelSpy).toHaveBeenCalledWith(MOCK_LOCAL_PARTICIPANT);
    });

    test('should call renderWrapper', () => {
      const renderWrapperSpy = jest.spyOn(presenceMouseComponent as any, 'renderWrapper');

      presenceMouseComponent['start']();

      expect(renderWrapperSpy).toHaveBeenCalled();
    });

    test('should call addListeners', () => {
      const addListenersSpy = jest.spyOn(presenceMouseComponent as any, 'addListeners');
      presenceMouseComponent['start']();

      expect(addListenersSpy).toHaveBeenCalled();
    });

    test('should call subscribeToRealtimeEvents', () => {
      const subscribeToRealtimeEventsSpy = jest.spyOn(
        presenceMouseComponent as any,
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
      beforeEach(() => {
        presenceMouseComponent['start']();
      });

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

      test('should remove wrapper from the DOM', () => {
        const wrapperSpy = jest.spyOn(presenceMouseComponent['wrapper'] as any, 'remove');

        presenceMouseComponent['destroy']();

        expect(wrapperSpy).toHaveBeenCalled();
      });

      test('should call removeListeners', () => {
        const removeListeners = jest.spyOn(presenceMouseComponent as any, 'removeListeners');

        presenceMouseComponent['destroy']();

        expect(removeListeners).toHaveBeenCalled();
      });

      test('should call unsubscribeFromRealtimeEvents', () => {
        const unsubscribeFromRealtimeEventsSpy = jest.spyOn(
          presenceMouseComponent as any,
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

      test('should avoid memory leaks', () => {
        presenceMouseComponent['destroy']();

        expect(presenceMouseComponent['logger']).toBeUndefined();
        expect(presenceMouseComponent['presences']).toBeUndefined();
        expect(presenceMouseComponent['wrapper']).toBeUndefined();
        expect(presenceMouseComponent['container']).toBeUndefined();
      });
    });
  });

  describe('renderWrapper', () => {
    test('should call renderElementWrapper', () => {
      const renderElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderElementWrapper',
      );

      presenceMouseComponent['renderWrapper']();

      expect(renderElementWrapperSpy).toHaveBeenCalled();
    });

    test('should do nothing if wrapper already exists', () => {
      const renderElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderElementWrapper',
      );

      const element = document.createElement('div');

      presenceMouseComponent['wrapper'] = element;

      presenceMouseComponent['renderWrapper']();

      expect(renderElementWrapperSpy).not.toHaveBeenCalled();
    });
  });

  describe('addWrapperListeners', () => {
    test('should add event listeners to the container', () => {
      const addEventListenerSpy = jest.spyOn(
        presenceMouseComponent['container'],
        'addEventListener',
      );

      presenceMouseComponent['addListeners']();

      expect(addEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
      expect(addEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    });
  });

  describe('removeWrapperListeners', () => {
    test('should remove event listeners from the container', () => {
      const removeEventListenerSpy = jest.spyOn(
        presenceMouseComponent['container'],
        'removeEventListener',
      );

      presenceMouseComponent['removeListeners']();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
    });
  });

  describe('renderVoidElementWrapper', () => {
    test('should create a wrapper and append it to the parent', () => {
      document.body.innerHTML = `<div><img id="void-element" style="height: 100px; width: 100px;"></div>`;
      presenceMouseComponent = createMousePointers('void-element');

      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          left: 20,
          top: 30,
          width: 100,
          height: 100,
        } as any);

      presenceMouseComponent['start']();

      const elementWrapper = presenceMouseComponent['wrapper'];

      expect(elementWrapper).toBeTruthy();
      expect(elementWrapper.style.position).toEqual('absolute');
      expect(elementWrapper.style.width).toEqual('100px');
      expect(elementWrapper.style.height).toEqual('100px');
      expect(elementWrapper.style.top).toEqual('30px');
      expect(elementWrapper.style.left).toEqual('20px');
      expect(elementWrapper.style.overflow).toEqual('visible');
      expect(elementWrapper.style.pointerEvents).toEqual('none');
    });
  });

  describe('renderSVGElementWrapper', () => {
    beforeEach(() => {
      presenceMouseComponent = createMousePointers();
      presenceMouseComponent['start']();
    });

    test('should create a wrapper for a rect element and append it to the parent', () => {
      document.body.innerHTML = '<svg id="svg"><rect id="rect"></rect></svg>';

      presenceMouseComponent = createMousePointers('rect');
      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          left: 20,
          top: 30,
          width: 100,
          height: 100,
        } as unknown as DOMRect);

      presenceMouseComponent['start']();

      const wrapper = document.body.querySelector('#superviz-rect-wrapper') as SVGRectElement;

      expect(wrapper).toBeTruthy();
      expect(presenceMouseComponent['wrapper']).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('30px');
      expect(wrapper.style.left).toEqual('20px');
      expect(wrapper.style.overflow).toEqual('visible');
      expect(wrapper.style.pointerEvents).toEqual('none');

      expect(wrapper.querySelector('svg')).toBeDefined();
    });

    test('should create a wrapper for a ellipse element and append it to the parent', () => {
      document.body.innerHTML = `<svg id="svg"><ellipse id="ellipse"></ellipse></svg>`;

      presenceMouseComponent = createMousePointers('ellipse');
      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          left: 20,
          top: 30,
          width: 100,
          height: 100,
        } as unknown as DOMRect);

      presenceMouseComponent['start']();

      const wrapper = document.body.querySelector('#superviz-ellipse-wrapper') as SVGRectElement;

      expect(wrapper).toBeTruthy();
      expect(presenceMouseComponent['wrapper']).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('30px');
      expect(wrapper.style.left).toEqual('20px');
      expect(wrapper.style.overflow).toEqual('visible');
      expect(wrapper.style.pointerEvents).toEqual('none');

      expect(wrapper.querySelector('svg')).toBeDefined();
    });

    test('should create a wrapper for a svg element and append it to the parent', () => {
      document.body.innerHTML = `<svg id="svg"></svg>`;
      presenceMouseComponent = createMousePointers('svg');
      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          left: 20,
          top: 30,
          width: 100,
          height: 100,
        } as unknown as DOMRect);

      presenceMouseComponent['start']();

      const wrapper = document.body.querySelector('#superviz-svg-wrapper') as SVGRectElement;

      expect(wrapper).toBeTruthy();
      expect(presenceMouseComponent['wrapper']).toEqual(wrapper);

      expect(wrapper.style.position).toEqual('fixed');
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('30px');
      expect(wrapper.style.left).toEqual('20px');
      expect(wrapper.style.overflow).toEqual('visible');
      expect(wrapper.style.pointerEvents).toEqual('none');

      expect(wrapper.querySelector('svg')).toBeDefined();
    });
  });

  describe('renderElementWrapper', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div><div id="regular-element"></div></div>`;
    });

    test('should create a wrapper and append it to the parent', () => {
      createMousePointers('regular-element');

      presenceMouseComponent.attach({
        realtime: ABLY_REALTIME_MOCK,
        localParticipant: MOCK_LOCAL_PARTICIPANT,
        group: MOCK_GROUP,
        config: MOCK_CONFIG,
        eventBus: EVENT_BUS_MOCK,
      });

      presenceMouseComponent['start']();

      const elementWrapper = presenceMouseComponent['wrapper'];

      expect(elementWrapper).toBeTruthy();
      expect(elementWrapper.style.position).toEqual('absolute');
      expect(elementWrapper.style.width).toEqual('100%');
      expect(elementWrapper.style.height).toEqual('100%');
      expect(elementWrapper.style.top).toEqual('0px');
      expect(elementWrapper.style.left).toEqual('0px');
      expect(elementWrapper.style.overflow).toEqual('visible');
    });
  });

  describe('onMyParticipantMouseMove', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div><div id="html"><div style="width: 100px; height: 100px;"></div></div></div>`;
      presenceMouseComponent = createMousePointers();
    });

    test('should call realtime.updatePresenceMouse', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      presenceMouseComponent['transform']({ translate: { x: 10, y: 10 }, scale: 1 });

      const event = {
        currentTarget: {
          getBoundingClientRect() {
            return {
              left: 10,
              top: 10,
            };
          },
        },
        x: 50,
        y: 50,
      } as unknown as MouseEvent;

      presenceMouseComponent['onMyParticipantMouseMove'](event);

      expect(updatePresenceMouseSpy).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
        x: 30,
        y: 30,
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
  });

  describe('onMyParticipantMouseLeave', () => {
    test('should call realtime.updatePresenceMouse', () => {
      const updatePresenceMouseSpy = jest.spyOn(
        presenceMouseComponent['realtime'],
        'updatePresenceMouse',
      );

      presenceMouseComponent['onMyParticipantMouseLeave']();

      expect(updatePresenceMouseSpy).toHaveBeenCalledWith({
        ...MOCK_LOCAL_PARTICIPANT,
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

      presenceMouseComponent['onParticipantsDidChange'](participants);
      presenceMouseComponent['userBeingFollowedId'] = 'unit-test-participant2-ably-id';
      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(removePresenceMouseParticipantSpy).toHaveBeenCalledTimes(1);
    });

    test('should call updateParticipantsMouses', () => {
      const updateParticipantsMousesSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateParticipantsMouses',
      );

      presenceMouseComponent['onParticipantsDidChange'](participants);

      expect(updateParticipantsMousesSpy).toHaveBeenCalled();
    });
  });

  describe('goToMouse', () => {
    beforeEach(() => {
      presenceMouseComponent['onParticipantsDidChange'](participants);
    });

    test('should call scrollIntoView', () => {
      presenceMouseComponent['start']();

      presenceMouseComponent['createMouseElement'](
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );

      presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView =
        jest.fn();

      presenceMouseComponent['start']();

      presenceMouseComponent['goToMouse']('unit-test-participant2-ably-id');

      expect(
        presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView,
      ).toHaveBeenCalledWith({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      });
    });

    test('should not call scrollIntoView if participant is not found', () => {
      presenceMouseComponent['start']();

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

    test('should call callback and not scrollIntoView if there is a callback', () => {
      presenceMouseComponent['start']();

      presenceMouseComponent['createMouseElement'](
        presenceMouseComponent['presences'].get('unit-test-participant2-ably-id')!,
      );

      presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')!.scrollIntoView =
        jest.fn();

      const { x, y } = presenceMouseComponent['mouses']
        .get('unit-test-participant2-ably-id')!
        .getBoundingClientRect();

      const callback = jest.fn();
      presenceMouseComponent['goToPresenceCallback'] = callback;
      presenceMouseComponent['goToMouse']('unit-test-participant2-ably-id');

      expect(callback).toHaveBeenCalledWith({ x, y });
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
      presenceMouseComponent['container'].style.position = 'static';

      presenceMouseComponent['setPositionNotStatic']();

      expect(presenceMouseComponent['container'].style.position).toEqual('relative');
    });

    test('should not set position relative if position is not static', () => {
      presenceMouseComponent['container'].style.position = 'relative';

      presenceMouseComponent['setPositionNotStatic']();

      expect(presenceMouseComponent['container'].style.position).toEqual('relative');
    });
  });

  describe('createMouseElement', () => {
    beforeEach(() => {
      presenceMouseComponent['start']();
    });

    test('should create a mouse element and append it to the wrapper', () => {
      const mouse = presenceMouseComponent['createMouseElement'](
        participants['unit-test-participant2-ably-id'],
      );

      expect(mouse).toBeTruthy();
      expect(mouse.getAttribute('id')).toEqual('mouse-unit-test-participant2-ably-id');
      expect(mouse.getAttribute('class')).toEqual('mouse-follower');
      expect(mouse.querySelector('.pointer-mouse')).toBeTruthy();
      expect(mouse.querySelector('.mouse-user-name')).toBeTruthy();
      expect(presenceMouseComponent['mouses'].get('unit-test-participant2-ably-id')).toEqual(mouse);
    });

    test('should not create a mouse element if wrapper is not found', () => {
      // @ts-ignore
      presenceMouseComponent['wrapper'] = undefined;

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
        if (INDEX_IS_WHITE_TEXT.includes(i)) {
          expect(presenceMouseComponent['getTextColorValue'](index)).toBe('#FFFFFF');
          return;
        }

        expect(presenceMouseComponent['getTextColorValue'](index)).toBe('#26242A');
      });
    });
  });

  describe('updateSVGPosition', () => {
    beforeEach(() => {
      presenceMouseComponent['start']();
    });

    test('should update the wrapper position', () => {
      document.body.innerHTML = `<div><svg id="svg"></svg></div>`;
      presenceMouseComponent = createMousePointers('svg');

      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          left: 100,
          top: 100,
          width: 100,
          height: 100,
        } as unknown as DOMRect);

      presenceMouseComponent['start']();
      presenceMouseComponent['updateSVGElementWrapper']();

      const wrapper = presenceMouseComponent['wrapper'] as HTMLElement;

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

      presenceMouseComponent = createMousePointers('rect');
      const svg1 = document.getElementById('svg1');
      const svg2 = document.getElementById('svg2');

      const spyOne = jest.spyOn(svg1!.parentElement as any, 'appendChild');
      const spyTwo = jest.spyOn(svg2!.parentElement as any, 'appendChild');

      presenceMouseComponent['start']();
      presenceMouseComponent['createRectWrapper']();

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

      presenceMouseComponent = createMousePointers('ellipse');
      const svg1 = document.getElementById('svg1');
      const svg2 = document.getElementById('svg2');

      const spyOne = jest.spyOn(svg1!.parentElement as any, 'appendChild');
      const spyTwo = jest.spyOn(svg2!.parentElement as any, 'appendChild');

      presenceMouseComponent['start']();
      presenceMouseComponent['createEllipseWrapper']();

      expect(spyOne).toHaveBeenCalled();
      expect(spyTwo).not.toHaveBeenCalled();
    });
  });

  describe('animate', () => {
    test('should call requestAnimationFrame', () => {
      const requestAnimationFrameSpy = jest.spyOn(window, 'requestAnimationFrame');

      presenceMouseComponent['start']();
      presenceMouseComponent['animate']();

      expect(requestAnimationFrameSpy).toHaveBeenCalledWith(expect.any(Function));
    });

    test('should call updateVoidElementWrapper', () => {
      document.body.innerHTML = '<div><img id="void-element"></div>';
      presenceMouseComponent = createMousePointers('void-element');

      const updateVoidElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateVoidElementWrapper',
      );

      presenceMouseComponent['start']();
      presenceMouseComponent['animate']();

      expect(updateVoidElementWrapperSpy).toHaveBeenCalled();
    });

    test('should call updateSVGElementWrapper', () => {
      document.body.innerHTML = '<div><svg id="void-element"></svg></div>';
      presenceMouseComponent = createMousePointers('void-element');

      const updateSVGElementWrapperSpy = jest.spyOn(
        presenceMouseComponent as any,
        'updateSVGElementWrapper',
      );

      presenceMouseComponent['start']();
      presenceMouseComponent['animate']();

      expect(updateSVGElementWrapperSpy).toHaveBeenCalled();
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

    test('should call renderPresenceMouses', () => {
      const renderPresenceMousesSpy = jest.spyOn(
        presenceMouseComponent as any,
        'renderPresenceMouses',
      );

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
      presenceMouseComponent['container'].getBoundingClientRect = () =>
        ({
          width: 200,
          height: 200,
        } as any);

      presenceMouseComponent['start']();

      presenceMouseComponent['container'] = {
        ...presenceMouseComponent['container'],
        offsetLeft: 200,
        offsetTop: 200,
      };

      const setPropertySpy = jest.spyOn(
        presenceMouseComponent['wrapper'].style as any,
        'setProperty',
      );
      presenceMouseComponent['updateVoidElementWrapper']();

      const wrapper = presenceMouseComponent['wrapper'] as HTMLElement;

      expect(setPropertySpy).toBeCalled();
      expect(wrapper.style.width).toEqual('200px');
      expect(wrapper.style.height).toEqual('200px');
      expect(wrapper.style.top).toEqual('200px');
      expect(wrapper.style.left).toEqual('200px');
    });

    test('should not update the wrapper position if it is already updated', () => {
      presenceMouseComponent['container'] = {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
          };
        },
        offsetLeft: 100,
        offsetTop: 100,
      } as any;

      presenceMouseComponent['wrapper'] = {
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
      } as any;

      presenceMouseComponent['updateVoidElementWrapper']();

      const wrapper = presenceMouseComponent['wrapper'] as HTMLElement;

      expect(wrapper.style.setProperty).not.toBeCalled();
    });
  });

  describe('updateSVGElementWrapper', () => {
    test('should update the wrapper position', () => {
      presenceMouseComponent['container'] = {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
      } as any;

      presenceMouseComponent['wrapper'] = {
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
      } as any;

      presenceMouseComponent['updateSVGElementWrapper']();

      const wrapper = presenceMouseComponent['wrapper'] as HTMLElement;

      expect(wrapper.style.setProperty).toBeCalled();
      expect(wrapper.style.width).toEqual('100px');
      expect(wrapper.style.height).toEqual('100px');
      expect(wrapper.style.top).toEqual('100px');
      expect(wrapper.style.left).toEqual('100px');
    });

    test('should not update the wrapper position if it is already updated', () => {
      presenceMouseComponent['start']();

      presenceMouseComponent['container'] = {
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
      } as any;

      presenceMouseComponent['wrapper'] = {
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
      } as any;

      presenceMouseComponent['updateSVGElementWrapper']();

      const wrapper = presenceMouseComponent['wrapper'] as HTMLElement;

      expect(wrapper.style.setProperty).not.toBeCalled();
    });

    test('should call updateSVGPosition if element is an svg', () => {
      document.body.innerHTML = '<svg id="svg"></svg>';
      presenceMouseComponent = createMousePointers('svg');
      presenceMouseComponent['start']();
      presenceMouseComponent['updateSVGPosition'] = jest.fn();

      presenceMouseComponent['container'] = {
        ...presenceMouseComponent['container'],
        getBoundingClientRect() {
          return {
            width: 100,
            height: 100,
            left: 100,
            top: 100,
          };
        },
      } as any;

      presenceMouseComponent['wrapper'] = {
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
      } as any;

      presenceMouseComponent['updateSVGElementWrapper']();

      expect(presenceMouseComponent['updateSVGPosition']).toHaveBeenCalled();
      expect(presenceMouseComponent['wrapper'].style.setProperty).not.toBeCalled();
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

  describe('renderPresenceMouses', () => {
    let participant: ParticipantMouse;
    let mouseFollower: HTMLElement;
    let divMouseUser: HTMLElement;
    let divPointer: HTMLElement;
    let mouseUser: HTMLDivElement;
    let pointerUser: HTMLDivElement;

    beforeEach(() => {
      participant = MOCK_MOUSE;

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

      presenceMouseComponent['start']();
    });

    test('should create the mouse element if it does not exist', () => {
      const createMouseElementSpy = jest.spyOn(presenceMouseComponent as any, 'createMouseElement');

      presenceMouseComponent['renderPresenceMouses'](
        participants['unit-test-participant2-ably-id'],
      );

      expect(createMouseElementSpy).toHaveBeenCalledWith(
        participants['unit-test-participant2-ably-id'],
      );
    });

    test('should not create the mouse element if it already exists', () => {
      const createMouseElementSpy = jest.spyOn(presenceMouseComponent as any, 'createMouseElement');

      presenceMouseComponent['renderPresenceMouses'](
        participants['unit-test-participant2-ably-id'],
      );

      presenceMouseComponent['renderPresenceMouses'](
        participants['unit-test-participant2-ably-id'],
      );

      expect(createMouseElementSpy).toHaveBeenCalledTimes(1);
    });
  });
});
