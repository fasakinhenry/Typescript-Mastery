declare const echo: <T>(arg: T) => T;
declare const isObj: <T>(arg: T) => boolean;
declare const isTrue: <T>(arg: T) => {
    arg: T;
    is: boolean;
};
interface BoolCheck<T> {
    value: T;
    is: boolean;
}
declare const checkBoolValue: <T>(arg: T) => BoolCheck<T>;
interface HasID {
    id: number;
}
declare const processUser: <T extends HasID>(user: T) => T;
declare const getUsersProperty: <T extends HasID, K extends keyof T>(users: T[], key: K) => T[K][];
declare const usersArray: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}[];
declare class StateObject<T> {
    private data;
    constructor(value: T);
    get state(): T;
    set state(value: T);
}
declare const store: StateObject<string>;
declare const myState: StateObject<(string | number | boolean)[]>;
//# sourceMappingURL=main.d.ts.map