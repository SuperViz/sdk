import { ComponentNames, PresenceMap } from '../../components/types';
import config from '../config';

import { ComponentLimits } from './types';

export default class LimitsService {
  static checkComponentLimit(name: ComponentNames): boolean {
    const componentName = PresenceMap[name] ?? name;
    const limits = config.get<ComponentLimits>('limits');
    return limits?.[componentName] ?? false;
  }
}
