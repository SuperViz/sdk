import { version } from '../../../.version';
import { RemoteConfigParams } from '../../common/types/remote-config.types';
import { EnvironmentTypes } from '../../common/types/sdk-options.types';
import { doRequest } from '../../common/utils';

export default class RemoteConfigService {
  static REMOTE_CONFIG_BASE_URL: string = 'https://remote-config.superviz.com/sdk';

  static async getRemoteConfig(
    environment: EnvironmentTypes = EnvironmentTypes.PROD,
  ): Promise<any> {
    if (environment === EnvironmentTypes.LOCAL) {
      const { remoteConfig } = await import('../../../.remote-config');
      return remoteConfig;
    }
    const remoteConfigParams: RemoteConfigParams = {
      version,
      environment,
    };
    const url = this.createUrl(remoteConfigParams);
    return doRequest(url, 'GET', null);
  }

  static createUrl({ version, environment }: RemoteConfigParams) {
    return `${this.REMOTE_CONFIG_BASE_URL}/${version}?env=${environment}`;
  }
}
