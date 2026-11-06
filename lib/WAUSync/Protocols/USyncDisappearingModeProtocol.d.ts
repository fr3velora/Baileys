export declare class USyncDisappearingModeProtocol {
    name: string;
    constructor();
    getQueryElement(): {
        tag: string;
        attrs: {};
    };
    getUserElement(): null;
    parser(node: any): {
        duration: number;
        setAt: Date;
    } | undefined;
}
