export declare class USyncContactProtocol {
    name: string;
    constructor();
    getQueryElement(): {
        tag: string;
        attrs: {};
    };
    getUserElement(user: any): {
        tag: string;
        attrs: {
            type?: undefined;
        };
        content: any;
    } | {
        content?: undefined;
        tag: string;
        attrs: {
            type?: undefined;
            username: any;
            pin?: any;
            lid?: any;
        };
    } | {
        content?: undefined;
        tag: string;
        attrs: {
            type: any;
        };
    } | {
        content?: undefined;
        tag: string;
        attrs: {
            type?: undefined;
        };
    };
    parser(node: any): boolean;
}
