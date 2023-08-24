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
      config: {
        ...MOCK_CONFIG,
        apiUrl: 'https://dev.nodeapi.superviz.com',
      },
      eventBus: EVENT_BUS_MOCK,
    });

    commentsComponent['element'].addAnnotation = jest.fn().mockImplementation(() => []);
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
    const result = jest.spyOn(ApiService, 'fetchAnnotation');

    expect(result).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      {
        roomId: expect.any(String),
        url: expect.any(String),
      },
    );
  });

  it('should call apiService when create annotation', async () => {
    const result = jest.spyOn(ApiService, 'createAnnotations');

    commentsComponent['element'].dispatchEvent(new CustomEvent('create-annotation', {
      detail: {
        text: 'test',
        position: {
          x: 0,
          y: 0,
        },
      },
    }));

    expect(result).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      {
        roomId: expect.any(String),
        url: expect.any(String),
        userId: expect.any(String),
        position: expect.any(String),
      },
    );
  });

  it('should call apiService when resolve annotation', async () => {
    const result = jest.spyOn(ApiService, 'resolveAnnotation');

    commentsComponent['element'].dispatchEvent(new CustomEvent('resolve-annotation', {
      detail: {
        uuid: 'test',
      },
    }));

    expect(result).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      'test',
    );
  });
});
