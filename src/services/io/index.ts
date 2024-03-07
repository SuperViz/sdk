import * as Socket from '@superviz/socket-client';
import { Subject } from 'rxjs';

import { Participant } from '../../common/types/participant.types';
import config from '../config/index';

export class IOC {
  public state: Socket.ConnectionState;
  public client: Socket.Realtime;

  private stateSubject: Subject<Socket.ConnectionState> = new Subject();

  constructor(participant: Participant) {
    this.client = new Socket.Realtime(config.get<string>('apiKey'), config.get('environment'), {
      id: participant.id,
      name: participant.name,
    });

    this.subscribeToDefaultEvents();
  }

  /**
   * @function destroy
   * @description Destroys the socket connection
   * @returns {void}
   */
  public destroy(): void {
    this.client.destroy();
    this.client.connection.off();
    this.client.connection.on((state) => {});
  }

  /**
   * @function onStateChange
   * @description Subscribe to the socket connection state changes
   * @param next {Function}
   * @returns {void}
   */
  public onStateChange(next: (state: Socket.ConnectionState) => void): void {
    this.stateSubject.subscribe(next);
  }

  /**
   * @function subscribeToDefaultEvents
   * @description subscribe to the default socket events
   * @returns {void}
   */
  private subscribeToDefaultEvents(): void {
    this.client.connection.on((state) => {
      this.state = state;
      this.stateSubject.next(state);
    });
  }

  /**
   * @function createRoom
   * @description create and join realtime room
   * @param roomName {string}
   * @returns {Room}
   */
  public createRoom(roomName: string): Socket.Room {
    return this.client.connect(roomName);
  }
}
