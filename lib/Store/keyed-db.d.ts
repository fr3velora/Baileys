export default class KeyedDB {
    _compare: any;
    _idGetter: any;
    _array: any[];
    _dict: {};
    constructor(compareFn: any, idGetter: any);
    get length(): number;
    get(id: any): any;
    insert(entry: any, mode?: string): boolean;
    insertIfAbsent(...entries: any[]): any[];
    upsert(...entries: any[]): any[];
    update(id: any, updater: any): boolean;
    updateAssign(id: any, update: any): boolean;
    deleteById(id: any): boolean;
    clear(): void;
    all(): any[];
    filter(predicate: any): void;
    count(): number;
    toJSON(): any[];
    fromJSON(array: any): void;
}
