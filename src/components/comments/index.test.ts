import { MOCK_ANNOTATION } from '../../../__mocks__/comments.mock';
import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import sleep from '../../common/utils/sleep';
import ApiService from '../../services/api';
import { CommentsFloatButton } from '../../web-components';
import { ComponentNames } from '../types';
import { PinAdapter, CommentsSide, Annotation } from './types';

import { Comments } from './index';

jest.mock('../../services/api', () => ({
  fetchAnnotation: jest.fn().mockImplementation((): any => []),
  fetchWaterMark: jest.fn().mockImplementation((): boolean => true),
  createAnnotations: jest.fn().mockImplementation(() => MOCK_ANNOTATION),
  createComment: jest.fn().mockImplementation(() => MOCK_ANNOTATION.comments[0]),
  updateComment: jest.fn().mockImplementation(() => []),
  resolveAnnotation: jest.fn().mockImplementation(() => []),
  deleteComment: jest.fn().mockImplementation(() => []),
  deleteAnnotation: jest.fn().mockImplementation(() => []),
}));

const DummiePinAdapter: PinAdapter = {
  destroy: jest.fn(),
  setActive: jest.fn(),
  updateAnnotations: jest.fn(),
  removeAnnotationPin: jest.fn(),
  onPinFixedObserver: MOCK_OBSERVER_HELPER,
};

