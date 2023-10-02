export default class ApiService {
    static createUrl(baseUrl: string, path: string): string;
    static validateApiKey(baseUrl: string, apiKey: string): Promise<any>;
    static fetchConfig(baseUrl: string, apiKey: string): Promise<any>;
    static fetchLimits(baseUrl: string, apikey: string): Promise<any>;
    static fetchWaterMark(baseUrl: string, apiKey: string): Promise<any>;
    static sendActivity(userId: string, groupId: string, groupName: string, product: string): Promise<any>;
}
