"use strict";
let stringArray = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'John';
stringArray.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArray;
let test = []; // Any type array
let bands = []; // String type array
bands.push('Van Halen');
// bands.push(1984);
// Tuple
// Tuple is more stricter and specific than an array
let myTuple = ['Dave', 42, true];
// An array does not enforce the types or the order of the elements
let mixed = ['John', 1, false];
myTuple[1] = 45;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Henry',
    prop2: true,
};
exampleObj.prop1 = 'Henqsoft';
// Annotation of the object properties
const guitarObj = {
    brand: 'Fender',
    model: 'Strat',
    year: 1984,
};
let EVH = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(EVH));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
//# sourceMappingURL=main.js.map