import { proto } from '../../WAProto/index.js';
export declare const downloadHistory: (msg: any, options: any) => Promise<proto.HistorySync>;
export declare const processHistoryMessage: (item: any, logger: any) => {
    chats: any[];
    contacts: ({
        id: any;
        name: any;
        username: any;
        lid: any;
        phoneNumber: any;
        verifiedName?: undefined;
        notify?: undefined;
    } | {
        name?: undefined;
        username?: undefined;
        lid?: undefined;
        phoneNumber?: undefined;
        id: any;
        verifiedName: any;
        notify?: undefined;
    } | {
        name?: undefined;
        username?: undefined;
        lid?: undefined;
        phoneNumber?: undefined;
        verifiedName?: undefined;
        id: any;
        notify: any;
    })[];
    messages: any[];
    lidPnMappings: {
        lid: any;
        pn: any;
    }[];
    pastParticipants: any;
    syncType: any;
    progress: any;
};
export declare const downloadAndProcessHistorySyncNotification: (msg: any, options: any, logger: any) => Promise<{
    chats: any[];
    contacts: ({
        id: any;
        name: any;
        username: any;
        lid: any;
        phoneNumber: any;
        verifiedName?: undefined;
        notify?: undefined;
    } | {
        name?: undefined;
        username?: undefined;
        lid?: undefined;
        phoneNumber?: undefined;
        id: any;
        verifiedName: any;
        notify?: undefined;
    } | {
        name?: undefined;
        username?: undefined;
        lid?: undefined;
        phoneNumber?: undefined;
        verifiedName?: undefined;
        id: any;
        notify: any;
    })[];
    messages: any[];
    lidPnMappings: {
        lid: any;
        pn: any;
    }[];
    pastParticipants: any;
    syncType: any;
    progress: any;
}>;
export declare const getHistoryMsg: (message: any) => any;
