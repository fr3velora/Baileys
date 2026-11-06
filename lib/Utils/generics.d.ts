export declare const BufferJSON: {
    replacer: (k: any, value: any) => any;
    reviver: (_: any, value: any) => any;
};
export declare const getKeyAuthor: (key: any, meId?: string) => any;
export declare const isStringNullOrEmpty: (value: any) => boolean;
export declare const writeRandomPadMax16: (msg: any) => any;
export declare const unpadRandomMax16: (e: any) => Uint8Array<any>;
export declare const generateParticipantHashV2: (participants: any) => string;
export declare const encodeWAMessage: (message: any) => any;
export declare const generateRegistrationId: () => number;
export declare const encodeBigEndian: (e: any, t?: number) => Uint8Array<ArrayBuffer>;
export declare const toNumber: (t: any) => any;
/** unix timestamp of a date in seconds */
export declare const unixTimestampSeconds: (date?: Date) => number;
export declare const debouncedTimeout: (intervalMs: number | undefined, task: any) => {
    start: (newIntervalMs: any, newTask: any) => void;
    cancel: () => void;
    setTask: (newTask: any) => any;
    setInterval: (newInterval: any) => any;
};
export declare const delay: (ms: any) => Promise<any>;
export declare const delayCancellable: (ms: any) => {
    delay: Promise<any>;
    cancel: () => void;
};
export declare function promiseTimeout(ms: any, promise: any): Promise<any>;
export declare const generateMessageIDV2: (userId: any) => string;
export declare const generateMessageID: () => string;
export declare function bindWaitForEvent(ev: any, event: any): (check: any, timeoutMs: any) => Promise<void>;
export declare const generateIOSMessageID: () => string;
export declare const generateAndroMessageID: () => any;
export declare const bindWaitForConnectionUpdate: (ev: any) => (check: any, timeoutMs: any) => Promise<void>;
/**
 * utility that fetches latest baileys version from the master branch.
 * Use to ensure your WA connection is always on the latest version
 */
export declare const fetchLatestBaileysVersion: (options?: any) => Promise<{
    version: number[];
    isLatest: boolean;
    error?: undefined;
} | {
    version: number[];
    isLatest: boolean;
    error: unknown;
}>;
/**
 * A utility that fetches the latest web version of whatsapp.
 * Use to ensure your WA connection is always on the latest version
 */
export declare const fetchLatestWaWebVersion: (options?: any) => Promise<{
    error?: undefined;
    version: number[];
    isLatest: boolean;
} | {
    version: number[];
    isLatest: boolean;
    error: unknown;
}>;
/** unique message tag prefix for MD clients */
export declare const generateMdTagPrefix: () => string;
/**
 * Given a type of receipt, returns what the new status of the message should be
 * @param type type from receipt
 */
export declare const getStatusFromReceiptType: (type: any) => any;
/**
 * Stream errors generally provide a reason, map that to a baileys DisconnectReason
 * @param reason the string reason given, eg. "conflict"
 */
export declare const getErrorCodeFromStreamError: (node: any) => {
    reason: any;
    statusCode: number;
};
export declare const getCallStatusFromNode: ({ tag, attrs }: {
    attrs: any;
    tag: any;
}) => string;
export declare const getCodeFromWSError: (error: any) => number;
/**
 * Is the given platform WA business
 * @param platform AuthenticationCreds.platform
 */
export declare const isWABusinessPlatform: (platform: any) => boolean;
export declare function trimUndefined(obj: any): any;
export declare function bytesToCrockford(buffer: any): string;
export declare function encodeNewsletterMessage(message: any): any;