describe('Comments', () => {
  let commentsComponent: Comments;

  beforeEach(() => {
    jest.clearAllMocks();

    commentsComponent = new Comments(DummiePinAdapter);

    commentsComponent.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    commentsComponent['element'].updateAnnotations = jest.fn();
  });

  afterEach(() => {
    commentsComponent.detach();
  });

  test('should create a new instance of Comments', () => {
    expect(commentsComponent).toBeInstanceOf(Comments);
  });

  test('should have a name property', () => {
    expect(commentsComponent['name']).toBe(ComponentNames.COMMENTS);
  });

  test('should have a logger property', () => {
    expect(commentsComponent['logger']).toBeDefined();
  });

  test('should have an element property', () => {
    expect(commentsComponent['element']).toBeDefined();
  });

  test('should create a new element when start() is called', () => {
    commentsComponent.detach();
    expect(commentsComponent['element']).toBeUndefined();
  });

  test('should add the element to the document body when start() is called', () => {
    expect(document.body.contains(commentsComponent['element'])).toBe(true);
  });

  test('should remove the element from the document body when destroy() is called', async () => {
    expect(commentsComponent['element']).toBeDefined();

    commentsComponent.detach();

    expect(document.body.contains(commentsComponent['element'])).toBe(false);
  });

  test('should toggle component', () => {
    commentsComponent['toggleAnnotationSidebar']();
    expect(commentsComponent['element'].hasAttribute('open')).toBe(true);
    commentsComponent['toggleAnnotationSidebar']();
    expect(commentsComponent['element'].hasAttribute('open')).toBe(false);
  });

  test('should call apiService when fetch annotation', async () => {
    const spy = jest.spyOn(ApiService, 'fetchAnnotation');

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, {
      roomId: MOCK_CONFIG.roomId,
      url: expect.any(String),
    });
  });

  test('should call apiService when create annotation', async () => {
    const spy = jest.spyOn(ApiService, 'createAnnotations');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: {
          text: 'test',
          position: {
            x: 0,
            y: 0,
          },
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, {
      roomId: MOCK_CONFIG.roomId,
      url: expect.any(String),
      userId: expect.any(String),
      position: expect.any(String),
    });
  });

  describe('waterMarkState', () => {
    test('should call apiServiceapiService fetchWaterMark and send to element the waterMark status to commentsComponent', async () => {
      const spy = jest.spyOn(ApiService, 'fetchWaterMark');

      expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey);

      const response = await ApiService.fetchWaterMark(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey);
      expect(response).toEqual(true);

      commentsComponent['element'].waterMarkStatus = jest.fn();
      await commentsComponent['element'].waterMarkStatus(true);

      expect(commentsComponent['element'].waterMarkStatus).toHaveBeenCalledWith(true);
    });
  });

  test('should append the button to the body and set the comments position if no button location is specified', () => {
    const comments = new Comments(DummiePinAdapter);
    comments['layoutOptions'] = {
      buttonLocation: '',
      position: 'left',
    };

    comments['positionFloatingButton']();

    expect(document.body.contains(comments['button'])).toBe(true);
    expect(comments['button'].commentsPosition).toBe(comments['layoutOptions'].position);
  });

  test('should append the button to the specified element if a valid button location is specified and the element has no child nodes', () => {
    const comments = new Comments(DummiePinAdapter);
    comments['layoutOptions'].buttonLocation = 'test-element';

    const element = document.createElement('div');
    element.id = 'test-element';
    document.body.appendChild(element);

    comments['positionFloatingButton']();

    expect(element.contains(comments['button'])).toBe(true);
  });

  test('should append the button to the body and set the position styles if an invalid button location is specified', () => {
    const comments = new Comments(DummiePinAdapter);

    comments['layoutOptions'].buttonLocation = 'invalid-location';

    comments['positionFloatingButton']();

    expect(document.body.contains(comments['button'])).toBe(true);
    expect(comments['button'].positionStyles).toBe('top: 20px; left: 20px;');
  });

  test('should set the comments position if a valid button location is specified and the element has child nodes', () => {
    const comments = new Comments(DummiePinAdapter);
    comments['layoutOptions'].buttonLocation = 'testa-element';

    const element = document.createElement('div');
    element.id = 'testa-element';

    element.appendChild(document.createElement('ul'));
    window.document.body.appendChild(element);

    comments['positionFloatingButton']();

    const button = window.document.body.querySelector(
      'superviz-comments-button',
    ) as CommentsFloatButton;

    expect(button).not.toBeNull();
    expect(button.commentsPosition).toBe(comments['layoutOptions'].position);
    expect(element.children.length).toBe(2);
  });

  test('should create the comments element and append it to the body', () => {
    const comment = new Comments(DummiePinAdapter);

    comment['positionComments']();

    expect(document.body.querySelector('superviz-comments')).toBeTruthy();
  });

  test('should set the side to left if no position is specified', () => {
    const comments = new Comments(DummiePinAdapter);

    comments['positionComments']();

    expect(comments['element'].side).toBe('left: 0;');
  });

  test('should set the left side style if the position is "left"', () => {
    const comments = new Comments(DummiePinAdapter);

    comments['layoutOptions'].position = CommentsSide.LEFT;
    comments['positionComments']();

    expect(comments['element'].side).toBe('left: 0;');
  });

  test('should set the right side style if the position is "right"', () => {
    const comments = new Comments(DummiePinAdapter);

    comments['layoutOptions'].position = CommentsSide.RIGHT;
    comments['positionComments']();

    expect(comments['element'].side).toBe('right: 0;');
  });

  test('should have position "left" if no position is passed', () => {
    const comments = new Comments(DummiePinAdapter);
    comments['layoutOptions'] = {
      buttonLocation: 'top-rigth',
    };

    comments['positionComments']();

    expect(comments['element'].side).toBe('left: 0;');
  });

  test('should have position "left" if invalid position is passed', () => {
    const comments = new Comments(DummiePinAdapter);
    comments['layoutOptions'].position = 'invalid-position' as any;
    comments['positionComments']();

    expect(comments['element'].side).toBe('left: 0;');
  });

  test('should call apiService when resolve annotation', async () => {
    const spy = jest.spyOn(ApiService, 'resolveAnnotation');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('resolve-annotation', {
        detail: {
          uuid: 'test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, 'test');
  });

  test('should throw an error when resolve annotation fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.resolveAnnotation as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('resolve-annotation', {
        detail: {
          uuid: 'test',
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when resolve annotation', 'internal server error');
  });

  test('should throw an error when fetch annotation fails', async () => {
    (ApiService.fetchAnnotation as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent.detach();
    commentsComponent = new Comments(DummiePinAdapter);

    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    commentsComponent.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    await sleep(1);

    expect(spy).toHaveBeenCalledWith(`${ComponentNames.COMMENTS} @ attached`);
    expect(spy).toHaveBeenCalledWith('error when fetching annotations', 'internal server error');
  });

  test('should update annotation list when fetch annotation is successful', async () => {
    commentsComponent.detach();
    commentsComponent = new Comments(DummiePinAdapter);
    (ApiService.fetchAnnotation as jest.Mock).mockReturnValueOnce([MOCK_ANNOTATION]);

    commentsComponent.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    await sleep(1);

    expect(commentsComponent['annotations']).toEqual([MOCK_ANNOTATION]);
  });

  test('should call apiService when create a new comment', async () => {
    const spy = jest.spyOn(ApiService, 'createComment');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-comment', {
        detail: {
          uuid: 'uuid-test',
          text: 'text-test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, {
      annotationId: 'uuid-test',
      userId: expect.any(String),
      text: 'text-test',
    });
  });

  test('should call apiService when update a comment', async () => {
    const spy = jest.spyOn(ApiService, 'updateComment');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('update-comment', {
        detail: {
          uuid: 'uuid-test',
          text: 'text-test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      'uuid-test',
      'text-test',
    );
  });

  test('should add anotation to list when it is created', async () => {
    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: {
          text: MOCK_ANNOTATION.comments[0].text,
          position: MOCK_ANNOTATION.position,
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'].length).toBe(1);
    expect(ABLY_REALTIME_MOCK.updateComments).toHaveBeenCalledWith(
      commentsComponent['annotations'],
    );
  });

  test('should throw an error when create annotation fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.createAnnotations as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-annotation', {
        detail: {
          text: MOCK_ANNOTATION.comments[0].text,
          position: MOCK_ANNOTATION.position,
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when creating annotation', 'internal server error');
  });

  test('should add comment to annotation when it is created', async () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
          text: MOCK_ANNOTATION.comments[0].text,
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'][0].comments.length).toBe(3);
    expect(ABLY_REALTIME_MOCK.updateComments).toHaveBeenCalledWith(
      commentsComponent['annotations'],
    );
  });

  test('should throw an error when create comment fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.createComment as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('create-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
          text: MOCK_ANNOTATION.comments[0].text,
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when creating comment', 'internal server error');
  });

  test('should throw an error when update comment fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.updateComment as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('update-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
          text: MOCK_ANNOTATION.comments[0].text,
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when updating comment', 'internal server error');
  });

  test('should update comment on annotation when it is updated', async () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('update-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.comments[0].uuid,
          text: 'text-test',
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'][0].comments[0].text).toBe('text-test');
    expect(ABLY_REALTIME_MOCK.updateComments).toHaveBeenCalledWith(
      commentsComponent['annotations'],
    );
  });

  test('should call apiService when delete a comment', async () => {
    const spy = jest.spyOn(ApiService, 'deleteComment');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-comment', {
        detail: {
          uuid: 'uuid-test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, 'uuid-test');
  });

  test('should remove comment from annotation when it is deleted', async () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.comments[0].uuid,
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'][0].comments.length).toBe(1);
    expect(ABLY_REALTIME_MOCK.updateComments).toHaveBeenCalledWith(
      commentsComponent['annotations'],
    );
  });

  test('should throw an error when delete comment fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.deleteComment as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-comment', {
        detail: {
          uuid: MOCK_ANNOTATION.comments[0].uuid,
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when deleting comment', 'internal server error');
  });

  test('should call apiService when delete annotation', async () => {
    const spy = jest.spyOn(ApiService, 'deleteAnnotation');

    commentsComponent['element']['annotations'] = [{ ...MOCK_ANNOTATION }];
    commentsComponent['element']['updateAnnotations'] = jest
      .fn()
      .mockImplementation(() => [{ uuid: 'uuid-test' }]);

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-annotation', {
        detail: {
          uuid: 'uuid-test',
        },
      }),
    );

    expect(spy).toHaveBeenCalledWith(MOCK_CONFIG.apiUrl, MOCK_CONFIG.apiKey, 'uuid-test');
  });

  test('should remove annotation from list when it is deleted', async () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'].length).toBe(0);
    expect(ABLY_REALTIME_MOCK.updateComments).toHaveBeenCalledWith(
      commentsComponent['annotations'],
    );
    expect(commentsComponent['pinAdapter'].removeAnnotationPin).toHaveBeenCalledWith(
      MOCK_ANNOTATION.uuid,
    );
  });

  test('should throw an error when delete annotation fails', async () => {
    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    (ApiService.deleteAnnotation as jest.Mock).mockRejectedValueOnce('internal server error');

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('delete-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('error when deleting annotation', 'internal server error');
  });

  test('should not update annotations list on component when participant id is the same clientId', () => {
    commentsComponent['onAnnotationListUpdate']({
      clientId: MOCK_LOCAL_PARTICIPANT.id,
      data: [MOCK_ANNOTATION],
    });

    expect(commentsComponent['annotations']).toEqual([]);
    expect(commentsComponent['element'].updateAnnotations).toHaveBeenCalledTimes(1);
    expect(commentsComponent['pinAdapter'].updateAnnotations).toHaveBeenCalledTimes(1);
  });

  test('should update annotations list on component when annotations are updated on realtime', () => {
    commentsComponent['onAnnotationListUpdate']({
      clientId: 'unit-test-client-id',
      data: [MOCK_ANNOTATION],
    });

    expect(commentsComponent['annotations']).toEqual([MOCK_ANNOTATION]);
    expect(commentsComponent['element'].updateAnnotations).toHaveBeenCalledWith([MOCK_ANNOTATION]);
    expect(commentsComponent['pinAdapter'].updateAnnotations).toHaveBeenCalledWith([
      MOCK_ANNOTATION,
    ]);
  });

  test('should dispatch an event to body when new annotation pin is fixed', () => {
    const spy = jest.spyOn(window.document.body, 'dispatchEvent');

    commentsComponent['onFixedPin']({
      x: 100,
      y: 0,
      type: 'canvas',
    });

    expect(spy).toHaveBeenCalledWith(
      new CustomEvent('prepare-to-create-annotation', {
        detail: {
          x: 100,
          y: 0,
          type: 'canvas',
        },
      }),
    );
  });

  test('should remove pin from canvas when resolving', async () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];
    ApiService.resolveAnnotation = jest.fn().mockImplementation(() => {
      return {
        ...MOCK_ANNOTATION,
        resolved: true,
      };
    });

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('resolve-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    await sleep(1);

    expect(commentsComponent['annotations'].length).toBe(1);
    expect(commentsComponent['pinAdapter'].removeAnnotationPin).toHaveBeenCalledWith(
      MOCK_ANNOTATION.uuid,
    );
  });

  test('should update annotation list when annotation is unresolved', () => {
    commentsComponent['annotations'] = [MOCK_ANNOTATION];
    ApiService.resolveAnnotation = jest.fn().mockImplementation(() => {
      return {
        ...MOCK_ANNOTATION,
        resolved: false,
      };
    });

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('resolve-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect(commentsComponent['annotations'].length).toBe(1);
    expect(commentsComponent['pinAdapter'].updateAnnotations).toHaveBeenCalled();
  });

  test('should not modify annotation if it`s not changed', () => {
    const annotationList: Annotation[] = [
      MOCK_ANNOTATION,
      { ...MOCK_ANNOTATION, uuid: 'other-uuid' },
    ];
    commentsComponent['annotations'] = annotationList;

    commentsComponent['element'].dispatchEvent(
      new CustomEvent('resolve-annotation', {
        detail: {
          uuid: MOCK_ANNOTATION.uuid,
        },
      }),
    );

    expect(commentsComponent['annotations'].length).toBe(2);
    expect(commentsComponent['annotations'][1]).toStrictEqual(annotationList[1]);
  });
});
