export declare const createSignalIdentity: (wid: any, accountSignatureKey: any) => {
    identifier: {
        name: any;
        deviceId: number;
    };
    identifierKey: any;
};
export declare const getPreKeys: ({ get }: {
    get: any;
}, min: any, limit: any) => Promise<any>;
export declare const generateOrGetPreKeys: (creds: any, range: any) => {
    newPreKeys: {};
    lastPreKeyId: number;
    preKeysRange: any[];
};
export declare const xmppSignedPreKey: (key: any) => {
    tag: string;
    attrs: {};
    content: {
        tag: string;
        attrs: {};
        content: any;
    }[];
};
export declare const xmppPreKey: (pair: any, id: any) => {
    tag: string;
    attrs: {};
    content: {
        tag: string;
        attrs: {};
        content: any;
    }[];
};
export declare const extractE2ESessionFromRetryReceipt: (receipt: any) => {
    registrationId: number | undefined;
    identityKey: any;
    signedPreKey: {
        keyId: number | undefined;
        publicKey: any;
        signature: any;
    };
    preKey: {
        keyId: number | undefined;
        publicKey: any;
    } | undefined;
} | null;
export declare const parseAndInjectE2ESessions: (node: any, repository: any) => Promise<void>;
export declare const extractDeviceJids: (result: any, myJid: any, myLid: any, excludeZeroDevices: any) => {
    user: any;
    device: any;
    domainType: any;
    server: any;
}[];
/**
 * get the next N keys for upload or processing
 * @param count number of pre-keys to get or generate
 */
export declare const getNextPreKeys: ({ creds, keys }: {
    creds: any;
    keys: any;
}, count: any) => Promise<{
    update: {
        nextPreKeyId: number;
        firstUnuploadedPreKeyId: number;
    };
    preKeys: any;
}>;
export declare const getNextPreKeysNode: (state: any, count: any) => Promise<{
    update: {
        nextPreKeyId: number;
        firstUnuploadedPreKeyId: number;
    };
    node: {
        tag: string;
        attrs: {
            xmlns: string;
            type: string;
            to: string;
        };
        content: {
            tag: string;
            attrs: {};
            content: any;
        }[];
    };
}>;
