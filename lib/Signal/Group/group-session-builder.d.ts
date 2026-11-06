import { SenderKeyDistributionMessage } from './sender-key-distribution-message.js';
export declare class GroupSessionBuilder {
    senderKeyStore: any;
    constructor(senderKeyStore: any);
    process(senderKeyName: any, senderKeyDistributionMessage: any): Promise<void>;
    create(senderKeyName: any): Promise<SenderKeyDistributionMessage>;
}
