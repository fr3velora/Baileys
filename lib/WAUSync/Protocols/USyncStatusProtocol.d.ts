export declare class USyncStatusProtocol {
    name: string;
    constructor();
    getQueryElement(): {
        tag: string;
        attrs: {};
    };
    getUserElement(): null;
    parser(node: any): {
        status: any;
        setAt: Date;
    } | undefined;
}
