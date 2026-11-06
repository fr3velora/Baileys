import { proto } from '../../WAProto/index.js';
export declare const getBinaryNodeChildren: (node: any, childTag: any) => any;
export declare const getAllBinaryNodeChildren: ({ content }: {
    content: any;
}) => any[];
export declare const getBinaryNodeChild: (node: any, childTag: any) => any;
export declare const getBinaryNodeChildBuffer: (node: any, childTag: any) => any;
export declare const getBinaryNodeChildString: (node: any, childTag: any) => any;
export declare const getBinaryNodeChildUInt: (node: any, childTag: any, length: any) => number | undefined;
export declare const assertNodeErrorFree: (node: any) => void;
export declare const reduceBinaryNodeToDictionary: (node: any, tag: any) => any;
export declare const getBinaryNodeMessages: ({ content }: {
    content: any;
}) => proto.WebMessageInfo[];
export declare function binaryNodeToString(node: any, i?: number): any;
export declare const getBinaryNodeFilter: (node: any) => boolean;
export declare const getAdditionalNode: (name: any) => {
    tag: string;
    attrs: {
        native_flow_name: any;
    };
    content: never[];
}[] | {
    tag: string;
    attrs: {
        actual_actors: string;
        host_storage: string;
        privacy_mode_ts: string;
    };
    content: ({
        tag: string;
        attrs: {
            customer_service_state: string;
            conversation_state: string;
            type?: undefined;
            v?: undefined;
        };
        content?: undefined;
    } | {
        tag: string;
        attrs: {
            customer_service_state?: undefined;
            conversation_state?: undefined;
            type: string;
            v: string;
        };
        content: {
            tag: string;
            attrs: {
                v: string;
                name: any;
            };
            content: never[];
        }[];
    })[];
}[];
export declare const getBinaryFilteredBizBot: (nodeContent: any) => boolean;
