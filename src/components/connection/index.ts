import { Logger } from '../../common/utils';
import { Connection as ConnectionElement } from '../../web-components';
import { BaseComponent } from '../base';
import { ComponentNames } from '../types';

import { ConnectionLocation, LOCATION } from './types';

export class Connection extends BaseComponent {
  public name: ComponentNames;
  protected logger: Logger;
  private element: ConnectionElement;
  private location: ConnectionLocation;

  constructor(location?: ConnectionLocation) {
    super();
    this.name = ComponentNames.CONNECTION;
    this.location = location ?? LOCATION.TOP_LEFT;
    this.logger = new Logger('@superviz/sdk/connection-component');
  }

  /**
   * @function start
   * @description Initializes the Comments component
   * @returns {void}
   */
  protected start(): void {
    this.subscribeToRealtimeEvents();
    this.positionConnection();

    this.logger.log('Connection component @ start');
  }

  /**
   * @function destroy
   * @description Destroys the Comments component
   * @returns {void}
   */
  protected destroy(): void {}

  /**
   * @function subscribeToRealtimeEvents
   * @description Initializes the Connection component
   * @returns {void}
   */
  private subscribeToRealtimeEvents(): void {}

  private positionConnection(): void {
    this.element = document.createElement('superviz-connection') as ConnectionElement;
    const { location } = this;

    const positionsOptions = Object.values(location);

    const positionById = !positionsOptions.includes(
      location.toLocaleLowerCase() as ConnectionLocation,
    );

    if (positionById) {
      const container = window.document.body.querySelector(`#${location}`);

      if (container) {
        container.appendChild(this.element);
        this.element.position = 'position: relative;';
        return;
      }

      this.location = LOCATION.TOP_LEFT;
    }

    document.body.appendChild(this.element);
    const [vertical, horizontal] = location.split('-');
    this.element.position = `${vertical}: 20px; ${horizontal}: 20px;`;
  }
}
