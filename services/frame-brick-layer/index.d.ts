export declare class FrameBricklayer {
    wrapperId: string;
    element: HTMLIFrameElement;
    build(wrapperId: string, url: string, frameId: string, queryParams?: Object, attributes?: Object): void;
    destroy(): void;
}
