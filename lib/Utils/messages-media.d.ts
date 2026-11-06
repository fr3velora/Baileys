import { proto } from '../../WAProto/index.js';
export declare const hkdfInfoKey: (type: any) => string;
export declare const getRawMediaUploadData: (media: any, mediaType: any, logger: any) => Promise<{
    filePath: any;
    fileSha256: any;
    fileLength: number;
}>;
/** generates all the keys required to encrypt/decrypt & sign a media message */
export declare function getMediaKeys(buffer: any, mediaType: any): Promise<{
    iv: any;
    cipherKey: any;
    macKey: any;
}>;
export declare const extractImageThumb: (bufferOrFilePath: any, width?: number) => Promise<{
    buffer: any;
    original: {
        width: any;
        height: any;
    };
}>;
export declare const encodeBase64EncodedStringForUpload: (b64: any) => string;
export declare const generateProfilePicture: (mediaUpload: any, dimensions: any) => Promise<{
    img: any;
}>;
/** gets the SHA256 of the given media message */
export declare const mediaMessageSHA256B64: (message: any) => any;
export declare function getAudioDuration(buffer: any): Promise<any>;
/**
  referenced from and modifying https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareAudioWaveform.ts
 */
export declare function getAudioWaveform(buffer: any, logger: any): Promise<Uint8Array<ArrayBuffer> | undefined>;
export declare const toReadable: (buffer: any) => any;
export declare const toBuffer: (stream: any) => Promise<any>;
export declare const getStream: (item: any, opts: any) => Promise<{
    stream: any;
    type: string;
}>;
/** generates a thumbnail for a given media, if required */
export declare function generateThumbnail(file: any, mediaType: any, options: any): Promise<{
    thumbnail: any;
    originalImageDimensions: {
        width: any;
        height: any;
    } | undefined;
}>;
export declare const getHttpStream: (url: any, options?: any) => Promise<any>;
export declare const encryptedStream: (media: any, mediaType: any, { logger, saveOriginalFileIfRequired, opts }?: any) => Promise<{
    mediaKey: any;
    originalFilePath: any;
    encFilePath: any;
    mac: any;
    fileEncSha256: any;
    fileSha256: any;
    fileLength: number;
}>;
export declare const DEF_MEDIA_HOST = "mmg.whatsapp.net";
export declare const getUrlFromDirectPath: (directPath: any, host?: string) => string;
export declare const downloadContentFromMessage: ({ mediaKey, directPath, url }: {
    directPath: any;
    mediaKey: any;
    url: any;
}, type: any, opts?: any) => Promise<any>;
/**
 * Decrypts and downloads an AES256-CBC encrypted file given the keys.
 * Assumes the SHA256 of the plaintext is appended to the end of the ciphertext
 * */
export declare const downloadEncryptedContent: (downloadUrl: any, { cipherKey, iv }: {
    cipherKey: any;
    iv: any;
}, { startByte, endByte, options }?: any) => Promise<any>;
export declare function extensionForMediaMessage(message: any): any;
export declare const uploadWithNodeHttp: ({ url, filePath, headers, timeoutMs, agent }: {
    agent: any;
    filePath: any;
    headers: any;
    timeoutMs: any;
    url: any;
}, redirectCount?: number) => Promise<any>;
export declare const getWAUploadToServer: ({ customUploadHosts, fetchAgent, logger, options }: {
    customUploadHosts: any;
    fetchAgent: any;
    logger: any;
    options: any;
}, refreshMediaConn: any) => (filePath: any, { mediaType, fileEncSha256B64, timeoutMs }: {
    fileEncSha256B64: any;
    mediaType: any;
    timeoutMs: any;
}) => Promise<{
    mediaUrl: any;
    directPath: any;
    meta_hmac: any;
    fbid: any;
    ts: any;
}>;
/**
 * Generate a binary node that will request the phone to re-upload the media & return the newly uploaded URL
 */
export declare const encryptMediaRetryRequest: (key: any, mediaKey: any, meId: any) => {
    tag: string;
    attrs: {
        id: any;
        to: string;
        type: string;
    };
    content: ({
        tag: string;
        attrs: {
            jid?: undefined;
            from_me?: undefined;
            participant?: undefined;
        };
        content: {
            tag: string;
            attrs: {};
            content: any;
        }[];
    } | {
        content?: undefined;
        tag: string;
        attrs: {
            jid: any;
            from_me: string;
            participant: any;
        };
    })[];
};
export declare const decodeMediaRetryNode: (node: any) => {
    key: {
        id: any;
        remoteJid: any;
        fromMe: boolean;
        participant: any;
    };
};
export declare const decryptMediaRetryData: ({ ciphertext, iv }: {
    ciphertext: any;
    iv: any;
}, mediaKey: any, msgId: any) => proto.MediaRetryNotification;
export declare const getStatusCodeForMediaRetry: (code: any) => any;
