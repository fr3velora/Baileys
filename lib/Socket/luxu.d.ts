import { proto } from '../../WAProto/index.js';
export default class imup {
    utils: any;
    relayMessage: any;
    waUploadToServer: any;
    constructor(utils: any, waUploadToServer: any, relayMessageFn: any);
    detectType(content: any): "ALBUM" | "EVENT" | "GROUP_LABEL" | "GROUP_STATUS" | "ORDER" | "PAYMENT" | "POLL_RESULT" | "PRODUCT" | null;
    handlePayment(content: any, quoted: any): Promise<{
        requestPaymentMessage: proto.Message.RequestPaymentMessage;
    }>;
    handleProduct(content: any, jid: any, quoted: any): Promise<{
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: any;
                    };
                    footer: {
                        text: any;
                    };
                    header: {
                        title: any;
                        hasMediaAttachment: boolean;
                        productMessage: {
                            product: {
                                productImage: any;
                                productId: any;
                                title: any;
                                description: any;
                                currencyCode: any;
                                priceAmount1000: any;
                                retailerId: any;
                                url: any;
                                productImageCount: number;
                            };
                            businessOwnerJid: string;
                        };
                    };
                    nativeFlowMessage: {
                        buttons: any;
                    };
                };
            };
        };
    }>;
    handleAlbum(content: any, jid: any, quoted: any): Promise<any>;
    handleEvent(content: any, jid: any, quoted: any): Promise<any>;
    handlePollResult(content: any, jid: any, quoted: any): Promise<any>;
    handleOrderMessage(content: any, jid: any, quoted: any): Promise<any>;
    handleGroupStory(content: any, jid: any, quoted: any): Promise<any>;
    handleGbLabel(content: any, jid: any): Promise<void>;
}
