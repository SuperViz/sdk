import debug from 'debug';

export type Message = string | Error | number | Object;

export class Debug {
  private debug: debug.Debugger;

  constructor(scope: string) {
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
