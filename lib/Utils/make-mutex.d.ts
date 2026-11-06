export declare const makeMutex: () => {
    mutex(code: any): any;
};
export declare const makeKeyedMutex: () => {
    mutex(key: any, task: any): Promise<any>;
};
