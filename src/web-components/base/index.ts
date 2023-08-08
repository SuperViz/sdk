import { LitElement } from 'lit';

import { variableStyle, typography, svHr } from './styles';
import { Constructor } from './types';

export const WebComponentsBase = <T extends Constructor<LitElement>>(superClass: T) => {
  class WebComponentsBaseClass extends superClass {
    static styles = [
      variableStyle,
      typography,
      svHr,
      (superClass as unknown as typeof LitElement).styles ?? [],
    ];
  }
  return WebComponentsBaseClass as T;
};
