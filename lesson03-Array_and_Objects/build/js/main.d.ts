declare let stringArray: string[];
declare let guitars: (string | number)[];
declare let mixedData: (string | number | boolean)[];
declare let test: any[];
declare let bands: string[];
declare let myTuple: [string, number, boolean];
declare let mixed: (string | number | boolean)[];
declare let myObj: object;
declare const exampleObj: {
    prop1: string;
    prop2: boolean;
};
declare const guitarObj: {
    brand: string;
    model: string;
    year: number;
};
interface Guitarist {
    name?: string;
    active: boolean;
    albums: (string | number)[];
}
declare let EVH: Guitarist;
declare let JP: Guitarist;
declare const greetGuitarist: (guitarist: Guitarist) => string;
declare enum Grade {
    U = 1,
    D = 2,
    C = 3,
    B = 4,
    A = 5
}
//# sourceMappingURL=main.d.ts.map