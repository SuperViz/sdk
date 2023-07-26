import { BrowserStats } from './types';
export declare class BrowserService {
    private browser;
    constructor();
    get clientStats(): BrowserStats;
    get isFirefox(): boolean;
    get isSafari(): boolean;
    get isChrome(): boolean;
    get isIE(): boolean;
    get isEdge(): boolean;
    get isMobileDevice(): boolean;
    get isTabletDevice(): boolean;
    get isAndroid(): boolean;
    get isIpad(): boolean;
    get isIphone(): boolean;
    get isAppleMobileDevice(): boolean;
}
