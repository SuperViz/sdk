import { WaterMark } from '../video-conference-manager/types';

import ApiService from './index';

const VALID_API_KEY = 'unit-test-valid-api-key';
const INVALID_API_KEY = 'unit-test-invalid-api-key';
const MOCK_ABLY_KEY = 'unit-test-ably-key';

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
});
