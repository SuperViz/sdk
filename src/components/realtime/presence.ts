import { Logger } from '../../common/utils';
import * as Socket from '../../lib/socket';

export class RealtimePresence {
  private logger: Logger;

  constructor(private room: Socket.Room) {
    this.logger = new Logger('@superviz/sdk/realtime-presence');
  }

  public update(data: any) {
    this.logger.log('Realtime Presence @ update presence', data);
    this.room.presence.update(data);
  }

  public subscribe<T>(event: Socket.PresenceEvents, callback: Socket.PresenceCallback<T>) {
    this.logger.log('Realtime Presence @ subscribe', event);
    this.room.presence.on(event, callback);
  }

  public unsubscribe(event: Socket.PresenceEvents) {
    this.logger.log('Realtime Presence @ unsubscribe', event);
    this.room.presence.off(event);
  }

  public getAll() {
    this.logger.log('Realtime Presence @ get all');
    let presences: Socket.PresenceEvent[];
    this.room.presence.get(
      (data) => {
        presences = data;
      },
      (error) => {
        const message = `${error.name} - ${error.message}`;
        this.logger.log(error);
        console.error(message);
      },
    );
    return presences;
  }
}
