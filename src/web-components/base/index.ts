import { LitElement } from 'lit';

import { variableStyle, typography, svHr } from './styles';
import { Constructor, WebComponentsBaseInterface } from './types';

export const WebComponentsBase = <T extends Constructor<LitElement>>(superClass: T) => {
  class WebComponentsBaseClass extends superClass {
    static styles = [
      variableStyle,
      typography,
      svHr,
      (superClass as unknown as typeof LitElement).styles ?? [],
    ];

    /**
     * @function emitEvent
     * @description Emits a custom event with the given name, detail and optional configuration
     * @param {string} name - The name of the custom even
     * @param {object} detail - The detail of the custom event
     * @param {object} configs - The configuration of the custom event
     * @returns {void}
    */
    protected emitEvent(
      name: string,
      detail: object,
      configs: object = { composed: true, bubbles: true },
    ): void {
      const event = new CustomEvent(name, { detail, ...configs });
      this.dispatchEvent(event);
    }
  }

  return WebComponentsBaseClass as unknown as Constructor<WebComponentsBaseInterface> & T;
};
