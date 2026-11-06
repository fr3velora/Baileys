import { SenderMessageKey } from './sender-message-key.js';
export declare class SenderChainKey {
    MESSAGE_KEY_SEED: any;
    CHAIN_KEY_SEED: any;
    iteration: any;
    chainKey: any;
    constructor(iteration: any, chainKey: any);
    getIteration(): any;
    getSenderMessageKey(): SenderMessageKey;
    getNext(): SenderChainKey;
    getSeed(): any;
    getDerivative(seed: any, key: any): any;
}
