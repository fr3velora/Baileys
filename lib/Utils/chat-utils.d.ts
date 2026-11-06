import { proto } from '../../WAProto/index.js';
export declare const makeLtHashGenerator: ({ indexValueMap, hash }: {
    hash: any;
    indexValueMap: any;
}) => {
    mix: ({ indexMac, valueMac, operation }: {
        indexMac: any;
        operation: any;
        valueMac: any;
    }) => void;
    finish: () => {
        hash: any;
        indexValueMap: any;
    };
};
export declare const newLTHashState: () => {
    version: number;
    hash: any;
    indexValueMap: {};
};
export declare const ensureLTHashStateVersion: (state: any) => any;
export declare const MAX_SYNC_ATTEMPTS = 2;
/**
 * Check if an error is a missing app state sync key.
 * WA Web treats these as "Blocked" (waits for key arrival), not fatal.
 * In Baileys we retry with a snapshot which may use a different key.
 */
export declare const isMissingKeyError: (error: any) => boolean;
/**
 * Determines if an app state sync error is unrecoverable.
 * TypeError indicates a WASM crash; otherwise we give up after MAX_SYNC_ATTEMPTS.
 * Missing keys are NOT checked here — they are handled separately as "Blocked".
 */
export declare const isAppStateSyncIrrecoverable: (error: any, attempts: any) => boolean;
export declare const encodeSyncdPatch: ({ type, index, syncAction, apiVersion, operation }: {
    apiVersion: any;
    index: any;
    operation: any;
    syncAction: any;
    type: any;
}, myAppStateKeyId: any, state: any, getAppStateSyncKey: any) => Promise<{
    patch: {
        patchMac: any;
        snapshotMac: any;
        keyId: {
            id: any;
        };
        mutations: {
            operation: any;
            record: {
                index: {
                    blob: any;
                };
                value: {
                    blob: any;
                };
                keyId: {
                    id: any;
                };
            };
        }[];
    };
    state: any;
}>;
export declare const decodeSyncdMutations: (msgMutations: any, initialState: any, getAppStateSyncKey: any, onMutation: any, validateMacs: any) => Promise<{
    hash: any;
    indexValueMap: any;
}>;
export declare const decodeSyncdPatch: (msg: any, name: any, initialState: any, getAppStateSyncKey: any, onMutation: any, validateMacs: any) => Promise<{
    hash: any;
    indexValueMap: any;
}>;
export declare const extractSyncdPatches: (result: any, options: any) => Promise<{}>;
export declare const downloadExternalBlob: (blob: any, options: any) => Promise<any>;
export declare const downloadExternalPatch: (blob: any, options: any) => Promise<proto.SyncdMutations>;
export declare const decodeSyncdSnapshot: (name: any, snapshot: any, getAppStateSyncKey: any, minimumVersionNumber: any, validateMacs: boolean | undefined, logger: any) => Promise<{
    state: {
        version: number;
        hash: any;
        indexValueMap: {};
    };
    mutationMap: {};
}>;
export declare const decodePatches: (name: any, syncds: any, initial: any, getAppStateSyncKey: any, options: any, minimumVersionNumber: any, logger: any, validateMacs?: boolean) => Promise<{
    state: any;
    mutationMap: {};
}>;
export declare const chatModificationToAppPatch: (mod: any, jid: any) => {
    syncAction: {
        muteAction: {
            muted: boolean;
            muteEndTimestamp: any;
        };
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction: {
            archived: boolean;
            messageRange: any;
        };
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction: {
            read: any;
            messageRange: any;
        };
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction: {
            deleteMedia: any;
            messageTimestamp: any;
        };
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction: {
            messageRange: any;
        };
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction: {
            pinned: boolean;
        };
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction: any;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction: any;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: string[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction: {
            starred: boolean;
        };
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction: {
            messageRange: any;
        };
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting: {
            name: any;
        };
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: string[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction: {
            count: number;
            deleted: any;
            keywords: never[];
            message: any;
            shortcut: any;
        };
        labelEditAction?: undefined;
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction: {
            name: any;
            color: any;
            predefinedId: any;
            deleted: any;
        };
        labelAssociationAction?: undefined;
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
} | {
    syncAction: {
        muteAction?: undefined;
        archiveChatAction?: undefined;
        markChatAsReadAction?: undefined;
        deleteMessageForMeAction?: undefined;
        clearChatAction?: undefined;
        pinAction?: undefined;
        contactAction?: undefined;
        privacySettingDisableLinkPreviewsAction?: undefined;
        starAction?: undefined;
        deleteChatAction?: undefined;
        pushNameSetting?: undefined;
        quickReplyAction?: undefined;
        labelEditAction?: undefined;
        labelAssociationAction: {
            labeled: boolean;
        };
    };
    index: any[];
    type: string;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
};
export declare const processSyncAction: (syncAction: any, ev: any, me: any, initialSyncOpts: any, logger: any) => void;
