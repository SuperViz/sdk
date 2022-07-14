import ApiService from './api/ApiService';

export default async (key: string): Promise<boolean> => {
  try {
    const response = await ApiService.validateApiKey(key);
    return response === true;
  } catch (error) {
    if (error.status === 404) return false;

    throw new Error('Unable to validate API key');
  }
};
