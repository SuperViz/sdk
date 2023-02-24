import { doRequest } from '../../common/utils';

export default class ApiService {
  static createUrl(baseUrl: string, path: string) {
    return `${baseUrl}${path}`;
  }

  static validateApiKey(baseUrl: string, apiKey: string) {
    const path = '/user/checkapikey';
    const url = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { apiKey });
  }

  static fetchConfig(baseUrl: string, apiKey: string) {
    const path = '/immersive-config';
    const url = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { apiKey });
  }
}
