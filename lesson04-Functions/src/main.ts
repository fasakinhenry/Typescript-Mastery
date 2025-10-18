// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal Types
let myName: 'Henry';

let userName: 'Dave' | 'John' | 'Amy';

userName = 'Amy';

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));
logMsg('Hello');

let subtract = function (c: number, d: number): number {
  return c - d;
};

type MathFunction = (a: number, b: number) => number;
// interface MathFunction {
//   (a: number, b: number): number;
// }

let multiply: MathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2)); // Return 4

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// Default parameter values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

// The never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// The never type also appear when there is an infinite loop
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number';
};

// Use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return createError('This should never happen!');
};
