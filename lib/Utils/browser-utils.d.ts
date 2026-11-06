export declare const Browsers: {
    ubuntu: (browser: any) => any[];
    macOS: (browser: any) => any[];
    baileys: (browser: any) => any[];
    fr3velora: (browser: any) => any[];
    windows: (browser: any) => any[];
    iOS: (browser: any) => any[];
    android: (browser: any) => any[];
    safari: (browser: any) => any[];
    custom: (platform: any, browser: any, ver: any) => any[];
    /** The appropriate browser based on your OS & release */
    appropriate: (browser: any) => any[];
};
export declare const getPlatformId: (browser: any) => string;
