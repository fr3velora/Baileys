import { proto } from '../../WAProto/index.js';
/** Cleans a received message to further processing */
export declare const cleanMessage: (message: any, meId: any, meLid: any) => void;
export declare const isRealMessage: (message: any) => boolean;
export declare const shouldIncrementChatUnread: (message: any) => boolean;
/**
 * Get the ID of the chat from the given key.
 * Typically -- that'll be the remoteJid, but for broadcasts, it'll be the participant
 */
export declare const getChatId: ({ remoteJid, participant, fromMe }: {
    fromMe: any;
    participant: any;
    remoteJid: any;
}) => any;
/**
 * Decrypt a poll vote
 * @param vote encrypted vote
 * @param ctx additional info about the poll required for decryption
 * @returns list of SHA256 options
 */
export declare function decryptPollVote({ encPayload, encIv }: {
    encIv: any;
    encPayload: any;
}, { pollCreatorJid, pollMsgId, pollEncKey, voterJid }: {
    pollCreatorJid: any;
    pollEncKey: any;
    pollMsgId: any;
    voterJid: any;
}): proto.Message.PollVoteMessage;
/**
 * Decrypt an event response
 * @param response encrypted event response
 * @param ctx additional info about the event required for decryption
 * @returns event response message
 */
export declare function decryptEventResponse({ encPayload, encIv }: {
    encIv: any;
    encPayload: any;
}, { eventCreatorJid, eventMsgId, eventEncKey, responderJid }: {
    eventCreatorJid: any;
    eventEncKey: any;
    eventMsgId: any;
    responderJid: any;
}): proto.Message.EventResponseMessage;
declare const processMessage: (message: any, { shouldProcessHistoryMsg, placeholderResendCache, ev, creds, signalRepository, keyStore, logger, options, getMessage }: {
    creds: any;
    ev: any;
    getMessage: any;
    keyStore: any;
    logger: any;
    options: any;
    placeholderResendCache: any;
    shouldProcessHistoryMsg: any;
    signalRepository: any;
}) => Promise<void>;
export default processMessage;
