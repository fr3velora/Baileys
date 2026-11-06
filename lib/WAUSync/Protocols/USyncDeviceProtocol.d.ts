export declare class USyncDeviceProtocol {
    name: string;
    constructor();
    getQueryElement(): {
        tag: string;
        attrs: {
            version: string;
        };
    };
    getUserElement(): null;
    parser(node: any): {
        deviceList: {
            id: number;
            keyIndex: number;
            isHosted: boolean;
        }[];
        keyIndex: {
            timestamp: number;
            signedKeyIndex: any;
            expectedTimestamp: number | undefined;
        } | undefined;
    };
}
