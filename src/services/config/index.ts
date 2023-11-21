import _ from 'lodash';

import { Nullable } from '../../common/types/global.types';

import type { Configuration } from './types';

export class ConfigurationService {
  public configuration: Nullable<Configuration>;

  public setConfig(config: Configuration): void {
    this.configuration = config;
  }

  public get<T>(key: keyof Configuration, defaultValue?: T): T {
    if (!this.configuration) return defaultValue;

    return _.get<Configuration, keyof Configuration, T>(
      this.configuration,
      key,
      defaultValue as T,
    ) as T;
  }
}

export default new ConfigurationService();
