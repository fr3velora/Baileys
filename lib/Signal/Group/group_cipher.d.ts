export declare class GroupCipher {
    senderKeyStore: any;
    senderKeyName: any;
    constructor(senderKeyStore: any, senderKeyName: any);
    encrypt(paddedPlaintext: any): Promise<any>;
    decrypt(senderKeyMessageBytes: any): Promise<any>;
    getSenderKey(senderKeyState: any, iteration: any): any;
    getPlainText(iv: any, key: any, ciphertext: any): Promise<any>;
    getCipherText(iv: any, key: any, plaintext: any): Promise<any>;
}
