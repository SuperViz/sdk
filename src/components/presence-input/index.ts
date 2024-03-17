import { Logger } from '../../common/utils';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

export class PresenceInput extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;

  constructor() {
    super();
    this.name = ComponentNames.PRESENCE;
    this.logger = new Logger('@superviz/sdk/presence-input-component');

    console.log('created PresenceInput');
  }

  // ------- setup -------
  /**
   * @function start
   * @description starts the component
   * @returns {void}
   * */
  protected start(): void {
    console.log('started component!');
  }

  /**
   * @function destroy
   * @description destroys the component
   * @returns {void}
   * */
  protected destroy(): void {
    console.log('destroyed component!');
  }
}
