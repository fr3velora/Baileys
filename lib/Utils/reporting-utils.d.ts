export declare const shouldIncludeReportingToken: (message: any) => boolean;
export declare const getMessageReportingToken: (msgProtobuf: any, message: any, key: any) => Promise<{
    tag: string;
    attrs: {};
    content: {
        tag: string;
        attrs: {
            v: string;
        };
        content: any;
    }[];
} | null>;
