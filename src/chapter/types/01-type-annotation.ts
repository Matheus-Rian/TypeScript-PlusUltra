/* eslint-disable */
let nome = 'Matheus';
// Types Basics(aqui ocorre a inferência de tipos)
let nomet: string = 'Matheus'; // Qualquer tipo de strings: '' "" ``
let age: number = 19; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let isAdult: boolean = true; // true or false
console.log(isAdult)
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; //bigint

// Arrays
let arrayOfNumbers: number[] = [1, 2, 3];
let arrayOfNumbers2: Array<number> = [1, 2, 3];

let arrayOfStrings: string[] = ['a', 'b'];
let arrayOfStrings2: Array<string> = ['a', 'b'];

// Objetos
let pessoa: {name: string, age: number, isAdult?: boolean } = {
    age: 18,
    name: 'Matheus'
}

// Funções
function soma(x: number, y: number): number {
    return x + y;
}
// or
const soma2: (x: number, y: number) => number = (x, y) => x + y;

const divis: (x: number, y: number) => number = (x, y) => {
  return x / y;
}
