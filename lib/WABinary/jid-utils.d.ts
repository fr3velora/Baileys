export declare const S_WHATSAPP_NET = "@s.whatsapp.net";
export declare const OFFICIAL_BIZ_JID = "16505361212@c.us";
export declare const SERVER_JID = "server@c.us";
export declare const PSA_WID = "0@c.us";
export declare const STORIES_JID = "status@broadcast";
export declare const META_AI_JID = "13135550002@c.us";
export declare var WAJIDDomains: any;
export declare const getServerFromDomainType: (initialServer: any, domainType: any) => any;
export declare const jidEncode: (user: any, server: any, device: any, agent: any) => string;
export declare const jidDecode: (jid: any) => {
    server: any;
    user: any;
    domainType: any;
    device: number | undefined;
} | undefined;
/** is the jid a user */
export declare const areJidsSameUser: (jid1: any, jid2: any) => boolean;
/** is the jid Meta AI */
export declare const isJidMetaAI: (jid: any) => any;
/** is the jid a PN user */
export declare const isPnUser: (jid: any) => any;
/** is the jid a LID */
export declare const isLidUser: (jid: any) => any;
/** is the jid a broadcast */
export declare const isJidBroadcast: (jid: any) => any;
/** is the jid a group */
export declare const isJidGroup: (jid: any) => any;
/** is the jid the status broadcast */
export declare const isJidStatusBroadcast: (jid: any) => boolean;
/** is the jid a newsletter */
export declare const isJidNewsletter: (jid: any) => any;
/** is the jid a hosted PN */
export declare const isHostedPnUser: (jid: any) => any;
/** is the jid a hosted LID */
export declare const isHostedLidUser: (jid: any) => any;
/** is the jid a interop */
export declare const isInteropUser: (jid: any) => any;
export declare const isJidBot: (jid: any) => any;
export declare const jidNormalizedUser: (jid: any) => string;
export declare const transferDevice: (fromJid: any, toJid: any) => string;
