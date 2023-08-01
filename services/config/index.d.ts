import type { Configuration } from './types';
export declare class ConfigurationService {
    private configuration;
    setConfig(config: Configuration): void;
    get<T>(key: keyof Configuration, defaultValue?: T): T;
}
declare const configService: ConfigurationService;
export default configService;
