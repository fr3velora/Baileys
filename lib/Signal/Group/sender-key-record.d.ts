import { SenderKeyState } from './sender-key-state.js';
export declare class SenderKeyRecord {
    MAX_STATES: number;
    senderKeyStates: SenderKeyState[];
    constructor(serialized: any);
    isEmpty(): boolean;
    getSenderKeyState(keyId: any): SenderKeyState | undefined;
    addSenderKeyState(id: any, iteration: any, chainKey: any, signatureKey: any): void;
    setSenderKeyState(id: any, iteration: any, chainKey: any, keyPair: any): void;
    serialize(): any[];
    static deserialize(data: any): SenderKeyRecord;
}
