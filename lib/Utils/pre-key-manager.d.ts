/**
 * Manages pre-key operations with proper concurrency control
 */
export declare class PreKeyManager {
    store: any;
    logger: any;
    queues: Map<any, any>;
    constructor(store: any, logger: any);
    /**
     * Get or create a queue for a specific key type
     */
    getQueue(keyType: any): any;
    /**
     * Process pre-key operations (updates and deletions)
     */
    processOperations(data: any, keyType: any, transactionCache: any, mutations: any, isInTransaction: any): Promise<any>;
    /**
     * Process deletions with validation
     */
    processDeletions(keyType: any, ids: any, transactionCache: any, mutations: any, isInTransaction: any): Promise<void>;
    /**
     * Validate and process pre-key deletions outside transactions
     */
    validateDeletions(data: any, keyType: any): Promise<any>;
}
