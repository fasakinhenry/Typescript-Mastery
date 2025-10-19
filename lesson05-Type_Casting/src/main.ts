type One = string;
type Two = string | number; // Union type
type Three = 'hello'; // Literal type

// Covert to a more or less specific type
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;
