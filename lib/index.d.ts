import { proto } from '../WAProto/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';

/** Event emitter yang longgar supaya handler tidak kena error implicit any di mode strict. */
export interface Fr3veloraEventEmitter {
    on(event: string, listener: (...args: any[]) => any): any;
    off(event: string, listener: (...args: any[]) => any): any;
    once(event: string, listener: (...args: any[]) => any): any;
    removeAllListeners(event?: string): any;
    emit(event: string, ...args: any[]): any;
    process(handler: (events: any) => any): () => void;
    buffer(): void;
    flush(): boolean;
    isBuffering(): boolean;
    createBufferedFunction<T extends (...args: any[]) => any>(work: T): T;
    destroy(): void;
}

export interface WASocket {
    ev: Fr3veloraEventEmitter;
    ws: any;
    authState: { creds: any; keys: any };
    user?: { id: string; lid?: string; name?: string; [key: string]: any };
    sendMessage(jid: string, content: any, options?: any): Promise<any>;
    end(error?: Error): void;
    logout(msg?: string): Promise<void>;
    /** Semua method socket lain (group*, newsletter*, profile*, dll) */
    [method: string]: any;
}

export type AnyWASocket = WASocket;
export type WAMessage = proto.IWebMessageInfo;
export type WAConnectionState = 'open' | 'connecting' | 'close';

export declare function makeWASocket(config?: Record<string, any>): WASocket;
export default makeWASocket;
