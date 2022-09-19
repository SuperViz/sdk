import { ObserverHelper } from '@superviz/immersive-core';

import { MeetingConnectionStatus } from '../../common/types/events.types';
import { logger } from '../../common/utils';

import { DefaultConnectionService, WindowConnectionStatus } from './types';

export class ConnectionService implements DefaultConnectionService {
  connectionStatus: MeetingConnectionStatus;
  navigatorOnline: boolean;

  connectionStatusObserver = new ObserverHelper({ logger });

  constructor() {
    this.connectionStatus = MeetingConnectionStatus.NOT_AVAILABLE;
    this.navigatorOnline = false;
  }

  /**
   * @function addListerners
   * @description add browser listeners to connection status
   * @returns {void}
   */
  public addListerners(): void {
    window.addEventListener('online', this.onUpdateBrowserOnlineStatus);
    window.addEventListener('offline', this.onUpdateBrowserOnlineStatus);
  }

  /**
   * @function removeListeners
   * @description remove browser listeners to connection status
   * @returns {void}
   */
  public removeListeners(): void {
    window.removeEventListener('online', this.onUpdateBrowserOnlineStatus);
    window.removeEventListener('offline', this.onUpdateBrowserOnlineStatus);
  }

  /**
   * @function updateMeetingConnectionStatus
   * @description update connection status of audio/video services in ConnectionService
   * @param {MeetingConnectionStatus} newStatus - new connection status
   * @returns {void}
   */
  public updateMeetingConnectionStatus = (newStatus: MeetingConnectionStatus): void => {
    this.connectionStatus = newStatus;
    this.connectionStatusObserver.publish(newStatus);

    logger.log('CONNECTION STATUS CHANGE', newStatus);
  };

  /**
   * @function onUpdateBrowserOnlineStatus
   * @description updates connection status based on browser connection status
   * @param {Event} event - DOM Event
   * @returns {void}
   */
  private onUpdateBrowserOnlineStatus = (event: Event): void => {
    const { type } = event;
    const status: WindowConnectionStatus = type as WindowConnectionStatus;

    if (status === 'online') {
      this.connectionStatusObserver.publish(this.connectionStatus);
    } else {
      this.connectionStatusObserver.publish(MeetingConnectionStatus.DISCONNECTED);
    }

    logger.log('CONNECTION STATUS CHANGE', type);
  };
}
