declare const JS_KEYWORDS: Set<string>;
declare const PYTHON_KEYWORDS: Set<string>;
declare const LANGUAGE_KEYWORDS: {
    javascript: Set<string>;
    typescript: Set<string>;
    js: Set<string>;
    ts: Set<string>;
    python: Set<string>;
    py: Set<string>;
};
export declare var CodeHighlightType: any;
export declare var RichSubMessageType: any;
export declare const tokenizeCode: (codeStr: any, language?: string) => {
    highlightType: any;
    codeContent: string;
}[];
export declare const buildRichContextInfo: (quoted: any, options: any) => {
    forwardingScore: number;
    isForwarded: boolean;
    forwardedAiBotMessageInfo: {
        botJid: any;
    };
    forwardOrigin: number;
    mentionedJid?: any;
};
export declare const buildBotForwardedMessage: (submessages: any, contextInfo: any, unifiedResponse: any) => {
    botForwardedMessage: {
        message: {
            richResponseMessage: {
                messageType: number;
                submessages: any;
                contextInfo: any;
            };
        };
    };
};
export declare const generateTableContent: (title: any, headers: any, rows: any, quoted: any, options?: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export declare const generateListContent: (title: any, items: any, quoted: any, options?: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export declare const generateCodeBlockContent: (code: any, quoted: any, options?: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export declare const generateLatexContent: (quoted: any, options: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export declare const generateLatexImageContent: (quoted: any, options: any, uploadFn: any, renderLatexToPng: any) => Promise<{
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
}>;
export declare const generateLatexInlineImageContent: (quoted: any, options: any, uploadFn: any, renderLatexToPng: any) => Promise<{
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
}>;
export declare const captureUnifiedResponse: (msg: any) => {
    unifiedResponse: {
        data: any;
    };
    submessages: any;
    contextInfo: any;
} | null;
export declare const generateUnifiedResponseContent: (quoted: any, captured: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export declare const generateRichMessageContent: (submessages: any, quoted: any, options: any) => {
    message: {
        botForwardedMessage: {
            message: {
                richResponseMessage: {
                    messageType: number;
                    submessages: any;
                    contextInfo: any;
                };
            };
        };
    };
    messageId: string;
};
export { JS_KEYWORDS, PYTHON_KEYWORDS, LANGUAGE_KEYWORDS };
