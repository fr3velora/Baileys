export declare class ObjectRepository {
    entityMap: Map<string, any>;
    constructor(entities?: any);
    findById(id: any): any;
    findAll(): any[];
    upsertById(id: any, entity: any): this;
    deleteById(id: any): boolean;
    count(): number;
    toJSON(): any[];
}
export default ObjectRepository;
