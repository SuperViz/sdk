import { type Socket, Manager } from 'socket.io-client';

import { Presence } from '../common/types/presence.types';
import { ClientConnection } from '../connection';
import { ClientState } from '../connection/types';
import { Room } from '../room';

export class Realtime {
  private socket: Socket;
  private manager: Manager;
  public connection: ClientConnection;

  constructor(
    private apiKey: string,
    private environment: 'dev' | 'prod',
    private presence: Presence,
  ) {
    this.manager = new Manager('https://io.superviz.com', {
      addTrailingSlash: false,
      secure: true,
      withCredentials: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      extraHeaders: {
        'sv-api-key': this.apiKey,
      },
    });

    // use the default namespace to handle the connections
    const { origin } = window.location;
    this.socket = this.manager.socket(`/${environment}`, {
      auth: {
        apiKey: this.apiKey,
        origin,
        envirioment: this.environment,
      },
    });

    this.connection = new ClientConnection(this.socket);
  }

  public get state(): ClientState {
    return this.connection.state;
  }

  /**
   * @function connect
   * @param room - The room name
   * @param maxConnections - The maximum number of connections allowed in the room
   * @returns {Room} - The room instance
   */
  public connect(room: string, maxConnections?: number | 'unlimited'): Room {
    return Room.register(this.socket, this.presence, room, this.apiKey, maxConnections);
  }

  public destroy() {
    this.socket.disconnect();
    this.connection.off();
  }
}
