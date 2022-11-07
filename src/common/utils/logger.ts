import { Logger } from '@superviz/immersive-core';
import debug, { Debugger } from 'debug';

export type Message = string | Error | number | Object;

export class Debug extends Logger {
  private debug: Debugger;

  constructor(scope: string) {
    super(scope);
    this.disable();
    this.debug = debug(scope);
  }

  log(formatter: Message, ...args: Array<Message>) {
    this.debug(formatter, ...args);
  }

  enable(prefix: string = '*') {
    debug.enable(prefix);
  }

  disable() {
    debug.disable();
  }
}

export default new Debug('@superviz/sdk');
