export declare const makeNoiseHandler: ({ keyPair: { private: privateKey, public: publicKey }, NOISE_HEADER, logger, routingInfo }: {
    NOISE_HEADER: any;
    keyPair: {
        private: any;
        public: any;
    };
    logger: any;
    routingInfo: any;
}) => {
    encrypt: (plaintext: any) => any;
    decrypt: (ciphertext: any) => any;
    authenticate: (data: any) => void;
    mixIntoKey: (data: any) => void;
    finishInit: () => Promise<void>;
    processHandshake: ({ serverHello }: {
        serverHello: any;
    }, noiseKey: any) => any;
    encodeFrame: (data: any) => any;
    decodeFrame: (newData: any, onFrame: any) => Promise<void>;
};
