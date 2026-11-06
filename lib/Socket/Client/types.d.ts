import { EventEmitter } from 'events';
export declare class AbstractSocketClient extends EventEmitter {
    url: any;
    config: any;
    constructor(url: any, config: any);
}
