import ApiService from '../api';

export default async (baseUrl: string, key: string): Promise<boolean> => {
  try {
    const response = await ApiService.validateApiKey(baseUrl, key);
    return response === true;
  } catch (error) {
    if (error.status === 404) return false;

    throw new Error('Unable to validate API key');
  }
};
