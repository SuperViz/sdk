import { LIMITS_MOCK } from '../../../__mocks__/limits.mock';
import { WaterMark } from '../video-conference-manager/types';

import ApiService from './index';

const VALID_API_KEY = 'unit-test-valid-api-key';
const INVALID_API_KEY = 'unit-test-invalid-api-key';
const MOCK_ABLY_KEY = 'unit-test-ably-key';

const CHECK_LIMITS_MOCK = {
  usage: LIMITS_MOCK,
};

jest.mock('../../common/utils', () => {
  return {
    doRequest: jest.fn((url: string, method: string, body: any) => {
      if (url.includes('/user/checkapikey')) {
        const { apiKey } = body;

        if (String(apiKey) === VALID_API_KEY) {
          return Promise.resolve(true);
        }

        return Promise.resolve({ status: 404 });
      }

      if (url.includes('/immersive-config')) {
        return Promise.resolve(
          JSON.stringify({
            ablyKey: MOCK_ABLY_KEY,
          }),
        );
      }

      if (url.includes('/user/watermark')) {
        return Promise.resolve({
          message: WaterMark.ALL,
        });
      }

      if (url.includes('/activity')) {
        return Promise.resolve({
          message: 'any message',
        });
      }

      if (url.includes('/annotations') && method === 'POST') {
        return Promise.resolve({});
      }

      if (url.includes('/annotations') && method === 'GET') {
        return Promise.resolve([]);
      }

      if (url.includes('/comments') && method === 'POST') {
        return Promise.resolve({});
      }

      if (url.includes('/comments/any_comment_id') && method === 'PUT') {
        return Promise.resolve({});
      }

      if (url.includes('/annotations/resolve/any_annotation_id') && method === 'POST') {
        return Promise.resolve({});
      }

      if (url.includes('/comments/any_comment_id') && method === 'DELETE') {
        return Promise.resolve({});
      }

      if (url.includes('/user/check_limits')) {
        return Promise.resolve(CHECK_LIMITS_MOCK);
      }
    }),
  };
});

describe('ApiService', () => {
  describe('validateApiKey', () => {
    test('should return true if the api key is valid', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.validateApiKey(baseUrl, VALID_API_KEY);

      expect(response).toEqual(true);
    });

    test('should return 404 if the api key is invalid', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.validateApiKey(baseUrl, INVALID_API_KEY);

      expect(response.status).toEqual(404);
    });
  });

  describe('fetchConfig', () => {
    test('should return the config', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.fetchConfig(baseUrl, VALID_API_KEY);

      expect(response).toBe(JSON.stringify({ ablyKey: MOCK_ABLY_KEY }));
    });
  });

  describe('fetchWatermark', () => {
    test('should return the watermark', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.fetchWaterMark(baseUrl, VALID_API_KEY);

      expect(response).toEqual(WaterMark.ALL);
    });
  });

  describe('Annotations and comments', () => {
    test('should create a comment', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.createComment(baseUrl, VALID_API_KEY, {
        annotationId: 'any_annotation_id',
        userId: 'any_user_id',
        text: 'any_text',
      });

      expect(response).toEqual({});
    });

    test('should create an annotation', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.createAnnotations(baseUrl, VALID_API_KEY, {
        roomId: 'any_room_id',
        url: 'any_url',
        position: 'any_position',
        userId: 'any_user_id',
      });

      expect(response).toEqual({});
    });

    test('should update a comment', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.updateComment(
        baseUrl,
        VALID_API_KEY,
        'any_comment_id',
        'any_text',
      );

      expect(response).toEqual({});
    });

    test('should fetch annotations', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.fetchAnnotation(baseUrl, VALID_API_KEY, {
        roomId: 'any_room_id',
        url: 'any_url',
      });

      expect(response).toEqual([]);
    });

    test('should resolve an annotation', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.resolveAnnotation(
        baseUrl,
        VALID_API_KEY,
        'any_annotation_id',
      );

      expect(response).toEqual({});
    });

    test('should delete a comment', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.deleteComment(baseUrl, VALID_API_KEY, 'any_comment_id');

      expect(response).toEqual({});
    });
  });

  describe('sendActivity', () => {
    test('should return any message', async () => {
      const userId = 'user-id';
      const groupId = 'group-id';
      const groupName = 'group-name';
      const product = 'video-component';
      const response = await ApiService.sendActivity(userId, groupId, groupName, product);

      expect(response).toEqual({ message: 'any message' });
    });
  });

  describe('fetchLimits', () => {
    test('should return the usage object with limits', async () => {
      const baseUrl = 'https://dev.nodeapi.superviz.com';
      const response = await ApiService.fetchLimits(baseUrl, VALID_API_KEY);

      expect(response).toEqual(CHECK_LIMITS_MOCK.usage);
    });
  });
});
