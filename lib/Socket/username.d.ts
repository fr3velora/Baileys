/**
 * w:mex query IDs for username operations.
 *
 * These numeric IDs are assigned by WhatsApp's Pando/MEX infrastructure.
 * They can be obtained by capturing a real WA session that performs these
 * operations and inspecting the query_id field in the <query> IQ node.
 *
 * Source: Java decompilation of WhatsApp 2.26.17.2 (C1568872p.java)
 * Operations confirmed: UsernameCheck, UsernameSet, UsernameGet, UsernamePinSet
 * Data path confirmed: xwa2_username_check (C164057Wg.java:81)
 */
export declare const USERNAME_QUERY_IDS: {
    CHECK: string;
    CHECK_MULTI: string;
    SET: string;
    GET: string;
    GET_RECOMMENDATIONS: string;
    PIN_SET: string;
};
/**
 * Source enum values from EnumC141106Vn (UsernameCheck result)
 * and EnumC141056Vi (rejection reasons) confirmed via C164057Wg.java
 */
export declare const USERNAME_CHECK_RESULT: {
    SUCCESS: string;
    INVALID: string;
};
export declare const USERNAME_SOURCE: {
    FB: string;
    IG: string;
    USER_INPUT: string;
    SUGGESTION: string;
};
export declare const makeUsernameSocket: (config: any) => {
    type: string;
    ws: import("./Client/websocket.js").WebSocketClient;
    ev: {
        process(handler: any): () => void;
        emit(event: any, evData: any): any;
        isBuffering(): boolean;
        buffer: () => void;
        flush: () => boolean;
        createBufferedFunction(work: any): (...args: any[]) => Promise<any>;
        on: (...args: any[]) => any;
        off: (...args: any[]) => any;
        removeAllListeners: (...args: any[]) => any;
        destroy(): void;
    };
    authState: {
        creds: any;
        keys: {
            get: (type: any, ids: any) => Promise<any>;
            set: (data: any) => Promise<void>;
            isInTransaction: () => boolean;
            transaction: (work: any, key: any) => Promise<any>;
        };
    };
    signalRepository: any;
    user: any;
    generateMessageTag: () => string;
    query: (node: any, timeoutMs: any) => Promise<any>;
    waitForMessage: (msgId: any, timeoutMs?: any) => Promise<any>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: any) => Promise<void>;
    sendNode: (frame: any) => Promise<void>;
    logout: (msg: any) => Promise<void>;
    end: (error: any) => Promise<void>;
    registerSocketEndHandler: (handler: any) => void;
    onUnexpectedError: (err: any, msg: any) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    digestKeyBundle: () => Promise<void>;
    rotateSignedPreKey: () => Promise<void>;
    requestPairingCode: (phoneNumber: any, customPairingCode: any) => Promise<any>;
    updateServerTimeOffset: ({ attrs }: {
        attrs: any;
    }) => void;
    sendUnifiedSession: () => Promise<void>;
    wamBuffer: import("../index.js").BinaryInfo;
    waitForConnectionUpdate: (check: any, timeoutMs: any) => Promise<void>;
    sendWAMBuffer: (wamBuffer: any) => Promise<any>;
    executeUSyncQuery: (usyncQuery: any) => Promise<any>;
    onWhatsApp: (...phoneNumber: any[]) => Promise<any>;
    fetchAccountReachoutTimelock: () => Promise<{
        isActive: boolean;
        timeEnforcementEnds: Date | undefined;
        enforcementType: any;
    }>;
    fetchNewChatMessageCap: () => Promise<any>;
    toPn: (jid: any) => Promise<any>;
    toLid: (jid: any) => Promise<any>;
    pnFromLIDUSync: (jids: any) => Promise<any>;
    serverProps: {
        privacyTokenOn1to1: boolean;
        profilePicPrivacyToken: boolean;
        lidTrustedTokenIssueToLid: boolean;
    };
    createCallLink: (type: any, event: any, timeoutMs: any) => Promise<any>;
    getBotListV2: () => Promise<{
        jid: any;
        personaId: any;
    }[]>;
    messageMutex: {
        mutex(code: any): any;
    };
    receiptMutex: {
        mutex(code: any): any;
    };
    appStatePatchMutex: {
        mutex(code: any): any;
    };
    notificationMutex: {
        mutex(code: any): any;
    };
    fetchPrivacySettings: (force?: boolean) => Promise<any>;
    upsertMessage: (...args: any[]) => Promise<any>;
    appPatch: (patchCreate: any) => Promise<void>;
    sendPresenceUpdate: (type: any, toJid: any) => Promise<void>;
    presenceSubscribe: (toJid: any) => Promise<void>;
    profilePictureUrl: (jid: any, type: string | undefined, timeoutMs: any) => Promise<any>;
    fetchBlocklist: () => Promise<any>;
    fetchStatus: (...jids: any[]) => Promise<any>;
    fetchDisappearingDuration: (...jids: any[]) => Promise<any>;
    updateProfilePicture: (jid: any, content: any, dimensions: any) => Promise<void>;
    removeProfilePicture: (jid: any) => Promise<void>;
    updateProfileStatus: (status: any) => Promise<void>;
    updateProfileName: (name: any) => Promise<void>;
    updateBlockStatus: (jid: any, action: any) => Promise<void>;
    updateDisableLinkPreviewsPrivacy: (isPreviewsDisabled: any) => Promise<void>;
    updateCallPrivacy: (value: any) => Promise<void>;
    updateMessagesPrivacy: (value: any) => Promise<void>;
    updateLastSeenPrivacy: (value: any) => Promise<void>;
    updateOnlinePrivacy: (value: any) => Promise<void>;
    updateProfilePicturePrivacy: (value: any) => Promise<void>;
    updateStatusPrivacy: (value: any) => Promise<void>;
    updateReadReceiptsPrivacy: (value: any) => Promise<void>;
    updateGroupsAddPrivacy: (value: any) => Promise<void>;
    updateDefaultDisappearingMode: (duration: any) => Promise<void>;
    getBusinessProfile: (jid: any) => Promise<{
        wid: any;
        address: any;
        description: any;
        website: any[];
        email: any;
        category: any;
        business_hours: {
            timezone: any;
            business_config: any;
        };
    } | undefined>;
    resyncAppState: (...args: any[]) => Promise<any>;
    chatModify: (mod: any, jid: any) => Promise<void>;
    cleanDirtyBits: (type: any, fromTimestamp: any) => Promise<void>;
    addOrEditContact: (jid: any, contact: any) => Promise<void>;
    removeContact: (jid: any) => Promise<void>;
    placeholderResendCache: any;
    addLabel: (jid: any, labels: any) => Promise<void>;
    addChatLabel: (jid: any, labelId: any) => Promise<void>;
    removeChatLabel: (jid: any, labelId: any) => Promise<void>;
    addMessageLabel: (jid: any, messageId: any, labelId: any) => Promise<void>;
    removeMessageLabel: (jid: any, messageId: any, labelId: any) => Promise<void>;
    star: (jid: any, messages: any, star: any) => Promise<void>;
    addOrEditQuickReply: (quickReply: any) => Promise<void>;
    removeQuickReply: (timestamp: any) => Promise<void>;
    groupMetadata: (jid: any) => Promise<{
        id: any;
        notify: any;
        addressingMode: any;
        subject: any;
        subjectOwner: any;
        subjectOwnerPn: any;
        subjectOwnerUsername: any;
        subjectTime: number;
        size: any;
        creation: number;
        owner: string | undefined;
        ownerPn: string | undefined;
        ownerUsername: any;
        owner_country_code: any;
        desc: any;
        descId: any;
        descOwner: string | undefined;
        descOwnerPn: string | undefined;
        descOwnerUsername: any;
        descTime: number | undefined;
        linkedParent: any;
        restrict: boolean;
        announce: boolean;
        isCommunity: boolean;
        isCommunityAnnounce: boolean;
        joinApprovalMode: boolean;
        memberAddMode: boolean;
        participants: any;
        ephemeralDuration: number | undefined;
    }>;
    groupCreate: (subject: any, participants: any) => Promise<{
        id: any;
        notify: any;
        addressingMode: any;
        subject: any;
        subjectOwner: any;
        subjectOwnerPn: any;
        subjectOwnerUsername: any;
        subjectTime: number;
        size: any;
        creation: number;
        owner: string | undefined;
        ownerPn: string | undefined;
        ownerUsername: any;
        owner_country_code: any;
        desc: any;
        descId: any;
        descOwner: string | undefined;
        descOwnerPn: string | undefined;
        descOwnerUsername: any;
        descTime: number | undefined;
        linkedParent: any;
        restrict: boolean;
        announce: boolean;
        isCommunity: boolean;
        isCommunityAnnounce: boolean;
        joinApprovalMode: boolean;
        memberAddMode: boolean;
        participants: any;
        ephemeralDuration: number | undefined;
    }>;
    groupLeave: (id: any) => Promise<void>;
    groupUpdateSubject: (jid: any, subject: any) => Promise<void>;
    groupRequestParticipantsList: (jid: any) => Promise<any>;
    groupRequestParticipantsUpdate: (jid: any, participants: any, action: any) => Promise<any>;
    groupParticipantsUpdate: (jid: any, participants: any, action: any) => Promise<any>;
    groupUpdateDescription: (jid: any, description: any) => Promise<void>;
    groupInviteCode: (jid: any) => Promise<any>;
    groupRevokeInvite: (jid: any) => Promise<any>;
    groupAcceptInvite: (code: any) => Promise<any>;
    groupRevokeInviteV4: (groupJid: any, invitedJid: any) => Promise<boolean>;
    groupAcceptInviteV4: (...args: any[]) => Promise<any>;
    groupGetInviteInfo: (code: any) => Promise<{
        id: any;
        notify: any;
        addressingMode: any;
        subject: any;
        subjectOwner: any;
        subjectOwnerPn: any;
        subjectOwnerUsername: any;
        subjectTime: number;
        size: any;
        creation: number;
        owner: string | undefined;
        ownerPn: string | undefined;
        ownerUsername: any;
        owner_country_code: any;
        desc: any;
        descId: any;
        descOwner: string | undefined;
        descOwnerPn: string | undefined;
        descOwnerUsername: any;
        descTime: number | undefined;
        linkedParent: any;
        restrict: boolean;
        announce: boolean;
        isCommunity: boolean;
        isCommunityAnnounce: boolean;
        joinApprovalMode: boolean;
        memberAddMode: boolean;
        participants: any;
        ephemeralDuration: number | undefined;
    }>;
    groupToggleEphemeral: (jid: any, ephemeralExpiration: any) => Promise<void>;
    groupSettingUpdate: (jid: any, setting: any) => Promise<void>;
    groupMemberAddMode: (jid: any, mode: any) => Promise<void>;
    groupJoinApprovalMode: (jid: any, mode: any) => Promise<void>;
    groupToggleHistory: (jid: any, enable?: boolean) => Promise<any>;
    groupFetchAllParticipating: () => Promise<{}>;
    subscribeNewsletterUpdates: (jid: any) => Promise<any>;
    newsletterReactionMode: (jid: any, mode: any) => Promise<void>;
    newsletterUpdateDescription: (jid: any, description: any) => Promise<void>;
    newsletterUpdateName: (jid: any, name: any) => Promise<void>;
    newsletterUpdatePicture: (jid: any, content: any) => Promise<void>;
    newsletterRemovePicture: (jid: any) => Promise<void>;
    newsletterUnfollow: (jid: any) => Promise<void>;
    newsletterFollow: (jid: any) => Promise<void>;
    newsletterUnmute: (jid: any) => Promise<void>;
    newsletterMute: (jid: any) => Promise<void>;
    newsletterCreate: (name: any, description: any, picture: any) => Promise<{
        id: any;
        state: any;
        creation_time: number;
        name: any;
        nameTime: number;
        description: any;
        descriptionTime: number;
        invite: any;
        handle: any;
        picture: any;
        preview: any;
        reaction_codes: any;
        subscribers: number;
        verification: any;
        viewer_metadata: any;
    }>;
    newsletterMetadata: (type: any, key: any, role: any) => Promise<{
        id: any;
        state: any;
        creation_time: number;
        name: any;
        nameTime: number;
        description: any;
        descriptionTime: number;
        invite: any;
        handle: any;
        picture: any;
        preview: any;
        reaction_codes: any;
        subscribers: number;
        verification: any;
        viewer_metadata: any;
    }>;
    newsletterAdminCount: (jid: any) => Promise<any>;
    newsletterChangeOwner: (jid: any, user: any) => Promise<void>;
    newsletterDemote: (jid: any, user: any) => Promise<void>;
    newsletterDelete: (jid: any) => Promise<void>;
    newsletterReactMessage: (jid: any, server_id: any, code: any) => Promise<void>;
    newsletterFetchMessages: (type: any, key: any, count: any, after: any) => Promise<{
        server_id: any;
        views: number;
        reactions: any;
    }[]>;
    newsletterFetchUpdates: (jid: any, count: any, after: any, since: any) => Promise<{
        server_id: any;
        views: number;
        reactions: any;
    }[]>;
    checkUsername: (username: string, includeSuggestions?: boolean) => object;
    checkUsernameMulti: (usernames: string[]) => Promise<any>;
    setUsername: (username: string, options?: {
        source?: string;
        sessionId?: string;
        pin?: string;
    }) => Promise<any>;
    deleteUsername: () => Promise<any>;
    getMyUsername: () => Promise<any>;
    getUsernameRecommendations: (source?: string) => Promise<any>;
    setUsernamePin: (pin: string | null) => Promise<any>;
    findUserByUsername: (username: string, pin?: string) => {
        jid: any;
        lid?: any;
        contact: boolean;
    } | null;
    fetchContactUsernames: (...jids: string[]) => Array<{
        id: any;
        username: string | null;
    }>;
    USERNAME_QUERY_IDS: {
        CHECK: string;
        CHECK_MULTI: string;
        SET: string;
        GET: string;
        GET_RECOMMENDATIONS: string;
        PIN_SET: string;
    };
    USERNAME_CHECK_RESULT: {
        SUCCESS: string;
        INVALID: string;
    };
    USERNAME_SOURCE: {
        FB: string;
        IG: string;
        USER_INPUT: string;
        SUGGESTION: string;
    };
};
