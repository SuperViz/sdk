export default class ApiService {
  static baseUrl: string = process.env.SDK_BASE_API_URL;

  static async doRequest(path: string, method: string, body: any) {
    const response = await fetch(`${ApiService.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw response;
    }

    return response.json();
  }

  static validateApiKey(apiKey: string) {
    return this.doRequest('/user/checkapikey', 'POST', { apiKey });
  }

  static fetchConfig(apiKey: string) {
    return this.doRequest('/immersive-config', 'POST', { apiKey });
  }
}
