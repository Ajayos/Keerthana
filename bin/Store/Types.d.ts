export type PaginationMode = 'before' | 'after';
export type Comparable<ObjectType, KeyType> = {
    /** Order By KeyType */
    key: (v: ObjectType) => KeyType;
    /** Compare Keys here */
    compare: (a: KeyType, b: KeyType) => number;
};
/** Identifier function for object */
export type Identifiable<T> = (v: T) => string;
export interface IKeyedDB<T, K> extends Iterable<T> {
    length: number;
    first: T;
    last: T;
    get(id: string): T;
    toJSON(): any;
    insert(...values: T[]): any;
    delete(value: T): T;
}
