export declare class USyncLIDProtocol {
    name: string;
    constructor();
    getQueryElement(): {
        tag: string;
        attrs: {};
    };
    getUserElement(user: any): {
        tag: string;
        attrs: {
            jid: any;
        };
    } | null;
    parser(node: any): any;
}
