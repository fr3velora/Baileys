export declare const parseCatalogNode: (node: any) => {
    products: any;
    nextPageCursor: any;
};
export declare const parseCollectionsNode: (node: any) => {
    collections: any;
};
export declare const parseOrderDetailsNode: (node: any) => {
    price: {
        total: number;
        currency: any;
    };
    products: any;
};
export declare const toProductNode: (productId: any, product: any) => {
    tag: string;
    attrs: {
        compliance_category: string;
        is_hidden: any;
    };
    content: {
        tag: string;
        attrs: {};
        content: any;
    }[];
};
export declare const parseProductNode: (productNode: any) => {
    id: any;
    imageUrls: {
        requested: any;
        original: any;
    };
    reviewStatus: {
        whatsapp: any;
    };
    availability: string;
    name: any;
    retailerId: any;
    url: any;
    description: any;
    price: number;
    currency: any;
    isHidden: boolean;
};
/**
 * Uploads images not already uploaded to WA's servers
 */
export declare function uploadingNecessaryImagesOfProduct(product: any, waUploadToServer: any, timeoutMs?: number): Promise<any>;
/**
 * Uploads images not already uploaded to WA's servers
 */
export declare const uploadingNecessaryImages: (images: any, waUploadToServer: any, timeoutMs?: number) => Promise<any[]>;
