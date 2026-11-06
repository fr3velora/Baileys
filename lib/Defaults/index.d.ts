import { proto } from '../../WAProto/index.js';
import { makeLibSignalRepository } from '../Signal/libsignal.js';
export declare const UNAUTHORIZED_CODES: number[];
export declare const DEFAULT_ORIGIN = "https://web.whatsapp.com";
export declare const CALL_VIDEO_PREFIX = "https://call.whatsapp.com/video/";
export declare const CALL_AUDIO_PREFIX = "https://call.whatsapp.com/voice/";
export declare const DEF_CALLBACK_PREFIX = "CB:";
export declare const DEF_TAG_PREFIX = "TAG:";
export declare const PHONE_CONNECTION_CB = "CB:Pong";
export declare const WA_ADV_ACCOUNT_SIG_PREFIX: any;
export declare const WA_ADV_DEVICE_SIG_PREFIX: any;
export declare const WA_ADV_HOSTED_ACCOUNT_SIG_PREFIX: any;
export declare const WA_ADV_HOSTED_DEVICE_SIG_PREFIX: any;
export declare const WA_DEFAULT_EPHEMERAL: number;
/** Status messages older than 24 hours are considered expired */
export declare const STATUS_EXPIRY_SECONDS: number;
/** WA Web enforces a 14-day maximum age for placeholder resend requests */
export declare const PLACEHOLDER_MAX_AGE_SECONDS: number;
export declare const NOISE_MODE = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0";
export declare const DICT_VERSION = 3;
export declare const KEY_BUNDLE_TYPE: any;
export declare const NOISE_WA_HEADER: any;
/** from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
export declare const URL_REGEX: RegExp;
export declare const WA_CERT_DETAILS: {
    SERIAL: number;
    ISSUER: string;
    PUBLIC_KEY: any;
};
export declare const PROCESSABLE_HISTORY_TYPES: proto.HistorySync.HistorySyncType[];
export declare const DEFAULT_CACHE_TTLS: {
    SIGNAL_STORE: number;
    MSG_RETRY: number;
    CALL_OFFER: number;
    USER_DEVICES: number;
};
export declare const DEFAULT_CONNECTION_CONFIG: {
    version: number[];
    browser: any[];
    waWebSocketUrl: string;
    connectTimeoutMs: number;
    keepAliveIntervalMs: number;
    logger: any;
    emitOwnEvents: boolean;
    defaultQueryTimeoutMs: number;
    customUploadHosts: never[];
    retryRequestDelayMs: number;
    maxMsgRetryCount: number;
    fireInitQueries: boolean;
    auth: undefined;
    markOnlineOnConnect: boolean;
    aiLabel: boolean;
    syncFullHistory: boolean;
    patchMessageBeforeSending: (msg: any) => any;
    shouldSyncHistoryMessage: ({ syncType }: {
        syncType: any;
    }) => boolean;
    shouldIgnoreJid: () => boolean;
    linkPreviewImageThumbnailWidth: number;
    transactionOpts: {
        maxCommitRetries: number;
        delayBetweenTriesMs: number;
    };
    generateHighQualityLinkPreview: boolean;
    enableAutoSessionRecreation: boolean;
    enableRecentMessageCache: boolean;
    options: {};
    appStateMacVerification: {
        patch: boolean;
        snapshot: boolean;
    };
    countryCode: string;
    getMessage: () => Promise<undefined>;
    cachedGroupMetadata: () => Promise<undefined>;
    makeSignalRepository: typeof makeLibSignalRepository;
};
export declare const MEDIA_PATH_MAP: {
    image: string;
    video: string;
    document: string;
    audio: string;
    sticker: string;
    'thumbnail-link': string;
    'product-catalog-image': string;
    'md-app-state': string;
    'md-msg-hist': string;
    'biz-cover-photo': string;
};
export declare const MEDIA_HKDF_KEY_MAPPING: {
    audio: string;
    document: string;
    gif: string;
    image: string;
    ppic: string;
    product: string;
    ptt: string;
    sticker: string;
    video: string;
    'thumbnail-document': string;
    'thumbnail-image': string;
    'thumbnail-video': string;
    'thumbnail-link': string;
    'md-msg-hist': string;
    'md-app-state': string;
    'product-catalog-image': string;
    'payment-bg-image': string;
    ptv: string;
    'biz-cover-photo': string;
};
export declare const MEDIA_KEYS: string[];
/** 120s timeout for history sync stall detection, same as WA Web's handleChunkProgress / restartPausedTimer (g = 120) */
export declare const HISTORY_SYNC_PAUSED_TIMEOUT_MS = 120000;
export declare const MIN_PREKEY_COUNT = 5;
export declare const INITIAL_PREKEY_COUNT = 812;
export declare const UPLOAD_TIMEOUT = 30000;
export declare const TimeMs: {
    Minute: number;
    Hour: number;
    Day: number;
    Week: number;
};
