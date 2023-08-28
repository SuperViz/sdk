import { MOCK_CONFIG } from '../../../__mocks__/config.mock';
import { EVENT_BUS_MOCK } from '../../../__mocks__/event-bus.mock';
import { MOCK_GROUP, MOCK_LOCAL_PARTICIPANT } from '../../../__mocks__/participants.mock';
import { ABLY_REALTIME_MOCK } from '../../../__mocks__/realtime.mock';
import ApiService from '../../services/api';

import { CommentsComponent } from './index';

jest.mock('../../services/api', () => ({
  fetchAnnotation: jest.fn().mockImplementation((): any => []),
  createAnnotations: jest.fn().mockImplementation(() => []),
  createComment: jest.fn().mockImplementation(() => []),
  resolveAnnotation: jest.fn().mockImplementation(() => []),
}));

describe('CommentsComponent', () => {
  let commentsComponent: CommentsComponent;

  beforeEach(() => {
    jest.clearAllMocks();
    commentsComponent = new CommentsComponent();

    commentsComponent.attach({
      realtime: ABLY_REALTIME_MOCK,
      localParticipant: MOCK_LOCAL_PARTICIPANT,
      group: MOCK_GROUP,
      config: MOCK_CONFIG,
      eventBus: EVENT_BUS_MOCK,
    });

    commentsComponent['element'].addAnnotation = jest.fn().mockImplementation(() => []);
    commentsComponent['element'].addComment = jest.fn().mockImplementation(() => []);
  });

  afterEach(() => {
    commentsComponent.detach();
  });

  it('should create a new instance of CommentsComponent', () => {
    expect(commentsComponent).toBeInstanceOf(CommentsComponent);
  });

  it('should have a name property', () => {
    expect(commentsComponent['name']).toBe('Comments');
  });

  it('should have a logger property', () => {
    expect(commentsComponent['logger']).toBeDefined();
  });

  it('should have an element property', () => {
    expect(commentsComponent['element']).toBeDefined();
  });

  it('should create a new element when start() is called', () => {
    commentsComponent.detach();
    expect(commentsComponent['element']).toBeUndefined();
  });

  it('should add the element to the document body when start() is called', () => {
    expect(document.body.contains(commentsComponent['element'])).toBe(true);
  });

  it('should remove the element from the document body when destroy() is called', async () => {
    expect(commentsComponent['element']).toBeDefined();

    commentsComponent.detach();

    expect(document.body.contains(commentsComponent['element'])).toBe(false);
  });

  it('should call apiService when fetch annotation', async () => {
    const spy = jest.spyOn(ApiService, 'fetchAnnotation');

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      {
        roomId: MOCK_CONFIG.roomId,
        url: expect.any(String),
      },
    );
  });

  it('should call apiService when create annotation', async () => {
    const spy = jest.spyOn(ApiService, 'createAnnotations');

    commentsComponent['element'].dispatchEvent(new CustomEvent('create-annotation', {
      detail: {
        text: 'test',
        position: {
          x: 0,
          y: 0,
        },
      },
    }));

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      {
        roomId: MOCK_CONFIG.roomId,
        url: expect.any(String),
        userId: expect.any(String),
        position: expect.any(String),
      },
    );
  });

  it('should call apiService when resolve annotation', async () => {
    const spy = jest.spyOn(ApiService, 'resolveAnnotation');

    commentsComponent['element'].dispatchEvent(new CustomEvent('resolve-annotation', {
      detail: {
        uuid: 'test',
      },
    }));

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      'test',
    );
  });

  it('should call apiService when resolve annotation', async () => {
    const spy = jest.spyOn(ApiService, 'resolveAnnotation');

    commentsComponent['element'].dispatchEvent(new CustomEvent('resolve-annotation', {
      detail: {
        uuid: 'test',
      },
    }));

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      'test',
    );
  });

  it('should call apiService when create a new comment', async () => {
    const spy = jest.spyOn(ApiService, 'createComment');

    commentsComponent['element'].dispatchEvent(new CustomEvent('create-comment', {
      detail: {
        uuid: 'uuid-test',
        text: 'text-test',
      },
    }));

    expect(spy).toHaveBeenCalledWith(
      MOCK_CONFIG.apiUrl,
      MOCK_CONFIG.apiKey,
      {
        annotationId: 'uuid-test',
        userId: expect.any(String),
        text: 'text-test',
      },
    );
  });
});
