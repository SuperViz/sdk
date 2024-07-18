import * as Socket from '../../lib/socket';
import { Subject } from 'rxjs';

import { Participant } from '../../common/types/participant.types';
import config from '../config/index';

import { IOCState } from './types';

export class IOC {
  public state: Socket.ConnectionState;
  public client: Socket.Realtime;

  public stateSubject: Subject<IOCState> = new Subject();

  constructor(private participant: Participant) {
    this.createClient();
  }

  /**
   * @function destroy
   * @description Destroys the socket connection
   * @returns {void}
   */
  public destroy(): void {
    this.client.destroy();
  }

  /**
   * @function subscribeToDefaultEvents
   * @description subscribe to the default socket events
   * @returns {void}
   */
  private subscribeToDefaultEvents(): void {
    this.client.connection.on(this.handleConnectionState);
  }

  private handleConnectionState = (state: Socket.ConnectionState): void => {
    const needsToReconnectStates = [
      Socket.ClientState.DISCONNECTED,
      Socket.ClientState.RECONNECT_ERROR,
    ];

    if (
      needsToReconnectStates.includes(state.state) &&
      !['io client disconnect', 'Unauthorized connection'].includes(state.reason)
    ) {
      this.forceReconnect();
    }

    if (state.reason === 'Unauthorized connection') {
      console.error(
        '[Superviz] Unauthorized connection. Please check your API key and if your domain is white listed.',
      );

      this.state = {
        state: Socket.ClientState.DISCONNECTED,
        reason: 'Unauthorized connection',
      };

      this.stateSubject.next(IOCState.AUTH_ERROR);

      return;
    }

    this.state = state;
    this.stateSubject.next(state.state as unknown as IOCState);
  };

  /**
   * @function forceReconnect
   * @description force the socket to reconnect
   * @returns {void}
   */
  private forceReconnect(): void {
    this.client?.destroy();
    this.client = null;

    this.createClient();
  }

  /**
   * @function createClient
   * @description create a new socket client
   * @returns {void}
   */
  public createClient(): void {
    let environment = config.get<string>('environment') as 'dev' | 'prod';
    environment = ['dev', 'prod'].includes(environment) ? environment : 'dev';

    this.client = new Socket.Realtime(config.get<string>('apiKey'), environment, {
      id: this.participant.id,
      name: this.participant.name,
    });

    this.subscribeToDefaultEvents();
  }

  /**
   * @function createRoom
   * @description create and join realtime room
   * @param roomName {string}
   * @returns {Room}
   */
  public createRoom(roomName: string): Socket.Room {
    const roomId = config.get<string>('roomId');
    return this.client.connect(`${roomId}:${roomName}`);
  }
}
