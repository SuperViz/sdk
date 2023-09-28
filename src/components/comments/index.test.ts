import { MOCK_ANNOTATION } from '../../../__mocks__/comments.mock';
import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_OBSERVER_HELPER } from '../../../__mocks__/observer-helper.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import sleep from '../../common/utils/sleep';
import ApiService from '../../services/api';

import { PinAdapter } from './types';

import { CommentsComponent } from './index';

jest.mock('../../services/api', () => ({
  fetchAnnotation: jest.fn().mockImplementation((): any => []),
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

describe('CommentsComponent', () => {
  let commentsComponent: CommentsComponent;

  beforeEach(() => {
    jest.clearAllMocks();

    commentsComponent = new CommentsComponent(DummiePinAdapter);

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

  test('should create a new instance of CommentsComponent', () => {
    expect(commentsComponent).toBeInstanceOf(CommentsComponent);
  });

  test('should have a name property', () => {
    expect(commentsComponent['name']).toBe('comments-component');
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
    commentsComponent = new CommentsComponent(DummiePinAdapter);

    const spy = jest.spyOn(commentsComponent['logger'], 'log');

    commentsComponent.attach({
      realtime: Object.assign({}, ABLY_REALTIME_MOCK, { isJoinedRoom: true }),
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    await sleep(1);

    expect(spy).toHaveBeenCalledWith('comments-component @ attached');
    expect(spy).toHaveBeenCalledWith('error when fetching annotations', 'internal server error');
  });

  test('should update annotation list when fetch annotation is successful', async () => {
    commentsComponent.detach();
    commentsComponent = new CommentsComponent(DummiePinAdapter);
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

  test('should update annotations list on component when annotations are updated on realtime', async () => {
    commentsComponent['onAnnotationListUpdate']([MOCK_ANNOTATION]);

    expect(commentsComponent['annotations']).toEqual([MOCK_ANNOTATION]);
    expect(commentsComponent['element'].updateAnnotations).toHaveBeenCalledWith([MOCK_ANNOTATION]);
    expect(commentsComponent['pinAdapter'].updateAnnotations).toHaveBeenCalledWith([
      MOCK_ANNOTATION,
    ]);
  });
});
