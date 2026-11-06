export declare const getDecryptionJid: (sender: any, repository: any) => Promise<any>;
export declare const NO_MESSAGE_FOUND_ERROR_TEXT = "Message absent from node";
export declare const MISSING_KEYS_ERROR_TEXT = "Key used already or never filled";
export declare const ACCOUNT_RESTRICTED_TEXT = "Your account has been restricted";
export declare const DECRYPTION_RETRY_CONFIG: {
    maxRetries: number;
    baseDelayMs: number;
    sessionRecordErrors: string[];
};
/** NACK reason codes we send to the server (client → server) */
export declare const NACK_REASONS: {
    SenderReachoutTimelocked: number;
    ParsingError: number;
    UnrecognizedStanza: number;
    UnrecognizedStanzaClass: number;
    UnrecognizedStanzaType: number;
    InvalidProtobuf: number;
    InvalidHostedCompanionStanza: number;
    MissingMessageSecret: number;
    SignalErrorOldCounter: number;
    MessageDeletedOnPeer: number;
    UnhandledError: number;
    UnsupportedAdminRevoke: number;
    UnsupportedLIDGroup: number;
    DBOperationFailed: number;
};
/**
 * Server-side error codes returned in ack stanzas (server → client) that we
 * currently have dedicated handlers for. Extend as more handlers are added.
 * Distinct from the client-side NackReason enum (WAWebCreateNackFromStanza).
 */
export declare const SERVER_ERROR_CODES: {
    /**
     * 1:1 message missing privacy token (tctoken). Usually means the account is
     * restricted: WhatsApp blocks starting new chats but preserves existing ones,
     * since established chats already carry a tctoken.
     */
    MessageAccountRestriction: string;
    /** Stanza validation failure (SMAX_INVALID) — likely stale device session */
    SmaxInvalid: string;
};
export declare const extractAddressingContext: (stanza: any) => {
    addressingMode: any;
    senderAlt: any;
    recipientAlt: any;
};
export declare const setBotMessageSecret: (id: any, secret: any, chatJid: any) => void;
/**
 * Decode the received node as a message.
 * @note this will only parse the message, not decrypt it
 */
export declare function decodeMessageNode(stanza: any, meId: any, meLid: any): {
    fullMessage: {
        key: {
            remoteJid: any;
            remoteJidAlt: any;
            remoteJidUsername: any;
            fromMe: boolean;
            id: any;
            participant: any;
            participantAlt: any;
            participantUsername: any;
            addressingMode: any;
            server_id?: any;
        };
        category: any;
        messageTimestamp: number;
        pushName: any;
        broadcast: any;
    };
    author: any;
    sender: any;
};
export declare const decryptMessageNode: (stanza: any, meId: any, meLid: any, repository: any, logger: any) => {
    fullMessage: {
        key: {
            remoteJid: any;
            remoteJidAlt: any;
            remoteJidUsername: any;
            fromMe: boolean;
            id: any;
            participant: any;
            participantAlt: any;
            participantUsername: any;
            addressingMode: any;
            server_id?: any;
        };
        category: any;
        messageTimestamp: number;
        pushName: any;
        broadcast: any;
    };
    category: any;
    author: any;
    decrypt(): Promise<void>;
};
