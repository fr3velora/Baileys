import { proto } from '../../WAProto/index.js';
export declare const generateLoginNode: (userJid: any, config: any) => proto.ClientPayload;
export declare const generateRegistrationNode: ({ registrationId, signedPreKey, signedIdentityKey }: {
    registrationId: any;
    signedIdentityKey: any;
    signedPreKey: any;
}, config: any) => proto.ClientPayload;
export declare const configureSuccessfulPairing: (stanza: any, { advSecretKey, signedIdentityKey, signalIdentities }: {
    advSecretKey: any;
    signalIdentities: any;
    signedIdentityKey: any;
}) => {
    creds: {
        account: proto.ADVSignedDeviceIdentity;
        me: {
            id: any;
            name: any;
            lid: any;
        };
        signalIdentities: any[];
        platform: any;
    };
    reply: {
        tag: string;
        attrs: {
            to: string;
            type: string;
            id: any;
        };
        content: {
            tag: string;
            attrs: {};
            content: {
                tag: string;
                attrs: {
                    'key-index': string;
                };
                content: any;
            }[];
        }[];
    };
};
export declare const encodeSignedDeviceIdentity: (account: any, includeSignatureKey: any) => any;
