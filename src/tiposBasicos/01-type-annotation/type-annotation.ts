/* eslint-disable */

// Types Basics(aqui ocorre a inferência de tipos)
let nome: string = 'Matheus'; // Qualquer tipo de strings: '' "" ``
let age: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let isAdult: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; //bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string[] = ['a', 'b'];

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