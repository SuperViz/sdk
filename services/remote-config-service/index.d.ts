import { RemoteConfigParams } from '../../common/types/remote-config.types';
import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { RemoteConfig } from './types';
export default class RemoteConfigService {
    static REMOTE_CONFIG_BASE_URL: string;
    static getRemoteConfig(environment?: EnvironmentTypes): Promise<RemoteConfig>;
    static createUrl({ version, environment }: RemoteConfigParams): string;
}
