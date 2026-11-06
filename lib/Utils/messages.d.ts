import { proto } from '../../WAProto/index.js';
/**
 * Uses a regex to test whether the string contains a URL, and returns the URL if it does.
 * @param text eg. hello https://google.com
 * @returns the URL, eg. https://google.com
 */
export declare const extractUrlFromText: (text: any) => any;
export declare const generateLinkPreviewIfRequired: (text: any, getUrlInfo: any, logger: any) => Promise<any>;
export declare const prepareWAMessageMedia: (message: any, options: any) => Promise<proto.Message>;
export declare const prepareDisappearingMessageSettingContent: (ephemeralExpiration: any) => proto.Message;
/**
 * Generate forwarded message content like WA does
 * @param message the message to forward
 * @param options.forceForward will show the message as forwarded even if it is from you
 */
export declare const generateForwardMessageContent: (message: any, forceForward: any) => any;
export declare const hasNonNullishProperty: (message: any, key: any) => boolean;
export declare const generateWAMessageContent: (message: any, options: any) => Promise<proto.Message>;
export declare const generateWAMessageFromContent: (jid: any, message: any, options: any) => proto.WebMessageInfo;
export declare const generateWAMessage: (jid: any, content: any, options: any) => Promise<proto.WebMessageInfo>;
/** Get the key to access the true type of content */
export declare const getContentType: (content: any) => string | undefined;
/**
 * Normalizes ephemeral, view once messages to regular message content
 * Eg. image messages in ephemeral messages, in view once messages etc.
 * @param content
 * @returns
 */
export declare const normalizeMessageContent: (content: any) => any;
/**
 * Extract the true message content from a message
 * Eg. extracts the inner message from a disappearing message/view once message
 */
export declare const extractMessageContent: (content: any) => any;
/**
 * Returns the device predicted by message ID
 */
export declare const getDevice: (id: any) => "android" | "desktop" | "ios" | "wa bot" | "web";
/** Upserts a receipt in the message */
export declare const updateMessageWithReceipt: (msg: any, receipt: any) => void;
/** Update the message with a new reaction */
export declare const updateMessageWithReaction: (msg: any, reaction: any) => void;
/** Update the message with a new poll update */
export declare const updateMessageWithPollUpdate: (msg: any, update: any) => void;
/** Update the message with a new event response */
export declare const updateMessageWithEventResponse: (msg: any, update: any) => void;
/**
 * Aggregates all poll updates in a poll.
 * @param msg the poll creation message
 * @param meId your jid
 * @returns A list of options & their voters
 */
export declare function getAggregateVotesInPollMessage({ message, pollUpdates }: {
    message: any;
    pollUpdates: any;
}, meId: any): any[];
/**
 * Aggregates all event responses in an event message.
 * @param msg the event creation message
 * @param meId your jid
 * @returns A list of response types & their responders
 */
export declare function getAggregateResponsesInEventMessage({ eventResponses }: {
    eventResponses: any;
}, meId: any): any[];
/** Given a list of message keys, aggregates them by chat & sender. Useful for sending read receipts in bulk */
export declare const aggregateMessageKeysNotFromMe: (keys: any) => any[];
/**
 * Downloads the given message. Throws an error if it's not a media message
 */
export declare const downloadMediaMessage: (message: any, type: any, options: any, ctx: any) => Promise<any>;
/** Checks whether the given message is a media message; if it is returns the inner content */
export declare const assertMediaContent: (content: any) => any;
