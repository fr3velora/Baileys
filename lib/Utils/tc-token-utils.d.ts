/** Sentinel key under `tctoken` store holding a JSON array of tracked storage JIDs for cross-session pruning. */
export declare const TC_TOKEN_INDEX_KEY = "__index";
/** Read the persisted tctoken JID index and return its entries (never contains the sentinel key itself). */
export declare function readTcTokenIndex(keys: any): Promise<any[]>;
/** Build a SignalDataSet fragment that writes the merged index (persisted ∪ added) under the sentinel key. */
export declare function buildMergedTcTokenIndexWrite(keys: any, addedJids: any): Promise<{
    __index: {
        token: any;
    };
}>;
export declare function isTcTokenExpired(timestamp: any): boolean;
export declare function shouldSendNewTcToken(senderTimestamp: any): boolean;
/** Resolve JID to LID for tctoken storage (WA Web stores under LID) */
export declare function resolveTcTokenJid(jid: any, getLIDForPN: any): Promise<any>;
/** Resolve target JID for issuing privacy token based on AB prop 14303 */
export declare function resolveIssuanceJid(jid: any, issueToLid: any, getLIDForPN: any, getPNForLID: any): Promise<any>;
export declare function buildTcTokenFromJid({ authState, jid, baseContent, getLIDForPN }: {
    authState: any;
    baseContent?: never[] | undefined;
    getLIDForPN: any;
    jid: any;
}): Promise<any[] | undefined>;
export declare function storeTcTokensFromIqResult({ result, fallbackJid, keys, getLIDForPN, onNewJidStored }: {
    fallbackJid: any;
    getLIDForPN: any;
    keys: any;
    onNewJidStored: any;
    result: any;
}): Promise<void>;
