import { Message, MessageBridgeOptions } from './types';
export declare class MessageBridge {
    private logger;
    private allowedOrigins;
    private contentWindow;
    private domains;
    private observers;
    private sourceBlockList;
    private originBlockList;
    constructor(options: MessageBridgeOptions);
    publish: (type: Message, message?: Object) => void;
    listen: (type: Message, listener: Function) => void;
    destroy(): void;
    private onReceiveMessage;
}
