import { Logger } from '../../common/utils';
import * as Socket from '../../lib/socket';
import { PresenceEventsArg } from '../../lib/socket/common/types/event.types';

export class RealtimePresence {
  private logger: Logger;

  constructor(private room: Socket.Room) {
    this.logger = new Logger('@superviz/sdk/realtime-presence');
  }

  public update<T = any>(data: T) {
    this.logger.log('Realtime Presence @ update presence', data);
    this.room.presence.update(data);
  }

  public subscribe<T = unknown>(event: PresenceEventsArg, callback: Socket.PresenceCallback<T>) {
    this.logger.log('Realtime Presence @ subscribe', event);
    this.room.presence.on(event, callback);
  }

  public unsubscribe(event: PresenceEventsArg) {
    this.logger.log('Realtime Presence @ unsubscribe', event);
    this.room.presence.off(event);
  }

  public async getAll() {
    this.logger.log('Realtime Presence @ get all');
    return new Promise((resolve, reject) => {
      this.room.presence.get(
        (data) => resolve(data),
        (error) => {
          const message = `[SuperViz] ${error.name} - ${error.message}`;
          this.logger.log(error);
          console.error(message);
          reject(error);
        },
      );
    });
  }
}
