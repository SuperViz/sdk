import { Logger } from '@superviz/immersive-core';
export declare type Message = string | Error | number | Object;
export declare class Debug extends Logger {
    private debug;
    constructor(scope: string);
    log(formatter: Message, ...args: Array<Message>): void;
    enable(prefix?: string): void;
    disable(): void;
}
declare const _default: Debug;
export default _default;
