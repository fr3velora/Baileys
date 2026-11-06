export { md5, hkdf } from 'whatsapp-rust-bridge';
/** prefix version byte to the pub keys, required for some curve crypto functions */
export declare const generateSignalPubKey: (pubKey: any) => any;
export declare const Curve: {
    generateKeyPair: () => {
        private: any;
        public: any;
    };
    sharedKey: (privateKey: any, publicKey: any) => any;
    sign: (privateKey: any, buf: any) => any;
    verify: (pubKey: any, message: any, signature: any) => boolean;
};
export declare const signedKeyPair: (identityKeyPair: any, keyId: any) => {
    keyPair: {
        private: any;
        public: any;
    };
    signature: any;
    keyId: any;
};
/**
 * encrypt AES 256 GCM;
 * where the tag tag is suffixed to the ciphertext
 * */
export declare function aesEncryptGCM(plaintext: any, key: any, iv: any, additionalData: any): any;
/**
 * decrypt AES 256 GCM;
 * where the auth tag is suffixed to the ciphertext
 * */
export declare function aesDecryptGCM(ciphertext: any, key: any, iv: any, additionalData: any): any;
export declare function aesEncryptCTR(plaintext: any, key: any, iv: any): any;
export declare function aesDecryptCTR(ciphertext: any, key: any, iv: any): any;
/** decrypt AES 256 CBC; where the IV is prefixed to the buffer */
export declare function aesDecrypt(buffer: any, key: any): any;
/** decrypt AES 256 CBC */
export declare function aesDecryptWithIV(buffer: any, key: any, IV: any): any;
export declare function aesEncrypt(buffer: any, key: any): any;
export declare function aesEncrypWithIV(buffer: any, key: any, IV: any): any;
export declare function hmacSign(buffer: any, key: any, variant?: string): any;
export declare function sha256(buffer: any): any;
export declare function derivePairingCodeKey(pairingCode: any, salt: any): Promise<any>;
