import { ComponentNames, Presence3d } from '../../components/types';
import config from '../config';

import { ComponentLimits } from './types';

export default class LimitsService {
  static checkComponentLimit(name: ComponentNames): boolean {
    // if return true, the user can add the current component
    const componentName = Presence3d[name] ?? name;
    const limits = config.get<ComponentLimits>('limits');
    return limits[componentName];
  }
}
