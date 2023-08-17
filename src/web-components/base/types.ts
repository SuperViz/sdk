export type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WebComponentsBaseInterface {
  protected emitEvent(name: string, detail: object, configs?: object): unknown;
}
