import { doRequest } from '../../common/utils';

import { AnnotationParams, CommentParams, FetchAnnotationsParams } from './types';

export default class ApiService {
  static createUrl(baseUrl: string, path: string, query = {}): string {
    const url = new URL(path, baseUrl);

    Object.keys(query).forEach((key) => url.searchParams.append(key, query[key]));
    return url.toString();
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

  static async fetchWaterMark(baseUrl: string, apiKey: string) {
    const path = '/user/watermark';
    const url = this.createUrl(baseUrl, path);
    const { message } = await doRequest(url, 'POST', { apiKey });
    return message;
  }

  static async createAnnotations(baseUrl: string, apiKey: string, annotations: AnnotationParams) {
    const path = '/annotations';
    const url = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { ...annotations }, { apikey: apiKey });
  }

  static async createComment(baseUrl: string, apiKey: string, comment: CommentParams) {
    const path = '/comments';
    const url = this.createUrl(baseUrl, path);
    return doRequest(url, 'POST', { ...comment }, { apikey: apiKey });
  }

  static async fetchAnnotation(baseUrl: string, apiKey: string, query: FetchAnnotationsParams) {
    const path = '/annotations';
    const url = this.createUrl(baseUrl, path, {
      roomId: query.roomId,
      url: query.url,
    });
    return doRequest(url, 'GET', undefined, { apikey: apiKey });
  }

  static async resolveAnnotation(baseUrl: string, apiKey: string, annotationId: string) {
    const path = `/annotations/resolve/${annotationId}`;
    const url = this.createUrl(baseUrl, path);

    return doRequest(url, 'POST', {}, { apikey: apiKey });
  }
}
