/**
 * Adds caching capability to a SignalKeyStore
 * @param store the store to add caching to
 * @param logger to log trace events
 * @param _cache cache store to use
 */
export declare function makeCacheableSignalKeyStore(store: any, logger: any, _cache: any): {
    get(type: any, ids: any): Promise<any>;
    set(data: any): Promise<any>;
    clear(): Promise<void>;
};
/**
 * Adds DB-like transaction capability to the SignalKeyStore
 * Uses AsyncLocalStorage for automatic context management
 * @param state the key store to apply this capability to
 * @param logger logger to log events
 * @returns SignalKeyStore with transaction capability
 */
export declare const addTransactionCapability: (state: any, logger: any, { maxCommitRetries, delayBetweenTriesMs }: {
    delayBetweenTriesMs: any;
    maxCommitRetries: any;
}) => {
    get: (type: any, ids: any) => Promise<any>;
    set: (data: any) => Promise<void>;
    isInTransaction: () => boolean;
    transaction: (work: any, key: any) => Promise<any>;
};
/**
 * Returns the authenticated user's JID, or throws a Boom-401 if creds are not yet authenticated.
 * Use this anywhere we'd otherwise reach for `creds.me!.id` to fail fast with a descriptive error.
 */
export declare const assertMeId: (creds: any) => any;
export declare const initAuthCreds: () => {
    noiseKey: {
        private: any;
        public: any;
    };
    pairingEphemeralKeyPair: {
        private: any;
        public: any;
    };
    signedIdentityKey: {
        private: any;
        public: any;
    };
    signedPreKey: {
        keyPair: {
            private: any;
            public: any;
        };
        signature: any;
        keyId: any;
    };
    registrationId: number;
    advSecretKey: any;
    processedHistoryMessages: never[];
    nextPreKeyId: number;
    firstUnuploadedPreKeyId: number;
    accountSyncCounter: number;
    accountSettings: {
        unarchiveChats: boolean;
    };
    registered: boolean;
    pairingCode: undefined;
    lastPropHash: undefined;
    routingInfo: undefined;
    additionalData: undefined;
};
