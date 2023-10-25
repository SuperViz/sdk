export type Message = string | Error | number | Object;
export declare class Logger {
    private debug;
    constructor(scope: string);
    log(formatter: Message, ...args: Array<Message>): void;
}
