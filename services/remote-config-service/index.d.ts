import { RemoteConfigParams } from '../../common/types/remote-config.types';
import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { RemoteConfig } from './types';
export default class RemoteConfigService {
    static REMOTE_CONFIG_BASE_URL: string;
    /**
     * @function getRemoteConfig
     * @description Retrieves the remote configuration for the specified environment.
     * @param environment
          The environment to retrieve the remote configuration for. Defaults to EnvironmentTypes.PROD.
     * @returns A Promise that resolves with the remote configuration object.
     */
    static getRemoteConfig(environment?: EnvironmentTypes): Promise<RemoteConfig>;
    /**
     * @function createUrl
     * @description
          Creates a URL for fetching remote configuration
          data based on the provided version and environment.
     * @param {RemoteConfigParams} params - The parameters for creating the URL.
     * @returns {string} The URL for fetching remote configuration data.
     */
    static createUrl({ version, environment }: RemoteConfigParams): string;
}
