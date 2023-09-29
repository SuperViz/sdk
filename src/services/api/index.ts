import { doRequest } from '../../common/utils';
import config from '../config';

export default class ApiService {
  static createUrl(baseUrl: string, path: string): string {
    return `${baseUrl}${path}`;
  }

  static validateApiKey(baseUrl: string, apiKey: string) {
    const path: string = '/user/checkapikey';
    const url: string = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { apiKey });
  }

  static fetchConfig(baseUrl: string, apiKey: string) {
    const path: string = '/immersive-config';
    const url: string = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { apiKey });
  }

  static async fetchLimits(baseUrl: string, apikey: string) {
    const path: string = '/user/check_limits';
    const url: string = this.createUrl(baseUrl, path);
    const result = await doRequest(url, 'GET', '', { apikey });
    return result.usage;
  }

  static async fetchWaterMark(baseUrl: string, apiKey: string) {
    const path = '/user/watermark';
    const url = this.createUrl(baseUrl, path);
    const { message } = await doRequest(url, 'POST', { apiKey });
    return message;
  }

  static async sendActivity(userId: string, groupId: string, groupName: string, product: string) {
    const path = '/activity';
    const baseUrl = config.get<string>('apiUrl');
    const meetingId = config.get<string>('roomId');
    const apikey = config.get<string>('apiKey');
    const url = this.createUrl(baseUrl, path);
    const body = {
      groupId,
      groupName,
      meetingId,
      product,
      userId,
    };
    return doRequest(url, 'POST', body, { apikey });
  }
}
