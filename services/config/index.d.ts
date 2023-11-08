import { Nullable } from '../../common/types/global.types';
import type { Configuration } from './types';
export declare class ConfigurationService {
    configuration: Nullable<Configuration>;
    setConfig(config: Configuration): void;
    get<T>(key: keyof Configuration, defaultValue?: T): T;
}
declare const _default: ConfigurationService;
export default _default;
