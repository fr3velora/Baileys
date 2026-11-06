import { CiphertextMessage } from './ciphertext-message.js';
export declare class SenderKeyDistributionMessage extends CiphertextMessage {
    serialized: any;
    id: any;
    iteration: any;
    chainKey: any;
    signatureKey: any;
    constructor(id: any, iteration: any, chainKey: any, signatureKey: any, serialized: any);
    intsToByteHighAndLow(highValue: any, lowValue: any): number;
    serialize(): any;
    getType(): number;
    getIteration(): any;
    getChainKey(): any;
    getSignatureKey(): any;
    getId(): any;
}
