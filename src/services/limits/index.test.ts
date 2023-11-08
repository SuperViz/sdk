import { LIMITS_MOCK } from '../../../__mocks__/limits.mock';
import { ComponentNames } from '../../components/types';
import config from '../config';

import LimitsService from './index';

describe('LimitsService', () => {
  describe('checkComponentLimit', () => {
    it('should return true if the component limit is not exceeded', () => {
      const componentName = ComponentNames.VIDEO_CONFERENCE;
      jest.spyOn(config, 'get').mockReturnValue(LIMITS_MOCK);

      const result = LimitsService.checkComponentLimit(componentName);

      expect(result).toBe(true);
    });

    it('should return false if the component limit is exceeded', () => {
      const componentName = ComponentNames.COMMENTS;

      jest.spyOn(config, 'get').mockReturnValue({
        ...LIMITS_MOCK,
        comments: false,
      });

      const result = LimitsService.checkComponentLimit(componentName);

      expect(result).toBe(false);
    });
  });
});
