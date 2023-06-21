export declare type Message = string | Error | number | Object;
export declare class Debug {
    private debug;
    constructor(scope: string);
    log(formatter: Message, ...args: Array<Message>): void;
    enable(prefix?: string): void;
    disable(): void;
}
declare const _default: Debug;
export default _default;
