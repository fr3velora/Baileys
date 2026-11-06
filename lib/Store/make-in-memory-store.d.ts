import { ObjectRepository } from "./object-repository.js";
import KeyedDB from "./keyed-db.js";
export declare const waMessageID: (m: any) => any;
export declare const waLabelAssociationKey: {
    key: (la: any) => any;
    compare: (k1: any, k2: any) => any;
};
export default function makeInMemoryStore(config: any): {
    chats: KeyedDB;
    contacts: {};
    messages: {};
    groupMetadata: {};
    state: {
        connection: string;
    };
    presences: {};
    labels: ObjectRepository;
    labelAssociations: KeyedDB;
    bind: (ev: any) => void;
    toJSON: () => {
        chats: KeyedDB;
        contacts: {};
        messages: {};
        labels: ObjectRepository;
        labelAssociations: KeyedDB;
    };
    fromJSON: (json: any) => void;
    loadMessage: (jid: any, id: any) => Promise<any>;
};
