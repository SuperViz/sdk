export declare type Constructor<T = {}> = new (...args: any[]) => T;
export interface WebComponentsBaseInterface {
    emitEvent(name: string, detail: object, configs?: object): unknown;
}
