type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    name: string;
    active: boolean;
    albums: stringOrNumberArray;
};
type userId = stringOrNumber;
declare let myName: 'Henry';
declare let userName: 'Dave' | 'John' | 'Amy';
declare const add: (a: number, b: number) => number;
declare const logMsg: (message: any) => void;
declare let subtract: (c: number, d: number) => number;
type MathFunction = (a: number, b: number) => number;
declare let multiply: MathFunction;
declare const addAll: (a: number, b: number, c?: number) => number;
declare const sumAll: (a: number | undefined, b: number, c?: number) => number;
declare const total: (a: number, ...nums: number[]) => number;
declare const createError: (errMsg: string) => never;
declare const infinite: () => void;
declare const isNumber: (value: any) => boolean;
declare const numberOrString: (value: number | string) => string;
//# sourceMappingURL=main.d.ts.map